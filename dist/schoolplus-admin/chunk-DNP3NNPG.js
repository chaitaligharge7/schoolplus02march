import {
  StudentParticipationService
} from "./chunk-XHH2JBRZ.js";
import {
  AcademicYearService
} from "./chunk-A5OHQDLX.js";
import {
  EnhancedTableComponent,
  ExportService
} from "./chunk-LT2VDVRY.js";
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

// src/app/modules/student-participation/participation-list/participation-list.component.ts
function ParticipationListComponent_option_14_Template(rf, ctx) {
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
var ParticipationListComponent = class _ParticipationListComponent {
  participationService;
  academicYearService;
  toastService;
  exportService;
  router;
  participations = [];
  academicYears = [];
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
      key: "event_name",
      label: "Event Name",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "participation_type",
      label: "Type",
      sortable: true,
      format: (value) => {
        return `<span class="badge badge-info">${value || "-"}</span>`;
      }
    },
    {
      key: "participation_level",
      label: "Level",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "event_date",
      label: "Event Date",
      sortable: true,
      type: "date"
    },
    {
      key: "achievement",
      label: "Achievement",
      sortable: false,
      format: (value) => value || "-"
    },
    {
      key: "points",
      label: "Points",
      sortable: true,
      type: "number",
      format: (value) => value || "0"
    }
  ];
  searchTerm = "";
  sortColumn = "event_date";
  sortDirection = "desc";
  startDate;
  endDate;
  academicYearId;
  participationType;
  constructor(participationService, academicYearService, toastService, exportService, router) {
    this.participationService = participationService;
    this.academicYearService = academicYearService;
    this.toastService = toastService;
    this.exportService = exportService;
    this.router = router;
  }
  ngOnInit() {
    this.loadAcademicYears();
    this.loadParticipations();
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
  loadParticipations() {
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
    if (this.participationType) {
      params.participation_type = this.participationType;
    }
    this.participationService.getParticipations(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === "success" && response.data) {
          this.participations = response.data.participations || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show("Error loading student participations", "error");
        console.error("Error loading student participations:", error);
      }
    });
  }
  onPageChange(page) {
    this.pagination.page = page;
    this.loadParticipations();
  }
  onPageSizeChange(size) {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadParticipations();
  }
  onSearchChange(search) {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadParticipations();
  }
  onSortChange(sort) {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadParticipations();
  }
  onDateFilterChange(filters) {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadParticipations();
  }
  onRowSelect(row) {
    this.selectedRowId = row.participation_id;
  }
  onRefresh() {
    this.loadParticipations();
  }
  onAdd() {
  }
  onExportClick(event) {
    const exportData = this.participations.map((participation) => ({
      "Student Name": `${participation.first_name || ""} ${participation.last_name || ""}`.trim(),
      "Admission Number": participation.admission_number || "-",
      "Event Name": participation.event_name || "-",
      "Type": participation.participation_type || "-",
      "Level": participation.participation_level || "-",
      "Event Date": this.formatDate(participation.event_date),
      "Achievement": participation.achievement || "-",
      "Points": participation.points || "0"
    }));
    const headers = this.columns.map((col) => col.label);
    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(exportData, `student-participations-${Date.now()}.csv`, headers);
        break;
      case "pdf":
        this.exportService.exportToPDF(exportData, `student-participations-${Date.now()}.pdf`, headers);
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
    this.loadParticipations();
  }
  onParticipationTypeChange(type) {
    this.participationType = type || void 0;
    this.pagination.page = 1;
    this.loadParticipations();
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function ParticipationListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParticipationListComponent)(\u0275\u0275directiveInject(StudentParticipationService), \u0275\u0275directiveInject(AcademicYearService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParticipationListComponent, selectors: [["app-participation-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 18, consts: [[1, "participation-list-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "additional-filters", "filter-panel"], [1, "filter-group"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "sports"], ["value", "cultural"], ["value", "academic"], ["value", "other"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "dateFilterChange", "rowSelect", "refresh", "addClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "selectedRowId", "rowIdKey", "addRoute", "addLabel", "searchPlaceholder", "enableExport", "enableDateFilter"]], template: function ParticipationListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Student Participation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Track student participation in events and activities");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "label");
      \u0275\u0275text(10, "Academic Year:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function ParticipationListComponent_Template_select_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.academicYearId, $event) || (ctx.academicYearId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function ParticipationListComponent_Template_select_change_11_listener() {
        return ctx.onAcademicYearChange(ctx.academicYearId);
      });
      \u0275\u0275elementStart(12, "option", 7);
      \u0275\u0275text(13, "All Academic Years");
      \u0275\u0275elementEnd();
      \u0275\u0275template(14, ParticipationListComponent_option_14_Template, 2, 2, "option", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 5)(16, "label");
      \u0275\u0275text(17, "Participation Type:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function ParticipationListComponent_Template_select_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.participationType, $event) || (ctx.participationType = $event);
        return $event;
      });
      \u0275\u0275listener("change", function ParticipationListComponent_Template_select_change_18_listener() {
        return ctx.onParticipationTypeChange(ctx.participationType);
      });
      \u0275\u0275elementStart(19, "option", 7);
      \u0275\u0275text(20, "All Types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "option", 9);
      \u0275\u0275text(22, "Sports");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "option", 10);
      \u0275\u0275text(24, "Cultural");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "option", 11);
      \u0275\u0275text(26, "Academic");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "option", 12);
      \u0275\u0275text(28, "Other");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "app-enhanced-table", 13);
      \u0275\u0275listener("pageChange", function ParticipationListComponent_Template_app_enhanced_table_pageChange_29_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function ParticipationListComponent_Template_app_enhanced_table_pageSizeChange_29_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function ParticipationListComponent_Template_app_enhanced_table_searchChange_29_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function ParticipationListComponent_Template_app_enhanced_table_sortChange_29_listener($event) {
        return ctx.onSortChange($event);
      })("dateFilterChange", function ParticipationListComponent_Template_app_enhanced_table_dateFilterChange_29_listener($event) {
        return ctx.onDateFilterChange($event);
      })("rowSelect", function ParticipationListComponent_Template_app_enhanced_table_rowSelect_29_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function ParticipationListComponent_Template_app_enhanced_table_refresh_29_listener() {
        return ctx.onRefresh();
      })("addClick", function ParticipationListComponent_Template_app_enhanced_table_addClick_29_listener() {
        return ctx.onAdd();
      })("exportClick", function ParticipationListComponent_Template_app_enhanced_table_exportClick_29_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function ParticipationListComponent_Template_app_enhanced_table_filterToggle_29_listener($event) {
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
      \u0275\u0275twoWayProperty("ngModel", ctx.participationType);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(10);
      \u0275\u0275property("data", ctx.participations)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("selectedRowId", ctx.selectedRowId)("rowIdKey", "participation_id")("addRoute", "/app/student-participation/create")("addLabel", "Add Participation")("searchPlaceholder", "Search by student name or event...")("enableExport", true)("enableDateFilter", true);
    }
  }, dependencies: [CommonModule, NgForOf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, EnhancedTableComponent], styles: ["\n\n.participation-list-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n@media (max-width: 768px) {\n  .participation-list-container[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .participation-list-container[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n  }\n}\n.participation-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-top: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-md);\n}\n.participation-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n}\n.participation-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-lg);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  flex-wrap: wrap;\n  align-items: end;\n}\n.participation-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n  min-width: 150px;\n}\n.participation-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.participation-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm) var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  transition: all var(--transition-base);\n}\n.participation-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n/*# sourceMappingURL=participation-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParticipationListComponent, { className: "ParticipationListComponent", filePath: "src\\app\\modules\\student-participation\\participation-list\\participation-list.component.ts", lineNumber: 18 });
})();
export {
  ParticipationListComponent
};
//# sourceMappingURL=chunk-DNP3NNPG.js.map
