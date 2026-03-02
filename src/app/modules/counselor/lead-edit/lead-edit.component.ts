import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { CounselorService } from '../../../shared/services/counselor.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-lead-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './lead-edit.component.html',
  styleUrls: ['./lead-edit.component.scss']
})
export class LeadEditComponent implements OnInit {
  model: any = {
    enquiry_id: 0,
    status: 'new',
    career_notes: '',
    campus_tour_done: false,
    fee_discussion_done: false,
    next_follow_up_date: '',
    follow_up_notes: ''
  };
  loading = false;
  loadingData = true;
  facilities: Record<string, { label: string; total_hostels?: number; total_rooms?: number; total_routes?: number; total_schedules?: number }> = {};
  showFacilities = false;
  campusTourSending = false;

  get facilityEntries(): { label: string; total_hostels?: number; total_rooms?: number; total_routes?: number; total_schedules?: number }[] {
    return Object.values(this.facilities);
  }

  constructor(
    private counselor: CounselorService,
    private toast: ToastService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.counselor.getLead(+id).subscribe({
        next: (res) => {
          this.loadingData = false;
          if (res.status === 'success' && res.data?.lead) {
            const l = res.data.lead;
            this.model = {
              enquiry_id: l.enquiry_id,
              status: l.lead_status || 'new',
              career_notes: l.career_notes || '',
              campus_tour_done: !!l.campus_tour_done,
              fee_discussion_done: !!l.fee_discussion_done,
              next_follow_up_date: l.next_follow_up_date || '',
              follow_up_notes: l.follow_up_notes || ''
            };
          }
        },
        error: () => { this.loadingData = false; this.toast.show('Error loading lead', 'error'); this.router.navigate(['/app/counselor/leads']); }
      });
    } else { this.loadingData = false; this.router.navigate(['/app/counselor/leads']); }
  }

  save(): void {
    this.loading = true;
    this.counselor.updateLead(this.model).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === 'success') {
          this.toast.show('Lead updated', 'success');
          this.router.navigate(['/app/counselor/leads']);
        } else this.toast.show(res.message || 'Error', 'error');
      },
      error: () => { this.loading = false; this.toast.show('Error updating lead', 'error'); }
    });
  }
  cancel(): void { this.router.navigate(['/app/counselor/leads']); }

  loadFacilities(): void {
    this.counselor.getFacilitySummary().subscribe({
      next: (res) => {
        if (res.status === 'success' && res.data?.facilities) this.facilities = res.data.facilities;
      }
    });
  }
  toggleFacilities(): void {
    this.showFacilities = !this.showFacilities;
    if (this.showFacilities && Object.keys(this.facilities).length === 0) this.loadFacilities();
  }
  requestCampusTour(): void {
    if (!this.model.enquiry_id) return;
    this.campusTourSending = true;
    this.counselor.requestCampusTour({ enquiry_id: this.model.enquiry_id }).subscribe({
      next: (res) => {
        this.campusTourSending = false;
        if (res.status === 'success') this.toast.show('Campus tour requested; staff notified', 'success');
        else this.toast.show(res.message || 'Error', 'error');
      },
      error: () => { this.campusTourSending = false; this.toast.show('Error', 'error'); }
    });
  }
}
