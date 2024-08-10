calcularValorDescuento = function(monto, porcentajeDescuento){
    let descuento = monto * (porcentajeDescuento/100);
    return descuento;
}

calcularIVA = function(monto){
    let iva = monto * 0.12;
    iva =  iva.toFixed(2);
    return iva;
}

calcularSubtotal = function(precio, cantidad){
    let subtotal = precio * cantidad;
    subtotal = subtotal.toFixed(2);
    return subtotal;
}

calcularTotal = function(subtotal, descuento, iva){
    let total = (parseFloat(subtotal) - parseFloat(descuento)) + parseFloat(iva);
    total = total.toFixed(2);
    return total; 
}

calcularDescuentoPorVolumen = function(subtotal, cantidad){
    let descuento;
    if(cantidad<3){
        descuento = 0;   //sin descuento
    }else if(cantidad>=3 && cantidad<=5){
        descuento = subtotal * 0.03;  //3% de descuento
    }else if(cantidad>=6 && cantidad<=11){
        descuento = subtotal * 0.04;  //4% de descuento
    }else{
        descuento = subtotal * 0.05;  //5% de descuento
    }
    descuento = descuento.toFixed(2);
    return descuento;
}