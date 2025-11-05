// Ejercicio 1: Importar constantes
import { PI, IVA, DIAS_SEMANA, DESCUENTO } from './constantes.js';

// Ejercicio 2 y 3: Importar funciones matemáticas
import {
    sumar,
    restar,
    multiplicar,
    areaCirculo,
    calcularTotal,
    aplicarImpuestos,
    aplicarDescuento,
    aplicarDescuentoPorRol
  }  from './operaciones-matematicas.js';
  
  
  //-----------------------------
  /// Ejercicio 1: Constantes básicas
  console.log('\n Ejercicio 1: Constantes');
  
  const radio = 5;
  const area = PI * radio ** 2;
  console.log(`Área de un círculo con radio ${radio}: ${area.toFixed(2)}`);
  
  const precioBase = 100;
  const precioConIVA = precioBase * (1 + IVA);
  console.log(`Precio con IVA (${(IVA * 100).toFixed(0)}%) de $${precioBase}: $${precioConIVA.toFixed(2)}`);
  
  console.log(`El tercer día de la semana es: ${DIAS_SEMANA[2]}`);
  //-----------------------------
  
  
  // Ejercicio 2: Funciones matemáticas
  console.log('\n Ejercicio 2: Operaciones matemáticas');
  
  console.log(`5 + 3 = ${sumar(5, 3)}`);
  console.log(`10 - 4 = ${restar(10, 4)}`);
  console.log(`6 × 7 = ${multiplicar(6, 7)}`);
  console.log(`Área de círculo con radio 7: ${areaCirculo(7).toFixed(2)}`);
  
  // -----------------------------
  // Ejercicio 3: Calculadora de impuestos
  console.log('\n Ejercicio 3: Impuestos y descuentos');
  
  const cantidadProductos = 3;
  const precioUnitario = 100;
  const subtotal = calcularTotal(precioUnitario, cantidadProductos);
  console.log(`Subtotal (${cantidadProductos} productos a $${precioUnitario}): $${subtotal.toFixed(2)}`);
  
  const totalConIVA = aplicarImpuestos(subtotal);
  console.log(`Total con IVA (19%): $${totalConIVA.toFixed(2)}`);
  
  const totalConDescuento = aplicarDescuento(totalConIVA);
  console.log(`Total con descuento (10%): $${totalConDescuento.toFixed(2)}`);
  
  console.log(`Resultado final: $${totalConDescuento.toFixed(2)}`);
  
  
  //-----------------------------
  // Ejercicio 4: Gestión de usuarios
  
  // Ejercicio 4: Importar gestión de usuarios
  import { ROLES } from './usuariosConstantes.js';
  import { crearUsuario } from './usuarios.js';
  
  console.log('\n Ejercicio 4: Usuarios');
  
  const usuario1 = crearUsuario('Pedro', ROLES.ADMIN);
  const usuario2 = crearUsuario('Carlos', ROLES.CLIENTE);
  
  console.log('Usuario 1:', usuario1);
  console.log('Usuario 2:', usuario2);
  
  // -----------------------------
  // Ejercicio 5: Descuentos por rol
  console.log('\n Ejercicio 5: Descuentos por rol');
  
  const adminCompra = calcularTotal(25, 4);
  const adminConIVA = aplicarImpuestos(adminCompra);
  const adminFinal = aplicarDescuentoPorRol(adminConIVA, usuario1);
  console.log(`\n Admin (${usuario1.nombre}) compró 4 productos a $25`);
  console.log(`\n Rol (${usuario1.rol})`);
  console.log(`Subtotal: $${adminCompra.toFixed(2)}`);
  console.log(`Con IVA: $${adminConIVA.toFixed(2)}`);
  console.log(`Con descuento por rol: $${adminFinal.toFixed(2)}`);
  
  const clienteCompra = calcularTotal(50, 3);
  const clienteConIVA = aplicarImpuestos(clienteCompra);
  const clienteFinal = aplicarDescuentoPorRol(clienteConIVA, usuario2);
  console.log(`\n Cliente (${usuario2.nombre}) compró 3 productos a $50`);
  console.log(`\n Rol (${usuario2.rol})`);
  console.log(`Subtotal: $${clienteCompra.toFixed(2)}`);
  console.log(`Con IVA: $${clienteConIVA.toFixed(2)}`);
  console.log(`Con descuento por rol: $${clienteFinal.toFixed(2)}`);
  
  