import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReceptionistService } from '../../../shared/services/receptionist.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-receptionist-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './receptionist-dashboard.component.html',
  styleUrls: ['./receptionist-dashboard.component.scss']
})
export class ReceptionistDashboardComponent implements OnInit {
  stats: any = null;
  loading = true;

  constructor(
    private receptionist: ReceptionistService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.receptionist.getDashboardStats().subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === 'success' && res.data?.stats) this.stats = res.data.stats;
        else this.stats = { today_inquiries: 0, pending_assignments: 0, completed_assignments: 0, total_enquiries: 0 };
      },
      error: () => { this.loading = false; this.toast.show('Error loading dashboard', 'error'); }
    });
  }
}
