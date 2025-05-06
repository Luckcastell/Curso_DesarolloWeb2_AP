// Declarar array de objetos para productos
const productos = [
    { nombre: "Remera", precio: 5000 },
    { nombre: "Pantalon", precio: 8000 },
    { nombre: "Zapatillas", precio: 12000 }
];

let compras = [];

function saludar() {
    let nombre = prompt("Dime tu nombre:");
    alert(`Bienvenido ${nombre}`);
}

function comprarProducto() {
    // Construir la lista de productos para el prompt usando un for loop
    let listaProductos = "Elegí un producto:\n";
    for (const element of productos) {
        listaProductos += `- ${element.nombre} $${element.precio}\n`;
    }

    let productoElegido = prompt(listaProductos + "(Escribí el nombre exactamente como aparece)");

    // Validar producto elegido
    let producto = productos.find(p => p.nombre.toLowerCase() === productoElegido.toLowerCase());

    if (producto) {
        let cantidad;
        do {
            cantidad = prompt(`¿Cuántas ${producto.nombre} querés comprar? (Número entero positivo)`);
            cantidad = parseInt(cantidad);
        } while (isNaN(cantidad) || cantidad <= 0);

        let total = producto.precio * cantidad;
        compras.push({ producto: producto.nombre, cantidad: cantidad, total: total });

        alert(`La cantidad de ${producto.nombre} es ${cantidad} y el total es: $${total}`);

        repetir();
    } else {
        alert("El producto no existe. Por favor, intentá de nuevo.");
        comprarProducto();
    }
}

const repetir = () => {
    let repetir = prompt("¿Querés comprar otra cosa? (si/no)").toLowerCase();
    if (repetir === "si") {
        comprarProducto();
    } else if (repetir === "no") {
        mostrarResumen();
    } else {
        alert("Por favor, respondé 'si' o 'no'.");
        repetir();
    }
}

const mostrarResumen = () => {
    if (compras.length === 0) {
        alert("No realizaste ninguna compra.");
    } else {
        let resumen = "Resumen de tus compras:\n";
        let totalGeneral = 0;
        for (let i = 0; i < compras.length; i++) {
            resumen += `${compras[i].cantidad} x ${compras[i].producto} = $${compras[i].total}\n`;
            totalGeneral += compras[i].total;
        }
        resumen += `Total a pagar: $${totalGeneral}`;
        alert(resumen);
    }
    alert("Gracias por su compra");
}

saludar()
comprarProducto();