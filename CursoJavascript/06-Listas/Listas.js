//Arrays

// Como trabajar con listas(Arrays, arreglos, vectores)
let array = [1,2,3,4,5,6,7,8,9,10,"Hola",[1,2,3,4,5,6,7,8,9,0]];//Pueden tener todo tipo de elementos

//acceder a los valores de un array atraves de su posicion comenzando de 0
console.log(array[10]);
console.log(array[11][1]);

//Intruducir nuevos valores al array
//push() y unshift()

//Valores al final del array
array.push("Hola");
console.log(array[array.length-1]);//Elemento que le agregamos

//Valores al principio
array.unshift("me introdujeron");
console.log(array[0]);

//Metodos para eliminar valores en array
// pop() y shift()


//valores al final
array.pop();
console.log(array);
//valores al principio shift()
array.shift();
console.log(array);

//Metodo para eliminar, modificar o añadir valores en el array
const array2 = [1,2,3,4,5,6];
array2.splice(0, 1); //Eliminar valores, splice(indice, cantidadDeValoresAEliminarAPartirDelIndice);
console.log(array2);

//Añadir valores .splice(indice, 0, elementosAAgregar);
array2.splice(0,0,"Hola");
console.log(array2);

//Modificar valores splice(indice, 1, valor);
array2.splice(0,1,"Hola Mundo");
console.log(array2);



//              Unir dos listas .concat(lista2)
const lista1 = ["hola", 1,2,3];
const lista2 = [4,5,6,7];
const lista3 = lista1.concat(lista2);
console.log(lista3);

//             Unir dos listas con el factor de propagacion
const lista4 = [...lista1, ...lista2];//la propagacion separa los elementos del array
console.log(lista4);


//             obtener lista a partir de otro array
const arreglo = [1,2,3,4,5,6];

//No modifica el valor del array original
console.log(arreglo.slice(0,3));//slice(indice, IndiceFinal) - obtiene el array del indice indicado hasta el indicado como final - 1
let string = "HOla mundo";


//Metodos de iteracion en lista

//forma antigua con un bucle for
for(let i = 0; i < arreglo.length;i++){
    console.log(arreglo[i]);
}

//For each
arreglo.forEach(valor=>{//El parametro valor en cada iteracion obtendra un valor del arreglo
    console.log(valor);
})

//Busqueda de un valor dentro de un array
const variable = arreglo.find(valor =>{
    if(valor === 90){
        return true;
    }
});

const listaObjetos = [
    {nombre:"Edgar", edad:21},
    {nombre:"Rosé", edad:25},
    {nombre:"Lisa", edad:25}];

const edadRose = listaObjetos.find(o =>{
    if(o.nombre == "Rosé"){
        if(o.edad === 25){
            return true;
        }
    }
});

const edadEdgar = listaObjetos.find(o =>{
    return o.nombre === "Edgar";
});
const {edad} =  listaObjetos.find(o=>o.nombre == "Lisa");
console.log(edad);
console.log(edadEdgar.edad);
console.log(edadRose.edad);


// .map() - nos permite iterar un array y modificarlo
const ciudades = ["Ameca", "Puerta de la vega", "Tokio"];
const newCiudades = ciudades.map((valor, indice)=>{
    console.log(indice)
    return `${indice + 1} - ${valor}`;
});
console.log(newCiudades);

//filter
const filtrar = listaObjetos.filter(obj=>{
    if(obj.edad >= 25){
        return true;
    }else{
        return false;
    }
})
const filtrar2 = listaObjetos.filter(obj=>obj.edad > 24);
console.log(filtrar);
console.log(filtrar2);

// 
const valores = [3,1,1,23,4,5,54];
const suma = valores.reduce((ant, cur,i,arrayOriginal)=>{
    console.log(ant)
    console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return ant +cur
})
console.log(suma);



//Ordenar arryas

// sort() - ordenar
const desordenado = [5,67,7,8,2,4,7,888,111,1];
desordenado.sort((a,b)=>{
    if(a < b){
        return +1;
    }else if(a>b){
        return -1;
    }else{
        return 0
    }
});
console.log(desordenado);

//ordenar unicamente arrays numericos
desordenado.sort((a,b)=>a-b);
console.log(desordenado);

//Ordenar array de objetos
listaObjetos.sort((a,b)=>{
    if(a.edad < b.edad){
        return -1;
    } else if(a.edad > b.edad){
        return +1;
    }else{
        return 0;
    }
});
console.log(listaObjetos);
listaObjetos.sort((a,b)=>a.edad - b.edad);

//comparar listas
//every()
const resultado = desordenado.every(valor=>{
    if(typeof valor === "number"){
        return true;
    }else{
        return false;
    }
});
console.log(resultado);
const resultado2= array.every(valor=>valor > 0);
console.log(resultado2);

//comparar listas
const compararArrays = (array1, array2)=>{
    if(array1.length !== array2.length) return false;
    const res = array1.every((valor, i) => valor === array2[i]);
    return res;
}
const comparar1 = [1,2,4];
const comparar2 = [1,2,4,2];
console.log(compararArrays(comparar1, comparar2)); 


//Saber si unos elementos cumplen alguna condicion
//some()
const some = [1,23,4,56,2143,5,234,5,2345,,2345];
const respuesta = some.some(valor=>valor > 1000); //Con solo un elemento que cumpla devolvera true;
console.log(respuesta);
//Ver si existe un elemento
console.log(some.some(valor=>valor===1));

//Como obtener una lista a apartir de un objeto iterable
const str = "Hola soy Edgar";
console.log(str[5]);

const ar_str = Array.from(str);
console.log(ar_str);

//keys
const keys = listaObjetos.keys();
console.log(keys);
const ar_keys = Array.from(keys);
console.log(ar_keys);
