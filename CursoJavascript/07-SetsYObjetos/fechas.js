//Fechas
const fecha = new Date();//fecha de hoy
console.log(fecha);

//Crear fecha apartir de una fecha dada, atencion- los meses inician en 0 y no 1
const fecha2 = new Date(2001, 7, 10);
console.log(fecha2);

//Fecha atraves de los milisegundos apartir de 31 de diciembre de 1969
const fecha3 = new Date(0);
console.log(fecha3);

//Fecha apartir de un string con la fecha
const fecha4 = new Date("August 10, 2001");
console.log(fecha4);

//comparar fechas
console.log(fecha>fecha3);
console.log(fecha<fecha3);

//No se pueden comparar fechas con === genera error, debemos convertir la fecha a milisegundos con .getTime()
console.log(fecha2===fecha4);//Error asi no se puede
console.log(fecha2.getTime()===fecha4.getTime());

//Obtener dia, mes y año
//Obtener dia
console.log(fecha2.getDate());//Dia

//Obtener mes
console.log(fecha2.getMonth()+1);//Le sumamos 1 por que aqui los meses empiezan en 0

//Obtener el año
console.log(fecha2.getFullYear());

//Mostrar la fecha en un string
//podemos ponerla directamente, pero se mostrara de manera rara, asi que la convertiremos en un mejor formato como lo puede ser el de Estados Unidos mes/dia/año
console.log(fecha2.toLocaleDateString("en-Us"));

