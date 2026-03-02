import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FeeService } from '../../../shared/services/fee.service';
import { ClassService } from '../../../shared/services/class.service';
import { AcademicYearService } from '../../../shared/services/academic-year.service';
import { StudentService } from '../../../shared/services/student.service';
import { SearchSelectComponent } from '../../../shared/components/search-select/search-select.component';

@Component({
  selector: 'app-fee-assign',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SearchSelectComponent],
  templateUrl: './fee-assign.component.html',
  styleUrls: ['./fee-assign.component.scss']
})
export class FeeAssignComponent implements OnInit {
  feeForm: FormGroup;
  isSaving = false;
  classes: any[] = [];
  sections: any[] = [];
  feeTypes: any[] = [];
  students: any[] = [];
  selectedStudents: number[] = [];

  get feeTypeOptions(): { value: number | null; label: string }[] {
    const select: { value: number | null; label: string }[] = [{ value: null, label: 'Select Fee Type' }];
    const list = (this.feeTypes || []).map((t) => ({ value: t.fee_type_id, label: t.fee_type_name || '' }));
    return [...select, ...list];
  }

  get classOptions(): { value: number | null; label: string }[] {
    const all: { value: number | null; label: string }[] = [{ value: null, label: 'All Classes' }];
    const list = (this.classes || []).map((c) => ({ value: c.class_id, label: c.class_name || '' }));
    return [...all, ...list];
  }

  get sectionOptions(): { value: number | null; label: string }[] {
    const all: { value: number | null; label: string }[] = [{ value: null, label: 'All Sections' }];
    const list = (this.sections || []).map((s) => ({ value: s.section_id, label: s.section_name || '' }));
    return [...all, ...list];
  }

  constructor(
    private fb: FormBuilder,
    private feeService: FeeService,
    private classService: ClassService,
    private academicYearService: AcademicYearService,
    private studentService: StudentService,
    public router: Router
  ) {
    this.feeForm = this.fb.group({
      fee_type_id: [null, Validators.required],
      class_id: [null],
      section_id: [null],
      fee_amount: [0, [Validators.required, Validators.min(0.01)]],
      due_date: ['', Validators.required],
      academic_year_id:[null]
      
    
    });
  }

  ngOnInit(): void {
    this.loadClasses();
    this.loadFeeTypes();
    this.academicYearService.getCurrentAcademicYearId().subscribe({
      next: (id: number | null) => {
        if (id != null) {
          this.feeForm.patchValue({ academic_year_id: id });
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

  loadFeeTypes(): void {
    this.feeService.getFeeTypes().subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.feeTypes = response.data.fee_types || [];
        }
      }
    });
  }

  onClassChange(): void {
    const classId = this.feeForm.get('class_id')?.value;
    if (classId) {
      this.classService.getSections(classId).subscribe({
        next: (response) => {
          if (response.status === 'success' && response.data) {
            this.sections = response.data.sections || [];
          }
        }
      });
      this.loadStudents(classId);
    } else {
      this.sections = [];
      this.students = [];
    }
  }

  onSectionChange(): void {
    const classId = this.feeForm.get('class_id')?.value;
    const sectionId = this.feeForm.get('section_id')?.value;
    if (classId && sectionId) {
      this.loadStudents(classId, sectionId);
    }
  }

  loadStudents(classId: number, sectionId?: number): void {
    const params: any = { class_id: classId };
    if (sectionId) {
      params.section_id = sectionId;
    }

    this.studentService.getStudents(params).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.students = response.data.students || [];
        }
      }
    });
  }

  toggleStudent(studentId: number): void {
    const index = this.selectedStudents.indexOf(studentId);
    if (index > -1) {
      this.selectedStudents.splice(index, 1);
    } else {
      this.selectedStudents.push(studentId);
    }
  }

  selectAll(): void {
    this.selectedStudents = this.students.map(s => s.student_id);
  }

  deselectAll(): void {
    this.selectedStudents = [];
  }

 onSubmit(): void {
  if (this.feeForm.invalid) {
    this.markFormGroupTouched(this.feeForm);
    return;
  }

  if (this.selectedStudents.length === 0) {
    alert('Please select at least one student');
    return;
  }

  this.isSaving = true;
  const formValue = this.feeForm.value;

  // Map selected students to the structure backend expects
  const studentsPayload = this.selectedStudents.map(studentId => {
    // find the student from loaded students
    const student = this.students.find(s => s.student_id === studentId);
    return {
      student_id: studentId,
      fee_amount: formValue.fee_amount,     // optional, will default in backend if missing
      due_date: formValue.due_date,         // optional, will default in backend if missing
      class_id: student?.class_id || null,  // optional but recommended
      section_id: student?.section_id || null
    };
  });

  const assignmentData = {
    fee_type_id: formValue.fee_type_id,
    students: studentsPayload, // ✅ backend expects this key
    academic_year_id: formValue.academic_year_id,
  };

  console.log('Submitting fee assignment:', assignmentData); // 🔍 debug payload

  this.feeService.assignFeesToStudents(assignmentData).subscribe({
    next: (response) => {
      this.isSaving = false;
      if (response.status === 'success') {
        alert(`Fees assigned successfully to ${this.selectedStudents.length} students!`);
        this.router.navigate(['/app/fees/list']);
      } else {
        alert(response.message || 'Failed to assign fees');
      }
    },
    error: (error) => {
      this.isSaving = false;
      console.error('Assign fees error:', error);
      alert(error.error?.message || 'An error occurred');
    }
  });
}

  markFormGroupTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control?.markAsTouched();
    });
  }

  cancel(): void {
    this.router.navigate(['/app/fees/list']);
  }
}

