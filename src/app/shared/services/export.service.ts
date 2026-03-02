import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExportService {
  
  /**
   * Export data to CSV
   */
  exportToCSV(data: any[], filename: string = 'export.csv', columns?: string[]): void {
    if (!data || data.length === 0) {
      alert('No data to export');
      return;
    }

    // Get all columns if not specified
    const allColumns = columns || Object.keys(data[0]);
    
    // Create CSV header
    const headers = allColumns.map(col => this.escapeCSV(col));
    const csvContent = [headers.join(',')];

    // Add data rows
    data.forEach(row => {
      const values = allColumns.map(col => {
        const value = this.getNestedValue(row, col);
        return this.escapeCSV(value);
      });
      csvContent.push(values.join(','));
    });

    // Create blob and download
    const blob = new Blob([csvContent.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  /**
   * Export data to PDF (using window.print for now, can be enhanced with jsPDF)
   */
  exportToPDF(data: any[], filename: string = 'export.pdf', columns?: string[]): void {
    // Create a printable table
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Please allow popups to export PDF');
      return;
    }

    const allColumns = columns || Object.keys(data[0]);
    const headers = allColumns.map(col => `<th>${this.escapeHtml(col)}</th>`).join('');
    
    const rows = data.map(row => {
      const cells = allColumns.map(col => {
        const value = this.getNestedValue(row, col);
        return `<td>${this.escapeHtml(value)}</td>`;
      }).join('');
      return `<tr>${cells}</tr>`;
    }).join('');

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${filename}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #2563eb; color: white; font-weight: bold; }
            tr:nth-child(even) { background-color: #f9fafb; }
            @media print {
              body { margin: 0; }
              @page { margin: 1cm; }
            }
          </style>
        </head>
        <body>
          <h2>${filename.replace('.pdf', '')}</h2>
          <p>Generated on: ${new Date().toLocaleString()}</p>
          <table>
            <thead><tr>${headers}</tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 250);
  }

  /**
   * Print data table
   */
  printTable(data: any[], columns?: string[]): void {
    this.exportToPDF(data, 'print.pdf', columns);
  }

  /**
   * Copy data to clipboard
   */
  async copyToClipboard(data: any[], columns?: string[]): Promise<void> {
    if (!data || data.length === 0) {
      alert('No data to copy');
      return;
    }

    const allColumns = columns || Object.keys(data[0]);
    const headers = allColumns.map(col => this.escapeCSV(col));
    const csvContent = [headers.join('\t')];

    data.forEach(row => {
      const values = allColumns.map(col => {
        const value = this.getNestedValue(row, col);
        return String(value || '').replace(/\t/g, ' ');
      });
      csvContent.push(values.join('\t'));
    });

    try {
      await navigator.clipboard.writeText(csvContent.join('\n'));
      // Show success message (you can use a toast service here)
      console.log('Data copied to clipboard');
    } catch (err) {
      console.error('Failed to copy:', err);
      alert('Failed to copy to clipboard');
    }
  }

  private escapeCSV(value: any): string {
    if (value === null || value === undefined) return '';
    const stringValue = String(value);
    if (stringValue.includes(',') || stringValue.includes('"') || stringValue.includes('\n')) {
      return `"${stringValue.replace(/"/g, '""')}"`;
    }
    return stringValue;
  }

  private escapeHtml(value: any): string {
    if (value === null || value === undefined) return '';
    const div = document.createElement('div');
    div.textContent = String(value);
    return div.innerHTML;
  }

  private getNestedValue(obj: any, path: string): any {
    return path.split('.').reduce((current, prop) => current?.[prop], obj) ?? '';
  }
}

