import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PromotionService } from '../../../shared/services/promotion.service';
import { AcademicYearService } from '../../../shared/services/academic-year.service';
import { ClassService } from '../../../shared/services/class.service';
import { StudentService } from '../../../shared/services/student.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-promotion-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './promotion-create.component.html',
  styleUrls: ['./promotion-create.component.scss']
})
export class PromotionCreateComponent implements OnInit {
  promotionForm: FormGroup;
  isEditMode = false;
  promotionId: number | null = null;
  isLoading = false;
  isSaving = false;
  
  academicYears: any[] = [];
  classes: any[] = [];
  students: any[] = [];
  selectedClassId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private promotionService: PromotionService,
    private academicYearService: AcademicYearService,
    private classService: ClassService,
    private studentService: StudentService,
    private toastService: ToastService
  ) {
    this.promotionForm = this.fb.group({
      from_academic_year_id: [null, Validators.required],
      to_academic_year_id: [null, Validators.required],
      from_class_id: [null, Validators.required],
      to_class_id: [null, Validators.required],
      promotion_date: [new Date().toISOString().split('T')[0], Validators.required],
      students: this.fb.array([])
    });
  }

  get studentsArray(): FormArray {
    return this.promotionForm.get('students') as FormArray;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.promotionId = +params['id'];
        this.loadPromotion();
      }
    });
    
    this.loadAcademicYears();
    this.loadClasses();
  }

  loadAcademicYears(): void {
    this.academicYearService.getAcademicYears().subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.academicYears = response.data.academic_years || [];
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

  onFromClassChange(): void {
    const classId = this.promotionForm.get('from_class_id')?.value;
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
          this.updateStudentsArray();
        }
      }
    });
  }

  updateStudentsArray(): void {
    this.studentsArray.clear();
    this.students.forEach(student => {
      this.studentsArray.push(this.fb.group({
        student_id: [student.student_id],
        promote: [true]
      }));
    });
  }

  getSelectedCount(): number {
    return this.studentsArray.value.filter((s: any) => s.promote).length;
  }

  toggleStudent(index: number): void {
    const studentControl = this.studentsArray.at(index);
    studentControl.patchValue({
      promote: !studentControl.value.promote
    });
  }

  loadPromotion(): void {
    if (!this.promotionId) return;
    
    this.isLoading = true;
    this.promotionService.getPromotions({ promotion_id: this.promotionId }).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data?.promotions?.length > 0) {
          const promotion = response.data.promotions[0];
          this.promotionForm.patchValue({
            from_academic_year_id: promotion.from_academic_year_id,
            to_academic_year_id: promotion.to_academic_year_id,
            from_class_id: promotion.from_class_id,
            to_class_id: promotion.to_class_id,
            promotion_date: promotion.promotion_date
          });
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error('Failed to load promotion details');
        this.isLoading = false;
      }
    });
    }

    onSubmit(): void {
    if (this.promotionForm.invalid) {
      this.promotionForm.markAllAsTouched();
      return;
    }

    const selectedStudents = this.studentsArray.value
      .filter((s: any, index: number) => s.promote)
      .map((s: any) => s.student_id);

    if (selectedStudents.length === 0) {
      this.toastService.warning('Please select at least one student to promote');
      return;
    }

    this.isSaving = true;
    // const formData = {
    //   ...this.promotionForm.value,
    //   student_ids: selectedStudents
    // };
    const formData: any = {
  from_class_id: this.promotionForm.value.from_class_id,
  to_class_id: this.promotionForm.value.to_class_id,
  academic_year_id: this.promotionForm.value.to_academic_year_id, // <- backend expects this
  student_ids: selectedStudents,
  promotion_type: 'promote'
};

if (selectedStudents.length === 1) {
  formData.student_id = selectedStudents[0]; // backend expects student_id for single promotion
  delete formData.student_ids;               // remove bulk field
}


    if (this.isEditMode && this.promotionId) {
      formData.promotion_id = this.promotionId;
    }

    this.promotionService.createPromotion(formData).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.toastService.success(`Promoted ${selectedStudents.length} students successfully`);
          this.router.navigate(['/app/promotions']);
        } else {
          this.toastService.error(response.message || 'Failed to promote students');
        }
        this.isSaving = false;
      },
      error: () => {
        this.toastService.error('Failed to promote students');
        this.isSaving = false;
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/app/promotions']);
  }
}

