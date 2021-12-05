/**
 * #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Crea una función "showInfo()" con los parámetros nombre y edad:
 *
 *      - La función deve devolver un string del tipo: "Eres Pablo y tienes 33 años". Recuerda
 *        que el nombre y la edad son parámetros, pueden variar en cada llamado.
 *
 *      - Muestra lo que devuelva la función por consola. Aplica lo aprendido sobre "template
 *        strings" (template literals).
 *
 *      - Llama a la función tres veces pasándole argumentos distintos.
 *
 */

'use strict';

const showInfo = (name, age) => `Eres ${name} y tienes ${age} años`;

const message_A = showInfo('Carla', 45);
const message_B = showInfo('Rebeca', 23);
const message_C = showInfo('Pablo', 33);

console.log(message_A);
console.log(message_B);
console.log(message_C);
