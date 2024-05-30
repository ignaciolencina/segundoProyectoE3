import { agregarPelicula, editarPelicula } from './abm.js';
import { cargarTabla, estaEditando } from './utils.js';

import {  
  validateName,  
  validateUrl,
} from '../validators.js';

import { obtenerCategoriaDeLS } from '../utils.js';

const $select = document.getElementById('select-categorias');
const categoria = obtenerCategoriaDeLS();

categoria.forEach((categoria) => {
    const $option = document.createElement('option');
<<<<<<< HEAD
    $option.value = categoria.codigo;
=======
    $option.value = categoria.nombre;
>>>>>>> 009a267de4417fa7c06481f2cf34cfa4712a7c57
    $option.innerText = categoria.nombre;
    $select.appendChild($option);
});



/*import { estaLogueado } from '../utils.js';*/

// ----------------------------------
// 1. Protección de ruta
// ----------------------------------

/*if (!estaLogueado()) {
  window.location.replace('/pages/login.html');
}*/

// ---------------------------------
// 2. Cargar tabla
// ---------------------------------

cargarTabla();

// ---------------------------------
// 3. Seleccionar elementos
// ---------------------------------

const $form = document.getElementById('form-pelicula');
<<<<<<< HEAD
=======
const $inputTipo = document.getElementById('input-tipo');
const $inputCategoria = document.getElementById('select-categorias');
>>>>>>> 009a267de4417fa7c06481f2cf34cfa4712a7c57
const $inputNombre = document.getElementById('input-nombre');
const $inputPortada = document.getElementById('input-portada');
const $inputDescripcion = document.getElementById('input-descripcion');

// ---------------------------------
// 4. Event listeners del blur
// ---------------------------------

$inputNombre.addEventListener('blur', () => {
  validateName($inputNombre);
});
$inputPortada.addEventListener('blur', () => {
  validateUrl($inputPortada);
});

// ---------------------------------
// 5. Event listener del submit
// ---------------------------------

$form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  // A. Validar los campos
  if (
    !validateName($inputNombre) ||  
    !validateUrl($inputPortada)
  ) {
    alert('Revisá los campos');
    return;
  }

  // B. Todo OK, conseguir valores
<<<<<<< HEAD

  const nombre = $inputNombre.value;  
  const portada = $inputPortada.value;
  const descripcion = $inputDescripcion.value;

  if (estaEditando()) {
    editarPelicula(nombre, portada, descripcion);
  } else {
    agregarPelicula(nombre, portada, descripcion);
=======
  const tipo = $inputTipo.value;
  const categoria = $inputCategoria.value;
  const nombre = $inputNombre.value;  
  const portada = $inputPortada.value; 
  const descripcion = $inputDescripcion.value;

  if (estaEditando()) {
    editarPelicula(tipo, categoria, nombre,  portada, descripcion);
  } else {
    agregarPelicula( tipo, categoria, nombre, portada, descripcion);
>>>>>>> 009a267de4417fa7c06481f2cf34cfa4712a7c57
  }

  // C. Resetear formulario

  $form.reset();
<<<<<<< HEAD
  $inputNombre.classList.remove('is-valid', 'is-invalid'); 
  $inputDescripcion.classList.remove('is-valid', 'is-invalid');
  $inputPortada.classList.remove('is-valid', 'is-invalid');
=======
  $inputTipo.classList.remove('is-valid', 'is-invalid'); 
  $inputCategoria.classList.remove('is-valid', 'is-invalid'); 
  $inputNombre.classList.remove('is-valid', 'is-invalid');  
  $inputPortada.classList.remove('is-valid', 'is-invalid');
  $inputDescripcion.classList.remove('is-valid', 'is-invalid');
>>>>>>> 009a267de4417fa7c06481f2cf34cfa4712a7c57

  // D. Actualizar tabla

  cargarTabla();

  // E. Notificar al usuario

  let mensaje = `Pelicula/Serie creada bajo el nombre de ${nombre}`;
  if (estaEditando()) mensaje = 'Pelicula/Serie editada exitosamente';

  swal.fire({
    title: 'Exito',
    text: mensaje,
    icon: 'success',
    showConfirmButton: true,
    showCancelButton: false,
    confirmButtonText: 'Realizado con Éxito',
  });
});

document.getElementById("btn-cancelar").addEventListener("click", () => {
  document.getElementById("form-pelicula").reset(); // Restablece el formulario
  document.getElementById("btn-cancelar").classList.add("d-none"); // Oculta el botón Cancelar
  document.getElementById("alert-edicion-pelicula").classList.add("d-none"); // Oculta el mensaje de edición
  document.getElementById("form-pelicula").onsubmit = agregarPelicula; // Restaura el evento de submit para agregar una película o serie
});
