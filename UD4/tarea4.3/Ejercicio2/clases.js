class Animal {
    constructor(name) {
        this._name = name;
    }
    get getName() {
        return this._name;
    }
    set setName(name) {
        this._name = name;
    }
    
    hacerRuido() {
        return "Soy " + this.getName + " y soy un animal y ";
    }
}

class Zebra extends Animal {
    constructor(name, rayas) {
        super(name);
        this._rayas = rayas;
    }
    get getRayas() {
        return this._rayas;
    }
    set setRayas(rayas) {
        this._rayas = rayas;
    }
    zebraRuido() {
        return this.hacerRuido() + "tengo la propiedad " + this.getRayas + " y hago ruidos al caiman." 
    }
}

class Caiman extends Animal {
    constructor(name, morder) {
        super(name);
        this._morder = morder;
    }
    get getMorder() {
        return this._morder;
    }
    
    set setMorder(morder) {
        this._morder = morder;
    }
    caimanRuido() {
        return this.hacerRuido() + "tengo la propiedad " + this.getMorder + " y hago mordeduras a la zebra." 
    }
}
let zebra = new Zebra("Julio", "rayas");
let caiman = new Caiman("Angel", "morder");

console.log(zebra.zebraRuido());
console.log(caiman.caimanRuido());