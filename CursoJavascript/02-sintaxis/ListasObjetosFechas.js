// Listas, Objetos Y Fechas

//Listas o Array: Son como variables que pueden guardar mas de un valor
const array = [1, "hola", undefined, null, true];
//Para acceder a un elemento debemos de pasarle su posicion, el primer elemento empieza en 0
console.log(array[4]);
//Acceder al ultimo elemento utillizando el metodo lenght que sirve para contar la cantidad de elementos en un array o string
console.log(array[array.length-1]); //A la cantidad de elementos del array le restamos 1 para llegar al ultimo elemento
//Mostrar todos los valores del array
console.log(array);//Solo llamamos a su nombre
//Tambien podemos declararlo de la siguiente manera
const array2 = new Array(1, 2, 3, 5);
//Tambien podemos declararlas vacias para despues agregarle valores
const array3 = new Array(3);//Lista con tres espacios vacios
array3[0] = 34; // Agregamos un valor a la primera posicion 
console.log(array3);
//Tambien los arrays pueden contener otros arrays dentro, se convertirian en cajas de cajas
const array4 = new Array(array, array2, array3);
console.log(array4);
//Declarando un array con arrays dentro
const array5 = new Array([1,2,3], [12,3,4,5,6,7],"hola", 10);
console.log(array5);
//Para acceder a un elemento de un array dentro de otro necesitamos los dos indicen, el indice del array en el array, y del elemento dentro de su array
console.log(array5[1][1]);


//Objetos - son representaciones en datos de objetos reales
const persona = {
    //Atributos - lo que define al elemento
    nombre:"Edgar",
    apellidos:"Avila Gonzalez",
    estatura:1.75,
    edad:21,
    //Pueden almacenar arrays
    padres:["Lizeth", "Jaime"],
    //Tambien otros objetos
    habilidad:{
        nombre:"Programacion",
        xp:"3 años",
        TeGusta: true
    },
    //No podemos crear atributos con guion ya que genera error, si asi lo necesitamos lo hacemos de la siguiente manera
    "hola-mundo":"Hola mundo"
}
//Acceder al elemento y sus atributos
console.log(persona.apellidos);
//Acceder a un atributo array de un objeto
console.log(persona.padres[0]);
//Acceder a un objeto dentro de otro objeto
console.log(persona.habilidad.TeGusta);

//Crear un atributo de un objet
persona.bandaFav = "Blackpink";
console.log(persona.bandaFav); 

//Editar valor de un atributo
persona.edad = 22;
console.log(persona.edad);

//Tambien podemos crear los objetos sin asignarle valores a las propiedades, esto para asignarles despues dichos valores
//Pero al contrario, no podemos crear un objeto sin atributos, ya que genera error


//Fechas
//Librerias de apoyo: Moment.js

//Crear fecha
const ahora  = new Date(); //Fecha al momento de crear la variable
console.log(ahora);

//Tambien podemos crear la fecha en milisegundos despues de la fecha inicio que se considera 1 de enero de 1970
const fechaMilis = new Date(10); //10 milisegundos despues de la fecha
console.log(fechaMilis);

//Podemos crear una fecha a partir de una cadena escrita en ingles
const fechaCadena = new Date("july 22 2022");
console.log(fechaCadena);

//Tambien podemos crear un fecha apartir de darsela con numeros, empezando con el año, despues el mes pero empezando del 0 y por ultimo el dia
const cumpleaños = new Date(2023, 7, 10);
console.log(cumpleaños);

//Obtener el dia de hoy, primero debemos crear un elemento del tipo date para utilizarlo
const diaHoy = ahora.getDate();
console.log(diaHoy);//Recordar que empieza de 0
//Se hace igual con el dia, mes y año pero con el prefijo Fullyear, or month en lugar de date
const anioActual = ahora.getFullYear();
console.log(anioActual);
const mesActual = ahora.getMonth();
console.log(mesActual+1); // Como empieza de 0 podemos sumarle un 1 para que diga el mes como lo conocemos