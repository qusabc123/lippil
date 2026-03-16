const querystring = require("querystring");

function getEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing env: ${name}`);
  }
  return value;
}

async function addContact(email, source) {
  const apiKey = getEnv("BREVO_API_KEY");
  const listId = Number(getEnv("BREVO_LIST_ID"));
  const payload = {
    email,
    listIds: [listId],
    updateEnabled: true,
    attributes: {
      SOURCE: source || "website",
    },
  };
  const response = await fetch("https://api.brevo.com/v3/contacts", {
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
    const data = querystring.parse(event.body);
    const email = (data.email || "").trim();
    if (!email) {
      return { statusCode: 400, body: "Email required" };
    }
    await addContact(email, data.source);
    return {
      statusCode: 302,
      headers: { Location: "/thanks.html" },
      body: "",
    };
  } catch (error) {
    return { statusCode: 500, body: "Subscribe failed" };
  }
};
