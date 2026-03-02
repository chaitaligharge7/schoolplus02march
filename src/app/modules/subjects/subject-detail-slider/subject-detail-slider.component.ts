import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailSliderComponent } from '../../../shared/components/detail-slider/detail-slider.component';
import { SubjectService } from '../../../shared/services/subject.service';
import { ToastService } from '../../../shared/services/toast.service';

export type SubjectSliderTab = 'profile' | 'details';

@Component({
  selector: 'app-subject-detail-slider',
  standalone: true,
  imports: [CommonModule, DetailSliderComponent],
  templateUrl: './subject-detail-slider.component.html',
  styleUrls: ['./subject-detail-slider.component.scss']
})
export class SubjectDetailSliderComponent implements OnChanges {
  @Input() visible = false;
  @Input() subject: any = null;
  @Output() close = new EventEmitter<void>();

  tabs: { id: SubjectSliderTab; label: string; icon: string }[] = [
    { id: 'profile', label: 'Profile', icon: 'bi-journal-text' },
    { id: 'details', label: 'Details', icon: 'bi-info-circle' }
  ];
  activeTab: SubjectSliderTab = 'profile';
  loading = false;
  profileData: any = null;

  constructor(
    private subjectService: SubjectService,
    private toast: ToastService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['subject'] && this.subject && this.visible) {
      this.activeTab = 'profile';
      this.loadProfile();
    }
    if (changes['visible'] && this.visible && this.subject) {
      this.activeTab = 'profile';
      this.loadProfile();
    }
  }

  onClose(): void {
    this.close.emit();
  }

  setTab(tab: SubjectSliderTab): void {
    this.activeTab = tab;
    if (!this.subject) return;
    if (tab === 'profile' || tab === 'details') this.loadProfile();
  }

  loadProfile(): void {
    if (!this.subject?.subject_id) return;
    this.loading = true;
    this.subjectService.getSubject(this.subject.subject_id).subscribe({
      next: (res) => {
        this.loading = false;
        this.profileData = (res.status === 'success' && res.data?.subject) ? res.data.subject : this.subject;
      },
      error: () => { this.loading = false; this.toast.show('Error loading subject', 'error'); }
    });
  }
}
