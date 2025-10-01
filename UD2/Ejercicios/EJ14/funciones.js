function contadorLetras() {
    
    let palabra = document.getElementById("texto").value;

    totalLetras = palabra.length;

    document.getElementById("respuesta").innerHTML = totalLetras;
}