import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myReverse'
})
export class MyReversePipe implements PipeTransform {

  transform(value: string): string {
    const temp = value.split('').reverse().join('');
    return temp;
  }

}
