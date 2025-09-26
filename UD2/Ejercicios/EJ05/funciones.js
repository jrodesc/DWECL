function compararEdad() {
    let year1 = parseInt(document.getElementById("y1").value);
    let year2 = parseInt(document.getElementById("y2").value);
    let month1 = (document.getElementById("m1").value);
    let month2 = (document.getElementById("m2").value);

    if(year1 === year2 && month1 === month2) {
        document.getElementById("result").innerHTML = true;
    } else {
        document.getElementById("result").innerHTML = false;
    }   
    
}