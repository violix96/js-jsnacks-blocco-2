'use strict';
// reset js 
console.log('ciao mondo');

// creo un array di numeri
const inputArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// controllo e stampo il numero di elementi nell'array 
console.log(contaElementi(inputArray));

// definisco la funzione contaElementi() che conta gli elementi nell'array
function contaElementi(arr) {
   
    let conta = 0;
    
    // itero attraverso l'array utilizzando un ciclo for
    for (let i = 0; i < arr.length; i++) {
        // ogni volta che trovo un elemento, incremento il contatore
        conta++;
    }
    
    // restituisco il valore del contatore, che rappresenta il numero di elementi nell'array
    return conta;
}

