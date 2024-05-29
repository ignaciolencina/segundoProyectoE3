//import { agregarContacto, editarContacto } from "./abm.js";
//import { cargarTabla, estaEditando } from "./utils.js";
import {
  validateEmailFormulario,
  validateNameFormulario,
  validateNumberFormulario,
  validateNotasFormulario,
} from "../validators.js";
//import { estaLogueado } from "../utils.js";

/*
// ----------------------------------
// 1. Protección de ruta
// ----------------------------------

if (!estaLogueado()) {
  window.location.replace("/pages/login.html");
}

// ---------------------------------
// 2. Cargar tabla
// ---------------------------------

cargarTabla();
*/
// ---------------------------------
// 3. Seleccionar elementos
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
// 4. Event listeners del blur
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
// 5. Event listener del submit
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
    alert("Por favor, revisá los campos indicados.");
    return;
  }

 
  // B. Todo OK, conseguir valores

  const nombreFormulario = $inputNombreFormulario.value;
  const numeroFormulario = $inputNumeroFormulario.value;
  const emailFormulario = $inputEmailFormulario.value;
  const notasFormulario = $inputNotasFormulario.value;
 
  alert(
    `${nombreFormulario} muchas gracias por enviarnos tu mensaje. Nos contactaremos a la brevedad.`
  );

});

