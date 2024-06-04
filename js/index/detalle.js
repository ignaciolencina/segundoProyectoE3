// Funciones para obtener datos de localStorage
import { obtenerPeliculaDeLS } from "../utils.js";

// Función para cargar el detalle de la película o serie
const cargarDetalle = () => {
  // Obtener el código o nombre de la película/serie desde la URL
  const params = new URLSearchParams(window.location.search);
  const parametro = params.get('parametro');

  // Obtener todas las películas/series
  const peliculas = obtenerPeliculaDeLS();

  // Buscar la película/serie por código o nombre
  const pelicula = peliculas.find(p => p.nombre.toLowerCase() === parametro.toLowerCase());

  if (pelicula) {
    // Crear elementos para mostrar el detalle
    const $detalleContenido = document.getElementById('detalle-contenido');
    const $detalleDiv = document.createElement('div');
    $detalleDiv.className = 'detalle';

    const $imagen = document.createElement('img');
    $imagen.src = pelicula.portada;
    $imagen.alt = pelicula.nombre;

    const $titulo = document.createElement('h1');
    $titulo.textContent = pelicula.nombre;

    const $descripcion = document.createElement('p');
    $descripcion.textContent = pelicula.descripcion;

    const $categoria = document.createElement('p');
    $categoria.textContent = `Categoría: ${pelicula.categoria}`;

    // Agregar elementos al contenedor
    $detalleDiv.appendChild($imagen);
    $detalleDiv.appendChild($titulo);
    $detalleDiv.appendChild($descripcion);
    $detalleDiv.appendChild($categoria);

    // Agregar el contenedor al contenido principal
    $detalleContenido.appendChild($detalleDiv);
  } else {
    // Mostrar mensaje si no se encuentra la película/serie
    const $mensaje = document.createElement('p');
    $mensaje.textContent = 'No se encontró la película o serie.';
    document.getElementById('detalle-contenido').appendChild($mensaje);
  }
};

// Ejecutar la función para cargar el detalle al cargar la página
document.addEventListener('DOMContentLoaded', cargarDetalle);