console.log("Clase 6")

const nombre = "Alejo"

function nuevosObjetos (nombre, apellido) {

    this.nombreDePila = nombre;
    this.apellidoDeLaPersona = apellido;

}

const persona1 = new nuevosObjetos("Ana Paula", "Rosaschi")
console.log(persona1)

// ARRAYS // ARREGLO // MATRIZ // VECTOR (NOMBRES POSIBLES PARA ARRAYS)

// LISTA DE ALTO NIVEL QUE CONTIENE UNA COLECCIÓN DE DATOS

const personas = [ "Mitchell", "Fernando", "Ana", "Lucía" ]

console.log(personas)

// arrays tienen un índice que arranca en 0
// los arrays no tienen una longitud definide 
// la longitud puede cambiar // es extendible


// FORMAS DE EXTRAER INFORMACIÓN DE UN ARRAY

console.log(personas[0])

// forma para saber cuál es la longitud de un array 
// también sirve para contrar cuántos caracteres tenemos

console.log(personas.length)
console.log("Carola".length)
const fruta = "manzana"
console.log("123120'9310'293013-_-´+´{+´pásodsa´+dp+p65469*-/*-".length)
console.log(fruta.length)

// arrays con for

const frutas = [ "Banana", "manzana", "pera", "uva", "melon", "sandia" ]

console.log(frutas.length)

// for (let i = 0; i <= 10; i++ ){

//     console.log(i)
// }

// console.log(0 <= 10) // boolean, true
// console.log(11 <= 10) // false

for (let i = 0; i < frutas.length; i++){
    console.log(`En la posición ${i}, se encuentra: ${frutas[i]}`)

}

// los arrays pueden contener todo tipo de datos

const arrayRaro = [1, 2, 3 ,4, "carola", "Kojima", [1, 2 ,3, 4, 5], true, false, {nombre: "Fernando"} ]

const arraysConArrays = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

for (let i = 0; i < arraysConArrays.length ; i++){
    console.log(arraysConArrays[i])

    for( let j = 0; j < arraysConArrays[i].length; j++){
        console.log(arraysConArrays[i][j])
    }
}

// arrays de objetos

const clientes = [
    {
        nombre: "Carola",
        edad: 27
    },
    {
        nombre: "Franco",
        edad: 27
    },
    {
        nombre: "Mitchell",
        edad: 27
    },
    {
        nombre: "Pablo",
        edad: 27
    },
    {
        nombre: "Azucena",
        edad: 27
    },
    {
        nombre: "Paula",
        edad: 27
    },
]

console.log(clientes)

for ( let i = 0; i < clientes.length; i++ ){

    console.log(clientes[i].nombre)
}

// push // ME PERMITE AGREGAR UN NUEVO ELEMENTO AL ARRAY + MODIFICA EL ARRAY ORIGINAL

console.log(frutas) // antes tenía 6 elementos
console.log(frutas.push("papaya")) // push agregó uno más
console.log(frutas) // ahora fruta tiene 7


const edad = 20
let otraEdad = edad
otraEdad = 27

const otrasFrutas = frutas
otrasFrutas.push("cereza")
console.log(otrasFrutas)
console.log(frutas)

// copia segura de un array CON SPREAD OPERATOR , TODO LO QUE SE IMPLEMENTE ENCIMA, MODIFICA AL NUEVO ARRAY

const nuevasFrutas = [...frutas]
nuevasFrutas.push("tomate")

console.log(frutas)
console.log(nuevasFrutas)

// unshift // AGREGA UN NUEVO ELEMENTO AL ARRAY, MODIFICA AL ARRAY

nuevasFrutas.unshift("mandarina")
console.log(nuevasFrutas)
nuevasFrutas.unshift("POMELO", "TOMATE")
console.log(nuevasFrutas)

// pop // ELIMINA EL ÚLTIMO ELEMENTO DEL ARRAY, MODIFICA AL ARRAY 

nuevasFrutas.pop()
console.log(nuevasFrutas) 
nuevasFrutas.pop()
nuevasFrutas.pop()
nuevasFrutas.pop()
nuevasFrutas.pop()
nuevasFrutas.pop()
console.log(nuevasFrutas)

// reverse // invierte el orden de nuestro array, MODIFICA AL ARRAY

console.log(nuevasFrutas)
nuevasFrutas.reverse()
console.log( nuevasFrutas)

// join // une todos los elementos de un array en una cadena

console.log(nuevasFrutas.join())
console.log(nuevasFrutas.join(" "))
console.log(nuevasFrutas.join(", "))
console.log(nuevasFrutas)

// concat // UNE ARRAYS // afecta

const verduras = [ "acelga", "espinaca", "perejil", "cilantro", "lechuga"]
const nuevoArray = nuevasFrutas.concat(verduras) // se pueden concatenar más arrays en el mismo paréntesis
console.log(nuevoArray)

// slice // devuelve una copia de una parte de un array

const otrasVerduras = verduras.slice() // copia todo
const verdurasQueMeGustan = verduras.slice(3, 4) // tiene un inicio (posición index) y recorta incluyendo a la posición inicial y excluyendo al final de la extracción
console.log(verduras)
console.log(verdurasQueMeGustan)

// splice // PERMITE CAMBIAR CONTENIDO DE UN ARRAY O ELIMINAR ELEMENTOS EXISTENTES

verduras.splice(0, 0, "zapallito")
console.log(verduras)
verduras.splice(3, 1)
console.log(verduras)

// indexof // retorna el índice donde se encuentra el elemento

console.log(verduras.indexOf("zapallito"))

// includes // devuelve un booleano si el array contiene un elemento coincidente con el argumento

console.log(verduras.includes("perejil"))
console.log(verduras.includes("cilantro"))



const carteraDeClientes = []

carteraDeClientes.push("Azucena")

const personita = {
    nombre:"Tomas",
    edad: 20
}

console.log(carteraDeClientes)
carteraDeClientes.push(personita)
console.log(carteraDeClientes)

