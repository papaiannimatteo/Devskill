/*
Si scriva un programma che preso in input l'anno di nascita, stampi a schermo l'eta`:
Input : 1992
Output : "Hai 30 anni";
Input : 2010
Otuput: "Hai 12 anni";
*/

//Soluzione:

let anno_corrente:number=2022;
let anno_nascita:number=prompt("Inserisci anno di nascita")*1;
let risultato=(anno_corrente - anno_nascita);
let array:number[]=[anno_corrente,anno_nascita,risultato];

    if (array[1] < array[0]) {
        console.log ("Hai "+array[2]+ " anni");
    }