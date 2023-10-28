/*
console.log("Hola mundo")

let a = 1;
let b = 2;

a = 5;

let nombre = "Santiago";

let profesoractibvo = True;
*/
/*number = integrer y float
string = cadena de caracteres
boolean = true or false
potencia = **
Nan = Not a Number
Suma = + y concatena
console.log("11"+1) = 111(concatena)
Menos = -
console.log("11"- 1)=10(resta)


== igualdad debil
===igualdad estricta(valor y tipo de dato)
!== diferencia estricta(valor y tipo de dato)
function nombre_funcion(){

}

&& and


console.log()
clase.metodo()
cont ARRAY = []
ARRAY.push(1)// Agrega un valor al final de array
consolo.log(ARRAY[])

ARRAY.unshift(2) // lo agrega al principio

ARRAY.pop() elimina o saca el ultimo // ARRAY.shift() elimina o saca el primero

estudiante1 es un objeto

let estudainte1= {
    nombre : "chiara",=======>propiedades====>chiara es un objeto
    edad: 19,=======>propiedades
    activo : True,=======>propiedades

    cumpliranios es un metodo
    cumpliranios: function(){
    this.edad = this.edad + 1
    },

}

consolo.log(estudiante1)
console.log(estudiante.nombre)
estudiante1.cumpliranios()
es lo mismo que array.pop()
console.log(estudaintes1.edad)


array de json(javascript object notation)
const estudiantes = [
    estudiantes1={nombre:"Chiara",},
    estudiantes2={nombre:"samtiago",},
    estudiantes3={nombre:"Lautaro",},
]

console.log(estudaintes[2].nombre)
array[]
{}objetos
consolo.table() lo muestra como tabla

let profesor = {
    nombre = "Esteban",
    edad = 30,
    en actvidad = True,
}
POST(enviar a base de datos)
get(Recibir de base de datos)


let profesor string = JSON.stringify(profesor)  convierte en string

let profesor objeto = Json.parse(profesorstring)


*/

/* if (int o string vacio = TRUE):{

}
if (-0 = False):{

}

*/


/*

if typeof(edad) != number:





*/

/*
igual que  
if(){
}
elseif{

}
switch(){
case "":

break;

default:
}



*/

/*
ingresar datos
edad = prompt()
parseInt(prompt()) te lo convirte a number
 parsefloat(prompt("ingrese numero float"))
*/

/*en html 
<p id ="parrafo"></p>*/

/*
let parrafoHTML = document.getElementById("parrafo");

parrafoHTML.innerText = "Hola mundo"

let nombre = prompt("Ingrese nombre")
document.getElementById("titular").innerHTML = "Hola "+ nombre

*/

/* elemtnt.addEventlistener("click", myfuncition)*/

let boton_iniciar_sesion = document.getElementById("inicar_botonId");



let natacion = document.getElementById("natacion.id");
let futbol = document.getElementById("futbol.id");
let paddle = document.getElementById("paddle.id");
let reservasHTML = document.getElementById("reservas.id");
console.log(reservasHTML)

natacion.addEventListener("click", imprimirConsola);


function imprimirConsola() {
    let horario = document.getElementById("horario.id").value;
    let NOMBRE_APELLIDO = document.getElementById("RapellidoNombreId").value;
    reservasHTML.innerHTML += `<br> Nombre: ${NOMBRE_APELLIDO}, Horario reservado ${horario}, deporte: Natacion`
  }




