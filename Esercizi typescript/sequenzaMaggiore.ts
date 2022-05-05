/*
Prendere in input una sequenza di numeri terminata da -1 e stampare a schermo la lunghezza della sequenza ripetuta piu` lunga.
Una sequenza e` la successione di numeri uguali e consecutiva senza interruzioni di almeno lunghezza 2
Se esistono piu` sequenze con lo stesso valore, stampare la prima di esse
Es.
Input: 0 1 3 4 5 5 5 8 4 3 2 1 1 1 0 9 3 2 1 9 9 9 9 9 -1
Output : 9 con lunghezza 5
Input: 0 1 3 4 5 8 4 3 2 1 0 9 3 2 1 9 -1
Output : Non esiste una sequenza valida
Input: 0 1 3 4 5 5 5 5 5 8 4 3 2 1 1 1 0 9 3 2 1 9 9 9 9 9 -1
Output : 5 con lunghezza 5
 */

function leggiArray():number {
    return +prompt("Inserisci la prima sequenza di numeri. \n Inserisci -1 per terminare")*1;
}

let array:number[]=[];
let input=leggiArray();

while(input !=-1){
    array.push(input);
    input=leggiArray();
}

let maxSeq=1;
let n=0;
let counter=0;

for(let i=0; i<array.length; i++){
    counter=1;
    for(let j=i+1; j<array.length; j++){
        if(array[i]===array[j]){
            counter++
        }
        if(counter>maxSeq){
            maxSeq=counter;
            n=array[i];
        }
    }
    
}
if(maxSeq===1){
    console.log("Non esiste una sequenza valida");
}else {
    console.log(n+" con lunghezza "+maxSeq);
}

