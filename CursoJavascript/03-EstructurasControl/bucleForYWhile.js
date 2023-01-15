//Bucles de control - Estructuras de codigo que se repiden una determinada cantidad de veces

//For 
for(let i = 1; i < 10;i++){  // Inicio ; Condicion ; aumento
    console.log(i);
}

// manera diferente no es 100% necesario poner el aumento dentro de los parametros
for(let i = 1; i<10;){
    i++;
    console.log(i);
}
// El aumento en cada vuelta puede ser de la cantidad que queramos
for(let i = 1; i<10; i+=2){
    console.log(i);
}

//Iterar el contenido de un array
const array = [10,1,1,2,34,1,23,4,1];
for(let i = 0; i < array.length;i++){
    console.log(array[i]);
}

//For of
for(let valor of array){ // La variable que le pasemos dentro tomara el valor de un elemento de cada elemento del array en cada vuelta
    console.log(valor);
}

//Estructura forEach
array.forEach(valor =>{
    console.log(valor);
});

//For in
let persona = {
    nombre:"Edgar",
    apellido: "Avila",
    edad: 21,
    isDeveloper:true
}
for (let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);//Tambien podemos acceder a los valores de las propiedad de un objeto como si fuera un array, pero en lugar de pasar la posicion de la propiedad le pasamos el nombre de la propiedad
}

//While - es como un tipo de combinacion de if y for, ya que para que se ocupe se tiene que cumplir la condicion y se ejecutara hasta que la condicion sea falsa, por lo cual debemos de tener cuidado de que la condicion sea falsa en algun momento para que el bucle no se haga infinito
let i = 0;
while(i <= 10){
    console.log(i);
    i++;
}

//Do while - Este a diferencia del while, se ejecuta al menos una vez, sea o no sea la condicion verdad, en el while si no se cumple la condicion no se ejecutara ninguna vez
do{
    console.log("Me cumpli una sola vez");
} while(10>111);//No soy verdad