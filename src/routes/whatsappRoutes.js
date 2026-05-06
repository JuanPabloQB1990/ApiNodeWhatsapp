import express from 'express';
import fs from 'fs';

const route = express.Router();

import { VerifiToken, ReceiveMessage } from '../controllers/whatsappController.js';

route.get('/', VerifiToken);
route.post('/', ReceiveMessage);

export default route;