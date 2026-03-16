const querystring = require("querystring");

function getEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing env: ${name}`);
  }
  return value;
}

async function sendOwnerEmail(form) {
  const apiKey = getEnv("BREVO_API_KEY");
  const sender = getEnv("BREVO_SENDER_EMAIL");
  const owner = getEnv("OWNER_EMAIL");
  const payload = {
    sender: { email: sender, name: "锦鲤导航" },
    to: [{ email: owner }],
    subject: "支付确认提交",
    htmlContent: `
      <h2>支付确认</h2>
      <p><strong>联系邮箱：</strong>${form.email || "-"}</p>
      <p><strong>工具名称：</strong>${form.tool_name || "-"}</p>
      <p><strong>套餐：</strong>${form.plan || "-"}</p>
      <p><strong>金额：</strong>${form.amount || "-"}</p>
      <p><strong>支付方式：</strong>${form.method || "-"}</p>
      <p><strong>订单号/备注：</strong>${form.order_ref || "-"}</p>
      <p><strong>支付截图链接：</strong>${form.proof_url || "-"}</p>
    `,
  };
  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Brevo error: ${text}`);
  }
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  try {
    const form = querystring.parse(event.body);
    if (!form.email || !form.amount || !form.method || !form.plan) {
      return { statusCode: 400, body: "Missing required fields" };
    }
    await sendOwnerEmail(form);
    return {
      statusCode: 302,
      headers: { Location: "/thanks.html" },
      body: "",
    };
  } catch (error) {
    return { statusCode: 500, body: "Payment confirm failed" };
  }
};
