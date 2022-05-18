import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ok-no',
  templateUrl: './ok-no.page.html',
  styleUrls: ['./ok-no.page.scss'],
})
export class OkNoPage implements OnInit {
  divisore: number;
  counter: number;
  input: string;
  risultato: string;

  inviaInput() {
    let array = this.input.split(' ');

    let arrayN: number[] = [];

    for (let i = 0; i < array.length; i++) {
      arrayN.push(parseInt(array[i]));
    }

    if (!this.divisore) {
      return;
    }

    for (let i = 0; i < arrayN.length; i++) {
      if (arrayN[i] % this.divisore === 0) {
        this.counter++;
      }
    }

    if (this.counter === 0) {
      this.risultato = 'OK';
    } else {
      this.risultato = 'NO';
    }

    console.log(array);
  }

  constructor() {}

  ngOnInit() {}
}
