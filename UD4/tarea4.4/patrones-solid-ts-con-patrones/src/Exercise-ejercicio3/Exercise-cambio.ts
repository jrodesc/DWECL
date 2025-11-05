abstract class Usuario3 {

  private _id: number | null = null;  
  private _name: string = '';  

  constructor(id: number, name: string) {
    this._id = id;
    this._name = name;
  }

  public get id(): number | null {
    return this._id;
  }

  public set id(value: number | null) {
    this._id = value;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }  

  abstract saludar() : void;
}


class Boss extends Usuario3 {
  saludar(): void {
    console.log(`Hola soy el jefe: ${this.name}`);
  }
}


class Employee extends Usuario3 {
  saludar(): void {
    console.log(`Hola soy el empleado: ${this.name}`);
  }

}

let opcion = "employee";
let user3: Usuario3;
if(opcion === "boss") {
  user3 = new Boss(1, "Angel");
  user3.saludar();
} else if(opcion === "employee") {
  user3 = new Employee(2, "Julio");
  user3.saludar();
}

