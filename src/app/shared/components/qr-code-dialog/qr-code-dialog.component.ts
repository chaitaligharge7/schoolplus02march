import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';

export interface QrCodeDialogData {
  url: string;
  title?: string;
}

@Component({
  selector: 'app-qr-code-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  template: `
    <div class="qr-dialog">
      <h2 class="qr-title">{{ data.title || 'QR Code' }}</h2>
      <p class="qr-url">{{ data.url }}</p>
      <img [src]="qrImageUrl" alt="QR Code" class="qr-image" />
      <div class="qr-actions">
        <a [href]="qrImageUrl" download="visitor-enquiry-qr.png" class="btn btn-primary">Download QR Code</a>
        <button type="button" class="btn btn-outline" (click)="close()">Close</button>
      </div>
    </div>
  `,
  styles: [`
    .qr-dialog { padding: 1.25rem; text-align: center; }
    .qr-title { margin: 0 0 0.5rem 0; font-size: 1.25rem; }
    .qr-url { font-size: 0.75rem; color: #64748b; word-break: break-all; margin-bottom: 1rem; }
    .qr-image { display: block; margin: 0 auto 1rem; max-width: 280px; height: auto; }
    .qr-actions { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }
    .btn { padding: 0.5rem 1rem; border-radius: 0.5rem; text-decoration: none; font-size: 0.875rem; cursor: pointer; border: none; }
    .btn-primary { background: #2563eb; color: #fff; }
    .btn-outline { background: transparent; border: 1px solid #e2e8f0; color: #374151; }
  `]
})
export class QrCodeDialogComponent {
  get qrImageUrl(): string {
    const encoded = encodeURIComponent(this.data.url);
    return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encoded}`;
  }

  constructor(
    public dialogRef: MatDialogRef<QrCodeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: QrCodeDialogData
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
