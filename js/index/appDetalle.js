import { obtenerPeliculaDeLS } from "../utils.js";

document.addEventListener("DOMContentLoaded", () => {
  const botonesPlay = document.querySelectorAll(".btn-play");

  botonesPlay.forEach((boton, index) => {
    boton.addEventListener("click", (event) => {
      event.preventDefault();

      const peliculas = obtenerPeliculaDeLS();
      const pelicula = peliculas[index];

      localStorage.setItem("peliculaSeleccionada", JSON.stringify(pelicula));

      window.location.href = "./pages/detalle.html";
    });
  });
});
