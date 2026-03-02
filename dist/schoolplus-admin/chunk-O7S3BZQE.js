import {
  MarksheetService
} from "./chunk-55M5MP7M.js";
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/marksheets/marksheet-list/marksheet-list.component.ts
function MarksheetListComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "label", 16)(2, "input", 17);
    \u0275\u0275listener("change", function MarksheetListComponent_div_24_Template_input_change_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSelectAll());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.selectedMarksheets.length === ctx_r1.marksheets.length && ctx_r1.marksheets.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Select All (", ctx_r1.selectedMarksheets.length, " of ", ctx_r1.marksheets.length, " selected)");
  }
}
function MarksheetListComponent_div_26_label_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 22)(1, "input", 17);
    \u0275\u0275listener("change", function MarksheetListComponent_div_26_label_5_Template_input_change_1_listener() {
      const marksheet_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleSelection(marksheet_r4.marksheet_id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const marksheet_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.isSelected(marksheet_r4.marksheet_id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", marksheet_r4.first_name, " ", marksheet_r4.last_name, " (", marksheet_r4.admission_number, ")");
  }
}
function MarksheetListComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "strong");
    \u0275\u0275text(3, "Select Marksheets for WhatsApp:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 20);
    \u0275\u0275template(5, MarksheetListComponent_div_26_label_5_Template, 4, 4, "label", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.marksheets);
  }
}
var MarksheetListComponent = class _MarksheetListComponent {
  marksheetService;
  academicYearService;
  classService;
  dialogService;
  toastService;
  exportService;
  router;
  marksheets = [];
  academicYears = [];
  classes = [];
  loading = false;
  selectedRowId;
  selectedMarksheets = [];
  showFilters = false;
  pagination = {
    page: 1,
    limit: 20,
    total: 0,
    pages: 0
  };
  columns = [
    {
      key: "student_name",
      label: "Student Name",
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
      key: "examination_name",
      label: "Examination",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "class_name",
      label: "Class",
      sortable: true,
      format: (value, row) => {
        return `${value || ""} ${row?.section_name || ""}`.trim() || "-";
      }
    },
    {
      key: "total_marks",
      label: "Total Marks",
      sortable: true,
      type: "number",
      format: (value) => value || "0"
    },
    {
      key: "obtained_marks",
      label: "Obtained",
      sortable: true,
      type: "number",
      format: (value) => value || "0"
    },
    {
      key: "percentage",
      label: "Percentage",
      sortable: true,
      format: (value) => value ? `${value}%` : "-"
    },
    {
      key: "grade",
      label: "Grade",
      sortable: true,
      format: (value) => {
        return `<span class="badge badge-info">${value || "-"}</span>`;
      }
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      format: (value) => {
        const badgeClass = value === "sent" ? "badge-success" : value === "published" ? "badge-warning" : "badge-secondary";
        return `<span class="badge ${badgeClass}">${value || "-"}</span>`;
      }
    }
  ];
  searchTerm = "";
  sortColumn = "marksheet_id";
  sortDirection = "desc";
  startDate;
  endDate;
  academicYearId;
  classId;
  examinationId;
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
  marksheetStatusOptions = [
    { value: void 0, label: "All Status" },
    { value: "draft", label: "Draft" },
    { value: "published", label: "Published" },
    { value: "sent", label: "Sent" }
  ];
  constructor(marksheetService, academicYearService, classService, dialogService, toastService, exportService, router) {
    this.marksheetService = marksheetService;
    this.academicYearService = academicYearService;
    this.classService = classService;
    this.dialogService = dialogService;
    this.toastService = toastService;
    this.exportService = exportService;
    this.router = router;
  }
  ngOnInit() {
    this.loadAcademicYears();
    this.loadClasses();
    this.loadMarksheets();
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
  loadMarksheets() {
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
    if (this.examinationId) {
      params.examination_id = this.examinationId;
    }
    if (this.status) {
      params.status = this.status;
    }
    this.marksheetService.getMarksheets(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === "success" && response.data) {
          this.marksheets = response.data.marksheets || [];
          this.pagination = response.data.pagination || this.pagination;
          this.selectedMarksheets = [];
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show("Error loading marksheets", "error");
        console.error("Error loading marksheets:", error);
      }
    });
  }
  onPageChange(page) {
    this.pagination.page = page;
    this.loadMarksheets();
  }
  onPageSizeChange(size) {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadMarksheets();
  }
  onSearchChange(search) {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadMarksheets();
  }
  onSortChange(sort) {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadMarksheets();
  }
  onDateFilterChange(filters) {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadMarksheets();
  }
  onRowSelect(row) {
    this.selectedRowId = row.marksheet_id;
  }
  onRefresh() {
    this.loadMarksheets();
  }
  onAdd() {
  }
  onView(row) {
    this.router.navigate(["/app/marksheets/view", row.marksheet_id]);
  }
  onPrintMarksheet(row) {
    const id = row?.marksheet_id;
    if (id != null) {
      const url = this.router.serializeUrl(this.router.createUrlTree(["/app/marksheets/view", id])) + "#print";
      window.open(url, "_blank", "noopener");
    }
  }
  onEdit(row) {
    this.router.navigate(["/app/marksheets/edit", row.marksheet_id]);
  }
  onDelete(row) {
    this.dialogService.confirm({
      title: "Delete Marksheet",
      message: `Are you sure you want to delete marksheet for ${row.first_name} ${row.last_name}?`,
      confirmText: "Delete",
      cancelText: "Cancel",
      type: "warning"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.marksheetService.deleteMarksheet(row.marksheet_id).subscribe({
          next: (response) => {
            if (response.status === "success") {
              this.toastService.show("Marksheet deleted successfully", "success");
              this.loadMarksheets();
            }
          },
          error: () => {
            this.toastService.show("Error deleting marksheet", "error");
          }
        });
      }
    });
  }
  onExportClick(event) {
    const exportData = this.marksheets.map((marksheet) => ({
      "Student Name": `${marksheet.first_name || ""} ${marksheet.last_name || ""}`.trim(),
      "Admission No.": marksheet.admission_number || "-",
      "Examination": marksheet.examination_name || "-",
      "Class": `${marksheet.class_name || ""} ${marksheet.section_name || ""}`.trim(),
      "Total Marks": marksheet.total_marks || "0",
      "Obtained Marks": marksheet.obtained_marks || "0",
      "Percentage": marksheet.percentage ? `${marksheet.percentage}%` : "-",
      "Grade": marksheet.grade || "-",
      "Status": marksheet.status || "-"
    }));
    const headers = this.columns.map((col) => col.label);
    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(exportData, `marksheets-${Date.now()}.csv`, headers);
        break;
      case "pdf":
        this.exportService.exportToPDF(exportData, `marksheets-${Date.now()}.pdf`, headers);
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
    this.loadMarksheets();
  }
  onClassChange(classId) {
    this.classId = classId || void 0;
    this.pagination.page = 1;
    this.loadMarksheets();
  }
  onExaminationChange(examId) {
    this.examinationId = examId || void 0;
    this.pagination.page = 1;
    this.loadMarksheets();
  }
  onStatusChange(status) {
    this.status = status || void 0;
    this.pagination.page = 1;
    this.loadMarksheets();
  }
  toggleSelection(marksheetId) {
    const index = this.selectedMarksheets.indexOf(marksheetId);
    if (index > -1) {
      this.selectedMarksheets.splice(index, 1);
    } else {
      this.selectedMarksheets.push(marksheetId);
    }
  }
  toggleSelectAll() {
    if (this.selectedMarksheets.length === this.marksheets.length && this.marksheets.length > 0) {
      this.selectedMarksheets = [];
    } else {
      this.selectedMarksheets = this.marksheets.map((m) => m.marksheet_id);
    }
  }
  isSelected(marksheetId) {
    return this.selectedMarksheets.includes(marksheetId);
  }
  sendWhatsApp() {
    if (this.selectedMarksheets.length === 0) {
      this.toastService.show("Please select at least one marksheet", "warning");
      return;
    }
    this.dialogService.confirm({
      title: "Send via WhatsApp",
      message: `Send ${this.selectedMarksheets.length} marksheet(s) to parents via WhatsApp?`,
      confirmText: "Send",
      cancelText: "Cancel",
      type: "info"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.marksheetService.sendWhatsApp(this.selectedMarksheets).subscribe({
          next: (response) => {
            if (response.status === "success") {
              this.toastService.show(`Sent ${response.data?.sent || 0} marksheet(s) successfully`, "success");
              this.selectedMarksheets = [];
              this.loadMarksheets();
            }
          },
          error: () => {
            this.toastService.show("Error sending marksheets", "error");
          }
        });
      }
    });
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function MarksheetListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MarksheetListComponent)(\u0275\u0275directiveInject(MarksheetService), \u0275\u0275directiveInject(AcademicYearService), \u0275\u0275directiveInject(ClassService), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MarksheetListComponent, selectors: [["app-marksheet-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 25, consts: [[1, "marksheet-list-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions"], [1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "bi", "bi-whatsapp"], [1, "additional-filters", "filter-panel"], [1, "filter-group"], ["placeholder", "Search or select academic year", 3, "ngModelChange", "valueChange", "options", "ngModel"], ["placeholder", "Search or select class", 3, "ngModelChange", "valueChange", "options", "ngModel"], ["placeholder", "Search or select status", 3, "ngModelChange", "valueChange", "options", "ngModel"], ["class", "selection-info", 4, "ngIf"], [3, "printClick", "pageChange", "pageSizeChange", "searchChange", "sortChange", "dateFilterChange", "rowSelect", "refresh", "addClick", "viewClick", "editClick", "deleteClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "selectedRowId", "rowIdKey", "addRoute", "addLabel", "searchPlaceholder", "enableExport", "enableDateFilter", "showViewButton", "showPrintButton"], ["class", "checkbox-panel", 4, "ngIf"], [1, "selection-info"], [1, "select-all-label"], ["type", "checkbox", 3, "change", "checked"], [1, "checkbox-panel"], [1, "panel-header"], [1, "checkbox-grid"], ["class", "checkbox-item", 4, "ngFor", "ngForOf"], [1, "checkbox-item"]], template: function MarksheetListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Marksheet Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Manage and send marksheets to parents");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
      \u0275\u0275listener("click", function MarksheetListComponent_Template_button_click_8_listener() {
        return ctx.sendWhatsApp();
      });
      \u0275\u0275element(9, "i", 6);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "label");
      \u0275\u0275text(14, "Academic Year:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "app-search-select", 9);
      \u0275\u0275twoWayListener("ngModelChange", function MarksheetListComponent_Template_app_search_select_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.academicYearId, $event) || (ctx.academicYearId = $event);
        return $event;
      });
      \u0275\u0275listener("valueChange", function MarksheetListComponent_Template_app_search_select_valueChange_15_listener($event) {
        return ctx.onAcademicYearChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 8)(17, "label");
      \u0275\u0275text(18, "Class:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "app-search-select", 10);
      \u0275\u0275twoWayListener("ngModelChange", function MarksheetListComponent_Template_app_search_select_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.classId, $event) || (ctx.classId = $event);
        return $event;
      });
      \u0275\u0275listener("valueChange", function MarksheetListComponent_Template_app_search_select_valueChange_19_listener($event) {
        return ctx.onClassChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 8)(21, "label");
      \u0275\u0275text(22, "Status:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "app-search-select", 11);
      \u0275\u0275twoWayListener("ngModelChange", function MarksheetListComponent_Template_app_search_select_ngModelChange_23_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.status, $event) || (ctx.status = $event);
        return $event;
      });
      \u0275\u0275listener("valueChange", function MarksheetListComponent_Template_app_search_select_valueChange_23_listener($event) {
        return ctx.onStatusChange($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(24, MarksheetListComponent_div_24_Template, 5, 3, "div", 12);
      \u0275\u0275elementStart(25, "app-enhanced-table", 13);
      \u0275\u0275listener("printClick", function MarksheetListComponent_Template_app_enhanced_table_printClick_25_listener($event) {
        return ctx.onPrintMarksheet($event);
      })("pageChange", function MarksheetListComponent_Template_app_enhanced_table_pageChange_25_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function MarksheetListComponent_Template_app_enhanced_table_pageSizeChange_25_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function MarksheetListComponent_Template_app_enhanced_table_searchChange_25_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function MarksheetListComponent_Template_app_enhanced_table_sortChange_25_listener($event) {
        return ctx.onSortChange($event);
      })("dateFilterChange", function MarksheetListComponent_Template_app_enhanced_table_dateFilterChange_25_listener($event) {
        return ctx.onDateFilterChange($event);
      })("rowSelect", function MarksheetListComponent_Template_app_enhanced_table_rowSelect_25_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function MarksheetListComponent_Template_app_enhanced_table_refresh_25_listener() {
        return ctx.onRefresh();
      })("addClick", function MarksheetListComponent_Template_app_enhanced_table_addClick_25_listener() {
        return ctx.onAdd();
      })("viewClick", function MarksheetListComponent_Template_app_enhanced_table_viewClick_25_listener($event) {
        return ctx.onView($event);
      })("editClick", function MarksheetListComponent_Template_app_enhanced_table_editClick_25_listener($event) {
        return ctx.onEdit($event);
      })("deleteClick", function MarksheetListComponent_Template_app_enhanced_table_deleteClick_25_listener($event) {
        return ctx.onDelete($event);
      })("exportClick", function MarksheetListComponent_Template_app_enhanced_table_exportClick_25_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function MarksheetListComponent_Template_app_enhanced_table_filterToggle_25_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(26, MarksheetListComponent_div_26_Template, 6, 1, "div", 14);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", ctx.selectedMarksheets.length === 0);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" Send via WhatsApp (", ctx.selectedMarksheets.length, ") ");
      \u0275\u0275advance();
      \u0275\u0275classProp("expanded", ctx.showFilters);
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.academicYearOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.academicYearId);
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.classOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.classId);
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.marksheetStatusOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.status);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.marksheets.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.marksheets)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("selectedRowId", ctx.selectedRowId)("rowIdKey", "marksheet_id")("addRoute", "/app/marksheets/create")("addLabel", "Create Marksheet")("searchPlaceholder", "Search by student name or admission number...")("enableExport", true)("enableDateFilter", true)("showViewButton", true)("showPrintButton", true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.marksheets.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgControlStatus, NgModel, RouterModule, EnhancedTableComponent, SearchSelectComponent], styles: ["\n\n.marksheet-list-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n@media (max-width: 768px) {\n  .marksheet-list-container[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .marksheet-list-container[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n  }\n}\n.marksheet-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-top: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-md);\n}\n.marksheet-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n}\n.marksheet-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  gap: var(--spacing-md);\n  flex-wrap: wrap;\n}\n.marksheet-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-lg);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  flex-wrap: wrap;\n  align-items: end;\n}\n.marksheet-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n  min-width: 150px;\n}\n.marksheet-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.marksheet-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm) var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  transition: all var(--transition-base);\n}\n.marksheet-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.marksheet-list-container[_ngcontent-%COMP%]   .selection-info[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-md);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n}\n.marksheet-list-container[_ngcontent-%COMP%]   .selection-info[_ngcontent-%COMP%]   .select-all-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  cursor: pointer;\n  font-size: var(--font-size-sm);\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.marksheet-list-container[_ngcontent-%COMP%]   .selection-info[_ngcontent-%COMP%]   .select-all-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n}\n.marksheet-list-container[_ngcontent-%COMP%]   .checkbox-panel[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-lg);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n}\n.marksheet-list-container[_ngcontent-%COMP%]   .checkbox-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-md);\n  font-size: var(--font-size-base);\n  color: var(--text-primary);\n}\n.marksheet-list-container[_ngcontent-%COMP%]   .checkbox-panel[_ngcontent-%COMP%]   .checkbox-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: var(--spacing-sm);\n}\n.marksheet-list-container[_ngcontent-%COMP%]   .checkbox-panel[_ngcontent-%COMP%]   .checkbox-grid[_ngcontent-%COMP%]   .checkbox-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-xs);\n  cursor: pointer;\n  font-size: var(--font-size-sm);\n  color: var(--text-primary);\n  padding: var(--spacing-xs);\n  border-radius: var(--radius-sm);\n  transition: background-color var(--transition-base);\n}\n.marksheet-list-container[_ngcontent-%COMP%]   .checkbox-panel[_ngcontent-%COMP%]   .checkbox-grid[_ngcontent-%COMP%]   .checkbox-item[_ngcontent-%COMP%]:hover {\n  background-color: rgba(37, 99, 235, 0.05);\n}\n.marksheet-list-container[_ngcontent-%COMP%]   .checkbox-panel[_ngcontent-%COMP%]   .checkbox-grid[_ngcontent-%COMP%]   .checkbox-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=marksheet-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MarksheetListComponent, { className: "MarksheetListComponent", filePath: "src\\app\\modules\\marksheets\\marksheet-list\\marksheet-list.component.ts", lineNumber: 21 });
})();
export {
  MarksheetListComponent
};
//# sourceMappingURL=chunk-O7S3BZQE.js.map
