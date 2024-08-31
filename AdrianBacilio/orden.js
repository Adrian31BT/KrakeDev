let personas = [
    {nombre:"Marcos", edad: 18},
    {nombre:"Roberto", edad: 15},
    {nombre:"Kate", edad: 25},
    {nombre:"Diana", edad: 12},
    {nombre:"Benja", edad: 5}, 
];

agregarPersona = function(){
    let validar = true;
    let nombre = recuperarTexto("txtNombre");
    let edad = recuperarInt("txtEdad");

    let longitudNombre = nombre.length;

    if(longitudNombre < 3){
        validar = false;
        mostrarTexto("lblErrorNombre","*Ingrese minimo 3 caracteres");
    }

    if(edad < 0 || edad >100 || isNaN(edad)){
        validar = false;
        mostrarTexto("lblErrorEdad","*Ingrese edad entre 0 - 100");
    }

    if(validar == true){
        let nuevaPersona = {};
        nuevaPersona.nombre = nombre;
        nuevaPersona.edad = edad;
        personas.push(nuevaPersona);
        alert("PERSONA AGREAGDA CORRECTAMENTE");
        mostrarPersonas();
    }
}

mostrarPersonas = function(){
    let cmpTabla = document.getElementById("tablaPersonas");
    let contenidoTabla = "<table><tr>"+
    "<th>NOMBRE</th>"+
    "<th>EDAD</th>"+
    "</tr>";
    let elementoPersona;
    for(let i=0; i<personas.length; i++){
        elementoPersona = personas[i];
        contenidoTabla+=
        "<tr><td>"+elementoPersona.nombre+"</td>"
        +"<td>"+elementoPersona.edad+"</td>"
        +"</td>"
    }

    contenidoTabla+="</table>"
    cmpTabla.innerHTML = contenidoTabla;
}

encontrarMayor = function(){
    let personaMayor = personas[0];
    let elementoPersona;
    let tamanioPersonas = personas.length;
    
    for(let i=1; i<tamanioPersonas; i++){
        elementoPersona = personas[i];
        if(elementoPersona.edad > personaMayor.edad){
            personaMayor = elementoPersona;
        }
        console.log(personas[i].nombre+" "+personas[i].edad);
    }
    return personaMayor;
}

encontrarMenor = function(){
    let personaMenor = personas[0];
    let elementoPersona;
    let tamanioPersonas = personas.length;
    
    for(let i=1; i<tamanioPersonas; i++){
        elementoPersona = personas[i];
        if(elementoPersona.edad < personaMenor.edad){
            personaMenor = elementoPersona;
        }
        console.log(personas[i].nombre+" "+personas[i].edad);
    }
    return personaMenor;
}


determinarMayor = function(){
    let mayor;
    mayor = encontrarMayor();
    mostrarTexto("lblMayor", mayor.nombre+" - "+mayor.edad);
}

determinarMenor = function(){
    let menor;
    menor = encontrarMenor();
    mostrarTexto("lblMenor", menor.nombre+" - "+menor.edad);
}