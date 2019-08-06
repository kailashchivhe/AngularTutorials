import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }
  checkPrime(no:number):boolean{
    var flag:boolean = true;
    for(var i=2;i<no;i++){
      if((no%i) == 0){
        flag = false;
        break;
      }
    }
    return flag;
  }
}
