"use strict"; 
/*
Gioco dei dadi :
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

const randomNumber = [];
const diceNumbers = 6;

for(let i = 1; i <= 6; i++){
    let diceNumber = Math.floor(Math.random() *  (6 - 1 + 1) ) + 1;
}