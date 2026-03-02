import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RteStudentService } from '../../../shared/services/rte-student.service';
import { StudentService } from '../../../shared/services/student.service';
import { AcademicYearService } from '../../../shared/services/academic-year.service';
import { ClassService } from '../../../shared/services/class.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-rte-student-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './rte-student-create.component.html',
  styleUrls: ['./rte-student-create.component.scss']
})
export class RteStudentCreateComponent implements OnInit {
  rteForm: FormGroup;
  isEditMode = false;
  rteId: number | null = null;
  isLoading = false;
  isSaving = false;
  
  students: any[] = [];
  academicYears: any[] = [];
  classes: any[] = [];
  sections: any[] = [];


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private rteStudentService: RteStudentService,
    private studentService: StudentService,
    private academicYearService: AcademicYearService,
    private classService: ClassService,
    private toastService: ToastService
  ) {
    this.rteForm = this.fb.group({
       student_id: [null, Validators.required],
       academic_year_id: [null, Validators.required],
       class_id: [null],
       section_id: [null],
       rte_number: ['', Validators.required],
       rte_category: ['', Validators.required],
       admission_date: [new Date().toISOString().split('T')[0], Validators.required],
       income_certificate_number: [''],
       caste_certificate_number: [''],
       status: ['active', Validators.required],
       remarks: [''],
       quota_type: ['']
     });

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.rteId = +params['id'];
        // this.loadRteStudent();
      }
    });
    
    this.loadStudents();
    this.loadAcademicYears();
    this.loadClasses();
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

  loadAcademicYears(): void {
    this.academicYearService.getCurrentAcademicYearId().subscribe({
      next: (id) => {
        if (id != null) {
          this.rteForm.patchValue({ academic_year_id: id });
        }
      }
    });
  }

  // loadClasses(): void {
  //   this.classService.getClasses().subscribe({
  //     next: (response) => {
  //       if (response.status === 'success' && response.data) {
  //         this.classes = response.data.classes || [];
  //       }
  //     }
  //   });
  // }

  loadClasses(): void {
  this.classService.getClasses().subscribe({
    next: (response) => {
      if (response.status === 'success' && response.data) {
        // Ensure class_id is a number
        this.classes = response.data.classes.map((c: any)=> ({
          ...c,
          class_id: Number(c.class_id)
        }));

        // Patch RTE student only after classes are loaded
        if (this.isEditMode && this.rteId) {
          this.loadRteStudent();
        }
      }
    },
    error: () => {
      this.toastService.error('Failed to load classes');
    }
  });
}

  loadRteStudent(): void {
    if (!this.rteId) return;
    
    this.isLoading = true;
    this.rteStudentService.getRteStudents({ rte_student_id: this.rteId }).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data?.rte_students?.length > 0) {
          const rteStudent = response.data.rte_students[0];
          this.rteForm.patchValue({
          student_id: rteStudent.student_id,
          academic_year_id: rteStudent.academic_year_id,
          class_id: rteStudent.class_id,
          section_id: rteStudent.section_id,
          rte_number: rteStudent.rte_number,
          rte_category: rteStudent.rte_category,
          admission_date: rteStudent.admission_date,
          income_certificate_number: rteStudent.income_certificate_number,
          caste_certificate_number: rteStudent.caste_certificate_number,
          status: rteStudent.status,
          remarks: rteStudent.remarks,
          quota_type: rteStudent.quota_type
        });

        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error('Failed to load RTE student details');
        this.isLoading = false;
      }
    });
  }

  onSubmit(): void {
    if (this.rteForm.invalid) {
      this.rteForm.markAllAsTouched();
      return;
    }

    this.isSaving = true;
    const formData = this.rteForm.value;

    if (this.isEditMode && this.rteId) {
      formData.rte_student_id = this.rteId;
    }

    this.rteStudentService.createRteStudent(formData).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.toastService.success(`RTE student record ${this.isEditMode ? 'updated' : 'created'} successfully`);
          this.router.navigate(['/app/rte-students']);
        } else {
          this.toastService.error(response.message || `Failed to ${this.isEditMode ? 'update' : 'create'} RTE student`);
        }
        this.isSaving = false;
      },
      error: () => {
        this.toastService.error(`Failed to ${this.isEditMode ? 'update' : 'create'} RTE student`);
        this.isSaving = false;
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/app/rte-students']);
  }
}

