// Creare un software che calcoli il BMI di una persona dato : altezza ( piedi ) , peso ( libre )
// BMI = peso in kg / (statura in metri * statura in metri)
// E stampi in output la corrispettiva costituzione in base alla tabella :
//Sottopeso severo  < 16,5
//Sottopeso da 16,5 a 18,4
//Normale   da 18,5 a 24,9
//Sovrappeso    da 25 a 30
//Obesità primo grado   da 30,1 a 34,9
//Obesità secondo grado da 35 a 40
//gskianto  > 40
// Dopo aver mostrato a schermo il risulato , verra` chiesto all'utente se vuole effettuare una misurazione
// piu` precisa. Se la risposta e` affermativa,
// viene chiesto un parametro aggiuntivo : circonferenza polso ( cm ) e il sesso . Venga stampata la
// rispettiva costituzione seguendo la seguente tabella :
// Donna    Costituzione    Uomo
// < 15     Esile           < 17
// 15-16    Normale         17-18
// > 16     Robusta         > 18
//Input : 5.4 170
//Output: Sovrappeso
//Output: Vuoi effettuare una misurazione precisa ?
//Input: si
//Output : Inserisci la circonferenza del polso e il tuo sesso
//Input: 17 M
//Output: La tua costituzione e` : NORMALE
//Input : 5.4 170
//Output: Sovrappeso
//Output: Vuoi effettuare una misurazione precisa ?
//Input: No
//Output : Arrivederci

//Soluzione:


let peso:number=prompt("Inserisci il tuo peso")*1;
let altezza:number=prompt("Inserisci la tua altezza")*1;
const bmi:number=(peso*0.45)/((altezza*0.3)*2);
let array:number[]=[peso,altezza,bmi];


if (array[2]<16.5) {
    console.log("La tua costituzione è: Sottopeso severo \n Il tuo Bmi è di: "+Math.round(array[2]);
}
else if (array[2]>=16.5 && array[2]<=18.4) {
    console.log("La tua costituzione è: Sottopeso \n Il tuo Bmi è di: "+Math.round(array[2]);
}
else if (array[2]>=18.5 && array[2]<=24.9) {
    console.log("La tua costituzione è: Normale \n Il tuo Bmi è di: "+Math.round(array[2]);
}
else if (array[2]>=25 && array[2]<=30) {
    console.log("La tua costituzione è: Sovrappeso \n Il tuo Bmi è di: "+Math.round(array[2]);
}
else if (array[2]>=30.1 && array[2]<=34.9) {
    console.log("La tua costituzione è: Obesità di primo grado \n Il tuo Bmi è di: "+Math.round(array[2]);
}
else if (array[2]>=35 && array[2]<=40) {
    console.log("La tua costituzione è: Obesità di secondo grado \n Il tuo Bmi è di: "+Math.round(array[2]);
}
else if (array[2]>40) {
    console.log("La tua costituzione è: Gskianto \n Il tuo Bmi è di: "+Math.round(array[2]);
}
}


let domanda:string=prompt("Vuoi una misurazione più precisa? Rispondi con 'si' o 'no'");
let array2:string[]=[domanda];
if (array2[0]=="no") {
    console.log("Arrivederci");
}
else if (array2[0]=="si") {

    let polso:number=prompt("Inserisci circonferenza del polso(cm)");
    let sesso:string=prompt("Inserisci il tuo sesso con 'm' o 'f'");
    let array3:any[]=[polso,sesso];
    if (array3[1]=="m") {
        if (array3[0]<17) {
            console.log("La tua costituzione è: Esile");
        }
        else if (array3[0]>=17 && array3[0]<=18) {
            console.log("La tua costituzione è: Normale");
        }
        else if (array3[0]>18) {
            console.log("La tua costituzione è: Robusta");
        }
    }
    else if (array3[1]=="f") {
        if (array3[0]<15) {
            console.log("La tua costituzione è: Esile");
        }
        else if (array3[0]>=15 && array3[0]<=16) {
            console.log("La tua costituzione è: Normale");
        }
        else if (array3[0]>16) {
            console.log("La tua costituzione è: Robusta");
        }
    }
}