import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { CounselorService } from '../../../shared/services/counselor.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-lead-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lead-view.component.html',
  styleUrls: ['./lead-view.component.scss']
})
export class LeadViewComponent implements OnInit {
  lead: any = null;
  loading = true;

  constructor(
    private counselor: CounselorService,
    private toast: ToastService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.counselor.getLead(+id).subscribe({
        next: (res) => {
          this.loading = false;
          if (res.status === 'success' && res.data?.lead) this.lead = res.data.lead;
          else this.toast.show('Lead not found', 'error');
        },
        error: () => { this.loading = false; this.toast.show('Error loading lead', 'error'); this.router.navigate(['/app/counselor/leads']); }
      });
    } else { this.loading = false; this.router.navigate(['/app/counselor/leads']); }
  }

  goEdit(): void {
    if (this.lead?.enquiry_id) this.router.navigate(['/app/counselor/leads/edit', this.lead.enquiry_id]);
  }
  back(): void { this.router.navigate(['/app/counselor/leads']); }
}
