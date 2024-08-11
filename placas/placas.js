validarPlaca = function(){
    let erroresEstructura;
    let mensaje;
    let placa;
    let provincia;
    let tipo;
    placa = recuperarTexto("txtPlaca");
    
    erroresEstructura = validarEstructura(placa);
    if(erroresEstructura == null){
        mensaje = "ESTRUCTURA VALIDA";
        mostrarTexto("lblErrores", "");
        provincia = obtenerProvincia(placa);
        tipo  = obtenerTipoVehiculo(placa);
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
}