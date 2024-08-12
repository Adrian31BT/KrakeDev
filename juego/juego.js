let puntosUsuario = 0;
let puntosComputador = 0;

jugar = function(seleccionado){
    let elemento;
    let imagen;
    let resultado;
    elemento = generarElemento();
    imagen = generarRuta(elemento);
    mostrarImagen("imgSeleccionado",imagen);
    
    resultado = determinarGanador(elemento, seleccionado);
    if(resultado == 0){
        mostrarTexto("lblResultado","EMPATE");
    }else if(resultado == 2){
        mostrarTexto("lblResultado","GANASTE LA PARTIDA");
        puntosUsuario = puntosUsuario + 1;
    }else{
        mostrarTexto("lblResultado","PERDISTE LA PARTIDA");
        puntosComputador = puntosComputador + 1;
    }
    mostrarTexto("lblPuntosJugador",puntosUsuario);
    mostrarTexto("lblPuntosComputador",puntosComputador);
    if(puntosUsuario == 5){
        mostrarTexto("lblMensaje","HAS GANADO EL JUEGO");
    }
    if(puntosComputador == 5){
        mostrarTexto("lblMensaje","EL COMPUTADOR TE HA VENCIDO");
    }
}

limpiar = function(){
    puntosUsuario = 0;
    puntosComputador = 0;
    mostrarTexto("lblResultado","");
    mostrarImagen("imgSeleccionado","");
    mostrarTexto("lblMensaje","");
    mostrarTexto("lblPuntosJugador",0);
    mostrarTexto("lblPuntosComputador",0);
    
}