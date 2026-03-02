import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FeeService } from '../../../shared/services/fee.service';
import { StudentService } from '../../../shared/services/student.service';
import { DateFormatPipe } from '../../../shared/pipes/date-format.pipe';
import { CurrencyFormatPipe } from '../../../shared/pipes/currency-format.pipe';

@Component({
  selector: 'app-fee-payment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DateFormatPipe, CurrencyFormatPipe],
  templateUrl: './fee-payment.component.html',
  styleUrls: ['./fee-payment.component.scss']
})
export class FeePaymentComponent implements OnInit {
  paymentForm: FormGroup;
  studentFee: any = null;
  student: any = null;
  isLoading = false;
  isProcessing = false;
  paymentModes = ['Cash', 'Card', 'Online', 'Cheque', 'Bank Transfer'];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private feeService: FeeService,
    private studentService: StudentService
  ) {
    this.paymentForm = this.fb.group({
      student_id: [null, Validators.required],
      student_fee_id: [null, Validators.required],
      paid_amount: [0, [Validators.required, Validators.min(0.01)]],
      payment_mode: ['Cash', Validators.required],
      payment_date: [new Date().toISOString().split('T')[0], Validators.required],
      transaction_id: [''],
      receipt_number: [''],
      remarks: ['']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['fee_id']) {
        this.loadFeeDetails(params['fee_id']);
      }
    });
  }

  loadFeeDetails(feeId: number): void {
    this.isLoading = true;
    this.feeService.getFee(feeId).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.studentFee = response.data.fee;
          this.paymentForm.patchValue({
            student_id: this.studentFee.student_id,
            student_fee_id: this.studentFee.student_fee_id,
            paid_amount: this.studentFee.fee_amount - this.studentFee.paid_amount
          });
          this.loadStudent(this.studentFee.student_id);
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading fee details:', error);
        this.isLoading = false;
      }
    });
  }

  loadStudent(studentId: number): void {
    this.studentService.getStudent(studentId).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.student = response.data.student;
        }
      }
    });
  }

  onSubmit(): void {
    if (this.paymentForm.invalid) {
      return;
    }

    this.isProcessing = true;
    const paymentData = this.paymentForm.value;

    this.feeService.processPayment(paymentData).subscribe({
      next: (response) => {
        this.isProcessing = false;
        if (response.status === 'success') {
          alert('Payment processed successfully!');
          this.router.navigate(['/app/fees/list']);
        } else {
          alert(response.message || 'Failed to process payment');
        }
      },
      error: (error) => {
        this.isProcessing = false;
        alert(error.error?.message || 'An error occurred');
      }
    });
  }

  get remainingAmount(): number {
    if (!this.studentFee) return 0;
    return this.studentFee.fee_amount - this.studentFee.paid_amount;
  }

  isOverdue(dueDate: string): boolean {
    return new Date(dueDate) < new Date();
  }
}

