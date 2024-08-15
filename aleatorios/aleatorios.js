unNumeroAleatorio = function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let numero;
    aleatorio = Math.random();
    numeroMultiplicado = aleatorio * 100;
    numeroEntero = parseInt(numeroMultiplicado);
    numero = numeroEntero + 1;
    return numero;
}

generarAleatorios = function(){
    let aleatorios = [];
    let numeroIngresado;
    let numeroAleatorio;
    numeroIngresado = recuperarInt("txtNumero");
    if(numeroIngresado>=5 && numeroIngresado<=20){
        for(let i=0; i<numeroIngresado; i++){
            numeroAleatorio = unNumeroAleatorio();
            aleatorios.push(numeroAleatorio);
        }
        mostrarResultado(aleatorios);
    }else{
        alert("Ingrese un numero entre 5 y 20");
    }
}

mostrarResultado = function(arregloNumeros){
    let cmpTabla = document.getElementById("tabla");
    let contenidoTabla="<table><tr><th>Numeros</th></tr>";
    for(let i=0; i<arregloNumeros.length; i++){
        numero = arregloNumeros[i];
        contenidoTabla+="<tr><td>";
        contenidoTabla+=numero;
        contenidoTabla+="</tr></td>";
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}