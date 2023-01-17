//Sets o conjuntos - conjunto ordenado de valores unicos
const array = [1,2,3,4,5,5,5,6];

const miSet = new Set(array);
console.log(miSet); //Solo guarda valores unicos, no guarda valores repetidos

//añadir valores
//add()
miSet.add(10);
console.log(miSet);
//Si le agregamos un valor que ya tiene no lo agregara
miSet.add(5);
console.log(miSet);

//Elmimina un valor
//delete(valor)
miSet.delete(5);
console.log(miSet);

//borrar todos los valores
//clear()
// miSet.clear();
// console.log(miSet);

//Saber si el set contiene un valor
//has()
console.log(miSet.has(2));

//conocer el tamaño de un set
console.log(miSet.size);

//Iteracion de set
miSet.forEach(valor =>{
    console.log(valor);
});

//convertimos el set a un objeto iterator
const it_Set = miSet.values();
console.log(it_Set);

//Pasamos de set a array con el factor de propagacion
const arrayToSet = [...miSet];
console.log(arrayToSet);