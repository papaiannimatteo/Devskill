import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elementi-consecutivi',
  templateUrl: './elementi-consecutivi.page.html',
  styleUrls: ['./elementi-consecutivi.page.scss'],
})
export class ElementiConsecutiviPage implements OnInit {

  counter:number;
  countTemp:number;
  n:number;
  input:string;
  risultato:string;

  inviaInput(){
    let array=this.input.split(' ')

    let arrayN:number[]=[];
    for(let i=0; i<array.length; i++){
      arrayN.push(parseInt(array[i]))
    }

    if(!this.n){
      return
    }

    for (let i = 0; i < array.length; i++) {
      if (arrayN[i] <= this.n) {
          this.countTemp++;
          this.counter = this.countTemp;
      } else {
          this.countTemp = 0;
      }
  
  }
  
  if (this.counter < this.n) {
      this.risultato="NO";
  } else {
    this.risultato="OK";
  }

  }

  constructor() { }

  ngOnInit() {
  }

}
