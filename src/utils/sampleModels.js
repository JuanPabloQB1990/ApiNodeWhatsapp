export function sampleText(textResponse, numberPhone) {
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

export function sampleImage(numberPhone) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: numberPhone,
    type: "image",
    image: {
      link: "https://i.pinimg.com/736x/cd/62/b8/cd62b825f8b63576802932b47145b15e.jpg",
    },
  });

  return data;
}

export function sampleLink(numberPhone) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: numberPhone,
    type: "text",
    text: {
      preview_url: true,
      body: "visita https://www.youtube.com/watch?v=wO0A0XcWy88&list=RDwO0A0XcWy88&start_radio=1 para inspirarte",
    },
  });

  return data;
}

export function sampleAudio(numberPhone){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": numberPhone,
        "type": "audio",  
        "audio": {
            "link": "https://file-examples.com/storage/fe7d3a0d44631509da1f416/2017/11/file_example_MP3_700KB.mp3"
        }        
    });
    return data;
}

export function sampleVideo(numberPhone){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": numberPhone,
        "type": "video",  
        "video": {
            "link": "https://file-examples.com/storage/fe7d3a0d44631509da1f416/2017/04/file_example_MP4_480_1_5MG.mp4"
        }        
    });
    return data;
}

export function sampleDocument(numberPhone){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": numberPhone,
        "type": "document",  
        "document": {
            "link": "https://icseindia.org/document/sample.pdf"
        }        
    });
    return data;
}

export function sampleButtons(numberPhone) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: numberPhone,
    type: "interactive",
    interactive: {
      type: "button",
      body: {
        text: "¿confirmas tu resgistro?",
      },
      footer: {
        text: "gracias...",
      },
      action: {
        buttons: [
          {
            type: "reply",
            reply: {
              id: "001",
              title: "✅ si",
            },
          },
          {
            type: "reply",
            reply: {
              id: "002",
              title: "❌ no",
            },
          },
        ],
      },
    },
  });

  return data;
}

export function sampleList(numberPhone) {
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

export function sampleLocation(numberPhone) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: numberPhone,
    type: "location", 
    location: 
        { 
            latitude: "6.285912157503673",
            longitude: "-75.6037437819758",
            name: "Mi Casa",
            address: "cll 65aa No 97 - 43"
        } 
  });

  return data;
}
