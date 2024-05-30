import {
  validateEmailFormulario,
  validateNameFormulario,
  validateNumberFormulario,
  validateNotasFormulario,
} from "../validators.js";
/*
// ----------------------------------
// 1. Protección de ruta
// ----------------------------------

if (!estaLogueado()) {
  window.location.replace("/pages/login.html");
}
*/

// ---------------------------------
// 1. Seleccionar elementos
// ---------------------------------

const $form = document.getElementById("form-ayuda");
const $inputNombreFormulario = document.getElementById(
  "input-nombre-formulario"
);
const $inputNumeroFormulario = document.getElementById(
  "input-numero-formulario"
);
const $inputEmailFormulario = document.getElementById("input-email-formulario");
const $inputNotasFormulario = document.getElementById("input-notas-formulario");

// ---------------------------------
// 2. Event listeners del blur
// ---------------------------------

$inputNombreFormulario.addEventListener("blur", () => {
  validateNameFormulario($inputNombreFormulario);
});
$inputNumeroFormulario.addEventListener("blur", () => {
  validateNumberFormulario($inputNumeroFormulario);
});
$inputEmailFormulario.addEventListener("blur", () => {
  validateEmailFormulario($inputEmailFormulario);
});
$inputNotasFormulario.addEventListener("blur", () => {
  validateNotasFormulario($inputNotasFormulario);
});

// ---------------------------------
// 3. Event listener del submit
// ---------------------------------

$form.addEventListener("submit", (event) => {
  event.preventDefault(); //para que no recarge automaticamente

  // A. Validar los campos

  if (
    !validateNameFormulario($inputNombreFormulario) ||
    !validateNumberFormulario($inputNumeroFormulario) ||
    !validateEmailFormulario($inputEmailFormulario) ||
    !validateNotasFormulario($inputNotasFormulario)
  ) {
    let mensajeError = `Por favor, revisá los campos indicados.`;

    swal.fire({
      title: "Error",
      text: mensajeError,
      icon: "error",
      showConfirmButton: true,
      showCancelButton: false,
      confirmButtonText: "Cerrar",
    });
    //alert("Por favor, revisá los campos indicados.");
    return;
  }

  // B. Todo OK, conseguir valores

  const nombreFormulario = $inputNombreFormulario.value;
  // const numeroFormulario = $inputNumeroFormulario.value;
  //const emailFormulario = $inputEmailFormulario.value;
  //const notasFormulario = $inputNotasFormulario.value;

    //C. Agregar pop up de existo

  let mensajeExito = `${nombreFormulario} muchas gracias por enviarnos tu mensaje. Nos contactaremos a la brevedad.`;

  swal.fire({
    title: "Exito",
    text: mensajeExito,
    icon: "success",
    showConfirmButton: true,
    showCancelButton: false,
    confirmButtonText: "Cerrar",
  });

  //alert( `${nombreFormulario} muchas gracias por enviarnos tu mensaje. Nos contactaremos a la brevedad.`);

  // D. Resetear formulario

  $form.reset();
  $inputNombre.classList.remove("is-valid", "is-invalid");
  $inputNumero.classList.remove("is-valid", "is-invalid");
  $inputEmail.classList.remove("is-valid", "is-invalid");
  $inputImagen.classList.remove("is-valid", "is-invalid");

});
