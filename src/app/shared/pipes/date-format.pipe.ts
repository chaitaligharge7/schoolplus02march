import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
  standalone: true
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string | Date | null | undefined, format: string = 'short', defaultValue: string = ''): string {
    if (!value) return defaultValue;

    const date = typeof value === 'string' ? new Date(value) : value;

    if (isNaN(date.getTime())) return '';

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    switch (format) {
      case 'short':
        return `${day}/${month}/${year}`;
      case 'long':
        return date.toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        });
      case 'time':
        return date.toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit' 
        });
      case 'datetime':
        return `${day}/${month}/${year} ${date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`;
      default:
        return `${day}/${month}/${year}`;
    }
  }
}

