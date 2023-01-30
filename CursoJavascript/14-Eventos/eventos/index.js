//Obtenemos el elemento html mediante su id
const title = document.getElementById("title");

title.addEventListener("cambioTexto", evento =>{
    console.log(evento.detail);//Vemos las propiedades del evento
    title.innerText = evento.detail.texto
    title.style.color = evento.detail.color
});


//Creamos una funcion que servira para crear el evento
function nuevoTexto(nuevoTexto, color){
    const evento = new CustomEvent("cambioTexto",{
        //Estos son las propiedades del evento
        detail:{
            texto: nuevoTexto,
            color: color
        }
    });
    title.dispatchEvent(evento);//Evento lanza el evento
}

nuevoTexto("Hola este es un nuevo texto", "blue");