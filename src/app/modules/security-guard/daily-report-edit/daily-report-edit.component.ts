import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { SecurityGuardService } from '../../../shared/services/security-guard.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-daily-report-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './daily-report-edit.component.html',
  styleUrls: ['./daily-report-edit.component.scss']
})
export class DailyReportEditComponent implements OnInit {
  model: any = {
    report_id: 0,
    report_date: '',
    shift: 'morning',
    summary: '',
    incidents: ''
  };
  loading = false;
  loadingData = true;

  constructor(
    private sg: SecurityGuardService,
    private toast: ToastService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.sg.getDailyReport(+id).subscribe({
        next: (res) => {
          this.loadingData = false;
          if (res.status === 'success' && res.data?.report) {
            const r = res.data.report;
            this.model = {
              report_id: r.report_id,
              report_date: r.report_date ? r.report_date.slice(0, 10) : '',
              shift: r.shift || 'morning',
              summary: r.summary || '',
              incidents: r.incidents || ''
            };
          }
        },
        error: () => { this.loadingData = false; this.toast.show('Error loading report', 'error'); this.router.navigate(['/app/security-guard/daily-report/list']); }
      });
    } else { this.loadingData = false; this.router.navigate(['/app/security-guard/daily-report/list']); }
  }

  save(): void {
    this.loading = true;
    this.sg.updateDailyReport(this.model).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === 'success') {
          this.toast.show('Report updated', 'success');
          this.router.navigate(['/app/security-guard/daily-report/list']);
        } else this.toast.show(res.message || 'Error', 'error');
      },
      error: () => { this.loading = false; this.toast.show('Error updating report', 'error'); }
    });
  }
  cancel(): void { this.router.navigate(['/app/security-guard/daily-report/list']); }
}
