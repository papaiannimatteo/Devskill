//Scrivere un programma che calcoli il massimo in un vettore di dimensione 10 (valori presi da input)
//E.S 
// Input A = [ 1 9 200 9 1 9 0 50]
// Output : 200


let array:number[]=[];
let lunghezzaArray:number=array.length;
let numeroMaggiore=0;
for(let i=lunghezzaArray; array.length<10; i++){
    
    let input:number=prompt("Inserisci un numero: ")*1;
    array.length = array.push(input);

    if(input>=numeroMaggiore){
        numeroMaggiore=input;
    }

    

}
console.log(numeroMaggiore);