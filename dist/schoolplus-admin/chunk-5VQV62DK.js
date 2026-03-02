import {
  RteStudentService
} from "./chunk-XWDKP3DZ.js";
import {
  AcademicYearService
} from "./chunk-A5OHQDLX.js";
import {
  EnhancedTableComponent,
  ExportService
} from "./chunk-LT2VDVRY.js";
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
  NgForOf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/rte-students/rte-student-list/rte-student-list.component.ts
function RteStudentListComponent_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
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
function RteStudentListComponent_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
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
var RteStudentListComponent = class _RteStudentListComponent {
  rteStudentService;
  academicYearService;
  classService;
  toastService;
  exportService;
  router;
  rteStudents = [];
  academicYears = [];
  classes = [];
  loading = false;
  showFilters = false;
  selectedRowId;
  pagination = {
    page: 1,
    limit: 20,
    total: 0,
    pages: 0
  };
  columns = [
    {
      key: "student_name",
      label: "Student",
      sortable: true,
      format: (value, row) => {
        return `${row?.first_name || ""} ${row?.last_name || ""}`.trim() || "-";
      }
    },
    {
      key: "admission_number",
      label: "Admission No.",
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
      key: "rte_category",
      label: "RTE Category",
      sortable: true,
      format: (value) => {
        return `<span class="badge badge-info">${value || "-"}</span>`;
      }
    },
    {
      key: "admission_date",
      label: "Admission Date",
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
  sortColumn = "admission_date";
  sortDirection = "desc";
  startDate;
  endDate;
  academicYearId;
  classId;
  status;
  constructor(rteStudentService, academicYearService, classService, toastService, exportService, router) {
    this.rteStudentService = rteStudentService;
    this.academicYearService = academicYearService;
    this.classService = classService;
    this.toastService = toastService;
    this.exportService = exportService;
    this.router = router;
  }
  ngOnInit() {
    this.loadAcademicYears();
    this.loadClasses();
    this.loadRteStudents();
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
  loadRteStudents() {
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
    this.rteStudentService.getRteStudents(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === "success" && response.data) {
          this.rteStudents = response.data.rte_students || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show("Error loading RTE students", "error");
        console.error("Error loading RTE students:", error);
      }
    });
  }
  onPageChange(page) {
    this.pagination.page = page;
    this.loadRteStudents();
  }
  onPageSizeChange(size) {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadRteStudents();
  }
  onSearchChange(search) {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadRteStudents();
  }
  onSortChange(sort) {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadRteStudents();
  }
  onDateFilterChange(filters) {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadRteStudents();
  }
  onRowSelect(row) {
    this.selectedRowId = row.rte_student_id;
  }
  onRefresh() {
    this.loadRteStudents();
  }
  onAdd() {
  }
  onExportClick(event) {
    const exportData = this.rteStudents.map((student) => ({
      "Student Name": `${student.first_name || ""} ${student.last_name || ""}`.trim(),
      "Admission Number": student.admission_number || "-",
      "Class": student.class_name || "-",
      "RTE Category": student.rte_category || "-",
      "Admission Date": this.formatDate(student.admission_date),
      "Status": student.status || "-"
    }));
    const headers = this.columns.map((col) => col.label);
    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(exportData, `rte-students-${Date.now()}.csv`, headers);
        break;
      case "pdf":
        this.exportService.exportToPDF(exportData, `rte-students-${Date.now()}.pdf`, headers);
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
    return date.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" });
  }
  onAcademicYearChange(yearId) {
    this.academicYearId = yearId || void 0;
    this.pagination.page = 1;
    this.loadRteStudents();
  }
  onClassChange(classId) {
    this.classId = classId || void 0;
    this.pagination.page = 1;
    this.loadRteStudents();
  }
  onStatusChange(status) {
    this.status = status || void 0;
    this.pagination.page = 1;
    this.loadRteStudents();
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function RteStudentListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RteStudentListComponent)(\u0275\u0275directiveInject(RteStudentService), \u0275\u0275directiveInject(AcademicYearService), \u0275\u0275directiveInject(ClassService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RteStudentListComponent, selectors: [["app-rte-student-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 21, consts: [[1, "rte-student-list-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "additional-filters", "filter-panel"], [1, "filter-group"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "active"], ["value", "inactive"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "dateFilterChange", "rowSelect", "refresh", "addClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "selectedRowId", "rowIdKey", "addRoute", "addLabel", "searchPlaceholder", "enableExport", "enableDateFilter"]], template: function RteStudentListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "RTE Students");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Manage Right to Education (RTE) students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "label");
      \u0275\u0275text(10, "Academic Year:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function RteStudentListComponent_Template_select_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.academicYearId, $event) || (ctx.academicYearId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function RteStudentListComponent_Template_select_change_11_listener() {
        return ctx.onAcademicYearChange(ctx.academicYearId);
      });
      \u0275\u0275elementStart(12, "option", 7);
      \u0275\u0275text(13, "All Academic Years");
      \u0275\u0275elementEnd();
      \u0275\u0275template(14, RteStudentListComponent_option_14_Template, 2, 2, "option", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 5)(16, "label");
      \u0275\u0275text(17, "Class:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function RteStudentListComponent_Template_select_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.classId, $event) || (ctx.classId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function RteStudentListComponent_Template_select_change_18_listener() {
        return ctx.onClassChange(ctx.classId);
      });
      \u0275\u0275elementStart(19, "option", 7);
      \u0275\u0275text(20, "All Classes");
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, RteStudentListComponent_option_21_Template, 2, 2, "option", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 5)(23, "label");
      \u0275\u0275text(24, "Status:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function RteStudentListComponent_Template_select_ngModelChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.status, $event) || (ctx.status = $event);
        return $event;
      });
      \u0275\u0275listener("change", function RteStudentListComponent_Template_select_change_25_listener() {
        return ctx.onStatusChange(ctx.status);
      });
      \u0275\u0275elementStart(26, "option", 7);
      \u0275\u0275text(27, "All Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "option", 9);
      \u0275\u0275text(29, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "option", 10);
      \u0275\u0275text(31, "Inactive");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(32, "app-enhanced-table", 11);
      \u0275\u0275listener("pageChange", function RteStudentListComponent_Template_app_enhanced_table_pageChange_32_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function RteStudentListComponent_Template_app_enhanced_table_pageSizeChange_32_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function RteStudentListComponent_Template_app_enhanced_table_searchChange_32_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function RteStudentListComponent_Template_app_enhanced_table_sortChange_32_listener($event) {
        return ctx.onSortChange($event);
      })("dateFilterChange", function RteStudentListComponent_Template_app_enhanced_table_dateFilterChange_32_listener($event) {
        return ctx.onDateFilterChange($event);
      })("rowSelect", function RteStudentListComponent_Template_app_enhanced_table_rowSelect_32_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function RteStudentListComponent_Template_app_enhanced_table_refresh_32_listener() {
        return ctx.onRefresh();
      })("addClick", function RteStudentListComponent_Template_app_enhanced_table_addClick_32_listener() {
        return ctx.onAdd();
      })("exportClick", function RteStudentListComponent_Template_app_enhanced_table_exportClick_32_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function RteStudentListComponent_Template_app_enhanced_table_filterToggle_32_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
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
      \u0275\u0275twoWayProperty("ngModel", ctx.status);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(6);
      \u0275\u0275property("data", ctx.rteStudents)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("selectedRowId", ctx.selectedRowId)("rowIdKey", "rte_student_id")("addRoute", "/app/rte-students/create")("addLabel", "Add RTE Student")("searchPlaceholder", "Search RTE students...")("enableExport", true)("enableDateFilter", true);
    }
  }, dependencies: [CommonModule, NgForOf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, EnhancedTableComponent], styles: ["\n\n.rte-student-list-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n@media (max-width: 768px) {\n  .rte-student-list-container[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .rte-student-list-container[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n  }\n}\n.rte-student-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-top: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-md);\n}\n.rte-student-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n}\n.rte-student-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-lg);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  flex-wrap: wrap;\n  align-items: end;\n}\n.rte-student-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n  min-width: 150px;\n}\n.rte-student-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.rte-student-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm) var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  transition: all var(--transition-base);\n}\n.rte-student-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n/*# sourceMappingURL=rte-student-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RteStudentListComponent, { className: "RteStudentListComponent", filePath: "src\\app\\modules\\rte-students\\rte-student-list\\rte-student-list.component.ts", lineNumber: 19 });
})();
export {
  RteStudentListComponent
};
//# sourceMappingURL=chunk-5VQV62DK.js.map
