import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import {
  EnhancedTableComponent,
  TableColumn,
} from "../../../shared/components/enhanced-table/enhanced-table.component";
import { DateFormatPipe } from "../../../shared/pipes/date-format.pipe";
import { CourseService } from "../../../shared/services/course.service";
import { AcademicYearService } from "../../../shared/services/academic-year.service";
import { ClassService } from "../../../shared/services/class.service";
import { ToastService } from "../../../shared/services/toast.service";
import { ExportService } from "../../../shared/services/export.service";
import { DialogService } from "../../../shared/services/dialog.service";
import { SearchSelectComponent } from "../../../shared/components/search-select/search-select.component";
import { CourseDetailsComponent } from "../course-details/course-details.component";

@Component({
  selector: "app-course-list",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    EnhancedTableComponent,
    SearchSelectComponent,
    CourseDetailsComponent
],
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.scss"],
})
export class CourseListComponent implements OnInit {
  courses: any[] = [];
  academicYears: any[] = [];
  classes: any[] = [];
  loading = false;
  selectedRowId?: number;
  expandedCourseId: number | null = null;
  courseEnrollments: { [key: number]: any[] } = {};
  showFilters = false;
  sliderCourse: any = null;
  sliderVisible = false;
  
  pagination = {
    page: 1,
    limit: 20,
    total: 0,
    pages: 0,
  };
  // statusFilter: string | undefined;

  columns: TableColumn[] = [
    {
      key: "course_name",
      label: "Course Name",
      sortable: true,
      format: (value: any) => value || "-",
    },
    {
      key: "course_code",
      label: "Course Code",
      sortable: true,
      format: (value: any) => value || "-",
    },
    {
      key: "class_name",
      label: "Class",
      sortable: true,
      format: (value: any) => value || "-",
    },
    {
      key: "teacher_name",
      label: "Teacher",
      sortable: true,
      format: (value: any, row?: any) => {
        return (
          `${row?.teacher_first_name || ""} ${row?.teacher_last_name || ""}`.trim() ||
          "-"
        );
      },
    },
    {
      key: "enrollment_count",
      label: "Enrollments",
      sortable: true,
      type: "number",
      format: (value: any) => {
        return `<span class="badge badge-info">${value || 0}</span>`;
      },
        link: {
        route: "/app/students",
        queryKey: "course_id",
        rowKey: "course_id",
      },
    },
    {
      key: "start_date",
      label: "Start Date",
      sortable: true,
      type: "date",
    },
    {
      key: "end_date",
      label: "End Date",
      sortable: true,
      type: "date",
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      format: (value: any) => {
        const badgeClass =
          value === "active" ? "badge-success" : "badge-secondary";
        return `<span class="badge ${badgeClass}">${value || "-"}</span>`;
      },
    },
  ];

  searchTerm = "";
  sortColumn = "course_name";
  sortDirection: "asc" | "desc" = "asc";
  startDate?: string;
  endDate?: string;
  academicYearId?: number;
  classId?: number;
  status?: string;

  get academicYearOptions(): { value: number | undefined; label: string }[] {
    const all: { value: number | undefined; label: string }[] = [{ value: undefined, label: "All Academic Years" }];
    const years = (this.academicYears || []).map((y) => ({ value: y.academic_year_id, label: y.academic_year_name || "" }));
    return [...all, ...years];
  }

  get classOptions(): { value: number | undefined; label: string }[] {
    const all: { value: number | undefined; label: string }[] = [{ value: undefined, label: "All Classes" }];
    const list = (this.classes || []).map((c) => ({ value: c.class_id, label: c.class_name || "" }));
    return [...all, ...list];
  }

  courseStatusOptions: { value: string | undefined; label: string }[] = [
    { value: undefined, label: "All Status" },
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
  ];

  constructor(
    private courseService: CourseService,
    private academicYearService: AcademicYearService,
    private classService: ClassService,
    private toastService: ToastService,
    private dialogService: DialogService,

    private exportService: ExportService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadAcademicYears();
    this.loadClasses();
    this.loadCourses();
  }

