//Estructuras de control tipo de bifurcaciones if, else y switch

//If- Si se cumple la condicion hago esto
if(10 > 9){ //si la condicion se cumple se ejecuta el codigo dentro de su bloque
    console.log("10 si es mayor a 9");
}
if(9 > 10){
    console.log("No me cumplo");//Nunca se ejecuta porque nunca es verdadera la condicion
}

//Else - si no se cumple el if, se ejecuta esta, se usa junto con el if
if(9>10){
    console.log("no me cumplo");
}else{
    console.log("Me cumplo por que no se cumplio el if");
}

//Else if - concatenacion de if
if(10 > 11){
    console.log("no me cumplo");
}else if(10>9){
    console.log("Soy la segunda opcion que si se cumple");
}else{
    console.log("No llego a ejecutarme por que se cumplio el if");
}

//Switch - Es similar al else if, pero de otra forma
let calificacion = 10;
switch(calificacion){//Funciona tambien con cadenas, no solo con numeros
    case 10:
        console.log("Aprobado");
        break;//Para indicar que aqui termina el case y no ejecute de mas
    case 9:
        console.log("Aprobado");
        break;
    case 8:
        console.log("Aprobado");
        break;
    case 7:
        console.log("Aprobado");
        break;
    case 6:
        console.log("Aprobado");
        break;
    case 5:
        console.log("Reprobado");
        break;
    case 4:
        console.log("Reprobado");
        break;
    case 3:
        console.log("Reprobado");
        break;
    case 2:
        console.log("Reprobado");
        break;
    case 1:
        console.log("Reprobado");
        break;
    default:
        console.log("Introduce una calificacion valida")
}