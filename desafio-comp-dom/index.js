'use strict'

window.addEventListener('load', function() {
    console.log("DOM cargado!!");

    let formulario = document.querySelector("#formulario");
    let box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener('submit', function() {
        console.log("Evento submit capturado");

        let nombre = document.querySelector("#nombre").value;
        let apellidos = document.querySelector("#apellidos").value;
        let edad = document.querySelector("#edad").value;

        box_dashed.style.display = "block";

        const datos_usuario = [nombre, apellidos, edad];

        let indice;
        for(indice in datos_usuario) {
            let parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);
        }

    });

});