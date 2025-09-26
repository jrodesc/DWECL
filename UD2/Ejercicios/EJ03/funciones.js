function cambioMoneda() {
    let euros = parseInt(document.getElementById("euros").value);
    let dolares = 1.17;

    let resultado = euros * dolares;

    document.getElementById("result").innerHTML = resultado;


}