"use strict"; 
/*
Gioco dei dadi :
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/


const firstRandomNum = Math.floor(Math.random() *  (6 - 1 + 1) ) + 1;

//img/dice-append firstRandomNu - + png ( from 1 to 6)
const firstDiceImg = './img/dice' + firstRandomNum + '.png';
document.querySelectorAll('img')[0].setAttribute('src', firstDiceImg);