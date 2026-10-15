// const fs = require('fs');
// // Indicamos la ruta en el primer parámetro
// fs.readFile('c:/user-pc/node-project/data/ejemplo.txt', 'utf8',
// (err, data) => {
//     if (err) {
//     console.error('Error al leer el archivo:', err);
//     return;
// }   
//     console.log('Contenido del archivo', data);
// })

const path = require('path');
const fs = require('fs');
console.log(__dirname)
/* Obtenemos la ruta absoluta al archivo ejemplo.txt
utilizando __dirname */
const filePath = path.join(__dirname, 'data', 'ejemplo.txt');
console.log(filePath)
// Leemos el archivo ejemplo.txt
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
    console.error('Error al leer el archivo:', err);
    return;
    }
    console.log('Contenido del archivo', data);
})