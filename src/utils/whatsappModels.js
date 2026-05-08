export function messageText(textResponse, numberPhone) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    preview_url: true,
    recipient_type: "individual",
    to: numberPhone,
    type: "text",
    text: {
      body: textResponse,
    },
  });

  return data;
}

export function messageList(numberPhone) {
  const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": numberPhone,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "✅ Tengo estas opciones"
            },
            "footer": {
                "text": "Selecciona una de las opciones para poder atenderte"
            },
            "action": {
                "button": "Ver opciones",
                "sections": [
                    {
                        "title": "Compra y vende productos",
                        "rows": [
                            {
                                "id": "main-comprar",
                                "title": "Comprar",
                                "description": "Compra los mejores productos para tu hogar"
                            },
                            {
                                "id": "main-vender",
                                "title": "Vender",
                                "description": "Vende tus productos"
                            }
                        ]
                    },
                    {
                        "title": "📍Centro de atención",
                        "rows": [
                            {
                                "id": "main-agencia",
                                "title": "Agencia",
                                "description": "Puedes visitar nuestra agencia."
                            },
                            {
                                "id": "main-contacto",
                                "title": "Centro de contacto",
                                "description": "Te atenderá uno de nuestro agentes."
                            }
                        ]
                    }
                ]
            }
        }
    });

  return data;
}

export function messageComprar(numberPhone) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: numberPhone,
    type: "interactive",
    interactive: {
      type: "button",
      body: {
        text: "¿Que producto quieres comprar?",
      },
      footer: {
        text: "Tenemos los siguientes productos disponibles",
      },
      action: {
        buttons: [
          {
            type: "reply",
            reply: {
              id: "portatil-01",
              title: "Portatil Lenovo",
            },
          },
          {
            type: "reply",
            reply: {
              id: "portatil-02",
              title: "Portatil Dell",
            },
          },
          {
            type: "reply",
            reply: {
              id: "computador-desktop-03",
              title: "Computador Desktop",
            },
          }
        ],
      },
    },
  });

  return data;
}