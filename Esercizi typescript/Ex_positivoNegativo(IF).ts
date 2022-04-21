/*
Si scriva un programma che preso in input un valore numerico, verifichi se questo sia POSITIVO o NEGATVO e stampi
a schermo :
Input: 2
Output: "Il numero e` positivo "
Input: -10
Output: "Il numero e` negativo "
*/


//Soluzione:
function positivoNegativo (numero1:number):string {
    if (numero1>=0) {
    console.log('Il numero è positivo')
}
    else if (numero1<0) {
        console.log("Il numero è negativo")
    }

}
let numero1:number =prompt ("Inserisci un numero")*1;
positivoNegativo(numero1);