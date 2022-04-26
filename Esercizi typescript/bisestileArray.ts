/*
Si scriva un programma che preso in input un anno, stampi a se questo e` bisestile o meno.
Un anno si dice bisestile SE e SOLO SE :
    E` divisibile per 400
    E` divisibile per 4 ma non per 100
Input : 1600
Output : "l'anno e` bisestile";
Input : 1601
Otuput: "L'anno non e` bisestile";
Input : 1696
Otuput: "L'anno e` bisestile";
*/

//Soluzione:

let number1:number =prompt("Inserisci l'anno")*1;
let array:number[]=[number1];
    if (array[0]%400==0 || array[0]%4==0 && array[0]%100!=0) {
        console.log("L'anno "+array[0]+" è bisestile"); 
        }else {
            console.log("L'anno "+array[0]+" non è bisestile"); 
        }
        