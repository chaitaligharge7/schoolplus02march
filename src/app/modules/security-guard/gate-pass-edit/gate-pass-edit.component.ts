import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { SecurityGuardService } from '../../../shared/services/security-guard.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-gate-pass-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './gate-pass-edit.component.html',
  styleUrls: ['./gate-pass-edit.component.scss']
})
export class GatePassEditComponent implements OnInit {
  model: any = {
    gate_pass_id: 0,
    visitor_name: '',
    purpose: '',
    valid_from: '',
    valid_until: '',
    status: 'active'
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
      this.sg.getGatePass(+id).subscribe({
        next: (res) => {
          this.loadingData = false;
          if (res.status === 'success' && res.data?.gate_pass) {
            const g = res.data.gate_pass;
            this.model = {
              gate_pass_id: g.gate_pass_id,
              visitor_name: g.visitor_name || '',
              purpose: g.purpose || '',
              valid_from: g.valid_from ? g.valid_from.slice(0, 16) : '',
              valid_until: g.valid_until ? g.valid_until.slice(0, 16) : '',
              status: g.status || 'active'
            };
          }
        },
        error: () => { this.loadingData = false; this.toast.show('Error loading gate pass', 'error'); this.router.navigate(['/app/security-guard/gate-pass/list']); }
      });
    } else { this.loadingData = false; this.router.navigate(['/app/security-guard/gate-pass/list']); }
  }

  save(): void {
    if (!this.model.visitor_name?.trim()) { this.toast.show('Visitor name is required', 'error'); return; }
    this.loading = true;
    this.sg.updateGatePass(this.model).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === 'success') {
          this.toast.show('Gate pass updated', 'success');
          this.router.navigate(['/app/security-guard/gate-pass/list']);
        } else this.toast.show(res.message || 'Error', 'error');
      },
      error: () => { this.loading = false; this.toast.show('Error updating gate pass', 'error'); }
    });
  }
  cancel(): void { this.router.navigate(['/app/security-guard/gate-pass/list']); }
}
