import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MarksheetService } from '../../../shared/services/marksheet.service';
import { ExaminationService } from '../../../shared/services/examination.service';
import { StudentService } from '../../../shared/services/student.service';
import { AcademicYearService } from '../../../shared/services/academic-year.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-marksheet-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './marksheet-create.component.html',
  styleUrls: ['./marksheet-create.component.scss']
})
export class MarksheetCreateComponent implements OnInit {
  marksheetForm: FormGroup;
  isEditMode = false;
  marksheetId: number | null = null;
  isLoading = false;
  isSaving = false;
  examinations: any[] = [];
  students: any[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private marksheetService: MarksheetService,
    private examinationService: ExaminationService,
    private studentService: StudentService,
    private academicYearService: AcademicYearService,
    private toastService: ToastService
  ) {
    this.marksheetForm = this.fb.group({
      academic_year_id: [null, Validators.required],
      examination_id: [null, Validators.required],
      student_id: [null, Validators.required],
      total_marks: [null],
      obtained_marks: [null],
      percentage: [null],
      grade: [''],
      rank: [''],
      status: ['draft']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.marksheetId = +params['id'];
        this.loadMarksheet();
      }
    });
    
    this.loadAcademicYears();
  }

  loadAcademicYears(): void {
    this.academicYearService.getCurrentAcademicYearId().subscribe({
      next: (id) => {
        if (id != null) {
          this.marksheetForm.patchValue({ academic_year_id: id });
          this.loadExaminations(id);
        }
      }
    });
  }

  onAcademicYearChange(): void {
    const academicYearId = this.marksheetForm.get('academic_year_id')?.value;
    if (academicYearId) {
      this.loadExaminations(academicYearId);
    }
  }

  loadExaminations(academicYearId: number): void {
    this.examinationService.getExaminations({ academic_year_id: academicYearId }).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.examinations = response.data.examinations || [];
        }
      }
    });
  }

  onExaminationChange(): void {
    const examinationId = this.marksheetForm.get('examination_id')?.value;
    if (examinationId) {
      // Load students for this examination's class
      this.loadStudents();
    }
  }

  loadStudents(): void {
    this.studentService.getStudents({}).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.students = response.data.students || [];
        }
      }
    });
  }

  loadMarksheet(): void {
    if (!this.marksheetId) return;
    
    this.isLoading = true;
    this.marksheetService.getMarksheet(this.marksheetId).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.status === 'success' && response.data) {
          const marksheet = response.data.marksheet;
          this.marksheetForm.patchValue({
            academic_year_id: marksheet.academic_year_id,
            examination_id: marksheet.examination_id,
            student_id: marksheet.student_id,
            total_marks: marksheet.total_marks,
            obtained_marks: marksheet.obtained_marks,
            percentage: marksheet.percentage,
            grade: marksheet.grade,
            rank: marksheet.rank,
            status: marksheet.status
          });
          this.loadExaminations(marksheet.academic_year_id);
        }
      },
      error: () => {
        this.isLoading = false;
        this.toastService.show('Error loading marksheet', 'error');
      }
    });
  }

  onSubmit(): void {
    if (this.marksheetForm.invalid) {
      this.toastService.show('Please fill all required fields', 'error');
      return;
    }

    this.isSaving = true;
    const formData = new FormData();
    const formValue = this.marksheetForm.value;
    
    Object.keys(formValue).forEach(key => {
      if (formValue[key] !== null && formValue[key] !== undefined) {
        formData.append(key, formValue[key]);
      }
    });

    // Handle file upload
    const fileInput = document.getElementById('marksheet_file') as HTMLInputElement;
    if (fileInput?.files && fileInput.files.length > 0) {
      formData.append('marksheet_file', fileInput.files[0]);
    }

    if (this.isEditMode && this.marksheetId) {
      formData.append('marksheet_id', this.marksheetId.toString());
      this.marksheetService.updateMarksheet(this.marksheetId, formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.toastService.show('Marksheet updated successfully', 'success');
            this.router.navigate(['/app/marksheets']);
          }
        },
        error: () => {
          this.isSaving = false;
          this.toastService.show('Error updating marksheet', 'error');
        }
      });
    } else {
      this.marksheetService.createMarksheet(formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.toastService.show('Marksheet created successfully', 'success');
            this.router.navigate(['/app/marksheets']);
          }
        },
        error: () => {
          this.isSaving = false;
          this.toastService.show('Error creating marksheet', 'error');
        }
      });
    }
  }

  sendToWhatsApp(): void {
    if (!this.marksheetId) {
      this.toastService.show('Please save the marksheet first', 'warning');
      return;
    }

    if (this.marksheetForm.get('status')?.value !== 'published') {
      this.toastService.show('Please publish the marksheet before sending', 'warning');
      return;
    }

    this.isSaving = true;
    this.marksheetService.sendMarksheetToWhatsApp(this.marksheetId).subscribe({
      next: (response) => {
        this.isSaving = false;
        if (response.status === 'success') {
          this.toastService.show('Marksheet sent to parent via WhatsApp', 'success');
          this.marksheetForm.patchValue({ status: 'sent' });
        } else {
          this.toastService.show(response.message || 'Failed to send marksheet', 'error');
        }
      },
      error: () => {
        this.isSaving = false;
        this.toastService.show('Error sending marksheet to WhatsApp', 'error');
      }
    });
  }

  notifyParent(): void {
    if (!this.marksheetId) {
      this.toastService.show('Please save the marksheet first', 'warning');
      return;
    }

    this.isSaving = true;
    this.marksheetService.notifyParent(this.marksheetId).subscribe({
      next: (response) => {
        this.isSaving = false;
        if (response.status === 'success') {
          this.toastService.show('Parent notified successfully', 'success');
        } else {
          this.toastService.show(response.message || 'Failed to notify parent', 'error');
        }
      },
      error: () => {
        this.isSaving = false;
        this.toastService.show('Error notifying parent', 'error');
      }
    });
  }
}

