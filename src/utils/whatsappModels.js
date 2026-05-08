export function messageText(textResponse, numberPhone) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    preview_url: false,
    recipient_type: "individual",
    to: numberPhone,
    type: "text",
    text: {
      body: textResponse,
    },
  });

  return data;
}