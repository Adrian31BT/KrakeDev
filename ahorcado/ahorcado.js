//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;

guardarPalabra = function(){
    let palabra;
    let longitud;
    let validar = true;
    palabra = recuperarTexto("txtSecreta");
    longitud = palabra.length;
    if(longitud == 5){
        for(let i=0; i<longitud; i++){
            caracter = palabra.charAt(i);
            if(!esMayuscula(caracter)){
                validar = false;
            }
        }
    }else{
        validar = false;
    }

    if(validar == false){
        alert("Ingresar una palabra de 5 letras mayusculas");
    }else{
        palabraSecreta = palabra;
    }
    console.log(palabraSecreta);
}

validar = function(letra){
    let letrasEncontrada = 0;
    for(let i=0; i<5; i++){
        caracter = palabraSecreta.charAt(i);
        if(caracter == letra){
            mostrarLetra(letra,i);
            letrasEncontrada = letrasEncontrada + 1;
        }
    }
}

mostrarLetra = function(letra, posicion){
    let idDiv="";
    for(let i=0; i<5; i++){
        if(posicion == i){
            idDiv = "div"+posicion;
            mostrarTexto(idDiv,letra);
        }
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

