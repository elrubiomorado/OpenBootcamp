//Declaracion de variables


//Formas de declarar variables, var, let y const
//definicion de variable: son como cajas que pueden guardar informacion para usarla luego

//Var: Variables globales
var numeroVar = 1;
var stringVar = "Hola";
var booleanVar = true; 
console.log(numeroVar);
//Las variables se pueden modificar
numeroVar = 20;
console.log(numeroVar);//Tiene el nuevo valor



//Let: Variables que solo funcionan dentro de donde fueron declaradas
let numero = 10;
console.log(numero);


//Const: Variables de contenido fijo, no se puede modificar, constantes
const PI = 3.1416;
console.log(PI);
// PI = 10; esto no se puede porque es una constante

//Typeof: sirve para saber que tipo de variable se el pasa
console.log(typeof(numeroVar));
console.log(typeof(stringVar));
console.log(typeof(booleanVar));

//No es buena practica cambiar el tipo de una variable, por ejemplo:
console.log(typeof(stringVar));
stringVar = 10;
console.log(typeof(stringVar));
//Cambiamos de string a number, es mala practica y no es recomendable



