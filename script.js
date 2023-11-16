let natacion = document.getElementById("natacion.id");
let futbol = document.getElementById("futbol.id");
let paddle = document.getElementById("paddle.id");
let reservasNAT = document.getElementById("reservasNAT.id");
let reservasPAD = document.getElementById("reservasPAD.id");
let reservasFUT = document.getElementById("reservasFUT.id");

horario_I = localStorage.getItem("horario_inicio");
horario_F = localStorage.getItem("horario_fin");
NOMBRE_APELLIDO = localStorage.getItem("NOMBRE_APELLIDO");
deporte = localStorage.getItem("DEPORTE");

if (deporte == 1) {
  reservasNAT.innerHTML += `<br> Nombre: ${NOMBRE_APELLIDO}|| Horario reservado desde: ${horario_I} hasta: ${horario_F}`
}
if (deporte == 2) {
  reservasFUT.innerHTML += `<br> Nombre: ${NOMBRE_APELLIDO}|| Horario reservado desde: ${horario_I} hasta: ${horario_F}`
}
if (deporte == 3) {
  reservasPAD.innerHTML += `<br> Nombre: ${NOMBRE_APELLIDO}|| Horario reservado desde: ${horario_I} hasta: ${horario_F}`
}

natacion.addEventListener("click", imprimirConsola1);
paddle.addEventListener("click", imprimirConsola2);
futbol.addEventListener("click", imprimirConsola3);

function imprimirConsola1() {
  let horario_I = document.getElementById("horario1.id").value;
  let horario_F = document.getElementById("horario2.id").value;
  let NOMBRE_APELLIDO = document.getElementById("RapellidoNombreId").value;

  if (horario_I === "" || horario_F === "" || NOMBRE_APELLIDO === "") {
    alert("Por favor, completa todos los campos.");
  } else {
    alert("Tu reserva fue realizada con éxito");
    reservasNAT.innerHTML += `<br> Nombre: ${NOMBRE_APELLIDO}|| Horario reservado desde: ${horario_I} hasta: ${horario_F}`
    recorrerdatos(horario_I, horario_F, NOMBRE_APELLIDO, 1);
  }
}

function imprimirConsola2() {
  let horario_I = document.getElementById("horario1.id").value;
  let horario_F = document.getElementById("horario2.id").value;
  let NOMBRE_APELLIDO = document.getElementById("RapellidoNombreId").value;

  if (horario_I === "" || horario_F === "" || NOMBRE_APELLIDO === "") {
    alert("Por favor, completa todos los campos.");
  } else {
    alert("Tu reserva fue realizada con éxito");
    reservasPAD.innerHTML += `<br> Nombre: ${NOMBRE_APELLIDO}|| Horario reservado desde: ${horario_I} hasta: ${horario_F}`
    recorrerdatos(horario_I, horario_F, NOMBRE_APELLIDO, 3);
  }
}

function imprimirConsola3() {
  let horario_I = document.getElementById("horario1.id").value;
  let horario_F = document.getElementById("horario2.id").value;
  let NOMBRE_APELLIDO = document.getElementById("RapellidoNombreId").value;

  if (horario_I === "" || horario_F === "" || NOMBRE_APELLIDO === "") {
    alert("Por favor, completa todos los campos.");
  } else {
    alert("Tu reserva fue realizada con éxito");
    reservasFUT.innerHTML += `<br> Nombre: ${NOMBRE_APELLIDO}|| Horario reservado desde: ${horario_I} hasta: ${horario_F}`
    recorrerdatos(horario_I, horario_F, NOMBRE_APELLIDO, 2);

  }
}

function recorrerdatos(var1, var2, var3, var4) {
  localStorage.setItem("horario_inicio", var1);
  localStorage.setItem("horario_fin", var2);
  localStorage.setItem("NOMBRE_APELLIDO", var3);
  localStorage.setItem("DEPORTE", var4);
}
