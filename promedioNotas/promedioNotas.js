calcularPromedioNotas = function(){

    let nota1;
    let nota2;
    let nota3; 
    let promedio; 

    nota1 = recuperarFloat("txtN1");
    nota2 = recuperarFloat("txtN2");
    nota3 = recuperarFloat("txtN3");

    promedio = calcularPromedio(nota1, nota2, nota3);
    mensaje = "El promedio de nota es: "+promedio;
    mostrarTexto("lblMostrarPromedio", mensaje);

    if(promedio > 0 && promedio < 5){
        mostrarTexto("lblMensaje", "REPROBADO");
        mostrarImagen("imgPromedio","./imagenes/reprobado.gif");
    }else if(promedio >= 5 && promedio <= 8){
        mostrarTexto("lblMensaje", "BUEN TRABAJO");
        mostrarImagen("imgPromedio","./imagenes/buentrabajo.gif");
    }else if(promedio > 8 && promedio <= 10){
        mostrarTexto("lblMensaje", "EXCELENTE");
        mostrarImagen("imgPromedio","./imagenes/excelente.gif");
    }else{
        mostrarTexto("lblMensaje", "DATOS INCORRECTOS");
        mostrarImagen("imgPromedio","./imagenes/datosincorrectos.gif");
    }

    
}