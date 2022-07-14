// RESOLUCIÓN EJERCICIO 7 

// 7) Utilice cuadros de dialogo que permitan al usuario ingresar dos números. Luego guardar la suma de estos valores.

// const numeroUno = prompt("Ingrese un número")
// const numeroDos = prompt("Ingrese otro número")

// console.log(typeof numeroUno, typeof numeroDos)

// OBJETOS ENVOLVENTES, MÉTODOS (NO SON VALORES PRIMITIVOS)

// Number() ---> me permite convertir un dato en un número
// const suma = Number(numeroUno) + Number(numeroDos);
// console.log(suma) // la suma no se concatena porque se convirtió el tipo de los números a number

// String() ---> objetos envolventes
// Boolean() ---> objetos envolventes 

// Valores primitivos = Booleanos

const esEstudiante = true;
const esProfesor = false;

// OPERADORES LÓGICOS ( &&, || Y !)

// AND LÓGICO - Y - &&

// JAMON(TRUE) && QUESO(TRUE) ---> TRUE

// OR LÓGICO - O - ||

// KOLYNO(FALSE) || COLGATE(TRUE)  ----> TRUE /SI SE CUMPLE ALGUNAS DE LAS CONDICIONES ES TRUE

// NOT LÓGICO ! --> vuele false un elemento en true y viceversa
//NOT LÓGICO !! --> vuelve true un elemento en false

// const valor = true;
// console.log(!valor)
// console.log(!!valor)

// // valores booleanos iniciales:

// // false ---> 0, -0, false, NaN, undefined, null, "", '', etc

// // true ---> string, number, objeto, array, [], etc

// console.log(Boolean(0)) // ejemplo de valor inicial en false
// console.log(Boolean("10")) // ejemplo de valor inicial en true

// // OPERADORES DE COMPARACION --> devuelven true o false, dependiendo el caso

// console.log(10 === 10) // igualdad estricta (valor y tipo) ----> true 
// console.log(10 === "10") // igualdad estricta (valor y tipo) ---> false

// console.log( 10 == 10) // comparacion (valor) ---> true
// console.log( 10 == "10") // comparacion (valor) ---> true
// console.log( 10 == "5") // comparacion (valor) --> false

// console.log (10 > 10) // false
// console.log(10 > 5) // true
// console.log(10 > 15) // false

// console.log(10 < 50) //true
// console.log(10 < 5) //false

// console.log( 10 >= 10) //true
// console.log(10 >= 5) // true

// console.log( 10 <= 10) // true
// console.log( 10 <= 5) //false

// console.log(10 !== "10") // desigualdad estricta ---> false
// console.log( 10 !== 5) // ---> true

// console.log( 10 != "10")// desigualdad ---> false 
// console.log( 10 != 5) //

// Sentencia condicional --> if, else if, else

// const edadDelUsuario = prompt("Ingrese su edad")

// -si- (se cumple esta condición) {
//     -entonces- se ejecuta este código
// }

// const body = document.querySelector("body")
// body.style.display = "none"

// if ( edadDelUsuario >= 18 ) {  
//     body.style.display = "block"
// }  else {
//     alert("No podés ingresar")
// }

// Hacer un programa que pida al usuario una letra. Si esa letra es vocal, devolver el mensaje "Es vocal". De lo contrario, "No es vocal".

// const letra = prompt("Ingrese una letra")

// if (letra === "a" || letra === "A") {
//     console.log("Es una vocal")
// }
// else if (letra === "e" || letra === "E") {
//     console.log("Es una vocal")
// }
// else if (letra === "i" || letra === "I") {
//     console.log("Es una vocal")
// }
// else if (letra === "o" || letra === "O"){
//     console.log("Es una vocal")
// }
// else if (letra === "u" || letra === "U"){
//     console.log("Es una vocal")
// }
// else {
//     console.log("Eso no es una vocal")
// }

// versión más corta

const agregueUnaLetra = "A"

if ( agregueUnaLetra.toLowerCase() === "a" || agregueUnaLetra.toLowerCase() === "e" || agregueUnaLetra.toLowerCase() === "i" || agregueUnaLetra.toLowerCase() === "o" ||agregueUnaLetra.toLowerCase() === "u") {
    console.log("Esto es una vocal")
} else {
    console.log("esto no es una vocal")
}


// TAREA

// 1) Crea una variable con el nombre mostrarMensaje y dale un valor true o false. Evalúe con una sentencia condicional su expresión lógica. Si es true, genere una alerta con la siguiente frase: "Bienvenido a mi web", en caso contrario, muestre un false en consola.
// 2) Evalúe, mediante una sentencia condicional, si su nombre es estrictamente igual al de su profesora. Muestra en consola un true, si así se da el caso, de lo contrario mueste un false en la consola.
// 3) Mediante el uso de cuadros de diálogos, pedir al usuario que ingrese dos números. Luego utilizando una sentencia condicional, devuelva una alerta con el mayor de ellos, de lo contrario, devuelva un false en la consola.
