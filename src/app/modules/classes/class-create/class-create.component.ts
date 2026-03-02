import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ClassService } from '../../../shared/services/class.service';
import { AcademicYearService } from '../../../shared/services/academic-year.service';
import { TeacherService } from '../../../shared/services/teacher.service';
import { ToastService } from '../../../shared/services/toast.service';
import { SearchSelectComponent } from '../../../shared/components/search-select/search-select.component';

@Component({
  selector: 'app-class-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SearchSelectComponent],
  templateUrl: './class-create.component.html',
  styleUrls: ['./class-create.component.scss']
})
export class ClassCreateComponent implements OnInit {
  classForm: FormGroup;
  isEditMode = false;
  classId: number | null = null;
  isSaving = false;
  academicYears: any[] = [];
  teachers: any[] = [];

  get academicYearOptions(): { value: number; label: string }[] {
    return (this.academicYears || []).map(y => ({
      value: y.academic_year_id,
      label: y.academic_year_name || ''
    }));
  }

  get teacherOptions(): { value: number; label: string }[] {
    return (this.teachers || []).map(t => ({
      value: t.teacher_id,
      label: t.full_name || `${t.first_name || ''} ${t.last_name || ''}`.trim() || ''
    }));
  }

  constructor(
    private fb: FormBuilder,
    private classService: ClassService,
    private academicYearService: AcademicYearService,
    private teacherService: TeacherService,
    public router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService
  ) {
    this.classForm = this.fb.group({
      class_name: ['', Validators.required],
      class_code: [''],
      academic_year_id: [null, Validators.required],
      class_level: [null],
      class_teacher_id: [null],
      class_capacity: [null]
    });
  }

  ngOnInit(): void {
    this.loadAcademicYears();
    this.loadTeachers();
    
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.classId = parseInt(params['id']);
        this.loadClass();
      }
    });
  }

  loadAcademicYears(): void {
    this.academicYearService.getCurrentAcademicYearId().subscribe({
      next: (id) => {
        if (id != null) {
          this.classForm.patchValue({ academic_year_id: id });
        }
      }
    });
  }

  loadTeachers(): void {
    this.teacherService.getTeachers({ limit: 1000 }).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.teachers = response.data.teachers || [];
        }
      }
    });
  }

  loadClass(): void {
    if (!this.classId) return;
    
    this.classService.getClass(this.classId).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          const cls = response.data.class;
          this.classForm.patchValue({
            class_name: cls.class_name,
            class_code: cls.class_code || '',
            academic_year_id: cls.academic_year_id,
            class_level: cls.class_level,
            class_teacher_id: cls.class_teacher_id,
            class_capacity: cls.class_capacity
          });
        }
      }
    });
  }

  onSubmit(): void {
    if (this.classForm.invalid) {
      return;
    }

    this.isSaving = true;
    const formData = this.classForm.value;

    if (this.isEditMode && this.classId) {
      this.classService.updateClass(this.classId, formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.toastService.show('Class updated successfully', 'success');
            this.router.navigate(['/app/classes']);
          } else if (response.status === 'error') {
            this.toastService.show(response.message || 'Error updating class', 'error');
          }
        },
        error: (err) => {
          this.isSaving = false;
          const msg = err?.error?.message || err?.message || 'Error updating class';
          this.toastService.show(msg, 'error');
        }
      });
    } else {
      this.classService.createClass(formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.toastService.show('Class created successfully', 'success');
            this.router.navigate(['/app/classes']);
          } else if (response.status === 'error') {
            this.toastService.show(response.message || 'Error creating class', 'error');
          }
        },
        error: (err) => {
          this.isSaving = false;
          const msg = err?.error?.message || err?.message || 'Error creating class';
          this.toastService.show(msg, 'error');
        }
      });
    }
  }
}

