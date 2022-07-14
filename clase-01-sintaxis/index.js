// case-sensitive
// se comenta con // y con /* */
// palabras reservadas: const, let, var (no usamos var para declarar variables)
// ;
// camel-case


// VARIABLES

// Declaración de variable let

let nombre

// Asignación de valor

nombre = "Mitchell"

console.log(nombre)

// Reasignación del valor

nombre = "Malena"

console.log(nombre)

// Declaración de variable con const

const edad = 20

console.log(edad)

// las variables hechas con const NO PUEDE REASIGNARSE

// edad = 25

// console.log(edad)

// Valores primitivos

// string --> Cadenas caracteres

const persona = 'Jorge' // Comillas simples
const persona2 = "Julio" // Comillas dobles
const persona3 = `Pablo` // Backticks

console.log(typeof persona)
console.log(typeof persona2)
console.log(typeof persona3)

// Errores comunes al asignar string

// const fruta = banana

// console.log(fruta)

// Uso de backticks

console.log(`Hola ${persona}, ¿Cómo estás?`)
console.log("Hola ${persona2}, cómo estás?")
console.log(typeof "-_..:;p2 1000")

const fruta1 = "uva"
const fruta3 = "naranja"
console.log(fruta1 + " " + fruta3)
"9" === 9
console.log("9" + 9)

// Number

const laEdadDelSeñor = 50;
const laEdadDelNiño = 5.5;

//suma

console.log(50 + 50)

//resta

console.log(50 - 10)

//multiplicación

console.log(50 * 5)

//division

console.log( 10 / 2)

// resto

console.log(10 % 2)

// CUADROS DE DIÁLOGO - modales

// alert(), recibe strings

// alert(`Me gustá la ${fruta1} y ${fruta3}`)
// alert("Holas")
// alert('jeje')

// prompt(), recibe strings

// prompt("Hola, ingrese su edad:")

// uso de variable para captar el dato de prompt

// const gustoDeHelado = prompt("Ingrese su gusto de helado")

// console.log(gustoDeHelado)

// Tarea:
// Basándonos en el material de clase, realizar los siguientes ejercicios:

// 1) Hacer una variable llamada nombre, que contenga un string. Luego visualizar en consola ese valor.
// 2) Hacer una variable edad, que contenga un number. Luego visualizar en consola ese valor con el siguiente mensaje: Su edad es de: -valor-  
// 3) Utilizando las variables anteriormente generadas, visualizar en consola ambos valores con el siguiente mensaje: ¡Hola -valor-! Su edad es de: -valor2-
// 4) Utilizando una de las variables anteriormente generadas, alertar al usuario con el siguiente mensaje: Error: -valor- no puede saltearse la tarea.
// 5) Utilice un cuadro de diálogo que permita al usuario poder ingresar su apellido y guarde su valor.
// 6) Alerte al usuario, utilizando el valor anteriormente guardado, con el siguiente mensaje: -valor-: ¡Recuerde leer la documentación!
// 7) Utilice cuadros de dialogo que permitan al usuario ingresar dos números. Luego guardar la suma de estos valores.
// 8) Visualizar en consola la múltiplicación de los valores almacenados en el punto anterior por 5, restarles 1.