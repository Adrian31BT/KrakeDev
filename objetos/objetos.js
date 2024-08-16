probarAtributos = function(){
    let persona = {
        nombre: "Pedro",
        apellido: "Morales",
        edad: 24,
        estaVivo: true
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if(persona.estaVivo == false){
        console.log("no esta vivo");
    }else{
        console.log("si esta vivo");
    }
}

crearProducto = function(){
    let producto1 = {
        nombre: "Televisor LG",
        precio: 200.67,
        stock: 4 
    }
    let producto2 = {
        nombre: "Laptop HP",
        precio: 400.70,
        stock: 10 
    }

    console.log(producto1.nombre); 
    console.log(producto2.precio);  
    
    if(producto1.stock == producto2.stock){
        mostrarTexto("lblMensaje","Ambos tienen el mismo stock");
    }else if(producto1.stock > producto2.stock){
        mostrarTexto("lblMensaje","El producto 1: "+producto1.nombre+" tiene mayor stock");
    }else{
        mostrarTexto("lblMensaje","El producto 2: "+producto2.nombre+" tiene mayor stock");
    }
}

modificarAtributos = function(){
    let cuenta = {
        numero: "106297445",
        saldo: 0.0
    }

    cuenta.saldo = 100;
    cuenta.saldo+=10;
    console.log(cuenta.saldo);
}

crearCliente = function(){
    let cliente = {
        cedula: "092313",
        nombre: "Adrian"
    }

    let cliente1 = {};
    cliente1.nombre = "Romero";
    cliente1.apellido = "Salcedo";
    cliente1.cedula = "091293";  
}

probarIncrementoSaldo = function(){
    let cuenta  = {numero:"23442", saldo:34.0}
    incrementoSaldo(cuenta, 100);
    console.log(cuenta.saldo);
}

probarDeterminarMayor = function(){
    let persona1={nombre:"Daniel", edad:45};
    let persona2={nombre:"Luisa", edad:48};
    let mayor;
    mayor = determinarMayor(persona1,persona2);
    if(mayor != null){
        console.log("El mayor es: "+mayor.nombre);
    }
}

incrementoSaldo = function(cuenta, monto){
    cuenta.saldo += monto;
}

determinarMayor = function(persona1, persona2){
    if(persona1.edad > persona2.edad){
        return persona1;
    }else if(persona1.edad < persona2.edad){
        return persona2;
    }else{
        return null;
    }
}