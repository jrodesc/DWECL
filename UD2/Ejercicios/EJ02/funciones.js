function operacionesAritmeticas() {
    //leemos el input de los dos numeros dados por el usuario
    let numeroUno = parseInt(document.getElementById("numero1").value);
    let numeroDos = parseInt(document.getElementById("numero2").value);

    let suma = numeroUno + numeroDos;
    let resta = numeroUno - numeroDos;
    let multiplicacion = numeroUno * numeroDos;
    let division = numeroUno/numeroDos;
    let potencia = Math.pow(numeroUno, numeroDos);
    let resto = numeroUno % numeroDos;

    document.getElementById("resultSum").innerHTML = suma;
    document.getElementById("resultRest").innerHTML = resta;
    document.getElementById("resultMul").innerHTML = multiplicacion;
    document.getElementById("resultDiv").innerHTML = division;
    document.getElementById("resultPow").innerHTML = potencia;
    document.getElementById("resultMod").innerHTML = resto;
}