import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divisibile-per3',
  templateUrl: './divisibile-per3.page.html',
  styleUrls: ['./divisibile-per3.page.scss'],
})
export class DivisibilePer3Page implements OnInit {
  input: string;
  prova: number;
  risultatoN: number;
  risultatoS: string;

  calcolaDivisibile() {
    let array = this.input.split(' ');

    let arrayN: any[] = [];

    for (let i = 0; i < array.length; i++) {
      arrayN.push(parseInt(array[i]));
    }

    for (let i = 0; i < arrayN.length; i++) {
      if (arrayN[i] > 9) {
        this.risultatoS = 'ERRORE';
      }

      if (arrayN.length === 0 || arrayN[-1]) {
        this.risultatoS = 'VUOTO';
      }
    }
    
    this.prova = parseInt(arrayN.join(''));
    if (this.prova % 3 === 0) {
      this.risultatoN=this.prova;
      this.risultatoS="SI";
    } else {
      this.risultatoN=this.prova;
      this.risultatoS="NO";
    }
  }

  constructor() {}

  ngOnInit() {}
}
