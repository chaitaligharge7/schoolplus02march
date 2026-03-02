import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';

export interface ConvertEnquiryDialogData {
  studentName: string;
  counselors: { user_id: number; full_name: string; stream?: string }[];
}

export type ConvertEnquiryResult = 'admission' | { counselor_id: number } | null;

@Component({
  selector: 'app-convert-enquiry-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule],
  templateUrl: './convert-enquiry-dialog.component.html',
  styleUrls: ['./convert-enquiry-dialog.component.scss']
})
export class ConvertEnquiryDialogComponent {
  step: 'choice' | 'counsellor' = 'choice';
  selectedCounselorId: number | null = null;

  constructor(
    public dialogRef: MatDialogRef<ConvertEnquiryDialogComponent, ConvertEnquiryResult>,
    @Inject(MAT_DIALOG_DATA) public data: ConvertEnquiryDialogData
  ) {}

  convertToAdmission(): void {
    this.dialogRef.close('admission');
  }

  chooseAllotCounsellor(): void {
    this.step = 'counsellor';
    this.selectedCounselorId = this.data.counselors?.length ? this.data.counselors[0].user_id : null;
  }

  back(): void {
    this.step = 'choice';
    this.selectedCounselorId = null;
  }

  confirmAllot(): void {
    if (this.selectedCounselorId) {
      this.dialogRef.close({ counselor_id: this.selectedCounselorId });
    }
  }

  onCancel(): void {
    this.dialogRef.close(null);
  }
}
