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

function bisestile(number1:number):string {

    if (number1%400==0 || number1%4==0 && number1%100!=0) {
    return "L'anno è bisestile";
    }
    
   return "L'anno non è bisestile";
}

let number1:number =prompt("Inserisci l'anno");
bisestile(number1);
console.log(bisestile(number1));