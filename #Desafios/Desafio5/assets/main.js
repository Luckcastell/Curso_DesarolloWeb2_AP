const productos = [
    { nombre: "Manzanas", stock: 10 },
    { nombre: "Peras", stock: 5 },
    { nombre: "Bananas", stock: 8 },
    { nombre: "Ananas", stock: 12 },
    { nombre: "Ciruelas", stock: 7 }
];

// Mostrar el contenido del array utilizando un "bucle for"
console.log("Productos disponibles:");
for (let i = 0; i < productos.length; i++) {
    console.log(`Nombre: ${productos[i].nombre}, Stock: ${productos[i].stock}K`);
}

// Función para obtener los numeros aleatorios
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Actualiza el stock simulando la venta de productos
console.log("\nSimulando ventas y actualizando stock:");
for (let i = 0; i < 3; i++) {  // Simula 3 ventas
    if (productos.length === 0) {
        console.log("No hay más productos para vender.");
        break;
    }
    // Selecciona un producto aleatorio para la venta
    const indexProducto = getRandomInt(0, productos.length - 1);
    const producto = productos[indexProducto];
    // Vende una cantidad aleatoria entre 1 y el stock
    const cantidadVendida = getRandomInt(1, producto.stock);
    producto.stock -= cantidadVendida;
    console.log(`Se vendió ${cantidadVendida}K de ${producto.nombre}`);
    if (producto.stock === 0) {
        // Elimina el producto si se agota el stock
        productos.splice(indexProducto, 1);
    }
    console.log("Stock restante después de la venta:");
    for (let ii = 0; ii < productos.length; ii++) {
        console.log(`Nombre: ${productos[ii].nombre}, Stock: ${productos[ii].stock}K`);
    }
    console.log("-----------------------------");
}
alert("se muestra en consola, que sino se veia raro")