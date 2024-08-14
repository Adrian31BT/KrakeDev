//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;

//paso 5
let intentos = 0;
let coincidencias = 0;
let errores = 0;

//paso 1
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
        mostrarTextoEnCaja("txtSecreta","");
    }else{
        palabraSecreta = palabra;
    }
    console.log(palabraSecreta);
    limpiarNuevaPalabra();
}

//paso 6
mostrarAhorcado = function(){
    for(let i=1; i<=9; i++){
        imagen = "Ahorcado_0"+i+".png";
        if(errores == i){
            mostrarImagen("ahorcadoImagen",imagen);
        }
    }
}


//paso 4
ingresarLetra = function(){
   
    letra = recuperarTexto("txtLetra");

    if(esMayuscula(letra)){
        validar(letra);
        intentos = intentos + 1; 
        if(coincidencias == 5){
            //paso 7
            mostrarImagen("ahorcadoImagen","ganador.gif");
        }
        if(intentos == 10){
            mostrarImagen("ahorcadoImagen","gameOver.gif");
        }
    }else{
        alert("SOLO SE ACEPTAN MAYUSCULAS");
    }
    mostrarTextoEnCaja("txtLetra","");
}


//paso 3
validar = function(letra){
    let letrasEncontrada = 0;
    for(let i=0; i<5; i++){
        caracter = palabraSecreta.charAt(i);
        if(caracter == letra){
            mostrarLetra(letra,i);
            letrasEncontrada = letrasEncontrada + 1;
            coincidencias = coincidencias + 1;
        }
    } 
    if(letrasEncontrada == 0){
        errores = errores + 1;
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        mostrarAhorcado();    
    }
}

//paso 2
mostrarLetra = function(letra, posicion){
    let idDiv="";
    for(let i=0; i<5; i++){
        if(posicion == i){
            idDiv = "div"+posicion;
            mostrarTexto(idDiv,letra);
        }
    }
}

//paso 0
esMayuscula = function(caracter){
    let codigo; 
    codigo = caracter.charCodeAt(0);
    if((codigo >= 65 && codigo <= 90) || codigo == 209){
        return true;
    }else{
        return false;
    }
}

limpiarNuevaPalabra = function(){
    intentos = 0;
    coincidencias = 0;
    errores = 0;
    let idDiv="";
    for(let i=0; i<5; i++){
        idDiv = "div"+i;
        mostrarTexto(idDiv,"");
        mostrarImagen("ahorcadoImagen","");
    }
}



