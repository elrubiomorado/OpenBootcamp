//Objetos en javascript
const obj = {
    id:4,
    nombre:"Edgar",
    apellido:"Avila",
    isDeveloper: true,
    libros_fav:["Habitos Atomicos", "Padre Rico, Padre Pobre"],
    "4-juegos":[1,2,3,4]
};

//Acceder a propiedades
console.log(obj["4-juegos"][1]);

const prop = "isDeveloper";
console.log(obj[prop]);

//Aqui no copiamos solo el contenido, si no que copiamos al referencia en memoria y creamos por asi decirlo un acceso directo a la variable, cualquier cambio que le hagamos a este se lo haremos tambien al objeto original
const obj2 = obj;
console.log(obj2);

obj2.nombre = "Rosé";
console.log(obj);//Aunque no lo toquemos, se modificara su valor, porque estamos modificando otro objeto que tiene la misma referencia de memoria

//Si no queremos copiar un objeto sin copiar tambien la referencia de memoria, esto con el factor de propagacion
const obj3 = {...obj};
obj3.nombre = "Lisa";
console.log(obj3);
console.log(obj);



// Ordenar lsita de objetos
const listaPeliculas = [
    {titulo: "Lo que el viento se llevo", anyo:1939},
    {titulo: "Titanic", anyo:1997},
    {titulo: "Moana", anyo:2016},
    {titulo: "El efecto mariposa", anyo: 2004},
    {titulo: "Ted", anyo:2012}
];
console.log(listaPeliculas);

//Ordenar la lista de objetos
//sort() -> muta el valor original de la lista
listaPeliculas.sort((a,b)=>a.anyo - b.anyo);
console.log(listaPeliculas);