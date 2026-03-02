import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReportService } from '../../shared/services/report.service';
import { ClassService } from '../../shared/services/class.service';
import { StudentService } from '../../shared/services/student.service';
import { AcademicYearService } from '../../shared/services/academic-year.service';
import { ToastService } from '../../shared/services/toast.service';

@Component({
  selector: 'app-student-performance',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './student-performance.component.html',
  styleUrls: ['./student-performance.component.scss']
})
export class StudentPerformanceComponent implements OnInit {
  performanceData: any[] = [];
  overallPerformance: any = null;
  subjectPerformance: any[] = [];
  comparativeData: any = null;
  loading = false;
  academicYearId: number | null = null;
  classId: number | null = null;
  studentId: number | null = null;
  classes: any[] = [];
  students: any[] = [];
  academicYears: any[] = [];

  constructor(
    private reportService: ReportService,
    private classService: ClassService,
    private studentService: StudentService,
    private academicYearService: AcademicYearService,
    private toast: ToastService
  ) {}
  ngOnInit(): void {
    this.classService.getClasses({ limit: 200 }).subscribe(r => { if (r.status === 'success' && r.data?.classes) this.classes = r.data.classes; });
    this.academicYearService.getAcademicYears({ limit: 50 }).subscribe(r => {
      if (r.status === 'success' && r.data?.academic_years) this.academicYears = r.data.academic_years;
      else if (r.status === 'success' && r.data?.list) this.academicYears = r.data.list;
      if (this.academicYears.length) this.academicYearId = this.academicYears[0].academic_year_id ?? this.academicYears[0].id;
    });
  }
  onClassChange(): void {
    this.students = [];
    this.studentId = null;
    if (this.classId) {
      this.studentService.getStudents({ class_id: this.classId, limit: 500 }).subscribe(r => {
        if (r.status === 'success' && r.data?.students) this.students = r.data.students;
      });
    }
    this.load();
  }
  load(): void {
    if (!this.academicYearId) {
      this.toast.show('Please select academic year', 'warning');
      return;
    }
    this.loading = true;
    const params: any = { academic_year_id: this.academicYearId };
    if (this.classId) params.class_id = this.classId;
    if (this.studentId) params.student_id = this.studentId;
    this.reportService.getStudentPerformanceReport(params).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === 'success' && res.data) {
          this.overallPerformance = res.data.overall_performance ?? null;
          this.subjectPerformance = res.data.subject_performance ?? [];
          this.comparativeData = res.data.comparative_data ?? null;
          this.performanceData = this.subjectPerformance;
        } else {
          this.overallPerformance = null;
          this.subjectPerformance = [];
          this.comparativeData = null;
          this.performanceData = [];
        }
      },
      error: () => { this.loading = false; this.performanceData = []; this.subjectPerformance = []; this.overallPerformance = null; this.toast.show('Error loading performance', 'error'); }
    });
  }
}
