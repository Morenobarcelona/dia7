/**
 * #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Crea una función que imprima X resultados aleatorios de una
 * quiniela 1 X 2. Ejemplo, si le decimos que imprima 14 resultados:
 *
 *      Resultado 1: 1
 *      Resultado 2: X
 *      Resultado 3: 2
 *      (...)
 *      Resultado 14: 2
 *
 */

'use strict';

// Creamos la función y solicitamos un número de resultados.
function getQuiniela(limit) {
    // Creamos un bucle que se repita tantas veces como resultados queramos.
    for (let i = 1; i <= limit; i++) {
        // Obtenemos un resultado aleatorio: 1, X o 2.
        const randomNum = Math.floor(Math.random() * 3);

        // En función del resultado anterior obtenemos la opción correcta.
        const result = randomNum === 0 ? 'X' : randomNum;

        /* let result;

        if (randomNum === 0) {
            result = 'X';
        } else {
            result = randomNum;
        } */

        // Imprimimos el resultado.
        console.log(`Resultado ${i}: ${result}`);
    }
}

getQuiniela(12);
