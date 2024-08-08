jugar = function(){
    let aleatorio;
    aleatorio = lanzarDado();
    cambiarTexto("lblNumero", aleatorio);
    if(aleatorio>3){
        cambiarTexto("lblMensaje","Es mayor a 3, GANASTE");
    }else{
        cambiarTexto("lblMensaje","Es menor a 3, PERDISTE");
    }
}

lanzarDado = function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio = Math.random();
    numeroMultiplicado = aleatorio * 6;
    numeroEntero = parseInt(numeroMultiplicado);
    valorDado = numeroEntero + 1;
    return valorDado;
}