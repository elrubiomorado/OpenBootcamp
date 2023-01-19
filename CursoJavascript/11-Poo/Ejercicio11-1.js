//Ejercicio 11
// Crea un nuevo fichero JS que contenga las siguientes líneas

// - Una clase llamada "Estudiante" que tenga:

// - Una variable llamada nombre

// - Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS

// - Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas

// - Crea una nueva instancia de "Estudiante"

// - Haz la llamada al método obtenDatos

class Estudiante{
    //Atributos protegidos
    _nombre;
    _asignatura = ["Javascript", "Html", "Css"];

    constructor(nombre){
        this._nombre = nombre;
    }
    obtenDatos(){
        return `Hola ${this._nombre}, tengo estas tres asignaturas ${this._asignatura}`;
    }
}
class Persona extends Estudiante{

    obtenDatos(){
        console.log(super.obtenDatos());
        console.log("y Soy Una persona");

    }
}