const boton = document.querySelector("#btn");

console.log(boton);


boton.addEventListener("click",()=>{
    //alert("Se presiono el boton");
    //confirm("Estas de acuerdo?") && alert("Ok");
    confirm("Estas deacuerdo?")//operador ternario, if comprimido
        //True
        ? alert("Ok")
        //False
        : alert("Que mal pana");
});

const info = document.querySelector("#info");

info.addEventListener("click",()=>{
    const nombre = prompt("cual es tu nombre?");
    alert("Tu nombre es " + nombre);
});

//Ver listas de objetos como tablas
const lista = [
    {
        nombre:"Edgar",
        edad:21
    },
    {
        nombre:"Rosé",
        edad:26
    },
    {
        nombre:"Lisa",
        edad:26
    }
];

console.table(lista);