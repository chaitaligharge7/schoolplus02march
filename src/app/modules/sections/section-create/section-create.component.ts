import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SectionService } from '../../../shared/services/section.service';
import { ClassService } from '../../../shared/services/class.service';
import { TeacherService } from '../../../shared/services/teacher.service';
import { ToastService } from '../../../shared/services/toast.service';
import { SearchSelectComponent } from '../../../shared/components/search-select/search-select.component';

@Component({
  selector: 'app-section-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SearchSelectComponent],
  templateUrl: './section-create.component.html',
  styleUrls: ['./section-create.component.scss']
})
export class SectionCreateComponent implements OnInit {
  sectionForm: FormGroup;
  isEditMode = false;
  sectionId: number | null = null;
  isSaving = false;
  classes: any[] = [];
  teachers: any[] = [];

  get classOptions(): { value: number | null; label: string }[] {
    const select: { value: number | null; label: string }[] = [{ value: null, label: 'Select Class' }];
    const list = (this.classes || []).map((c) => ({ value: c.class_id, label: c.class_name || '' }));
    return [...select, ...list];
  }

  get sectionTeacherOptions(): { value: number | null; label: string }[] {
    const select: { value: number | null; label: string }[] = [{ value: null, label: 'Select Section Teacher' }];
    const list = (this.teachers || []).map((t) => ({ value: t.teacher_id, label: t.full_name || '' }));
    return [...select, ...list];
  }

  constructor(
    private fb: FormBuilder,
    private sectionService: SectionService,
    private classService: ClassService,
    private teacherService: TeacherService,
    public router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService
  ) {
    this.sectionForm = this.fb.group({
      section_name: ['', Validators.required],
      section_code: [''],
      class_id: [null, Validators.required],
      class_teacher_id: [null],
      max_students: [null]
    });
  }

  ngOnInit(): void {
    this.loadClasses();
    this.loadTeachers();
    
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.sectionId = parseInt(params['id']);
        this.loadSection();
      }
    });
  }

  loadClasses(): void {
    this.classService.getClasses().subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          // this.classes = response.data.classes || [];
                  this.classes = response.data?.classes || response.data || [];

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

  loadSection(): void {
    if (!this.sectionId) return;
    
    this.sectionService.getSection(this.sectionId).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          const section = response.data.section;
          this.sectionForm.patchValue({
            section_name: section.section_name,
            section_code: section.section_code || '',
            class_id: section.class_id,
            class_teacher_id: section.class_teacher_id,
            max_students: section.max_students
          });
        }
      }
    });
  }

  onSubmit(): void {
    if (this.sectionForm.invalid) {
      return;
    }

    this.isSaving = true;
    const formData = this.sectionForm.value;

    if (this.isEditMode && this.sectionId) {
      this.sectionService.updateSection(this.sectionId, formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.toastService.show('Section updated successfully', 'success');
            this.router.navigate(['/app/sections']);
          } else if (response.status === 'error') {
            this.toastService.show(response.message || 'Error updating section', 'error');
          }
        },
        error: (err) => {
          this.isSaving = false;
          this.toastService.show(err?.error?.message || err?.message || 'Error updating section', 'error');
        }
      });
    } else {
      this.sectionService.createSection(formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.toastService.show('Section created successfully', 'success');
            this.router.navigate(['/app/sections']);
          } else if (response.status === 'error') {
            this.toastService.show(response.message || 'Error creating section', 'error');
          }
        },
        error: (err) => {
          this.isSaving = false;
          this.toastService.show(err?.error?.message || err?.message || 'Error creating section', 'error');
        }
      });
    }
  }
}

