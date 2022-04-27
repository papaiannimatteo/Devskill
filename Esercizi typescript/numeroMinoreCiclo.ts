//Scrivere un programma che prenda in input una sequenza di numeri, e quando l'utente inserisce -1 termini
//restituendo il valore piu` piccolo inserito


let numeroMinore:number=Number.MAX_SAFE_INTEGER;
let numeroSgamato:number=0;

    while(numeroSgamato!=-1) {
        let input:number=prompt("Inserisci un numero: ")*1;
        
        if(input<=numeroMinore && input!=-1) {
            numeroMinore=input;
            
        }
    
        if (input===-1) {
            numeroSgamato=input;
            
        }
        


    }
    console.log(numeroMinore);