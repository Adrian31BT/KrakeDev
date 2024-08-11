validarPlaca = function(){
    let erroresEstructura;
    let mensaje;
    let placa;
    placa = recuperarTexto("txtPlaca");
    
    erroresEstructura = validarEstructura(placa);
    if(erroresEstructura == null){
        mensaje = "ESTRUCTURA VALIDA";
        mostrarTexto("lblErrores", "");
    }else{
        mensaje = "ESTRUCTURA INCORRECTA";
        mostrarTexto("lblErrores", erroresEstructura);
    }
    mostrarTexto("lblMensaje", mensaje);
}