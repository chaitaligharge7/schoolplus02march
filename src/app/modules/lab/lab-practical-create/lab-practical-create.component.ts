import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LabService } from '../../../shared/services/lab.service';
import { AcademicYearService } from '../../../shared/services/academic-year.service';
import { ClassService } from '../../../shared/services/class.service';
import { SubjectService } from '../../../shared/services/subject.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-lab-practical-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './lab-practical-create.component.html',
  styleUrls: ['./lab-practical-create.component.scss']
})
export class LabPracticalCreateComponent implements OnInit {
  practicalForm: FormGroup;
  isEditMode = false;
  practicalId: number | null = null;
  isLoading = false;
  isSaving = false;
  
  academicYears: any[] = [];
  classes: any[] = [];
  subjects: any[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private labService: LabService,
    private academicYearService: AcademicYearService,
    private classService: ClassService,
    private subjectService: SubjectService,
    private toastService: ToastService
  ) {
    this.practicalForm = this.fb.group({
      practical_name: ['', Validators.required],
      academic_year_id: [null, Validators.required],
      class_id: [null, Validators.required],
      subject_id: [null, Validators.required],
      practical_date: [new Date().toISOString().split('T')[0], Validators.required],
      status: ['scheduled', Validators.required],
      description: ['']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.practicalId = +params['id'];
        this.loadPractical();
      }
    });
    
    this.loadAcademicYears();
    this.loadClasses();
    this.loadSubjects();
  }

  loadAcademicYears(): void {
    this.academicYearService.getAcademicYears().subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.academicYears = response.data.academic_years || [];
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

  loadSubjects(): void {
    this.subjectService.getSubjects().subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.subjects = response.data.subjects || [];
        }
      }
    });
  }

  loadPractical(): void {
    if (!this.practicalId) return;
    
    this.isLoading = true;
    this.labService.getLabPracticals({ practical_id: this.practicalId }).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data?.practicals?.length > 0) {
          const practical = response.data.practicals[0];
          this.practicalForm.patchValue({
            practical_name: practical.practical_name,
            academic_year_id: practical.academic_year_id,
            class_id: practical.class_id,
            subject_id: practical.subject_id,
            practical_date: practical.practical_date,
            status: practical.status,
            description: practical.description
          });
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error('Failed to load lab practical details');
        this.isLoading = false;
      }
    });
  }

  onSubmit(): void {
    if (this.practicalForm.invalid) {
      this.practicalForm.markAllAsTouched();
      return;
    }

    this.isSaving = true;
    const formData = this.practicalForm.value;

    if (this.isEditMode && this.practicalId) {
      formData.practical_id = this.practicalId;
    }

    this.labService.createLabPractical(formData).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.toastService.success(`Lab practical ${this.isEditMode ? 'updated' : 'created'} successfully`);
          this.router.navigate(['/app/lab']);
        } else {
          this.toastService.error(response.message || `Failed to ${this.isEditMode ? 'update' : 'create'} practical`);
        }
        this.isSaving = false;
      },
      error: () => {
        this.toastService.error(`Failed to ${this.isEditMode ? 'update' : 'create'} practical`);
        this.isSaving = false;
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/app/lab']);
  }
}

