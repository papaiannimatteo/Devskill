
//Scrivere un programma che calcoli il massimo in un vettore di dimensione 10 ( valori scelti a piacimento)
//E.S 
// let A:number = [1,5,20,15,500,230];
// Output : 500


//Soluzione:

let array:number[]=[45,22,9,4,10,88,12,3,54,26];

let numeroMassimo:number=array[0];

for (let i=1; i < array.length; i++){

    if( array[i] > numeroMassimo){
        numeroMassimo= array[i];
    }

}

console.log(numeroMassimo);