  loadAcademicYears(): void {
    this.academicYearService.getAcademicYears().subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.academicYears = response.data.academic_years || [];
        }
      },
    });
  }

  loadClasses(): void {
    this.classService.getClasses().subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.classes = response.data.classes || [];

        }
      },
    });
  }

  loadCourses(): void {
    this.loading = true;
    const params: any = {
      page: this.pagination.page,
      limit: this.pagination.limit,
      sort_column: this.sortColumn,
      sort_direction: this.sortDirection.toUpperCase()
      // status:this.status
    };

    if (this.searchTerm) {
      params.search = this.searchTerm;
    }
    if (this.startDate) {
      params.start_date = this.startDate;
    }
    if (this.endDate) {
      params.end_date = this.endDate;
    }
    if (this.academicYearId) {
      params.academic_year_id = this.academicYearId;
    }
    if (this.classId) {
      params.class_id = this.classId;
    }
    if (this.status) {
      params.status = this.status;
    }
console.log("STATUS VALUE:", this.status);
console.log("PARAMS:", params);
    this.courseService.getCourses(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === "success" && response.data) {
          this.courses = response.data.courses || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show("Error loading courses", "error");
        console.error("Error loading courses:", error);
      },
    });
  }

  toggleEnrollments(courseId: number): void {
    if (this.expandedCourseId === courseId) {
      this.expandedCourseId = null;
    } else {
      this.expandedCourseId = courseId;
      if (!this.courseEnrollments[courseId]) {
        this.loadEnrollments(courseId);
      }
    }
  }

  loadEnrollments(courseId: number): void {
    this.courseService.getEnrollments(courseId).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.courseEnrollments[courseId] = response.data.enrollments || [];
        }
      },
      error: () => {
        this.toastService.show("Error loading course enrollments", "error");
      },
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadCourses();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadCourses();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadCourses();
  }

  onSortChange(sort: { column: string; direction: "asc" | "desc" }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadCourses();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadCourses();
  }

  onRowSelect(row: any): void {

    this.selectedRowId = row.course_id;
    this.sliderCourse = row;
    this.sliderVisible = true;
  }
 
  onRefresh(): void {
    this.loadCourses();
  }

  // onAdd(row:any): void {
  //   this.router.navigate(["/app/courses/create"]);
  // }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.courses.map((course) => ({
      "Course Name": course.course_name || "-",
      "Course Code": course.course_code || "-",
      Class: course.class_name || "-",
      Teacher:
        `${course.teacher_first_name || ""} ${course.teacher_last_name || ""}`.trim() ||
        "-",
      Enrollments: course.enrollment_count || 0,
      "Start Date": this.formatDate(course.start_date),
      "End Date": this.formatDate(course.end_date),
      Status: course.status || "-",
    }));

    const headers = this.columns.map((col) => col.label);

    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(
          exportData,
          `courses-${Date.now()}.csv`,
          headers,
        );
        break;
      case "pdf":
        this.exportService.exportToPDF(
          exportData,
          `courses-${Date.now()}.pdf`,
          headers,
        );
        break;
      case "print":
        this.exportService.printTable(exportData, headers);
        break;
      case "copy":
        this.exportService.copyToClipboard(exportData, headers);
        break;
    }
  }

  formatDate(dateString: string): string {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  onAcademicYearChange(yearId: number | null | undefined): void {
    this.academicYearId = yearId || undefined;
    this.pagination.page = 1;
    this.loadCourses();
  }

  onClassChange(classId: number | null | undefined): void {
    this.classId = classId || undefined;
    this.pagination.page = 1;
    this.loadCourses();
  }

  onStatusChange(status: string | null | undefined): void {
    this.status = status ?? undefined;
    this.pagination.page = 1;
    this.loadCourses();
  }
//   onStatusChange(statusFilter: string | null | undefined): void {
//   this.status = statusFilter ?? undefined;
//   this.pagination.page = 1;
//   this.loadCourses();
// }

  onEdit(row: any): void {
    this.router.navigate(["/app/courses/edit", row.course_id]);
  }
  onView(row: any): void {
    this.sliderCourse = row;
    this.sliderVisible = true;
  }
  onDelete(row: any): void {
    this.dialogService
      .confirm({
        title: "Delete course",
        message: `Are you sure you want to delete "${row.class_name}"?`,
        confirmText: "Delete",
        cancelText: "Cancel",
        type: "danger",
      })
      .subscribe((confirmed) => {
        if (confirmed) {
          this.courseService.deleteCourse(row.course_id).subscribe({
            next: (response) => {
              if (response.status === "success") {
                this.toastService.show(
                  "course deleted successfully",
                  "success",
                );
                this.loadCourses();
              }
            },
            error: () => {
              this.toastService.show("Error deleting course", "error");
            },
          });
        }
      });
  }

  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}