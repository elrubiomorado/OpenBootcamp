//Continue y break
//El continue sirve para saltar a la siguiente interaccion
for(let i = 0; i < 10;i++){
    continue;
    console.log(i);//Nunca se ejecutara por que saltamos las interracciones apartir del continue
}

//El break sirve para salir de un bucle
for(let i = 0; i < 10;i++){
    if(i == 0){
        continue;//Cuando i sea 0 no se imprimira su valor
    }

    if(i == 5){
        break; //saldremos del bucle en cuanto i valga 5
    }
    console.log(i); //Se va a imprimir hasta 4
}

