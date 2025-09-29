function mediaNotas() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let n3 = parseInt(document.getElementById("n3").value);

    let media = (n1+n2+n3)/3;
    let apto = "No apto";
    if(media >= 5) {
        apto = "Apto";
    }

    document.getElementById("media").innerHTML = media;
    document.getElementById("apto").innerHTML = apto;

}