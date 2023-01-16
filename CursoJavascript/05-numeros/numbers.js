//Numeros en javascript
//Declaracion de variables numericas
let a = 5;
console.log(a);
let flotante = 0.1;
console.log(flotante);

//precision
let b = 0.1;
let c = 0.2;
console.log(b + c);
//Evitar que javascript ponga 0 de mas
console.log(Math.round((b + c) * 100)/100);


//Operaciones Aritmeticas
a = 3.5;
b = 4.8;
//suma
console.log(a + b);
//Resta
console.log(a-b);
//Multiplicacion
console.log(a*b);
//Division
console.log(a/b);
//Resto
console.log(a%b);
//Elevar a potencia
console.log(4**2);

//Representacion de los numeros en cadenas de texto
//Pasar de numero a string
a = 10;
console.log(typeof(a));
let a_s = a.toString();
console.log(a_s);
console.log(typeof(a_s));//Ya es string


//Redondeo de numero decimales
a = 3.3;
b = a * 3;
console.log(b);
//toFixed(x) - limitar el numero de decimales al valor x
console.log(b.toFixed(1));//El parametro es el numero de decimales que queremos
//tener cuidado por que convierte el valor a string

//toPrecision(x) - limita el numero de cifras significativas, devuelve un string
console.log(b.toPrecision(2));

//Operador .valueOf() - obtener valores numericos apartir de literales
//definir variable numerica mediante prototipo
let numero = new Number(3);
console.log(typeof(numero));
console.log(numero.valueOf());

//NaN - Infinity : NaN not a number
let n = Number("Adios");
console.log(n);//No es un numero
console.log(isNaN(n));//Pregunta si es un numero o no

let numerador = 19;
let divisor = 0;
console.log(numerador/divisor);


//convertir string a valores numericos con number, parseInt y parseFloat
let number = "5.91";
console.log(typeof(number));
console.log(typeof Number(number));

console.log(typeof parseInt(number));
console.log(typeof parseFloat(number));

//Numeros hexadecimales (base 16)
let numHex = "0x3a5b7";
console.log(parseInt(numHex));


//Obtener los valores maximo y minimo en javascript
let min_precision = Number.EPSILON;
let min_valor_Js = Number.MIN_VALUE;
let max_valor_js = Number.MAX_VALUE;
console.log(min_precision);
console.log(min_valor_Js);
console.log(max_valor_js);