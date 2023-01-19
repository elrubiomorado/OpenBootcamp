//Getter y setters, son metodos que sirven para poder obtener los atributos y asignarles valores a ellos
//definicion de clases
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
}
const rose = new Persona("Rosé", 26);

//Getter - Metodos que nos permite obtener atributos/metodos privados o protegidos
console.log(rose.getNombre());
//Setter - Metodos que nos permiten cambiar el valor de algunos de los atributos privados o protegidos
rose.setEdad(27);//Ya lo modificamos sin haber modificado directamente la propiedad, lo modificamos mediante el setter
console.log(rose.getEdad());