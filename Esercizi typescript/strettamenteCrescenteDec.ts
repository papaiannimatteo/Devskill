/*Scrivere  un  programma  che,  letta  da  input  una  sequenza  di  interi  terminata  da  un  tappo  pari  a  0 
(ZERO), stampi SI se la sequenza ha un andamento strettamente crescente fino ad un certo punto e un 
andamento strettamente decrescente dal quel punto in poi; stampi NO altrimenti

Se la sequenza in input fosse 
-1 -1 2 1 0 
Il programma dovrebbe stampare NO. 
- Se la sequenza in input fosse 
-1 2 25 23 13 9 7 2 1 -1 0 
Il programma dovrebbe stampare SI. 

-1 2 25 2 23 13 9 7 2 1 -1 0 
Il programma dovrebbe stampare NO. */

function riempiArray(): number {
    return +prompt("Inserisci una lista di numeri");

}

 let crescente: boolean = false;
 let decrescente: boolean = false;

function crescenteDecrescente(array:number[]): boolean {
    
   
    for (let i = 0; i < array.length - 1; i++) {

        if (array[i + 1] > array[i]) {
            if (decrescente == false) {
                crescente = true;
            }else{
                return false;
            }

        } else {
            if (crescente == true) {
                decrescente = true;
            }else{
                return false;
            }

        }
        



    }return (crescente && decrescente)
}


let array: number[] = [];
let input: number = riempiArray();

while (input != 0) {
    array.push(input);
    input = riempiArray();
}


if(crescenteDecrescente(array)===true){
    console.log("SI");
}else{
    console.log("NO");

}
