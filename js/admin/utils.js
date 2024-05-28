import { obtenerPeliculaDeLS } from '../utils.js';
import { eliminarPelicula } from './abm.js';

export const agregarPeliculaALS = (pelicula) => {
  // 1. Traemos desde LS lo que haya guardado
  const peliculas = obtenerPeliculaDeLS();

  // 2. Agregamos a lo que estaba guardado, lo nuevo
  peliculas.push(pelicula);

  // 3. Actualizamos los contactos en LS con los valores nuevos
  localStorage.setItem('peliculas', JSON.stringify(peliculas));
};

/* <tr>
              <td>1</td>
              <td>
                <img
                  class="imagen-tabla"
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT-G05IXgnSS6vTvk99mhXeuKAXBXHAh0O2dKCQWhXOAjNYJoiwTUvMgWmyEnAkcTaYyj99YQ"
                  alt="Imagen mario"
                />
              </td>
              <td>Juan</td>
              <td>12345678</td>
              <td>hola@gmail.com</td>
              <td>Esta es una nota</td>
              <td>
                <button class="btn btn-sm btn-warning">Editar</button>
                <button class="btn btn-sm btn-danger">Eliminar</button>
              </td>
            </tr> */

const cargarFilaTabla = (pelicula, indice) => {
  const $tbody = document.getElementById('tbody-peliculas');

  const $tr = document.createElement('tr');

  // INDICE
  const $tdIndice = document.createElement('td');
  $tdIndice.textContent = indice;
  $tr.appendChild($tdIndice);

  // IMAGEN
  const $tdPortada = document.createElement('td');
  const $portada = document.createElement('img');
  $portada.src = pelicula.portada;
  $portada.alt = pelicula.nombre;
  $portada.classList.add('imagen-tabla');
  $tdPortada.appendChild($portada);
  $tr.appendChild($tdPortada);

  // NOMBRE
  const $tdNombre = document.createElement('td');
  $tdNombre.textContent = pelicula.nombre;
  $tr.appendChild($tdNombre);

  // NUMERO
  const $tdCategorias = document.createElement('td');
  $tdCategorias.textContent = pelicula.categorias;
  $tr.appendChild($tdCategorias);

  // NOTAS
  const $tdDescripcion = document.createElement('td');
  $tdDescripcion.textContent = pelicula.descripcion;
  $tr.appendChild($tdDescripcion);

  // ACCIONES
  const $tdAcciones = document.createElement('td');
  const $btnEditar = document.createElement('button');
  const $btnEliminar = document.createElement('button');
  $btnEditar.classList.add('btn', 'btn-sm', 'btn-warning', 'me-2');
  $btnEliminar.classList.add('btn', 'btn-sm', 'btn-danger');
  $btnEditar.textContent = 'Editar';
  $btnEliminar.textContent = 'Eliminar';
  $btnEditar.onclick = () => {
    prepararEdicionPelicula(pelicula);
  };
  $btnEliminar.onclick = () => {
    eliminarPelicula(pelicula.codigo, pelicula.nombre);
  };
  $tdAcciones.appendChild($btnEditar);
  $tdAcciones.appendChild($btnEliminar);
  $tr.appendChild($tdAcciones);

  $tbody.appendChild($tr);
};

export const cargarTabla = () => {
  // 1. Recuperar los contactos
  const peliculas = obtenerPeliculaDeLS();

  // 2. Vaciar la tabla de los datos anteriores
  const $tbody = document.getElementById('tbody-peliculas');
  $tbody.innerHTML = '';

  // 3. Crear una fila (tr) por cada contacto
  peliculas.forEach((pelicula, indice) => {
    // Crear fila para este elemento
    cargarFilaTabla(pelicula, indice + 1);
  });
};

// Objetivo: Cargar en el formulario estos datos
export const prepararEdicionPelicula = (pelicula) => {
  // 1. Seleccionar los nodos de los inputs
  const $inputNombre = document.getElementById('input-nombre');
  const $inputPortada = document.getElementById('input-portada');
  const $inputDescripcion = document.getElementById('input-descripcion');

  // 2. Cargar la info
  $inputNombre.value = pelicula.nombre;
  $inputPortada.value = pelicula.portada;
  $inputDescripcion .value = pelicula.descripcion;

  // 3. Guardar código
  sessionStorage.setItem('codigoPelicula', pelicula.codigo);

  // 4. Mostrar alert
  const $alert = document.getElementById('alert-edicion-pelicula');
  const $spanPelicula = document.getElementById('nombre-pelicula-edicion');
  $alert.classList.remove('d-none');
  $spanPelicula.textContent = pelicula.nombre;

  // 5. Mostrar boton
  const $button = document.getElementById('button-cancelar');
  $button.classList.remove('d-none');

  // TODO: Agregar event listener al botón para deshacer la edicion de un contacto (eliminar el cod de SS, vaciar los campos, resetear las clases,esconder alert, esconder boton)
};

export const estaEditando = () => {
  // El usuario está editando cuando existe un "codigoContacto" en sessionStorage
  // const codigo = sessionStorage.getItem('codigoContacto');
  // if (codigo) return true;
  // return false;
  return !!sessionStorage.getItem('codigoPelicula');
};