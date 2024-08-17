let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"0923138747",nombre:"Adrian",apellido:"Bacilio",sueldo:600.0}
]

let esNuevo = false;

guardar = function(){
    let retornoEmpleado;
    let empleadoEncontrado;
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
                deshabilitar();
                esNuevo = false;
            }else{
                alert("YA EXISTE UN EMPLEDO CON LA CEDULA: "+valorCedula);
            }
        }else{
            empleadoEncontrado = buscarEmpleado(valorCedula);
            empleadoEncontrado.nombre = valorNombre;
            empleadoEncontrado.apellido = valorApellido;
            empleadoEncontrado.sueldo = valorSueldo;
            alert("EMPLEADO MODIFICADO CORRECTAMENTE");
            mostrarEmpleado();
            deshabilitar();
        }
    }
}

ejecutarBusqueda = function(){
    let empleadoEncontrado;
    let buscarCedula = recuperarTexto("txtBusquedaCedula");
    empleadoEncontrado = buscarEmpleado(buscarCedula);
    if(empleadoEncontrado == null){
        alert("EMPLEADO NO EXISTE");
    }else{
        mostrarTextoEnCaja("txtCedula", empleadoEncontrado.cedula);
        mostrarTextoEnCaja("txtNombre", empleadoEncontrado.nombre);
        mostrarTextoEnCaja("txtApellido", empleadoEncontrado.apellido);
        mostrarTextoEnCaja("txtSueldo", empleadoEncontrado.sueldo);
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
        habilitarComponente("btnGuardar");
        deshabilitarComponente("txtCedula");
    }
}

limpiar = function(){
    esNuevo = false;
    mostrarTextoEnCaja("txtBusquedaCedula","");
    mostrarTextoEnCaja("txtCedula","");
    mostrarTextoEnCaja("txtNombre","");
    mostrarTextoEnCaja("txtApellido","");
    mostrarTextoEnCaja("txtSueldo","");
    deshabilitar();
}

deshabilitar = function(){
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
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
    deshabilitar();
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

buscarPorRol = function(){
    let empleadoEncontrado;
    let buscarCedula = recuperarTexto("txtBusquedaCedulaRol");
    empleadoEncontrado = buscarEmpleado(buscarCedula);
    if(empleadoEncontrado == null){
        alert("EMPLEADO NO EXISTE");
    }else{
        mostrarTexto("infoCedula", empleadoEncontrado.cedula);
        mostrarTexto("infoNombre", empleadoEncontrado.nombre+" "+empleadoEncontrado.apellido);
        mostrarTexto("infoSueldo", empleadoEncontrado.sueldo);
    }
}

calcularAporteEmpleado = function(sueldo){
    let aporte;
    aporte = sueldo * 0.0945;
    return aporte.toFixed(2);
}

calcularValorPagar = function(sueldo, aporte, descuento){
    let valorAPagar;
    valorAPagar = parseFloat(sueldo) - (parseFloat(aporte) + parseFloat(descuento));
    return valorAPagar.toFixed(2);
}

calcularRol = function(){
    let validar = true;
    let aporte;
    let valorPagar;
    let valorSueldo= recuperarFloatDiv("infoSueldo");
    let valorDecuento= recuperarFloat("txtDescuentos");

    if(isNaN(valorDecuento)){
        validar = false;
        mostrarTexto("lblErrorDescuentos","Debe ser un valor numerico decimal (00.00)");
    }
    if(valorDecuento<0 || valorDecuento>valorSueldo){
        validar = false;
        mostrarTexto("lblErrorDescuentos","Debe ser un valor numerico entre 0 - "+valorSueldo);
    }

    if(validar == true){
        mostrarTexto("lblErrorDescuentos","");
        
        aporte = calcularAporteEmpleado(valorSueldo);
        mostrarTexto("infoIESS",aporte);
        valorPagar = calcularValorPagar(valorSueldo, aporte, valorDecuento);
        mostrarTexto("infoPago",valorPagar);
    }
}






