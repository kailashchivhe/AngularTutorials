import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor(private _numberService:NumberService) { }

  ngOnInit() {
  }

  checkPrimeNumber(no:number):string{
    var flag:boolean = this._numberService.checkPrime(no);
    if(flag){
      return "It is Prime Number";
    }
    return "It is not Prime Number";
  }
}
