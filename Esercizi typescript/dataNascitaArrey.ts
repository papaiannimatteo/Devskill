/*
Si scriva un programma che preso in input l'anno di nascita, stampi a schermo l'eta`:
Input : 1992
Output : "Hai 30 anni";
Input : 2010
Otuput: "Hai 12 anni";
*/

//Soluzione

let anno_nascita:number=prompt("Inserisci anno di nascita")*1;

let array:number[]=[2022,anno_nascita];
let risultato:number[]=[array[0] - array[1]];

    if (array[1] < array[0]) {
        console.log ("Hai "+risultato[0]+ " anni");
    }
  
