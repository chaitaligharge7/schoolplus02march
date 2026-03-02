import {
  CourseService
} from "./chunk-CSHECG3T.js";
import "./chunk-FN4NGQWM.js";
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
import {
  SearchSelectComponent
} from "./chunk-P7OLLKRL.js";
import "./chunk-6W4TS6AE.js";
import {
  ClassService
} from "./chunk-23QP2TAM.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
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
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/courses/course-list/course-list.component.ts
var _c0 = (a0, a1) => ({ "badge-success": a0, "badge-secondary": a1 });
function CourseListComponent_div_21_div_1_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const enrollment_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", enrollment_r4.student_name, " (", enrollment_r4.admission_number, ")");
  }
}
function CourseListComponent_div_21_div_1_div_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1, " No students enrolled in this course ");
    \u0275\u0275elementEnd();
  }
}
function CourseListComponent_div_21_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, CourseListComponent_div_21_div_1_div_15_div_1_Template, 3, 2, "div", 21)(2, CourseListComponent_div_21_div_1_div_15_div_2_Template, 2, 0, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const course_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.courseEnrollments[course_r2.course_id]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.courseEnrollments[course_r2.course_id] == null ? null : ctx_r2.courseEnrollments[course_r2.course_id].length) === 0);
  }
}
function CourseListComponent_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275listener("click", function CourseListComponent_div_21_div_1_Template_div_click_1_listener() {
      const course_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleEnrollments(course_r2.course_id));
    });
    \u0275\u0275elementStart(2, "div")(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 15)(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 16);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 17);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(14, "i", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, CourseListComponent_div_21_div_1_div_15_Template, 3, 2, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const course_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(course_r2.course_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(course_r2.course_code || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(course_r2.class_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", course_r2.enrollment_count || 0, " enrollments");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(8, _c0, course_r2.status === "active", course_r2.status === "inactive"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", course_r2.status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.expandedCourseId === course_r2.course_id ? "bi-chevron-up" : "bi-chevron-down");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.expandedCourseId === course_r2.course_id && ctx_r2.courseEnrollments[course_r2.course_id]);
  }
}
function CourseListComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275template(1, CourseListComponent_div_21_div_1_Template, 16, 11, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.courses);
  }
}
var CourseListComponent = class _CourseListComponent {
  courseService;
  academicYearService;
  classService;
  toastService;
  dialogService;
  exportService;
  router;
  courses = [];
  academicYears = [];
  classes = [];
  loading = false;
  selectedRowId;
  expandedCourseId = null;
  courseEnrollments = {};
  showFilters = false;
  pagination = {
    page: 1,
    limit: 20,
    total: 0,
    pages: 0
  };
  columns = [
    {
      key: "course_name",
      label: "Course Name",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "course_code",
      label: "Course Code",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "class_name",
      label: "Class",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "teacher_name",
      label: "Teacher",
      sortable: true,
      format: (value, row) => {
        return `${row?.teacher_first_name || ""} ${row?.teacher_last_name || ""}`.trim() || "-";
      }
    },
    {
      key: "enrollment_count",
      label: "Enrollments",
      sortable: true,
      type: "number",
      format: (value) => {
        return `<span class="badge badge-info">${value || 0}</span>`;
      }
    },
    {
      key: "start_date",
      label: "Start Date",
      sortable: true,
      type: "date"
    },
    {
      key: "end_date",
      label: "End Date",
      sortable: true,
      type: "date"
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      format: (value) => {
        const badgeClass = value === "active" ? "badge-success" : "badge-secondary";
        return `<span class="badge ${badgeClass}">${value || "-"}</span>`;
      }
    }
  ];
  searchTerm = "";
  sortColumn = "course_name";
  sortDirection = "asc";
  startDate;
  endDate;
  academicYearId;
  classId;
  status;
  get academicYearOptions() {
    const all = [{ value: void 0, label: "All Academic Years" }];
    const years = (this.academicYears || []).map((y) => ({ value: y.academic_year_id, label: y.academic_year_name || "" }));
    return [...all, ...years];
  }
  get classOptions() {
    const all = [{ value: void 0, label: "All Classes" }];
    const list = (this.classes || []).map((c) => ({ value: c.class_id, label: c.class_name || "" }));
    return [...all, ...list];
  }
  courseStatusOptions = [
    { value: void 0, label: "All Status" },
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" }
  ];
  constructor(courseService, academicYearService, classService, toastService, dialogService, exportService, router) {
    this.courseService = courseService;
    this.academicYearService = academicYearService;
    this.classService = classService;
    this.toastService = toastService;
    this.dialogService = dialogService;
    this.exportService = exportService;
    this.router = router;
  }
  ngOnInit() {
    this.loadAcademicYears();
    this.loadClasses();
    this.loadCourses();
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
  loadCourses() {
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
    if (this.status) {
      params.status = this.status;
    }
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
      }
    });
  }
  toggleEnrollments(courseId) {
    if (this.expandedCourseId === courseId) {
      this.expandedCourseId = null;
    } else {
      this.expandedCourseId = courseId;
      if (!this.courseEnrollments[courseId]) {
        this.loadEnrollments(courseId);
      }
    }
  }
  loadEnrollments(courseId) {
    this.courseService.getEnrollments(courseId).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.courseEnrollments[courseId] = response.data.enrollments || [];
        }
      },
      error: () => {
        this.toastService.show("Error loading course enrollments", "error");
      }
    });
  }
  onPageChange(page) {
    this.pagination.page = page;
    this.loadCourses();
  }
  onPageSizeChange(size) {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadCourses();
  }
  onSearchChange(search) {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadCourses();
  }
  onSortChange(sort) {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadCourses();
  }
  onDateFilterChange(filters) {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadCourses();
  }
  onRowSelect(row) {
    this.selectedRowId = row.course_id;
  }
  onRefresh() {
    this.loadCourses();
  }
  // onAdd(row:any): void {
  //   this.router.navigate(["/app/courses/create"]);
  // }
  onExportClick(event) {
    const exportData = this.courses.map((course) => ({
      "Course Name": course.course_name || "-",
      "Course Code": course.course_code || "-",
      Class: course.class_name || "-",
      Teacher: `${course.teacher_first_name || ""} ${course.teacher_last_name || ""}`.trim() || "-",
      Enrollments: course.enrollment_count || 0,
      "Start Date": this.formatDate(course.start_date),
      "End Date": this.formatDate(course.end_date),
      Status: course.status || "-"
    }));
    const headers = this.columns.map((col) => col.label);
    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(exportData, `courses-${Date.now()}.csv`, headers);
        break;
      case "pdf":
        this.exportService.exportToPDF(exportData, `courses-${Date.now()}.pdf`, headers);
        break;
      case "print":
        this.exportService.printTable(exportData, headers);
        break;
      case "copy":
        this.exportService.copyToClipboard(exportData, headers);
        break;
    }
  }
  formatDate(dateString) {
    if (!dateString)
      return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
  }
  onAcademicYearChange(yearId) {
    this.academicYearId = yearId || void 0;
    this.pagination.page = 1;
    this.loadCourses();
  }
  onClassChange(classId) {
    this.classId = classId || void 0;
    this.pagination.page = 1;
    this.loadCourses();
  }
  onStatusChange(status) {
    this.status = status || void 0;
    this.pagination.page = 1;
    this.loadCourses();
  }
  onEdit(row) {
    this.router.navigate(["/app/courses/edit", row.course_id]);
  }
  onDelete(row) {
    this.dialogService.confirm({
      title: "Delete course",
      message: `Are you sure you want to delete "${row.class_name}"?`,
      confirmText: "Delete",
      cancelText: "Cancel",
      type: "danger"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.courseService.deleteCourse(row.course_id).subscribe({
          next: (response) => {
            if (response.status === "success") {
              this.toastService.show("course deleted successfully", "success");
              this.loadCourses();
            }
          },
          error: () => {
            this.toastService.show("Error deleting course", "error");
          }
        });
      }
    });
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function CourseListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CourseListComponent)(\u0275\u0275directiveInject(CourseService), \u0275\u0275directiveInject(AcademicYearService), \u0275\u0275directiveInject(ClassService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CourseListComponent, selectors: [["app-course-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 20, consts: [[1, "course-list-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "additional-filters", "filter-panel"], [1, "filter-group"], ["placeholder", "Search or select academic year", 3, "ngModelChange", "valueChange", "options", "ngModel"], ["placeholder", "Search or select class", 3, "ngModelChange", "valueChange", "options", "ngModel"], ["placeholder", "Search or select status", 3, "ngModelChange", "valueChange", "options", "ngModel"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "dateFilterChange", "rowSelect", "refresh", "editClick", "deleteClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "selectedRowId", "rowIdKey", "addRoute", "addLabel", "searchPlaceholder", "enableExport", "enableDateFilter"], ["class", "course-details", 4, "ngIf"], [1, "course-details"], ["class", "course-item", 4, "ngFor", "ngForOf"], [1, "course-item"], [1, "course-header", 3, "click"], [1, "course-info"], [1, "badge", "badge-info"], [1, "badge", 3, "ngClass"], [1, "bi", 3, "ngClass"], ["class", "enrollments-list", 4, "ngIf"], [1, "enrollments-list"], ["class", "enrollment-item", 4, "ngFor", "ngForOf"], ["class", "no-enrollments", 4, "ngIf"], [1, "enrollment-item"], [1, "no-enrollments"]], template: function CourseListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Courses Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Manage courses and student enrollments");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "label");
      \u0275\u0275text(10, "Academic Year:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "app-search-select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function CourseListComponent_Template_app_search_select_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.academicYearId, $event) || (ctx.academicYearId = $event);
        return $event;
      });
      \u0275\u0275listener("valueChange", function CourseListComponent_Template_app_search_select_valueChange_11_listener($event) {
        return ctx.onAcademicYearChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 5)(13, "label");
      \u0275\u0275text(14, "Class:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "app-search-select", 7);
      \u0275\u0275twoWayListener("ngModelChange", function CourseListComponent_Template_app_search_select_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.classId, $event) || (ctx.classId = $event);
        return $event;
      });
      \u0275\u0275listener("valueChange", function CourseListComponent_Template_app_search_select_valueChange_15_listener($event) {
        return ctx.onClassChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 5)(17, "label");
      \u0275\u0275text(18, "Status:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "app-search-select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function CourseListComponent_Template_app_search_select_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.status, $event) || (ctx.status = $event);
        return $event;
      });
      \u0275\u0275listener("valueChange", function CourseListComponent_Template_app_search_select_valueChange_19_listener($event) {
        return ctx.onStatusChange($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "app-enhanced-table", 9);
      \u0275\u0275listener("pageChange", function CourseListComponent_Template_app_enhanced_table_pageChange_20_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function CourseListComponent_Template_app_enhanced_table_pageSizeChange_20_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function CourseListComponent_Template_app_enhanced_table_searchChange_20_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function CourseListComponent_Template_app_enhanced_table_sortChange_20_listener($event) {
        return ctx.onSortChange($event);
      })("dateFilterChange", function CourseListComponent_Template_app_enhanced_table_dateFilterChange_20_listener($event) {
        return ctx.onDateFilterChange($event);
      })("rowSelect", function CourseListComponent_Template_app_enhanced_table_rowSelect_20_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function CourseListComponent_Template_app_enhanced_table_refresh_20_listener() {
        return ctx.onRefresh();
      })("editClick", function CourseListComponent_Template_app_enhanced_table_editClick_20_listener($event) {
        return ctx.onEdit($event);
      })("deleteClick", function CourseListComponent_Template_app_enhanced_table_deleteClick_20_listener($event) {
        return ctx.onDelete($event);
      })("exportClick", function CourseListComponent_Template_app_enhanced_table_exportClick_20_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function CourseListComponent_Template_app_enhanced_table_filterToggle_20_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, CourseListComponent_div_21_Template, 2, 1, "div", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275classProp("expanded", ctx.showFilters);
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.academicYearOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.academicYearId);
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.classOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.classId);
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.courseStatusOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.status);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.courses)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("selectedRowId", ctx.selectedRowId)("rowIdKey", "course_id")("addRoute", "/app/courses/create")("addLabel", "Create Course")("searchPlaceholder", "Search by course name...")("enableExport", true)("enableDateFilter", true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.courses.length > 0);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    FormsModule,
    NgControlStatus,
    NgModel,
    RouterModule,
    EnhancedTableComponent,
    SearchSelectComponent
  ], styles: ["\n\n.course-list-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n@media (max-width: 768px) {\n  .course-list-container[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .course-list-container[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n  }\n}\n.course-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-top: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-md);\n}\n.course-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n}\n.course-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-lg);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  flex-wrap: wrap;\n  align-items: end;\n}\n.course-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n  min-width: 150px;\n}\n.course-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.course-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm) var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  transition: all var(--transition-base);\n}\n.course-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.course-list-container[_ngcontent-%COMP%]   .course-details[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-lg);\n}\n.course-list-container[_ngcontent-%COMP%]   .course-details[_ngcontent-%COMP%]   .course-item[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  margin-bottom: var(--spacing-md);\n  overflow: hidden;\n}\n.course-list-container[_ngcontent-%COMP%]   .course-details[_ngcontent-%COMP%]   .course-item[_ngcontent-%COMP%]   .course-header[_ngcontent-%COMP%] {\n  padding: var(--spacing-md);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  transition: background-color var(--transition-base);\n}\n.course-list-container[_ngcontent-%COMP%]   .course-details[_ngcontent-%COMP%]   .course-item[_ngcontent-%COMP%]   .course-header[_ngcontent-%COMP%]:hover {\n  background-color: rgba(37, 99, 235, 0.05);\n}\n.course-list-container[_ngcontent-%COMP%]   .course-details[_ngcontent-%COMP%]   .course-item[_ngcontent-%COMP%]   .course-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 var(--spacing-xs) 0;\n  font-size: var(--font-size-base);\n  color: var(--text-primary);\n}\n.course-list-container[_ngcontent-%COMP%]   .course-details[_ngcontent-%COMP%]   .course-item[_ngcontent-%COMP%]   .course-header[_ngcontent-%COMP%]   .course-info[_ngcontent-%COMP%] {\n  margin: var(--spacing-xs) 0 0 0;\n  font-size: var(--font-size-sm);\n  color: var(--text-secondary);\n  display: flex;\n  gap: var(--spacing-sm);\n  flex-wrap: wrap;\n}\n.course-list-container[_ngcontent-%COMP%]   .course-details[_ngcontent-%COMP%]   .course-item[_ngcontent-%COMP%]   .enrollments-list[_ngcontent-%COMP%] {\n  padding: var(--spacing-md);\n  background: var(--bg-primary);\n  border-top: 1px solid var(--border-color);\n}\n.course-list-container[_ngcontent-%COMP%]   .course-details[_ngcontent-%COMP%]   .course-item[_ngcontent-%COMP%]   .enrollments-list[_ngcontent-%COMP%]   .enrollment-item[_ngcontent-%COMP%] {\n  padding: var(--spacing-xs) 0;\n  font-size: var(--font-size-sm);\n  color: var(--text-primary);\n}\n.course-list-container[_ngcontent-%COMP%]   .course-details[_ngcontent-%COMP%]   .course-item[_ngcontent-%COMP%]   .enrollments-list[_ngcontent-%COMP%]   .no-enrollments[_ngcontent-%COMP%] {\n  padding: var(--spacing-md);\n  text-align: center;\n  color: var(--text-secondary);\n  font-size: var(--font-size-sm);\n}\n/*# sourceMappingURL=course-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CourseListComponent, { className: "CourseListComponent", filePath: "src\\app\\modules\\courses\\course-list\\course-list.component.ts", lineNumber: 32 });
})();
export {
  CourseListComponent
};
//# sourceMappingURL=chunk-5EFBQAFC.js.map
