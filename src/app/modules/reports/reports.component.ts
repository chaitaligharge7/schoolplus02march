import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ReportService } from '../../shared/services/report.service';
import { AcademicYearService } from '../../shared/services/academic-year.service';
import { ClassService } from '../../shared/services/class.service';
import { ToastService } from '../../shared/services/toast.service';
import { DateFormatPipe } from '../../shared/pipes/date-format.pipe';
import { CurrencyFormatPipe } from '../../shared/pipes/currency-format.pipe';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DateFormatPipe, CurrencyFormatPipe],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  activeTab: string = 'weekly';
  academicYears: any[] = [];
  classes: any[] = [];
  isLoading = false;
  
  weeklyReport: any = null;
  monthlyReport: any = null;
  dailyReport: any = null;
  subjectWiseReport: any = null;
  studentPerformanceReport: any = null;
  classworkReport: any = null;
  hwCwAnalysisReport: any = null;
  coordinatorCwHwReport: any = null;
  attendanceReport: any = null;
  feeReport: any = null;
  today = new Date();

  weeklyForm: FormGroup;
  monthlyForm: FormGroup;
  dailyForm: FormGroup;
  subjectWiseForm: FormGroup;
  studentPerformanceForm: FormGroup;
  classworkForm: FormGroup;
  hwCwAnalysisForm: FormGroup;
  coordinatorCwHwForm: FormGroup;
  attendanceForm: FormGroup;
  feeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private reportService: ReportService,
    private academicYearService: AcademicYearService,
    private classService: ClassService,
    private toastService: ToastService
  ) {
    this.weeklyForm = this.fb.group({
      week_start: [null],
      week_end: [null]
    });

    this.monthlyForm = this.fb.group({
      month: [new Date().getMonth() + 1],
      year: [new Date().getFullYear()]
    });

    this.subjectWiseForm = this.fb.group({
      academic_year_id: [null],
      class_id: [null],
      subject_id: [null]
    });

    this.attendanceForm = this.fb.group({
      start_date: [null],
      end_date: [null],
      class_id: [null],
      section_id: [null]
    });

    this.feeForm = this.fb.group({
      start_date: [null],
      end_date: [null],
      class_id: [null],
      fee_group_id: [null]
    });

    this.dailyForm = this.fb.group({
      report_date: [new Date().toISOString().split('T')[0]],
      report_type: ['summary']
    });

    this.studentPerformanceForm = this.fb.group({
      academic_year_id: [null],
      student_id: [null],
      class_id: [null],
      section_id: [null],
      report_period: ['monthly']
    });

    this.classworkForm = this.fb.group({
      academic_year_id: [null],
      class_id: [null],
      section_id: [null],
      subject_id: [null],
      teacher_id: [null],
      report_period: ['monthly']
    });

    this.hwCwAnalysisForm = this.fb.group({
      academic_year_id: [null],
      class_id: [null],
      section_id: [null],
      analysis_type: ['by_subject']
    });

    this.coordinatorCwHwForm = this.fb.group({
      academic_year_id: [null],
      coordinator_id: [null],
      class_id: [null],
      report_period: ['monthly']
    });
  }

  ngOnInit(): void {
    this.loadAcademicYears();
    this.loadClasses();
    this.setDefaultDates();
  }

  setDefaultDates(): void {
    const today = new Date();
    const monday = new Date(today);
    monday.setDate(today.getDate() - (today.getDay() + 6) % 7);
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);

    this.weeklyForm.patchValue({
      week_start: monday.toISOString().split('T')[0],
      week_end: sunday.toISOString().split('T')[0]
    });

    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    this.attendanceForm.patchValue({
      start_date: firstDay.toISOString().split('T')[0],
      end_date: lastDay.toISOString().split('T')[0]
    });

    this.feeForm.patchValue({
      start_date: firstDay.toISOString().split('T')[0],
      end_date: lastDay.toISOString().split('T')[0]
    });
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

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  generateWeeklyReport(): void {
    this.isLoading = true;
    this.reportService.getWeeklyReport(this.weeklyForm.value).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.weeklyReport = response.data;
          this.toastService.success('Weekly report generated successfully');
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error('Failed to generate weekly report');
        this.isLoading = false;
      }
    });
  }

  generateMonthlyReport(): void {
    this.isLoading = true;
    this.reportService.getMonthlyReport(this.monthlyForm.value).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.monthlyReport = response.data;
          this.toastService.success('Monthly report generated successfully');
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error('Failed to generate monthly report');
        this.isLoading = false;
      }
    });
  }

  generateSubjectWiseReport(): void {
    if (!this.subjectWiseForm.value.academic_year_id) {
      this.toastService.warning('Please select academic year');
      return;
    }
    this.isLoading = true;
    this.reportService.getSubjectWiseReport(this.subjectWiseForm.value).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.subjectWiseReport = response.data;
          this.toastService.success('Subject-wise report generated successfully');
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error('Failed to generate subject-wise report');
        this.isLoading = false;
      }
    });
  }

  generateAttendanceReport(): void {
    this.isLoading = true;
    this.reportService.getAttendanceReport(this.attendanceForm.value).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.attendanceReport = response.data;
          this.toastService.success('Attendance report generated successfully');
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error('Failed to generate attendance report');
        this.isLoading = false;
      }
    });
  }

  generateFeeReport(): void {
    this.isLoading = true;
    this.reportService.getFeeReport(this.feeForm.value).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.feeReport = response.data;
          this.toastService.success('Fee report generated successfully');
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error('Failed to generate fee report');
        this.isLoading = false;
      }
    });
  }

  getMonthName(month: number): string {
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];
    return months[month - 1] || '';
  }

  printReport(elementId: string, title: string): void {
    const el = document.getElementById(elementId);
    if (!el) return;
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      this.toastService.error('Please allow popups to print');
      return;
    }
    const styles = `
      body { font-family: 'Segoe UI', system-ui, sans-serif; margin: 20px; color: #1f2937; }
      .no-print { display: none !important; }
      .print-only { display: block !important; }
      .report-print-header { text-align: center; border-bottom: 2px solid #1f2937; padding-bottom: 10px; margin-bottom: 16px; }
      .report-print-title { font-size: 18pt; margin: 0 0 4px 0; font-weight: 700; }
      .report-print-date { font-size: 10pt; color: #6b7280; margin: 0; }
      .summary-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px; margin-top: 16px; }
      .summary-card { border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; break-inside: avoid; }
      .summary-label { font-size: 11px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
      .summary-value { font-size: 20px; font-weight: 700; color: #1f2937; }
      .summary-icon { display: none; }
      @page { size: A4; margin: 15mm; }
    `;
    printWindow.document.write(`
      <!DOCTYPE html><html><head><title>${title}</title><style>${styles}</style></head><body>
      ${el.innerHTML}
      </body></html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => { printWindow.print(); printWindow.close(); }, 300);
  }

  generateDailyReport(): void {
    this.isLoading = true;
    this.reportService.getDailyReport(this.dailyForm.value).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.dailyReport = response.data;
          this.toastService.success('Daily report generated successfully');
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error('Failed to generate daily report');
        this.isLoading = false;
      }
    });
  }

  generateStudentPerformanceReport(): void {
    if (!this.studentPerformanceForm.value.academic_year_id) {
      this.toastService.warning('Please select academic year');
      return;
    }
    this.isLoading = true;
    this.reportService.getStudentPerformanceReport(this.studentPerformanceForm.value).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.studentPerformanceReport = response.data;
          this.toastService.success('Student performance report generated successfully');
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error('Failed to generate student performance report');
        this.isLoading = false;
      }
    });
  }

  generateClassworkReport(): void {
    if (!this.classworkForm.value.academic_year_id) {
      this.toastService.warning('Please select academic year');
      return;
    }
    this.isLoading = true;
    this.reportService.getClassworkReport(this.classworkForm.value).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.classworkReport = response.data;
          this.toastService.success('Classwork report generated successfully');
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error('Failed to generate classwork report');
        this.isLoading = false;
      }
    });
  }

  generateHwCwAnalysisReport(): void {
    if (!this.hwCwAnalysisForm.value.academic_year_id) {
      this.toastService.warning('Please select academic year');
      return;
    }
    this.isLoading = true;
    this.reportService.getHwCwAnalysisReport(this.hwCwAnalysisForm.value).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.hwCwAnalysisReport = response.data;
          this.toastService.success('HW/CW analysis report generated successfully');
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error('Failed to generate HW/CW analysis report');
        this.isLoading = false;
      }
    });
  }

  generateCoordinatorCwHwReport(): void {
    if (!this.coordinatorCwHwForm.value.academic_year_id) {
      this.toastService.warning('Please select academic year');
      return;
    }
    this.isLoading = true;
    this.reportService.getCoordinatorCwHwReport(this.coordinatorCwHwForm.value).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.coordinatorCwHwReport = response.data;
          this.toastService.success('Coordinator CW/HW report generated successfully');
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error('Failed to generate coordinator CW/HW report');
        this.isLoading = false;
      }
    });
  }
}
