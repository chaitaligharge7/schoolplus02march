import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SyllabusService } from '../../../shared/services/syllabus.service';
import { AcademicYearService } from '../../../shared/services/academic-year.service';
import { ClassService } from '../../../shared/services/class.service';
import { SubjectService } from '../../../shared/services/subject.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-syllabus-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './syllabus-create.component.html',
  styleUrls: ['./syllabus-create.component.scss']
})
export class SyllabusCreateComponent implements OnInit {
  syllabusForm: FormGroup;
  isEditMode = false;
  syllabusId: number | null = null;
  isLoading = false;
  isSaving = false;
  classes: any[] = [];
  subjects: any[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private syllabusService: SyllabusService,
    private academicYearService: AcademicYearService,
    private classService: ClassService,
    private subjectService: SubjectService,
    private toastService: ToastService
  ) {
    this.syllabusForm = this.fb.group({
      academic_year_id: [null, Validators.required],
      class_id: [null, Validators.required],
      subject_id: [null, Validators.required],
      syllabus_title: ['', Validators.required],
      syllabus_description: [''],
      chapters: this.fb.array([])
    });
  }

  get chapters(): FormArray {
    return this.syllabusForm.get('chapters') as FormArray;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.syllabusId = +params['id'];
        this.loadSyllabus();
      }
    });
    
    this.loadAcademicYears();
    this.loadClasses();
    this.addChapter();
  }

  loadAcademicYears(): void {
    this.academicYearService.getCurrentAcademicYearId().subscribe({
      next: (id) => {
        if (id != null) {
          this.syllabusForm.patchValue({ academic_year_id: id });
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

  onClassChange(): void {
    const classId = this.syllabusForm.get('class_id')?.value;
    if (classId) {
      this.classService.getClassSubjects(classId).subscribe({
        next: (response) => {
          if (response.status === 'success' && response.data) {
            this.subjects = response.data.subjects || [];
          }
        }
      });
    } else {
      this.subjects = [];
    }
  }

  addChapter(): void {
    const chapterForm = this.fb.group({
      chapter_name: ['', Validators.required],
      chapter_number: [this.chapters.length + 1],
      estimated_completion_date: ['']
    });
    this.chapters.push(chapterForm);
  }

  removeChapter(index: number): void {
    this.chapters.removeAt(index);
  }

  loadSyllabus(): void {
    if (!this.syllabusId) return;
    
    this.isLoading = true;
    this.syllabusService.getSyllabusById(this.syllabusId).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.status === 'success' && response.data) {
          const syllabus = response.data.syllabus;
          this.syllabusForm.patchValue({
            academic_year_id: syllabus.academic_year_id,
            class_id: syllabus.class_id,
            subject_id: syllabus.subject_id,
            syllabus_title: syllabus.syllabus_title,
            syllabus_description: syllabus.syllabus_description
          });
          
          this.onClassChange();
          
          // Load chapters
          this.chapters.clear();
          if (syllabus.chapters && syllabus.chapters.length > 0) {
            syllabus.chapters.forEach((chapter: any) => {
              this.chapters.push(this.fb.group({
                chapter_name: [chapter.chapter_name, Validators.required],
                chapter_number: [chapter.chapter_number],
                estimated_completion_date: [chapter.estimated_completion_date]
              }));
            });
          }
        }
      },
      error: () => {
        this.isLoading = false;
        this.toastService.show('Error loading syllabus', 'error');
      }
    });
  }

  onSubmit(): void {
    if (this.syllabusForm.invalid) {
      this.toastService.show('Please fill all required fields', 'error');
      return;
    }

    this.isSaving = true;
    const formData = new FormData();
    const formValue = this.syllabusForm.value;
    
    Object.keys(formValue).forEach(key => {
      if (key === 'chapters') {
        formData.append(key, JSON.stringify(formValue[key]));
      } else if (formValue[key] !== null && formValue[key] !== undefined) {
        formData.append(key, formValue[key]);
      }
    });

    // Handle file upload
    const fileInput = document.getElementById('syllabus_file') as HTMLInputElement;
    if (fileInput?.files && fileInput.files.length > 0) {
      formData.append('syllabus_file', fileInput.files[0]);
    }

    if (this.isEditMode && this.syllabusId) {
      formData.append('syllabus_id', this.syllabusId.toString());
      this.syllabusService.updateSyllabus(this.syllabusId, formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.toastService.show('Syllabus updated successfully', 'success');
            this.router.navigate(['/app/syllabus']);
          }
        },
        error: () => {
          this.isSaving = false;
          this.toastService.show('Error updating syllabus', 'error');
        }
      });
    } else {
      this.syllabusService.createSyllabus(formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.toastService.show('Syllabus created successfully', 'success');
            this.router.navigate(['/app/syllabus']);
          }
        },
        error: () => {
          this.isSaving = false;
          this.toastService.show('Error creating syllabus', 'error');
        }
      });
    }
  }
}

