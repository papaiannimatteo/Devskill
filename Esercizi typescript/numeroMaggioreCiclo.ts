//Scrivere un programma che prenda in input una sequenza di numeri, e quando l'utente inserisce -1 termini
//restituendo il valore piu` grande inserito


let numeroMaggiore:number=0;
let numeroSgamato:number=0;

    while( numeroSgamato!=-1) {
        let input:number=prompt("Inserisci un numero: ")*1;
        if(input>=numeroMaggiore) {
            numeroMaggiore=input;
            
        }
    
        if (input===-1) {
            numeroSgamato=input;
            
        }
        


    }
    console.log(numeroMaggiore);