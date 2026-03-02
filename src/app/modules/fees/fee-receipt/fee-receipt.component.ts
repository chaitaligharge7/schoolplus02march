import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FeeService } from '../../../shared/services/fee.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-fee-receipt',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './fee-receipt.component.html',
  styleUrls: ['./fee-receipt.component.scss']
})
export class FeeReceiptComponent implements OnInit {
  fee: any = null;
  loading = false;
  feeId: number | null = null;
  today = new Date();

  constructor(
    private feeService: FeeService,
    private toast: ToastService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.feeId = +id;
      this.load();
    } else {
      this.toast.show('Fee ID required', 'error');
    }
  }
  load(): void {
    if (!this.feeId) return;
    this.loading = true;
    this.feeService.getFee(this.feeId).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === 'success' && res.data?.fee) {
          this.fee = res.data.fee;
          if (typeof window !== 'undefined' && window.location.hash === '#print') {
            setTimeout(() => this.print(), 600);
          }
        }
      },
      error: () => { this.loading = false; this.toast.show('Error loading receipt', 'error'); }
    });
  }
  print(): void {
    window.print();
  }
}
