/*
Si scriva un programma che preso in input un valore numerico, verifichi se questo sia POSITIVO o NEGATVO e stampi
a schermo :
Input: 2
Output: "Il numero e` positivo "
Input: -10
Output: "Il numero e` negativo "
*/


//Soluzione:
let numero1:number =prompt ("Inserisci un numero")*1;
let array:number[]=[numero1];
  if (array[0]>=0) {
    console.log('Il numero '+array[0]+' è positivo');
}else {
    console.log('Il numero '+array[0]+' è negativo');
}