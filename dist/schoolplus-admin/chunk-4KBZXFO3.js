import {
  SyllabusService
} from "./chunk-QT36LC3Q.js";
import {
  SubjectService
} from "./chunk-YKDQPPIU.js";
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/syllabus/syllabus-list/syllabus-list.component.ts
function SyllabusListComponent_option_14_Template(rf, ctx) {
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
function SyllabusListComponent_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cls_r2 = ctx.$implicit;
    \u0275\u0275property("value", cls_r2.class_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cls_r2.class_name);
  }
}
function SyllabusListComponent_option_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subject_r3 = ctx.$implicit;
    \u0275\u0275property("value", subject_r3.subject_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(subject_r3.subject_name);
  }
}
var SyllabusListComponent = class _SyllabusListComponent {
  syllabusService;
  academicYearService;
  classService;
  subjectService;
  dialogService;
  toastService;
  exportService;
  router;
  syllabus = [];
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
      key: "syllabus_title",
      label: "Syllabus Name",
      sortable: true
    },
    {
      key: "class_name",
      label: "Class",
      sortable: true
    },
    {
      key: "subject_name",
      label: "Subject",
      sortable: true
    },
    {
      key: "academic_year_name",
      label: "Academic Year",
      sortable: true
    },
    // { 
    //   key: 'total_chapters', 
    //   label: 'Chapters', 
    //   sortable: true,
    //   type: 'number',
    //   format: (value: any, row?: any) => {
    //     if (!value && value !== 0) return '0';
    //     const completed = row?.completed_chapters || 0;
    //     return `${completed}/${value}`;
    //   }
    // },
    {
      key: "total_chapters",
      label: "Chapters",
      sortable: true,
      type: "number",
      format: (value, row) => {
        if (!value)
          return "0%";
        const completed = row?.completed_chapters || 0;
        const percentage = Math.round(completed / value * 100);
        return `${percentage}%`;
      }
    },
    {
      key: "created_at",
      label: "Created Date",
      sortable: true,
      type: "date"
    }
  ];
  searchTerm = "";
  sortColumn = "created_at";
  sortDirection = "desc";
  startDate;
  endDate;
  academicYearId;
  classId;
  subjectId;
  constructor(syllabusService, academicYearService, classService, subjectService, dialogService, toastService, exportService, router) {
    this.syllabusService = syllabusService;
    this.academicYearService = academicYearService;
    this.classService = classService;
    this.subjectService = subjectService;
    this.dialogService = dialogService;
    this.toastService = toastService;
    this.exportService = exportService;
    this.router = router;
  }
  ngOnInit() {
    this.loadAcademicYears();
    this.loadClasses();
    this.loadSyllabus();
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
  loadSubjects(classId) {
    if (classId) {
      this.classService.getClassSubjects(classId).subscribe({
        next: (response) => {
          if (response.status === "success" && response.data) {
            this.subjects = response.data.subjects || [];
          }
        }
      });
    } else {
      this.subjects = [];
    }
  }
  loadSyllabus() {
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
    this.syllabusService.getSyllabus(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === "success" && response.data) {
          this.syllabus = response.data.syllabus || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show("Error loading syllabus", "error");
        console.error("Error loading syllabus:", error);
      }
    });
  }
  onPageChange(page) {
    this.pagination.page = page;
    this.loadSyllabus();
  }
  onPageSizeChange(size) {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadSyllabus();
  }
  onSearchChange(search) {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadSyllabus();
  }
  onSortChange(sort) {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadSyllabus();
  }
  onDateFilterChange(filters) {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadSyllabus();
  }
  onRowSelect(row) {
    this.selectedRowId = row.syllabus_id;
  }
  onRefresh() {
    this.loadSyllabus();
  }
  onAdd() {
  }
  onEdit(row) {
    this.router.navigate(["/app/syllabus/edit", row.syllabus_id]);
  }
  onDelete(row) {
    this.dialogService.confirm({
      title: "Delete Syllabus",
      message: `Are you sure you want to delete syllabus for ${row.class_name} - ${row.subject_name}?`,
      confirmText: "Delete",
      cancelText: "Cancel",
      type: "danger"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.syllabusService.deleteSyllabus(row.syllabus_id).subscribe({
          next: (response) => {
            if (response.status === "success") {
              this.toastService.show("Syllabus deleted successfully", "success");
              this.loadSyllabus();
            }
          },
          error: () => {
            this.toastService.show("Error deleting syllabus", "error");
          }
        });
      }
    });
  }
  onExportClick(event) {
    const exportData = this.syllabus.map((syl) => ({
      "Syllabus Name": syl.syllabus_name,
      "Class": syl.class_name,
      "Subject": syl.subject_name,
      "Academic Year": syl.academic_year_name,
      "Chapters": `${syl.completed_chapters || 0}/${syl.total_chapters || 0}`,
      "Created Date": this.formatDate(syl.created_at)
    }));
    const headers = this.columns.map((col) => col.label);
    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(exportData, `syllabus-${Date.now()}.csv`, headers);
        break;
      case "pdf":
        this.exportService.exportToPDF(exportData, `syllabus-${Date.now()}.pdf`, headers);
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
    this.loadSyllabus();
  }
  onClassChange(classId) {
    this.classId = classId || void 0;
    this.subjectId = void 0;
    this.subjects = [];
    if (classId) {
      this.loadSubjects(classId);
    }
    this.pagination.page = 1;
    this.loadSyllabus();
  }
  onSubjectChange(subjectId) {
    this.subjectId = subjectId || void 0;
    this.pagination.page = 1;
    this.loadSyllabus();
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function SyllabusListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SyllabusListComponent)(\u0275\u0275directiveInject(SyllabusService), \u0275\u0275directiveInject(AcademicYearService), \u0275\u0275directiveInject(ClassService), \u0275\u0275directiveInject(SubjectService), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SyllabusListComponent, selectors: [["app-syllabus-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 22, consts: [[1, "syllabus-list-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "additional-filters", "filter-panel"], [1, "filter-group"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "dateFilterChange", "rowSelect", "refresh", "addClick", "editClick", "deleteClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "selectedRowId", "rowIdKey", "addRoute", "addLabel", "searchPlaceholder", "enableExport", "enableDateFilter"]], template: function SyllabusListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Syllabus Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Manage curriculum and track syllabus completion");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "label");
      \u0275\u0275text(10, "Academic Year:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function SyllabusListComponent_Template_select_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.academicYearId, $event) || (ctx.academicYearId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function SyllabusListComponent_Template_select_change_11_listener() {
        return ctx.onAcademicYearChange(ctx.academicYearId);
      });
      \u0275\u0275elementStart(12, "option", 7);
      \u0275\u0275text(13, "All Academic Years");
      \u0275\u0275elementEnd();
      \u0275\u0275template(14, SyllabusListComponent_option_14_Template, 2, 2, "option", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 5)(16, "label");
      \u0275\u0275text(17, "Class:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function SyllabusListComponent_Template_select_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.classId, $event) || (ctx.classId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function SyllabusListComponent_Template_select_change_18_listener() {
        return ctx.onClassChange(ctx.classId);
      });
      \u0275\u0275elementStart(19, "option", 7);
      \u0275\u0275text(20, "All Classes");
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, SyllabusListComponent_option_21_Template, 2, 2, "option", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 5)(23, "label");
      \u0275\u0275text(24, "Subject:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function SyllabusListComponent_Template_select_ngModelChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.subjectId, $event) || (ctx.subjectId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function SyllabusListComponent_Template_select_change_25_listener() {
        return ctx.onSubjectChange(ctx.subjectId);
      });
      \u0275\u0275elementStart(26, "option", 7);
      \u0275\u0275text(27, "All Subjects");
      \u0275\u0275elementEnd();
      \u0275\u0275template(28, SyllabusListComponent_option_28_Template, 2, 2, "option", 8);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "app-enhanced-table", 9);
      \u0275\u0275listener("pageChange", function SyllabusListComponent_Template_app_enhanced_table_pageChange_29_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function SyllabusListComponent_Template_app_enhanced_table_pageSizeChange_29_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function SyllabusListComponent_Template_app_enhanced_table_searchChange_29_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function SyllabusListComponent_Template_app_enhanced_table_sortChange_29_listener($event) {
        return ctx.onSortChange($event);
      })("dateFilterChange", function SyllabusListComponent_Template_app_enhanced_table_dateFilterChange_29_listener($event) {
        return ctx.onDateFilterChange($event);
      })("rowSelect", function SyllabusListComponent_Template_app_enhanced_table_rowSelect_29_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function SyllabusListComponent_Template_app_enhanced_table_refresh_29_listener() {
        return ctx.onRefresh();
      })("addClick", function SyllabusListComponent_Template_app_enhanced_table_addClick_29_listener() {
        return ctx.onAdd();
      })("editClick", function SyllabusListComponent_Template_app_enhanced_table_editClick_29_listener($event) {
        return ctx.onEdit($event);
      })("deleteClick", function SyllabusListComponent_Template_app_enhanced_table_deleteClick_29_listener($event) {
        return ctx.onDelete($event);
      })("exportClick", function SyllabusListComponent_Template_app_enhanced_table_exportClick_29_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function SyllabusListComponent_Template_app_enhanced_table_filterToggle_29_listener($event) {
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
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.syllabus)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("selectedRowId", ctx.selectedRowId)("rowIdKey", "syllabus_id")("addRoute", "/app/syllabus/create")("addLabel", "Add Syllabus")("searchPlaceholder", "Search by syllabus name...")("enableExport", true)("enableDateFilter", true);
    }
  }, dependencies: [CommonModule, NgForOf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, EnhancedTableComponent], styles: ["\n\n.syllabus-list-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n@media (max-width: 768px) {\n  .syllabus-list-container[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .syllabus-list-container[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n  }\n}\n.syllabus-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-top: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-md);\n}\n.syllabus-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n}\n.syllabus-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-lg);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  flex-wrap: wrap;\n  align-items: end;\n}\n.syllabus-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n  min-width: 150px;\n}\n.syllabus-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.syllabus-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm) var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  transition: all var(--transition-base);\n}\n.syllabus-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n/*# sourceMappingURL=syllabus-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SyllabusListComponent, { className: "SyllabusListComponent", filePath: "src\\app\\modules\\syllabus\\syllabus-list\\syllabus-list.component.ts", lineNumber: 21 });
})();
export {
  SyllabusListComponent
};
//# sourceMappingURL=chunk-4KBZXFO3.js.map
