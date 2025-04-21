const nombreProducto1 = "Manzanas";
const precioUnitario1 = 100; 
const cantidadDeseada1 = prompt(`¿Cuántas ${nombreProducto1} quiere comprar?`);

const nombreProducto2 = "Bananas";
const precioUnitario2 = 150; 
const cantidadDeseada2 = prompt(`¿Cuántas ${nombreProducto2} quiere comprar?`);

const nombreProducto3 = "Peras";
const precioUnitario3 = 120; 
const cantidadDeseada3 = prompt(`¿Cuántas ${nombreProducto3} quiere comprar?`);

let precioManzanas = precioUnitario1 * parseInt(cantidadDeseada1);
let precioBananas = precioUnitario2 * parseInt(cantidadDeseada2);
let precioPeras = precioUnitario3 * parseInt(cantidadDeseada3);

let precioTotal = precioManzanas + precioBananas + precioPeras;

alert(`Ticket verdulería:
${nombreProducto1}: ${cantidadDeseada1} = ${precioManzanas} 
${nombreProducto2}: ${cantidadDeseada2} = ${precioBananas} 
${nombreProducto3}: ${cantidadDeseada3} = ${precioPeras} 
Precio total: ${precioTotal}`);
