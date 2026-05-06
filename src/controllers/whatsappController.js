
import { logToFile, readLogs } from '../utils/logger.js';

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
        const body = req.body;

        // Validación segura (anti-crash)
        const value = body?.entry?.[0]?.changes?.[0]?.value;

        if (!value) {
            logToFile({ error: "Invalid body", body });
            return res.send("no data");
        }

        // Puede venir messages o statuses
        if (value.messages) {
            logToFile({ type: "messages", data: value.messages });
        } else {
            logToFile({ type: "other_event", data: value });
        }

        res.status(200).send("event received");

    } catch (error) {
        logToFile({ error: error.message });
        res.status(500).send("event doesnt received");
    }
};


// Endpoint para ver logs
export const GetLogs = (req, res) => {
    try {
        const logs = readLogs();

        if (!logs) {
            return res.send("No logs");
        }

        res.setHeader('Content-Type', 'text/plain');
        res.send(logs);

    } catch (error) {
        res.status(500).send("Error reading logs");
    }
};