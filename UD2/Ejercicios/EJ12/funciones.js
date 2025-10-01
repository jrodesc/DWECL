function detectorConsonantes() {
  let letra = document.getElementById("letra").value;
  let letraLowerCase = letra.toLowerCase();
  let str = "hoal";

  if (letraLowerCase.length > 1) {
    document.getElementById("respuesta").innerHTML =
      "No introduzca mas de una letra.";
  } else {
    if (letraLowerCase === "a") {
      document.getElementById("respuesta").innerHTML = "vocal";
    } else if (letraLowerCase === "e") {
      document.getElementById("respuesta").innerHTML = "vocal";
    } else if (letraLowerCase === "i") {
      document.getElementById("respuesta").innerHTML = "vocal";
    } else if (letraLowerCase === "o") {
      document.getElementById("respuesta").innerHTML = "vocal";
    } else if (letraLowerCase === "u") {
      document.getElementById("respuesta").innerHTML = "vocal";
    } else {
      document.getElementById("respuesta").innerHTML = "consonante";
    }
  }
}
