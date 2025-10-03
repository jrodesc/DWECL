function apellidoPresidente() {
    //creamos la variable apellido
    let apellido = "";
    //le asignamos a apellido el valor del input con el id apellido
    apellido = document.getElementById("apellido").value;

    //convertimos el apellido a minusculas
    let apellidoLowerCase = apellido.toLowerCase();

    //creamos un if el cual nos diga si el apellido es correcto o no.
    if(apellidoLowerCase == "suarez") {
        document.getElementById("respuesta").innerHTML = "Respuesta correcta.";
    } else {
        document.getElementById("respuesta").innerHTML = "Respuesta incorrecta, intentelo de nuevo.";
    }
}