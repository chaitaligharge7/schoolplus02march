import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { InwardRequestService } from '../../../shared/services/inward-request.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-inward-request-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inward-request-view.component.html',
  styleUrls: ['./inward-request-view.component.scss']
})
export class InwardRequestViewComponent implements OnInit {
  request: any = null;
  loading = true;

  constructor(
    private inwardRequestService: InwardRequestService,
    private toast: ToastService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.inwardRequestService.getInwardRequest(+id).subscribe({
        next: (res) => {
          this.loading = false;
          if (res.status === 'success' && res.data?.request) this.request = res.data.request;
        },
        error: () => {
          this.loading = false;
          this.toast.show('Error loading inward request', 'error');
          this.router.navigate(['/app/inward-requests/list']);
        }
      });
    } else {
      this.loading = false;
      this.router.navigate(['/app/inward-requests/list']);
    }
  }

  back(): void {
    this.router.navigate(['/app/inward-requests/list']);
  }
}
