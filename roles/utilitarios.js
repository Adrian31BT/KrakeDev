
mostrarImagen=function(idComponente,rutaImagen){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src =  rutaImagen;
}
mostrarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText = mensaje;
}
mostrarTextoEnCaja = function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value = mensaje;
}

recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}

recuperarInt = function(idComponente){
   let valorCaja= recuperarTexto(idComponente);
   let valorEntero = parseInt(valorCaja);
   return valorEntero;
}

recuperarFloat = function(idComponente){
    let valorCaja= recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
 }

mostrarComponente = function(idComponente){
    document.getElementById(idComponente).style.display = "block";
}

ocultarComponente = function(idComponente){
    document.getElementById(idComponente).style.display = "none";
}

deshabilitarComponente = function(idComponente){
    document.getElementById(idComponente).disabled = true;
}

habilitarComponente = function(idComponente){
    document.getElementById(idComponente).disabled = false;
}

//nuevo
esMayuscula = function(caracter){
    let codigo; 
    codigo = caracter.charCodeAt(0);
    if(codigo >= 65 && codigo <= 90){
        return true;
    }else{
        return false;
    }
}

esDigito = function(caracter){
    let codigo; 
    codigo = caracter.charCodeAt(0);
    if(codigo >= 48 && codigo <= 57){
        return true;
    }else{
        return false;
    }
}

recuperarTextoDiv = function(idComponente){
    let componente;
    let valor;
    componente=document.getElementById(idComponente);
    valor=componente.textContent;
    return valor;
}

recuperarFloatDiv = function(idComponente){
    let valor= recuperarTextoDiv(idComponente);
    let valorFlotanteDiv = parseFloat(valor);
    return valorFlotanteDiv;
}

recuperarIntDiv = function(idComponente){
    let valor= recuperarTextoDiv(idComponente);
    let valorEnteroDiv = parseInt(valor);
    return valorEnteroDiv;
 }