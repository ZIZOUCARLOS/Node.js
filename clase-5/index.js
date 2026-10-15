import { fileURLToPath } from 'url';
import path from 'path';
// Obtener el directorio actual
const __filename = fileURLToPath(import.meta.url);
console.log('Ruta absoluta del archivo:', __filename);
const __dirname = path.dirname(__filename);
console.log('Ruta absoluta del directorio:', __dirname);
console.log('Ruta absoluta:', __dirname);
