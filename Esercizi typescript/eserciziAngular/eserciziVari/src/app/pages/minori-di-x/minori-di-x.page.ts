import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minori-di-x',
  templateUrl: './minori-di-x.page.html',
  styleUrls: ['./minori-di-x.page.scss'],
})
export class MinoriDiXPage implements OnInit {
  input: string;
  x: number;
  risultato: number[]=[];

  controlloMinori() {
    let array = this.input.split(' ');

    let arrayN: number[] = [];

    let arrayStampa: number[] = [];

    for (let i = 0; i < array.length; i++) {
      arrayN.push(parseInt(array[i]));
    }

    for (let i = 0; i < array.length; i++) {
      if (arrayN[i] < this.x) {
        if (arrayN[i] % 2 == 0) {
          arrayStampa.push(arrayN[i]);
        }
      }
    }
    this.risultato=arrayStampa;
  }

  constructor() {}

  ngOnInit() {}
}
