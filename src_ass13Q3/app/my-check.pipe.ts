import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCheck'
})
export class MyCheckPipe implements PipeTransform {

  transform(value: number, Params: string): string {
    let temp = '';
    if ( Params === 'Prime' )
    {
      temp = 'Prime Number';
      for ( var i = 2 ; i < value ; i++ ){
        if ( value % i === 0 )
        {
          temp = 'Not A Prime Number';
          break;
        }
      }
    }
    if ( Params === 'Perfect' )
    {
      temp = 'Not A Perfect Number';
      var sum = 0;
      for ( var i = 1 ; i < value ; i++ ){
        if ( value % i === 0 )
        {
          sum += i;
        }
      }
      if(sum == value){
        temp = 'Perfect Number';
      }
    }
    if ( Params === 'Even' )
    {
      temp = 'It is not even number';
      if ( value % 2 === 0 ){
        temp = 'It is even number';
      }
    }
    if ( Params === 'Odd' )
    {
      temp = 'It is not odd number';
      if ( value % 2 !== 0 ){
        temp = 'It is odd number';
      }
    }
    return temp;
  }
}
