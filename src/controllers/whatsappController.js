import { processMessage } from "../utils/processMessage.js";

export const verifiToken = (req, res) => {

    try {
        const VERIFY_TOKEN = process.env.VERIFY_TOKEN;
        const token = req.query['hub.verify_token'];
        const challenge = req.query['hub.challenge'];
        if(token === VERIFY_TOKEN && challenge != null && token != null) {
            res.status(200).send(challenge);
        }else{
            res.status(403).json({ error: 'Token verification failed.' });
        }
    } catch (error) {
        res.status(400).json({ error: 'An error occurred while verifying the token.' });
    }
}

export const receiveMessage = (req, res) => {
    try {
        
        const entry = req.body['entry'][0];
        const changes = entry['changes'][0];
        const value = changes['value'];
        const messageObject = value['messages'];

        if(typeof messageObject != "undefined") {
            const messages = messageObject[0];
            const phoneNumber = messages["from"];
            const text = getTextMessage(messages);
            
            if (text != "") {
                processMessage(text, phoneNumber);
            }
        }

        res.send("event received");
    } catch (error) {
        console.log(error);
        
        res.send("event doesnt received");
    }
}

function getTextMessage(messages) {

    let text = ""
    const typeMessage = messages["type"];

    if(typeMessage === "text"){
        text = messages["text"]["body"];
    }
    else if(typeMessage === "interactive"){

        const interactiveObject = messages["interactive"];
        const interactiveType = interactiveObject["type"];
        console.log(interactiveType);
        
        if(interactiveType === "button_reply"){
            text = interactiveObject["button_reply"]["title"];
        }
        else if(interactiveType === "list_reply"){
            text = interactiveObject["list_reply"]["title"];
        }else{
            text = "unknown message type";
        }
    }else {
        text = "unknown message type";
    }

    return text;
}