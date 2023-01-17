//Ejercicio 1
// Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

// - Un nuevo Set con los nombres de tu familia

// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)

const set = new Set(["Jaime", "Lizeth"]);
console.log(set);

set.add("Edgar");
set.add("Edgar");
console.log(set);

set.add("Javascript");
console.log(set);

//Ejercicio 2
// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

// - Una variable que obtenga tu edad a partir del objeto anterior

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const persona = {
    nombre:"Edgar",
    apellido:"Manobal",
    edad:25,
    altura:1.75,
    eresDesarrollador:true
};

const edad = persona.edad;
console.log(edad);

const lista = [ {nombre:"Yerson", apellido:"peres", edad: 40},  {nombre:"Raul", apellido:"periz", edad:30},persona];
console.log(lista);

lista.sort((a,b)=>a.edad - b.edad);
console.log(lista);

//Ejercicio 3
// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy

// - La fecha de tu nacimiento

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

// - Una variable que contenga el día de tu nacimiento

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)

const fechaHoy = new Date();
console.log(fechaHoy);

const fecheNacimiento = new Date(1988, 9, 11);
console.log(fecheNacimiento);

const tarde = fechaHoy > fecheNacimiento;
console.log(tarde);

const dia = fecheNacimiento.getDate();
console.log(dia);

const mes = fecheNacimiento.getMonth();
console.log(mes);

const anyo = fecheNacimiento.getFullYear();
console.log(anyo);


//Ejercico 4
// - Abre una nueva ventana "about:blank" en Google Chrome

// - Abre la consola de desarrollador de Google Chrome (F12)

// - Pregunta al usuario cuál es su edad y almacénala en una variable llamada edad

const edadUsuario = prompt("Cual es tu edad?");