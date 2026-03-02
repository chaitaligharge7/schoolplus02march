import {
  UnitTestMarksService
} from "./chunk-5GMQINMQ.js";
import {
  SubjectService
} from "./chunk-YKDQPPIU.js";
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
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
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

// src/app/modules/unit-test-marks/unit-test-marks-list/unit-test-marks-list.component.ts
function UnitTestMarksListComponent_option_14_Template(rf, ctx) {
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
function UnitTestMarksListComponent_option_21_Template(rf, ctx) {
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
function UnitTestMarksListComponent_option_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
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
var UnitTestMarksListComponent = class _UnitTestMarksListComponent {
  unitTestMarksService;
  academicYearService;
  classService;
  subjectService;
  toastService;
  exportService;
  router;
  marks = [];
  academicYears = [];
  classes = [];
  subjects = [];
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
      key: "subject_name",
      label: "Subject",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "unit_number",
      label: "Unit",
      sortable: true,
      type: "number",
      format: (value) => value || "-"
    },
    {
      key: "marks_obtained",
      label: "Marks Obtained",
      sortable: true,
      type: "number",
      format: (value, row) => {
        return `${value || 0} / ${row?.total_marks || 0}`;
      }
    },
    {
      key: "percentage",
      label: "Percentage",
      sortable: true,
      type: "number",
      format: (value) => {
        return value ? `${value}%` : "0%";
      }
    },
    {
      key: "test_date",
      label: "Test Date",
      sortable: true,
      type: "date"
    }
  ];
  searchTerm = "";
  sortColumn = "test_date";
  sortDirection = "desc";
  startDate;
  endDate;
  academicYearId;
  classId;
  subjectId;
  unitNumber;
  constructor(unitTestMarksService, academicYearService, classService, subjectService, toastService, exportService, router) {
    this.unitTestMarksService = unitTestMarksService;
    this.academicYearService = academicYearService;
    this.classService = classService;
    this.subjectService = subjectService;
    this.toastService = toastService;
    this.exportService = exportService;
    this.router = router;
  }
  ngOnInit() {
    this.loadAcademicYears();
    this.loadClasses();
    this.loadSubjects();
    this.loadMarks();
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
  loadMarks() {
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
    if (this.unitNumber) {
      params.unit_number = this.unitNumber;
    }
    this.unitTestMarksService.getUnitTestMarks(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === "success" && response.data) {
          this.marks = response.data.marks || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show("Error loading unit test marks", "error");
        console.error("Error loading unit test marks:", error);
      }
    });
  }
  onPageChange(page) {
    this.pagination.page = page;
    this.loadMarks();
  }
  onPageSizeChange(size) {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadMarks();
  }
  onSearchChange(search) {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadMarks();
  }
  onSortChange(sort) {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadMarks();
  }
  onDateFilterChange(filters) {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadMarks();
  }
  onRowSelect(row) {
    this.selectedRowId = row.test_id;
  }
  onRefresh() {
    this.loadMarks();
  }
  onAdd() {
  }
  onEdit(row) {
    this.router.navigate(["/app/unit-test-marks/edit", row.test_id]);
  }
  onExportClick(event) {
    const exportData = this.marks.map((mark) => ({
      "Student Name": `${mark.first_name || ""} ${mark.last_name || ""}`.trim(),
      "Admission Number": mark.admission_number || "-",
      "Class": mark.class_name || "-",
      "Subject": mark.subject_name || "-",
      "Unit": mark.unit_number || "-",
      "Marks Obtained": `${mark.marks_obtained || 0} / ${mark.total_marks || 0}`,
      "Percentage": mark.percentage ? `${mark.percentage}%` : "0%",
      "Test Date": this.formatDate(mark.test_date)
    }));
    const headers = this.columns.map((col) => col.label);
    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(exportData, `unit-test-marks-${Date.now()}.csv`, headers);
        break;
      case "pdf":
        this.exportService.exportToPDF(exportData, `unit-test-marks-${Date.now()}.pdf`, headers);
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
    this.loadMarks();
  }
  onClassChange(classId) {
    this.classId = classId || void 0;
    this.pagination.page = 1;
    this.loadMarks();
  }
  onSubjectChange(subjectId) {
    this.subjectId = subjectId || void 0;
    this.pagination.page = 1;
    this.loadMarks();
  }
  onUnitNumberChange(unitNumber) {
    this.unitNumber = unitNumber || void 0;
    this.pagination.page = 1;
    this.loadMarks();
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function UnitTestMarksListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UnitTestMarksListComponent)(\u0275\u0275directiveInject(UnitTestMarksService), \u0275\u0275directiveInject(AcademicYearService), \u0275\u0275directiveInject(ClassService), \u0275\u0275directiveInject(SubjectService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UnitTestMarksListComponent, selectors: [["app-unit-test-marks-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 34, vars: 23, consts: [[1, "unit-test-marks-list-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "additional-filters", "filter-panel"], [1, "filter-group"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", "placeholder", "Filter by unit", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "dateFilterChange", "rowSelect", "refresh", "addClick", "editClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "selectedRowId", "rowIdKey", "addRoute", "addLabel", "searchPlaceholder", "enableExport", "enableDateFilter"]], template: function UnitTestMarksListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Unit Test Marks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Manage unit test marks and assessments");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "label");
      \u0275\u0275text(10, "Academic Year:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function UnitTestMarksListComponent_Template_select_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.academicYearId, $event) || (ctx.academicYearId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function UnitTestMarksListComponent_Template_select_change_11_listener() {
        return ctx.onAcademicYearChange(ctx.academicYearId);
      });
      \u0275\u0275elementStart(12, "option", 7);
      \u0275\u0275text(13, "All Academic Years");
      \u0275\u0275elementEnd();
      \u0275\u0275template(14, UnitTestMarksListComponent_option_14_Template, 2, 2, "option", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 5)(16, "label");
      \u0275\u0275text(17, "Class:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function UnitTestMarksListComponent_Template_select_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.classId, $event) || (ctx.classId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function UnitTestMarksListComponent_Template_select_change_18_listener() {
        return ctx.onClassChange(ctx.classId);
      });
      \u0275\u0275elementStart(19, "option", 7);
      \u0275\u0275text(20, "All Classes");
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, UnitTestMarksListComponent_option_21_Template, 2, 2, "option", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 5)(23, "label");
      \u0275\u0275text(24, "Subject:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function UnitTestMarksListComponent_Template_select_ngModelChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.subjectId, $event) || (ctx.subjectId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function UnitTestMarksListComponent_Template_select_change_25_listener() {
        return ctx.onSubjectChange(ctx.subjectId);
      });
      \u0275\u0275elementStart(26, "option", 7);
      \u0275\u0275text(27, "All Subjects");
      \u0275\u0275elementEnd();
      \u0275\u0275template(28, UnitTestMarksListComponent_option_28_Template, 2, 2, "option", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 5)(30, "label");
      \u0275\u0275text(31, "Unit Number:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function UnitTestMarksListComponent_Template_input_ngModelChange_32_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.unitNumber, $event) || (ctx.unitNumber = $event);
        return $event;
      });
      \u0275\u0275listener("input", function UnitTestMarksListComponent_Template_input_input_32_listener() {
        return ctx.onUnitNumberChange(ctx.unitNumber);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "app-enhanced-table", 10);
      \u0275\u0275listener("pageChange", function UnitTestMarksListComponent_Template_app_enhanced_table_pageChange_33_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function UnitTestMarksListComponent_Template_app_enhanced_table_pageSizeChange_33_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function UnitTestMarksListComponent_Template_app_enhanced_table_searchChange_33_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function UnitTestMarksListComponent_Template_app_enhanced_table_sortChange_33_listener($event) {
        return ctx.onSortChange($event);
      })("dateFilterChange", function UnitTestMarksListComponent_Template_app_enhanced_table_dateFilterChange_33_listener($event) {
        return ctx.onDateFilterChange($event);
      })("rowSelect", function UnitTestMarksListComponent_Template_app_enhanced_table_rowSelect_33_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function UnitTestMarksListComponent_Template_app_enhanced_table_refresh_33_listener() {
        return ctx.onRefresh();
      })("addClick", function UnitTestMarksListComponent_Template_app_enhanced_table_addClick_33_listener() {
        return ctx.onAdd();
      })("editClick", function UnitTestMarksListComponent_Template_app_enhanced_table_editClick_33_listener($event) {
        return ctx.onEdit($event);
      })("exportClick", function UnitTestMarksListComponent_Template_app_enhanced_table_exportClick_33_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function UnitTestMarksListComponent_Template_app_enhanced_table_filterToggle_33_listener($event) {
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
      \u0275\u0275twoWayProperty("ngModel", ctx.subjectId);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.subjects);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.unitNumber);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.marks)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("selectedRowId", ctx.selectedRowId)("rowIdKey", "test_id")("addRoute", "/app/unit-test-marks/create")("addLabel", "Add Marks")("searchPlaceholder", "Search unit test marks...")("enableExport", true)("enableDateFilter", true);
    }
  }, dependencies: [CommonModule, NgForOf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, EnhancedTableComponent], styles: ["\n\n.unit-test-marks-list-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n@media (max-width: 768px) {\n  .unit-test-marks-list-container[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .unit-test-marks-list-container[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n  }\n}\n.unit-test-marks-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-top: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-md);\n}\n.unit-test-marks-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n}\n.unit-test-marks-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-lg);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  flex-wrap: wrap;\n  align-items: end;\n}\n.unit-test-marks-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n  min-width: 150px;\n}\n.unit-test-marks-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.unit-test-marks-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm) var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  transition: all var(--transition-base);\n}\n.unit-test-marks-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n/*# sourceMappingURL=unit-test-marks-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UnitTestMarksListComponent, { className: "UnitTestMarksListComponent", filePath: "src\\app\\modules\\unit-test-marks\\unit-test-marks-list\\unit-test-marks-list.component.ts", lineNumber: 20 });
})();
export {
  UnitTestMarksListComponent
};
//# sourceMappingURL=chunk-E54GC3SA.js.map
