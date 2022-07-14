console.log("Hola, clase 4")

//INSTRUCCIONES REPETITIVAS QUE NO ESTÁN HECHAS CON UN BUCLE

console.log("La bomba explotará en: 10")
console.log("                     :  9")
console.log("                     :  8")
console.log("                     :  7")
console.log("                     :  6")
console.log("                     :  5")
console.log("                     :  4")
console.log("                     :  3")
console.log("                     :  2")
console.log("                     :  1")
console.log("                     BOOM")

// FOR

// for ( [inicialización]; [condición]; [incremento || decremento]) {
    //sentencias o instrucciones
//}

// for incremento

for (let i = 0; i <= 10; i++) {
    if (i === 10){
        console.log(`La bomba va a explotar en: ${i}`)
        //console.log(Boolean(i))
    } else if (i <= 9 && i !== 0){
        console.log(`                         : ${i}`)
    }
    else if( i === 0){
        console.log("BOOM")
    }       
}

// for decremento

for (let i = 10; i >= 0; i--) {
    if ( i === 10){
        console.log(`La bomba explotará en: ${i}`)
    }
    else if (i <= 9 && i !== 0){
        console.log(`                      : ${i}`)
    }
    else if (i === 0){
        console.log("BOOM")
    }
}

// FOR incremento modificado

for (let perrito = 0; perrito <= 10; perrito += 2){ //no es buena práctica nombrar a la variable como perrito
    console.log(perrito)
}

for (let i = 0; i <= 20; i = i + 3){
    console.log(i)
}

//  declaración de variables dentro de for

for (let i = 0; i<= 10; i++){
    for(let j = 0; j <= 10; j++){

    }
}

// for con break 
for (let i = 0; i < 10; i++) {
    
    if ( i === 5){
        break;
    }
    else if ( i !== 5){
        console.log(i)
    }
}

//for con continue

for (let i = 0; i < 10; i++){
    
    if ( i % 2 === 0){
        continue;
    }
    else {
        console.log(i)
    }
}

// for strings

// posición lógica A z u c e n a
//             i = 0 1 2 3 4 5 6 

let nombre = "Azucena";

console.log(nombre.length)

for (let i = 0; i <= nombre.length; i++){    
    console.log(nombre[i])
}

// while (similar a for)

let i = 0

while (i <= 5) {
    console.log(i)
    i++;
}

// do while false

let estado = false

do {
    console.log("Aunque sea una vez")
} while (estado)

// do while true

let acumuladora = ""
let j = 0

do {
    acumuladora = acumuladora + "#"
    console.log(acumuladora)
    j++;    
} while (j <= 10)


// for con acumuladora 

let acc = ""

for (let i = 0; i <= 10; i++){
    acc = acc + "!"
    console.log(acc)
}

// switch

const fruta = "pelota"

switch (fruta) {
    case "kiwi":
        console.log("NO, TENGO ALERGIA")
        break;
    case "frutilla":
    case "banana":
    case "pera":
    case "manzana":
        console.log("yuumi")
        break;
    default:
        console.log("eso no me gusta")
}

// Hacer un programa que reciba un dato, a través de un cuadro de diálogo, con la siguiente cadena: "Ingrese par, si desea saber qué números son pares o impar, de caso contrario."
//Una vez obtenido este dato, a través de un bucle tipo for, establecer un rango numérico, de su preferencia, que sea creciente. 
// Utilizando una sentencia condicional, evalúe con un if, tres posibles condiciones:
//1) Si el usuario ingresó "par", que se devuelva en consola todos los números pares entre dicho rango numérico.
//2) Si el usuario ingresó "impar", que se devuelva en consola todos los números impares entre dicho rango numérico.
//3) Si el usuario dió cancelar al cuadro de diálogo, que se muestre en consola la siguiente cadena: "No ingresó ninguna instrucción"

const respuesta = prompt("Ingrese par, si desea saber qué números son pares o impar, de caso contrario.")

for (let i = 0; i <= 100; i++){

    if ( respuesta === "par" && i % 2 === 0  ){
        console.log(`El número ${i} es par`)
    }
    else if ( respuesta === "impar" && i % 2 !== 0){
        console.log(`El número ${i} es impar`)
    }
    else if ( respuesta === null ){
        console.log("No ingresó ninguna instrucción coherente")
        break;
    }  

}

