validarPlaca = function(){
    let erroresEstructura;
    let mensaje;
    let placa;
    let provincia;
    let tipo;
    let pico;
    placa = recuperarTexto("txtPlaca");
    
    erroresEstructura = validarEstructura(placa);
    if(erroresEstructura == null){
        mensaje = "ESTRUCTURA VALIDA";
        mostrarTexto("lblErrores", "");
        provincia = obtenerProvincia(placa);
        tipo  = obtenerTipoVehiculo(placa);
        pico  = obtenerDiaPicoYPlaca(placa);
    }else{
        mensaje = "ESTRUCTURA INCORRECTA";
        mostrarTexto("lblErrores", erroresEstructura);
    }

    mostrarTexto("lblMensaje", mensaje);
    if(provincia!=null){
        mostrarTexto("lblProvincia", provincia);
    }else{
        mostrarTexto("lblProvincia", "Provincia Incorrecta");
    }
    if(tipo!=null){
        mostrarTexto("lblTipo", tipo);
    }else{
        mostrarTexto("lblTipo", "Vehiculo Incorrecto");
    }
    
    mostrarTexto("lblPico", pico);
}


limpiar = function () {
    mostrarTextoEnCaja("txtPlaca","");
    mostrarTexto("lblErrores","");
    mostrarTexto("lblMensaje","");
    mostrarTexto("lblProvincia","");
    mostrarTexto("lblTipo","");
    mostrarTexto("lblPico","");
}