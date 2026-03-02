import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from '../../../shared/services/student.service';
import { ClassService } from '../../../shared/services/class.service';
import { AcademicYearService } from '../../../shared/services/academic-year.service';
import { SearchSelectComponent } from '../../../shared/components/search-select/search-select.component';

@Component({
  selector: 'app-student-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SearchSelectComponent],
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent implements OnInit {
  studentForm: FormGroup;
  isEditMode = false;
  studentId: number | null = null;
  isLoading = false;
  isSaving = false;
  classes: any[] = [];
  sections: any[] = [];
  academicYears: any[] = [];

  genderOptions: { value: string; label: string }[] = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Other', label: 'Other' }
  ];

  bloodGroupOptions: { value: string; label: string }[] = [
    { value: '', label: 'Select Blood Group' },
    { value: 'A+', label: 'A+' },
    { value: 'A-', label: 'A-' },
    { value: 'B+', label: 'B+' },
    { value: 'B-', label: 'B-' },
    { value: 'AB+', label: 'AB+' },
    { value: 'AB-', label: 'AB-' },
    { value: 'O+', label: 'O+' },
    { value: 'O-', label: 'O-' }
  ];

  get classOptions(): { value: number | null; label: string }[] {
    const all: { value: number | null; label: string }[] = [{ value: null, label: 'Select Class' }];
    const list = (this.classes || []).map(c => ({ value: c.class_id, label: c.class_name || '' }));
    return [...all, ...list];
  }

  get sectionOptions(): { value: number | null; label: string }[] {
    const all: { value: number | null; label: string }[] = [{ value: null, label: 'Select Section' }];
    const list = (this.sections || []).map(s => ({ value: s.section_id, label: s.section_name || '' }));
    return [...all, ...list];
  }

  get academicYearOptions(): { value: number | null; label: string }[] {
    const all: { value: number | null; label: string }[] = [{ value: null, label: 'Select Academic Year' }];
    const list = (this.academicYears || []).map(y => ({ value: y.academic_year_id, label: y.academic_year_name || '' }));
    return [...all, ...list];
  }

  parentRelationOptions: { value: string; label: string }[] = [
    { value: 'Father', label: 'Father' },
    { value: 'Mother', label: 'Mother' },
    { value: 'Guardian', label: 'Guardian' },
    { value: 'Other', label: 'Other' }
  ];

  activeSection = 'personal';
  studentSections = [
    { id: 'personal', label: 'Personal Information', icon: 'bi-person' },
    { id: 'academic', label: 'Academic Information', icon: 'bi-journal-bookmark' },
    { id: 'contact', label: 'Contact & Address', icon: 'bi-telephone' },
    { id: 'parent', label: 'Parent / Guardian', icon: 'bi-people' }
  ];

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private academicYearService: AcademicYearService,
    private classService: ClassService,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.studentForm = this.fb.group({
      admission_number: ['', Validators.required],
      first_name: ['', Validators.required],
      middle_name: [''],
      last_name: ['', Validators.required],
      gender: ['', Validators.required],
      date_of_birth: ['', Validators.required],
      class_id: [null, Validators.required],
      section_id: [null, Validators.required],
      roll_number: [''],
      blood_group: [''],
      mobile: [''],
      email: ['', [Validators.email]],
      address: [''],
      city:[''],
      state:[''],
      country:[''],
      pincode:[''],
      academic_year_id: [null, Validators.required],
      parent_name: [''],
      parent_mobile: [''],
      parent_email: ['', [Validators.email]],
      parent_relation: ['Father'],
      admission_date: [new Date().toISOString().split('T')[0], Validators.required]
    });
  }

  selectSection(id: string): void {
    this.activeSection = id;
  }

  getActiveSectionLabel(): string {
    return this.studentSections.find(s => s.id === this.activeSection)?.label || 'Section';
  }

  ngOnInit(): void {
    this.loadClasses();
    this.loadAcademicYears();
  
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.studentId = parseInt(params['id']);
        this.loadStudent();
      }
    });

    this.studentForm.get('class_id')?.valueChanges.subscribe(classId => {
      if (classId) {
        this.loadSections(classId);
      } else {
        this.sections = [];
      }
    });
  }
  loadAcademicYears(): void {
    this.academicYearService.getCurrentAcademicYearId().subscribe({
      next: (id) => {
        if (id != null) {
          this.studentForm.patchValue({ academic_year_id: id });
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

  loadSections(classId: number): void {
    this.classService.getSections(classId).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.sections = response.data.sections || [];
        }
      }
    });
  }

  // loadStudent(): void {
  //   if (!this.studentId) return;
    
  //   this.isLoading = true;
  //   this.studentService.getStudent(this.studentId).subscribe({
  //     next: (response) => {
  //       if (response.status === 'success' && response.data) {
  //         const student = response.data.student;
  //         const parent = response.data.parents?.[0];
          
  //         this.studentForm.patchValue({
  //           admission_number: student.admission_number,
  //           first_name: student.first_name,
  //           middle_name: student.middle_name || '',
  //           last_name: student.last_name,
  //           gender: student.gender,
  //           date_of_birth: student.date_of_birth,
  //           class_id: student.class_id,
  //           section_id: student.section_id,
  //           academic_year_id:student.academic_year_id,
  //           roll_number: student.roll_number || '',
  //           blood_group: student.blood_group || '',
  //           mobile: student.mobile || '',
  //           email: student.email || '',
  //           address: student.address || '',
  //           parent_name: parent?.parent_name || '',
  //           parent_mobile: parent?.parent_mobile || '',
  //           parent_email: parent?.parent_email || '',
  //           parent_relation: parent?.relation || 'Father',
  //           admission_date: student.admission_date
  //         });

  //         if (student.class_id) {
  //           this.loadSections(student.class_id);
  //         }
  //       }
  //       this.isLoading = false;
  //     },
  //     error: (error) => {
  //       console.error('Error loading student:', error);
  //       this.isLoading = false;
  //     }
  //   });
  // }
  loadStudent(): void {
  if (!this.studentId) return;

  this.isLoading = true;

  this.studentService.getStudent(this.studentId).subscribe({
    next: (response) => {
      if (response.status === 'success' && response.data) {
        const student = response.data.student;

        // Determine parent/guardian info from student object
        let parentName = '';
        let parentMobile = '';
        let parentEmail = '';
        let parentRelation = 'Father';

        if (student.father_name || student.father_mobile || student.father_email) {
          parentName = student.father_name || '';
          parentMobile = student.father_mobile || '';
          parentEmail = student.father_email || '';
          parentRelation = 'Father';
        } else if (student.mother_name || student.mother_mobile || student.mother_email) {
          parentName = student.mother_name || '';
          parentMobile = student.mother_mobile || '';
          parentEmail = student.mother_email || '';
          parentRelation = 'Mother';
        } else if (student.guardian_name || student.guardian_mobile || student.guardian_email) {
          parentName = student.guardian_name || '';
          parentMobile = student.guardian_mobile || '';
          parentEmail = student.guardian_email || '';
          parentRelation = 'Guardian';
        }

        // Patch all form values including parent fields
        this.studentForm.patchValue({
          admission_number: student.admission_number,
          first_name: student.first_name,
          middle_name: student.middle_name || '',
          last_name: student.last_name,
          gender: student.gender,
          date_of_birth: student.date_of_birth,
          class_id: student.class_id,
          section_id: student.section_id, // leave section handling as-is
          academic_year_id: student.academic_year_id,
          roll_number: student.roll_number || '',
          blood_group: student.blood_group || '',
          mobile: student.mobile || '',
          email: student.email || '',
          address: student.address || '',
           city:student.city || '',
          state:student.state || '',
          country:student.country || '',
          pincode:student.pincode || '',
          parent_name: parentName,
          parent_mobile: parentMobile,
          parent_email: parentEmail,
          parent_relation: parentRelation,
          admission_date: student.admission_date
        });
      }
      this.isLoading = false;
    },
    error: (error) => {
      console.error('Error loading student:', error);
      this.isLoading = false;
    }
  });
}

// loadStudent(): void {
//   if (!this.studentId) return;

//   this.isLoading = true;
//   console.log('Loading student with ID:', this.studentId);

//   this.studentService.getStudent(this.studentId).subscribe({
//     next: (response) => {
//       console.log('Student response:', response);

//       if (response.status === 'success' && response.data) {
//         const student = response.data.student;
//         const parent = response.data.parents?.[0] || {
//           parent_name: student.father_name || '',
//           parent_mobile: student.father_mobile || '',
//           parent_email: student.father_email || '',
//           relation: 'Father'
//         };

//         console.log('Student data:', student);
//         console.log('Parent data fallback:', parent);

//         // patch form except section_id
//         this.studentForm.patchValue({
//           admission_number: student.admission_number,
//           first_name: student.first_name,
//           middle_name: student.middle_name || '',
//           last_name: student.last_name,
//           gender: student.gender,
//           date_of_birth: student.date_of_birth,
//           class_id: student.class_id,
//           academic_year_id: student.academic_year_id,
//           roll_number: student.roll_number || '',
//           blood_group: student.blood_group || '',
//           mobile: student.mobile || '',
//           email: student.email || '',
//           address: student.address || '',
//           parent_name: parent.parent_name,
//           parent_mobile: parent.parent_mobile,
//           parent_email: parent.parent_email,
//           parent_relation: parent.relation,
//           admission_date: student.admission_date
//         });

//         if (student.class_id) {
//           console.log('Loading sections for class_id:', student.class_id);

//           this.classService.getSections(student.class_id).subscribe({
//             next: (secResp) => {
//               console.log('Sections response:', secResp);
//               if (secResp.status === 'success' && secResp.data) {
//                 this.sections = secResp.data.sections || [];
//                 console.log('Sections loaded:', this.sections);

//                 // patch section_id after sections are loaded
//                 this.studentForm.patchValue({ section_id: student.section_id });
//                 console.log('Form after setting section_id:', this.studentForm.value);
//               }
//             },
//             error: (err) => console.error('Error loading sections:', err)
//           });
//         }
//       }
//       this.isLoading = false;
//     },
//     error: (error) => {
//       console.error('Error loading student:', error);
//       this.isLoading = false;
//     }
//   });
// }
  private sectionByControl: { [key: string]: string } = {
    admission_number: 'personal', first_name: 'personal', middle_name: 'personal', last_name: 'personal',
    gender: 'personal', date_of_birth: 'personal', blood_group: 'personal',
    class_id: 'academic', section_id: 'academic', roll_number: 'academic', admission_date: 'academic', academic_year_id: 'academic',
    mobile: 'contact', email: 'contact', address: 'contact', city: 'contact', state: 'contact', country: 'contact', pincode: 'contact',
    parent_name: 'parent', parent_relation: 'parent', parent_mobile: 'parent', parent_email: 'parent'
  };

  onSubmit(): void {
    if (this.studentForm.invalid) {
      this.markFormGroupTouched(this.studentForm);
      const firstInvalid = Object.keys(this.studentForm.controls).find(
        key => this.studentForm.get(key)?.invalid && this.studentForm.get(key)?.touched
      );
      if (firstInvalid && this.sectionByControl[firstInvalid]) {
        this.activeSection = this.sectionByControl[firstInvalid];
      }
      return;
    }

    this.isSaving = true;

  // Copy form value
  const formValue = { ...this.studentForm.value };

  // --- Map parent fields to backend columns ---
  const relation = formValue.parent_relation || 'Father';

  if (relation === 'Father') {
    formValue.father_name = formValue.parent_name;
    formValue.father_mobile = formValue.parent_mobile;
    formValue.father_email = formValue.parent_email;
  } else if (relation === 'Mother') {
    formValue.mother_name = formValue.parent_name;
    formValue.mother_mobile = formValue.parent_mobile;
    formValue.mother_email = formValue.parent_email;
  } else if (relation === 'Guardian') {
    formValue.guardian_name = formValue.parent_name;
    formValue.guardian_mobile = formValue.parent_mobile;
    formValue.guardian_email = formValue.parent_email;
  }

  // Remove unused parent fields so backend ignores them
  delete formValue.parent_name;
  delete formValue.parent_mobile;
  delete formValue.parent_email;
  delete formValue.parent_relation;

  // --- Send to backend ---
  if (this.isEditMode && this.studentId) {
    this.studentService.updateStudent(this.studentId, formValue).subscribe({
      next: (response) => {
        this.isSaving = false;
        if (response.status === 'success') {
          alert('Student updated successfully!');
          this.router.navigate(['/app/students/list']);
        } else {
          alert(response.message || 'Failed to update student');
        }
      },
      error: (error) => {
        this.isSaving = false;
        alert(error.error?.message || 'An error occurred');
      }
    });
  } else {
    this.studentService.createStudent(formValue).subscribe({
      next: (response) => {
        this.isSaving = false;
        if (response.status === 'success') {
          alert('Student created successfully!');
          this.router.navigate(['/app/students/list']);
        } else {
          alert(response.message || 'Failed to create student');
        }
      },
      error: (error) => {
        this.isSaving = false;
        alert(error.error?.message || 'An error occurred');
      }
    });
  }
}

  // onSubmit(): void {
  //   if (this.studentForm.invalid) {
  //     this.markFormGroupTouched(this.studentForm);
  //     return;
  //   }

  //   this.isSaving = true;
  //   const formValue = this.studentForm.value;

  //   if (this.isEditMode && this.studentId) {
  //     this.studentService.updateStudent(this.studentId, formValue).subscribe({
  //       next: (response) => {
  //         this.isSaving = false;
  //         if (response.status === 'success') {
  //           alert('Student updated successfully!');
  //           this.router.navigate(['/app/students/list']);
  //         } else {
  //           alert(response.message || 'Failed to update student');
  //         }
  //       },
  //       error: (error) => {
  //         this.isSaving = false;
  //         alert(error.error?.message || 'An error occurred');
  //       }
  //     });
  //   } else {
  //     this.studentService.createStudent(formValue).subscribe({
  //       next: (response) => {
  //         this.isSaving = false;
  //         if (response.status === 'success') {
  //           alert('Student created successfully!');
  //           this.router.navigate(['/app/students/list']);
  //         } else {
  //           alert(response.message || 'Failed to create student');
  //         }
  //       },
  //       error: (error) => {
  //         this.isSaving = false;
  //         alert(error.error?.message || 'An error occurred');
  //       }
  //     });
  //   }
  // }

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
    this.router.navigate(['/app/students/list']);
  }
}

