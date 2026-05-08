import { sendMessageWhatsapp } from "../services/whatsappService.js";
import { messageText } from "./whatsappModels.js";

export const processMessage = (textUser, numberPhone) => {
    textUser = textUser.toLowerCase();
    const models = []

    if (textUser.includes("hola") || textUser.includes("buenos dias") || textUser.includes("buenas tardes") || textUser.includes("buenas noches")) {
        let model = messageText("¡Hola! ¿En qué puedo ayudarte?", numberPhone);
        models.push(model);
    }else if (textUser.includes("gracias")) {
        let model = messageText("¡De nada! ¿En qué más puedo ayudarte?", numberPhone);
        models.push(model);
    }else if (textUser.includes("adios") || textUser.includes("adiós")  || textUser.includes("hasta luego") || textUser.includes("nos vemos")) {
        let model = messageText("¡Hasta luego! Gracias por escribirme", numberPhone);
        models.push(model);
    }else{
        let model = messageText("Lo siento, no entiendo tu mensaje. ¿Podrías reformularlo?", numberPhone);
        models.push(model);
    }




    models.forEach(model => {
        sendMessageWhatsapp(model);
    });
}