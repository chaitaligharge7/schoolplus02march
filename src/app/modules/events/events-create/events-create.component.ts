import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EventsService } from '../../../shared/services/events.service';

@Component({
  selector: 'app-events-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './events-create.component.html',
  styleUrls: ['./events-create.component.scss']
})
export class EventsCreateComponent implements OnInit {
  eventForm: FormGroup;
  isEditMode = false;
  eventId: number | null = null;
  isSaving = false;

  constructor(
    private fb: FormBuilder,
    private eventsService: EventsService,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.eventForm = this.fb.group({
      event_title: ['', Validators.required],
      description: [''],
      event_type: ['Other', Validators.required],
      event_date: [new Date().toISOString().split('T')[0], Validators.required],
      event_time: [''],
      location: [''],
      organizer: [''],
      status: ['upcoming', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.eventId = parseInt(params['id']);
        this.loadEvent();
      }
    });
  }

  loadEvent(): void {
    if (!this.eventId) return;
    
    this.eventsService.getEvent(this.eventId).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          const event = response.data.event;
          this.eventForm.patchValue({
            event_title: event.event_title,
            description: event.description,
            event_type: event.event_type,
            event_date: event.event_date,
            event_time: event.event_time || '',
            location: event.location || '',
            organizer: event.organizer || '',
            status: event.status
          });
        }
      }
    });
  }

  onSubmit(): void {
    if (this.eventForm.invalid) {
      return;
    }

    this.isSaving = true;
    const formData = this.eventForm.value;

    if (this.isEditMode && this.eventId) {
      this.eventsService.updateEvent(this.eventId, formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.router.navigate(['/app/events']);
          }
        },
        error: () => {
          this.isSaving = false;
        }
      });
    } else {
      this.eventsService.createEvent(formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.router.navigate(['/app/events']);
          }
        },
        error: () => {
          this.isSaving = false;
        }
      });
    }
  }
}

