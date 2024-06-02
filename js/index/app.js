import { obtenerPeliculaDeLS } from "../utils.js";
import { cargarCard } from "./utils.js";
import { caratulaDestacada } from "./utils.js";
import { agregarScrollHorizontal } from "./utils.js";

const $seccionPeliculasBuscadas = document.getElementById(
  "seccion-peliculas-buscadas"
);
const peliculas = obtenerPeliculaDeLS();

// Carga de las peliculas/series en el body

peliculas.forEach((pelicula) => {
  if (pelicula.publicada === true) {
    cargarCard(pelicula);
  }
});

// Busqueda

const $formBusqueda = document.getElementById("form-index-peliculas");
const $inputBusqueda = document.getElementById("input-busqueda-peliculas");

$formBusqueda.addEventListener("submit", (e) => {
  e.preventDefault();

  $seccionPeliculasBuscadas.innerHTML = "";

  const busqueda = $inputBusqueda.value.trim();

  if (busqueda !== "") {
    const peliculaFiltrada = peliculas.filter((pelicula) => {
      return (
        pelicula.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        pelicula.categoria.toLowerCase().includes(busqueda.toLowerCase())
      );
    });

    peliculaFiltrada.forEach((pelicula) => {
      const $a = document.createElement("a");
      $a.href = "#";
      $a.className = "text-light text-decoration-none ms-2 d-block";
      $a.innerText = `${pelicula.nombre} / ${pelicula.categoria}`;
      $seccionPeliculasBuscadas.appendChild($a);
    });
  } else {
    const $mensaje = document.createElement("p");
    $mensaje.className = "text-light ms-2";
    $mensaje.innerText = "Por favor, ingrese un título o categoría";
    $seccionPeliculasBuscadas.appendChild($mensaje);
  }
});

// Carga de película destacada al body

peliculas.forEach((pelicula) => {
  if (pelicula.publicada === true && pelicula.destacar === true) {
    caratulaDestacada(pelicula);
  }
});


const $seccionLanzamientos = document.getElementById("seccion-lanzamientos");

$seccionLanzamientos.forEach((pelicula) => {
  agregarScrollHorizontal(pelicula)
});

