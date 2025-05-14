const baseDeDatos = [
    {id: 1, nombre: "Prisma", autor: "Belén Sancho", precio: 34000, img: "../public/Images/Prisma.png", alt: "Prisma"},
    {id: 2, nombre: "Corazones de cristal", autor: "Nini Ríos", precio: 24900, img: "../public/images/Corazones.png", alt: "Corazones de cristal"},
    {id: 3, nombre: "¿Confirmamos? Un fake dating en directo", autor: "Agus Drimm Pitch", precio: 25500, img: "../public/Images/Confirmamos.png", alt: "¿Confirmamos? Un fake dating en directo"},
    {id: 4, nombre: "Un pacto electrizante", autor: "Malena Hehn", precio: 29700, img: "../public/Images/Electrizante.png", alt: "Un pacto electrizante"},
    {id: 5, nombre: "Retratos de instantes perfectos", autor: "Sol Chiara", precio: 33300, img: "../public/Images/Retratos.png", alt: "Retratos de instantes perfectos"},
    {id: 6, nombre: "Prisma", autor: "Belén Sancho", precio: 34000, img: "../public/Images/Prisma.png", alt: "Prisma"},
    {id: 7, nombre: "Corazones de cristal", autor: "Nini Ríos", precio: 24900, img: "../public/images/Corazones.png", alt: "Corazones de cristal"},
    {id: 8, nombre: "¿Confirmamos? Un fake dating en directo", autor: "Agus Drimm Pitch", precio: 25500, img: "../public/Images/Confirmamos.png", alt: "¿Confirmamos? Un fake dating en directo"},
    {id: 9, nombre: "Un pacto electrizante", autor: "Malena Hehn", precio: 29700, img: "../public/Images/Electrizante.png", alt: "Un pacto electrizante"},
    {id: 10, nombre: "Retratos de instantes perfectos", autor: "Sol Chiara", precio: 33300, img: "../public/Images/Retratos.png", alt: "Retratos de instantes perfectos"},
    {id: 11, nombre: "Prisma", autor: "Belén Sancho", precio: 34000, img: "../public/Images/Prisma.png", alt: "Prisma"},
    {id: 12, nombre: "Corazones de cristal", autor: "Nini Ríos", precio: 24900, img: "../public/images/Corazones.png", alt: "Corazones de cristal"},
    {id: 13, nombre: "¿Confirmamos? Un fake dating en directo", autor: "Agus Drimm Pitch", precio: 25500, img: "../public/Images/Confirmamos.png", alt: "¿Confirmamos? Un fake dating en directo"},
    {id: 14, nombre: "Un pacto electrizante", autor: "Malena Hehn", precio: 29700, img: "../public/Images/Electrizante.png", alt: "Un pacto electrizante"},
    {id: 15, nombre: "Retratos de instantes perfectos", autor: "Sol Chiara", precio: 33300, img: "../public/Images/Retratos.png", alt: "Retratos de instantes perfectos"},
];

const productosContainer = document.getElementById('productos-container');
baseDeDatos.forEach(producto => {
    const articuloProducto = document.createElement('article');
    articuloProducto.classList.add('producto');
    articuloProducto.innerHTML = `
        <img src="${producto.img}" alt="${producto.alt}">
        <h2 class="producto-titulo">${producto.nombre}</h2>
        <h2 class="producto-subtitulo">${producto.autor}</h2>
        <p class="producto-precio">$${producto.precio.toLocaleString()}</p>
        <button class="btn" onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio})">Agregar al Carrito</button>
    `;
    productosContainer.appendChild(articuloProducto);
});