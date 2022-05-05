 /*
Scrivere un programma che popoli due array A , B di dimensione N identica ed arbitraria ( min 5 , Max 10 ) i cui valori sono presi in input.
Successivamente creare un terzo array C di dimensione N dove nelle posizioni pari verranno inseriti i valori dell'array A e in quelle dispari
i valori dell'array B
Considerare 0 come pari
Input: 5
// popolare il vettore
A = [ 1, 3, 4,  5, 6];
B = [ 7, 8, 9, 10,11];
Output: C = [ 1, 8, 4 ,10 ,6];
 */


function riempiArray():number {
    return +prompt("Riempi il primo Array")*1;
}

function stampaRisultato():void {
    console.log(a);
    console.log(b);
    console.log(c);
}

let a:number[]=[];
let b:number[]=[];
let input=riempiArray();

while(a.length<6 && b.length<6){
    a.push(input);
    input=riempiArray();
    b.push(input);
    input=riempiArray();
}
let c:number[]=[];
for(let i=0; i<a.length; i++){
    if(i%2==0){
        c.push(a[i]);
    }else {
        c.push(b[i]);
    }
}

stampaRisultato();