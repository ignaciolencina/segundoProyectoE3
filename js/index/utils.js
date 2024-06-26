export const cargarCardLanzamientos = (pelicula) => {
  const $seccionLanzamientos = document.getElementById("seccion-lanzamientos");

  const $cardDiv = document.createElement("div");
  $cardDiv.className = "card m-3 g-0 col-3";

  const $imagen = document.createElement("img");
  $imagen.src = pelicula.portada;
  $imagen.alt = pelicula.nombre;
  $imagen.className = "card-image";

  const $contenidoDiv = document.createElement("div");
  $contenidoDiv.className = "card-content";

  const $primeTitulo = document.createElement("h6");
  $primeTitulo.className = "mb-3";
  $primeTitulo.innerHTML =
    '<span><i class="fa-solid fa-circle-check me-2 palabra-prime"></i></span>Se incluye con Prime';

  const $contenidoArticle = document.createElement("article");
  $contenidoArticle.className = "d-flex align-items-center reproduccion";

  const $playLink = document.createElement("a");
  $playLink.href = "./pages/detalle.html";
  $playLink.classList.add(
    "text-decoration-none",
    "botones-card",
    "mx-1",
    "fs-5",
    "btn-play"
  );

  const $playBoton = document.createElement("a");
  $playBoton.href = "#";
  $playBoton.innerHTML = '<i class="fa-solid fa-circle-play me-2"></i>Reproducir'

  $playLink.appendChild($playBoton);

  const $botonesDiv = document.createElement("div");
  $botonesDiv.className = "d-flex align-items-center";

  const $botonMas = document.createElement("a");
  $botonMas.href = "#";
  $botonMas.innerHTML = '<i class="fa-solid fa-plus"></i>';

  const $infoLink = document.createElement("a");
  $infoLink.href = "#";
  $infoLink.innerHTML = '<i class="fa-solid fa-circle-info"></i>';

  $botonesDiv.appendChild($botonMas);
  $botonesDiv.appendChild($infoLink);

  $contenidoArticle.appendChild($playLink);
  $contenidoArticle.appendChild($botonesDiv);

  const $peliculaTitulo = document.createElement("h5");
  $peliculaTitulo.className = "card-title mb-4 fs-4";
  $peliculaTitulo.textContent = pelicula.nombre;

  $contenidoDiv.appendChild($primeTitulo);
  $contenidoDiv.appendChild($contenidoArticle);
  $contenidoDiv.appendChild($peliculaTitulo);

  $cardDiv.appendChild($imagen);
  $cardDiv.appendChild($contenidoDiv);

  $seccionLanzamientos.appendChild($cardDiv);
};

export const cargarCardSeries = (pelicula) => {
  const $seccionLanzamientos = document.getElementById("seccion-series");

  const $cardDiv = document.createElement("div");
  $cardDiv.className = "card m-3 g-0 col-3";

  const $imagen = document.createElement("img");
  $imagen.src = pelicula.portada;
  $imagen.alt = pelicula.nombre;
  $imagen.className = "card-image";

  const $contenidoDiv = document.createElement("div");
  $contenidoDiv.className = "card-content";

  const $primeTitulo = document.createElement("h6");
  $primeTitulo.className = "mb-3";
  $primeTitulo.innerHTML =
    '<span><i class="fa-solid fa-circle-check me-2 palabra-prime"></i></span>Se incluye con Prime';

  const $contenidoArticle = document.createElement("article");
  $contenidoArticle.className = "d-flex align-items-center reproduccion";

  const $playLink = document.createElement("a");
  $playLink.href = "#";
  $playLink.className = "d-flex align-items-center me-2";

  const $playBoton = document.createElement("a");
  $playBoton.href = "./pages/detalle.html";
  $playBoton.innerHTML = '<i class="fa-solid fa-circle-play me-2 btn-play"></i>Reproducir'

  $playLink.appendChild($playBoton);

  const $botonesDiv = document.createElement("div");
  $botonesDiv.className = "d-flex align-items-center";

  const $botonMas = document.createElement("a");
  $botonMas.href = "#";
  $botonMas.innerHTML = '<i class="fa-solid fa-plus"></i>';

  const $infoLink = document.createElement("a");
  $infoLink.href = "#";
  $infoLink.innerHTML = '<i class="fa-solid fa-circle-info"></i>';

  $botonesDiv.appendChild($botonMas);
  $botonesDiv.appendChild($infoLink);

  $contenidoArticle.appendChild($playLink);
  $contenidoArticle.appendChild($botonesDiv);

  const $peliculaTitulo = document.createElement("h5");
  $peliculaTitulo.className = "card-title mb-4 fs-4";
  $peliculaTitulo.textContent = pelicula.nombre;

  $contenidoDiv.appendChild($primeTitulo);
  $contenidoDiv.appendChild($contenidoArticle);
  $contenidoDiv.appendChild($peliculaTitulo);

  $cardDiv.appendChild($imagen);
  $cardDiv.appendChild($contenidoDiv);

  $seccionLanzamientos.appendChild($cardDiv);
};

