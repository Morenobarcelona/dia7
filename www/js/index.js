'use strict';

// Declaración de función.
function sayHello_1(name) {
    return `Hello ${name}`;
}

sayHello_1('Sonia');

// Expresión de función.
const sayHello_2 = function (name) {
    return `Hello ${name}`;
};

sayHello_2('David');

// Arrow Funcion
const sayHello_3 = (name) => {
    return `Hello ${name}`;
};

sayHello_3('Vicente');
