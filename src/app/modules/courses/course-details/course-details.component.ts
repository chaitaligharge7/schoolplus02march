import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DetailSliderComponent } from '../../../shared/components/detail-slider/detail-slider.component';
import { ClassService } from '../../../shared/services/class.service';
import { StudentService } from '../../../shared/services/student.service';
import { ToastService } from '../../../shared/services/toast.service';
import { CourseService } from '../../../shared/services/course.service';
export type CourseSliderTab = "profile" | "enrollments" ;


@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [FormsModule,CommonModule,DetailSliderComponent],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss'
})
export class CourseDetailsComponent implements OnChanges{
  @Input() visible = false;
  @Input() courseItem: any = null;
  @Output() close = new EventEmitter<void>();

  tabs: { id: CourseSliderTab; label: string; icon: string }[] = [
    { id: "profile", label: "Profile", icon: "bi-journal-text" },
    { id: "enrollments", label: "Enrollments", icon: "bi-people" },
  ];
  activeTab: CourseSliderTab = "profile";
  loading = false;

  profileData: any = null;
  enrollmentsData: any[] = [];

  constructor(
    private courseService: CourseService,
    private studentService: StudentService,
    private toast: ToastService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes["courseItem"] && this.courseItem) || (changes["visible"] && this.visible)) {
      this.activeTab = "profile";
      this.loadProfile();
    }
  }

  onClose(): void {
    this.close.emit();
  }

  setTab(tab: CourseSliderTab): void {
    this.activeTab = tab;
    if (!this.courseItem) return;

    switch (tab) {
      case "profile":
        this.loadProfile();
        break;
      case "enrollments":
        this.loadEnrollments();
        break;
    }
  }

  loadProfile(): void {
    if (!this.courseItem?.course_id) return;

    this.loading = true;
    this.courseService.getCourses(this.courseItem.course_id).subscribe({
      next: (res) => {
        this.loading = false;
        this.profileData = res.status === "success" && res.data?.course
          ? { ...this.courseItem, ...res.data.course }
          : this.courseItem;
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error loading course details", "error");
        this.profileData = this.courseItem;
      },
    });
  }

  loadEnrollments(): void {
    if (!this.courseItem?.course_id) return;

    this.loading = true;
    this.studentService.getStudent(this.courseItem.course_id).subscribe({
      next: (res) => {
        this.loading = false;
        this.enrollmentsData = res.status === "success" ? res.data?.enrollments || [] : [];
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error loading enrollments", "error");
        this.enrollmentsData = [];
      },
    });
  }
}