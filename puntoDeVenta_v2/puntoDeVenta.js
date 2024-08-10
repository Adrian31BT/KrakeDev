calcularValorTotal = function () {

    let nombreProducto;
    let precioProducto; 
    let cantidad; 

    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;

    nombreProducto = recuperarTexto("txtProducto");
    precioProducto = recuperarFloat("txtPrecio");
    cantidad = recuperarInt("txtCantidad");

    console.log(sinErrores(nombreProducto, precioProducto, cantidad));
    if(sinErrores(nombreProducto, precioProducto, cantidad)){

        valorSubtotal = calcularSubtotal(precioProducto, cantidad);  
        mostrarTexto("lblSubtotal", valorSubtotal);    
        valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);   
        mostrarTexto("lblDescuento", valorDescuento);
        valorIVA = calcularIVA(valorSubtotal-valorDescuento);
        mostrarTexto("lblValorIVA", valorIVA);
        valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
        mostrarTexto("lblTotal", valorTotal);

        let mensaje = "Valor a pagar por "+cantidad+" "+nombreProducto+": USD"+valorTotal;
        mostrarTexto("lblResumen", mensaje);
    }else{
        mostrarTexto("lblSubtotal","0.0");
        mostrarTexto("lblDescuento","0.0");
        mostrarTexto("lblValorIVA","0.0");
        mostrarTexto("lblTotal","0.0");
        mostrarTexto("lblResumen","");
    }
}
limpiar = function () {
        mostrarTextoEnCaja("txtProducto","");
        mostrarTextoEnCaja("txtCantidad",0);
        mostrarTextoEnCaja("txtPrecio",0.0);
        mostrarTexto("lblSubtotal","0.0");
        mostrarTexto("lblDescuento","0.0");
        mostrarTexto("lblValorIVA","0.0");
        mostrarTexto("lblTotal","0.0");
        mostrarTexto("lblResumen","");
}

sinErrores = function(nombreProducto, precioProducto, cantidad){
    sinError = false; 
    if(esProductoValido(nombreProducto,"lblErrorProducto") & esCantidadValido(cantidad,"lblErrorCantidad") & esPrecioValido(precioProducto,"lblErrorPrecio")){
        sinError = true; 
    }
    return sinError;
}

esProductoValido = function(nombreProducto,idComponenteError){
    valido = false;
    let tamanio = nombreProducto.length; 

    if(tamanio>=1 && tamanio<=10){
        valido = true;
        mostrarTexto(idComponenteError,"");
    }else if(tamanio == 0){
        mostrarTexto(idComponenteError,"*Campo obligatorio");
    }else{
        mostrarTexto(idComponenteError,"Maximo de 10 caracteres");
    }
    return valido;
}

esCantidadValido = function(cantidad, idComponenteError){
    valido = false;
    if(isNaN(cantidad) || cantidad==0){
        mostrarTexto(idComponenteError,"*Campo obligatorio");
    }else{
        if(cantidad>0 && cantidad<=100){
            valido = true;
            mostrarTexto(idComponenteError,"");
        }else{
            mostrarTexto(idComponenteError,"Cantidad maxima es de 100");
        }
    }
    return valido;
}

esPrecioValido = function(precioProducto, idComponenteError){
    valido = false;
    if(isNaN(precioProducto) || precioProducto==0){
        mostrarTexto(idComponenteError,"*Campo obligatorio");
    }else{
        if(precioProducto>0 && precioProducto<=50){
            valido = true;
            mostrarTexto(idComponenteError,"");
        }else{
            mostrarTexto(idComponenteError,"Cantidad maxima es de $50");
        }
    }
    return valido;
}





