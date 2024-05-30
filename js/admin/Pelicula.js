export class Pelicula {
    constructor(nombre, portada, descripcion) {
      this.codigo = window.self.crypto.randomUUID();
      this.nombre = nombre;
      this.portada = portada;
      this.descripcion = descripcion;
    }
  }

  export class Categoria {
    constructor(nombre) {
      this.codigo = window.self.crypto.randomUUID();
      this.nombre = nombre;
    }
  }