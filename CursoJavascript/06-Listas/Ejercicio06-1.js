// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)

// - Modifica la lista de la compra y añádele "Aceite de Girasol"

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const listaCompra = ["Fresas", "Sandia", "Instant Soup","Agua", "Frijoles"];
listaCompra.push("Aceite de Girasol");
console.log(listaCompra);
listaCompra.pop();
console.log(listaCompra);
const peliculas = [{titulo:"YourName",director:"Makoto Shinkai", fecha:new Date(2016, 7, 26)}, {titulo:"Quiero comerme tu pancreas", director:"Edgar Avila", fecha:new Date(2018, 7,12)}, {titulo:"Shrek", director:"John Cena", fecha: new Date(2002, 11, 11)}];
console.log(peliculas);
const listaNueva = peliculas.filter(pelicula => pelicula.fecha>new Date(2010,0,1));
console.log(listaNueva);
const directoresLista = peliculas.map((pelicula, indice)=>pelicula.director);
console.log(directoresLista);
const titulosLista = peliculas.map(pelicula => pelicula.titulo);
console.log(titulosLista);
const directoresTitulos = directoresLista.concat(titulosLista);
console.log(directoresTitulos);
const directoresTitulos2 = [...directoresLista, ...titulosLista];
console.log(directoresTitulos2);