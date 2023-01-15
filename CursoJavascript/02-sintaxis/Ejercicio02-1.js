// Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

// - Tu nombre (string)

// - Tu edad (number)

// - ¿Eres desarrollador? (boolean)

// - Tu fecha de nacimiento (Date)

// - Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)

//Variables con los datos, se puede hacer directo pero tambien asi
const nombre = "Edgar";
const edad = 21;
const desarrollador = true;
const fechaNacimiento = new Date("August 10 01");
const libroFav = {
    titulo:"Padre Rico Padre pobre",
    autor:"Robert Kiyosaki",
    fecha:new Date("August 1 1997"),
    url: "https://www.gandhi.com.mx/padre-rico-padre-pobre"
};
const lista = [nombre, edad, desarrollador, fechaNacimiento, libroFav];

//Ejercicio completo