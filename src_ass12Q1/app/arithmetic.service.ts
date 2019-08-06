import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }

  addition(no1:number,no2:number):number{
    return (no1+no2)
  }

  subtraction(no1:number,no2:number):number{
    return (no1-no2)
  }
}
