import { obtenerPeliculaDeLS } from '../utils.js';
import { obtenerCategoriaDeLS } from '../utils.js';
import { eliminarPelicula } from './abm.js';
import { eliminarCategoria } from './categoriasAbm.js';

export const agregarPeliculaALS = (pelicula) => {
  // 1. Traemos desde LS lo que haya guardado
  const peliculas = obtenerPeliculaDeLS();

  // 2. Agregamos a lo que estaba guardado, lo nuevo
  peliculas.push(pelicula);

  // 3. Actualizamos los contactos en LS con los valores nuevos
  localStorage.setItem('peliculas', JSON.stringify(peliculas));
};

export const agregarCategoriaALS = (categoria) => {
  // 1. Traemos desde LS lo que haya guardado
  const categorias = obtenerCategoriaDeLS();

  // 2. Agregamos a lo que estaba guardado, lo nuevo
  categorias.push(categoria);

  // 3. Actualizamos los contactos en LS con los valores nuevos
  localStorage.setItem('categorias', JSON.stringify(categorias));
};


            const cargarFilaTabla = (pelicula, indice) => {
              const $tbody = document.getElementById('tbody-peliculas');
          
              const $tr = document.createElement('tr');
              if (pelicula.destacar) {
                  $tr.classList.add('destacar');
              }
          
              const $tdIndice = document.createElement('td');
              $tdIndice.textContent = indice;
              $tr.appendChild($tdIndice);   
              
              const $tdPortada = document.createElement('td');
              const $portada = document.createElement('img');
              $portada.src = pelicula.portada;
              $portada.alt = pelicula.nombre;
              $portada.classList.add('imagen-tabla');
              $tdPortada.appendChild($portada);
              $tr.appendChild($tdPortada);


              const $tdTipo = document.createElement('td');
              $tdTipo.textContent = pelicula.tipo;
              $tr.appendChild($tdTipo);

              const $tdCategoria = document.createElement('td');
              $tdCategoria.textContent = pelicula.categoria;
              $tr.appendChild($tdCategoria);
          
              const $tdNombre = document.createElement('td');
              $tdNombre.textContent = pelicula.nombre;
              $tr.appendChild($tdNombre);


          
              const $tdDescripcion = document.createElement('td');
              $tdDescripcion.textContent = pelicula.descripcion;
              $tr.appendChild($tdDescripcion);
              
              const $tdPublicada = document.createElement('td');
              const $btnPublicar = document.createElement('button');
          
              $btnPublicar.classList.add('btn', 'btn-sm', pelicula.publicada ? 'btn-success' : 'btn-secondary');
              $btnPublicar.textContent = pelicula.publicada ? 'Publicado' : 'No Publicado';
          
              $btnPublicar.onclick = () => {
                  togglePublicarPelicula(pelicula.codigo, $btnPublicar);
              };
          
              $tdPublicada.appendChild($btnPublicar);
              $tr.appendChild($tdPublicada);
          
              const $tdAcciones = document.createElement('td');
              const $btnEditar = document.createElement('button');
              const $btnEliminar = document.createElement('button');
              const $btnDestacar = document.createElement('button'); // Nuevo botón destacar
          
              $btnEditar.classList.add('btn', 'btn-sm', 'btn-warning', 'me-2');
              $btnEliminar.classList.add('btn', 'btn-sm', 'btn-danger', 'me-2');
              $btnDestacar.classList.add('btn', 'btn-sm', 'btn-success'); // Clase para botón destacar
          
              $btnEditar.textContent = 'Editar';
              $btnEliminar.textContent = 'Eliminar';

              const $iconoEstrella = document.createElement('i');
              $iconoEstrella.classList.add('fa', pelicula.destacar ? 'fa-star' : 'fa-star-o');
              $btnDestacar.appendChild($iconoEstrella);
          
              $btnEditar.onclick = () => {
                  prepararEdicionPelicula(pelicula);
              };
              $btnEliminar.onclick = () => {
                  eliminarPelicula(pelicula.codigo, pelicula.nombre);
              };
              $btnDestacar.onclick = () => {
                toggleDestacarPelicula(pelicula.codigo, $iconoEstrella);
            };
          
              $tdAcciones.appendChild($btnEditar);
              $tdAcciones.appendChild($btnEliminar);
              $tdAcciones.appendChild($btnDestacar); // Agregar el botón destacar
          
              $tr.appendChild($tdAcciones);

              
              $tbody.appendChild($tr);
          };

          const cargarFilaTablaCat = (categoria, indice) => {
            const $tbody = document.getElementById('tbody-categorias');
        
            const $tr = document.createElement('tr');
        
            const $tdIndice = document.createElement('td');
            $tdIndice.textContent = indice;
            $tr.appendChild($tdIndice);       
    
        
            const $tdNombre = document.createElement('td');
            $tdNombre.textContent = categoria.nombre;
            $tr.appendChild($tdNombre);   
        
            const $tdAcciones = document.createElement('td');
            const $btnEditar = document.createElement('button');
            const $btnEliminar = document.createElement('button');
        
            $btnEditar.classList.add('btn', 'btn-sm', 'btn-warning', 'me-2');
            $btnEliminar.classList.add('btn', 'btn-sm', 'btn-danger', 'me-2');
        
            $btnEditar.textContent = 'Editar';
            $btnEliminar.textContent = 'Eliminar';
        
            $btnEditar.onclick = () => {
                prepararEdicionCategoria(categoria);
            };
            $btnEliminar.onclick = () => {
                eliminarCategoria(categoria.codigo, categoria.nombre);
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

export const cargarTablaCat = () => {
  // 1. Recuperar los contactos
  const categorias = obtenerCategoriaDeLS();

  // 2. Vaciar la tabla de los datos anteriores
  const $tbody = document.getElementById('tbody-categorias');
  $tbody.innerHTML = '';

  // 3. Crear una fila (tr) por cada contacto
  categorias.forEach((categoria, indice) => {
    // Crear fila para este elemento
    cargarFilaTablaCat(categoria, indice + 1);
  });
};

// Objetivo: Cargar en el formulario estos datos
export const prepararEdicionPelicula = (pelicula) => {
  // 1. Seleccionar los nodos de los inputs
  const $inputTipo = document.getElementById('input-tipo');
  const $inputCategoria = document.getElementById('select-categorias');
  const $inputNombre = document.getElementById('input-nombre');
  const $inputPortada = document.getElementById('input-portada');
  const $inputDescripcion = document.getElementById('input-descripcion');

  // 2. Cargar la info
  $inputTipo.value = pelicula.tipo;
  $inputCategoria.value = pelicula.categoria;
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
  const $button = document.getElementById('btn-cancelar');
  $button.classList.remove('d-none');

  // TODO: Agregar event listener al botón para deshacer la edicion de un contacto (eliminar el cod de SS, vaciar los campos, resetear las clases,esconder alert, esconder boton)
};

export const prepararEdicionCategoria = (categoria) => {
  // 1. Seleccionar los nodos de los inputs
  const $inputNombre = document.getElementById('input-nombre-cat');
  // 2. Cargar la info
  $inputNombre.value = categoria.nombre;
    // 3. Guardar código
  sessionStorage.setItem('codigoCategoria', categoria.codigo);

  // 4. Mostrar alert
  const $alert = document.getElementById('alert-edicion-categoria');
  const $spanCategoria = document.getElementById('nombre-categoria-edicion');
  $alert.classList.remove('d-none');
  $spanCategoria.textContent = categoria.nombre;

  // 5. Mostrar boton
  const $button = document.getElementById('btn-cancelar-cat');
  $button.classList.remove('d-none');

  // TODO: Agregar event listener al botón para deshacer la edicion de un contacto (eliminar el cod de SS, vaciar los campos, resetear las clases,esconder alert, esconder boton)
};

const toggleDestacarPelicula = (codigo, $iconoEstrella) => {
  const peliculas = obtenerPeliculaDeLS();

  // Desmarcar cualquier otra película que esté destacada
  peliculas.forEach(pelicula => {
      if (pelicula.destacar) {
          pelicula.destacar = false;
      }
  });

  // Encontrar la película actual y marcarla como destacada
  const pelicula = peliculas.find(pelicula => pelicula.codigo === codigo);
  if (pelicula) {
      pelicula.destacar = true;
      localStorage.setItem('peliculas', JSON.stringify(peliculas));
      cargarTabla();  // Para actualizar visualmente la tabla
  }
};

const togglePublicarPelicula = (codigo, $btnPublicar) => {
    const peliculas = obtenerPeliculaDeLS();
    const pelicula = peliculas.find(pelicula => pelicula.codigo === codigo);
    
    if (pelicula) {
        pelicula.publicada = !pelicula.publicada;
        localStorage.setItem('peliculas', JSON.stringify(peliculas));
        // Actualizar el botón de publicación
        $btnPublicar.classList.toggle('btn-success', pelicula.publicada);
        $btnPublicar.classList.toggle('btn-secondary', !pelicula.publicada);
        $btnPublicar.textContent = pelicula.publicada ? 'Publicado' : 'No Publicado';
    }
};

export const estaEditando = () => {

  return !!sessionStorage.getItem('codigoPelicula');
};

export const estaEditandoCat = () => {

  return !!sessionStorage.getItem('codigoCategoria');
};

