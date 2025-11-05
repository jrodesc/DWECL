class UserModificado {

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

}

class UserPersistencia {

  getById(id: number | null) {
    console.log(`Simulando consulta usuario ${id}`);
    console.log(`Hago log de getById`);
  }

  saveUser(id: number | null) {
    console.log(`Simulando salvar usuario ${id}`);
    console.log(`Hago log de saveUser`);
  }
}


const UserMod: UserModificado = new UserModificado(1, "Angel");

const UserPer: UserPersistencia = new UserPersistencia();

UserPer.getById(1);

UserPer.saveUser(1);

