import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult'
})
export class MyMultPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const temp = value * args[0];
    return temp;
  }

}
