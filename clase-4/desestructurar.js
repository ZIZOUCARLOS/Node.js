const numeros = [1, 2, 3];
const [primero, segundo, tercero] = numeros;
    console.log(primero); // 1
    console.log(segundo); // 2
    console.log(tercero); // 3

const persona = {
    nombre: "Ana",
    edad: 25,
};
const { nombre, edad } = persona;
console.log(nombre); // Ana

const { nombre: nombrePersona } = persona;
console.log(nombrePersona); // Ana