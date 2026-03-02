import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { SecurityGuardService } from '../../../shared/services/security-guard.service';
import { ToastService } from '../../../shared/services/toast.service';

const PURPOSE_TYPES = [
  { value: '', label: 'Select purpose type' },
  { value: 'admission', label: 'Admission' },
  { value: 'meeting', label: 'Meeting' },
  { value: 'delivery', label: 'Delivery' },
  { value: 'interview', label: 'Interview' },
  { value: 'event', label: 'Event' },
  { value: 'other', label: 'Other' }
];

@Component({
  selector: 'app-inquiry-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './inquiry-edit.component.html',
  styleUrls: ['./inquiry-edit.component.scss']
})
export class InquiryEditComponent implements OnInit {
  purposeTypes = PURPOSE_TYPES;
  model: any = {
    inquiry_id: 0,
    visitor_name: '',
    visitor_phone: '',
    visitor_id_type: '',
    visitor_id_number: '',
    purpose_type: '',
    purpose: '',
    person_to_meet: '',
    department: '',
    status: 'registered',
    notes: ''
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
      this.sg.getInquiry(+id).subscribe({
        next: (res) => {
          this.loadingData = false;
          if (res.status === 'success' && res.data?.inquiry) {
            const i = res.data.inquiry;
            this.model = {
              inquiry_id: i.inquiry_id,
              visitor_name: i.visitor_name || '',
              visitor_phone: i.visitor_phone || '',
              visitor_id_type: i.visitor_id_type || '',
              visitor_id_number: i.visitor_id_number || '',
              purpose_type: i.purpose_type || '',
              purpose: i.purpose || '',
              person_to_meet: i.person_to_meet || '',
              department: i.department || '',
              status: i.status || 'registered',
              notes: i.notes || ''
            };
          }
        },
        error: () => {
          this.loadingData = false;
          this.toast.show('Error loading inquiry', 'error');
          this.router.navigate(['/app/security-guard/inquiry/list']);
        }
      });
    } else {
      this.loadingData = false;
      this.router.navigate(['/app/security-guard/inquiry/list']);
    }
  }

  save(): void {
    if (!this.model.visitor_name?.trim()) {
      this.toast.show('Visitor name is required', 'error');
      return;
    }
    this.loading = true;
    this.sg.updateInquiry(this.model).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === 'success') {
          this.toast.show('Inquiry updated', 'success');
          this.router.navigate(['/app/security-guard/inquiry/list']);
        } else this.toast.show(res.message || 'Error', 'error');
      },
      error: () => {
        this.loading = false;
        this.toast.show('Error updating inquiry', 'error');
      }
    });
  }
  cancel(): void {
    this.router.navigate(['/app/security-guard/inquiry/list']);
  }
}
