import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SyllabusService } from '../../../shared/services/syllabus.service';
import { AcademicYearService } from '../../../shared/services/academic-year.service';
import { ClassService } from '../../../shared/services/class.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-syllabus-completion-report',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './syllabus-completion-report.component.html',
  styleUrls: ['./syllabus-completion-report.component.scss']
})
export class SyllabusCompletionReportComponent implements OnInit {
  reportForm: FormGroup;
  isLoading = false;
  reportData: any = null;
  
  academicYears: any[] = [];
  classes: any[] = [];

  constructor(
    private fb: FormBuilder,
    private syllabusService: SyllabusService,
    private academicYearService: AcademicYearService,
    private classService: ClassService,
    private toastService: ToastService
  ) {
    this.reportForm = this.fb.group({
      academic_year_id: [null],
      class_id: [null],
      subject_id: [null],
      show_delayed_only: [false]
    });
  }

  ngOnInit(): void {
    this.loadAcademicYears();
    this.loadClasses();
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

  generateReport(): void {
    this.isLoading = true;
    this.syllabusService.getCompletionReport(this.reportForm.value).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.status === 'success') {
          this.reportData = response.data;
          this.toastService.success('Completion report generated successfully');
        }
      },
      error: () => {
        this.isLoading = false;
        this.toastService.error('Failed to generate completion report');
      }
    });
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'completed': return 'success';
      case 'in_progress': return 'warning';
      case 'delayed': return 'danger';
      default: return 'secondary';
    }
  }

  exportReport(): void {
    if (!this.reportData) {
      this.toastService.warning('Please generate a report first');
      return;
    }
    this.syllabusService.exportCompletionReport(this.reportData).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          window.open(response.download_url, '_blank');
          this.toastService.success('Report exported successfully');
        }
      },
      error: () => {
        this.toastService.error('Failed to export report');
      }
    });
  }
}

