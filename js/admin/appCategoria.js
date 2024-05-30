import { agregarCategoria, editarCategoria } from './categoriasAbm.js';
import { cargarTablaCat, estaEditandoCat } from './utils.js';
import {validateName} from '../validators.js';

// ---------------------------------
// 2. Cargar tabla
// ---------------------------------

cargarTablaCat();

// ---------------------------------
// 3. Seleccionar elementos
// ---------------------------------

const $form = document.getElementById('form-categoria');
const $inputNombre = document.getElementById('input-nombre-cat');
// ---------------------------------
// 4. Event listeners del blur
// ---------------------------------

$inputNombre.addEventListener('blur', () => {
  validateName($inputNombre);
});

// ---------------------------------
// 5. Event listener del submit
// ---------------------------------

$form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  // A. Validar los campos
  if (
    !validateName($inputNombre) 

  ) {
    alert('Revisá los campos');
    return;
  }

  // B. Todo OK, conseguir valores

  const nombre = $inputNombre.value; 

  if (estaEditandoCat()) {
    editarCategoria(nombre);
  } else {
    agregarCategoria(nombre);
  }

  // C. Resetear formulario

  $form.reset();
  $inputNombre.classList.remove('is-valid', 'is-invalid'); 

  // D. Actualizar tabla

  cargarTablaCat();

  // E. Notificar al usuario

  let mensaje = `Categoría creada bajo el nombre de ${nombre}`;
  if (estaEditandoCat()) mensaje = 'Categoría editada exitosamente';

  swal.fire({
    title: 'Exito',
    text: mensaje,
    icon: 'success',
    showConfirmButton: true,
    showCancelButton: false,
    confirmButtonText: 'Realizado con Éxito',
  });
});

document.getElementById("btn-cancelar-cat").addEventListener("click", () => {
  document.getElementById("form-categoria").reset(); // Restablece el formulario
  document.getElementById("btn-cancelar-cat").classList.add("d-none"); // Oculta el botón Cancelar
  document.getElementById("alert-edicion-categoria").classList.add("d-none"); // Oculta el mensaje de edición
  document.getElementById("form-categoria").onsubmit = agregarCategoria; // Restaura el evento de submit para agregar una película o serie
});
