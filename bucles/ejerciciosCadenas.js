ejecutarPrueba1 = function(){
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}

ejecutarPrueba2 = function(){
    let mensaje;
    let invertido;
    mensaje = recuperarTexto("txtCadena");
    invertido = invertirCadena(mensaje);
    mostrarTexto("lblInvertido",invertido);
}

recorrerCadena = function(cadena){
    let caracter;

    for(let posicion=0; posicion<cadena.length; posicion++){
        caracter = cadena.charAt(posicion);
        console.log("Caracter "+caracter+" posicion "+posicion);
    }
    for(let posicion=0; posicion<=cadena.length-1; posicion++){
        caracter = cadena.charAt(posicion);
        console.log("Caracter "+caracter+" posicion "+posicion);
    }
}

invertirCadena = function(cadena){
    let resultado = "";
    let longitud = cadena.length;
    let caracter;
    for(let posicion=longitud - 1 ; posicion>=0; posicion--){
        caracter = cadena.charAt(posicion);
        resultado = resultado + caracter;
    }
    return resultado;
}