import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailSliderComponent } from '../../../shared/components/detail-slider/detail-slider.component';
import { TeacherService } from '../../../shared/services/teacher.service';
import { TimetableService } from '../../../shared/services/timetable.service';
import { LeaveManagementService } from '../../../shared/services/leave-management.service';
import { TeachingPlanService } from '../../../shared/services/teaching-plan.service';
import { DoubtHandlingService } from '../../../shared/services/doubt-handling.service';
import { ToastService } from '../../../shared/services/toast.service';

export type TeacherSliderTab = 'profile' | 'schedule' | 'leave' | 'doubt-handling' | 'teaching-plan';

@Component({
  selector: 'app-teacher-detail-slider',
  standalone: true,
  imports: [CommonModule, FormsModule, DetailSliderComponent],
  templateUrl: './teacher-detail-slider.component.html',
  styleUrls: ['./teacher-detail-slider.component.scss']
})
export class TeacherDetailSliderComponent implements OnInit, OnChanges {
  @Input() visible = false;
  @Input() teacher: any = null;
  @Output() close = new EventEmitter<void>();

  tabs: { id: TeacherSliderTab; label: string; icon: string }[] = [
    { id: 'profile', label: 'Profile', icon: 'bi-person' },
    { id: 'schedule', label: 'Schedule', icon: 'bi-calendar3' },
    { id: 'leave', label: 'Leave', icon: 'bi-calendar-x' },
    { id: 'doubt-handling', label: 'Doubt Handling', icon: 'bi-question-circle' },
    { id: 'teaching-plan', label: 'Teaching Plan', icon: 'bi-journal-text' }
  ];
  activeTab: TeacherSliderTab = 'profile';
  loading = false;
  profileData: any = null;
  timetableData: any[] = [];
  leaveData: any[] = [];
  doubtData: any[] = [];
  teachingPlanData: any[] = [];
  dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  constructor(
    private teacherService: TeacherService,
    private timetableService: TimetableService,
    private leaveService: LeaveManagementService,
    private teachingPlanService: TeachingPlanService,
    private doubtService: DoubtHandlingService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['teacher'] && this.teacher && this.visible) {
      this.activeTab = 'profile';
      this.loadProfile();
    }
    if (changes['visible'] && this.visible && this.teacher) {
      this.activeTab = 'profile';
      this.loadProfile();
    }
  }

  onClose(): void {
    this.close.emit();
  }

  setTab(tab: TeacherSliderTab): void {
    this.activeTab = tab;
    if (!this.teacher) return;
    switch (tab) {
      case 'profile': this.loadProfile(); break;
      case 'schedule': this.loadSchedule(); break;
      case 'leave': this.loadLeave(); break;
      case 'doubt-handling': this.loadDoubts(); break;
      case 'teaching-plan': this.loadTeachingPlan(); break;
    }
  }

  loadProfile(): void {
    if (!this.teacher?.teacher_id) return;
    this.loading = true;
    this.teacherService.getTeacher(this.teacher.teacher_id).subscribe({
      next: (res) => {
        this.loading = false;
        this.profileData = (res.status === 'success' && res.data?.teacher) ? res.data.teacher : this.teacher;
      },
      error: () => { this.loading = false; this.toast.show('Error loading profile', 'error'); }
    });
  }

  loadSchedule(): void {
    if (!this.teacher?.teacher_id) return;
    this.loading = true;
    this.timetableService.getTimetableByTeacher(this.teacher.teacher_id).subscribe({
      next: (res) => {
        this.loading = false;
        this.timetableData = (res.status === 'success' && res.data?.timetable) ? res.data.timetable : [];
      },
      error: () => { this.loading = false; this.toast.show('Error loading schedule', 'error'); }
    });
  }

  loadLeave(): void {
    if (!this.teacher?.teacher_id) return;
    this.loading = true;
    this.leaveService.getLeaves({ teacher_id: this.teacher.teacher_id, limit: 100 }).subscribe({
      next: (res) => {
        this.loading = false;
        const data = res.status === 'success' && res.data;
        this.leaveData = data?.leaves || data?.leave_requests || [];
      },
      error: () => { this.loading = false; this.toast.show('Error loading leave', 'error'); }
    });
  }

  loadDoubts(): void {
    this.loading = true;
    this.doubtService.getDoubts({ limit: 100 }).subscribe({
      next: (res) => {
        this.loading = false;
        const list = (res.status === 'success' && res.data?.doubts) ? res.data.doubts : [];
        this.doubtData = list.filter((d: any) => d.teacher_id == this.teacher?.teacher_id);
      },
      error: () => { this.loading = false; this.toast.show('Error loading doubts', 'error'); }
    });
  }

  loadTeachingPlan(): void {
    if (!this.teacher?.teacher_id) return;
    this.loading = true;
    this.teachingPlanService.getPlans({ teacher_id: this.teacher.teacher_id, limit: 100 }).subscribe({
      next: (res) => {
        this.loading = false;
        this.teachingPlanData = (res.status === 'success' && res.data?.plans) ? res.data.plans : (res.data?.teaching_plans || []);
      },
      error: () => { this.loading = false; this.toast.show('Error loading teaching plan', 'error'); }
    });
  }


getTimetableForDay(dayIndex: number): any[] {
  const dayName = this.dayNames[dayIndex - 1]; // get name
  const list = this.timetableData.filter(t => t.day_of_week === dayName);
  console.log(`Timetable for ${dayName}:`, list);
  return list;
}

}
