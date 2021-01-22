import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date',
  pure: true,
})
export class DateTimePipe extends DatePipe implements PipeTransform {

  public transform(value: string): any {
    if (!value) {
      return '';
    }
    const dateValue = `${new Date(value).toLocaleDateString('pt-BR', {month: '2-digit', day: '2-digit' })} às ${new Date(value).toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit'} )}`;
    return dateValue;
  }
}
