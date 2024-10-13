import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormat',
  standalone: true  // Ensure this is marked as standalone
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string): string {
    const date = new Date(value);
    const datePipe = new DatePipe('en-GB');
    const formattedDate = datePipe.transform(date, 'EEEE, dd MMMM yyyy');
    return formattedDate || value;
  }
}
