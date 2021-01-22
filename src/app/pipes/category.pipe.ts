import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { StateService } from '../services/state.service';

@Pipe({
  name: 'category',
  pure: true,
})
export class CategoryPipe extends DatePipe implements PipeTransform {
  constructor(public state: StateService ){
    super('');
  }

  public transform(value: string): any {
    const item = this.state.data.categories.filter(item => item.type === value)
    return item[0].description;
  }
}
