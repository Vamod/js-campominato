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
//creare array senza ripetizioni
var bombe = [];
var massimo = 100;
//BONUS
// controllo su variabile scelta
do {
  var scelta = parseInt(prompt('Inserisci difficolta 0,1 o 2'));
} while (scelta > 2 || scelta < 0);


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

//1 inserire i numeri bombe
while(bombe.length < 16){
    var numero = numeroRandom(1, massimo);
    if(!ricerca(bombe, numero)){ // ! ha precedenza sul && e sul ||
        bombe.push(numero); //lo inserisce
    }
}

console.log(bombe);

//2 passo
var possibilita = massimo - bombe.length;
var numeri = [];
var number;
var trovato = false;

//popoliamo array utente
while(numeri.length < 3 && trovato == false){ //con trovato == true esce fuori dal ciclo
    // inserimento numero
    number = parseInt(prompt('Inserisci un numero da 1 a ' + massimo));
    //controllo dell'input
    while(number <= 0 || number > massimo){
         number = parseInt(prompt('Hai inserito un numero fuori dal range! Inserisci un numero da 1 a ' + massimo));
}

    // controllare che il numero non sia una bomba
    if(ricerca(bombe, number)){
        trovato = true;
        alert('hai perso! Con tentativi ' + numeri.length);
    } else if (ricerca(numeri, number) == false){
        numeri.push(number);
    } else{
        alert('Il numero è già presente');
    }
}

if(trovato == false){
    alert('Hai vinto');
} else {
    alert('Hai perso con punteggio ' + numeri.length);
}

//****funzioni****//
//funzione random
function numeroRandom(min, max){
    return Math.floor(Math.random()* (max - min + 1) + min);
}

//funzione trova elemento
function ricerca(arr, num){
    var i = 0;
    while (i < arr.length){
        if (num == arr[i]){
        return true;
    }
    i++;
    }
    return false;
}
