let clientes = [
    {cedula:"1111111", nombre:"Juan", edad:20},
    {cedula:"2222222", nombre:"Mario", edad:50},
    {cedula:"3333333", nombre:"Pepe", edad:22}
];

guardarCambios = function(){
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarTexto("txtEdad");

    let datosCliente = {};
    datosCliente.cedula = valorCedula;
    datosCliente.nombre = valorNombre;
    datosCliente.edad = valorEdad;

    mofificarCliente(datosCliente);
    mostrarClientes();
}


mofificarCliente = function(cliente){
    let clienteEncontrado = buscarCliente(cliente.cedula);
    if(clienteEncontrado != null){  
        clienteEncontrado.nombre = cliente.nombre;
        clienteEncontrado.edad = cliente.edad;
    }
}

ejecutarBusqueda = function(){
    let valorCedula = recuperarTexto("txtCedulaBusqueda");
    let cliente = buscarCliente(valorCedula);
    if(cliente == null){
        alert("Cliente no encontrado");
    }else{
        mostrarTextoEnCaja("txtCedula", cliente.cedula);
        mostrarTextoEnCaja("txtNombre", cliente.nombre);
        mostrarTextoEnCaja("txtEdad", cliente.edad);
    }
}

crearCliente = function(){
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarTexto("txtEdad");

    let nuevoCliente = {};
    nuevoCliente.cedula = valorCedula;
    nuevoCliente.nombre = valorNombre;
    nuevoCliente.edad = valorEdad;

    agregarCliente(nuevoCliente);
    mostrarClientes();
}

agregarCliente = function(cliente){
    let resultado;
    resultado = buscarCliente(cliente.cedula);
    if(resultado == null){
        clientes.push(cliente);
        alert("Cliente agregado");
    }else{
        alert("Ya existe cliente con la la cedula: "+cliente.cedula);
    }
} 

buscarCliente = function(cedula){
    let elementoCliente;
    let clienteEncontrado = null;
    for(let i=0; i<clientes.length; i++){
        elementoCliente = clientes[i];
        if(elementoCliente.cedula == cedula){
            clienteEncontrado = elementoCliente;
            break;
        }
    }
    return clienteEncontrado;
}

mostrarClientes = function(){
    let cmpTabla = document.getElementById("tablaClientes");
    let contenidoTabla = "<table><tr>"+
    "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>EDAD</th>"+
    "</tr>";
    let elementoCliente;
    for(let i=0; i<clientes.length; i++){
        elementoCliente = clientes[i];
        contenidoTabla+=
        "<tr><td>"+elementoCliente.cedula+"</td>"
        +"<td>"+elementoCliente.nombre+"</td>"
        +"<td>"+elementoCliente.edad+"</td>"
        +"</td>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML = contenidoTabla;
}