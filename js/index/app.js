import { obtenerPeliculaDeLS } from "../utils.js";
import { obtenerCategoriaDeLS } from "../utils.js";
import { cargarCardLanzamientos } from "./utils.js";
import { caratulaDestacada } from "./utils.js";
import { agregarScrollHorizontal } from "./utils.js";

const $seccionPeliculasBuscadas = document.getElementById(
  "seccion-peliculas-buscadas"
);
const peliculas = obtenerPeliculaDeLS();
const categorias = obtenerCategoriaDeLS();

// Carga de las peliculas/series en la seccion de últimos lanzaminetos

peliculas.forEach((pelicula) => {
  if (pelicula.publicada === true) {
    cargarCardLanzamientos(pelicula);
  }
});

// Carga de peliculas por categoría

const $cargaCategorias = document.getElementById("seccion-categorias");

const contenedoresCategorias = {};

categorias.forEach((categoria) => {
  const $article = document.createElement("article");

  const $categoriaTitulo = document.createElement("h3");
  $categoriaTitulo.className = "text-light";
  $categoriaTitulo.innerHTML = `<span class="palabra-prime">Prime </span>${categoria.nombre}`;

  $article.appendChild($categoriaTitulo);

  const $categoriaSeccion = document.createElement("div");
  $categoriaSeccion.className = "categoria-seccion";

  contenedoresCategorias[categoria.nombre] = $categoriaSeccion;

  $article.appendChild($categoriaSeccion);
  $cargaCategorias.appendChild($article);
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
  agregarScrollHorizontal(pelicula);
});
