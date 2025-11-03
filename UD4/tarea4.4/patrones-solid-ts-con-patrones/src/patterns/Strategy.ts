interface MetodoPago {
  pagar(monto: number): void;
}

class PagoTarjeta implements MetodoPago {
  pagar(monto: number): void {
    console.log(`💳 Pagando ${monto}€ con tarjeta.`);
  }
}

class PagoPayPal implements MetodoPago {
  pagar(monto: number): void {
    console.log(`💰 Pagando ${monto}€ con PayPal.`);
  }
}

class PagoBitcoin implements MetodoPago {
  pagar(monto: number): void {
    console.log(`₿ Pagando ${monto}€ con Bitcoin.`);
  }
}
class PagoKlarna implements MetodoPago {
  pagar(monto: number): void {
      console.log(`Pagando ${monto}€ con Klarna`);
  }
}

class Carrito {
  constructor(private metodoPago: MetodoPago) {}

  setMetodoPago(metodo: MetodoPago) {
    this.metodoPago = metodo;
  }

  pagar(monto: number) {
    this.metodoPago.pagar(monto);
  }
}

const carrito = new Carrito(new PagoTarjeta());
carrito.pagar(50);
carrito.setMetodoPago(new PagoKlarna());
carrito.pagar(75);
