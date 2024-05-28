import { agregarContacto, editarContacto } from './abm.js';
import { cargarTabla, estaEditando } from './utils.js';
import { estaLogueado } from '../utils.js';

// ----------------------------------
// 1. Protección de ruta
// ----------------------------------

if (!estaLogueado()) {
  window.location.replace('/pages/login.html');
}

// ---------------------------------
// 2. Cargar tabla
// ---------------------------------

cargarTabla();

// ---------------------------------
// 3. Seleccionar elementos
// ---------------------------------

const $form = document.getElementById('form-contacto');
const $inputNombre = document.getElementById('input-nombre');
const $inputCategorias = document.getElementById('input-categorias');
const $inputPortada = document.getElementById('input-portada');
const $inputDescripcion = document.getElementById('input-descripcion');

// ---------------------------------
// 4. Event listeners del blur
// ---------------------------------
/*
$inputNombre.addEventListener('blur', () => {
  validateName($inputNombre);
});
$inputCategorias.addEventListener('blur', () => {
  validateNumber($inputCategorias);
});
$inputDescripcion.addEventListener('blur', () => {
  validateEmail($inputDescripcion);
});
$inputPortada.addEventListener('blur', () => {
  validateUrl($inputPortada);
});*/

// ---------------------------------
// 5. Event listener del submit
// ---------------------------------

$form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  // A. Validar los campos



  // B. Todo OK, conseguir valores

  const nombre = $inputNombre.value;
  const categorias = $inputCategorias.value;
  const portada = $inputPortada.value;
  const descripcion = $inputDescripcion.value;

  if (estaEditando()) {
    editarContacto(nombre, categorias, portada, descripcion);
  } else {
    agregarContacto(nombre, categorias, portada, descripcion);
  }

  // C. Resetear formulario

  $form.reset();
  $inputNombre.classList.remove('is-valid', 'is-invalid');
  $inputCategorias.classList.remove('is-valid', 'is-invalid');
  $inputDescripcion.classList.remove('is-valid', 'is-invalid');
  $inputPortada.classList.remove('is-valid', 'is-invalid');

  // D. Actualizar tabla

  cargarTabla();

  // E. Notificar al usuario

  let mensaje = `Contacto creado bajo el nombre de ${nombre}`;
  if (estaEditando()) mensaje = 'Contacto editado exitosamente';

  swal.fire({
    title: 'Exito',
    text: mensaje,
    icon: 'success',
    showConfirmButton: true,
    showCancelButton: false,
    confirmButtonText: 'Tremen2',
  });
});