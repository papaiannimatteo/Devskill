/*
Scrivere un programma che popoli due array A , B di dimensione N,M arbitraria ( min 5 , Max 10 ) i cui valori sono presi in input.
Successivamente creare un terzo array C di dimensione N+M dove nelle posizioni da 0 a N inserite i valori A e nelle posizioni da N+1
a M inserite i valori di B al contrario
Considerare 0 come pari
Input: 5
// popolare il vettore
A = [ 1, 3, 4,  5, 6];
B = [ 7, 8, 9, 10,11];
Output: C = [ 1, 3, 4 ,5, 6, 11,1 0, 9, 8, 7];
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

let n:number=5;
let m:number=5;

while(a.length<n){
    a.push(input);
    input=riempiArray();
    
}
while( b.length<m){
    b.push(input);
    input=riempiArray();
}


let c:number[]=[];
let r:number=n+m;
let v:number=1;

while(c.length != r){
    for(let i=0; i<n; i++){
        c.push(a[i]);
    }
    for(let j=0; j<m; j++){
        c.push(b[m-v]);
        v++
    }

}

stampaRisultato();