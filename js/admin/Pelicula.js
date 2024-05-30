export class Pelicula {
<<<<<<< HEAD
    constructor(nombre, portada, descripcion) {
      this.codigo = window.self.crypto.randomUUID();
=======
    constructor(tipo, categoria, nombre, portada, descripcion) {
      this.codigo = window.self.crypto.randomUUID();
      this.tipo = tipo;
      this.categoria = categoria;
>>>>>>> 009a267de4417fa7c06481f2cf34cfa4712a7c57
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