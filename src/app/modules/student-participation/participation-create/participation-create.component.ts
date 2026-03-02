import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentParticipationService } from '../../../shared/services/student-participation.service';
import { StudentService } from '../../../shared/services/student.service';
import { ToastService } from '../../../shared/services/toast.service';
import { AcademicYearService } from '../../../shared/services/academic-year.service';

@Component({
  selector: 'app-participation-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './participation-create.component.html',
  styleUrls: ['./participation-create.component.scss']
})
export class ParticipationCreateComponent implements OnInit {
  participationForm: FormGroup;
  isEditMode = false;
  participationId: number | null = null;
  isLoading = false;
  isSaving = false;
  students: any[] = [];
  academicYears: any[] = [];


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private participationService: StudentParticipationService,
    private studentService: StudentService,
    private academicYearService: AcademicYearService,
    private toastService: ToastService
  ) {
    this.participationForm = this.fb.group({
      academic_year_id: [null, Validators.required],
      student_id: [null, Validators.required],
      participation_type: ['sports', Validators.required],
      event_name: ['', Validators.required],
      event_date: [new Date().toISOString().split('T')[0], Validators.required],
      achievement: [''],
      position: [''],
      status: ['active', Validators.required],
      remarks: ['']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.participationId = +params['id'];
        this.loadParticipation();
      }
    });
    
    this.loadStudents();
    this.loadAcademicYears();
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
          this.participationForm.patchValue({ academic_year_id: id });
        }
      }
    });
  }


  loadParticipation(): void {
    if (!this.participationId) return;
    
    this.isLoading = true;
    this.participationService.getParticipations({ participation_id: this.participationId }).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data?.participations?.length > 0) {
          const participation = response.data.participations[0];
          this.participationForm.patchValue({
            academic_year_id: participation.academic_year_id,
            student_id: participation.student_id,
            participation_type: participation.activity_type,
            event_name: participation.activity_name,
            event_date: participation.activity_date,
            achievement: participation.achievement,
            position: participation.position,
            status: participation.status,
            remarks: participation.remarks
          });
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error('Failed to load participation details');
        this.isLoading = false;
      }
    });
  }

  // onSubmit(): void {
  //   if (this.participationForm.invalid) {
  //     this.participationForm.markAllAsTouched();
  //     return;
  //   }

  //   this.isSaving = true;
  //   const formData = this.participationForm.value;

  //   if (this.isEditMode && this.participationId) {
  //     formData.participation_id = this.participationId;
  //   }

  //   this.participationService.createParticipation(formData).subscribe({
  //     next: (response) => {
  //       if (response.status === 'success') {
  //         this.toastService.success(`Participation record ${this.isEditMode ? 'updated' : 'created'} successfully`);
  //         this.router.navigate(['/app/student-participation']);
  //       } else {
  //         this.toastService.error(response.message || `Failed to ${this.isEditMode ? 'update' : 'create'} participation`);
  //       }
  //       this.isSaving = false;
  //     },
  //     error: () => {
  //       this.toastService.error(`Failed to ${this.isEditMode ? 'update' : 'create'} participation`);
  //       this.isSaving = false;
  //     }
  //   });
  // }

  onSubmit(): void {
  if (this.participationForm.invalid) {
    this.participationForm.markAllAsTouched();
    return;
  }

  this.isSaving = true;

  // ✅ Get the form values first
  const formValue = this.participationForm.value;

  // ✅ Map form values to backend fields
  const formData = {
    academic_year_id: formValue.academic_year_id,
    student_id: formValue.student_id,
    participation_type: formValue.participation_type,
    event_name: formValue.event_name,
    event_date: formValue.event_date,
    achievement: formValue.achievement,
    points: 0, // default value
    remarks: formValue.remarks,
    participation_level: 'class_level',
    participation_id: this.isEditMode ? this.participationId : undefined
  };

  // Include participation_id in edit mode
  if (this.isEditMode && this.participationId) {
    formData.participation_id = this.participationId;
  }

  // Send to backend
  this.participationService.createParticipation(formData).subscribe({
    next: (response) => {
      if (response.status === 'success') {
        this.toastService.success(`Participation record ${this.isEditMode ? 'updated' : 'created'} successfully`);
        this.router.navigate(['/app/student-participation']);
      } else {
        this.toastService.error(response.message || `Failed to ${this.isEditMode ? 'update' : 'create'} participation`);
      }
      this.isSaving = false;
    },
    error: () => {
      this.toastService.error(`Failed to ${this.isEditMode ? 'update' : 'create'} participation`);
      this.isSaving = false;
    }
  });
}

  cancel(): void {
    this.router.navigate(['/app/student-participation']);
  }
}

