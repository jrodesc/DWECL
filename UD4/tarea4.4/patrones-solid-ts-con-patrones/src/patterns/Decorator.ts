interface Cafe {
  costo(): number;
  descripcion(): string;
}
//concrete component
class CafeSimple implements Cafe {
  costo(): number {
    return 2;
  }
  descripcion(): string {
    return "☕ Café simple";
  }
}
class CafeDecorator implements Cafe {
    constructor(private cafe: Cafe) {}
    costo(): number {
        return this.cafe.costo();
    }
    descripcion(): string {
        return this.cafe.descripcion();
    }
}
//decoradores
class DecoradorLeche extends CafeDecorator {
  costo(): number {
    return super.costo() + 0.5;
  }
  descripcion(): string {
    return super.descripcion() + " + 🥛 leche";
  }
}
class DecoradorChocolate extends CafeDecorator {
  costo(): number {
    return super.costo() + 0.7;
  }
  descripcion(): string {
    return super.descripcion() + " + 🍫 chocolate";
  }
}
class DecoradorSacarina extends CafeDecorator {
  costo(): number {
      return super.costo() + 0.5;
  }
  descripcion(): string {
      return super.descripcion() + " + Sacarina";
  }
}
let miCafe: Cafe = new CafeSimple();
miCafe = new DecoradorLeche(miCafe);
miCafe = new DecoradorSacarina(miCafe);
console.log(`${miCafe.descripcion()} cuesta ${miCafe.costo()}€`);



//basicamente el cafeDecorator sirve para cuando queremos hacer efecto sobre otro decorator
//wrappee es el objeto envuelto
