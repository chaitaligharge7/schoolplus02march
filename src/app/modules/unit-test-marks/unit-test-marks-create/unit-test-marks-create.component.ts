import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UnitTestMarksService } from '../../../shared/services/unit-test-marks.service';
import { AcademicYearService } from '../../../shared/services/academic-year.service';
import { ClassService } from '../../../shared/services/class.service';
import { SubjectService } from '../../../shared/services/subject.service';
import { StudentService } from '../../../shared/services/student.service';
import { ToastService } from '../../../shared/services/toast.service';
import { TeacherService } from '../../../shared/services/teacher.service';

@Component({
  selector: 'app-unit-test-marks-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './unit-test-marks-create.component.html',
  styleUrls: ['./unit-test-marks-create.component.scss']
})
export class UnitTestMarksCreateComponent implements OnInit {
  testForm: FormGroup;
  isEditMode = false;
  testId: number | null = null;
  isLoading = false;
  isSaving = false;
  classes: any[] = [];
  subjects: any[] = [];
  students: any[] = [];
    teachers: any[] = [];

  selectedClassId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private unitTestMarksService: UnitTestMarksService,
    private academicYearService: AcademicYearService,
    private classService: ClassService,
    private teacherService: TeacherService,
    private subjectService: SubjectService,
    private studentService: StudentService,
    private toastService: ToastService
  ) {
    this.testForm = this.fb.group({
      test_name: ['', Validators.required],
      teacher_id: [null, Validators.required],
      academic_year_id: [null, Validators.required],
      class_id: [null, Validators.required],
      subject_id: [null, Validators.required],
      test_date: [new Date().toISOString().split('T')[0], Validators.required],
      max_marks: [null, Validators.required],
      passing_marks: [null],
      marks: this.fb.array([])
    });
  }

  get marksArray(): FormArray {
    return this.testForm.get('marks') as FormArray;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.testId = +params['id'];
        this.loadTest();
      }
    });
    
    this.loadAcademicYears();
    this.loadClasses();
    this.loadSubjects();
    this.loadTeachers();
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
  loadAcademicYears(): void {
    this.academicYearService.getCurrentAcademicYearId().subscribe({
      next: (id) => {
        if (id != null) {
          this.testForm.patchValue({ academic_year_id: id });
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

  onClassChange(): void {
    const classId = this.testForm.get('class_id')?.value;
    if (classId) {
      this.selectedClassId = classId;
      this.loadStudents(classId);
    }
  }

  loadStudents(classId: number): void {
    this.studentService.getStudents({ class_id: classId }).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.students = response.data.students || [];
          this.updateMarksArray();
        }
      }
    });
  }

  updateMarksArray(): void {
    this.marksArray.clear();
    this.students.forEach(student => {
      this.marksArray.push(this.fb.group({
        student_id: [student.student_id],
        marks_obtained: [null, [Validators.min(0)]],
        remarks: ['']
      }));
    });
  }

  loadTest(): void {
    if (!this.testId) return;
    
    this.isLoading = true;
    this.unitTestMarksService.getUnitTestMarks({ test_id: this.testId }).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data?.tests?.length > 0) {
          const test = response.data.tests[0];
          this.testForm.patchValue({
            test_name: test.test_name,
            academic_year_id: test.academic_year_id,
            class_id: test.class_id,
            subject_id: test.subject_id,
            test_date: test.test_date,
            max_marks: test.max_marks,
            passing_marks: test.passing_marks
          });
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error('Failed to load test details');
        this.isLoading = false;
      }
    });
  }

  onSubmit(): void {
    if (this.testForm.invalid) {
      this.testForm.markAllAsTouched();
      return;
    }

    if (this.marksArray.length === 0) {
      this.toastService.warning('Please select a class to load students');
      return;
    }

    this.isSaving = true;
    const formData = {
      ...this.testForm.value,
      marks: this.marksArray.value.filter((m: any) => m.marks_obtained !== null && m.marks_obtained !== '')
    };

    if (this.isEditMode && this.testId) {
      formData.test_id = this.testId;
    }

    this.unitTestMarksService.createUnitTestMarks(formData).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.toastService.success(`Unit test marks ${this.isEditMode ? 'updated' : 'created'} successfully`);
          this.router.navigate(['/app/unit-test-marks']);
        } else {
          this.toastService.error(response.message || `Failed to ${this.isEditMode ? 'update' : 'create'} test marks`);
        }
        this.isSaving = false;
      },
      error: () => {
        this.toastService.error(`Failed to ${this.isEditMode ? 'update' : 'create'} test marks`);
        this.isSaving = false;
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/app/unit-test-marks']);
  }
}

