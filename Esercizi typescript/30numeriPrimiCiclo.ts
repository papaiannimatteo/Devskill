// DIFFICILE //
// Scrivere un programma restituisca i primi 30 numeri primi.
// Un numero si dice primo se e` divisibile SOLO e soltanto per se stesso e per 1  
  

let arrayPrimi:number[]=[];
let input:number=prompt("Inserisci un numero: ")*1;

    while(arrayPrimi.length<31) {
        input=prompt("Inserisci un altro numero: ")*1;
        if(input>=2 && input%2==1 && input%input==0 && input%1==0){

            arrayPrimi.length = arrayPrimi.push(input);

        } 
    }
    console.log(arrayPrimi);
  