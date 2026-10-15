// ==========================================
// PREPARACIÓN DE DATOS
// ==========================================
// 1. Creamos el array con 10 autos
const autos = [
    { marca: 'Ford', modelo: 'Fiesta', año: 2015, color: 'Azul' },
    { marca: 'Fiat', modelo: 'Palio', año: 2019, color: 'Rojo' },
    { marca: 'Toyota', modelo: 'Corolla', año: 2020, color: 'Blanco' },
    { marca: 'Honda', modelo: 'Civic', año: 2017, color: 'Negro' },
    { marca: 'Chevrolet', modelo: 'Cruze', año: 2021, color: 'Blanco' },
    { marca: 'Peugeot', modelo: '208', año: 2016, color: 'Gris' },
    { marca: 'Renault', modelo: 'Clio', año: 2022, color: 'Rojo' },
    { marca: 'Volkswagen', modelo: 'Golf', año: 2018, color: 'Azul' },
    { marca: 'Nissan', modelo: 'Sentra', año: 2023, color: 'Negro' },
    { marca: 'Mazda', modelo: '3', año: 2019, color: 'Blanco' }
];

// ==========================================
// MISIÓN 1: Filtrar autos mayores a 2018
// ==========================================
console.log("--- MISIÓN 1: Autos más nuevos que 2018 ---");

//  2 - Usa un método de array para recorrer la lista e imprime por consola todos los datos
// de los automóviles cuyo año sea mayor a 2018.

const autosNuevos = autos.filter(auto => auto.año > 2018);
console.log(autosNuevos);

// ______________________________________Misión 2:______________________________________
// 1. Crea una función que recorra el array de automóviles.
// 2. Usa destructuring dentro de la función para obtener el color de cada automóvil.
// 3. La función debe aceptar un color como parámetro y devolver por consola cuántos
// automóviles tienen ese color.

function recorrerAutos(autos, colorBuscado = null) {
    if (!colorBuscado) {
        console.log('Debe indicar un color.');
        return;
    }

    let cantidad = 0;

    autos.forEach(auto => {
        const { color } = auto;
        if (color.toLowerCase() === colorBuscado.toLowerCase()) {
            cantidad++;
        }
    });

    console.log(`Hay ${cantidad} automóviles de color ${colorBuscado}.`);
}

recorrerAutos(autos, 'rojo');