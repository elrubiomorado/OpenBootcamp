//Funciones

//Que son las funciones
//Son bloques de codigo reutilizable

//Declarar funciones
function suma(parametro1, parametro2){//Los parametros sirven para pasarle datos a la funcion
    return parametro1 + parametro2;
};

console.log(suma(5,5));//Para usar la funcion solo necesitamos escribir su nombre con los parentesis

/////////////////////////////////////
let nombre = "Edgar"
console.log(despedir(nombre));//A pesar que en la funcion modificamos el valor del nombre, no se modifica la variable que se le pasa como parametro, porque solo le pasamos el contenido, no la variable
console.log(nombre);
function despedir(nombre){
    nombre = "Diego";
    return nombre;
}

//////////////////////////////////////
//Funcionamiento con objetos
let persona = {nombre:"Juan", apellido:"Avila"};
salugarPersona(persona);
console.log(persona);//Cuando pasamos un objeto como parametro este si se ve modificado, debido a que pasamos la referencia en memoria para acceder a el, no pasamos su contenido, asi que si la funcion modifica el objeto, el objeto original si se vera afectado
function salugarPersona(objeto){
    console.log(`hola ${objeto.nombre} ${objeto.apellido}`);
    objeto.nombre = "Rose";
};


/////////////////////////////////////
//Valor por defecto en funcion
function imprimeNumero(numero = 1){//Parametro por defecto
    console.log(numero);
};
imprimeNumero();

/////////////////////////////////////
//Parametros indeterminados
function imprimir(...parametros){//El factor de propagacion nos ayuda a descomponer los parametros que le pasen en parametros individuales
    console.log(parametros);
};
console.log(imprimir(1,1,1,1,1,1,1,1,1,11,1,1,1));

/////////////////////////////////////
//Usar los parametros indeterminados para realizar una operacion
function sumar(...numeros){
    console.log(numeros.reduce((a,b)=>a+b));//La funcion radius nos ayuda a realizar la suma de los numeros, ya que el parametro indeterminado lo toma como un objeto
};
sumar(1,2,3,4,5,65);


////////////////////////////////////
//Devolver valor
function restar(...numeros){
    return numeros.reduce((a,b)=>a-b);
};
let resta = restar(1,2,3,4,5);
console.log(resta);


/////////////////////////////////////
//Funciones tipo flecha - solo se pueden acceder despues del declararlas, no antes
const ArrowFunction = (parametro) =>{
    console.log(parametro);
};
ArrowFunction("Hola");

//Fucnion flecha corta
const ArrowFuntion2 = valor => valor*2;//Devuelve lo que se encuentre despues de la flecha
console.log(ArrowFuntion2(2));


///////////////////////////////
//Llamar a una funcion dentro de otra
function saludar(){
    hola();
};
function hola(){
    console.log("Hola");
};
saludar();

///////////////////////////////
//stackOverflow
//Funciones recursivas
// function recursivo(){
//     recursivo()
// };
// recursivo();

////////////////////////////////
//Funciones asincronas 
function miAsinc(){
    //Hace una llamada a una base de datos externa
    //Puede darnos alalgun error

}
//Promesas - sirven para cuando solicitamos datos a una api o base de datos, si todo sale bien se ejecuta una cosa y si no otra
const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random()*2);
    //Si esta todo correcto
    if(i !== 0){
        resolve(); //salio todo bien
    }else{
        reject(); //Salio todo mal
    }
});

miPromesa
    .then(()=>console.log("Se ha hecho todo con exito"))//Si todo sale bien se ejecuta esto
    .catch(()=>console.log("Todo salio mal, abortar mision, help helpe wqasdfasdhf me muero asdfjakdshfdsf"))//Si sale mal esto
    .finally(()=>console.log("Me ejecuto siempre")); //Siempre se ejecuta esto al final, salga bien o mal

/////////////////////////////////////////////
//Funciones generadoras
function* generaId(){
    let id = 0;
    while(true){
        id++;
        yield id; //Cada vez que se llame a la funcion generadora se parara aqui y regresara el valor de i sin salir de la funcion
        if(id===10){
            return;//Esto significa que la funcion generadora para de generar y terminara, al menos con el objeto generador que le asignen, si la asignan a un nuevo generador volvera a empezar de 0
        }
    }
};

//Creamos un objeto generador para hacer uso de la funcion generadora
const gen = generaId();

console.log(gen.next().value);//Con el metodo next llamamos a la funcion generadora en su siguiete iteracion
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);//Termino
