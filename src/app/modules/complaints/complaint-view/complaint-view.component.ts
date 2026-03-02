import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ComplaintService } from '../../../shared/services/complaint.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EnhancedTableComponent } from '../../../shared/components/enhanced-table/enhanced-table.component';

@Component({
    selector: 'app-complaint-view',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
    templateUrl: './complaint-view.component.html',
    styleUrls: ['./complaint-view.component.scss']
})
export class ComplaintViewComponent implements OnInit {
    complaintId!: number;
    complaint: any;
    loading = true;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private complaintService: ComplaintService
    ) { }

    ngOnInit(): void {
        this.complaintId = Number(this.route.snapshot.paramMap.get('id'));
        if (!this.complaintId) {
            this.loading = false;
            this.complaint = null;
            return;
        }
        this.loadComplaint();
    }

    loadComplaint() {
        console.log('Loading complaint with ID:', this.complaintId);
        this.loading = true;

        this.complaintService.getComplaints().subscribe({
            next: (res) => {
                console.log('API response:', res);
                // extract complaint from list
                const complaints = res.data?.complaints || [];
                this.complaint = complaints.find((c: { complaint_id: number; }) => c.complaint_id === this.complaintId) || null;
                console.log('Loaded complaint object:', this.complaint);
                this.loading = false;
            },
            error: (err) => {
                console.error('Failed to load complaint:', err);
                this.complaint = null;
                this.loading = false;
            }
        });
    }

    back() {
        this.router.navigate(['/app/complaints']); // back to list
    }

    resolveComplaint() {
        if (!this.complaintId) return;
        this.complaintService.resolveComplaint(this.complaintId, {}).subscribe({
            next: () => {
                alert('Complaint resolved');
                this.loadComplaint(); // refresh status
            },
            error: (err) => console.error(err)
        });
    }
  }