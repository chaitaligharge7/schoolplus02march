import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetailSliderComponent } from "../../../shared/components/detail-slider/detail-slider.component";
import { ClassService } from "../../../shared/services/class.service";
import { StudentService } from "../../../shared/services/student.service";
import { ToastService } from "../../../shared/services/toast.service";

export type ClassSliderTab = "profile" | "sections" | "subjects" | "students";

@Component({
  selector: "app-class-detail-slider",
  standalone: true,
  imports: [CommonModule, DetailSliderComponent],
  templateUrl: "./class-detail-slider.component.html",
  styleUrls: ["./class-detail-slider.component.scss"],
})
export class ClassDetailSliderComponent implements OnChanges {
  @Input() visible = false;
  @Input() classItem: any = null;
  @Output() close = new EventEmitter<void>();

  tabs: { id: ClassSliderTab; label: string; icon: string }[] = [
    { id: "profile", label: "Profile", icon: "bi-journal-text" },
    { id: "sections", label: "Sections", icon: "bi-collection" },
    { id: "subjects", label: "Subjects", icon: "bi-book" },
    { id: "students", label: "Students", icon: "bi-people" },
  ];
  activeTab: ClassSliderTab = "profile";
  loading = false;
  profileData: any = null;
  sectionsData: any[] = [];
  subjectsData: any[] = [];
  studentsData: any[] = [];

  constructor(
    private classService: ClassService,
    private studentService: StudentService,
    private toast: ToastService,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["classItem"] && this.classItem && this.visible) {
      this.activeTab = "profile";
      this.loadProfile();
    }
    if (changes["visible"] && this.visible && this.classItem) {
      this.activeTab = "profile";
      this.loadProfile();
    }
  }

  onClose(): void {
    this.close.emit();
  }

  setTab(tab: ClassSliderTab): void {
    this.activeTab = tab;
    if (!this.classItem) return;
    switch (tab) {
      case "profile":
        this.loadProfile();
        break;
      case "sections":
        this.loadSections();
        break;
      case "subjects":
        this.loadSubjects();
        break;
      case "students":
        this.loadStudents();
        break;
    }
  }


  loadProfile(): void {
    if (!this.classItem?.class_id) return;

    this.loading = true;

    this.classService.getClass(this.classItem.class_id).subscribe({
      next: (res) => {
        this.loading = false;

        if (res.status === "success" && res.data?.class) {
          this.profileData = {
            ...this.classItem, // ⭐ THIS LINE FIXES LEVEL
            ...res.data.class,
          };
        } else {
          this.profileData = this.classItem;
        }
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error loading class", "error");
        this.profileData = this.classItem;
      },
    });

    this.loadStudents();
    this.loadSections();
  }

  loadSections(): void {
    if (!this.classItem?.class_id) return;
    this.loading = true;
    this.classService.getSections(this.classItem.class_id).subscribe({
      next: (res) => {
        this.loading = false;
        const data = res.status === "success" && res.data;
        this.sectionsData = data?.sections || [];

        // ✅ SYNC COUNT FOR PROFILE KPI
        if (!this.profileData) this.profileData = {};
        this.profileData.total_sections = this.sectionsData.length;
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error loading sections", "error");
      },
    });
  }

  loadSubjects(): void {
    if (!this.classItem?.class_id) return;
    this.loading = true;
    this.classService.getClassSubjects(this.classItem.class_id).subscribe({
      next: (res) => {
        this.loading = false;
        const data = res.status === "success" && res.data;
        this.subjectsData = data?.subjects || [];
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error loading subjects", "error");
      },
    });
  }

  loadStudents(): void {
    if (!this.classItem?.class_id) return;
    this.loading = true;
    this.studentService
      .getStudents({ class_id: this.classItem.class_id, limit: 100 })
      .subscribe({
        next: (res) => {
          this.loading = false;
          const data = res.status === "success" && res.data;
          this.studentsData = data?.students || [];
        },
        error: () => {
          this.loading = false;
          this.toast.show("Error loading students", "error");
        },
      });
  }
}
