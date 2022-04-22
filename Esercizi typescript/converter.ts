// Creare un convertitore di misurazioni, deve permettere la conversione di una misurazione da un unita` di misura ad un altra.
// Il programma dovra` chiedere all'utente quale tipo di misurazione vorrebbe convertire.
// le unita` di misura supportate sono riportate in tabella:
// Gradi    (1)    | centigradi (C) | fahrenheit (F)  |
// Distanza (2)    | kilometri (KM) | miglia (MI)     |
// L'utente puo` specificare il tipo di misurazione che vuole convertire usando 1 per gradi e 2 per distanza e successivamente
// fornire i seguenti valori : 
//      il valore misurato
//      l'unita` di misura originale
// Il programma dovra` restituire in output la conversione corretta .

// Esempio :
// Output: "Che tipo di misurazione vuoi convertire ? "
// Input: 1 
// Output: "Inserisci i seguenti valori:"
// Input: "Misurazione originale" 32
// Input: "Unita` di misura originale" C
// Output: "Il valore convertito e`: 89,6 F"

// Esempio :
// Output: "Che tipo di misurazione vuoi convertire ? "
// Input: 2
// Output: "Inserisci i seguenti valori:"
// Input: "Misurazione originale" 100
// Input: "Unita` di misura originale" KM
// Output: "Il valore convertito e`: 62,13 MI"



//-----FUCTION---------//
function celToFir(temperatura:number):number{
  return (temperatura * (9/5)) + 32;
}
function firToCel(temperatura:number):number{
  return (temperatura -32) *(5/9) ;
}
function kmToMi(lontananza:number):number{
  return lontananza *1609;
}
function miToKm(lontananza:number):number{
  return lontananza /1609;
}
function visualizzaTemperatura1(primaScelta:number):void {
  console.log("Il valore convertito è: "+primaScelta+" C");
}
function visualizzaTemperatura2(primaScelta:number):void {
  console.log("Il valore convertito è: "+primaScelta+" F");
}
function visualizzaLontananza1(secondaScelta:number):void {
  console.log("Il valore convertito è: "+secondaScelta+" KM");
}
function visualizzaLontananza2(secondaScelta:number):void {
  console.log("Il valore convertito è: "+secondaScelta+" MI");
}



//--------CODICE----------//
let primaDomanda:string=prompt("Vuoi convertire una temperatura o una lontananza?");
if (primaDomanda=="temperatura") {
  let secondaDomanda:string=prompt("Vuoi convertire da C/F oppure da F/C ?");
  if (secondaDomanda=="C/F") {
      let temperatura:number=prompt("Inserisci la temperatura")*1;
      visualizzaTemperatura2(celToFir(temperatura));
  }
  else if (secondaDomanda=="F/C") {
      let temperatura:number=prompt("Inserisci la temperatura")*1;
      visualizzaTemperatura1(firToCel(temperatura));
  }
}else if (primaDomanda=="lontananza") {
  let secondaDomanda:string=prompt("Vuoi convertire da KM/MI o da MI/KM ?");
  if (secondaDomanda=="KM/MI")  {
      let lontananza:number=prompt("Inserisci la lontananza")*1;
      visualizzaLontananza2(kmToMi(lontananza));
  }
  else if(secondaDomanda=="MI/KM") {
       let lontananza:number=prompt("Inserisci la lontananza")*1;
       visualizzaLontananza1(miToKm(lontananza));
  }
}
