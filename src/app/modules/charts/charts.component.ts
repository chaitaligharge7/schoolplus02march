import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import Chart from 'chart.js/auto';
import { ChartService } from '../../shared/services/chart.service';
import { AcademicYearService } from '../../shared/services/academic-year.service';
import { ClassService } from '../../shared/services/class.service';
import { ToastService } from '../../shared/services/toast.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  @ViewChild('chartCanvas', { static: false }) chartCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chartContainer', { static: false }) chartContainer!: ElementRef<HTMLDivElement>;
  chart!: Chart;  // Chart.js instance

  activeChartType: string = 'attendance';
  academicYears: any[] = [];
  classes: any[] = [];
  isLoading = false;

  chartData: any = null;
  chartConfig: any = null;

  chartForm: FormGroup;

  chartTypes = [
    { value: 'attendance', label: 'Attendance Chart' },
    { value: 'examinations', label: 'Examinations Chart' },
    { value: 'fees', label: 'Fees Chart' },
    { value: 'performance', label: 'Performance Chart' },
    { value: 'comparison', label: 'Comparison Chart' }
  ];

  constructor(
    private fb: FormBuilder,
    private chartService: ChartService,
    private academicYearService: AcademicYearService,
    private classService: ClassService,
    private toastService: ToastService
  ) {
    this.chartForm = this.fb.group({
      chart_type: ['attendance'],
      academic_year_id: [null],
      class_id: [null],
      section_id: [null],
      start_date: [null],
      end_date: [null]
    });
  }

  ngOnInit(): void {
    this.loadAcademicYears();
    this.loadClasses();
    this.setDefaultDates();
  }

  setDefaultDates(): void {
    const today = new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    this.chartForm.patchValue({
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

  setActiveChartType(type: string): void {
    this.activeChartType = type;
    this.chartForm.patchValue({ chart_type: type });
    this.chartData = null;
  }

  generateChart(): void {
    this.isLoading = true;

    console.log('Form Value:', this.chartForm.value); // Log request payload

    this.chartService.getChartData(this.chartForm.value).subscribe({
      next: (response) => {
        console.log('API Response:', response); // Log full response

        if (response.status === 'success') {
          this.chartData = response.data;
          this.chartConfig = response.config;

          // Map backend chart types to Chart.js types
          switch (this.chartConfig.type) {
            case 'attendance':
              this.chartConfig.type = 'bar';
              break;
            case 'examinations':
              this.chartConfig.type = 'line'; // Examinations as line chart
              break;
            case 'fees':
              this.chartConfig.type = 'bar';
              break;
            case 'performance':
              this.chartConfig.type = 'radar';
              break;
            case 'comparison':
              this.chartConfig.type = 'bar';
              break;
            default:
              this.chartConfig.type = 'bar'; // fallback
          }

          console.log('Mapped Chart Type:', this.chartConfig.type);
          console.log('Chart Data:', this.chartData);
          console.log('Chart Config:', this.chartConfig);

          // Delay rendering so canvas exists in the DOM (because of *ngIf)
          setTimeout(() => {
            this.renderChart();
          });

          this.toastService.success('Chart generated successfully');
        } else {
          console.warn('Response status not success');
        }

        this.isLoading = false;
      },
      error: (err) => {
        console.error('API Error:', err);
        this.toastService.error('Failed to generate chart');
        this.isLoading = false;
      }
    });
  }

  renderChart(): void {
    // Destroy previous chart instance if exists
    if (this.chart) {
      this.chart.destroy();
    }

    // Create new Chart.js instance
    this.chart = new Chart(this.chartCanvas.nativeElement, {
      type: this.chartConfig.type, // e.g., 'bar'
      data: {
        labels: this.chartConfig.labels,
        datasets: this.chartConfig.datasets
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  exportChart(format: string): void {
    if (!this.chartData) {
      this.toastService.warning('Please generate a chart first');
      return;
    }

    if (!this.chartContainer) {
      console.error('Chart container element not found!');
      this.toastService.error('Chart container not found');
      return;
    }

    const container = this.chartContainer.nativeElement;
    console.log('Chart container element:', container);

    if (format === 'pdf') {
      html2canvas(container).then((canvas) => {
        const imgWidth = 190;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
        pdf.save('chart.pdf');

        this.toastService.success('Chart exported as PDF');
      }).catch((err) => {
        console.error('PDF export error:', err);
        this.toastService.error('Failed to export chart as PDF');
      });
    }

    if (format === 'png' && this.chart) {
      const link = document.createElement('a');
      link.href = this.chart.toBase64Image();
      link.download = 'chart.png';
      link.click();
      this.toastService.success('Chart exported as PNG');
    }
  }
}