import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffAllotmentService } from '../../../shared/services/staff-allotment.service';
import { TeacherService } from '../../../shared/services/teacher.service';
import { AcademicYearService } from '../../../shared/services/academic-year.service';
import { ClassService } from '../../../shared/services/class.service';
import { SubjectService } from '../../../shared/services/subject.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-staff-allotment-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './staff-allotment-create.component.html',
  styleUrls: ['./staff-allotment-create.component.scss']
})
export class StaffAllotmentCreateComponent implements OnInit {
  allotmentForm: FormGroup;
  isEditMode = false;
  allotmentId: number | null = null;
  isLoading = false;
  isSaving = false;
  
  staffMembers: any[] = [];
  academicYears: any[] = [];
  classes: any[] = [];
  subjects: any[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private staffAllotmentService: StaffAllotmentService,
    private teacherService: TeacherService,
    private academicYearService: AcademicYearService,
    private classService: ClassService,
    private subjectService: SubjectService,
    private toastService: ToastService
  ) {
    this.allotmentForm = this.fb.group({
      teacher_id: [null, Validators.required],
      academic_year_id: [null, Validators.required],
      class_id: [null, Validators.required],
      subject_id: [null, Validators.required],
      allotment_date: [new Date().toISOString().split('T')[0], Validators.required],
      status: ['active', Validators.required],
      remarks: ['']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.allotmentId = +params['id'];
        this.loadAllotment();
      }
    });
    
    this.loadStaffMembers();
    this.loadAcademicYears();
    this.loadClasses();
    this.loadSubjects();
  }

  loadStaffMembers(): void {
    this.teacherService.getTeachers({}).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.staffMembers = response.data.teachers || [];
        }
      }
    });
  }

  loadAcademicYears(): void {
    this.academicYearService.getCurrentAcademicYearId().subscribe({
      next: (id) => {
        if (id != null) {
          this.allotmentForm.patchValue({ academic_year_id: id });
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

  loadAllotment(): void {
    if (!this.allotmentId) return;
    
    this.isLoading = true;
    this.staffAllotmentService.getStaffAllotments({ allotment_id: this.allotmentId }).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data?.allotments?.length > 0) {
          const allotment = response.data.allotments[0];
          this.allotmentForm.patchValue({
            teacher_id: allotment.teacher_id,
            academic_year_id: allotment.academic_year_id,
            class_id: allotment.class_id,
            subject_id: allotment.subject_id,
            allotment_date: allotment.allotment_date,
            status: allotment.status,
            remarks: allotment.remarks
          });
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error('Failed to load staff allotment details');
        this.isLoading = false;
      }
    });
  }

  onSubmit(): void {
    if (this.allotmentForm.invalid) {
      this.allotmentForm.markAllAsTouched();
      return;
    }

    this.isSaving = true;
    const formData = this.allotmentForm.value;

    if (this.isEditMode && this.allotmentId) {
      formData.allotment_id = this.allotmentId;
    }

    this.staffAllotmentService.createStaffAllotment(formData).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.toastService.success(`Staff allotment ${this.isEditMode ? 'updated' : 'created'} successfully`);
          this.router.navigate(['/app/staff-allotment']);
        } else {
          this.toastService.error(response.message || `Failed to ${this.isEditMode ? 'update' : 'create'} allotment`);
        }
        this.isSaving = false;
      },
      error: () => {
        this.toastService.error(`Failed to ${this.isEditMode ? 'update' : 'create'} allotment`);
        this.isSaving = false;
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/app/staff-allotment']);
  }
}