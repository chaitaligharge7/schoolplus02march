import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import {
  EnhancedTableComponent,
  TableColumn,
} from "../../../shared/components/enhanced-table/enhanced-table.component";
import { SubjectDetailSliderComponent } from "../subject-detail-slider/subject-detail-slider.component";
import { SubjectService } from "../../../shared/services/subject.service";
import { ClassService } from "../../../shared/services/class.service";
import { DialogService } from "../../../shared/services/dialog.service";
import { ToastService } from "../../../shared/services/toast.service";
import { ExportService } from "../../../shared/services/export.service";
import { SearchSelectComponent } from "../../../shared/components/search-select/search-select.component";

@Component({
  selector: "app-subject-list",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    EnhancedTableComponent,
    SubjectDetailSliderComponent,
    SearchSelectComponent,
  ],
  templateUrl: "./subject-list.component.html",
  styleUrls: ["./subject-list.component.scss"],
})
export class SubjectListComponent implements OnInit {
  subjects: any[] = [];
  classes: any[] = [];
  loading = false;
  selectedRowId?: number;
  sliderSubject: any = null;
  sliderVisible = false;

  pagination = {
    page: 1,
    limit: 20,
    total: 0,
    pages: 0,
  };

  columns: TableColumn[] = [
    {
      key: "subject_name",
      label: "Subject Name",
      sortable: true,
    },
    {
      key: "subject_code",
      label: "Subject Code",
      sortable: true,
      format: (value: any) => value || "-",
    },
    {
      key: "class_name",
      label: "Class",
      sortable: true,
      format: (value: any) => value || "All Classes",
    },
    {
      key: "total_classes",
      label: "Classes",
      sortable: true,
      type: "number",
      format: (value: any) => value || 0,
      link: {
        route: "/app/classes",
        queryKey: "subject_id",
        rowKey: "subject_id",
      },
    },
  ];

  searchTerm = "";
  sortColumn = "subject_name";
  sortDirection: "asc" | "desc" = "asc";
  startDate?: string;
  endDate?: string;
  classId?: number;
  showFilters = false;

  get classOptions(): { value: number | null; label: string }[] {
    // const all = [{ value: null, label: "All Classes" }];

    const all: { value: number | undefined; label: string }[] = [
      { value: undefined, label: "All Classes" },
    ];

    const list = (this.classes || []).map((c) => ({
      value: c.class_id,
      label: c.class_name,
    }));
    return [...all, ...list];
  }

  constructor(
    private subjectService: SubjectService,
    private classService: ClassService,
    private dialogService: DialogService,
    private toastService: ToastService,
    private exportService: ExportService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadClasses();
    // this.loadSubjects();
  }

  loadClasses(): void {
    this.classService.getClasses().subscribe({
      next: (response) => {
        console.log("Classes API:", response);

        if (response.status === "success") {
          this.classes = response.data?.classes ?? [];
        }

        // ✅ Load subjects AFTER classes are ready
        this.loadSubjects();
      },
      error: (error) => {
        console.error("Classes API error:", error);

        // Still load subjects even if classes fail
        this.loadSubjects();
      },
    });
  }
  loadSubjects(): void {
    this.loading = true;
    const params: any = {
      page: this.pagination.page,
      limit: this.pagination.limit,
      sort_column: this.sortColumn,
      sort_direction: this.sortDirection.toUpperCase(),
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

    // this.subjectService.getSubjects(this.classId, params).subscribe({
    this.subjectService
      .getSubjects(this.classId ?? undefined, params)
      .subscribe({
        next: (response) => {
          this.loading = false;
          if (response.status === "success" && response.data) {
            this.subjects = response.data.subjects || [];
            this.pagination = response.data.pagination || this.pagination;
          }
        },
        error: (error) => {
          this.loading = false;
          this.toastService.show("Error loading subjects", "error");
          console.error("Error loading subjects:", error);
        },
      });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadSubjects();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadSubjects();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadSubjects();
  }

  onSortChange(sort: { column: string; direction: "asc" | "desc" }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadSubjects();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadSubjects();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.subject_id;
    this.sliderSubject = row;
    this.sliderVisible = true;
  }

  onView(row: any): void {
    this.sliderSubject = row;
    this.sliderVisible = true;
  }

  onRefresh(): void {
    this.loadSubjects();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }

  onEdit(row: any): void {
    this.router.navigate(["/app/subjects/edit", row.subject_id]);
  }

  onDelete(row: any): void {
    this.dialogService
      .confirm({
        title: "Delete Subject",
        message: `Are you sure you want to delete "${row.subject_name}"?`,
        confirmText: "Delete",
        cancelText: "Cancel",
        type: "danger",
      })
      .subscribe((confirmed) => {
        if (confirmed) {
          this.subjectService.deleteSubject(row.subject_id).subscribe({
            next: (response) => {
              if (response.status === "success") {
                this.toastService.show(
                  "Subject deleted successfully",
                  "success",
                );
                this.loadSubjects();
              }
            },
            error: () => {
              this.toastService.show("Error deleting subject", "error");
            },
          });
        }
      });
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.subjects.map((subject) => ({
      "Subject Name": subject.subject_name,
      "Subject Code": subject.subject_code || "-",
      Class: subject.class_name || "All Classes",
      Classes: subject.total_classes || 0,
    }));

    const headers = this.columns.map((col) => col.label);

    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(
          exportData,
          `subjects-${Date.now()}.csv`,
          headers,
        );
        break;
      case "pdf":
        this.exportService.exportToPDF(
          exportData,
          `subjects-${Date.now()}.pdf`,
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

  onClassChange(classId: number | null | undefined): void {
    this.classId = classId || undefined;
    this.pagination.page = 1;
    this.loadSubjects();
  }

  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
