import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SecurityGuardService } from '../../../shared/services/security-guard.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-daily-report-create',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './daily-report-create.component.html',
  styleUrls: ['./daily-report-create.component.scss']
})
export class DailyReportCreateComponent {
  model: any = {
    report_date: new Date().toISOString().slice(0, 10),
    shift: 'morning',
    summary: '',
    incidents: ''
  };
  loading = false;

  constructor(private sg: SecurityGuardService, private toast: ToastService, private router: Router) {}
  save(): void {
    this.loading = true;
    this.sg.createDailyReport(this.model).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === 'success') {
          this.toast.show('Report saved successfully', 'success');
          this.router.navigate(['/app/security-guard/daily-report/list']);
        } else this.toast.show(res.message || 'Error', 'error');
      },
      error: () => { this.loading = false; this.toast.show('Error saving report', 'error'); }
    });
  }
  cancel(): void { this.router.navigate(['/app/security-guard/daily-report/list']); }
}
