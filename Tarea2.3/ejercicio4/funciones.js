function escribirNombres() {

  //declaramos nombre y respuesta sin inicializarlos
  let nombre = "";
  let respuesta = "";

  nombre = document.getElementById("nombre").value;

  for (i = 0; i < 50; i++) {
    respuesta += nombre + "<br>";
  }

  if(nombre != null) {
    document.getElementById("respuesta").innerHTML = respuesta;
  }

  if(nombre != null) {
    document.getElementById("respuestawhile").innerHTML = nombresWhile(nombre);
  }

  if(nombre != null) {
    document.getElementById("respuestado").innerHTML = nombresDo(nombre);
  }
  

}

//creamos una funcion llamada nombresWhile para hacer la operacion mediante while
function nombresWhile(nombre) {
  respuesta = "";
  i = 0;
  while ((i < 50)) {
    respuesta += nombre + "<br>";
    i++;
  }

  return respuesta;
}
//creamos una funcion llamada nombresWhile para hacer la operacion mediante do-while
function nombresDo(nombre) {
  respuesta = "";
  i = 0;
  do {
    respuesta += nombre + "<br>";
    i++;
  } while ((i < 50));

  return respuesta;
}
