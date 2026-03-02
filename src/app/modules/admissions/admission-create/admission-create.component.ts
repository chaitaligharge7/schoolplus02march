import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdmissionService } from '../../../shared/services/admission.service';
import { EnquiryService } from '../../../shared/services/enquiry.service';
import { AcademicYearService } from '../../../shared/services/academic-year.service';
import { ClassService } from '../../../shared/services/class.service';
import { ToastService } from '../../../shared/services/toast.service';
import { SearchSelectComponent } from '../../../shared/components/search-select/search-select.component';

@Component({
  selector: 'app-admission-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SearchSelectComponent],
  templateUrl: './admission-create.component.html',
  styleUrls: ['./admission-create.component.scss']
})
export class AdmissionCreateComponent implements OnInit {
  admissionForm: FormGroup;
  isLoading = false;
  isSaving = false;
  academicYears: any[] = [];
  classes: any[] = [];
  enquiry: any = null;
  admissionId!: number;
  admissionData: any;

  genderOptions: { value: string; label: string }[] = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Other', label: 'Other' }
  ];

  get academicYearOptions(): { value: number | null; label: string }[] {
    const all: { value: number | null; label: string }[] = [{ value: null, label: 'Select Academic Year' }];
    const list = (this.academicYears || []).map(y => ({ value: y.academic_year_id, label: y.academic_year_name || '' }));
    return [...all, ...list];
  }

  get appliedClassOptions(): { value: number | null; label: string }[] {
    const all: { value: number | null; label: string }[] = [{ value: null, label: 'Select Class' }];
    const list = (this.classes || []).map(c => ({ value: c.class_id, label: c.class_name || '' }));
    return [...all, ...list];
  }

  activeSection = 'student';
  admissionSections = [
    { id: 'student', label: 'Student Information', icon: 'bi-person' },
    { id: 'parent', label: 'Parent Information', icon: 'bi-people' },
    { id: 'details', label: 'Admission Details', icon: 'bi-journal-bookmark' },
    { id: 'facilities', label: 'Facilities & Fee', icon: 'bi-gear' },
    { id: 'documents', label: 'Documents', icon: 'bi-folder2' }
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private admissionService: AdmissionService,
    private enquiryService: EnquiryService,
    private academicYearService: AcademicYearService,
    private classService: ClassService,
    private toastService: ToastService
  ) {
    this.admissionForm = this.fb.group({
      enquiry_id: [null],
      academic_year_id: [null, Validators.required],
      student_name: ['', Validators.required],
      date_of_birth: ['', Validators.required],
      gender: ['', Validators.required],
      parent_name: ['', Validators.required],
      parent_mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      parent_email: ['', Validators.email],
      address: [''],
      applied_class_id: [null, Validators.required],
      batch_id: [null],
      previous_school: [''],
      opt_hostel: [false],
      opt_transport: [false],
      opt_mess: [false],
      opt_stationery: [false],
      opt_sports: [false],
      fee_mode: ['full'],
      remarks: ['']
    });
  }

  selectSection(id: string): void {
    this.activeSection = id;
  }

  getActiveSectionLabel(): string {
    return this.admissionSections.find(s => s.id === this.activeSection)?.label || 'Section';
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['enquiry_id']) {
        this.loadEnquiry(+params['enquiry_id']);
      }
    });
    
    this.loadAcademicYears();
    this.loadClasses();
  }

  loadAcademicYears(): void {
    this.academicYearService.getCurrentAcademicYearId().subscribe({
      next: (id) => {
        if (id != null) {
          this.admissionForm.patchValue({ academic_year_id: id });
        }
      }
    });
  }

  loadClasses(): void {
    this.classService.getClasses().subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.classes = response.data.classes || [];
        }
      }
    });
  }

  // loadEnquiry(enquiryId: number): void {
  //   this.isLoading = true;
  //   this.enquiryService.getEnquiry(enquiryId).subscribe({
  //     next: (response) => {
  //       this.isLoading = false;
  //       if (response.status === 'success' && response.data) {
  //         this.enquiry = response.data.enquiry;
  //         this.admissionForm.patchValue({
  //            academic_year_id: this.admissionData.academic_year_id,
  //           student_name: this.admissionData.student_name,
  //           date_of_birth: this.admissionData.date_of_birth,
  //           gender: this.admissionData.gender,
  //           parent_name: this.admissionData.parent_name,
  //           parent_mobile: this.admissionData.parent_mobile,
  //           parent_email: this.admissionData.parent_email,
  //           address: this.admissionData.address,
  //           applied_class_id: this.admissionData.applied_class_id,
  //           previous_school: this.admissionData.previous_school,
  //           remarks: this.admissionData.remarks
  //         });
  //       }
  //     },
  //     error: () => {
  //       this.isLoading = false;
  //     }
  //   });
  // }


  loadEnquiry(enquiryId: number): void {
    this.isLoading = true;
    this.enquiryService.getEnquiry(enquiryId).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.status === 'success' && response.data) {
          const e = response.data.enquiry;
          this.enquiry = e;
          this.admissionForm.patchValue({
            enquiry_id: e.enquiry_id ?? e.id ?? null,
            academic_year_id: e.academic_year_id ?? null,
            student_name: e.student_name ?? '',
            date_of_birth: e.date_of_birth ?? '',
            gender: e.gender ?? '',
            parent_name: e.parent_name ?? '',
            parent_mobile: e.parent_mobile ?? e.mobile ?? '',
            parent_email: e.parent_email ?? e.email ?? '',
            address: e.address ?? '',
            applied_class_id: e.applied_class_id ?? e.interested_class_id ?? null,
            previous_school: e.previous_school ?? '',
            remarks: e.remarks ?? ''
          });
        }
      },
      error: () => {
        this.isLoading = false;
        this.toastService.show('Failed to load enquiry', 'error');
      }
    });
  }

  onSubmit(): void {
    if (this.admissionForm.invalid) {
      this.toastService.show('Please fill all required fields', 'error');
      return;
    }

    this.isSaving = true;
    const formData = new FormData();
    const formValue = this.admissionForm.value;
    
    Object.keys(formValue).forEach(key => {
      if (formValue[key] !== null && formValue[key] !== undefined) {
        formData.append(key, formValue[key]);
      }
    });

    // Handle document uploads
    const documentsInput = document.getElementById('documents') as HTMLInputElement;
    if (documentsInput?.files && documentsInput.files.length > 0) {
      for (let i = 0; i < documentsInput.files.length; i++) {
        formData.append('documents[]', documentsInput.files[i]);
      }
    }

    // Handle admission form file
    const formFileInput = document.getElementById('admission_form_file') as HTMLInputElement;
    if (formFileInput?.files && formFileInput.files.length > 0) {
      formData.append('admission_form_file', formFileInput.files[0]);
    }

    this.admissionService.createAdmission(formData).subscribe({
      next: (response) => {
        this.isSaving = false;
        if (response.status === 'success') {
          const enquiryId = this.admissionForm.get('enquiry_id')?.value;
          if (enquiryId) {
            this.enquiryService.updateEnquiry(Number(enquiryId), { conversion_status: 'converted' }).subscribe({
              next: () => {},
              error: () => {}
            });
          }
          this.toastService.show('Admission created successfully', 'success');
          this.router.navigate(['/app/admissions']);
        }
      },
      error: () => {
        this.isSaving = false;
        this.toastService.show('Error creating admission', 'error');
      }
    });
  }
}

