import express from 'express';
import { VerifiToken, ReceiveMessage } from '../controllers/whatsappController.js';

const route = express.Router();


route.get('/', VerifiToken);
route.post('/', ReceiveMessage);

export default route;