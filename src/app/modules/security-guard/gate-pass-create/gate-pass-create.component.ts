import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SecurityGuardService } from '../../../shared/services/security-guard.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-gate-pass-create',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './gate-pass-create.component.html',
  styleUrls: ['./gate-pass-create.component.scss']
})
export class GatePassCreateComponent {
  model: any = {
    visitor_name: '',
    purpose: '',
    valid_from: '',
    valid_until: ''
  };
  loading = false;

  constructor(private sg: SecurityGuardService, private toast: ToastService, private router: Router) {
    const now = new Date();
    this.model.valid_from = now.toISOString().slice(0, 16);
    const end = new Date(now.getTime() + 4 * 60 * 60 * 1000);
    this.model.valid_until = end.toISOString().slice(0, 16);
  }
  save(): void {
    if (!this.model.visitor_name?.trim()) { this.toast.show('Visitor name is required', 'error'); return; }
    this.loading = true;
    this.sg.createGatePass(this.model).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === 'success') {
          this.toast.show('Gate pass issued successfully', 'success');
          this.router.navigate(['/app/security-guard/gate-pass/list']);
        } else this.toast.show(res.message || 'Error', 'error');
      },
      error: () => { this.loading = false; this.toast.show('Error issuing gate pass', 'error'); }
    });
  }
  cancel(): void { this.router.navigate(['/app/security-guard/gate-pass/list']); }
}
