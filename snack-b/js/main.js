'use strict';
// reset js 
console.log('ciao mondo');

// creao un array di strighe 
const myArray = ['pippo', 'pluto', 'paperino'];

// inizializzo una variabile
let elemento = 'ciao';

// dichiaro la funzione trova indice 
function trovaIndice(arr, elem) {
    for (let i = 0; i < arr.length; i++) {
        let elementoArray = arr[i];
        if (elementoArray === elem) {
            return i;
        }
    }
    // se non trova l'elemento ritorna -1
    return -1;
}

// stampo in console 
console.log(`L'elemento si trova in posizione ${trovaIndice(myArray, elemento)}`);
