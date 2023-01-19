//La mejor forma de crear objetos es con las clases

//definicion de clases
class Persona{
    //Atributos del objeto
    nombre;
    edad;
    isDeveloper;

    //Constructos, metodo para inicializar los atributos
    constructor(nombre, edad, isDeveloper){
        //Le asignamos los valores que le den a los atributos, el this sirve para hacer referencia al objeto
        this.nombre = nombre;
        this.edad = edad;
        this.isDeveloper = isDeveloper;
    }

    //Metodos
    saludo(){
        console.log(`Hi my name is ${this.nombre} y tengo ${this.edad}`);
    }
}

//Asi creamos un nuevo objeto de la clase persona
const edgar = new Persona("Edgar", 21, true);

//Accedemos a los atributos y propiedades como con cualquier objeto
console.log(edgar.nombre);
edgar.saludo();

//Diferencias entre instanciar y iniciarlizar una variable
let numero = 100; /// Inicializar
let Rose = new Persona("Rosé", 26, false);//Instanciar

//instanceof > similar a typeof pero para las clases
console.log(Rose instanceof Persona);//Nos dice si es una instacia de la clase Persona








