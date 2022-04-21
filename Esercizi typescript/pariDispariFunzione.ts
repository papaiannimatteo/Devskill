/*
Si scriva un programma che preso in input un valore numerico, verifichi se questo sia PARI (EVEN) o DISPARI (ODD)
a schermo :
Input: 2
Output:  "Il numero e` pari "
Input: 3
"Il numero e` dispari "
*/

//Soluzione:

function pariDispari (numero1:number):string {
    if(numero1%2==0){
            return "The number is even";
    }    
        
        return "The number is odd";
    
}
let numero1:number=prompt("Inserisci un numero");
pariDispari(numero1);
console.log(pariDispari(numero1));