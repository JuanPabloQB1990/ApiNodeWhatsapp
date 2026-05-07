
import { config } from "dotenv";
config();

export async function SendMessageWhatsapp(textResponse, numberPhone) {
    const data = JSON.stringify({ 
        "messaging_product": "whatsapp", 
        "preview_url": false,
        "recipient_type": "individual",
        "to": numberPhone, 
        "type": "text", 
        "text": 
            { 
                "body": textResponse
            } 
        })

    const options = {
        hostname: 'graph.facebook.com',
        path: `/v25.0/${process.env.PHONE_ID}/messages`,
        method: 'POST',
        body: data,
        headers: {
            'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`,
            'Content-Type': 'application/json'
        }
    }

    try {
        const response = await fetch(`https://${options.hostname}${options.path}`, {
            method: options.method,
            headers: options.headers,
            body: options.body
        });

        const responseData = await response.json();
        console.log(responseData);
    } catch (error) {
        console.error('Error sending message:', error);
    }
}    