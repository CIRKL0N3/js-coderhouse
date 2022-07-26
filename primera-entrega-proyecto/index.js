'use strict'

function mostrarArray(elementos, textoCustom = "") {
    document.write("<h1>Contenido del array "+textoCustom+"</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<li>"+elemento+"</li>");
});
    document.write("</ul>");
}

// 1. Pedir 6 números
let numeros = new Array(6);

for(let i = 0; i <= 5; i++) {
    numeros[i] = parseInt(prompt("Introduce un número (6 en total)", 0));
}

// 2. Mostrar en el cuerpo de la página
mostrarArray(numeros);

// 2. Mostrar array en consola
console.log(numeros);

// 3. Ordenar y mostrar
numeros.sort(function(a, b) {
    return a-b
});
mostrarArray(numeros, 'ordenado');

// Invertir y mostrar
numeros.reverse();
mostrarArray(numeros, 'invertido');

// Cuántos elementos tiene un array
document.write("<h1>El array tiene: "+numeros.length+" elementos");

// Búsqueda

let busqueda = parseInt(prompt("Busca un número", 0));

let posicion = numeros.findIndex( numero => numero == busqueda);

if(posicion && posicion != -1) {
    document.write("<hr/><h1>ENCONTRADO</h1>");
    document.write("<h1>Posición de la búsqueda: "+posicion+"</h1><hr/>");
}
else{
    document.write("<hr/><h1>NO ENCONTRADO</h1><hr/>");
}
