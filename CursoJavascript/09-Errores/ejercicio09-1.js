// Crea un nuevo proyecto de Node

// - Instala la dependencia Winston

// - En el archivo index.js crea una función que devuelva un error con un mensaje personalizado

// - Registra el error en un archivo a través de un try...catch

const winston = require('winston');

//Este modulo nos sirven para crear un archivo de registro de los logs
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

const generaErrores = (a)=>{
    if(typeof a === "number"){
        return a;
    } 
    throw new Error("Error");
};

try {
    console.log(generaErrores("Hola"));
} catch (e) {
    console.error(e);
}finally{
    console.error("Soy un finally");
}
