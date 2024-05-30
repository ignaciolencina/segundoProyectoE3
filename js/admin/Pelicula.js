export class Pelicula {
    constructor(tipo, categoria, nombre, portada, descripcion) {
      this.codigo = window.self.crypto.randomUUID();
      this.tipo = tipo;
      this.categoria = categoria;
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