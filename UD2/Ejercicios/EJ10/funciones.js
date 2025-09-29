function starWars() {
    let eleccion = parseInt(document.getElementById("pelicula").value);
    let respuesta = "";

    switch(eleccion){
            case 1:  
                respuesta = ("La amenaza fantasma");
                break;
            case 2:
                respuesta = ("El ataque de los clones");
                break;
            case 3:
                respuesta = ("La venganza de los Sith");
                break;
            case 4:
                respuesta = ("Una nueva esperanza");
                break;
            case 5:
                respuesta = ("El imperio contraataca");
                break;
            case 6:
                respuesta = ("El retorno del jedi");
                break;
            case 7:
                respuesta = ("El despertar de la fuerza");
                break;
            default:
                respuesta = ("Esa no existe, padawan.");
        }


        document.getElementById("respuesta").innerHTML = respuesta;
}