/*Input
The first line of input is an integer T (T < 30) that indicates the number of test cases. Each case starts
with an integer N (0 < N < 50) that determines the number of walls. The next line gives the height
of the N walls from left to right. Each height is a positive integer not exceeding 10.

Output
For each case, output the case number followed by 2 integers, total high jumps and total low jumps,
respectively. Look at the sample for exact format.
*/


function riempiAltezze(): number {
    return +prompt("Inserisci le altezze che avranno le " + numeroMuri + " mura da sinistra a destra. \n Digita -1 per terminare (altezza max = 10): ");
}

let numeroMuri: number = +prompt("Mario deve arrivare al castello! Scegli quanti muri dovrà saltare Mario: ");

let altezzeMuri: number[] = [];
let input: number = riempiAltezze();


if (input <= 10) {
    while (altezzeMuri.length < numeroMuri) {
        altezzeMuri.push(input);
        input = riempiAltezze();

    }

} else {
    alert("L'altezza inserita è troppo alta! Riavvia il programma.");
}

let high: number = 0;
let low: number = 0;
console.log(altezzeMuri);
for (let i = 0; i < altezzeMuri.length - 1; i++) {

    if (altezzeMuri[i] > altezzeMuri[i + 1]) {
        low++;

    } else {
        high++;

    }


}

console.log("Il risultato dei " + numeroMuri + " muri è " + high + " salti alti e " + low + " salti bassi.");
