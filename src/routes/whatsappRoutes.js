import express from 'express';
import fs from 'fs';

const route = express.Router();

import { VerifiToken, ReceiveMessage, GetLogs } from '../controllers/whatsappController.js';

route.get('/verify', VerifiToken);
route.post('/message', ReceiveMessage);
// Ver logs
route.get('/logs', GetLogs);

export default route;