let botoncomentarios = document.getElementById("botoncoment");
let comentario = document.getElementById("coment");
let storedNombreApellido = localStorage.getItem("NOMBRE_APELLIDO");
let storedComentarios = localStorage.getItem("COMENTARIOS");
coment.innerHTML += `<br> Nombre: ${storedNombreApellido}<br> COMENTARIOS: ${storedComentarios}`;


botoncomentarios.addEventListener("click", imprimirConsola1);


function imprimirConsola1() {
    let inputcomentarios = document.getElementById("COMENTARIOSId").value;
    let NOMBRE_APELLIDO = document.getElementById("NOMBREID").value;
    coment.innerHTML += `<br> Nombre: ${NOMBRE_APELLIDO}<br> COMENTARIOS: ${inputcomentarios}`;
    localStorage.setItem("NOMBRE_APELLIDO", NOMBRE_APELLIDO);
    localStorage.setItem("COMENTARIOS", inputcomentarios);
  }
  