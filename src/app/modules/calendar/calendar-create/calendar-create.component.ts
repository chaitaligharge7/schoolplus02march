import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CalendarService } from '../../../shared/services/calendar.service';

@Component({
  selector: 'app-calendar-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './calendar-create.component.html',
  styleUrls: ['./calendar-create.component.scss']
})
export class CalendarCreateComponent implements OnInit {
  calendarForm: FormGroup;
  isEditMode = false;
  eventId: number | null = null;
  isSaving = false;

  constructor(
    private fb: FormBuilder,
    private calendarService: CalendarService,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.calendarForm = this.fb.group({
      event_title: ['', Validators.required],
      description: [''],
      event_type: ['Other', Validators.required],
      start_date: [new Date().toISOString().split('T')[0], Validators.required],
      end_date: [new Date().toISOString().split('T')[0], Validators.required]
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
    
    this.calendarService.getEvent(this.eventId).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          const event = response.data.event;
          this.calendarForm.patchValue({
            event_title: event.event_title,
            description: event.description,
            event_type: event.event_type,
            start_date: event.event_date || event.start_date,
            end_date: event.end_date
          });
        }
      }
    });
  }

  onSubmit(): void {
    if (this.calendarForm.invalid) {
      return;
    }

    this.isSaving = true;
    const formData = this.calendarForm.value;

    if (this.isEditMode && this.eventId) {
      this.calendarService.updateEvent(this.eventId, formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.router.navigate(['/app/calendar']);
          }
        },
        error: () => {
          this.isSaving = false;
        }
      });
    } else {
      this.calendarService.createEvent(formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.router.navigate(['/app/calendar']);
          }
        },
        error: () => {
          this.isSaving = false;
        }
      });
    }
  }
}

