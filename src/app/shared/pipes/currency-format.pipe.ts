import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat',
  standalone: true
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: number | string | null | undefined, currency: string = '₹', decimals: number = 2): string {
    if (value === null || value === undefined || value === '') {
      return currency + '0.00';
    }
    
    const numValue = typeof value === 'string' ? parseFloat(value) : value;
    
    if (isNaN(numValue)) {
      return currency + '0.00';
    }
    
    return currency + numValue.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
