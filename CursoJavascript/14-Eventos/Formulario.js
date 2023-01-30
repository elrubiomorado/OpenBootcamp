const formulario = document.getElementById("formulario");


formulario.addEventListener("submit", evento =>{//Esta funcion se llamara cada que ocurra un evento submit, este ocurre cuando enviamos el formulario
    console.log(evento);
    evento.preventDefault();//Esto evita que se haga el comportamiento por defecto
})