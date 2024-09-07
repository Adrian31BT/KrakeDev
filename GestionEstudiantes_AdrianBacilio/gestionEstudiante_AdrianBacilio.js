let estudiantes = [];

crearEstudiante = function(){
    let cmpNombre = recuperarTexto("txtNombre");
    let cmpCurso = recuperarTexto("txtCurso");
    let cmpMatricula = recuperarTexto("txtMatricula");
    let cmpIdEstudiante = recuperarTexto("txtIdEstudiante");

    let Estudiante = {
        id: cmpIdEstudiante,
        nombre: cmpNombre,
        curso: cmpCurso,
        matricula: cmpMatricula
    };

    return Estudiante;
}

agregarEstudiante = function(){
    let elementoEstudiante = crearEstudiante();
    estudiantes.push(elementoEstudiante);
    console.log(estudiantes);
}

refrescarEstudiante = function(){
    let cmpTabla = document.getElementById("tablaEstudiantes");
    let contenidoTabla = "<table><tr>"+
    "<th>ID</th>"+
    "<th>NOMBRE</th>"+
    "<th>CURSO</th>"+
    "<th>MATRICULA</th>"+
    "</tr>";
    let elementoEstudiante;
    for(let i=0; i<estudiantes.length; i++){
        elementoEstudiante = estudiantes[i];
        contenidoTabla+=
        "<tr><td>"+elementoEstudiante.id+"</td>"
        +"<td>"+elementoEstudiante.nombre+"</td>"
        +"<td>"+elementoEstudiante.curso+"</td>"
        +"<td>"+elementoEstudiante.matricula+"</td>"
        +"</td>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML = contenidoTabla;
}

buscarEstudante = function(){
    let cmpBuscarIdEstudiante = recuperarTexto("txtBuscar");
    let encontrado = false;
    for(let i=0; i<estudiantes.length; i++){
        if(estudiantes[i].id == cmpBuscarIdEstudiante){
            alert("Estudiante encontrado");
            encontrado = true;
            break;
        }
    }
    if(encontrado == false){
        alert("Estudiante no encontrado");
    }
}