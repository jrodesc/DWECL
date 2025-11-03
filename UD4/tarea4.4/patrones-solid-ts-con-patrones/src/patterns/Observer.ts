interface Observador {
  actualizar(mensaje: string): void;
}

class Canal {
  private observadores: Observador[] = [];

  suscribir(obs: Observador) {
    this.observadores.push(obs);
  }

  notificar(mensaje: string) {
    for (const obs of this.observadores) {
      obs.actualizar(mensaje);
    }
  }
}

class CanalPrivado {
  private observadores: Observador[] = [];

  avisar(obs: Observador) {
    this.observadores.push(obs);
  }

  notificar(aviso: string) {
    for(const obs of this.observadores) {
      obs.actualizar(aviso);
    }
  }
}

class Usuario implements Observador {
  constructor(private nombre: string) {}
  actualizar(mensaje: string): void {
    console.log(`📢 ${this.nombre} ha recibido: ${mensaje}`);
  }
}

class Prueba implements Observador {
  constructor(private prueba: string) {}
  actualizar(mensaje: string): void {
      console.log(`${this.prueba} ha recibido(prueba): ${mensaje}`);
  }
}

const canal = new Canal();
const canalPrivado = new CanalPrivado();
const julio = new Usuario("Julio");
const ana = new Usuario("Ana");
const luis = new Usuario("Luis");
const prueba = new Prueba("Prueba");


canalPrivado.avisar(julio);

canalPrivado.notificar("¡Nuevo vídeo disponible!");

canal.notificar("¡Nuevo vídeo disponible!");
