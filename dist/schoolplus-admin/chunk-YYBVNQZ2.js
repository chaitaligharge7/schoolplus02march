import {
  AdmissionService
} from "./chunk-VRHYYXZA.js";
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/admissions/admission-list/admission-list.component.ts
function AdmissionListComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "button", 12);
    \u0275\u0275listener("click", function AdmissionListComponent_div_21_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.approveAdmission(ctx_r1.getSelectedAdmission(), "approve"));
    });
    \u0275\u0275element(2, "i", 13);
    \u0275\u0275text(3, " Approve ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 14);
    \u0275\u0275listener("click", function AdmissionListComponent_div_21_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.approveAdmission(ctx_r1.getSelectedAdmission(), "reject"));
    });
    \u0275\u0275element(5, "i", 15);
    \u0275\u0275text(6, " Reject ");
    \u0275\u0275elementEnd()();
  }
}
var AdmissionListComponent = class _AdmissionListComponent {
  admissionService;
  academicYearService;
  classService;
  dialogService;
  toastService;
  exportService;
  router;
  admissions = [];
  academicYears = [];
  classes = [];
  loading = false;
  selectedRowId;
  pagination = {
    page: 1,
    limit: 20,
    total: 0,
    pages: 0
  };
  columns = [
    {
      key: "admission_number",
      label: "Admission No.",
      sortable: true
    },
    {
      key: "student_name",
      label: "Student Name",
      sortable: true
    },
    {
      key: "parent_name",
      label: "Parent Name",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "parent_mobile",
      label: "Mobile",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "applied_class_name",
      label: "Applied Class",
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
      key: "approval_status",
      label: "Status",
      sortable: true,
      format: (value) => {
        const badgeClass = value === "approved" ? "badge-success" : value === "pending" ? "badge-warning" : "badge-danger";
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
  appliedClassId;
  approvalStatus;
  showFilters = false;
  get academicYearOptions() {
    const all = [{ value: void 0, label: "All Academic Years" }];
    const years = (this.academicYears || []).map((y) => ({ value: y.academic_year_id, label: y.academic_year_name || "" }));
    return [...all, ...years];
  }
  get appliedClassOptions() {
    const all = [{ value: void 0, label: "All Classes" }];
    const list = (this.classes || []).map((c) => ({ value: c.class_id, label: c.class_name || "" }));
    return [...all, ...list];
  }
  approvalStatusOptions = [
    { value: void 0, label: "All Status" },
    { value: "pending", label: "Pending" },
    { value: "approved", label: "Approved" },
    { value: "rejected", label: "Rejected" }
  ];
  constructor(admissionService, academicYearService, classService, dialogService, toastService, exportService, router) {
    this.admissionService = admissionService;
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
    this.loadAdmissions();
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
  loadAdmissions() {
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
    if (this.appliedClassId) {
      params.applied_class_id = this.appliedClassId;
    }
    if (this.approvalStatus) {
      params.approval_status = this.approvalStatus;
    }
    this.admissionService.getAdmissions(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === "success" && response.data) {
          this.admissions = response.data.admissions || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show("Error loading admissions", "error");
        console.error("Error loading admissions:", error);
      }
    });
  }
  onPageChange(page) {
    this.pagination.page = page;
    this.loadAdmissions();
  }
  onPageSizeChange(size) {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadAdmissions();
  }
  onSearchChange(search) {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadAdmissions();
  }
  onSortChange(sort) {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadAdmissions();
  }
  onDateFilterChange(filters) {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadAdmissions();
  }
  onRowSelect(row) {
    this.selectedRowId = row.admission_id;
  }
  onRefresh() {
    this.loadAdmissions();
  }
  onAdd() {
  }
  onEdit(admission) {
    this.router.navigate(["/app/admissions/edit", admission.admission_id]);
  }
  onView(row) {
    this.router.navigate(["/app/admissions/view", row.admission_id]);
  }
  onPrintAdmission(row) {
    const id = row?.admission_id;
    if (id != null) {
      const url = this.router.serializeUrl(this.router.createUrlTree(["/app/admissions/view", id])) + "#print";
      window.open(url, "_blank", "noopener");
    }
  }
  onDelete(admission) {
    this.dialogService.confirm({
      title: "Delete Admission",
      message: "Are you sure you want to delete this admission?",
      confirmText: "Delete",
      cancelText: "Cancel",
      type: "danger"
    }).subscribe((confirmed) => {
      if (!confirmed)
        return;
      this.admissionService.deleteAdmission(admission.admission_id).subscribe({
        next: () => {
          this.toastService.show("Admission deleted successfully", "success");
          this.admissions = this.admissions.filter((a) => a.admission_id !== admission.admission_id);
          if (this.selectedRowId === admission.admission_id) {
            this.selectedRowId = void 0;
          }
          if (this.admissions.length === 0 && this.pagination.page > 1) {
            this.pagination.page--;
            this.loadAdmissions();
          }
        },
        error: (err) => {
          this.toastService.show("Error deleting admission", "error");
        }
      });
    });
  }
  onExportClick(event) {
    const exportData = this.admissions.map((admission) => ({
      "Admission No.": admission.admission_number || "-",
      "Student Name": admission.student_name || "-",
      "Parent Name": admission.parent_name || "-",
      "Mobile": admission.parent_mobile || "-",
      "Applied Class": admission.applied_class_name || "-",
      "Academic Year": admission.academic_year_name || "-",
      "Status": admission.approval_status || "-"
    }));
    const headers = this.columns.map((col) => col.label);
    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(exportData, `admissions-${Date.now()}.csv`, headers);
        break;
      case "pdf":
        this.exportService.exportToPDF(exportData, `admissions-${Date.now()}.pdf`, headers);
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
    this.loadAdmissions();
  }
  onAppliedClassChange(classId) {
    this.appliedClassId = classId || void 0;
    this.pagination.page = 1;
    this.loadAdmissions();
  }
  onApprovalStatusChange(status) {
    this.approvalStatus = status || void 0;
    this.pagination.page = 1;
    this.loadAdmissions();
  }
  approveAdmission(admission, action) {
    const actionText = action === "approve" ? "approve" : "reject";
    this.dialogService.confirm({
      title: `${actionText.charAt(0).toUpperCase() + actionText.slice(1)} Admission`,
      message: `Are you sure you want to ${actionText} admission for ${admission.student_name}?`,
      confirmText: actionText.charAt(0).toUpperCase() + actionText.slice(1),
      cancelText: "Cancel",
      type: "info"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.admissionService.approveAdmission(admission.admission_id, action).subscribe({
          next: (response) => {
            if (response.status === "success") {
              this.toastService.show(`Admission ${actionText}d successfully`, "success");
              this.loadAdmissions();
            }
          },
          error: () => {
            this.toastService.show(`Error ${actionText}ing admission`, "error");
          }
        });
      }
    });
  }
  getSelectedAdmission() {
    return this.admissions.find((a) => a.admission_id === this.selectedRowId);
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function AdmissionListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdmissionListComponent)(\u0275\u0275directiveInject(AdmissionService), \u0275\u0275directiveInject(AcademicYearService), \u0275\u0275directiveInject(ClassService), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdmissionListComponent, selectors: [["app-admission-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 22, consts: [[1, "admission-list-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "additional-filters", "filter-panel"], [1, "filter-group"], ["placeholder", "Search or select academic year", 3, "ngModelChange", "valueChange", "options", "ngModel"], ["placeholder", "Search or select class", 3, "ngModelChange", "valueChange", "options", "ngModel"], ["placeholder", "Search or select status", 3, "ngModelChange", "valueChange", "options", "ngModel"], [3, "printClick", "editClick", "deleteClick", "pageChange", "pageSizeChange", "searchChange", "sortChange", "dateFilterChange", "rowSelect", "refresh", "addClick", "viewClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "selectedRowId", "rowIdKey", "addRoute", "addLabel", "searchPlaceholder", "enableExport", "enableDateFilter", "showViewButton", "showPrintButton"], ["class", "approval-actions", 4, "ngIf"], [1, "approval-actions"], ["title", "Approve Admission", 1, "btn", "btn-success", 3, "click"], [1, "bi", "bi-check-circle"], ["title", "Reject Admission", 1, "btn", "btn-danger", 3, "click"], [1, "bi", "bi-x-circle"]], template: function AdmissionListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Admission Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Manage student admissions and approvals");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "label");
      \u0275\u0275text(10, "Academic Year:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "app-search-select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function AdmissionListComponent_Template_app_search_select_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.academicYearId, $event) || (ctx.academicYearId = $event);
        return $event;
      });
      \u0275\u0275listener("valueChange", function AdmissionListComponent_Template_app_search_select_valueChange_11_listener($event) {
        return ctx.onAcademicYearChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 5)(13, "label");
      \u0275\u0275text(14, "Applied Class:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "app-search-select", 7);
      \u0275\u0275twoWayListener("ngModelChange", function AdmissionListComponent_Template_app_search_select_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.appliedClassId, $event) || (ctx.appliedClassId = $event);
        return $event;
      });
      \u0275\u0275listener("valueChange", function AdmissionListComponent_Template_app_search_select_valueChange_15_listener($event) {
        return ctx.onAppliedClassChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 5)(17, "label");
      \u0275\u0275text(18, "Status:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "app-search-select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function AdmissionListComponent_Template_app_search_select_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.approvalStatus, $event) || (ctx.approvalStatus = $event);
        return $event;
      });
      \u0275\u0275listener("valueChange", function AdmissionListComponent_Template_app_search_select_valueChange_19_listener($event) {
        return ctx.onApprovalStatusChange($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "app-enhanced-table", 9);
      \u0275\u0275listener("printClick", function AdmissionListComponent_Template_app_enhanced_table_printClick_20_listener($event) {
        return ctx.onPrintAdmission($event);
      })("editClick", function AdmissionListComponent_Template_app_enhanced_table_editClick_20_listener($event) {
        return ctx.onEdit($event);
      })("deleteClick", function AdmissionListComponent_Template_app_enhanced_table_deleteClick_20_listener($event) {
        return ctx.onDelete($event);
      })("pageChange", function AdmissionListComponent_Template_app_enhanced_table_pageChange_20_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function AdmissionListComponent_Template_app_enhanced_table_pageSizeChange_20_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function AdmissionListComponent_Template_app_enhanced_table_searchChange_20_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function AdmissionListComponent_Template_app_enhanced_table_sortChange_20_listener($event) {
        return ctx.onSortChange($event);
      })("dateFilterChange", function AdmissionListComponent_Template_app_enhanced_table_dateFilterChange_20_listener($event) {
        return ctx.onDateFilterChange($event);
      })("rowSelect", function AdmissionListComponent_Template_app_enhanced_table_rowSelect_20_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function AdmissionListComponent_Template_app_enhanced_table_refresh_20_listener() {
        return ctx.onRefresh();
      })("addClick", function AdmissionListComponent_Template_app_enhanced_table_addClick_20_listener() {
        return ctx.onAdd();
      })("viewClick", function AdmissionListComponent_Template_app_enhanced_table_viewClick_20_listener($event) {
        return ctx.onView($event);
      })("exportClick", function AdmissionListComponent_Template_app_enhanced_table_exportClick_20_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function AdmissionListComponent_Template_app_enhanced_table_filterToggle_20_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, AdmissionListComponent_div_21_Template, 7, 0, "div", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_20_0;
      \u0275\u0275advance(7);
      \u0275\u0275classProp("expanded", ctx.showFilters);
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.academicYearOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.academicYearId);
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.appliedClassOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.appliedClassId);
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.approvalStatusOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.approvalStatus);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.admissions)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("selectedRowId", ctx.selectedRowId)("rowIdKey", "admission_id")("addRoute", "/app/admissions/create")("addLabel", "Add Admission")("searchPlaceholder", "Search by name, admission number...")("enableExport", true)("enableDateFilter", true)("showViewButton", true)("showPrintButton", true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedRowId && ctx.getSelectedAdmission() && ((tmp_20_0 = ctx.getSelectedAdmission()) == null ? null : tmp_20_0.approval_status) === "pending");
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, NgControlStatus, NgModel, RouterModule, EnhancedTableComponent, SearchSelectComponent], styles: ["\n\n.admission-list-container[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  max-width: 1600px;\n  margin: 0 auto;\n  width: 100%;\n}\n@media (min-width: 1200px) {\n  .admission-list-container[_ngcontent-%COMP%] {\n    padding: 20px 24px;\n  }\n}\n@media (max-width: 768px) {\n  .admission-list-container[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .admission-list-container[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n  }\n}\n.admission-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-top: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-md);\n}\n.admission-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n}\n.admission-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-lg);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  flex-wrap: wrap;\n  align-items: end;\n}\n.admission-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n  min-width: 150px;\n}\n.admission-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.admission-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm) var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  transition: all var(--transition-base);\n}\n.admission-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.admission-list-container[_ngcontent-%COMP%]   .approval-actions[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-md);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  display: flex;\n  gap: var(--spacing-md);\n  justify-content: center;\n}\n/*# sourceMappingURL=admission-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdmissionListComponent, { className: "AdmissionListComponent", filePath: "src\\app\\modules\\admissions\\admission-list\\admission-list.component.ts", lineNumber: 21 });
})();
export {
  AdmissionListComponent
};
//# sourceMappingURL=chunk-YYBVNQZ2.js.map
