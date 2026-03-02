import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailSliderComponent } from '../../../shared/components/detail-slider/detail-slider.component';
import { StudentService } from '../../../shared/services/student.service';
import { FeeService } from '../../../shared/services/fee.service';
import { AttendanceService } from '../../../shared/services/attendance.service';
import { MarksheetService } from '../../../shared/services/marksheet.service';
import { HomeworkService } from '../../../shared/services/homework.service';
import { ClassworkService } from '../../../shared/services/classwork.service';
import { ReportService } from '../../../shared/services/report.service';
import { ToastService } from '../../../shared/services/toast.service';

export type StudentSliderTab = 'profile' | 'fees' | 'attendance' | 'marksheet' | 'performance' | 'homework' | 'classwork';

@Component({
  selector: 'app-student-detail-slider',
  standalone: true,
  imports: [CommonModule, FormsModule, DetailSliderComponent],
  templateUrl: './student-detail-slider.component.html',
  styleUrls: ['./student-detail-slider.component.scss']
})
export class StudentDetailSliderComponent implements OnInit, OnChanges {
  @Input() visible = false;
  @Input() student: any = null;
  @Output() close = new EventEmitter<void>();

  tabs: { id: StudentSliderTab; label: string; icon: string }[] = [
    { id: 'profile', label: 'Profile', icon: 'bi-person' },
    { id: 'fees', label: 'Fees Statement', icon: 'bi-wallet2' },
    { id: 'attendance', label: 'Attendance', icon: 'bi-calendar-check' },
    { id: 'marksheet', label: 'Marksheet', icon: 'bi-journal-text' },
    { id: 'performance', label: 'Performance Report', icon: 'bi-graph-up' },
    { id: 'homework', label: 'Homework Status', icon: 'bi-journal-bookmark' },
    { id: 'classwork', label: 'Classwork Status', icon: 'bi-pencil-square' }
  ];
  activeTab: StudentSliderTab = 'profile';
  loading = false;
  profileData: any = null;
  feesData: any[] = [];
  attendanceData: any[] = [];
  marksheetData: any[] = [];
  performanceData: any = null;
  homeworkData: any[] = [];
  classworkData: any[] = [];
  dateRange = { start: '', end: '' };

  constructor(
    private studentService: StudentService,
    private feeService: FeeService,
    private attendanceService: AttendanceService,
    private marksheetService: MarksheetService,
    private homeworkService: HomeworkService,
    private classworkService: ClassworkService,
    private reportService: ReportService,
    private toast: ToastService
  ) {
    const now = new Date();
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    this.dateRange.start = firstDay.toISOString().slice(0, 10);
    this.dateRange.end = lastDay.toISOString().slice(0, 10);
  }

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['student'] && this.student && this.visible) {
      this.activeTab = 'profile';
      this.loadProfile();
    }
    if (changes['visible'] && this.visible && this.student) {
      this.activeTab = 'profile';
      this.loadProfile();
    }
  }

  onClose(): void {
    this.close.emit();
  }

  setTab(tab: StudentSliderTab): void {
    this.activeTab = tab;
    if (!this.student) return;
    switch (tab) {
      case 'profile': this.loadProfile(); break;
      case 'fees': this.loadFees(); break;
      case 'attendance': this.loadAttendance(); break;
      case 'marksheet': this.loadMarksheet(); break;
      case 'performance': this.loadPerformance(); break;
      case 'homework': this.loadHomework(); break;
      case 'classwork': this.loadClasswork(); break;
    }
  }

  loadProfile(): void {
    if (!this.student?.student_id) return;
    this.loading = true;
    this.studentService.getStudent(this.student.student_id).subscribe({
      next: (res) => {
        this.loading = false;
        this.profileData = (res.status === 'success' && res.data?.student) ? res.data.student : this.student;
      },
      error: () => { this.loading = false; this.toast.show('Error loading profile', 'error'); }
    });
  }

  loadFees(): void {
    if (!this.student?.student_id) return;
    this.loading = true;
    this.feeService.getFees({ student_id: this.student.student_id, limit: 100 }).subscribe({
      next: (res) => {
        this.loading = false;
        this.feesData = (res.status === 'success' && res.data?.fees) ? res.data.fees : [];
      },
      error: () => { this.loading = false; this.toast.show('Error loading fees', 'error'); }
    });
  }

  loadAttendance(): void {
    if (!this.student?.student_id) return;
    this.loading = true;
    this.attendanceService.getAttendanceByStudent(this.student.student_id, this.dateRange.start, this.dateRange.end).subscribe({
      next: (res) => {
        this.loading = false;
        const data = res.status === 'success' && res.data;
        this.attendanceData = Array.isArray(data?.attendance) ? data.attendance : (data?.records ? data.records : []);
      },
      error: () => { this.loading = false; this.toast.show('Error loading attendance', 'error'); }
    });
  }

  loadMarksheet(): void {
    if (!this.student?.student_id) return;
    this.loading = true;
    const params: any = { limit: 100 };
    if (this.student.class_id) params.class_id = this.student.class_id;
    this.marksheetService.getMarksheets(params).subscribe({
      next: (res) => {
        this.loading = false;
        const list = (res.status === 'success' && res.data?.marksheets) ? res.data.marksheets : [];
        this.marksheetData = list.filter((m: any) => m.student_id == this.student.student_id);
      },
      error: () => { this.loading = false; this.toast.show('Error loading marksheets', 'error'); }
    });
  }

  loadPerformance(): void {
    if (!this.student?.student_id) return;
    this.loading = true;
    this.reportService.getStudentPerformanceReport({
      student_id: this.student.student_id,
      academic_year_id: this.student.academic_year_id || ''
    }).subscribe({
      next: (res) => {
        this.loading = false;
        this.performanceData = (res.status === 'success' && res.data) ? res.data : null;
      },
      error: () => { this.loading = false; this.performanceData = null; this.toast.show('Error loading performance', 'error'); }
    });
  }

  loadHomework(): void {
    if (!this.student?.class_id) { this.homeworkData = []; return; }
    this.loading = true;
    this.homeworkService.getHomeworks({ class_id: this.student.class_id, limit: 100 }).subscribe({
      next: (res) => {
        this.loading = false;
        this.homeworkData = (res.status === 'success' && res.data?.homeworks) ? res.data.homeworks : [];
      },
      error: () => { this.loading = false; this.toast.show('Error loading homework', 'error'); }
    });
  }

  loadClasswork(): void {
    if (!this.student?.class_id) { this.classworkData = []; return; }
    this.loading = true;
    this.classworkService.getClasswork({ class_id: this.student.class_id, limit: 100 }).subscribe({
      next: (res) => {
        this.loading = false;
        this.classworkData = (res.status === 'success' && res.data?.classwork) ? res.data.classwork : [];
      },
      error: () => { this.loading = false; this.toast.show('Error loading classwork', 'error'); }
    });
  }

  onDateRangeChange(): void {
    if (this.activeTab === 'attendance') this.loadAttendance();
  }

  get feesSummary(): { total: number; paid: number; pending: number } {
    const total = this.feesData.reduce((s, f) => s + (Number(f.fee_amount) || 0), 0);
    const paid = this.feesData.reduce((s, f) => s + (Number(f.paid_amount) || 0), 0);
    return { total, paid, pending: total - paid };
  }

  get attendanceSummary(): { present: number; absent: number; total: number } {
    const total = this.attendanceData.length;
    const present = this.attendanceData.filter((a: any) => a.is_present == 1 || a.attendance_type_code === 'P').length;
    return { total, present, absent: total - present };
  }
}
