import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../../../shared/services/events.service';

@Component({
  selector: 'app-events-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events-view.component.html',
  styleUrls: ['./events-view.component.scss']
})
export class EventsViewComponent implements OnInit {
  event: any = null;
  loading = true;
  eventId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private eventsService: EventsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.eventId = params['id'] ? parseInt(params['id']) : null;
      if (this.eventId) {
        this.loadEvent();
      } else {
        this.loading = false;
      }
    });
  }

  loadEvent(): void {
    if (!this.eventId) return;
    this.loading = true;
    this.eventsService.getEvent(this.eventId).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.event = response.data.event;
        }
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  onEdit(): void {
    if (this.eventId) {
      this.router.navigate(['/app/events/edit', this.eventId]);
    }
  }
}
