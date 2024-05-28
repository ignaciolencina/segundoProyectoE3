export class Contacto {
    constructor(nombre,categorias, portada, descripcion) {
      this.codigo = window.self.crypto.randomUUID();
      this.categorias = categorias;
      this.nombre = nombre;
      this.portada = portada;
      this.descripcion = descripcion;
    }
  }