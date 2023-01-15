// Crea los siguientes archivos JS:

// - factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for

// - factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while

// - factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

//Unifique todo en un solo archivo, no vi completamente necesario hacer otros archivos

//Factorial-for
let factorial = 1;
for(let i = 1; i <= 10; i++){
    factorial *= i;
}
console.log(factorial);

//Factorial-while
let contador = 1;
factorial = 1;
while(contador <= 10){
    factorial*=contador;
    contador++;
}
console.log(factorial);

contador = 1;
factorial = 1;
//factorial-break
while(contador <= 15){
    if(contador == 11){
        break;
    }
    factorial *= contador;
    contador++;
}
console.log(factorial);