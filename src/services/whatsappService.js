import { config } from "dotenv";
import { sampleText } from "../utils/sampleModels.js";
config();

export async function sendMessageWhatsapp(data) {

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