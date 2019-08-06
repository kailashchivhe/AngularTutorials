import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  countCapital(str:string):number{
    var cnt = 0  
      for(var i=0;i<str.length;i++){
        if(/[A-Z]/.test(str.charAt(i))){
            cnt++;
        }
      }
    return cnt;
  }
}
