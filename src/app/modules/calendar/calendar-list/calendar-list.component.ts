import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CalendarService } from '../../../shared/services/calendar.service';
import { TruncatePipe } from '../../../shared/pipes/truncate.pipe';
import { DateFormatPipe } from '../../../shared/pipes/date-format.pipe';

@Component({
  selector: 'app-calendar-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, TruncatePipe, DateFormatPipe],
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.scss']
})
export class CalendarListComponent implements OnInit {
  events: any[] = [];
  isLoading = false;
  searchForm: FormGroup;
  selectedDate: Date = new Date();
  viewMode: 'month' | 'week' | 'day' = 'month';

  constructor(
    private fb: FormBuilder,
    private calendarService: CalendarService
  ) {
    const d = new Date();
    const firstDay = new Date(d.getFullYear(), d.getMonth(), 1).toISOString().split('T')[0];
    const lastDay = new Date(d.getFullYear(), d.getMonth() + 1, 0).toISOString().split('T')[0];
    this.searchForm = this.fb.group({
      search: [''],
      event_type: [null],
      start_date: [firstDay],
      end_date: [lastDay]
    });
  }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.isLoading = true;
    const params = {
      ...this.searchForm.value
    };

    this.calendarService.getEvents(params).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.events = response.data.events || [];
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading events:', error);
        this.isLoading = false;
      }
    });
  }

  onSearch(): void {
    this.loadEvents();
  }

  onDateChange(date: Date): void {
    this.selectedDate = date;
    this.loadEvents();
  }

  setViewMode(mode: 'month' | 'week' | 'day'): void {
    this.viewMode = mode;
    this.loadEvents();
  }

  deleteEvent(eventId: number): void {
    if (confirm('Are you sure you want to delete this event?')) {
      this.calendarService.deleteEvent(eventId).subscribe({
        next: (response) => {
          if (response.status === 'success') {
            this.loadEvents();
          }
        },
        error: (error) => {
          console.error('Error deleting event:', error);
        }
      });
    }
  }
}

