let botonregistrarse = document.getElementById("registrarbotonId");
botonregistrarse.addEventListener("click", function valores() {
  let nombreValor = NOMBRE.value;
  let ciudadValor = CIUDAD.value;
  let correoValor = CORREO.value;
  let contraseñaValor = CONTRASEÑA.value;

  if (nombreValor === "" || ciudadValor === "" || correoValor === "" || contraseñaValor === "") {
    alert("Por favor, completa todos los campos.");
  } else {
    registrar(nombreValor, ciudadValor, correoValor, contraseñaValor);
    // Borra los campos directamente en el HTML después de un registro exitoso
    NOMBRE.value = "";
    CIUDAD.value = "";
    CORREO.value = "";
    CONTRASEÑA.value = "";
  }
});

let NOMBRE = document.getElementById("RapellidoNombreId");
let CIUDAD = document.getElementById("RciudadId");
let CORREO = document.getElementById("RdireccionCorreoId");
let CONTRASEÑA = document.getElementById("RpasswordId");

function registrar(DATO_1, DATO_2, DATO_3, DATO_4) {
  alert("Te registraste con Éxito\nNombre: " + DATO_1 + "\nCiudad: " + DATO_2 + "\nCorreo: " + DATO_3 + "\nContraseña: " + DATO_4);
}

