/*Scrivere un programma che, letti da input in quest’ordine un intero X, un intero N e una sequenza di N 
interi, stampi tutti i numeri pari strettamente minori di X presenti all’interno della sequenza.  
ATTENZIONE:  Si  noti  che  affinché  il  programma  possa  essere  gestito  dal  valutatore  automatico, 
devono essere inviati in stampa solo ed esclusivamente i numeri che rispettano la condizione richiesta, 
senza  andare  a  capo  e  senza aggiungere spazi  o  altre  stampe  (neppure  quelle  che  possono 
accompagnare l'istruzione input per comunicare a chi esegue il programma che dati inserire).  
ESEMPI: 
- Se X fosse 10, N fosse 7 e la sequenza di numeri fosse 12 32 15 2 4 9 18,  il programma dovrebbe  
stampare 24 poiché 2 e 4 sono gli unici numeri pari nella sequenza minori di 10. Si noti come 
non siano presenti spazi a separare i numeri stampati.
- Se X fosse 0, N fosse 8 e la sequenza di numeri fosse 14 12 32 15 2 4 9 18, il programma non dovrebbe 
stampare nulla poichè tutti i numeri pari nella sequenza sono maggiori di 0. 
- Se X fosse 30, N fosse 4 e la sequenza di numeri fosse 15 1 15 3,  il programma non dovrebbe 
stampare nulla poichè non ci sono numeri pari nella sequenza. */


function riempiArray(): number {
    return +prompt("Inserisci i numeri che comporranno l'array: ");
}

let X: number = +prompt("Inserisci il numero chiave: ");

let N: number = +prompt("Inserisci la lunghezza dell'array: ");

let array: number[] = [];

let arrayStampa: number[] = [];

let input = riempiArray();

while (array.length < N) {
    array.push(input);
    input = riempiArray();
}


for (let i = 0; i < array.length; i++) {
    if (array[i] < X) {
        if (array[i] % 2 == 0){
            arrayStampa.push(array[i])
        }
    }
}

console.log(arrayStampa.join(''));
