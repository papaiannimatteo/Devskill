/*Scrivere un programma che, letti da input un intero positivo N ed una sequenza di interi positivi 
terminata dal tappo -1, verifichi se esistono almeno N elementi consecutivi della sequenza minori 
o uguali ad N. 
Il programma dovrà stampare la stringa OK se l'intero ricevuto soddisfa la condizione richiesta, NO 
altrimenti. 
ATTENZIONE: Si noti che affinché il programma possa essere gestito dal valutatore automatico, 
deve essere inviata in stampa esclusivamente una tra le stringhe OK/NO, senza andare a capo e 
senza spaziature o altre stampe. 
ESEMPI: 
 Se N fosse pari a 5 e la sequenza fosse 1 3 5 3 1 2 9 -1 il programma dovrebbe stampare OK
 Se N fosse pari a 3 e la sequenza fosse 1 0 5 2 2 3 -1 il programma dovrebbe stampare OK
 Se N fosse pari a 4 e la sequenza fosse 1 0 4 8 6 3 -1 il programma dovrebbe stampare NO
 Se N fosse pari a 2 e la sequenza fosse 2 2 3 3 -1 il programma dovrebbe stampare OK
 Se N fosse pari a 8 e la sequenza fosse 4 2 6 7 8 9 -1 il programma dovrebbe stampare NO
 Se N fosse pari a 1 e la sequenza fosse 0 -1 il programma dovrebbe stampare OK
 Se N fosse pari a 1 e la sequenza fosse -1 il programma dovrebbe stampare NO
*/


function riempiArray(): number {
    return +prompt("Inserisci i numeri della lista da esaminare. Digita -1 per terminare. ");
}


let N: number = +prompt("Inserisci il numero da esaminare: ");

let array: number[] = [];
let input = riempiArray();

while (input != -1) {
    array.push(input);
    input = riempiArray();
}

let counter: number = 0;
let countTemp: number = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] <= N) {
        countTemp++;
        counter = countTemp;
    } else {
        countTemp = 0;
    }

}

if (counter < N) {
    console.log("NO");
} else {
    console.log("OK");
}
