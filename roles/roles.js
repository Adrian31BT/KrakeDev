let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"0923138747",nombre:"Adrian",apellido:"Bacilio",sueldo:600.0}
]

let esNuevo = false;

guardar = function(){
    let retornoEmpleado;
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido= recuperarTexto("txtApellido");
    let valorSueldo= recuperarFloat("txtSueldo");



    if(validarCedula(valorCedula) & validarNombre(valorNombre) & validarApellido(valorApellido) & validarSueldo(valorSueldo)){
        if(esNuevo == true){
            objEmpleado = {};
            objEmpleado.cedula = valorCedula;
            objEmpleado.nombre = valorNombre;
            objEmpleado.apellido = valorApellido;
            objEmpleado.sueldo = valorSueldo;
            retornoEmpleado = agregarEmpleado(objEmpleado);
            if(retornoEmpleado == true){
                alert("EMPLEADO GUARDADO CORRECTAMENTE");
                mostrarEmpleado();
            }else{
                alert("YA EXISTE UN EMPLEDO CON LA CEDULA: "+valorCedula);
            }
        }
    }
}

validarCedula = function(cedula){
    validar = true;
    let longitudCedula;
    longitudCedula = cedula.length;
    if(longitudCedula == 0){
        validar = false;
        mostrarTexto("lblErrorCedula","*Campo obligatorio");
    }else{
        if(longitudCedula == 10){
            for(let i=0; i<longitudCedula; i++){
                digito = cedula.charAt(i);
                if(!esDigito(digito)){
                    validar = false;
                    mostrarTexto("lblErrorCedula","Ingrese solo digitos");
                }
            }
        }else{
            validar = false;
            mostrarTexto("lblErrorCedula","Ingrese 10 caracteres");
        }
    }
    return validar;
}

validarNombre = function(nombre){
    validar = true;
    let longitudCadena;
    longitudCadena = nombre.length;
    if(longitudCadena == 0){
        validar = false;
        mostrarTexto("lblErrorNombre","*Campo obligatorio");
    }else{
        if(longitudCadena>=3){
            for(let i=0; i<longitudCadena; i++){
                caracter = nombre.charAt(i);
                if(!esMayuscula(caracter)){
                    validar = false;
                    mostrarTexto("lblErrorNombre","ingrese solo letras mayusculas");
                }
            }
        }else{
            validar = false;
            mostrarTexto("lblErrorNombre","Ingrese al menos 3 caracteres");
        }
    }
    return validar;
}

validarApellido = function(apellido){
    validar = true;
    let longitudCadena;
    longitudCadena = apellido.length;
    if(longitudCadena == 0){
        validar = false;
        mostrarTexto("lblErrorApellido","*Campo obligatorio");
    }else{
        if(longitudCadena>=3){
            for(let i=0; i<longitudCadena; i++){
                caracter = apellido.charAt(i);
                if(!esMayuscula(caracter)){
                    validar = false;
                    mostrarTexto("lblErrorApellido","ingrese solo letras mayusculas");
                }
            }
        }else{
            validar = false;
            mostrarTexto("lblErrorApellido","Ingrese al menos 3 caracteres");
        }
    }
    return validar;
}

validarSueldo = function(sueldo){
    validar = true;
    if(isNaN(sueldo)){
        validar = false;
        mostrarTexto("lblErrorSueldo","*Campo obligatorio");
    }else{
        if(sueldo < 400 || sueldo>5000){
            validar = false;
            mostrarTexto("lblErrorSueldo","Ingrese valor entre 400 - 5000");
        }
    }
    return validar;
}

buscarEmpleado = function(cedula){
    let empleado;
    let empleadoEncontrado = null;
    for(let i=0; i<empleados.length; i++){
        empleado = empleados[i];
        if(empleado.cedula == cedula){
            empleadoEncontrado = empleado;
            break;
        }
    }
    return empleadoEncontrado;
}

agregarEmpleado = function(empleado){
    nuevaCedula = empleado.cedula;
    let empleadoEncontrado;
    empleadoEncontrado = buscarEmpleado(nuevaCedula);
    if(empleadoEncontrado == null){
        empleados.push(empleado);
        return true;
    }else{
        return false;
    }
}

mostrarOpcionEmpleado = function(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleado();
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

ejecutarNuevo = function(){
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo = true;
}

mostrarOpcionRol = function(){
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

mostrarOpcionResumen = function(){
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}

mostrarEmpleado =  function(){
    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table><tr>"+
    "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>APELLIDO</th>"+
    "<th>SUELDO</th>"+
    "</tr>";
    let elementoEmpleado;
    for(let i=0; i<empleados.length; i++){
        elementoEmpleado = empleados[i];
        contenidoTabla+=
        "<tr><td>"+elementoEmpleado.cedula+"</td>"
        +"<td>"+elementoEmpleado.nombre+"</td>"
        +"<td>"+elementoEmpleado.apellido+"</td>"
         +"<td>"+elementoEmpleado.sueldo+"</td>"
        +"</td>"
    }

    contenidoTabla+="</table>"
    cmpTabla.innerHTML = contenidoTabla;
}



