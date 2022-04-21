
 /*
Si scriva un programma che presi in input 3 valori, verifichi e stampi a schermo quali tra questi e` il piu` grande
a schermo :
E.S
Input: 3 54 12
Output: Il valore piu` grande e` : 54
*/


//Soluzione:

function numeroMaggiore(numero1:number,numero2:number,numero3:number):number {

    if (numero1 >= numero2) {
        if (numero1 >= numero3) {
            return 'Il valore più grande è: '+numero1;
        }
        
            return "Il valore più grande è: "+numero3;

    }
    else if (numero2 >= numero1) {
        if (numero2 >= numero3) {
            return "Il valore più grande è: "+numero2;
        }
        
            return"Il valore più grande è: "+numero3;
        
}
}
let numero1:number=prompt("Inserisci il primo numero")*1;
let numero2:number=prompt("Inserisci il secondo numero")*1;
let numero3:number=prompt("Inserisci il terzo numero")*1;

numeroMaggiore(numero1,numero2,numero3);
console.log(numeroMaggiore(numero1,numero2,numero3));