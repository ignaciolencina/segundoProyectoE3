import { obtenerPeliculaDeLS } from "../utils.js";
import { obtenerCategoriaDeLS } from "../utils.js";
import { cargarCardLanzamientos } from "./utils.js";
import { cargarCardSeries } from "./utils.js";
import { cargarCardCategorias } from "./utils.js";
import { caratulaDestacada } from "./utils.js";
import { validateName } from "../validators.js";
import { agregarScrollHorizontal } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  const estaLogueado = sessionStorage.getItem("estaLogueado") === "true";

  const loginButton = document.getElementById("inicio");
  const registerButton = document.getElementById("registro");
  const logoutButton = document.getElementById("cerrarSesion");
  const adminButton = document.getElementById("admin");

  if (estaLogueado) {
    loginButton.style.display = "none";
    registerButton.style.display = "none";
    adminButton.style.display = "block";
    logoutButton.style.display = "block";
  } else {
    loginButton.style.display = "block";
    registerButton.style.display = "block";
    adminButton.style.display = "none";
    logoutButton.style.display = "none";
  }

  logoutButton.addEventListener("click", () => {
    localStorage.setItem("estaLogueado", "false");
  });
});

const $seccionPeliculasBuscadas = document.getElementById(
  "seccion-peliculas-buscadas"
);
const peliculas = obtenerPeliculaDeLS();
const categorias = obtenerCategoriaDeLS();

// Carga de las peliculas/series  ---------------

peliculas.forEach((pelicula) => {
  if (pelicula.publicada === true && pelicula.tipo === "Pelicula") {
    cargarCardLanzamientos(pelicula);
  } else if (pelicula.publicada === true && pelicula.tipo === "Serie") {
    cargarCardSeries(pelicula);
  }
});

// Carga de peliculas por categoría ---------------------------------------------------

const $cargaCategorias = document.getElementById("seccion-categorias");

categorias.forEach((categoria) => {
  const $article = document.createElement("article");

  const $categoriaTitulo = document.createElement("h3");
  $categoriaTitulo.className = "text-light ms-3 mt-4";
  $categoriaTitulo.innerHTML = `<span class="palabra-prime">Prime </span>${categoria.nombre}`;

  $article.appendChild($categoriaTitulo);

  const $peliculasContenedor = document.createElement("div");
  $peliculasContenedor.className = "peliculas-contenedor";
});

const peliculasFiltradas = peliculas.filter(
  (pelicula) => normalizar(pelicula.categoria) === normalizar(categoria.nombre)
);

peliculasFiltradas.forEach((pelicula) => {
  const $peliculaCard = cargarCardCategorias(pelicula);
  $peliculasContenedor.appendChild($peliculaCard);
});

$article.appendChild($peliculasContenedor);
$cargaCategorias.appendChild($article);

// Busqueda -------------------------------------------------------------------------------

const $formBusqueda = document.getElementById("form-index-peliculas");
const $inputBusqueda = document.getElementById("input-busqueda-peliculas");

function normalizar(cadena) {
  return cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

$formBusqueda.addEventListener("submit", (event) => {
  event.preventDefault();

  if (validateName($inputBusqueda)) {
    console.log("Búsqueda válida:", $inputBusqueda);
  } else {
    Swal.fire({
      icon: "error",
      title: "Título no válido",
      text: "Por favor, ingrese un nombre válido.",
    });
  }
});

$formBusqueda.addEventListener("submit", (e) => {
  e.preventDefault();

  $seccionPeliculasBuscadas.innerHTML = "";

  const busqueda = normalizar($inputBusqueda.value.trim());

  if (busqueda !== "") {
    const peliculaFiltrada = peliculas.filter((pelicula) => {
      return (
        normalizar(pelicula.nombre)
          .toLowerCase()
          .includes(busqueda.toLowerCase()) ||
        normalizar(pelicula.categoria)
          .toLowerCase()
          .includes(busqueda.toLowerCase())
      );
    });

    peliculaFiltrada.forEach((pelicula) => {
      const $a = document.createElement("a");
      $a.href = "./pages/error404.html";
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

// Carga de película destacada al body -----------------------------------------------------

peliculas.forEach((pelicula) => {
  if (pelicula.publicada === true && pelicula.destacar === true) {
    caratulaDestacada(pelicula);
  }
});

// Agregado de scroll horizontal----------

$seccionLanzamientos.forEach((pelicula) => {
  agregarScrollHorizontal(pelicula);
});

