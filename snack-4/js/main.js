'use strict'
// reset js 

console.log('ciao mondo');

// creazione dei due array con lunghezze diverse
let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8];

// verifica quale array ha meno elementi
let minLength = Math.min(array1.length, array2.length);

// aggiungi elementi casuali all'array più corto fino a quando entrambi hanno la stessa lunghezza
while (array1.length !== array2.length) {
  if (array1.length < array2.length) {
    // aggiungi un numero casuale a array1
    array1.push(Math.floor(Math.random() * 10) + 1);
  } else {
    // aggiungi un numero casuale a array2
    array2.push(Math.floor(Math.random() * 10) + 1);
  }
}

console.log("Array 1:", array1);
console.log("Array 2:", array2);
