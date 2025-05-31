// let h1 = document.getElementById("h1")
let titulo = document.getElementById("titulo");
titulo.textContent = "asdad";
if(titulo.textContent == "otra cosa") {
    titulo.style.color = "red";
} else {
    titulo.style.color = "green";
}

let lista = document.getElementsByClassName("link");
lista[2].textContent = "contacto"

let h2 = document.getElementsByTagName("h2");


let h1 = document.querySelector("#titulo");
let lista2 = document.querySelectorAll(".link");
let h22 = document.querySelector("h2");


let linkeo = document.getElementById("linkeo");

linkeo.setAttribute("href","../../../pages/tienda.html")

console.log(linkeo.getAttribute("href"))

let stock = 0;

let img = document.querySelector("#imagen")
if(stock == 0) {
    img.setAttribute("src","https://sincodigotucuman.com/wp-content/uploads/2023/08/sinstock.jpg")
} else {
    img.setAttribute("src","https://www.svgrepo.com/show/422038/product.svg")
}

// console.dir(document)