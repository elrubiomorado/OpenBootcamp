// Registros logs
console.log("Hola mundo");
console.info("Esto es un mensaje informativo");
console.warn("Esto es un mensaje de advertencia");
console.error("Esto es un mesaje de error");
console.debug("Esto es un mesaje de debug");

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
logger.info("Esto es un mensaje informativo");
logger.warn("Esto es un mensaje de advertencia");
logger.error("Esto es un mesaje de error");
logger.debug("Esto es un mesaje de debug");
