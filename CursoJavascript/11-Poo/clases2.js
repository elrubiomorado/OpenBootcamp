//definicion de clases
class Persona{
    //Debemos inicilizar las propiedades como privadascon #
    //Solo se puede acceder desde esta misma clase
    #nombre
    #edad
    //Tambien podemos crear metodos protegidos
    #obtenEdad
    //Ahora solo podremos hacer uso de las propiedades desde dentro de la clase

    //Tambien podemos ponerlas como protegidas
    //Solo se puede acceder desde la clase y clases hijas
    _isDeveloper = true;

    //Constructos, metodo para inicializar los atributos
    constructor(nombre, edad){
        //Le asignamos los valores que le den a los atributos, el this sirve para hacer referencia al objeto
        this.#nombre = nombre;
        this.#edad = edad;
    }

    //Metodos
    saludo(){
        console.log(`Hi my name is ${this.nombre} y tengo ${this.edad}`);
    }

    //Metodo para mostrar el nombre
    Nombre(){//Asi es como podremos regresar el nombre, lo puede ver pero no modificar
        return this.#nombre;
    }

    //Metodo privado
    #obtenEdad(){
        return this.#edad;
    }
}

const rose = new Persona("Rosé", 26);

//Aceder
// console.log(rose.nombre); //Esto ya no es posible con los atributos protegidos

//Proteger partes de la clase
// rose.edad = 27;//Esto no nos interesa que las personas puedan hacer esto, asi que debemos proteger los elementos

//
console.log(rose.Nombre());

//console.log(rose.obtenEdad());//No se puede por que es privado el metodo