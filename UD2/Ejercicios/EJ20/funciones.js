function sumadorNumeros() {
    numero = parseInt(document.getElementById("numero").value);

    let suma = 0;
    for(let i = 1; i<=numero; i++) {
        suma += i;
    }

    document.getElementById("respuesta").innerHTML = suma;
}