export const caratulaDestacada = (pelicula) => {
  const $peliculaDestacada = document.getElementById("pelicula-destacada");

  const $portada = document.createElement("img");
  $portada.src = pelicula.portada;
  $portada.alt = pelicula.nombre;
  $portada.className = "portada-destacada";
  $peliculaDestacada.appendChild($portada);

  const $contenedor = document.createElement("div");
  $contenedor.className = "card z-3 position-absolute acciones-portada";

  const $contenidoDiv = document.createElement("div");
  $contenidoDiv.className = "card-content";

  const $peliculaTitulo = document.createElement("h5");
  $peliculaTitulo.className = "card-title text-light mb-4";
  $peliculaTitulo.textContent = pelicula.nombre;

  const $primeTitulo = document.createElement("h6");
  $primeTitulo.className = "mb-3 text-light";
  $primeTitulo.innerHTML =
    '<span><i class="fa-solid fa-circle-check me-2 palabra-prime"></i></span>Se incluye con Prime';

  const $contenidoArticle = document.createElement("article");
  $contenidoArticle.className = "d-flex align-items-center reproduccion";

  const $playLink = document.createElement("a");

  $playLink.href = "#";
  $playLink.className = "d-flex align-items-center me-2 navegacion-play";


  const $playBoton = document.createElement("a");
  $playBoton.href = "#";
  $playBoton.innerHTML = '<i class="fa-solid fa-circle-play me-3"></i>Reproducir'

  $playLink.appendChild($playBoton);

  const $botonesDiv = document.createElement("div");
  $botonesDiv.className = "d-flex align-items-center";

  const $botonMas = document.createElement("a");
  $botonMas.href = "#";
  $botonMas.innerHTML = '<i class="fa-solid fa-plus"></i>';

  const $infoLink = document.createElement("a");
  $infoLink.href = "#";
  $infoLink.innerHTML = '<i class="fa-solid fa-circle-info"></i>';

  $botonesDiv.appendChild($botonMas);
  $botonesDiv.appendChild($infoLink);

  $contenidoArticle.appendChild($playLink);
  $contenidoArticle.appendChild($botonesDiv);

  $contenidoDiv.appendChild($peliculaTitulo);
  $contenidoDiv.appendChild($primeTitulo);
  $contenidoDiv.appendChild($contenidoArticle);

  $contenedor.appendChild($contenidoDiv);

  $peliculaDestacada.appendChild($contenedor);
};

// Scroll horizontal

export function agregarScrollHorizontal(scrollHorizontal) {
  scrollHorizontal.addEventListener("wheel", (event) => {
    event.preventDefault();
    scrollHorizontal.scrollLeft += event.deltaX;
  });
}


export const cargarCardCategorias = (pelicula) => {
  
  const $cardDiv = document.createElement("div");
  $cardDiv.className = "card m-3 g-0 col-3";

  const $imagen = document.createElement("img");
  $imagen.src = pelicula.portada;
  $imagen.alt = pelicula.nombre;
  $imagen.className = "card-image";

  const $contenidoDiv = document.createElement("div");
  $contenidoDiv.className = "card-content";

  const $primeTitulo = document.createElement("h6");
  $primeTitulo.className = "mb-3";
  $primeTitulo.innerHTML =
    '<span><i class="fa-solid fa-circle-check me-2 palabra-prime"></i></span>Se incluye con Prime';

  const $contenidoArticle = document.createElement("article");
  $contenidoArticle.className = "d-flex align-items-center reproduccion";

  const $playLink = document.createElement("a");
  $playLink.href = "#";
  $playLink.classList.add(
    "text-decoration-none",
    "botones-card",
    "mx-1",
    "fs-5"
  );

  const $playBoton = document.createElement("a");
  $playBoton.href = "#";
  $playBoton.innerHTML = '<i class="fa-solid fa-circle-play me-2"></i>Reproducir'

  $playLink.appendChild($playBoton);

  const $botonesDiv = document.createElement("div");
  $botonesDiv.className = "d-flex align-items-center";

  const $botonMas = document.createElement("a");
  $botonMas.href = "#";
  $botonMas.innerHTML = '<i class="fa-solid fa-plus"></i>';

  const $infoLink = document.createElement("a");
  $infoLink.href = "#";
  $infoLink.innerHTML = '<i class="fa-solid fa-circle-info"></i>';

  $botonesDiv.appendChild($botonMas);
  $botonesDiv.appendChild($infoLink);

  $contenidoArticle.appendChild($playLink);
  $contenidoArticle.appendChild($botonesDiv);

  const $peliculaTitulo = document.createElement("h5");
  $peliculaTitulo.className = "card-title mb-4 fs-4";
  $peliculaTitulo.textContent = pelicula.nombre;

  $contenidoDiv.appendChild($primeTitulo);
  $contenidoDiv.appendChild($contenidoArticle);
  $contenidoDiv.appendChild($peliculaTitulo);

  $cardDiv.appendChild($imagen);
  $cardDiv.appendChild($contenidoDiv);

  return $cardDiv;

 
};