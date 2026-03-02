import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { BranchService } from '../../../shared/services/branch.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-branch-create',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './branch-create.component.html',
  styleUrls: ['./branch-create.component.scss']
})
export class BranchCreateComponent implements OnInit {
  model: any = { branch_name: '', branch_code: '', address: '', city: '', state: '', pincode: '', phone: '', email: '', is_active: 1 };
  loading = false;
  editId: number | null = null;

  constructor(
    private branchService: BranchService,
    private toastService: ToastService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.editId = +idParam;
      this.branchService.getBranch(this.editId).subscribe({
        next: (res) => {
          if (res.status === 'success' && res.data?.branch) {
            this.model = { ...res.data.branch };
          }
        }
      });
    }
  }

  save(): void {
    if (!this.model.branch_name?.trim()) {
      this.toastService.show('Branch name is required', 'error');
      return;
    }
    this.loading = true;
    const payload = this.editId ? { ...this.model, branch_id: this.editId } : this.model;
    const obs = this.editId ? this.branchService.updateBranch(payload) : this.branchService.createBranch(this.model);
    obs.subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === 'success') {
          this.toastService.show(this.editId ? 'Branch updated' : 'Branch created', 'success');
          this.router.navigate(['/app/branches/list']);
        } else {
          this.toastService.show(res.message || 'Error', 'error');
        }
      },
      error: () => {
        this.loading = false;
        this.toastService.show('Error saving branch', 'error');
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/app/branches/list']);
  }
}
