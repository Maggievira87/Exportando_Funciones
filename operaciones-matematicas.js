// Importar constantes necesarias
import { PI, IVA, DESCUENTO } from './constantes.js';

// Ejercicio 2: Funciones matemáticas básicas
export function sumar(a, b) {
  return a + b;
}

export function restar(a, b) {
  return a - b;
}

export function multiplicar(a, b) {
  return a * b;
}

export function areaCirculo(radio) {
  return PI * radio ** 2;
}

// Ejercicio 3: Funciones de impuestos y descuentos
export function calcularTotal(precio, cantidad) {
  return precio * cantidad;
}

export function aplicarImpuestos(total) {
  return total * (1 + IVA);
}

export function aplicarDescuento(total) {
  return total * (1 - DESCUENTO);
}
console.log("Descuento aplicado a $100:", aplicarDescuento(100)); // debería mostrar 90
