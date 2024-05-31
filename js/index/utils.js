export const cargarCard = (pelicula) => {
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
  $playLink.href = "#";
  $playLink.className = "d-flex align-items-center me-2";

  const $playBoton = document.createElement("h6");
  $playBoton.className =
    "card-subtitle text-light fs-6 d-flex align-items-center";
  $playBoton.innerHTML =
    '<span class="me-1"><button class="btn p-0"><i class="fa-solid fa-circle-play me-1"></i></button></span>Reproducir';

  $playLink.appendChild($playBoton);

  const $botonesDiv = document.createElement("div");
  $botonesDiv.className = "d-flex align-items-center";

  const $botonMas = document.createElement("button");
  $botonMas.className = "btn p-0 me-1";
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

