import express from 'express';
import fs from 'fs';

const route = express.Router();

import { VerifiToken, ReceiveMessage } from '../controllers/whatsappController.js';

route.get('/verify', VerifiToken);
route.post('/message', ReceiveMessage);

export default route;