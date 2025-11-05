import { PI, IVA, DIAS_SEMANA, DESCUENTO } from './constantes.js';

import { sumar, restar, multiplicar, areaCirculo, calcularTotal, aplicarImpuestos, aplicarDescuento, aplicarDescuentoPorRol } from './operaciones-matematicas.js';

import { ROLES } from './usuariosConstantes.js';

import { crearUsuario } from './usuarios.js';

const radio = 5;
const areaCirculo = PI * (radio ** 2);
console.log(`El área del círculo con radio ${radio} es: ${areaCirculo}`);

const precioBase = 100;
const precioConIVA = precioBase + (precioBase * IVA);
console.log(`El precio con IVA es: ${precioConIVA}`);

console.log(`El tercer día de la semana es: ${DIAS_SEMANA[2]}`);