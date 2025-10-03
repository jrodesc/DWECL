function calculoSalario() {
    //declaramos sin inicializar todas las variables
    let nombre = "";
    let apellidos = "";
    let sueldo = "";
    let edad = "";

    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    sueldo = parseFloat(document.getElementById("sueldo").value);
    edad = parseInt(document.getElementById("edad").value);

    document.getElementById("nombreFinal").innerHTML = nombre;
    document.getElementById("apellidosFinal").innerHTML = apellidos;
    document.getElementById("edadFinal").innerHTML = edad;

    if(sueldo > 2000) {
        document.getElementById("sueldoFinal").innerHTML = sueldo;
    } else if(sueldo < 1000) {
        if(edad < 30) {
            sueldo = 1100;
            document.getElementById("sueldoFinal").innerHTML = sueldo;
        } else if(edad > 45) {
            sueldo = sueldo + (sueldo*0.15);
            document.getElementById("sueldoFinal").innerHTML = sueldo;
        } else if(edad > 30 && edad <=45) {
            sueldo = sueldo + (sueldo*0.03);
            document.getElementById("sueldoFinal").innerHTML = sueldo;
        }
    } else if(sueldo >= 1000 && sueldo <= 2000) {
        if(edad > 45) {
            sueldo = sueldo + (sueldo*0.03);
            document.getElementById("sueldoFinal").innerHTML = sueldo;
        } else if(edad <= 45) {
            sueldo = sueldo + (sueldo*0.1);
            document.getElementById("sueldoFinal").innerHTML = sueldo;
        }
    }


}