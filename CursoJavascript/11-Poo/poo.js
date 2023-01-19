//Programacion Orientada a Objetos - esta orientacion con mi explicacion es como una funcion generadora de objetos, ya que repetir el codigo para crear muchas personas no es eficiente, se hace una funcion que apartir de ella cree personas
const persona = {
    nombre:"Edgar",
    edad:34,
    isDeveloper:true,
    //Tambien puede tener funciones
    saludo: function(){
        console.log("hola")
    }
};

//Asi llamamos al metodo del objeto
persona.saludo(); 

//Esto seria muy repetivo y poco eficiente
const persona2 = {
    nombre:"Edgar",
    edad:34,
    isDeveloper:true,
    //Tambien puede tener funciones
    saludo: function(){
        console.log("hola")
    }
};
persona2.saludo();

//Factory function - esta puede ser una opcion para crear objetos, pero no es la mas segura, usada y eficiente
const creaPersona = (nombre, edad, isDeveloper) =>{
    return{
        nombre,
        edad,
        isDeveloper,
        saludo(){
            console.log("Hello");
        }
    }
};