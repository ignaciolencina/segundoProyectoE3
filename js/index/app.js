import { obtenerPeliculaDeLS } from "../utils.js";
import { cargarCard } from "./utils.js";

const peliculas = obtenerPeliculaDeLS();

// Carga de las peliculas/series en el body

peliculas.forEach((pelicula) => {
    cargarCard(pelicula);
});