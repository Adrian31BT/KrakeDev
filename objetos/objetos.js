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