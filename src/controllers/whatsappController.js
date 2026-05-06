export const VerifiToken = (req, res) => {
    //res.send('Token verified successfully!');
    try {
        const VERIFY_TOKEN = process.env.VERIFY_TOKEN;
        const token = req.query['hub.verify_token'];
        const challenge = req.body['hub.challenge'];
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
    res.send('Message received successfully!');
}