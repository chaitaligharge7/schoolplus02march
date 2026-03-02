import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TeacherService } from '../../../shared/services/teacher.service';
import { DepartmentService } from '../../../shared/services/department.service';
import { DesignationService } from '../../../shared/services/designation.service';
import { SearchSelectComponent } from '../../../shared/components/search-select/search-select.component';

@Component({
  selector: 'app-teacher-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SearchSelectComponent],
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.scss']
})
export class TeacherAddComponent implements OnInit {
  teacherForm: FormGroup;
  isEditMode = false;
  teacherId: number | null = null;
  isLoading = false;
  isSaving = false;
  designations: any[] = [];
  departments: any[] = [];

  genderOptions: { value: string; label: string }[] = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Other', label: 'Other' }
  ];

  get designationOptions(): { value: number | null; label: string }[] {
    const all: { value: number | null; label: string }[] = [{ value: null, label: 'Select Designation' }];
    const list = (this.designations || []).map(d => ({ value: d.designation_id, label: d.designation_name || '' }));
    return [...all, ...list];
  }

  get departmentOptions(): { value: number | null; label: string }[] {
    const all: { value: number | null; label: string }[] = [{ value: null, label: 'Select Department' }];
    const list = (this.departments || []).map(d => ({ value: d.department_id, label: d.department_name || '' }));
    return [...all, ...list];
  }

  teacherStatusOptions: { value: string; label: string }[] = [
    { value: 'Active', label: 'Active' },
    { value: 'Resigned', label: 'Resigned' },
    { value: 'Retired', label: 'Retired' }
  ];

  activeSection = 'personal';
  teacherSections = [
    { id: 'personal', label: 'Personal Information', icon: 'bi-person' },
    { id: 'professional', label: 'Professional Information', icon: 'bi-briefcase' },
    { id: 'contact', label: 'Contact & Address', icon: 'bi-telephone' }
  ];

  constructor(
    private fb: FormBuilder,
    private teacherService: TeacherService,
    private departmentService:DepartmentService,
    private designationService: DesignationService,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.teacherForm = this.fb.group({
      employee_id: ['', Validators.required],
      first_name: ['', Validators.required],
      middle_name: [''],
      last_name: ['', Validators.required],
      gender: ['', Validators.required],
      date_of_birth: ['', Validators.required],
      mobile: [''],
      email: ['', [Validators.email]],
      address: [''],
      city: [''],
      state: [''],
      qualification: [''],
      experience_years: [0],
      joining_date: [new Date().toISOString().split('T')[0], Validators.required],
      designation: [''],
      designation_id: [''],
      department_id:[''],
      department: [''],
      specialization: [''],
      salary: [0],
      teacher_status: ['Active']  
    });
  }

  selectSection(id: string): void {
    this.activeSection = id;
  }

  getActiveSectionLabel(): string {
    return this.teacherSections.find(s => s.id === this.activeSection)?.label || 'Section';
  }

  ngOnInit(): void {
    this.loadDepartments();
    this.loadDesignations();
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.teacherId = parseInt(params['id']);
        this.loadTeacher();
      }
    });
  }

  loadDesignations(): void {
    this.designationService.getDesignations().subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data?.designations) {
          this.designations = response.data.designations;
        }
      }
    });
  }

  loadDepartments(): void {
    this.departmentService.getDepartments().subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data?.departments) {
          this.departments = response.data.departments;
        }
      }
    });
  }

  loadTeacher(): void {
    if (!this.teacherId) return;
    
    this.isLoading = true;
    this.teacherService.getTeacher(this.teacherId).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          const teacher = response.data.teacher;
          
          this.teacherForm.patchValue({
            employee_id: teacher.employee_id,
            first_name: teacher.first_name,
            middle_name: teacher.middle_name || '',
            last_name: teacher.last_name,
            gender: teacher.gender,
            date_of_birth: teacher.date_of_birth,
            mobile: teacher.mobile || teacher.user_mobile || '',
            email: teacher.email || '',
            address: teacher.address || '',
            city:teacher.city || '',
            state:teacher.state || '',
            qualification: teacher.qualification || '',
            experience_years: teacher.experience_years || 0,
            joining_date: teacher.joining_date,
            designation_id: teacher.designation_id || '',
            department_id: teacher.department_id || '',
            specialization: teacher.specialization || '',
            salary: teacher.salary || 0,
            teacher_status: teacher.teacher_status || 'Active'
          });
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading teacher:', error);
        this.isLoading = false;
      }
    });
  }

  private sectionByControl: { [key: string]: string } = {
    employee_id: 'personal', first_name: 'personal', middle_name: 'personal', last_name: 'personal',
    gender: 'personal', date_of_birth: 'personal',
    designation_id: 'professional', department_id: 'professional', qualification: 'professional',
    specialization: 'professional', experience_years: 'professional', joining_date: 'professional', salary: 'professional',
    mobile: 'contact', email: 'contact', address: 'contact', city: 'contact', state: 'contact', teacher_status: 'contact'
  };

  onSubmit(): void {
    if (this.teacherForm.invalid) {
      this.markFormGroupTouched(this.teacherForm);
      const firstInvalid = Object.keys(this.teacherForm.controls).find(
        key => this.teacherForm.get(key)?.invalid && this.teacherForm.get(key)?.touched
      );
      if (firstInvalid && this.sectionByControl[firstInvalid]) {
        this.activeSection = this.sectionByControl[firstInvalid];
      }
      return;
    }

    this.isSaving = true;
    const formValue = this.teacherForm.value;

    if (this.isEditMode && this.teacherId) {
      this.teacherService.updateTeacher(this.teacherId, formValue).subscribe({
        next: (response) => {
           console.log('Update response:', response);
          this.isSaving = false;
          if (response.status === 'success') {
            alert('Teacher updated successfully!');
            this.router.navigate(['/app/teachers/list']);
          } else {
            alert(response.message || 'Failed to update teacher');
          }
        },
        error: (error) => {
          this.isSaving = false;
          alert(error.error?.message || 'An error occurred');
        }
      });
    } else {
      this.teacherService.createTeacher(formValue).subscribe({
        next: (response) => {
                  console.log('Create response:', response);
          this.isSaving = false;
          if (response.status === 'success') {
            alert('Teacher created successfully!');
            this.router.navigate(['/app/teachers/list']);
          } else {
            alert(response.message || 'Failed to create teacher');
          }
        },
        error: (error) => {
          this.isSaving = false;
          alert(error.error?.message || 'An error occurred');
        }
      });
    }
  }

  markFormGroupTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      } else {
        control?.markAsTouched();
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/app/teachers/list']);
  }
}

