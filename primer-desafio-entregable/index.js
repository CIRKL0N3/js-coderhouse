// Edgar Hernandez
// Condicionales

var edad = 25;
var nombre = 'Edgar Hernandez';

if (edad >= 18) {
    // Es mayor de edad
    console.log(nombre+" tiene "+edad+" años, es mayor de edad ");
    
    if(edad <= 33) {
        console.log("Todavia eres millenial");
    } else if(edad >=70) {
        console.log('Eres anciano');
    } else {
        console.log('Ya no eres millenial');
    }

} else {
    // Es menor de edad
    console.log(nombre+" tiene "+edad+" años, es MENOR de edad ");
}



// Simulador de una nota escolar

let nota = parseFloat(prompt("Ingrese la nota parcial: "));
let final = parseFloat(prompt("Ingrese la nota final: "));

let prom = (nota + final)/2;

if(prom >= 7) {
    alert("El promedio es mayor a 7, está APROBADO");
}
else {
    alert("Tu promedio es menor a 7, DESAPROBADO");
}


// Ejemplo de Bucle FOR (Conteo automático en consola del 0 a 100)

var numero = 100;

for(var i = 0; i <= numero; i++) {
    console.log("Vamos por el numero"+i);
}