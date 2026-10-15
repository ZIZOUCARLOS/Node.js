const flotaAutomoviles = [
    { marca: 'Toyota', modelo: 'Corolla', año: 2019, color: 'Blanco' },
    { marca: 'Ford', modelo: 'Focus', año: 2017, color: 'Negro' },
    { marca: 'Honda', modelo: 'Civic', año: 2020, color: 'Gris' },
    { marca: 'Chevrolet', modelo: 'Cruze', año: 2016, color: 'Rojo' },
    { marca: 'Volkswagen', modelo: 'Onix', año: 2021, color: 'Azul' },
    { marca: 'Nissan', modelo: 'Sentra', año: 2018, color: 'Blanco' },
    { marca: 'Peugeot', modelo: 'Vento', año: 2022, color: 'Plata' },
    { marca: 'Hyundai', modelo: 'Accord', año: 2015, color: 'Negro' },
    { marca: 'Kia', modelo: 'Elantra', año: 2023, color: 'Rojo' },
    { marca: 'Mazda', modelo: 'Cerato', año: 2019, color: 'Blanco' }
];

console.log("--- MISIÓN 1: Automóviles posteriores a 2018 ---")


flotaAutomoviles
    .filter((auto) => auto.año > 2018)
    .forEach((auto) => {
        console.log(`- ${auto.marca} ${auto.modelo} (${auto.año}) - ${auto.color}`);
    });

    console.log("\n--- MISIÓN 2: Conteo por color mediante Destructuring ---");

// Función pura: Recibe datos, no muta variables externas.
// Se aplica Destructuring ({ color }) directamente en los parámetros del filter.
const contarAutosPorColor = (flota, colorBuscado) => {
    // Filtramos obteniendo solo la propiedad 'color' de cada objeto
    const autosFiltrados = flota.filter(({ color }) => color === colorBuscado);
    return autosFiltrados.length;
};

// Pruebas de la función (Validación)
const colorAAnalizar = 'Blanco';
const totalColor = contarAutosPorColor(flotaAutomoviles, colorAAnalizar);

console.log(`Reporte TechLab: Se encontraron ${totalColor} automóviles de color ${colorAAnalizar}.`);