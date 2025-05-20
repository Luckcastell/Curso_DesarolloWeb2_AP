let carrito = [];
let totalCarrito = 0;

function agregarAlCarrito(nombre, precio, descontado) {
    let precioFinal = precio - descontado;
    totalCarrito += precioFinal;
    document.getElementById('totalCarrito').innerText = totalCarrito.toLocaleString();
    carrito.push({nombre, precioFinal, precio, descontado});
    mostrarContenidoCarrito();
    abrirCarrito();
}

function mostrarContenidoCarrito() {
    const contenidoCarrito = document.getElementById('contenidoCarrito');
    contenidoCarrito.innerHTML = '';
    carrito.forEach(item => {
        if(item.descontado > 0){
            const itemCarrito = document.createElement('div');
            itemCarrito.classList.add('carrito-item');
            itemCarrito.innerHTML = `
                <h3>${item.nombre}</h3>
                <p>$${item.precio} - $${item.descontado}</p>
            `;
            contenidoCarrito.appendChild(itemCarrito);
        }
        else{
            const itemCarrito = document.createElement('div');
            itemCarrito.classList.add('carrito-item');
            itemCarrito.innerHTML = `
                <h3>${item.nombre}</h3>
                <p>$${item.precioFinal}</p>
            `;
            contenidoCarrito.appendChild(itemCarrito);
            }
    });
    
}

function abrirCarrito() {
    document.getElementById('modalCarrito').style.display = 'flex';
}

function cerrarCarrito() {
    document.getElementById('modalCarrito').style.display = 'none';
}

function BorrarTodoElCarrito() {
    carrito = [];
    totalCarrito = 0;
    document.getElementById('totalCarrito').innerText = totalCarrito.toLocaleString();
    mostrarContenidoCarrito();
    cerrarCarrito();
}

function finalizarCompra() {
    alert('Compra finalizada. ¡Gracias por su compra!');
    BorrarTodoElCarrito();
}