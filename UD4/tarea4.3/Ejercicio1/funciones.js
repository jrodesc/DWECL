function Animal(nombre) {
  this.nombre = nombre;
}

Animal.prototype.hacerRuido = function () {
  return "Soy " + this.nombre + " y soy un animal y hago...";
};

function Zebra(nombre, rayas) {
  Animal.call(this, nombre);
  this.rayas = rayas;
}
Zebra.prototype = Object.create(Animal.prototype);
Zebra.prototype.constructor = Zebra;

Zebra.prototype.hacerRuido = function () {
    console.log(
      "Soy " + this.nombre + " y soy un animal, tengo la propiedad "+this.rayas +"y hago rudios al caiman"
    )
}

function Caiman(nombre, morder) {
  Animal.call(this, nombre);
  this.morder = morder;
}
Caiman.prototype = Object.create(Animal.prototype);
Caiman.prototype.constructor = Caiman;

Caiman.prototype.hacerRuido = function() {
    console.log(
      "Soy " + this.nombre + " y soy un animal "+this.morder +"y hago mordeduras a la zebra"
    )
}


const miZebra = new Zebra("Julio", "rayas");

const miCaiman = new Caiman("Angel", "morder");
miCaiman.hacerRuido();
miZebra.hacerRuido();