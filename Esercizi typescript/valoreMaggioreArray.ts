
 /*
Si scriva un programma che presi in input 3 valori, verifichi e stampi a schermo quali tra questi e` il piu` grande
a schermo :
E.S
Input: 3 54 12
Output: Il valore piu` grande e` : 54
*/


//Soluzione:

let numero1:number=prompt("Inserisci il primo numero")*1;
let numero2:number=prompt("Inserisci il secondo numero")*1;
let numero3:number=prompt("Inserisci il terzo numero")*1;
let array:number[]=[numero1,numero2,numero3];

 if (array[0] >= array[1]) {
        if (array[0] >= array[2]) {
            console.log('Il valore più grande è: '+array[0]);
        }else {
            console.log('Il valore più grande è: '+array[2]);
        }
        
            

    }
    else if (array[1] >= array[0]) {
        if (array[1] >= array[2]) {
            console.log('Il valore più grande è: '+array[1]);
        }else {
            console.log('Il valore più grande è: '+array[2]);
        }      
}