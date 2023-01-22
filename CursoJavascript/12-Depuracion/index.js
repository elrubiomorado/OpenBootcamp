//Depuracion - sirve para ejecutar el codigo de una forma controlada, parte por parte para revisar que todo es te funcionando bien
const Persona = {
    nombre:"Edgar",
    edad:21
}
console.log(Persona);
function obtenDobleEdad(edad){
    return 2 * edad;
}

const dobleEdad = obtenDobleEdad(Persona.edad);
console.log(dobleEdad);

Persona.edad = 42;