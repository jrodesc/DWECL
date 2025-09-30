function mayorYMenor() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let n3 = parseInt(document.getElementById("n3").value);




    //ahora debemos calcular el menor y el mayor de todos
    //n1 mayor y n2 menor
    //n1 mayor y n3 menor
    //n2 mayor y n1 menor
    //n2 mayor y n3 menor
    //n3 mayor y n1 menor
    //n3 mayor y n2 menor
    
    if(n1 > n2 && n1 > n3) {
        document.getElementById("mayor").innerHTML = n1;
    } else if(n2 > n1 && n2 > n3) {
        document.getElementById("mayor").innerHTML = n2;
    } else {
        document.getElementById("mayor").innerHTML = n3;
    }


    if(n1 < n2 && n1 < n3) {
        document.getElementById("menor").innerHTML = n1;
    } else if(n2 < n1 && n2 < n3) {
        document.getElementById("menor").innerHTML = n2;
    } else {
        document.getElementById("menor").innerHTML = n3;
    }
}