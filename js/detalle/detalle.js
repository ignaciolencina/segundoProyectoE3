import { obtenerPeliculaDeLS } from "../utils.js";

export const cargarPaginaDetalles = (iindex) => {
  const peliculas = obtenerPeliculaDeLS();
  const pelicula = peliculas[index]; 

  if (!pelicula) {
    console.error("Película no encontrada");
    return;
  }
  const $sectionInfoPelicula = document.getElementById("section-info");
  $sectionInfoPelicula.classList.add("container", "my-4");
  $sectionInfoPelicula.innerHTML = "";

  const $row = document.createElement("div");
  $row.classList.add("row");

  const $primerCol = document.createElement("div");
  $primerCol.classList.add("col-md-6", "mb-3", "mb-md-0");

  const $titleContainer = document.createElement("div");
  $titleContainer.classList.add("title-container");

  const $title = document.createElement("h3");
  $title.classList.add("title");
  $title.textContent = pelicula.nombre; 

  $titleContainer.appendChild($title); 

  const $description = document.createElement("p");
  $description.classList.add("descripcion", "mt-3");
  $description.textContent = pelicula.descripcion;

  $primerCol.appendChild($titleContainer);
  $primerCol.appendChild($description);

  const $segundaCol = document.createElement("div");
  $segundaCol.classList.add("col-md-6", "img-container");

  const $imgPelicula = document.createElement("img");
  $imgPelicula.classList.add("img-detalle-pelicula");
  $imgPelicula.src = pelicula.portada;
  $imgPelicula.alt = pelicula.nombre;

  $segundaCol.appendChild($imgPelicula);

  $row.appendChild($primerCol);
  $row.appendChild($segundaCol);

  $sectionInfoPelicula.appendChild($row);
};