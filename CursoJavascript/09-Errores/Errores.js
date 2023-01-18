//Gestion de errores en javascript
const miFuncion = val =>{
    if(typeof val === "number"){
        return val * 2; //Esto puede geenerar un error si se le introduce un string
    };
    throw new Error("Lanzamos un error, debe de ser de tipo numerico"); 
};

//El bloque try catch sirve para codigo que puede generar error, si sucede un error dentro de este codigo el programa no se parara abrutamente
try {
    //Codigo que puede generar errores
    console.log("Esta ejecutandose correctamente");
    const doble = miFuncion("string");//Generara un error porque se espera un numero y no un string
    console.log(doble);
} catch (e) {//e es el parametro que guardara el error
    //En caso de error se ejecuta esto
    console.log(e);
    console.error("Error");
    
}finally{
    //Se ejecuta siempre al final del bloque trycatch aunque este bien o mal
    console.log("Me ejecuto siempre");
}

//Errores mas comunes
//InternalError, SyntaxError, TypeError, RangeError y ReferenceError
