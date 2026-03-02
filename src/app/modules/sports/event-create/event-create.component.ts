import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { SportsService } from '../../../shared/services/sports.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-event-create',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent implements OnInit {
  model: any = { event_name: '', event_type: 'tournament', event_date: new Date().toISOString().slice(0, 10), venue: '', description: '' };
  loading = false;
  editId: number | null = null;

  constructor(private sportsService: SportsService, private toast: ToastService, private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editId = +id;
      this.sportsService.getEvent(this.editId).subscribe({
        next: (res) => { if (res.status === 'success' && res.data?.event) this.model = { ...res.data.event }; }
      });
    }
  }
  save(): void {
    if (!this.model.event_name?.trim()) { this.toast.show('Event name is required', 'error'); return; }
    this.loading = true;
    const obs = this.editId ? this.sportsService.updateEvent({ ...this.model, event_id: this.editId }) : this.sportsService.createEvent(this.model);
    obs.subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === 'success') {
          this.toast.show(this.editId ? 'Event updated' : 'Event created', 'success');
          this.router.navigate(['/app/sports/list']);
        }
      },
      error: () => { this.loading = false; this.toast.show('Error', 'error'); }
    });
  }
  cancel(): void { this.router.navigate(['/app/sports/list']); }
}
