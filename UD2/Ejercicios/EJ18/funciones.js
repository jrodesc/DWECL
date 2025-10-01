function contadorNumeros() {
    let n = 1;

    n = parseInt(document.getElementById("numero").value);

    let respuesta = "";
    for(let i = 1; i<=n; i++) {
        respuesta += " "+i;
    }

    document.getElementById("respuesta").innerHTML = respuesta;
}