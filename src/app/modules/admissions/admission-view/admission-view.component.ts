import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AdmissionService } from '../../../shared/services/admission.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { ToastService } from '../../../shared/services/toast.service';
import { DateFormatPipe } from '../../../shared/pipes/date-format.pipe';

@Component({
  selector: 'app-admission-view',
  standalone: true,
  imports: [CommonModule, DateFormatPipe],
  templateUrl: './admission-view.component.html',
  styleUrls: ['./admission-view.component.scss']
})
export class AdmissionViewComponent implements OnInit {
  admission: any = null;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private admissionService: AdmissionService,
    private dialogService: DialogService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.loadAdmission(+id);
    }
  }

  loadAdmission(id: number): void {
    this.isLoading = true;
    this.admissionService.getAdmission(id).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.status === 'success' && response.data) {
          this.admission = response.data.admission;
          if (this.admission.documents && typeof this.admission.documents === 'string') {
            try {
              this.admission.documents = JSON.parse(this.admission.documents);
            } catch (e) {
              this.admission.documents = [];
            }
          }
          if (typeof window !== 'undefined' && window.location.hash === '#print') {
            setTimeout(() => this.print(), 600);
          }
        }
      },
      error: () => {
        this.isLoading = false;
        this.toastService.show('Error loading admission', 'error');
      }
    });
  }

  print(): void {
    window.print();
  }

  approveAdmission(action: 'approve' | 'reject'): void {
    const actionText = action === 'approve' ? 'approve' : 'reject';
    this.dialogService.confirm(
      `${actionText.charAt(0).toUpperCase() + actionText.slice(1)} Admission`,
      `Are you sure you want to ${actionText} this admission?`,
      actionText.charAt(0).toUpperCase() + actionText.slice(1),
      'Cancel'
    ).subscribe((confirmed) => {
      if (confirmed) {
        this.admissionService.approveAdmission(this.admission.admission_id, action).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toastService.show(`Admission ${actionText}d successfully`, 'success');
              this.loadAdmission(this.admission.admission_id);
            }
          },
          error: () => {
            this.toastService.show(`Error ${actionText}ing admission`, 'error');
          }
        });
      }
    });
  }
}

