// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50


// creo variabile con array vuoto per salvare i numeri random generati dal pc
var numeriPc = [];
var numeroPc;

//ciclo di while per creare 16 numeri random con condizione che non possono essere uguali tra di loro

while (numeriPc.length < 16){
    numeroPc = numeroRandom(1, 100);
    if (numeriPc.includes(numeroPc) == false){
        numeriPc.push(numeroPc);
    }
}

console.log(numeriPc);


// ciclo di while per chiedere all'utente i numeri col controllo che non siano uguali
var numeriUtente = [];
var numeroUtente;



while (numeriUtente.length < 5){
    numeroUtente = parseInt(prompt('Inserisci un numero'));
    if ((numeriUtente.includes(numeroUtente) == false) && (checkBomb(numeriPc, numeroUtente) == false)){
        numeriUtente.push(numeroUtente);
    } else {
        alert('hai perso!!!');
    }
}


console.log(check);

console.log(numeriUtente);
//controllo se è nei 16 funzione
















// funzioni

//per generare numero random minimo e massimo inclusi
function numeroRandom(min, max){
    return Math.floor(Math.random()*(max - min + 1)) + min;
}

//funzione per controllare se il numero utente è nei 16 del pc
function checkBomb(array, elemento){
    var messaggio = false;
    var i = 0;
    while (i < array.length && messaggio == false) {
        if(elemento == array[i]){
        messaggio == true;
        }
        i++;
    }
    return messaggio;
}
