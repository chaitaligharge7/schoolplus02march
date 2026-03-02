import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { SecurityGuardService } from '../../../shared/services/security-guard.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-inquiry-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inquiry-view.component.html',
  styleUrls: ['./inquiry-view.component.scss']
})
export class InquiryViewComponent implements OnInit {
  inquiry: any = null;
  loading = true;

  constructor(
    private sg: SecurityGuardService,
    private toast: ToastService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.sg.getInquiry(+id).subscribe({
        next: (res) => {
          this.loading = false;
          if (res.status === 'success' && res.data?.inquiry) {
            this.inquiry = res.data.inquiry;
          }
        },
        error: () => {
          this.loading = false;
          this.toast.show('Error loading inquiry', 'error');
          this.router.navigate(['/app/security-guard/inquiry/list']);
        }
      });
    } else {
      this.loading = false;
      this.router.navigate(['/app/security-guard/inquiry/list']);
    }
  }

  goEdit(): void {
    if (this.inquiry?.inquiry_id) {
      this.router.navigate(['/app/security-guard/inquiry/edit', this.inquiry.inquiry_id]);
    }
  }
  back(): void {
    this.router.navigate(['/app/security-guard/inquiry/list']);
  }
}
