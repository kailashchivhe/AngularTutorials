import { Component, OnInit } from '@angular/core';
import { NumberService } from 'src_ass12Q2/app/number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private _numberService:NumberService,private _stringService:StringService) { }

  ngOnInit() {
  }

  checkPrimeNumber(no:number):string{
    var flag:boolean = this._numberService.checkPrime(no);
    if(flag){
      return "It is Prime Number";
    }
    return "It is not Prime Number";
  }

  countUppercase(str:string):number{
    return this._stringService.countCapital(str);
  }
}
