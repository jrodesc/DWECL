function contadorPares() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let n3 = parseInt(document.getElementById("n3").value);
    let n4 = parseInt(document.getElementById("n4").value);
    let n5 = parseInt(document.getElementById("n5").value);
    let n6 = parseInt(document.getElementById("n6").value);
    let n7 = parseInt(document.getElementById("n7").value);
    let n8 = parseInt(document.getElementById("n8").value);
    let n9 = parseInt(document.getElementById("n9").value);
    let n10 = parseInt(document.getElementById("n10").value);

    let numeros = [];

    numeros.push(n1);
    numeros.push(n2);
    numeros.push(n3);
    numeros.push(n4);
    numeros.push(n5);
    numeros.push(n6);
    numeros.push(n7);
    numeros.push(n8);
    numeros.push(n9);
    numeros.push(n10);

    let respuesta = "";
    for(i = 0; i<numeros.length; i++) {
        if(numeros[i] % 2 == 0) {
            respuesta += " "+numeros[i];
        }
    }
    document.getElementById("respuesta").innerHTML = respuesta;
}