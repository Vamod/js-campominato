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


// creo variabile con array vuoto per salvare i numeri random generati dal pc edichiaro var numeroPc
var numeriPc = [];
var numeroPc;
var massimo = 100;

//BONUS
// controllo su variabile scelta
do {
  var scelta = parseInt(prompt('Decidi il livello 0, 1 o 2'));
} while (scelta > 2 || scelta < 0);

// opzioni livello
switch (scelta) {
    case 0:
        var massimo = 100;
        break;
    case 1:
        var massimo = 80;
        break;
    case 2:
        var massimo = 50;
        break;
    default:
    var massimo = 100;
}

//ciclo di while per creare 16 numeri random con condizione che non possono essere uguali tra di loro

while (numeriPc.length < 16){
    numeroPc = numeroRandom(1, massimo);
    if (numeriPc.includes(numeroPc) == false){
        numeriPc.push(numeroPc);
    }
}

console.log(numeriPc);

//parte utente
var numeriUtente = [];
var numeroUtente;
var trovato = false;
var possibilita = massimo - numeriPc.length;

// ciclo di while per chiedere all'utente i numeri e controllare
while (numeriUtente.length < possibilita && trovato == false){
    numeroUtente = parseInt(prompt('Inserisci un numero compreso tra 1 e ' + massimo));
    //controllo che il numero sia compreso tra 1 e 100 inclusi
    while(numeroUtente <= 0 || numeroUtente > massimo){
         number = parseInt(prompt('Hai inserito un numero fuori dal range! Inserisci un numero da 1 a ' + massimo));
}
//controllo tramite la funzione checkBomb se il numero scelto è presente nel array dei numeri generati dal pc
    if (checkBomb(numeriPc, numeroUtente)){
        trovato = true;
        alert('Hai perso!!! Fine partita PUNTEGGIO: ' + numeriUtente.length);
    } else if(!(checkBomb(numeriUtente, numeroUtente))){
        numeriUtente.push(numeroUtente);
    }else {
        alert('Hai inserito due numeri uguali');
    }
}

if(numeriUtente.length == possibilita){
    alert('Hai vinto!!!');
}

console.log(numeriUtente);

// funzioni

//per generare numero random minimo e massimo inclusi
function numeroRandom(min, max){
    return Math.floor(Math.random()*(max - min + 1)) + min;
}


// per vedere se il numero utente è tra i numeri del Pc
function checkBomb(lista,elemento) {
   var i=0;
   while (i < lista.length ) {
       if( elemento == lista[i]){
           return  true;
       }
       i++;
   }
   return false;
}
