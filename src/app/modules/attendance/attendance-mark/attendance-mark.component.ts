import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AttendanceService } from '../../../shared/services/attendance.service';
import { ClassService } from '../../../shared/services/class.service';

@Component({
  selector: 'app-attendance-mark',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  templateUrl: './attendance-mark.component.html',
  styleUrls: ['./attendance-mark.component.scss']
})
export class AttendanceMarkComponent implements OnInit {
  attendanceForm: FormGroup;
  students: any[] = [];
  classes: any[] = [];
  sections: any[] = [];
  isLoading = false;
  isSaving = false;
  selectedDate = new Date().toISOString().split('T')[0];
  attendanceTypes: any[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private attendanceService: AttendanceService,
    private classService: ClassService
  ) {
    this.attendanceForm = this.fb.group({
      class_id: [null],
      section_id: [null],
      attendance_date: [this.selectedDate]
    });
  }

  ngOnInit(): void {
    this.loadClasses();
    this.loadAttendanceTypes();
    
    // Get class/section from route params if available
    this.route.queryParams.subscribe(params => {
      if (params['class_id']) {
        this.attendanceForm.patchValue({ class_id: parseInt(params['class_id']) });
        this.onClassChange(parseInt(params['class_id']));
      }
      if (params['section_id']) {
        this.attendanceForm.patchValue({ section_id: parseInt(params['section_id']) });
      }
      if (params['date']) {
        this.selectedDate = params['date'];
        this.attendanceForm.patchValue({ attendance_date: params['date'] });
      }
    });
  }

  loadClasses(): void {
    this.classService.getClasses().subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.classes = response.data.classes || [];
        }
      },
      error: (error) => {
        console.error('Error loading classes:', error);
      }
    });
  }

  loadAttendanceTypes(): void {
    this.attendanceService.getAttendanceTypes().subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.attendanceTypes = response.data.attendance_types || [];
        }
      },
      error: (error) => {
        console.error('Error loading attendance types:', error);
      }
    });
  }

  onClassChange(classId: number | null): void {
    if (classId) {
      this.classService.getSections(classId).subscribe({
        next: (response) => {
          if (response.status === 'success' && response.data) {
            this.sections = response.data.sections || [];
          }
        },
        error: (error) => {
          console.error('Error loading sections:', error);
        }
      });
    } else {
      this.sections = [];
      this.students = [];
    }
  }

  onDateChange(): void {
    this.loadAttendance();
  }

  loadAttendance(): void {
    const formValue = this.attendanceForm.value;
    if (!formValue.class_id || !formValue.section_id || !formValue.attendance_date) {
      return;
    }

    this.isLoading = true;
    this.attendanceService.getAttendanceByClassSection(
      formValue.class_id,
      formValue.section_id,
      formValue.attendance_date
    ).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.students = response.data.attendance || [];
          // Initialize attendance type for students without attendance
          this.students.forEach(student => {
            if (!student.attendance_type_id) {
              // Default to absent
              const absentType = this.attendanceTypes.find(t => t.attendance_type_code === 'ABSENT');
              if (absentType) {
                student.attendance_type_id = absentType.attendance_type_id;
              }
            }
          });
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading attendance:', error);
        this.isLoading = false;
      }
    });
  }

  onSectionChange(): void {
    this.loadAttendance();
  }

  markAttendance(): void {
    if (this.attendanceForm.invalid || this.students.length === 0) {
      return;
    }

    this.isSaving = true;
    const formValue = this.attendanceForm.value;

    const attendanceData = this.students.map(student => ({
      student_id: student.student_id,
      attendance_type_id: student.attendance_type_id,
      remarks: student.remarks || ''
    }));

    const payload = {
      attendance_date: formValue.attendance_date,
      class_id: formValue.class_id,
      section_id: formValue.section_id,
      attendance_data: attendanceData
    };

    this.attendanceService.markAttendance(payload).subscribe({
      next: (response) => {
        this.isSaving = false;
        if (response.status === 'success') {
          alert('Attendance marked successfully!');
          this.loadAttendance();
        } else {
          alert(response.message || 'Failed to mark attendance');
        }
      },
      error: (error) => {
        this.isSaving = false;
        alert(error.error?.message || 'An error occurred while marking attendance');
        console.error('Error marking attendance:', error);
      }
    });
  }

  getAttendanceTypeName(typeId: number): string {
    const type = this.attendanceTypes.find(t => t.attendance_type_id === typeId);
    return type ? type.attendance_type_name : 'Unknown';
  }
  markAllPresent(): void {
  if (!this.students || this.students.length === 0) return;

  // Find first type labeled as Present
  const presentType = this.attendanceTypes.find(t => t.attendance_type_name.toLowerCase().includes('present'));
  if (!presentType) return;

  this.students = this.students.map(student => ({
    ...student,
    attendance_type_id: presentType.attendance_type_id
  }));
}

markAllAbsent(): void {
  if (!this.students || this.students.length === 0) return;

  // Find first type labeled as Absent
  const absentType = this.attendanceTypes.find(t => t.attendance_type_name.toLowerCase().includes('absent'));
  if (!absentType) return;

  this.students = this.students.map(student => ({
    ...student,
    attendance_type_id: absentType.attendance_type_id
  }));
}

}

