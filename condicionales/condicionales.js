calcularTasaInteres = function(ingresoAnual){
    let tasa;
    if(ingresoAnual<300000){
        tasa = ingresoAnual * 0.16;  //16%
    }else if(ingresoAnual>=300000 && ingresoAnual<500000){
        tasa = ingresoAnual * 0.15;  //15%
    }else if(ingresoAnual>=500000 && ingresoAnual<1000000){
        tasa = ingresoAnual * 0.14;  //14%
    }else if(ingresoAnual>=1000000 && ingresoAnual<2000000){
        tasa = ingresoAnual * 0.13;  //13%
    }else{
        tasa = ingresoAnual * 0.12;  //12%
    }
    return tasa;
}

calcularCapacidadPago = function(edad, ingresos, egresos){
    let valor = ingresos - egresos;
    let cuotaMensual;
    if(edad>50){
        cuotaMensual = valor * 0.30; //30%
    }else{
        cuotaMensual = valor * 0.40; //40%
    }
    return cuotaMensual;
}

calcularDescuento = function(precio, cantidad){
    let descuento;
    let valorPagar;
    if(cantidad<3){
        descuento = 0;  //no recibe descuento
    }else if(cantidad>=3 && cantidad<=5){
        descuento = precio * 0.02; //2% 
    }else if(cantidad>=6 && cantidad<=11){
        descuento = precio * 0.03; //3% 
    }else{
        descuento = precio * 0.04; //4% 
    }
    valorPagar = precio - descuento;
    return valorPagar;
}

determinarColesterol = function(nivelColesterol){
    let nivel;
    if(nivelColesterol<100){
        nivel = "Óptimo (lo mejor para su salud)";
    }else if(nivelColesterol>=100 && nivelColesterol<=129){
        nivel = "Casi óptimo";
    }else if(nivelColesterol>=130 && nivelColesterol<=159){
        nivel = "Límite superior del rango normal";
    }else if(nivelColesterol>=160 && nivelColesterol<=189){
        nivel = "Alto";
    }else{
        nivel = "Muy alto";
    }
    return nivel;
}

validarClave = function(clave){
    let tamanio;
    tamanio = clave.length;
    if(tamanio >= 8 && tamanio<=16){
        return true;
    }else{
        return false;
    }
}

esMayuscula = function(caracter){
    let codigo; 
    codigo = caracter.charCodeAt(0);
    if(codigo >= 65 && codigo <= 90){
        return true;
    }else{
        return false;
    }
}

esMinuscula = function(caracter){
    let codigo; 
    codigo = caracter.charCodeAt(0);
    //        minusculas sin tilde              vocales á - í - ó - ú            vocal é
    if((codigo >= 97 && codigo <= 122) || (codigo >= 160 && codigo <= 163) || (codigo==130)){
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

darpermiso = function(notaMatematica, notaFisica, notaGeometria){
    if((notaMatematica>90) || (notaFisica>90) || (notaGeometria>90)){
        return true;
    }else{
        return false; 
    }
}

otorgarPermiso = function(notaMatematica, notaFisica, notaGeometria){
    if(((notaMatematica>90) || (notaFisica>90)) && (notaGeometria>80)){
        return true;
    }else{
        return false; 
    }
}

dejarSalir = function(notaMatematica, notaFisica, notaGeometria){
    if(((notaMatematica>90) || (notaFisica>90) || (notaGeometria>90)) && (notaFisica > notaMatematica)){
        return true;
    }else{
        return false; 
    }
}
