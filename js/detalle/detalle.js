 const cargarPaginaDetalles = () => {
    const pelicula = JSON.parse(localStorage.getItem("peliculaSeleccionada"));
    
    const $sectionPelicula = document.getElementById("section-pelicula");
    
    $sectionPelicula.innerHTML = " ";
  
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
  
    const $enlaceFavoritos = document.createElement("a");
    $enlaceFavoritos.href = "#";
    $enlaceFavoritos.classList.add("title");
  
    const $iconFavoritos = document.createElement("i");
    $iconFavoritos.classList.add("far", "fa-bookmark", "fs-5");
  
    $enlaceFavoritos.appendChild($iconFavoritos);
  
    $titleContainer.appendChild($title);
    $titleContainer.appendChild($enlaceFavoritos);
  
    const $iconContainer = document.createElement("div");
    $iconContainer.classList.add("icon-container");
  
    const $likeDislike = document.createElement("div");
    $likeDislike.classList.add("like-dislike");
  
    const $enlaceLike = document.createElement("a");
    $enlaceLike.href = "#";
    $enlaceLike.classList.add("text-decoration-none");
  
    const $iconoLike = document.createElement("i");
    $iconoLike.classList.add("far", "fa-thumbs-up", "fs-5");
  
    $enlaceLike.appendChild($iconoLike);
  
    const $enlaceDislike = document.createElement("a");
    $enlaceDislike.href = "#";
    $enlaceDislike.classList.add("text-decoration-none");
  
    const $iconoDislike = document.createElement("i");
    $iconoDislike.classList.add("far", "fa-thumbs-down", "fs-5", "mx-3");
  
    $enlaceDislike.appendChild($iconoDislike);
  
    $likeDislike.appendChild($enlaceLike);
    $likeDislike.appendChild($enlaceDislike);
  
    const $enlaceShare = document.createElement("a");
    $enlaceShare.href = "#";
    $enlaceShare.classList.add("text-decoration-none");
  
    const $iconoShare = document.createElement("i");
    $iconoShare.classList.add("fas", "fa-share-alt");
  
    $enlaceShare.appendChild($iconoShare);
  
    $iconContainer.appendChild($likeDislike);
    $iconContainer.appendChild($enlaceShare);
  
    const $description = document.createElement("p");
    $description.classList.add("description", "mt-3");
    $description.textContent = pelicula.descripcion;
  
    $primerCol.appendChild($titleContainer);
    $primerCol.appendChild($iconContainer);
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


  
  cargarPaginaDetalles();