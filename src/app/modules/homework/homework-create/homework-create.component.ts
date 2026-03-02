import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeworkService } from '../../../shared/services/homework.service';
import { ClassService } from '../../../shared/services/class.service';

@Component({
  selector: 'app-homework-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './homework-create.component.html',
  styleUrls: ['./homework-create.component.scss']
})
export class HomeworkCreateComponent implements OnInit {
  homeworkForm: FormGroup;
  isEditMode = false;
  homeworkId: number | null = null;
  isSaving = false;
  classes: any[] = [];
  sections: any[] = [];
  subjects: any[] = [];

  constructor(
    private fb: FormBuilder,
    private homeworkService: HomeworkService,
    private classService: ClassService,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.homeworkForm = this.fb.group({
      homework_title: ['', Validators.required],
      description: [''],
      class_id: [null, Validators.required],
      section_id: [null],
      subject_id: [null, Validators.required],
      assigned_date: [new Date().toISOString().split('T')[0], Validators.required],
      due_date: ['', Validators.required],
      max_marks: [null]
    });
  }

  ngOnInit(): void {
    this.loadClasses();
    
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.homeworkId = parseInt(params['id']);
        this.loadHomework();
      }
    });

    this.homeworkForm.get('class_id')?.valueChanges.subscribe(classId => {
      if (classId) {
        this.loadSections(classId);
        this.loadSubjects(classId);
      } else {
        this.sections = [];
        this.subjects = [];
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

  loadSections(classId: number): void {
    this.classService.getSections(classId).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.sections = response.data.sections || [];
        }
      }
    });
  }

  loadSubjects(classId: number): void {
    this.classService.getClassSubjects(classId).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.subjects = response.data.subjects || [];
        }
      }
    });
  }

  loadHomework(): void {
    if (!this.homeworkId) return;
    
    this.homeworkService.getHomework(this.homeworkId).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          const homework = response.data.homework;
          this.homeworkForm.patchValue({
            homework_title: homework.homework_title,
            description: homework.description,
            class_id: homework.class_id,
            section_id: homework.section_id,
            subject_id: homework.subject_id,
            assigned_date: homework.assigned_date,
            due_date: homework.due_date,
            max_marks: homework.max_marks
          });
          if (homework.class_id) {
            this.loadSections(homework.class_id);
            this.loadSubjects(homework.class_id);
          }
        }
      }
    });
  }

  onSubmit(): void {
    if (this.homeworkForm.invalid) {
      return;
    }

    this.isSaving = true;
    const formData = this.homeworkForm.value;

    if (this.isEditMode && this.homeworkId) {
      this.homeworkService.updateHomework(this.homeworkId, formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.router.navigate(['/app/homework']);
          }
        },
        error: () => {
          this.isSaving = false;
        }
      });
    } else {
      this.homeworkService.createHomework(formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.router.navigate(['/app/homework']);
          }
        },
        error: () => {
          this.isSaving = false;
        }
      });
    }
  }
}

