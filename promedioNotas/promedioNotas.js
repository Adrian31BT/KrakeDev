calcularPromedioNotas = function(){

    let nota1;
    let nota2;
    let nota3; 
    let promedio; 

    nota1 = recuperarFloat("txtN1");
    nota2 = recuperarFloat("txtN2");
    nota3 = recuperarFloat("txtN3");

    promedio = calcularPromedio(nota1, nota2, nota3);
    mensaje = "El promedio de nota es: "+promedio;

    mostrarTexto("lblMostrarPromedio", mensaje);
}