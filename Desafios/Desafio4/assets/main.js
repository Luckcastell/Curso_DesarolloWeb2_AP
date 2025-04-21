const nombreProducto1 = "Manzanas";
const precioUnitario1 = 100; 
const cantidadDeseada1 = prompt(`¿Cuántas ${nombreProducto1} quiere comprar?`);

const nombreProducto2 = "Bananas";
const precioUnitario2 = 150; 
const cantidadDeseada2 = prompt(`¿Cuántas ${nombreProducto2} quiere comprar?`);

const nombreProducto3 = "Peras";
const precioUnitario3 = 120; 
const cantidadDeseada3 = prompt(`¿Cuántas ${nombreProducto3} quiere comprar?`);

function sumarProductos(cantidadDeseada, precioUnitario, precio){
    if(cantidadDeseada >= 5){
        precio = precioUnitario * parseInt(cantidadDeseada);
        precio *= 0.1;
    }else{
        precio = precioUnitario * parseInt(cantidadDeseada);
    }
}

let precioManzanas;
sumarProductos(cantidadDeseada1, precioUnitario1, precioManzanas)
let precioBananas;
sumarProductos(cantidadDeseada2, precioUnitario2, precioBananas)
let precioPeras;
sumarProductos(cantidadDeseada3, precioUnitario3, precioPeras)

let precioTotal = precioManzanas + precioBananas + precioPeras;

alert(`Ticket verdulería:
${nombreProducto1}: ${cantidadDeseada1} = ${precioManzanas} 
${nombreProducto2}: ${cantidadDeseada2} = ${precioBananas} 
${nombreProducto3}: ${cantidadDeseada3} = ${precioPeras} 
Precio total: ${precioTotal}`);
