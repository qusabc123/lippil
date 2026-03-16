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
    subject: "新工具提交",
    htmlContent: `
      <h2>新工具提交</h2>
      <p><strong>工具名称：</strong>${form.name || "-"}</p>
      <p><strong>官网：</strong>${form.url || "-"}</p>
      <p><strong>价格：</strong>${form.pricing || "-"}</p>
      <p><strong>分类：</strong>${form.category || "-"}</p>
      <p><strong>套餐：</strong>${form.plan || "-"}</p>
      <p><strong>联系邮箱：</strong>${form.email || "-"}</p>
      <p><strong>支付备注：</strong>${form.payment_ref || "-"}</p>
      <p><strong>支付截图链接：</strong>${form.payment_proof || "-"}</p>
      <p><strong>描述：</strong>${form.description || "-"}</p>
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
    if (!form.name || !form.url || !form.email) {
      return { statusCode: 400, body: "Missing required fields" };
    }
    await sendOwnerEmail(form);
    return {
      statusCode: 302,
      headers: { Location: "/thanks.html" },
      body: "",
    };
  } catch (error) {
    return { statusCode: 500, body: "Submit failed" };
  }
};
