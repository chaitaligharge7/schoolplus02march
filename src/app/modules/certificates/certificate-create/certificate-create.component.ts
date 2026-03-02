import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CertificateService } from '../../../shared/services/certificate.service';
import { StudentService } from '../../../shared/services/student.service';

@Component({
  selector: 'app-certificate-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './certificate-create.component.html',
  styleUrls: ['./certificate-create.component.scss']
})
export class CertificateCreateComponent implements OnInit {
  certificateForm: FormGroup;
  isEditMode = false;
  certificateId: number | null = null;
  isSaving = false;
  students: any[] = [];

  constructor(
    private fb: FormBuilder,
    private certificateService: CertificateService,
    private studentService: StudentService,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.certificateForm = this.fb.group({
      student_id: [null, Validators.required],
      certificate_type: ['Transfer Certificate', Validators.required],
      certificate_number: [''],
      issue_date: [new Date().toISOString().split('T')[0], Validators.required],
      certificate_content: ['']
    });
  }

  ngOnInit(): void {
    this.loadStudents();
    
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.certificateId = parseInt(params['id']);
        this.loadCertificate();
      }
    });
  }

  loadStudents(): void {
    this.studentService.getStudents({ limit: 1000 }).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.students = response.data.students || [];
        }
      }
    });
  }

  loadCertificate(): void {
    if (!this.certificateId) return;
    
    this.certificateService.getCertificate(this.certificateId).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          const certificate = response.data.certificate;
          this.certificateForm.patchValue({
            student_id: certificate.student_id,
            certificate_type: certificate.certificate_type,
            certificate_number: certificate.certificate_number,
            issue_date: certificate.issue_date,
            certificate_content: certificate.certificate_content
          });
        }
      }
    });
  }

  onSubmit(): void {
    if (this.certificateForm.invalid) {
      return;
    }

    this.isSaving = true;
    const formData = this.certificateForm.value;

    if (this.isEditMode && this.certificateId) {
      this.certificateService.updateCertificate(this.certificateId, formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.router.navigate(['/app/certificates']);
          }
        },
        error: () => {
          this.isSaving = false;
        }
      });
    } else {
      this.certificateService.createCertificate(formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.router.navigate(['/app/certificates']);
          }
        },
        error: () => {
          this.isSaving = false;
        }
      });
    }
  }
}

