import { PI, IVA } from './constantes.js';

const radio = 5;
const areaCirculo = PI * (radio ** 2);
console.log(`Área del círculo con radio ${radio}: ${areaCirculo}`);

const precio = 100;
const precioConIVA = precio * (1 + IVA);
console.log(`Precio con IVA: ${precioConIVA}`);