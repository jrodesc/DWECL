class Animal {
    constructor(name) {
        this.name = name;
    }
    
    hacerRuido() {
        return "Soy " + this.name + " y soy un animal y ";
    }
}

class Zebra extends Animal {
    constructor(name, rayas) {
        super(name);
        this.rayas = rayas;
    }

    zebraRuido() {
        return this.hacerRuido() + "tengo la propiedad " + this.rayas + " y hago ruidos al caiman." 
    }
}

class Caiman extends Animal {
    constructor(name, morder) {
        super(name);
        this.morder = morder;
    }

    caimanRuido() {
        return this.hacerRuido() + "tengo la propiedad " + this.morder + " y hago mordeduras a la zebra." 
    }
}
let zebra = new Zebra("Julio", "rayas");
let caiman = new Caiman("Angel", "morder");

console.log(zebra.zebraRuido());
console.log(caiman.caimanRuido());