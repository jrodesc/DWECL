function conversor() {
    let monto = parseFloat(document.getElementById("monto").value);
    let convertirA = document.querySelector('input[name="conversion"]:checked');
    let moneda = "";

    if(convertirA.value === "dolares") {
        moneda = "euros";
        monto = monto * 1.17;
    } else {
        moneda = "dolares";
        monto = monto / 1.17;
    }
    document.getElementById("respuesta").innerHTML = monto.toFixed(2);
    document.getElementById("moneda").innerHTML = moneda;
}