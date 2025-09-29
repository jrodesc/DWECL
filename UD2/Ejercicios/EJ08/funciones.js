function resolucion() {
    let numero = parseInt(document.getElementById("numero").value);
    let mensaje ="El numero es: ";



    if(numero > 0) {
        mensaje += "positivo, ";
    } else if(numero < 0) {
        mensaje += "negativo, ";
    } else {
        mensaje += "es cero, ";
    }

    if(numero%2 === 0) {
        mensaje += "par";
    } else {
        mensaje += "impar";
    }


    document.getElementById("respuesta").innerHTML = mensaje;

}