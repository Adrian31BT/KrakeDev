validarPassword =function(password){
    let longitud = password.length;
    let caracter;
    let contMayuscula = 0;
    let contDigito = 0;
    let contEspecial = 0;
    let errores = "";
    let error1 = "";
    let error2 = "";
    let error3 = "";
    let error4 = "";


    if(longitud<8 || longitud>16){
        error1 = "La contraseña debe tener al menos 8 caracteres y un maximo de 16 caracteres";
        errores = error1;
    }

    for(let i=0; i<longitud; i++){
        caracter = password.charAt(i);
        if(esMayuscula(caracter)){
            contMayuscula = contMayuscula + 1;  
        }
        if(esDigito(caracter)){
            contDigito = contDigito + 1;  
        }
        if(esCaracterEspecial(caracter)){
            contEspecial = contEspecial + 1;  
        }
    }

    if(contMayuscula == 0){    
        error2 = "Debe de tener al menos una mayuscula";
        if(errores == ""){
            errores = error2;
        }else{
            errores = errores + ", "+error2;
        }
    }
    if(contDigito == 0){  
        error3 = "Debe de tener al menos un digito";
        if(errores == ""){
            errores = error3;
        }else{
            errores = errores + ", "+error3;
        }
    }
    if(contEspecial == 0){
        error4 = "Debe de tener al menos un caracter especia (*, -, _)";
        if(errores == ""){
            errores = error4;
        }else{
            errores = errores + ", "+error4;
        }
    }

    return errores;
}

ejecutarValidacion = function(){
    let password;
    let resultado;
    password = recuperarTexto("txtPassword");
    resultado = validarPassword(password);
    if(resultado == ""){
        mostrarTexto("lblMensaje", "PASSWORD CORRECTO");
    }else{
        mostrarTexto("lblMensaje", resultado);
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

esDigito = function(caracter){
    let codigo; 
    codigo = caracter.charCodeAt(0);
    if(codigo >= 48 && codigo <= 57){
        return true;
    }else{
        return false;
    }
}

esCaracterEspecial = function(caracter){
    let codigo; 
    codigo = caracter.charCodeAt(0);
    if(codigo == 42 || codigo == 45 || codigo == 95){
        return true;
    }else{
        return false;
    }
}