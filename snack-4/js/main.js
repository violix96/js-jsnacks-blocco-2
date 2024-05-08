'use strict'
// reset js 

console.log('ciao mondo');

// // creazione dei due array con lunghezze diverse
// let array1 = [1, 2, 3, 4, 5];
// let array2 = [6, 7, 8];

// // verifica quale array ha meno elementi
// let minLength = Math.min(array1.length, array2.length);

// // aggiungi elementi casuali all'array più corto fino a quando entrambi hanno la stessa lunghezza
// while (array1.length !== array2.length) {
//   if (array1.length < array2.length) {
//     // aggiungi un numero casuale a array1
//     array1.push(Math.floor(Math.random() * 10) + 1);
//   } else {
//     // aggiungi un numero casuale a array2
//     array2.push(Math.floor(Math.random() * 10) + 1);
//   }
// }

// console.log("Array 1:", array1);
// console.log("Array 2:", array2);


// esempio 

// let array1 = [1,2,3];
// let array2 = array1;

// console.log(array1, array2);

// array1[0] = 25;

// console.log(array1, array2);

// definizione della funzione 


// let prova = 2;

function nomeFunzione(num1, num2) {   
    // console.log("sono la funzione");

    // console.log(num1, num2);

    const risultato = num1 + num2;
    // alert('sono nella funzione');

    return risultato;
    // return va sempre specificato, return vive solo all'interno di una funzione 

    console.log(prova);



}

// adesso invoco la funzione 

// nomeFunzione('qualcosa');
// nomeFunzione('di');
// nomeFunzione('diverso');
// nomeFunzione('ogni');
// nomeFunzione('volta');
// nomeFunzione('qualcosa');
// nomeFunzione('qualcosa');
// nomeFunzione('prova');

// // console.log(risultato); 

// console.log(nomeFunzione());


const antonio = nomeFunzione(5, 5);
const alan = nomeFunzione(10, 1);
const livi = nomeFunzione(1, 1);

console.log(antonio);
console.log(alan);
console.log(livi);

