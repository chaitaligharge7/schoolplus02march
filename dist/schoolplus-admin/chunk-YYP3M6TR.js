import {
  StaffAllotmentService
} from "./chunk-N7UKIPCT.js";
import {
  DialogService
} from "./chunk-UPFK65KQ.js";
import {
  EnhancedTableComponent,
  ExportService
} from "./chunk-LT2VDVRY.js";
import "./chunk-6W4TS6AE.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
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
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/staff-allotment/staff-allotment-list/staff-allotment-list.component.ts
var StaffAllotmentListComponent = class _StaffAllotmentListComponent {
  staffAllotmentService;
  toastService;
  dialogService;
  exportService;
  router;
  allotments = [];
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
      key: "staff_name",
      label: "Staff",
      sortable: true,
      format: (value, row) => {
        return `${value || "-"}<br><small>${row?.employee_id || "-"}</small>`;
      }
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
      key: "academic_year_name",
      label: "Academic Year",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "allotment_date",
      label: "Allotment Date",
      sortable: true,
      type: "date"
    },
    {
      key: "allotment_status",
      label: "Status",
      sortable: true,
      format: (value) => {
        return `<span class="badge badge-success">${value || "-"}</span>`;
      }
    }
  ];
  searchTerm = "";
  sortColumn = "allotment_date";
  sortDirection = "desc";
  startDate;
  endDate;
  staffId;
  classId;
  subjectId;
  constructor(staffAllotmentService, toastService, dialogService, exportService, router) {
    this.staffAllotmentService = staffAllotmentService;
    this.toastService = toastService;
    this.dialogService = dialogService;
    this.exportService = exportService;
    this.router = router;
  }
  ngOnInit() {
    this.loadAllotments();
  }
  loadAllotments() {
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
    if (this.staffId) {
      params.staff_id = this.staffId;
    }
    if (this.classId) {
      params.class_id = this.classId;
    }
    if (this.subjectId) {
      params.subject_id = this.subjectId;
    }
    this.staffAllotmentService.getStaffAllotments(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === "success" && response.data) {
          this.allotments = response.data.allotments || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show("Error loading staff allotments", "error");
        console.error("Error loading staff allotments:", error);
      }
    });
  }
  onPageChange(page) {
    this.pagination.page = page;
    this.loadAllotments();
  }
  onPageSizeChange(size) {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadAllotments();
  }
  onSearchChange(search) {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadAllotments();
  }
  onSortChange(sort) {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadAllotments();
  }
  onDateFilterChange(filters) {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadAllotments();
  }
  onRowSelect(row) {
    this.selectedRowId = row.allotment_id;
  }
  onRefresh() {
    this.loadAllotments();
  }
  onAdd() {
  }
  onExportClick(event) {
    const exportData = this.allotments.map((allotment) => ({
      Staff: allotment.staff_name || "-",
      "Employee ID": allotment.employee_id || "-",
      Class: allotment.class_name || "-",
      Subject: allotment.subject_name || "-",
      "Academic Year": allotment.academic_year_name || "-",
      "Allotment Date": this.formatDate(allotment.allotment_date),
      allotment_status: allotment.allotment_status || "-"
    }));
    const headers = this.columns.map((col) => col.label);
    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(exportData, `staff-allotments-${Date.now()}.csv`, headers);
        break;
      case "pdf":
        this.exportService.exportToPDF(exportData, `staff-allotments-${Date.now()}.pdf`, headers);
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
  onStaffIdChange(staffId) {
    this.staffId = staffId || void 0;
    this.pagination.page = 1;
    this.loadAllotments();
  }
  onClassIdChange(classId) {
    this.classId = classId || void 0;
    this.pagination.page = 1;
    this.loadAllotments();
  }
  onSubjectIdChange(subjectId) {
    this.subjectId = subjectId || void 0;
    this.pagination.page = 1;
    this.loadAllotments();
  }
  ondelete(row) {
    this.dialogService.confirm({
      title: "Delete Section",
      message: `Are you sure you want to delete "${row.section_name}"?`,
      confirmText: "Delete",
      cancelText: "Cancel",
      type: "danger"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.staffAllotmentService.deleteAllotment(row.allotment_id).subscribe({
          next: (response) => {
            if (response.status === "success")
              this.toastService.show("staff allpotment deleted successfully", "success");
            this.loadAllotments();
          },
          error: (err) => {
            this.toastService.show("error deleting the staff allotment", "error");
          }
        });
      }
    });
  }
  onEdit(row) {
    this.router.navigate(["/app/staff-allotment/edit", row.allotment_id]);
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function StaffAllotmentListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StaffAllotmentListComponent)(\u0275\u0275directiveInject(StaffAllotmentService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaffAllotmentListComponent, selectors: [["app-staff-allotment-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 16, consts: [[1, "staff-allotment-list-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "additional-filters", "filter-panel"], [1, "filter-group"], ["type", "number", "placeholder", "Filter by Staff ID", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], ["type", "number", "placeholder", "Filter by Class ID", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], ["type", "number", "placeholder", "Filter by Subject ID", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "dateFilterChange", "rowSelect", "refresh", "addClick", "deleteClick", "editClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "selectedRowId", "rowIdKey", "addRoute", "addLabel", "searchPlaceholder", "enableExport", "enableDateFilter"]], template: function StaffAllotmentListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Staff Allotment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, " Manage staff assignments to classes and subjects ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "label");
      \u0275\u0275text(10, "Staff ID:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function StaffAllotmentListComponent_Template_input_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.staffId, $event) || (ctx.staffId = $event);
        return $event;
      });
      \u0275\u0275listener("input", function StaffAllotmentListComponent_Template_input_input_11_listener() {
        return ctx.onStaffIdChange(ctx.staffId);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 5)(13, "label");
      \u0275\u0275text(14, "Class ID:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function StaffAllotmentListComponent_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.classId, $event) || (ctx.classId = $event);
        return $event;
      });
      \u0275\u0275listener("input", function StaffAllotmentListComponent_Template_input_input_15_listener() {
        return ctx.onClassIdChange(ctx.classId);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 5)(17, "label");
      \u0275\u0275text(18, "Subject ID:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function StaffAllotmentListComponent_Template_input_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.subjectId, $event) || (ctx.subjectId = $event);
        return $event;
      });
      \u0275\u0275listener("input", function StaffAllotmentListComponent_Template_input_input_19_listener() {
        return ctx.onSubjectIdChange(ctx.subjectId);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "app-enhanced-table", 9);
      \u0275\u0275listener("pageChange", function StaffAllotmentListComponent_Template_app_enhanced_table_pageChange_20_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function StaffAllotmentListComponent_Template_app_enhanced_table_pageSizeChange_20_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function StaffAllotmentListComponent_Template_app_enhanced_table_searchChange_20_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function StaffAllotmentListComponent_Template_app_enhanced_table_sortChange_20_listener($event) {
        return ctx.onSortChange($event);
      })("dateFilterChange", function StaffAllotmentListComponent_Template_app_enhanced_table_dateFilterChange_20_listener($event) {
        return ctx.onDateFilterChange($event);
      })("rowSelect", function StaffAllotmentListComponent_Template_app_enhanced_table_rowSelect_20_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function StaffAllotmentListComponent_Template_app_enhanced_table_refresh_20_listener() {
        return ctx.onRefresh();
      })("addClick", function StaffAllotmentListComponent_Template_app_enhanced_table_addClick_20_listener() {
        return ctx.onAdd();
      })("deleteClick", function StaffAllotmentListComponent_Template_app_enhanced_table_deleteClick_20_listener($event) {
        return ctx.ondelete($event);
      })("editClick", function StaffAllotmentListComponent_Template_app_enhanced_table_editClick_20_listener($event) {
        return ctx.onEdit($event);
      })("exportClick", function StaffAllotmentListComponent_Template_app_enhanced_table_exportClick_20_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function StaffAllotmentListComponent_Template_app_enhanced_table_filterToggle_20_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275classProp("expanded", ctx.showFilters);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.staffId);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.classId);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.subjectId);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.allotments)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("selectedRowId", ctx.selectedRowId)("rowIdKey", "allotment_id")("addRoute", "/app/staff-allotment/create")("addLabel", "Add Allotment")("searchPlaceholder", "Search by staff name...")("enableExport", true)("enableDateFilter", true);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgModel, RouterModule, EnhancedTableComponent], styles: ["\n\n.staff-allotment-list-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n@media (max-width: 768px) {\n  .staff-allotment-list-container[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .staff-allotment-list-container[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n  }\n}\n.staff-allotment-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-top: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-md);\n}\n.staff-allotment-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n}\n.staff-allotment-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-lg);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  flex-wrap: wrap;\n  align-items: end;\n}\n.staff-allotment-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n  min-width: 150px;\n}\n.staff-allotment-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.staff-allotment-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm) var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  transition: all var(--transition-base);\n}\n.staff-allotment-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n/*# sourceMappingURL=staff-allotment-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaffAllotmentListComponent, { className: "StaffAllotmentListComponent", filePath: "src\\app\\modules\\staff-allotment\\staff-allotment-list\\staff-allotment-list.component.ts", lineNumber: 21 });
})();
export {
  StaffAllotmentListComponent
};
//# sourceMappingURL=chunk-YYP3M6TR.js.map
