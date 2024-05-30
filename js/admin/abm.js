import { obtenerPeliculaDeLS } from '../utils.js';
import { Pelicula} from './Pelicula.js';
import { agregarPeliculaALS, cargarTabla } from './utils.js';

<<<<<<< HEAD
export const agregarPelicula = (nombre,  portada, descripcion) => {
  const pelicula = new Pelicula(nombre,  portada, descripcion);
=======
export const agregarPelicula = (tipo, categoria, nombre,  portada, descripcion) => {
  const pelicula = new Pelicula(tipo, categoria, nombre,  portada, descripcion);
>>>>>>> 009a267de4417fa7c06481f2cf34cfa4712a7c57

  agregarPeliculaALS(pelicula);
};

<<<<<<< HEAD
export const editarPelicula = (nombre,  portada , descripcion) => {
=======
export const editarPelicula = (tipo, categoria, nombre,  portada , descripcion) => {
>>>>>>> 009a267de4417fa7c06481f2cf34cfa4712a7c57
  // 1. Traer los datos necesarios
  const peliculas = obtenerPeliculaDeLS();
  const codigoPelicula = sessionStorage.getItem('codigoPelicula');

  // 2. Encontrar la posicion del contacto a editar
  const posicionPelicula = peliculas.findIndex((pelicula) => {
    return pelicula.codigo === codigoPelicula;
  });

  if (posicionPelicula === -1) {
    alert('La Película/Serie no se encontró');
    sessionStorage.removeItem('codigoPelicula');
    return;
  }

  // 3. Crear el nuevo objeto contacto
<<<<<<< HEAD
  const nuevoPelicula = new Pelicula(nombre,  portada, descripcion);
=======
  const nuevoPelicula = new Pelicula(tipo, categoria, nombre,  portada, descripcion);
>>>>>>> 009a267de4417fa7c06481f2cf34cfa4712a7c57

  // 4. Editar la posicion del contacto existente por el nuevo
  peliculas.splice(posicionPelicula, 1, nuevoPelicula);
  // contactos[posicionContacto] = nuevoContacto;

  // 5. Actualizar LS
  localStorage.setItem('peliculas', JSON.stringify(peliculas));

  // 6. Eliminar el código de SS
  sessionStorage.removeItem('codigoPelicula');

  // 7. Esconder alert
  const $alert = document.getElementById('alert-edicion-pelicula');
  $alert.classList.add('d-none');

  // 8. Mostrar boton
  const $button = document.getElementById('btn-cancelar');
  $button.classList.add('d-none');
};

export const eliminarPelicula = (idPelicula, nombrePelicula) => {
  // 1. CONFIRMAR que se desea eliminar el contacto
  swal
    .fire({
      title: 'Atención',
      text: `¿Estás seguro que deseas eliminar ${nombrePelicula}? Esta acción es irreversible.`,
      icon: 'warning',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar',
    })
    .then((result) => {
      if (result.isConfirmed) {
        // 2. Obtener el listado de contactos
        const pelicula = obtenerPeliculaDeLS();

        // 3. Filtrar esa lista para eliminar el contacto con id indicado
        const  nuevosPeliculas = pelicula.filter((pelicula) => {
          return pelicula.codigo !== idPelicula;
        });

        // 4. Actualizar lista en LS
        localStorage.setItem('peliculas', JSON.stringify(nuevosPeliculas));

        // 5. Actualizar la tabla
        cargarTabla();

        // 6. Notificar al usuario del exito
        swal.fire({
          title: 'Exito',
          text: ` ${nombrePelicula} eliminado correctamente`,
          icon: 'success',
          showConfirmButton: true,
          showCancelButton: false,
          confirmButtonText: 'Tarea Completada',
        });
      }
    });
};