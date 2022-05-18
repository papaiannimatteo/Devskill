import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-n-inv',
  templateUrl: './n-inv.page.html',
  styleUrls: ['./n-inv.page.scss'],
})
export class NInvPage implements OnInit {
  n:number;
  nInv:string;
  risultato:number;

  invertiNumero(){

    this.nInv= this.n.toString().split('').reverse().join('');
    this.risultato= this.n - (parseInt(this.nInv));

  }

  constructor() { }

  ngOnInit() {
  }

}
