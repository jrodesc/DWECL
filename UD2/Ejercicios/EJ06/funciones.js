function operaciones() {
    let n1 = parseInt(document.getElementById("numero1").value);
    let n2 = parseInt(document.getElementById("numero2").value);

    let menor = (n1 < n2);
    let mayor = (n1 > n2);
    let igual = (n1 === n2);
    let desigual = (n1 !== n2);

    document.getElementById("menor").innerHTML = menor;
    document.getElementById("mayor").innerHTML = mayor;
    document.getElementById("igual").innerHTML = igual;
    document.getElementById("desigual").innerHTML = desigual;
}