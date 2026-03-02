import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassworkService } from '../../../shared/services/classwork.service';
import { AcademicYearService } from '../../../shared/services/academic-year.service';
import { ClassService } from '../../../shared/services/class.service';
import { SubjectService } from '../../../shared/services/subject.service';
import { TeacherService } from '../../../shared/services/teacher.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-classwork-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './classwork-create.component.html',
  styleUrls: ['./classwork-create.component.scss']
})
export class ClassworkCreateComponent implements OnInit {
  classworkForm: FormGroup;
  isSaving = false;
  classes: any[] = [];
  sections: any[] = [];
  subjects: any[] = [];
  teachers: any[] = [];

  isEditMode: boolean = false;
  classworkId: number | null = null;

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private route: ActivatedRoute, 
    private classworkService: ClassworkService,
    private academicYearService: AcademicYearService,
    private classService: ClassService,
    private subjectService: SubjectService,
    private teacherService: TeacherService,
    private toastService: ToastService
  ) {
    this.classworkForm = this.fb.group({
      academic_year_id: [null, Validators.required],
      class_id: [null, Validators.required],
      section_id: [null],
      subject_id: [null, Validators.required],
      teacher_id: [null, Validators.required],
      classwork_title: ['', Validators.required],
      classwork_description: [''],
      assigned_date: [new Date().toISOString().split('T')[0], Validators.required],
      due_date: ['']
    });
  }

ngOnInit(): void {
    this.loadAcademicYears();
    this.loadClasses();
    this.loadTeachers();

    // Check if editing
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.classworkId = +params['id'];
        this.loadClasswork(this.classworkId);
      }
    });
  }

  loadClasswork(id: number): void {
    console.log('Loading classwork with id:', id);
    this.classworkService.getClasswork({ id }).subscribe({
      next: (response) => {
        console.log('Classwork API response:', response);

        if (response.status === 'success' && response.data?.classwork?.length > 0) {
          const cw = response.data.classwork.find((c: any) => c.classwork_id === id);
          console.log('Fetched classwork:', cw);

          if (!cw) {
            this.toastService.show('Classwork not found', 'error');
            return;
          }

          this.classworkForm.patchValue({
            academic_year_id: cw.academic_year_id,
            class_id: cw.class_id,
            teacher_id: cw.teacher_id,
            classwork_title: cw.classwork_title,
            classwork_description: cw.classwork_description,
            assigned_date: cw.assigned_date,
            due_date: cw.due_date
          });

          const classId = cw.class_id;
          if (classId) {
            this.classService.getSections(classId).subscribe({
              next: (res) => {
                this.sections = res.data?.sections || [];
                this.classworkForm.patchValue({ section_id: cw.section_id });
              }
            });

            this.classService.getClassSubjects(classId).subscribe({
              next: (res) => {
                this.subjects = res.data?.subjects || [];
                this.classworkForm.patchValue({ subject_id: cw.subject_id });
              }
            });
          }
        }
      },
      error: (err) => {
        console.error('Error fetching classwork:', err);
        this.toastService.show('Failed to load classwork', 'error');
      }
    });
  }

  loadAcademicYears(): void {
    this.academicYearService.getCurrentAcademicYearId().subscribe({
      next: (id) => {
        if (id != null) {
          this.classworkForm.patchValue({ academic_year_id: id });
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

  loadTeachers(): void {
    this.teacherService.getTeachers({}).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.teachers = response.data.teachers || [];
        }
      }
    });
  }

  onClassChange(): void {
    const classId = this.classworkForm.get('class_id')?.value;
    if (classId) {
      this.classService.getSections(classId).subscribe({
        next: (response) => {
          if (response.status === 'success' && response.data) {
            this.sections = response.data.sections || [];
          }
        }
      });

      this.classService.getClassSubjects(classId).subscribe({
        next: (response) => {
          if (response.status === 'success' && response.data) {
            this.subjects = response.data.subjects || [];
          }
        }
      });
    } else {
      this.sections = [];
      this.subjects = [];
    }
  }

  onSubmit(): void {
    if (this.classworkForm.invalid) {
      this.toastService.show('Please fill all required fields', 'error');
      return;
    }

    this.isSaving = true;
    const formData = new FormData();
    const formValue = this.classworkForm.value;

    Object.keys(formValue).forEach(key => {
      if (formValue[key] !== null && formValue[key] !== undefined && formValue[key] !== '') {
        formData.append(key, formValue[key]);
      }
    });

    const fileInput = document.getElementById('classwork_file') as HTMLInputElement;
    if (fileInput?.files && fileInput.files.length > 0) {
      formData.append('classwork_file', fileInput.files[0]);
    }

    if (this.isEditMode && this.classworkId) {
      formData.append('classwork_id', this.classworkId.toString());
    }

    const request$ = this.isEditMode
      ? this.classworkService.updateClasswork(formData)
      : this.classworkService.createClasswork(formData);

    request$.subscribe({
      next: (response) => {
        this.isSaving = false;
        if (response.status === 'success') {
          this.toastService.show(
            this.isEditMode ? 'Classwork updated successfully' : 'Classwork created successfully',
            'success'
          );
          this.router.navigate(['/app/classwork']);
        } else {
          this.toastService.show(response.message || 'Error saving classwork', 'error');
        }
      },
      error: () => {
        this.isSaving = false;
        this.toastService.show('Error saving classwork', 'error');
      }
    });
  }
}

