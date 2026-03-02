import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { SupportFeedbackService } from '../../../shared/services/support-feedback.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-ticket-create',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule , ReactiveFormsModule],
  templateUrl: './ticket-create.component.html',
  styleUrls: ['./ticket-create.component.scss']
})
export class TicketCreateComponent implements OnInit {
  model: any = { subject: '', message: '', ticket_type: 'feedback' };
  loading = false;
  isEdit = false;
  ticketId: number | null = null;

  constructor(
    private ticketService: SupportFeedbackService,
    private toast: ToastService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Check for ticket_id in route
    this.ticketId = Number(this.route.snapshot.paramMap.get('id')) || null;
    if (this.ticketId) {
      this.isEdit = true;
      this.loadTicket(this.ticketId);
    }
  }

loadTicket(id: number): void {
  this.loading = true;
  this.ticketService.getTicket(id).subscribe({
    next: (res) => {
      this.loading = false;
      if (res.status === 'success' && res.data?.ticket) {
        const t = res.data.ticket;
        this.model = {
          ticket_type: t.ticket_type || 'feedback',
          subject: t.subject || '',
          message: t.message || ''
        };
      } else {
        this.toast.show(res.message || 'Failed to load ticket', 'error');
        this.router.navigate(['/app/support-feedback/list']);
      }
    },
    error: () => {
      this.loading = false;
      this.toast.show('Error loading ticket', 'error');
      this.router.navigate(['/app/support-feedback/list']);
    }
  });
}



  save(): void {
    if (!this.model.subject?.trim() || !this.model.message?.trim()) {
      this.toast.show('Subject and message are required', 'error');
      return;
    }

    this.loading = true;

    if (this.isEdit && this.ticketId) {
      // Update ticket
      const data = { ...this.model, ticket_id: this.ticketId };
      this.ticketService.updateTicket(data).subscribe({
        next: (res) => {
          this.loading = false;
          if (res.status === 'success') {
            this.toast.show('Ticket updated', 'success');
            this.router.navigate(['/app/support-feedback/list']);
          } else {
            this.toast.show(res.message || 'Failed to update ticket', 'error');
          }
        },
        error: () => {
          this.loading = false;
          this.toast.show('Error updating ticket', 'error');
        }
      });
    } else {
      // Create ticket
      this.ticketService.createTicket(this.model).subscribe({
        next: (res) => {
          this.loading = false;
          if (res.status === 'success') {
            this.toast.show('Ticket submitted', 'success');
            this.router.navigate(['/app/support-feedback/list']);
          } else {
            this.toast.show(res.message || 'Failed to submit ticket', 'error');
          }
        },
        error: () => {
          this.loading = false;
          this.toast.show('Error submitting ticket', 'error');
        }
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/app/support-feedback/list']);
  }
}
