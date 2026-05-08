import express from 'express';
import { verifiToken, receiveMessage } from '../controllers/whatsappController.js';

const route = express.Router();

route.get('/', verifiToken);
route.post('/', receiveMessage);

export default route;