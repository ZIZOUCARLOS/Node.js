const a = [1, 2];
const b = [3, 4];
const combinado = [...a, ...b];
console.log(combinado); // [1, 2, 3, 4]     

const original1 = [1, 2, 3];
const copia1 = [...original];
console.log(copia1); // [1, 2, 3]

/* Combinar 2 o más objetos */
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinado2 = { ...obj1, ...obj2 };
console.log(combinado2); // { a: 1, b: 2, c: 3, d: 4 }
/* Clonar o copiar un objeto */
const original2 = { a: 1, b: 2 };
const copia2 = { ...original2 };
console.log(copia2); // { a: 1, b: 2 }