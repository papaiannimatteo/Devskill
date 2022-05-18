/*Scrivere un programma che, letto da input un intero positivo N stampi il valore N-Ninv, dove Ninv è l’intero 
che si ottiene da N invertendo le sue cifre. 
Esempi 
Per N=12345, Ninv=54321 e il programma dovrà stampare -41976 (che è il risultato della sottrazione 12345-
54321. 
Per N=327, Ninv=723 e il programma dovrà stampare 396 (che è il risultato della sottrazione 327-723). 
Per N=0, Ninv=0 e il programma dovrà stampare 0. 
Per N =111111, Ninv=111111 e il programma dovrà stampare 0. 
Attenzione, è necessario inviare in stampa solo il risultato dell’operazione, senza andare a capo, senza spaziature, 
o stampe di altro genere.*/

let N: number = +prompt("Inserisci un numero: ");
let Ninv: number = N.toString().split('').reverse().join('') * 1;
let risultato: number = N - Ninv;

console.log(risultato);