import {
  SliderComponent
} from "./chunk-KWZH344N.js";
import {
  RemedialService
} from "./chunk-LRRU4FDA.js";
import {
  SubjectService
} from "./chunk-YKDQPPIU.js";
import "./chunk-YLBONAI4.js";
import {
  AcademicYearService
} from "./chunk-A5OHQDLX.js";
import {
  DialogService
} from "./chunk-UPFK65KQ.js";
import {
  EnhancedTableComponent,
  ExportService
} from "./chunk-LT2VDVRY.js";
import "./chunk-6W4TS6AE.js";
import {
  ClassService
} from "./chunk-23QP2TAM.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-DC2DSRDW.js";
import {
  ToastService
} from "./chunk-FQ6RWLG3.js";
import {
  Router,
  RouterModule
} from "./chunk-GXY6YLNG.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/remedial/remedial-list/remedial-list.component.ts
function RemedialListComponent_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const year_r1 = ctx.$implicit;
    \u0275\u0275property("value", year_r1.academic_year_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", year_r1.academic_year_name, " ");
  }
}
function RemedialListComponent_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cls_r2 = ctx.$implicit;
    \u0275\u0275property("value", cls_r2.class_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cls_r2.class_name, " ");
  }
}
function RemedialListComponent_option_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subject_r3 = ctx.$implicit;
    \u0275\u0275property("value", subject_r3.subject_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", subject_r3.subject_name, " ");
  }
}
function RemedialListComponent_app_slider_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-slider", 14);
    \u0275\u0275listener("close", function RemedialListComponent_app_slider_33_Template_app_slider_close_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.sliderVisible = false);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("visible", ctx_r4.sliderVisible);
  }
}
function RemedialListComponent_div_34_div_1_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const batch_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" | Days: ", batch_r7.schedule_days, "");
  }
}
function RemedialListComponent_div_34_div_1_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 31);
    \u0275\u0275listener("click", function RemedialListComponent_div_34_div_1_div_17_div_1_Template_button_click_3_listener($event) {
      const student_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(4);
      ctx_r4.onDeleteStudent(student_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(4, "i", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const student_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", student_r9.first_name, " ", student_r9.last_name, " (", student_r9.admission_number, ")");
  }
}
function RemedialListComponent_div_34_div_1_div_17_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1, " No students enrolled in this batch ");
    \u0275\u0275elementEnd();
  }
}
function RemedialListComponent_div_34_div_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, RemedialListComponent_div_34_div_1_div_17_div_1_Template, 5, 3, "div", 28)(2, RemedialListComponent_div_34_div_1_div_17_div_2_Template, 2, 0, "div", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const batch_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r4.batchStudents[batch_r7.batch_id]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r4.batchStudents[batch_r7.batch_id] == null ? null : ctx_r4.batchStudents[batch_r7.batch_id].length) === 0);
  }
}
function RemedialListComponent_div_34_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275listener("click", function RemedialListComponent_div_34_div_1_Template_div_click_1_listener() {
      const batch_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.toggleStudents(batch_r7.batch_id));
    });
    \u0275\u0275elementStart(2, "div")(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 19)(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 20);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 21);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p", 22);
    \u0275\u0275element(13, "i", 23);
    \u0275\u0275text(14);
    \u0275\u0275template(15, RemedialListComponent_div_34_div_1_span_15_Template, 2, 1, "span", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "i", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, RemedialListComponent_div_34_div_1_div_17_Template, 3, 2, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const batch_r7 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(batch_r7.batch_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", batch_r7.class_name, " - ", batch_r7.subject_name, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", batch_r7.student_count || 0, " students");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(batch_r7.status);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", batch_r7.schedule_time, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", batch_r7.schedule_days);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r4.expandedBatchId === batch_r7.batch_id ? "bi-chevron-up" : "bi-chevron-down");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.expandedBatchId === batch_r7.batch_id && ctx_r4.batchStudents[batch_r7.batch_id]);
  }
}
function RemedialListComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, RemedialListComponent_div_34_div_1_Template, 18, 9, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r4.batches);
  }
}
var RemedialListComponent = class _RemedialListComponent {
  remedialService;
  academicYearService;
  classService;
  subjectService;
  toastService;
  exportService;
  dialogService;
  router;
  batches = [];
  academicYears = [];
  classes = [];
  subjects = [];
  loading = false;
  showFilters = false;
  selectedRowId;
  expandedBatchId = null;
  batchStudents = {};
  pagination = {
    page: 1,
    limit: 20,
    total: 0,
    pages: 0
  };
  columns = [
    {
      key: "batch_name",
      label: "Batch Name",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "class_name",
      label: "Class",
      sortable: true,
      format: (value, row) => {
        return `${value || "-"} - ${row?.subject_name || "-"}`;
      }
    },
    {
      key: "student_count",
      label: "Students",
      sortable: true,
      type: "number",
      format: (value) => {
        return `<span class="badge badge-info">${value || 0}</span>`;
      }
    },
    {
      key: "schedule_time",
      label: "Schedule",
      sortable: false,
      format: (value, row) => {
        return `${value || "-"}${row?.schedule_days ? " | " + row.schedule_days : ""}`;
      }
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      format: (value) => {
        return `<span class="badge badge-success">${value || "-"}</span>`;
      }
    }
  ];
  searchTerm = "";
  sortColumn = "batch_name";
  sortDirection = "asc";
  startDate;
  endDate;
  academicYearId;
  classId;
  subjectId;
  // sliderVisible = false;
  constructor(remedialService, academicYearService, classService, subjectService, toastService, exportService, dialogService, router) {
    this.remedialService = remedialService;
    this.academicYearService = academicYearService;
    this.classService = classService;
    this.subjectService = subjectService;
    this.toastService = toastService;
    this.exportService = exportService;
    this.dialogService = dialogService;
    this.router = router;
  }
  ngOnInit() {
    this.loadAcademicYears();
    this.loadClasses();
    this.loadSubjects();
    this.loadBatches();
  }
  loadAcademicYears() {
    this.academicYearService.getAcademicYears().subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.academicYears = response.data.academic_years || [];
        }
      }
    });
  }
  loadClasses() {
    this.classService.getClasses().subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.classes = response.data.classes || [];
        }
      }
    });
  }
  loadSubjects() {
    this.subjectService.getSubjects().subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.subjects = response.data.subjects || [];
        }
      }
    });
  }
  loadBatches() {
    this.loading = true;
    const params = {
      page: this.pagination.page,
      limit: this.pagination.limit,
      sort_column: this.sortColumn,
      sort_direction: this.sortDirection.toUpperCase()
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
    if (this.subjectId) {
      params.subject_id = this.subjectId;
    }
    this.remedialService.getBatches(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === "success" && response.data) {
          this.batches = response.data.batches || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show("Error loading remedial batches", "error");
        console.error("Error loading remedial batches:", error);
      }
    });
  }
  toggleStudents(batchId) {
    if (this.expandedBatchId === batchId) {
      this.expandedBatchId = null;
    } else {
      this.expandedBatchId = batchId;
      if (!this.batchStudents[batchId]) {
        this.loadBatchStudents(batchId);
      }
    }
  }
  loadBatchStudents(batchId) {
    this.remedialService.getBatchStudents(batchId).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          console.log("Batch students:", response.data.students);
          this.batchStudents[batchId] = response.data.students || [];
        }
      },
      error: () => {
        this.toastService.show("Error loading batch students", "error");
      }
    });
  }
  onPageChange(page) {
    this.pagination.page = page;
    this.loadBatches();
  }
  onPageSizeChange(size) {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadBatches();
  }
  onSearchChange(search) {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadBatches();
  }
  onSortChange(sort) {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadBatches();
  }
  onDateFilterChange(filters) {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadBatches();
  }
  onRowSelect(row) {
    this.selectedRowId = row.batch_id;
    this.toggleStudents(row.batch_id);
  }
  onRefresh() {
    this.loadBatches();
  }
  onAdd() {
  }
  onEdit(row) {
    this.router.navigate(["/app/remedial/edit", row.batch_id]);
  }
  onDelete(row) {
    this.dialogService.confirm({
      title: "Delete Remedial Batch",
      message: `Are you sure you want to delete this batch (ID: ${row.batch_id})?`,
      confirmText: "Delete",
      cancelText: "Cancel",
      type: "danger"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.remedialService.deleteBatch(row.batch_id).subscribe({
          next: (response) => {
            if (response.status === "success") {
              this.toastService.show("Batch deleted successfully", "success");
              this.loadBatches();
            } else {
              this.toastService.show(response.message || "Delete failed", "error");
            }
          },
          error: () => {
            this.toastService.show("Error deleting batch", "error");
          }
        });
      }
    });
  }
  onExportClick(event) {
    const exportData = this.batches.map((batch) => ({
      "Batch Name": batch.batch_name || "-",
      "Class": batch.class_name || "-",
      "Subject": batch.subject_name || "-",
      "Students": batch.student_count || 0,
      "Schedule Time": batch.schedule_time || "-",
      "Schedule Days": batch.schedule_days || "-",
      "Status": batch.status || "-"
    }));
    const headers = this.columns.map((col) => col.label);
    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(exportData, `remedial-batches-${Date.now()}.csv`, headers);
        break;
      case "pdf":
        this.exportService.exportToPDF(exportData, `remedial-batches-${Date.now()}.pdf`, headers);
        break;
      case "print":
        this.exportService.printTable(exportData, headers);
        break;
      case "copy":
        this.exportService.copyToClipboard(exportData, headers);
        break;
    }
  }
  onAcademicYearChange(yearId) {
    this.academicYearId = yearId || void 0;
    this.pagination.page = 1;
    this.loadBatches();
  }
  onClassChange(classId) {
    this.classId = classId || void 0;
    this.pagination.page = 1;
    this.loadBatches();
  }
  onSubjectChange(subjectId) {
    this.subjectId = subjectId || void 0;
    this.pagination.page = 1;
    this.loadBatches();
  }
  // Function to open slider
  onAddStudent() {
    this.sliderVisible = true;
  }
  _sliderVisible = false;
  get sliderVisible() {
    return this._sliderVisible;
  }
  set sliderVisible(value) {
    this._sliderVisible = value;
    if (!value) {
      this.loadBatches();
    }
  }
  onDeleteStudent(remedialStudentId) {
    this.dialogService.confirm({
      title: "Remove Student",
      message: "Are you sure you want to remove this student from the batch?",
      confirmText: "Remove",
      cancelText: "Cancel",
      type: "danger"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.remedialService.removeStudent(remedialStudentId).subscribe({
          next: (res) => {
            if (res.status === "success") {
              this.toastService.show("Student removed successfully", "success");
              if (this.expandedBatchId) {
                this.loadBatchStudents(this.expandedBatchId);
              }
              this.loadBatches();
            } else {
              this.toastService.show(res.message || "Failed to remove student", "error");
            }
          },
          error: () => {
            this.toastService.show("Error removing student", "error");
          }
        });
      }
    });
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function RemedialListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RemedialListComponent)(\u0275\u0275directiveInject(RemedialService), \u0275\u0275directiveInject(AcademicYearService), \u0275\u0275directiveInject(ClassService), \u0275\u0275directiveInject(SubjectService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RemedialListComponent, selectors: [["app-remedial-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 35, vars: 24, consts: [[1, "remedial-list-container"], [1, "page-header", "position-relative"], [1, "page-title"], [1, "page-subtitle"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "position-absolute", "end-0", "top-50", "translate-middle-y", 2, "height", "40px", "font-size", "16px", "margin-right", "6px", 3, "click"], [1, "bi", "bi-plus-circle"], [1, "additional-filters", "filter-panel"], [1, "filter-group"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "dateFilterChange", "rowSelect", "refresh", "addClick", "editClick", "deleteClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "selectedRowId", "rowIdKey", "addRoute", "addLabel", "searchPlaceholder", "enableExport", "enableDateFilter"], [3, "visible", "close", 4, "ngIf"], ["class", "batch-details", 4, "ngIf"], [3, "close", "visible"], [1, "batch-details"], ["class", "batch-item", 4, "ngFor", "ngForOf"], [1, "batch-item"], [1, "batch-header", 3, "click"], [1, "batch-info"], [1, "badge", "badge-info"], [1, "badge", "badge-success"], [1, "batch-schedule"], [1, "bi", "bi-clock"], [4, "ngIf"], [1, "bi", 3, "ngClass"], ["class", "students-list", 4, "ngIf"], [1, "students-list"], ["class", "student-item", 4, "ngFor", "ngForOf"], ["class", "no-students", 4, "ngIf"], [1, "student-item"], ["title", "Delete", 1, "btn-icon", "btn-delete", "ms-3", 3, "click"], [1, "bi", "bi-trash"], [1, "no-students"]], template: function RemedialListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Remedial Batches");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Manage remedial batches and student enrollments");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275listener("click", function RemedialListComponent_Template_button_click_7_listener($event) {
        ctx.onAddStudent();
        return $event.stopPropagation();
      });
      \u0275\u0275element(8, "i", 5);
      \u0275\u0275text(9, " Add Remedial Student ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 6)(11, "div", 7)(12, "label");
      \u0275\u0275text(13, "Academic Year:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function RemedialListComponent_Template_select_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.academicYearId, $event) || (ctx.academicYearId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function RemedialListComponent_Template_select_change_14_listener() {
        return ctx.onAcademicYearChange(ctx.academicYearId);
      });
      \u0275\u0275elementStart(15, "option", 9);
      \u0275\u0275text(16, "All Academic Years");
      \u0275\u0275elementEnd();
      \u0275\u0275template(17, RemedialListComponent_option_17_Template, 2, 2, "option", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 7)(19, "label");
      \u0275\u0275text(20, "Class:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function RemedialListComponent_Template_select_ngModelChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.classId, $event) || (ctx.classId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function RemedialListComponent_Template_select_change_21_listener() {
        return ctx.onClassChange(ctx.classId);
      });
      \u0275\u0275elementStart(22, "option", 9);
      \u0275\u0275text(23, "All Classes");
      \u0275\u0275elementEnd();
      \u0275\u0275template(24, RemedialListComponent_option_24_Template, 2, 2, "option", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 7)(26, "label");
      \u0275\u0275text(27, "Subject:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function RemedialListComponent_Template_select_ngModelChange_28_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.subjectId, $event) || (ctx.subjectId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function RemedialListComponent_Template_select_change_28_listener() {
        return ctx.onSubjectChange(ctx.subjectId);
      });
      \u0275\u0275elementStart(29, "option", 9);
      \u0275\u0275text(30, "All Subjects");
      \u0275\u0275elementEnd();
      \u0275\u0275template(31, RemedialListComponent_option_31_Template, 2, 2, "option", 10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "app-enhanced-table", 11);
      \u0275\u0275listener("pageChange", function RemedialListComponent_Template_app_enhanced_table_pageChange_32_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function RemedialListComponent_Template_app_enhanced_table_pageSizeChange_32_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function RemedialListComponent_Template_app_enhanced_table_searchChange_32_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function RemedialListComponent_Template_app_enhanced_table_sortChange_32_listener($event) {
        return ctx.onSortChange($event);
      })("dateFilterChange", function RemedialListComponent_Template_app_enhanced_table_dateFilterChange_32_listener($event) {
        return ctx.onDateFilterChange($event);
      })("rowSelect", function RemedialListComponent_Template_app_enhanced_table_rowSelect_32_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function RemedialListComponent_Template_app_enhanced_table_refresh_32_listener() {
        return ctx.onRefresh();
      })("addClick", function RemedialListComponent_Template_app_enhanced_table_addClick_32_listener() {
        return ctx.onAdd();
      })("editClick", function RemedialListComponent_Template_app_enhanced_table_editClick_32_listener($event) {
        return ctx.onEdit($event);
      })("deleteClick", function RemedialListComponent_Template_app_enhanced_table_deleteClick_32_listener($event) {
        return ctx.onDelete($event);
      })("exportClick", function RemedialListComponent_Template_app_enhanced_table_exportClick_32_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function RemedialListComponent_Template_app_enhanced_table_filterToggle_32_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(33, RemedialListComponent_app_slider_33_Template, 1, 1, "app-slider", 12)(34, RemedialListComponent_div_34_Template, 2, 1, "div", 13);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275classProp("expanded", ctx.showFilters);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.academicYearId);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.academicYears);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.classId);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.classes);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.subjectId);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.subjects);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.batches)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("selectedRowId", ctx.selectedRowId)("rowIdKey", "batch_id")("addRoute", "/app/remedial/create")("addLabel", "Create Batch")("searchPlaceholder", "Search by batch name...")("enableExport", true)("enableDateFilter", true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.sliderVisible);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.batches.length > 0);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, EnhancedTableComponent, SliderComponent], styles: ["\n\n.remedial-list-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n@media (max-width: 768px) {\n  .remedial-list-container[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .remedial-list-container[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n  }\n}\n.remedial-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-top: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-md);\n}\n.remedial-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n}\n.remedial-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-lg);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  flex-wrap: wrap;\n  align-items: end;\n}\n.remedial-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n  min-width: 150px;\n}\n.remedial-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.remedial-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm) var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  transition: all var(--transition-base);\n}\n.remedial-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.remedial-list-container[_ngcontent-%COMP%]   .batch-details[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-lg);\n}\n.remedial-list-container[_ngcontent-%COMP%]   .batch-details[_ngcontent-%COMP%]   .batch-item[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  margin-bottom: var(--spacing-md);\n  overflow: hidden;\n}\n.remedial-list-container[_ngcontent-%COMP%]   .batch-details[_ngcontent-%COMP%]   .batch-item[_ngcontent-%COMP%]   .batch-header[_ngcontent-%COMP%] {\n  padding: var(--spacing-md);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  transition: background-color var(--transition-base);\n}\n.remedial-list-container[_ngcontent-%COMP%]   .batch-details[_ngcontent-%COMP%]   .batch-item[_ngcontent-%COMP%]   .batch-header[_ngcontent-%COMP%]:hover {\n  background-color: rgba(37, 99, 235, 0.05);\n}\n.remedial-list-container[_ngcontent-%COMP%]   .batch-details[_ngcontent-%COMP%]   .batch-item[_ngcontent-%COMP%]   .batch-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 var(--spacing-xs) 0;\n  font-size: var(--font-size-base);\n  color: var(--text-primary);\n}\n.remedial-list-container[_ngcontent-%COMP%]   .batch-details[_ngcontent-%COMP%]   .batch-item[_ngcontent-%COMP%]   .batch-header[_ngcontent-%COMP%]   .batch-info[_ngcontent-%COMP%] {\n  margin: var(--spacing-xs) 0;\n  font-size: var(--font-size-sm);\n  color: var(--text-secondary);\n  display: flex;\n  gap: var(--spacing-sm);\n  flex-wrap: wrap;\n}\n.remedial-list-container[_ngcontent-%COMP%]   .batch-details[_ngcontent-%COMP%]   .batch-item[_ngcontent-%COMP%]   .batch-header[_ngcontent-%COMP%]   .batch-schedule[_ngcontent-%COMP%] {\n  margin: var(--spacing-xs) 0 0 0;\n  font-size: var(--font-size-sm);\n  color: var(--text-secondary);\n}\n.remedial-list-container[_ngcontent-%COMP%]   .batch-details[_ngcontent-%COMP%]   .batch-item[_ngcontent-%COMP%]   .students-list[_ngcontent-%COMP%] {\n  padding: var(--spacing-md);\n  background: var(--bg-primary);\n  border-top: 1px solid var(--border-color);\n}\n.remedial-list-container[_ngcontent-%COMP%]   .batch-details[_ngcontent-%COMP%]   .batch-item[_ngcontent-%COMP%]   .students-list[_ngcontent-%COMP%]   .student-item[_ngcontent-%COMP%] {\n  padding: var(--spacing-xs) 0;\n  font-size: var(--font-size-sm);\n  color: var(--text-primary);\n}\n.remedial-list-container[_ngcontent-%COMP%]   .batch-details[_ngcontent-%COMP%]   .batch-item[_ngcontent-%COMP%]   .students-list[_ngcontent-%COMP%]   .no-students[_ngcontent-%COMP%] {\n  padding: var(--spacing-md);\n  text-align: center;\n  color: var(--text-secondary);\n  font-size: var(--font-size-sm);\n}\n.btn-delete[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background: rgba(239, 68, 68, 0.08);\n  color: rgba(239, 68, 68, 0.7);\n}\n.btn-delete[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.15);\n  color: rgba(239, 68, 68, 0.9);\n  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.2);\n  transform: translateY(-2px) scale(1.05);\n}\n.btn-delete[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.btn-delete[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=remedial-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RemedialListComponent, { className: "RemedialListComponent", filePath: "src\\app\\modules\\remedial\\remedial-list\\remedial-list.component.ts", lineNumber: 22 });
})();
export {
  RemedialListComponent
};
//# sourceMappingURL=chunk-KUTVHAC3.js.map
