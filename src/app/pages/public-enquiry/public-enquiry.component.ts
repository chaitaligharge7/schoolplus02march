import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { EnquiryService } from '../../shared/services/enquiry.service';

@Component({
  selector: 'app-public-enquiry',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './public-enquiry.component.html',
  styleUrls: ['./public-enquiry.component.scss']
})
export class PublicEnquiryComponent implements OnInit {
  form: FormGroup;
  classes: any[] = [];
  isSaving = false;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private enquiryService: EnquiryService
  ) {
    this.form = this.fb.group({
      student_name: ['', Validators.required],
      parent_name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', Validators.email],
      address: [''],
      interested_class_id: [null],
      enquiry_source: ['online', Validators.required],
      remarks: ['']
    });
  }

  ngOnInit(): void {
    this.http.get<any>(`${environment.apiUrl}/enquiries/public-classes.php`).subscribe({
      next: (res) => {
        if (res?.status === 'success' && res?.data?.classes) {
          this.classes = res.data.classes;
        }
      }
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      Object.keys(this.form.controls).forEach(k => this.form.get(k)?.markAsTouched());
      return;
    }
    this.isSaving = true;
    const data = {
      ...this.form.value,
      enquiry_date: new Date().toISOString().split('T')[0]
    };
    this.enquiryService.createPublicEnquiry(data).subscribe({
      next: (res) => {
        this.isSaving = false;
        if (res?.status === 'success') {
          this.submitted = true;
        } else {
          alert(res?.message || 'Something went wrong. Please try again.');
        }
      },
      error: () => {
        this.isSaving = false;
        alert('Unable to submit. Please try again or contact the school.');
      }
    });
  }
}
