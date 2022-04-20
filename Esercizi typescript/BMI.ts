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


if (bmi<16.5) {
    console.log("La tua costituzione è: Sottopeso severo");
}
else if (bmi>=16.5 && bmi<=18.4) {
    console.log("La tua costituzione è: Sottopeso");
}
else if (bmi>=18.5 && bmi<=24.9) {
    console.log("La tua costituzione è: Normale");
}
else if (bmi>=25 && bmi<=30) {
    console.log("La tua costituzione è: Sovrappeso");
}
else if (bmi>=30.1 && bmi<=34.9) {
    console.log("La tua costituzione è: Obesità di primo grado");
}
else if (bmi>=35 && bmi<=40) {
    console.log("La tua costituzione è: Obesità di secondo grado");
}
else if (bmi>40) {
    console.log("La tua costituzione è: GSKIANTO");
}


let domanda:string=prompt("Vuoi una misurazione più precisa? Rispondi con 'si' o 'no'");
if (domanda=="no") {
    console.log("Arrivederci");
}
else if (domanda=="si") {
    let polso:number=prompt("Inserisci circonferenza del polso(cm)");
    let sesso:string=prompt("Inserisci il tuo sesso con 'm' o 'f'");
    if (sesso=="m") {
        if (polso<17) {
            console.log("La tua costituzione è: Esile");
        }
        else if (polso>=17 && polso<=18) {
            console.log("La tua costituzione è: Normale");
        }
        else if (polso>18) {
            console.log("La tua costituzione è: Robusta");
        }
    }
    else if (sesso=="f") {
        if (polso<15) {
            console.log("La tua costituzione è: Esile");
        }
        else if (polso>=15 && polso<=16) {
            console.log("La tua costituzione è: Normale");
        }
        else if (polso>16) {
            console.log("La tua costituzione è: Robusta");
        }
    }
}