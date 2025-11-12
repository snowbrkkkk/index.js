export default {
  async fetch(request) {
    try {
      const payload = await request.json();

      const apiKey = "a17f2f94-e3df-46c7-8689-0cf40e1a83d9"; 
      const webhookUrl =
        "https://api.junkie-development.de/api/v1/webhooks/execute/14186ac4-cab3-440d-8034-78a36055af4a";

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + apiKey,
          "User-Agent": "Mozilla/5.0"
        },
        body: JSON.stringify(payload)
      });

      const text = await response.text();

      return new Response(text, {
        status: response.status,
        headers: { "Content-Type": "application/json" }
      });

    } catch (err) {
      return new Response(
        JSON.stringify({ error: "Worker error", detail: err.message }),
        { status: 500 }
      );
    }
  }
};
