class Configuracion {
  private static instancia: Configuracion;

  private static cosa: String;
  private constructor(public apiUrl: string) {
  }

  static getInstancia(): Configuracion {
    if (!Configuracion.instancia) {
      Configuracion.instancia = new Configuracion("https://api.miapp.com");
    }
    return Configuracion.instancia;
  }

  static getCosa(): String {
    return this.cosa;
  }

  static setCosa(cosaNueva: String): void {
    if(!Configuracion.cosa) {
      Configuracion.cosa = cosaNueva;
    }
  }
}


Configuracion.setCosa("Cosa Nueva");
const cosa1 = Configuracion.getCosa();
const cosa2 = Configuracion.getCosa();
const conf1 = Configuracion.getInstancia();
const conf2 = Configuracion.getInstancia();

console.log(cosa2);
console.log(cosa1);
console.log(cosa1 === cosa2)
console.log(conf1 === conf2); // true ✅
