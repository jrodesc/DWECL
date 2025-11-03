interface Notificador {
  enviar(mensaje: string): void;
}

class EmailService implements Notificador {
  enviar(mensaje: string) {
    console.log(`📧 Email enviado: ${mensaje}`);
  }
}

class PushService implements Notificador {
  enviar(mensaje: string) {
    console.log(`🔔 Push enviado: ${mensaje}`);
  }
}

class UserController {
  constructor(private notificador: Notificador) {}

  registrarUsuario(nombre: string) {
    console.log(`👤 Usuario ${nombre} registrado`);
    this.notificador.enviar(`Bienvenido, ${nombre}`);
  }
}

class WhatsappService implements Notificador{
  enviar(mensaje: string): void {
      console.log(`Whatsapp enviado: ${mensaje}`);
  }
}


const email = new EmailService();
const push = new PushService();
const whatsapp = new WhatsappService();

const controller1 = new UserController(email);

const controller2 = new UserController(push);

const controller3 = new UserController(whatsapp);

const controladores = [controller1, controller2, controller3];

controladores.forEach(element => {
  element.registrarUsuario("Persona Nueva.");
});

