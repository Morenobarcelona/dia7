/**
 * #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Utiliza lo aprendido sobre funciones para reestructurar el ejercicio de la bomba.
 * Crea la función "deactivateBomb" con los parámetros "limit" y "bombCode":
 *
 *  - limit: nº de intentos que le daremos al usuario.
 *
 *  - bombCode: código de desactivación.
 *
 */

'use strict';

/**
 * ################
 * ## randomPass ##
 * ################
 */

const randomPass = () => Math.ceil(Math.random() * 10);

/**
 * ####################
 * ## deactivateBomb ##
 * ####################
 */

function deactivateBomb(limit, bombCode) {
    for (let i = limit; i > 0; i--) {
        const userPass = Number(prompt(`Intento ${i}. Dime una contraseña:`));

        if (bombCode === userPass) return true;
    }

    return false;
}

if (deactivateBomb(5, randomPass())) {
    console.log('¡Vives un día más!');
} else {
    console.log('¡Booooooom!');
}
