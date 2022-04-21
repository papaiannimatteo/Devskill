/*
Si scriva un programma che preso in input l'anno di nascita, stampi a schermo l'eta`:
Input : 1992
Output : "Hai 30 anni";
Input : 2010
Otuput: "Hai 12 anni";
*/

//Soluzione:

function dataDiNascita (anno:number):string {
    if (anno_nascita<anno_corrente) {
        return "Hai "+risultato+ " anni";
    }
}

let anno_corrente:number=2022;
let anno_nascita:number=prompt("Inserisci anno di nascita");
let risultato=(anno_corrente - anno_nascita);
dataDiNascita(risultato);
console.log(dataDiNascita(risultato));