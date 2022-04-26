/*
Si scriva un programma che preso in input un valore numerico, verifichi se questo sia PARI (EVEN) o DISPARI (ODD)
a schermo :
Input: 2
Output:  "Il numero e` pari "
Input: 3
"Il numero e` dispari "
*/

//Soluzione:

let numero1:number=prompt("Inserisci un numero")*1;
let pariDispari:number[]=[numero1]; 
    if(pariDispari[0]%2==0){
            console.log("The number "+pariDispari[0]+ " is even");
    }else {
        console.log("The number "+pariDispari[0]+ " is odd");

    }  