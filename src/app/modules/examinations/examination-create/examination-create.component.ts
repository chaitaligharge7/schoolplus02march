import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { forkJoin, of } from 'rxjs';
import { AcademicYearService } from '../../../shared/services/academic-year.service';
import { ExaminationService } from '../../../shared/services/examination.service';
import { ClassService } from '../../../shared/services/class.service';

@Component({
  selector: 'app-examination-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './examination-create.component.html',
  styleUrls: ['./examination-create.component.scss']
})
export class ExaminationCreateComponent implements OnInit {
  examinationForm: FormGroup;
  isSaving = false;
  classes: any[] = [];
  examTypes: any[] = [];

  isEditMode = false;          
  editExaminationId: number | null = null; 

  constructor(
    private fb: FormBuilder,
    private academicYearService: AcademicYearService,
    private examinationService: ExaminationService,
    private classService: ClassService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.examinationForm = this.fb.group({
      examination_name: ['', Validators.required],
      examination_code: ['', Validators.required],
      exam_type_id: [null, Validators.required],
      academic_year_id: [null, Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      result_date: ['', Validators.required],
      description: ['']
    });
  }

  ngOnInit(): void {
    // Check if we are editing
    const idParam = this.route.snapshot.paramMap.get('id');
    this.editExaminationId = idParam ? +idParam : null;
    this.isEditMode = !!this.editExaminationId;

    // Load all required data in parallel
    const classes$ = this.classService.getClasses();
    const currentYearId$ = this.academicYearService.getCurrentAcademicYearId();
    const examTypes$ = of([
      { exam_type_id: 1, exam_type_name: 'Unit Test' },
      { exam_type_id: 2, exam_type_name: 'Mid Term' },
      { exam_type_id: 3, exam_type_name: 'Final Exam' },
      { exam_type_id: 4, exam_type_name: 'Quiz' }
    ]);

    forkJoin([classes$, currentYearId$, examTypes$]).subscribe(
      ([classesResp, currentYearId, examTypesResp]: any) => {
        // Populate classes
        this.classes = classesResp.data?.classes || [];

        // Populate exam types
        this.examTypes = examTypesResp;

        // If edit mode, load the examination data
        if (this.isEditMode && this.editExaminationId) {
          this.loadExamination(this.editExaminationId);
        } else {
          // If create mode, default to current academic year
          if (currentYearId != null) {
            this.examinationForm.patchValue({ academic_year_id: currentYearId });
          }
        }
      },
      err => console.error('Failed to load initial data', err)
    );
  }

  // -----------------------------
  // Load examination for editing
  // -----------------------------
  // -----------------------------
// Load examination for editing
// -----------------------------
loadExamination(id: number): void {
  this.examinationService.getExamination(id).subscribe({
    next: (response: any) => {
      if (response.status === 'success' && response.data) {
        const exam = response.data.examination; // ✅ note: your API returns exam inside "examination" object

        // -----------------------------
        // Patch form values for editing
        // -----------------------------
        const formatDate = (d: string) => d ? d.split(' ')[0] : null;

        this.examinationForm.patchValue({
          examination_name: exam.examination_name,
          examination_code: exam.examination_code,
          exam_type_id: exam.exam_type_id,
          academic_year_id: exam.academic_year_id,
          start_date: formatDate(exam.start_date),
          end_date: formatDate(exam.end_date),
          result_date: formatDate(exam.result_date),
          description: exam.description
        });

        console.log('Loaded examination for edit:', exam);
      }
    },
    error: (err) => console.error('Failed to load examination:', err)
  });
}


  // -----------------------------
  // Submit form
  // -----------------------------
  onSubmit(): void {
    this.markFormGroupTouched(this.examinationForm);

    if (this.examinationForm.invalid) {
      console.warn('Form is invalid:', this.examinationForm.value);
      return;
    }

    this.isSaving = true;
    const formValue = this.examinationForm.value;
    console.log('Submitting Examination:', formValue);

    if (this.isEditMode && this.editExaminationId) {
      // Update existing examination
      this.examinationService.updateExamination(this.editExaminationId, formValue).subscribe({
        next: response => this.handleResponse(response),
        error: err => this.handleError(err)
      });
    } else {
      // Create new examination
      this.examinationService.createExamination(formValue).subscribe({
        next: response => this.handleResponse(response),
        error: err => this.handleError(err)
      });
    }
  }

  // -----------------------------
  // Helpers
  // -----------------------------
  handleResponse(response: any) {
    this.isSaving = false;
    if (response.status === 'success') {
      alert(this.isEditMode ? 'Examination updated successfully!' : 'Examination created successfully!');
      this.router.navigate(['/app/examinations/list']);
    } else {
      alert(response.message || 'Operation failed');
    }
  }

  handleError(error: any) {
    this.isSaving = false;
    console.error('API Error:', error);
    alert(error.error?.message || 'An error occurred while saving examination.');
  }

  markFormGroupTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control?.markAsTouched();
    });
  }

  cancel(): void {
    this.router.navigate(['/app/examinations/list']);
  }
}
