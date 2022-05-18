/*Si scriva un programma che, letta da input una lista di interi di 10 elementi, ed un numero 
intero X,  verifichi  stampi  la  stringa  “OK”  se  NESSUN  elemento  della lista  è  divisibile  per  X,  
e  la  stringa  “NO” altrimenti. 
ESEMPIO:    se  l’array  contenesse  gli  elementi    2,  7,  14,  10,  23,  5,  8,  11,  35,  77  e  X  fosse  3,  il 
programma stampare “OK”: infatti nessuno dei numeri contenuti nella lista è divisibile per 3. 
ATTENZIONE:  Si  noti  che  affinché  il  programma  possa  essere  gestito  dal  valutatore  automatico,  deve 
essere inviata in stampa solo ed esclusivamente UNA delle due stringhe (OK/NO) senza andare a capo 
e senza aggiungere spaziature, né altre stampe.
*/

function riempiArray(): number {
    return +prompt("Inserisci i 10 numeri da analizzare. Poi digita -1 per terminare. ");
}

let array: number[] = [];
let input = riempiArray();

while (array.length < 10) {
    array.push(input);
    input = riempiArray();
}

let divisore: number = prompt("Inserisci il divisore: ");
let controlV:number = 0;

for(let i=0; i<array.length; i++){
    if(array[i]%divisore===0){
        controlV++;
    }
}

if(controlV===0){
    console.log("OK");
}else{
    console.log("NO");
}