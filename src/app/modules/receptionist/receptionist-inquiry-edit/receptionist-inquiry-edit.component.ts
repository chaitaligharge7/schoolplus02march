import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ReceptionistService } from '../../../shared/services/receptionist.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ClassService } from '../../../shared/services/class.service';

@Component({
  selector: 'app-receptionist-inquiry-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './receptionist-inquiry-edit.component.html',
  styleUrls: ['./receptionist-inquiry-edit.component.scss']
})
export class ReceptionistInquiryEditComponent implements OnInit {
  inquiry: any = null;
  loading = false;
  saving = false;
  counselors: any[] = [];
  classes: any[] = [];
  convertForm: any = {
    counselor_id: null,
    student_name: '',
    parent_name: '',
    mobile: '',
    email: '',
    address: '',
    interested_class_id: null,
    enquiry_source: 'walk-in',
    remarks: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private receptionist: ReceptionistService,
    private classService: ClassService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadInquiry(+id);
      this.loadCounselors();
      this.loadClasses();
    }
  }

  loadInquiry(id: number): void {
    this.loading = true;
    this.receptionist.getInquiry(id).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === 'success' && res.data?.inquiry) {
          this.inquiry = res.data.inquiry;
          this.convertForm.student_name = this.inquiry.visitor_name || '';
          this.convertForm.mobile = this.inquiry.visitor_phone || '';
        }
      },
      error: () => { this.loading = false; this.toast.show('Error loading inquiry', 'error'); }
    });
  }

  loadCounselors(): void {
    this.receptionist.getCounselors().subscribe({
      next: (res) => {
        if (res.status === 'success' && res.data?.counselors) {
          this.counselors = res.data.counselors;
        }
      }
    });
  }

  loadClasses(): void {
    this.classService.getClasses().subscribe({
      next: (res) => {
        if (res.status === 'success' && res.data?.classes) {
          this.classes = res.data.classes || [];
        }
      }
    });
  }

  markPicked(): void {
    if (!this.inquiry?.inquiry_id) return;
    this.saving = true;
    this.receptionist.markPicked(this.inquiry.inquiry_id).subscribe({
      next: (res) => {
        this.saving = false;
        if (res.status === 'success') {
          this.toast.show('Marked as picked', 'success');
          this.inquiry.status = 'picked';
        } else {
          this.toast.show(res.message || 'Error', 'error');
        }
      },
      error: () => { this.saving = false; this.toast.show('Error', 'error'); }
    });
  }

  convertToLead(): void {
    if (!this.inquiry?.inquiry_id) return;
    if (!this.convertForm.counselor_id) {
      this.toast.show('Please select a counselor', 'error');
      return;
    }
    if (!this.convertForm.student_name?.trim()) {
      this.toast.show('Student/Visitor name is required', 'error');
      return;
    }
    if (!this.convertForm.mobile?.trim()) {
      this.toast.show('Mobile is required', 'error');
      return;
    }
    this.saving = true;
    this.receptionist.convertToLead({
      inquiry_id: this.inquiry.inquiry_id,
      counselor_id: this.convertForm.counselor_id,
      student_name: this.convertForm.student_name,
      parent_name: this.convertForm.parent_name || undefined,
      mobile: this.convertForm.mobile,
      email: this.convertForm.email || undefined,
      address: this.convertForm.address || undefined,
      interested_class_id: this.convertForm.interested_class_id || undefined,
      enquiry_source: this.convertForm.enquiry_source,
      remarks: this.convertForm.remarks || undefined
    }).subscribe({
      next: (res) => {
        this.saving = false;
        if (res.status === 'success') {
          this.toast.show('Converted to lead and assigned to counselor', 'success');
          this.router.navigate(['/app/receptionist/inquiries']);
        } else {
          this.toast.show(res.message || 'Error', 'error');
        }
      },
      error: () => { this.saving = false; this.toast.show('Error converting to lead', 'error'); }
    });
  }

  back(): void {
    this.router.navigate(['/app/receptionist/inquiries']);
  }
}
