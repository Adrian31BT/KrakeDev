obtenerAleatorio =  function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let numeroRandom;
    aleatorio = Math.random();
    numeroMultiplicado = aleatorio * 3;
    numeroEntero = parseInt(numeroMultiplicado);
    numeroRandom = numeroEntero + 1;
    return numeroRandom;
}

generarElemento = function(){
    let cadena;
    let numero = obtenerAleatorio(); 
    if(numero==1){
        cadena = "piedra"; 
    }else if(numero==2){
        cadena = "papel";
    }else{
        cadena = "tijera";
    }
    return cadena;
}

determinarGanador =  function(eleccionJugador1, eleccionJugador2){
    let valor;
    if(eleccionJugador1 == "piedra" && eleccionJugador2 == "papel"){
        valor = 2;
    }else if(eleccionJugador1 == "papel" && eleccionJugador2 == "piedra"){
        valor = 1;
    }else if(eleccionJugador1 == "piedra" && eleccionJugador2 == "tijera"){
        valor = 1;
    }else if(eleccionJugador1 == "tijera" && eleccionJugador2 == "piedra"){
        valor = 2;
    }else if(eleccionJugador1 == "tijera" && eleccionJugador2 == "papel"){
        valor = 1;
    }else if(eleccionJugador1 == "papel" && eleccionJugador2 == "tijera"){
        valor = 2;
    }else{
        valor = 0;
    }
    return valor;
}

generarRuta = function(nombre){
    let ruta;
    if(nombre=="piedra"){
        ruta = "./imagenes/piedra.png";
    }else if(nombre=="papel"){
        ruta = "./imagenes/papel.png";
    }else{
        ruta = "./imagenes/tijera.png";
    }
    return ruta;
}