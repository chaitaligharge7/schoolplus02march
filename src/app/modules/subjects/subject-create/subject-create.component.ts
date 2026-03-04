import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SubjectService } from '../../../shared/services/subject.service';
import { ClassService } from '../../../shared/services/class.service';
import { ToastService } from '../../../shared/services/toast.service';
import { SearchSelectComponent } from '../../../shared/components/search-select/search-select.component';

@Component({
  selector: 'app-subject-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SearchSelectComponent],
  templateUrl: './subject-create.component.html',
  styleUrls: ['./subject-create.component.scss']
})
export class SubjectCreateComponent implements OnInit {
  subjectForm: FormGroup;
  isEditMode = false;
  subjectId: number | null = null;
  isSaving = false;
  classes: any[] = [];
  selectedClasses: number[] = [];

  subjectTypeOptions: { value: string; label: string }[] = [
    { value: 'Core', label: 'Core' },
    { value: 'Elective', label: 'Elective' },
    { value: 'Optional', label: 'Optional' },
    { value: 'Practical', label: 'Practical' },
  ];

  constructor(
    private fb: FormBuilder,
    private subjectService: SubjectService,
    private classService: ClassService,
    public router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService
  ) {
    this.subjectForm = this.fb.group({
      subject_name: ['', Validators.required],
      subject_code: [''],
      subject_type: ['Core', Validators.required],
      subject_description: [''],
      max_marks: [null],
      pass_marks: [null]
    });
  }

  ngOnInit(): void {
    this.loadClasses();
    
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.subjectId = parseInt(params['id']);
        this.loadSubject();
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

  loadSubject(): void {
    if (!this.subjectId) return;
    
    this.subjectService.getSubject(this.subjectId).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          const subject = response.data.subject;
          this.subjectForm.patchValue({
            subject_name: subject.subject_name,
            subject_code: subject.subject_code || '',
            subject_type: subject.subject_type || 'Core',
            subject_description: subject.subject_description || '',
            max_marks: subject.max_marks,
            pass_marks: subject.pass_marks
          });
          
          if (subject.linked_classes) {
            this.selectedClasses = subject.linked_classes.map((c: any) => c.class_id);
          }
        }
      }
    });
  }

  toggleClass(classId: number): void {
    const index = this.selectedClasses.indexOf(classId);
    if (index > -1) {
      this.selectedClasses.splice(index, 1);
    } else {
      this.selectedClasses.push(classId);
    }
  }

  isClassSelected(classId: number): boolean {
    return this.selectedClasses.includes(classId);
  }

  onSubmit(): void {
    if (this.subjectForm.invalid) {
      return;
    }

    this.isSaving = true;
    const formData = {
      ...this.subjectForm.value,
      class_ids: this.selectedClasses
    };

    if (this.isEditMode && this.subjectId) {
      this.subjectService.updateSubject(this.subjectId, formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.toastService.show('Subject updated successfully', 'success');
            this.router.navigate(['/app/subjects']);
          } else if (response.status === 'error') {
            this.toastService.show(response.message || 'Error updating subject', 'error');
          }
        },
        error: (err) => {
          this.isSaving = false;
          this.toastService.show(err?.error?.message || err?.message || 'Error updating subject', 'error');
        }
      });
    } else {
      this.subjectService.createSubject(formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.toastService.show('Subject created successfully', 'success');
            this.router.navigate(['/app/subjects']);
          } else if (response.status === 'error') {
            this.toastService.show(response.message || 'Error creating subject', 'error');
          }
        },
        error: (err) => {
          this.isSaving = false;
          this.toastService.show(err?.error?.message || err?.message || 'Error creating subject', 'error');
        }
      });
    }
  }
}

