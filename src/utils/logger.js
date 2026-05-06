import fs from 'fs';
import path from 'path';

// Ruta absoluta SIEMPRE correcta
const logFilePath = path.join(process.cwd(), 'logs.txt');

// Crear stream en modo append
const logStream = fs.createWriteStream(logFilePath, { flags: 'a' });

// Console personalizado
const logger = new console.Console(logStream);

// Función helper
export const logToFile = (data) => {
    logger.log(
        `[${new Date().toISOString()}] ${JSON.stringify(data, null, 2)}\n`
    );
};

// Para leer logs
export const readLogs = () => {
    if (!fs.existsSync(logFilePath)) return null;
    return fs.readFileSync(logFilePath, 'utf-8');
};