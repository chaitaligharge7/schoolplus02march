import {
  DocumentService
} from "./chunk-HSRA4EZ7.js";
import {
  StudentService
} from "./chunk-YLBONAI4.js";
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
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-DC2DSRDW.js";
import {
  ToastService
} from "./chunk-FQ6RWLG3.js";
import {
  Router,
  RouterLink,
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

// src/app/modules/documents/document-list/document-list.component.ts
function DocumentListComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "button", 15);
    \u0275\u0275listener("click", function DocumentListComponent_div_25_Template_button_click_1_listener() {
      let tmp_2_0;
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadDocument((tmp_2_0 = ctx_r1.getSelectedDocument()) == null ? null : tmp_2_0.document_file));
    });
    \u0275\u0275element(2, "i", 16);
    \u0275\u0275text(3, " Download Document ");
    \u0275\u0275elementEnd()();
  }
}
var DocumentListComponent = class _DocumentListComponent {
  documentService;
  studentService;
  dialogService;
  toastService;
  exportService;
  router;
  documents = [];
  students = [];
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
      key: "first_name",
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
      key: "document_type",
      label: "Document Type",
      sortable: true,
      format: (value) => {
        return `<span class="badge badge-info">${value || "-"}</span>`;
      }
    },
    {
      key: "document_title",
      label: "Document Title",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "issue_date",
      label: "Issue Date",
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
  sortColumn = "issue_date";
  sortDirection = "desc";
  startDate;
  endDate;
  studentId;
  documentType;
  status;
  get studentOptions() {
    const all = [{ value: void 0, label: "All Students" }];
    const list = (this.students || []).map((s) => ({
      value: s.student_id,
      label: `${s.first_name || ""} ${s.last_name || ""} (${s.admission_number || ""})`.trim() || ""
    }));
    return [...all, ...list];
  }
  documentTypeOptions = [
    { value: void 0, label: "All Types" },
    { value: "bonafide", label: "Bonafide Certificate" },
    { value: "leaving_certificate", label: "Leaving Certificate" },
    { value: "other", label: "Other" }
  ];
  documentStatusOptions = [
    { value: void 0, label: "All Status" },
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" }
  ];
  constructor(documentService, studentService, dialogService, toastService, exportService, router) {
    this.documentService = documentService;
    this.studentService = studentService;
    this.dialogService = dialogService;
    this.toastService = toastService;
    this.exportService = exportService;
    this.router = router;
  }
  ngOnInit() {
    this.loadStudents();
    this.loadDocuments();
  }
  loadStudents() {
    this.studentService.getStudents({ limit: 1e3 }).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.students = response.data.students || [];
        }
      }
    });
  }
  loadDocuments() {
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
    if (this.studentId) {
      params.student_id = this.studentId;
    }
    if (this.documentType) {
      params.document_type = this.documentType;
    }
    if (this.status) {
      params.status = this.status;
    }
    this.documentService.getDocuments(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === "success" && response.data) {
          this.documents = response.data.documents || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show("Error loading documents", "error");
        console.error("Error loading documents:", error);
      }
    });
  }
  onPageChange(page) {
    this.pagination.page = page;
    this.loadDocuments();
  }
  onPageSizeChange(size) {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadDocuments();
  }
  onSearchChange(search) {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadDocuments();
  }
  onSortChange(sort) {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadDocuments();
  }
  onDateFilterChange(filters) {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadDocuments();
  }
  onRowSelect(row) {
    this.selectedRowId = row.document_id;
  }
  onRefresh() {
    this.loadDocuments();
  }
  onAdd() {
  }
  onEdit(row) {
    console.log("Edit button clicked", row);
    if (!row || !row.document_id) {
      console.error("Invalid document selected", row);
      this.toastService.error("Invalid document selected");
      return;
    }
    console.log("Navigating to edit document with ID:", row.document_id);
    this.router.navigate(["/app/documents/edit", row.document_id]);
  }
  onDelete(row) {
    this.dialogService.confirm({
      title: "Delete Document",
      message: `Are you sure you want to delete "${row.Document_title}"?`,
      confirmText: "Delete",
      cancelText: "Cancel",
      type: "danger"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.documentService.deleteDocument(row.document_id).subscribe({
          next: (response) => {
            if (response.status === "success") {
              this.toastService.show("Document deleted successfully", "success");
              this.loadDocuments();
            }
          },
          error: () => {
            this.toastService.show("Error deleting document", "error");
          }
        });
      }
    });
  }
  onExportClick(event) {
    const exportData = this.documents.map((doc) => ({
      "Student Name": `${doc.first_name || ""} ${doc.last_name || ""}`.trim(),
      "Admission No.": doc.admission_number || "-",
      "Document Type": doc.document_type || "-",
      "Document Title": doc.document_title || "-",
      "Issue Date": this.formatDate(doc.issue_date),
      "Status": doc.status || "-"
    }));
    const headers = this.columns.map((col) => col.label);
    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(exportData, `documents-${Date.now()}.csv`, headers);
        break;
      case "pdf":
        this.exportService.exportToPDF(exportData, `documents-${Date.now()}.pdf`, headers);
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
  onStudentChange(studentId) {
    this.studentId = studentId || void 0;
    this.pagination.page = 1;
    this.loadDocuments();
  }
  onDocumentTypeChange(type) {
    this.documentType = type || void 0;
    this.pagination.page = 1;
    this.loadDocuments();
  }
  onStatusChange(status) {
    this.status = status || void 0;
    this.pagination.page = 1;
    this.loadDocuments();
  }
  getSelectedDocument() {
    return this.documents.find((d) => d.document_id === this.selectedRowId);
  }
  downloadDocument(documentFile) {
    if (documentFile) {
      const url = documentFile.startsWith("http") ? documentFile : this.documentService.getDownloadUrl(documentFile);
      window.open(url, "_blank");
    }
  }
  generateBonafide(studentId) {
    this.dialogService.confirm({
      title: "Generate Bonafide Certificate",
      message: "Generate bonafide certificate for this student?",
      confirmText: "Generate",
      cancelText: "Cancel",
      type: "info"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.documentService.generateBonafide(studentId).subscribe({
          next: (response) => {
            if (response.status === "success") {
              this.toastService.show("Bonafide certificate generated successfully", "success");
              this.loadDocuments();
            }
          },
          error: () => {
            this.toastService.show("Error generating bonafide certificate", "error");
          }
        });
      }
    });
  }
  generateLeaving(studentId) {
    this.dialogService.confirm({
      title: "Generate Leaving Certificate",
      message: "Generate leaving certificate for this student?",
      confirmText: "Generate",
      cancelText: "Cancel",
      type: "info"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.documentService.generateLeaving(studentId).subscribe({
          next: (response) => {
            if (response.status === "success") {
              this.toastService.show("Leaving certificate generated successfully", "success");
              this.loadDocuments();
            }
          },
          error: () => {
            this.toastService.show("Error generating leaving certificate", "error");
          }
        });
      }
    });
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function DocumentListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DocumentListComponent)(\u0275\u0275directiveInject(DocumentService), \u0275\u0275directiveInject(StudentService), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentListComponent, selectors: [["app-document-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 26, vars: 20, consts: [[1, "document-list-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions"], ["routerLink", "/app/documents/half-day-permissions", 1, "btn", "btn-secondary"], [1, "bi", "bi-calendar-check"], [1, "additional-filters", "filter-panel"], [1, "filter-group"], ["placeholder", "Search or select student", 3, "ngModelChange", "valueChange", "options", "ngModel"], ["placeholder", "Search or select type", 3, "ngModelChange", "valueChange", "options", "ngModel"], ["placeholder", "Search or select status", 3, "ngModelChange", "valueChange", "options", "ngModel"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "dateFilterChange", "rowSelect", "refresh", "addClick", "editClick", "deleteClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "selectedRowId", "rowIdKey", "addRoute", "addLabel", "searchPlaceholder", "enableExport", "enableDateFilter"], ["class", "download-action", 4, "ngIf"], [1, "download-action"], ["title", "Download Document", 1, "btn", "btn-primary", 3, "click"], [1, "bi", "bi-download"]], template: function DocumentListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Document Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Manage student documents and certificates");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "a", 5);
      \u0275\u0275element(9, "i", 6);
      \u0275\u0275text(10, " Half Day Permissions ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "label");
      \u0275\u0275text(14, "Student:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "app-search-select", 9);
      \u0275\u0275twoWayListener("ngModelChange", function DocumentListComponent_Template_app_search_select_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.studentId, $event) || (ctx.studentId = $event);
        return $event;
      });
      \u0275\u0275listener("valueChange", function DocumentListComponent_Template_app_search_select_valueChange_15_listener($event) {
        return ctx.onStudentChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 8)(17, "label");
      \u0275\u0275text(18, "Document Type:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "app-search-select", 10);
      \u0275\u0275twoWayListener("ngModelChange", function DocumentListComponent_Template_app_search_select_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.documentType, $event) || (ctx.documentType = $event);
        return $event;
      });
      \u0275\u0275listener("valueChange", function DocumentListComponent_Template_app_search_select_valueChange_19_listener($event) {
        return ctx.onDocumentTypeChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 8)(21, "label");
      \u0275\u0275text(22, "Status:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "app-search-select", 11);
      \u0275\u0275twoWayListener("ngModelChange", function DocumentListComponent_Template_app_search_select_ngModelChange_23_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.status, $event) || (ctx.status = $event);
        return $event;
      });
      \u0275\u0275listener("valueChange", function DocumentListComponent_Template_app_search_select_valueChange_23_listener($event) {
        return ctx.onStatusChange($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "app-enhanced-table", 12);
      \u0275\u0275listener("pageChange", function DocumentListComponent_Template_app_enhanced_table_pageChange_24_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function DocumentListComponent_Template_app_enhanced_table_pageSizeChange_24_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function DocumentListComponent_Template_app_enhanced_table_searchChange_24_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function DocumentListComponent_Template_app_enhanced_table_sortChange_24_listener($event) {
        return ctx.onSortChange($event);
      })("dateFilterChange", function DocumentListComponent_Template_app_enhanced_table_dateFilterChange_24_listener($event) {
        return ctx.onDateFilterChange($event);
      })("rowSelect", function DocumentListComponent_Template_app_enhanced_table_rowSelect_24_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function DocumentListComponent_Template_app_enhanced_table_refresh_24_listener() {
        return ctx.onRefresh();
      })("addClick", function DocumentListComponent_Template_app_enhanced_table_addClick_24_listener() {
        return ctx.onAdd();
      })("editClick", function DocumentListComponent_Template_app_enhanced_table_editClick_24_listener($event) {
        return ctx.onEdit($event);
      })("deleteClick", function DocumentListComponent_Template_app_enhanced_table_deleteClick_24_listener($event) {
        return ctx.onDelete($event);
      })("exportClick", function DocumentListComponent_Template_app_enhanced_table_exportClick_24_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function DocumentListComponent_Template_app_enhanced_table_filterToggle_24_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(25, DocumentListComponent_div_25_Template, 4, 0, "div", 13);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_18_0;
      \u0275\u0275advance(11);
      \u0275\u0275classProp("expanded", ctx.showFilters);
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.studentOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.studentId);
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.documentTypeOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.documentType);
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.documentStatusOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.status);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.documents)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("selectedRowId", ctx.selectedRowId)("rowIdKey", "document_id")("addRoute", "/app/documents/create")("addLabel", "Add Document")("searchPlaceholder", "Search documents...")("enableExport", true)("enableDateFilter", true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedRowId && ((tmp_18_0 = ctx.getSelectedDocument()) == null ? null : tmp_18_0.document_file));
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, NgControlStatus, NgModel, RouterModule, RouterLink, EnhancedTableComponent, SearchSelectComponent], styles: ["\n\n.document-list-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n@media (max-width: 768px) {\n  .document-list-container[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .document-list-container[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n  }\n}\n.document-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-top: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-md);\n}\n.document-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n}\n.document-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  gap: var(--spacing-md);\n}\n.document-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-lg);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  flex-wrap: wrap;\n  align-items: end;\n}\n.document-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n  min-width: 150px;\n}\n.document-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.document-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm) var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  transition: all var(--transition-base);\n}\n.document-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.document-list-container[_ngcontent-%COMP%]   .download-action[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-md);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=document-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocumentListComponent, { className: "DocumentListComponent", filePath: "src\\app\\modules\\documents\\document-list\\document-list.component.ts", lineNumber: 20 });
})();
export {
  DocumentListComponent
};
//# sourceMappingURL=chunk-GRDPM2FV.js.map
