//Formas de importar modulos
// 1 - CommonJS - require
// 2 - Import ES6 - import

//Asi llamamos a la funcion con require
// const moduloMatematicas = require("./modulos/matematicas.js");
// console.log(moduloMatematicas);

// console.log(moduloMatematicas.factorial(5));

//Asi lo hacemos con import
import "modulos/matematicas"
console.log(suma(1,2));