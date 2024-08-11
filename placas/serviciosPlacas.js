validarEstructura = function(placa){
    
    let longitud = placa.length;

    let c1 = placa.charAt(0);
    let c2 = placa.charAt(1);
    let c3 = placa.charAt(2);
    let c4 = placa.charAt(3);
    let c5 = placa.charAt(4);
    let c6 = placa.charAt(5);
    let c7 = placa.charAt(6);
    
    let error="";
    let error1;
    let error2;
    let error3;
    let error4;
    let error5;
    let error6;
    let error7;
    let error8;

    let validar = false;

    if(longitud == 7 || longitud == 8){
        validar = true;
    }else{
        error = "La placa debe tener 7 u 8 caracteres";
        validar = false;
    }

    if(!esMayuscula(c1)){
        error1 = "El primer caracter debe ser una letra mayuscula";
        if(error==""){
            error = error1;
        }else{
            error = error+", "+error1;
        }
        
        validar = false;
    }
    if(!esMayuscula(c2)){
        error2 = "El segundo caracter debe ser una letra mayuscula";
        if(error==""){
            error = error2;
        }else{
            error = error+", "+error2;
        }
        validar = false;
    }
    if(!esMayuscula(c3)){
        error3 = "El tercer caracter debe ser una letra mayuscula";
        if(error==""){
            error = error3;
        }else{
            error = error+", "+error3;
        }
        validar = false;
    }
    if(!esGuion(c4)){
        error4 = "El cuarto caracter debe ser un guion mayuscula";
        if(error==""){
            error = error4;
        }else{
            error = error+", "+error4;
        }
        validar = false;
    }
    if(!esDigito(c5)){
        error5 = "El quinto caracter debe ser un digito mayuscula";
        if(error==""){
            error = error5;
        }else{
            error = error+", "+error5;
        }
        validar = false;
    }
    if(!esDigito(c6)){
        error6 = "El sexto caracter debe ser un digito";
        if(error==""){
            error = error6;
        }else{
            error = error+", "+error6;
        }
        validar = false;
    }
    if(!esDigito(c7)){
        error7 = "El septimo caracter debe ser un digito";
        if(error==""){
            error = error7;
        }else{
            error = error+", "+error7;
        }
        validar = false;
    }
    if(longitud == 8){
        let c8 = placa.charAt(7);
        if(!esDigito(c8)){
            error8 = "El octavo caracter debe ser un digito";
            if(error==""){
                error = error8;
            }else{
                error = error+", "+error8;
            }
            validar = false;
        }
    }
    
    if(validar == true){
        return null;
    }else{
        return error;
    }
}

obtenerProvincia = function(placa){
    let c1 = placa.charAt(0);
    let provincia = null;
    if(c1 == "A"){
        provincia = "Azuay";
    }else if(c1 == "B"){
        provincia = "Bolivar";
    }else if(c1 == "U"){
        provincia = "Cañar";
    }else if(c1 == "C"){
        provincia = "Carchi";
    }else if(c1 == "X"){
        provincia = "Cotopaxi";
    }else if(c1 == "H"){
        provincia = "Chimborazo";
    }else if(c1 == "O"){
        provincia = "El Oro";
    }else if(c1 == "E"){
        provincia = "Esmeralda";
    }else if(c1 == "W"){
        provincia = "Galapagos";
    }else if(c1 == "G"){
        provincia = "Guayas";
    }else if(c1 == "I"){
        provincia = "Imbabura";
    }else if(c1 == "L"){
        provincia = "Loja";
    }else if(c1 == "R"){
        provincia = "Los Rios";
    }else if(c1 == "M"){
        provincia = "Manabi";
    }else if(c1 == "V"){
        provincia = "Morona Santiago";
    }else if(c1 == "N"){
        provincia = "Napo";
    }else if(c1 == "S"){
        provincia = "Pastaza";
    }else if(c1 == "P"){
        provincia = "Pichincha";
    }else if(c1 == "K"){
        provincia = "Sucumbios";
    }else if(c1 == "Q"){
        provincia = "Orellana";
    }else if(c1 == "T"){
        provincia = "Tungurahua";
    }else if(c1 == "Z"){
        provincia = "Zamora Chinchipe";
    }else if(c1 == "Y"){
        provincia = "Santa Elena";
    }
    
    return provincia;
}