import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  ngOnInit() {
  }
  constructor(private _arithmeticService:ArithmeticService){}

  public add(no1:number,no2:number):number{
    return this._arithmeticService.addition(no1,no2)
  }

  public sub(no1:number,no2:number):number{
    return this._arithmeticService.subtraction(no1,no2)
  }
}
