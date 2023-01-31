//Local Storage

//Setear un elemento local storage
localStorage.setItem("nombre", "Gorka"); //Clave - Valor

//Obtener un local storage
console.log(localStorage.getItem("nombre"));

//JSON.stringigy -> convierte un objeto/array en string

//Eliminar un elemento del local storage
localStorage.removeItem("nombre");


//Session storage

//Guardar en sessionStorage
sessionStorage.setItem("nombre-sesion", "Edgar-prueba");

//Cookies
document.cookie = "nombreCookie = EdgarCookie";
//Establecer caducidad
document.cookie = "nombreCaducidad = Nombre;expires="+new Date(2023, 0, 31);
console.log(document.cookie);

