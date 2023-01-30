//Trabajando con jquery

//Sintaxis de jquery
//$(selector).accion()

//Esta funcion sirve para ejecutar el codigo una vez que la pagina esta cargada, para evitar problemas
$(document).ready(()=>{
    $("#hide").click(()=>{
        //$("li").hide(); ocultar los li
        $("li").fadeOut();//Oculta los elementos pero mas suavemente
    });

    $("#show").click(()=>{
        //$("li").show(); muestra los li
        $("li").fadeIn();//Muetra los elementos mas suevemente
    });

    $("h1").dblclick(()=>{//Evento doble click
        $("h1").css({color:"hotpink"});//Agregamos propiedades css
    });

    $("#new-element").click(()=>{
        $("ul").append("<li>Blackpink best gg</li>");//Agregamos un nuevo elemento al final
        $("ul").prepend("<li>Blackpink best gg</li>");//Agregamos un elemento al principio
    });

    $("h1").mouseenter((elem)=>{//Cuando el mouse hace hover
        elem.target.style.color = "blue";
    });
    $("h1").mouseleave((elem)=>{//Cuando deja de hacer hover
        elem.target.style.color = "black";
    });
})