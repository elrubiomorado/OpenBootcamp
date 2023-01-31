//Obtenemos todos los parrafos
const parrafos = document.querySelectorAll(".parrafo");

//Secciones
const secciones = document.querySelectorAll(".seccion");

//Evento al arrastrar
parrafos.forEach(parrafo=>{//for each para acceder a todos los elementos y asignarle a todos un evento
    parrafo.addEventListener("dragstart",event=>{//dragstart cuando comienza a arrastrar
        console.log("inicio arrastre");
        parrafo.classList.add("dragging");
        event.dataTransfer.setData("id",parrafo.id);
    });
    parrafo.addEventListener("dragend",()=>{
        console.log("Termine de arrastrar");
        parrafo.classList.remove("dragging");
    });
});

secciones.forEach(seccion =>{
    seccion.addEventListener("dragover", event=>{
        event.preventDefault();
        console.log("drag Over");
    });

    seccion.addEventListener("drop",event=>{
        console.log("Drop");
        const id_parrafo = event.dataTransfer.getData("id");
        const parrafo = document.getElementById(id_parrafo);
        seccion.appendChild(parrafo);
    });
});