import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EnquiryService } from '../../../shared/services/enquiry.service';
import { AdmissionService } from '../../../shared/services/admission.service';
import { ToastService } from '../../../shared/services/toast.service';
import { DateFormatPipe } from '../../../shared/pipes/date-format.pipe';

@Component({
  selector: 'app-enquiry-view',
  standalone: true,
  imports: [CommonModule, DateFormatPipe, RouterModule],
  templateUrl: './enquiry-view.component.html',
  styleUrls: ['./enquiry-view.component.scss']
})
export class EnquiryViewComponent implements OnInit {
  enquiry: any = null;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private enquiryService: EnquiryService,
    private admissionService: AdmissionService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.loadEnquiry(+id);
    }
  }

  loadEnquiry(id: number): void {
    this.isLoading = true;
    this.enquiryService.getEnquiry(id).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.status === 'success' && response.data) {
          this.enquiry = response.data.enquiry;
        }
      },
      error: () => {
        this.isLoading = false;
        this.toastService.show('Error loading enquiry', 'error');
      }
    });
  }

  convertToAdmission(): void {
    this.router.navigate(['/app/admissions/create'], {
      queryParams: { enquiry_id: this.enquiry.enquiry_id }
    });
  }
}

