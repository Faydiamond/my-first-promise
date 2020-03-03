"use strict";
(() => {
    console.log('Here!');
    let retirarDinero = ((valor) => {
        console.log('in function!');
        let valorActual = 200;
        return new Promise((resolve, reject) => {
            if (valor > valorActual) {
                reject(' Lo siento no puede retirar, basicamente no tiene fondos suficientes');
            }
            else {
                valorActual = valorActual - valor;
                resolve(valorActual);
            }
        });
    });
    //ejecute lapromesa
    retirarDinero(900).then((message) => console.log(message))
        .catch((error) => console.warn(error));
})();
