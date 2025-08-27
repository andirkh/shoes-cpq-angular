import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jaCurrency'
})
export class JaCurrencyPipe implements PipeTransform {

  transform(value: number): string {
    return `¥${value.toLocaleString('en-US')}`;
  }

}
