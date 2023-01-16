//Cadenas de caracteres

//Pueden empezar con commilas simples, dobles o invertidas
let str = "Hola soy un texto";
let str2 = 'Hola soy un texto con comillas simples';
console.log(str);
console.log(str2);

//Para usar comillas dentro de un string debemos usar  \ antes de la commilla o usar la comilla contraria a la que estemos usando, ejemplos:
str = "Texto con \"comilla\"";
console.log(str);
str2 = "Texto con 'comillas'";
console.log(str2);
str2 = 'texto con "comillas"';
console.log(str2);

//Comillas invertidas(backticks)
str = `Comillas invertidas`;
console.log(str);
//funcionalidad extra, introucir variables dentro de un texto
let nombre = "Edgar";
let saludo = `Hola, ${nombre} bienvenido`;
console.log(saludo);

//Tambien permiten los saltos de linea
//Platillas html = 
let plantilla = 
`<html>
    <h1>Este es un ejemplo con comillas invertidas</h1>
    <p>lorem lorem lorem</p>
</html>
`;
console.log(plantilla);

//Introduccion de variables en html
let libros = ["Empieza por el por que", "El monje que vendio su Ferrari", "El poder del ahora"];

//Metodos strings mas utilizados

//lenght - obtener longitud de cadena
let palabra = "Hola Mundo";
console.log(palabra.length);

//slice() substring() substr() - obtener partes de una cadena
palabra = "Hola soy un hola mundo ";
let slice_palabra = palabra.slice(5, 10);//Primer parametro inicia y segundo parametro donde termina
console.log(slice_palabra);

let substringPalabra = palabra.substring(5,10); //Primer parametro inicia y segundo parametro donde termina
console.log(substringPalabra);

//Remplazar la primera coincidencia
palabra = "Hola mi nombre es Edgar y Edgar";
console.log(palabra.replace("Edgar", "Lisa"));//Primer parametro lo que se va a remplazar y el segundo lo que lo va a remplazar

//remplazar todas las coincidencias con expreciones regualares
palabra = "Hola soy Edgar, me llamo Edgar y soy Edgar";
console.log(palabra.replace(/Edgar/g, "Lisa"));


// Manipulacion de cadenas de texto
let input = "Leo";
let db = "leo";

console.log(input === db);

//toLowerCase - convertir a minusculas
console.log(input.toLowerCase() === db.toLowerCase());

//toUpperCase
//toLowerCase - convertir a minusculas
console.log(input.toUpperCase() === db.toUpperCase());


//Formas de concatenar cadenas
let str_1 = "Hola soy la primera cadena.";
let str_2 = " Soy la segunda cadena";
//Concat
console.log(str_1.concat(str_2));
//+
console.log(str_1 + str_2);
//Comillas invertidas
console.log(`${str_1}${str_2}`);


//Eliminar Espacios al inicio y al final
let str_3 = "    HOla    ";
console.log(str_3);
//trim()
console.log(str_3.trim()); // todos los espacios del final e inicio
//espacios del inicio
console.log(str_3.trimStart());
//espacios del final
console.log(str_3.trimEnd()); 

//Obtener el caracter en cierta posicion
palabra = "HOla soy una cadena";
//charAt()
console.log(palabra.charAt(5));
//Como si fuera un string
console.log(palabra[5]);

//Posicion de la primera palabra que coincida dentro de una cadena
//Indexof
palabra = "Edgar es muy listo, sumamente listo";
console.log(palabra.indexOf("listo"));
//lastIndexOf ultima coincidencia de la palabra
console.log(palabra.lastIndexOf("listo"));

//Expresiones regulares 
//More information: https://regexr.com

palabra = "Hola Edgar Edgar Edgar Edgar Edgar";
//Metodo para ver cuantas veces se repite una palabra
console.log(palabra.match(/Edgar/g));

//Ver si un texto contiene una palabra
console.log(palabra.includes("Edgar"));
console.log(palabra.includes("Lisa"));

//Saber si un texto empieza o termina con una palabra
console.log(palabra.startsWith("Hola"));//Si empieza con Hola
console.log(palabra.startsWith("Edgar"));//No empieza
console.log(palabra.endsWith("Edgar"));
