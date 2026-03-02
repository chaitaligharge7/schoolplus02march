import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AttendanceService } from '../../../shared/services/attendance.service';
import { ClassService } from '../../../shared/services/class.service';
import { DateFormatPipe } from '../../../shared/pipes/date-format.pipe';

@Component({
  selector: 'app-attendance-view',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DateFormatPipe],
  templateUrl: './attendance-view.component.html',
  styleUrls: ['./attendance-view.component.scss']
})
export class AttendanceViewComponent implements OnInit {
  attendanceData: any[] = [];
  classes: any[] = [];
  sections: any[] = [];
  isLoading = false;
  filterForm: FormGroup;
  attendanceSummary: any = {
    total: 0,
    present: 0,
    absent: 0,
    late: 0,
    percentage: 0
  };

  constructor(
    private fb: FormBuilder,
    private attendanceService: AttendanceService,
    private classService: ClassService
  ) {
    this.filterForm = this.fb.group({
      class_id: [null],
      section_id: [null],
      start_date: [new Date().toISOString().split('T')[0]],
      end_date: [new Date().toISOString().split('T')[0]]
    });
  }

  ngOnInit(): void {
    this.loadClasses();
    
    this.filterForm.get('class_id')?.valueChanges.subscribe(classId => {
      if (classId) {
        this.loadSections(classId);
      } else {
        this.sections = [];
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

  loadAttendance(): void {
    if (this.filterForm.invalid) {
      return;
    }

    this.isLoading = true;
    const params = this.filterForm.value;

    this.attendanceService.getAttendance(params).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.status === 'success' && response.data) {
          this.attendanceData = response.data.attendance || [];
          this.calculateSummary();
        }
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

calculateSummary(): void {
  const total = this.attendanceData.length;

  const presentCount = this.attendanceData.filter(
    (a: any) => a.attendance_type_name === 'Present' || a.attendance_type_name === 'Late' || a.attendance_type_name === 'Half Day'
  ).length;

  const lateCount = this.attendanceData.filter(
    (a: any) => a.attendance_type_name === 'Late'
  ).length;

  const absentCount = this.attendanceData.filter(
    (a: any) => a.attendance_type_name === 'Absent'
  ).length;

  const percentage = total > 0 ? Math.round((presentCount / total) * 100) : 0;

  this.attendanceSummary = {
    total,
    present: presentCount,
    absent: absentCount,
    late: lateCount,
    percentage
  };
}

  getStatusClass(status: string): string {
    switch (status) {
      case 'Present':
        return 'badge-success';
      case 'Absent':
        return 'badge-danger';
      case 'Late':
        return 'badge-warning';
      case 'Half Day':
        return 'badge-info';
      default:
        return 'badge-secondary';
    }
  }

  // calculateSummary(): void {
  //   this.attendanceSummary = {
  //     total: this.attendanceData.length,
  //     present: this.attendanceData.filter((a: any) => a.attendance_status === 'Present').length,
  //     absent: this.attendanceData.filter((a: any) => a.attendance_status === 'Absent').length,
  //     late: this.attendanceData.filter((a: any) => a.attendance_status === 'Late').length,
  //     percentage: 0
  //   };
    
  //   if (this.attendanceSummary.total > 0) {
  //     this.attendanceSummary.percentage = Math.round(
  //       (this.attendanceSummary.present / this.attendanceSummary.total) * 100
  //     );
  //   }
  // }

  // getStatusClass(status: string): string {
  //   switch (status) {
  //     case 'Present':
  //       return 'badge-success';
  //     case 'Absent':
  //       return 'badge-danger';
  //     case 'Late':
  //       return 'badge-warning';
  //     default:
  //       return 'badge-secondary';
  //   }
  // }
}

