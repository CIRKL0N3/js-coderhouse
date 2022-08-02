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
        let edad = parseInt(document.querySelector("#edad").value);

        if(nombre.trim() == null || nombre.trim().length == 0) {
            alert("El nombre no es válido");
            return false;
        }

        if(apellidos.trim() == null || apellidos.trim().length == 0) {
            alert("Los apellidos no son válidos");
            return false;
        }

        if(edad == null || edad <= 0 || edad >= 100 || isNaN(edad)) {
            alert("La edad no es válida");
            return false;
        }

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