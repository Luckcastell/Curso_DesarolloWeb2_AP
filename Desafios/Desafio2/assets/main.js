const nombreProducto1 = "Manzana/s";
const precioUnitario1 = "100";
const cantidadDeseada1 = prompt("¿Cuantas manzanas quiere compar?");

const nombreProducto2 = "Banana/s";
const precioUnitario2 = "150";
const cantidadDeseada2 = prompt("¿Cuantas bananas quiere compar?");

const nombreProducto3 = "Pera/s";
const precioUnitario3 = "120";
const cantidadDeseada3 = prompt("¿Cuantas peras quiere compar?");

let precioManzanas = parseInt(precioUnitario1) * parseInt(cantidadDeseada1);
let precioBananas = parseInt(precioUnitario2) * parseInt(cantidadDeseada2);
let precioPeras = parseInt(precioUnitario3) * parseInt(cantidadDeseada3);

let precioTotal = precioManzanas + precioBananas + precioPeras;

alert(`Ticket verduleria:
    ${nombreProducto1}: ${cantidadDeseada1} = ${precioManzanas} 
    ${nombreProducto2}: ${cantidadDeseada2} = ${precioBananas} 
    ${nombreProducto3}: ${cantidadDeseada3} = ${precioPeras} 
    Precio total: ${precioTotal}`);
