'use strict';

console.log('Ciao mondo');

let input = [1, 2, 3, 4, 5];


function stampa(input) {
    let result = ""; 

    const inputLength = input.length; 

    
    for (let i = 0; i < inputLength; i++) {
        result += input[i]; 

        if (i < inputLength - 1) {
            result += ', '; 
        }
    }

    return result;
}


console.log(`Il risultato è STRING ${stampa(input)}`);
