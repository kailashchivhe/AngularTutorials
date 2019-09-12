import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const temp = value + args[0];
    return temp;
  }

}
