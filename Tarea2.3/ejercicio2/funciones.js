function calculoEdad() {
    //inicializamos la edad en 0
    let edad = 0;
    let respuesta;

    edad = parseInt(document.getElementById("edad").value);
    /*
    en este if else hacemos un sistema que nos indica en funcion de la edad del usuario
    si es un niño, adulto, joven...
    */
    if(edad >= 0 && edad <= 12) {
        respuesta = document.getElementById("respuesta").innerHTML = "Niño";
    } else if(edad >= 13 && edad <= 26) {
        respuesta = document.getElementById("respuesta").innerHTML = "Joven";
    } else if(edad >= 27 && edad <= 60) {
        respuesta = document.getElementById("respuesta").innerHTML = "Adulto";
    } else if(edad >= 60 && edad <= 70) {
        respuesta = document.getElementById("respuesta").innerHTML = "Jubilado";
    } else if(edad > 70) {
        respuesta = document.getElementById("respuesta").innerHTML = "No se pueden asignar edades por encima de 70."
    } else if(edad < 0) {
        respuesta = document.getElementById("respuesta").innerHTML = "No se pueden asignar edades por debajo de 0."
    }
}