function edadSwitch() {
  //inicializamos la edad en 0
  let edad = 0;
  let respuesta = "";

  edad = parseInt(document.getElementById("edad").value);
  /*
    en este switch hacemos un sistema que nos indica en funcion de la edad del usuario
    si es un niño, adulto, joven...
    */
  switch (true) {
    case edad >= 0 && edad <= 12:
      document.getElementById("solucion").innerHTML = "niño";
      break;
    case edad >= 13 && edad <= 26:
      document.getElementById("solucion").innerHTML = "joven";
      break;
    case edad >= 27 && edad <= 60:
      document.getElementById("solucion").innerHTML = "adulto";
      break;
    case edad >= 61 && edad <= 70:
      document.getElementById("solucion").innerHTML = "jubilado";
      break;
    default:
      document.getElementById("solucion").innerHTML =
        "La edad no esta entre 0 y 70";
  }
}
