/*
Mail:
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

//creo la mailing list
const mailingList = ['pincopallino@gmail.com', 'pippo@yahoo.it', 'alex89@libero.it', 'mario.rossi@outlook.com'];
//prendo la mail che scriverà l'utente e il bottone che schiaccerà
let userEmailInput = document.getElementById('userMail');
let btn = document.querySelector('button');

//creo la funzione che attiverà il controllo delle mail al click del btn
const checkMail = function(){
    let found = false;
    let userEmai = userEmailInput.value;
    for(let i = 0; i < mailingList.length; i++){
        // console.log(mailingList[i]);
        if(userEmai == mailingList[i]){
            found = true;
        }
    }
    //creo il messaggio che avviserà l'utente se è presente o meno nella mailing list
    if(found){
        alert('You are on the mailing list !');
    }else{
        alert('Not Found')
    }
    userEmailInput.value = '';
}

//faccio attivare la funzione al click dell'utente sul bottone
btn.addEventListener('click',checkMail)
