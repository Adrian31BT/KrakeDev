let puntos;
let lanzamientos;
puntos = 0;
lanzamientos = 5;

jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos();
}
modificarPuntos = function(numero){
    puntos = puntos + numero;
    cambiarTexto("lblPuntos",puntos);
    if(puntos > 20){
        cambiarTexto("lblMensaje","GANASTE!");
        limpiar();
    }
}
modificarLanzamientos = function(){
    lanzamientos  = lanzamientos - 1;
    cambiarTexto("lblLanzamientos",lanzamientos);
    if(lanzamientos == 0){
        cambiarTexto("lblMensaje","GAME OVER!");
        limpiar();
    }
}
limpiar = function(){
    puntos = 0;
    lanzamientos = 5;
    cambiarTexto("lblPuntos", 0);
    cambiarTexto("lblLanzamientos", 5);
    cambiarImagen("imgDado","");
}
mostrarCara = function(numero){
    if(numero == 1){
        cambiarImagen("imgDado","dados1.png");
    }else if(numero == 2){
        cambiarImagen("imgDado","dados2.png");
    }else if(numero == 3){
        cambiarImagen("imgDado","dados3.png");
    }else if(numero == 4){
        cambiarImagen("imgDado","dados4.png");
    }else if(numero == 5){
        cambiarImagen("imgDado","dados5.png");
    }else{
        cambiarImagen("imgDado","dados6.png");
    }
}
lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}