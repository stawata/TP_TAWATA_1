
let natacion = document.getElementById("natacion.id");
let futbol = document.getElementById("futbol.id");
let paddle = document.getElementById("paddle.id");
let reservasNAT = document.getElementById("reservasNAT.id");
let reservasPAD = document.getElementById("reservasPAD.id");
let reservasFUT = document.getElementById("reservasFUT.id");

natacion.addEventListener("click", imprimirConsola1);
paddle.addEventListener("click", imprimirConsola2);
futbol.addEventListener("click", imprimirConsola3);

function imprimirConsola1() {
    let horario_I = document.getElementById("horario1.id").value;
    let horario_F = document.getElementById("horario2.id").value;
    let NOMBRE_APELLIDO = document.getElementById("RapellidoNombreId").value;
    reservasNAT.innerHTML += `<br> Nombre: ${NOMBRE_APELLIDO}|| Horario reservado desde: ${horario_I} hasta: ${horario_F}`
  }
  function imprimirConsola2() {
    let horario_I = document.getElementById("horario1.id").value;
    let horario_F = document.getElementById("horario2.id").value;
    let NOMBRE_APELLIDO = document.getElementById("RapellidoNombreId").value;
    reservasPAD.innerHTML += `<br> Nombre: ${NOMBRE_APELLIDO}|| Horario reservado desde: ${horario_I} hasta: ${horario_F}`
  }
  function imprimirConsola3() {
    let horario_I = document.getElementById("horario1.id").value;
    let horario_F = document.getElementById("horario2.id").value;
    let NOMBRE_APELLIDO = document.getElementById("RapellidoNombreId").value;
    reservasFUT.innerHTML += `<br> Nombre: ${NOMBRE_APELLIDO}|| Horario reservado desde: ${horario_I} hasta: ${horario_F}`
  }



