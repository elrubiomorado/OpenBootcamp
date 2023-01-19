//Herencia - como tal es eredar propiedades y propiedades a otra clase
class Persona{
    //Propiedaes
    #nombre
    #edad
    _isDeveloper = true;

    //Constructor
    constructor(nombre, edad){
        this.#nombre = nombre;
        this.#edad = edad;
    }

    //Metodos

    //Getter - nos permite acceder a una propieda de manera controlada
    getNombre(){
        return this.#nombre;
    }
    getEdad(){
        return this.#edad;
    }

    //setter - nos permite modificar una propiedad de manera controlada
    setNombre(nombre){
        this.#nombre = nombre;
    }
    setEdad(edad){
        this.#edad = edad;
    }
    saludo(){
        console.log(`Hola, mi nombre es ${this.#nombre}, tengo ${this.#edad} años`);
    }
}
class Desarrollador extends Persona{ //Esta clase heredara de la clase persona
    _lenguaje;
    constructor(nombre, edad, lenguaje){
        super(nombre, edad);//Debemos llamar al constructor de la clase padre
        this._lenguaje = lenguaje;
    }
    saludo(){//Override
        super.saludo();
        console.log(`Hola, soy desarrollador`);
    }
}

const Edgar = new Desarrollador("Edgar", 24);//La clase desarrollador tendra los metodos y atributos que tenga su padre, aparte podra tener metodos y propiedades propias
Edgar.saludo()

//Polimorfismo - varias formas - modificar un metodo en un hijo
