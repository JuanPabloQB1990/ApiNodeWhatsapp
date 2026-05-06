import fs from 'fs';
const myConsole = new console.Console(fs.createWriteStream('./logs.txt'));

export const VerifiToken = (req, res) => {
    //res.send('Token verified successfully!');
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

export const ReceiveMessage = (req, res) => {
    try {
        const entry = req.body['entry'][0];
        const changes = entry['changes'][0];
        const value = changes['value'];
        const messages = value['messages'];
        console.log(JSON.stringify(messages, null, 2));
        
        res.send("event received");
    } catch (error) {
        console.log(error);
        
        res.send("event doesnt received");
    }
}