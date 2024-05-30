import { obtenerCategoriaDeLS } from '../utils.js';
import { Categoria } from './Pelicula.js';
import { agregarCategoriaALS, cargarTablaCat } from './utils.js';

export const agregarCategoria = (nombre) => {
  const categoria = new Categoria(nombre);

  agregarCategoriaALS(categoria);
};

export const editarCategoria = (nombre) => {
  // 1. Traer los datos necesarios
  const categorias = obtenerCategoriaDeLS();
  const codigoCategoria = sessionStorage.getItem('codigoCategoria');

  // 2. Encontrar la posicion del contacto a editar
  const posicionCategoria = categorias.findIndex((categoria) => {
    return categoria.codigo === codigoCategoria;
  });

  if (posicionCategoria === -1) {
    alert('La Categoria no se encontró');
    sessionStorage.removeItem('codigoCategoria');
    return;
  }

  // 3. Crear el nuevo objeto contacto
  const nuevoCategoria = new Categoria(nombre);

  // 4. Editar la posicion del contacto existente por el nuevo
  categorias.splice(posicionCategoria, 1, nuevoCategoria);
  // contactos[posicionContacto] = nuevoContacto;

  // 5. Actualizar LS
  localStorage.setItem('categorias', JSON.stringify(categorias));

  // 6. Eliminar el código de SS
  sessionStorage.removeItem('codigoCategoria');

  // 7. Esconder alert
  const $alert = document.getElementById('alert-edicion-categoria');
  $alert.classList.add('d-none');

  // 8. Mostrar boton
<<<<<<< HEAD
  const $button = document.getElementById('btn-cancelar');
=======
  const $button = document.getElementById('btn-cancelar-cat');
>>>>>>> 009a267de4417fa7c06481f2cf34cfa4712a7c57
  $button.classList.add('d-none');
};

export const eliminarCategoria = (idCategoria, nombreCategoria) => {
  // 1. CONFIRMAR que se desea eliminar el contacto
  swal
    .fire({
      title: 'Atención',
      text: `¿Estás seguro que deseas eliminar ${nombreCategoria}? Esta acción es irreversible.`,
      icon: 'warning',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar',
    })
    .then((result) => {
      if (result.isConfirmed) {
        // 2. Obtener el listado de contactos
        const categoria = obtenerCategoriaDeLS();

        // 3. Filtrar esa lista para eliminar el contacto con id indicado
        const  nuevosCategorias = categoria.filter((categoria) => {
          return categoria.codigo !== idCategoria;
        });

        // 4. Actualizar lista en LS
        localStorage.setItem('categorias', JSON.stringify(nuevosCategorias));

        // 5. Actualizar la tabla
        cargarTablaCat();

        // 6. Notificar al usuario del exito
        swal.fire({
          title: 'Exito',
          text: ` ${nombreCategoria} eliminado correctamente`,
          icon: 'success',
          showConfirmButton: true,
          showCancelButton: false,
          confirmButtonText: 'Tarea Completada',
        });
      }
    });
};