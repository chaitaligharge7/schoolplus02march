import {
  IdCardService
} from "./chunk-67FOGMTF.js";
import {
  DialogService
} from "./chunk-UPFK65KQ.js";
import {
  EnhancedTableComponent,
  ExportService
} from "./chunk-LT2VDVRY.js";
import "./chunk-6W4TS6AE.js";
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
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTJ43J7W.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/modules/id-cards/id-card-list/id-card-list.component.ts
var IdCardListComponent = class _IdCardListComponent {
  idCardService;
  toastService;
  dialogService;
  exportService;
  router;
  idCards = [];
  loading = false;
  showFilters = false;
  selectedRowId;
  selectedCard = null;
  pagination = {
    page: 1,
    limit: 20,
    total: 0,
    pages: 0
  };
  columns = [
    {
      key: "person_name",
      label: "Person",
      sortable: true,
      format: (value, row) => {
        const name = row?.student_first_name ? `${row.student_first_name} ${row.student_last_name}` : `${row?.staff_first_name || ""} ${row?.staff_last_name || ""}`;
        const id = row?.admission_number || row?.employee_id || "";
        return `${name.trim() || "-"}<br><small>${id}</small>`;
      }
    },
    {
      key: "card_type",
      label: "Card Type",
      sortable: true,
      format: (value) => {
        return `<span class="badge badge-info">${value || "-"}</span>`;
      }
    },
    {
      key: "person_type",
      label: "Person Type",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "card_number",
      label: "Card Number",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "issued_date",
      label: "Issued Date",
      sortable: true,
      type: "date",
      format: (value, row) => row.issued_date || "-"
    },
    {
      key: "expiry_date",
      label: "Expiry Date",
      sortable: true,
      type: "date",
      format: (value, row) => row.expiry_date || "-"
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
  sortColumn = "issued_date";
  sortDirection = "desc";
  startDate;
  endDate;
  cardType;
  personType;
  status;
  constructor(idCardService, toastService, dialogService, exportService, router) {
    this.idCardService = idCardService;
    this.toastService = toastService;
    this.dialogService = dialogService;
    this.exportService = exportService;
    this.router = router;
  }
  ngOnInit() {
    this.loadIdCards();
  }
  loadIdCards() {
    this.loading = true;
    const params = {
      page: this.pagination.page,
      limit: this.pagination.limit,
      sort_column: this.sortColumn,
      sort_direction: this.sortDirection.toUpperCase()
    };
    if (this.searchTerm)
      params.search = this.searchTerm;
    if (this.startDate)
      params.start_date = this.startDate;
    if (this.endDate)
      params.end_date = this.endDate;
    if (this.cardType)
      params.card_type = this.cardType;
    if (this.personType)
      params.person_type = this.personType;
    this.idCardService.getIdCards(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === "success" && response.data) {
          this.idCards = (response.data.cards || []).map((card) => __spreadProps(__spreadValues({}, card), {
            issued_date: card.issued_date || null,
            expiry_date: card.expiry_date || null,
            student_first_name: card.student_first_name || "",
            student_last_name: card.student_last_name || "",
            staff_first_name: card.staff_first_name || "",
            staff_last_name: card.staff_last_name || "",
            status: card.status || "active"
          }));
          this.pagination = response.data.pagination || this.pagination;
        } else {
          this.idCards = [];
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show("Error loading ID cards", "error");
      }
    });
  }
  onPageChange(page) {
    this.pagination.page = page;
    this.loadIdCards();
  }
  onPageSizeChange(size) {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadIdCards();
  }
  onSearchChange(search) {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadIdCards();
  }
  onSortChange(sort) {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadIdCards();
  }
  onDateFilterChange(filters) {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadIdCards();
  }
  onRowSelect(event) {
    this.selectedCard = event.data;
  }
  onRefresh() {
    this.loadIdCards();
  }
  onAdd() {
  }
  onEdit(card) {
    if (!card || !card.card_id)
      return;
    this.router.navigate(["/app/id-cards/edit", card.card_id]);
  }
  onDelete(card) {
    if (!card || !card.card_id)
      return;
    this.dialogService.confirm({
      title: "Delete ID Card",
      message: `Are you sure you want to delete the ID card for ${card.student_first_name || card.staff_first_name || "this person"}?`,
      confirmText: "Delete",
      cancelText: "Cancel",
      type: "warning"
    }).subscribe((confirmed) => {
      if (!confirmed)
        return;
      this.idCardService.deleteIdCard(card.card_id).subscribe({
        next: (response) => {
          if (response.status === "success") {
            this.toastService.show("ID card deleted successfully", "success");
            this.loadIdCards();
          } else {
            this.toastService.show(response.message || "Failed to delete ID card", "error");
          }
        },
        error: (err) => {
          this.toastService.show("Error deleting ID card", "error");
        }
      });
    });
  }
  onExportClick(event) {
    const exportData = this.idCards.map((card) => {
      const name = card.student_first_name ? `${card.student_first_name} ${card.student_last_name}` : `${card.staff_first_name || ""} ${card.staff_last_name || ""}`;
      const id = card.admission_number || card.employee_id || "";
      return {
        "Person": name.trim(),
        "ID": id,
        "Card Type": card.card_type || "-",
        "Person Type": card.person_type || "-",
        "Card Number": card.card_number || "-",
        "Issued Date": this.formatDate(card.issued_date),
        "Expiry Date": card.expiry_date ? this.formatDate(card.expiry_date) : "-",
        "Status": card.status || "-"
      };
    });
    const headers = this.columns.map((col) => col.label);
    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(exportData, `id-cards-${Date.now()}.csv`, headers);
        break;
      case "pdf":
        this.exportService.exportToPDF(exportData, `id-cards-${Date.now()}.pdf`, headers);
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
  onCardTypeChange(type) {
    this.cardType = type || void 0;
    this.pagination.page = 1;
    this.loadIdCards();
  }
  onPersonTypeChange(type) {
    this.personType = type || void 0;
    this.pagination.page = 1;
    this.loadIdCards();
  }
  onStatusChange(status) {
    this.status = status || void 0;
    this.pagination.page = 1;
    this.loadIdCards();
  }
  generateIdCards() {
    if (!this.selectedCard) {
      this.toastService.show("Please select a record to generate ID cards", "warning");
      return;
    }
    this.dialogService.confirm({
      title: "Generate ID Cards",
      message: "Generate ID cards for selected record?",
      confirmText: "Generate",
      cancelText: "Cancel",
      type: "info"
    }).subscribe((confirmed) => {
      if (!confirmed)
        return;
      const payload = {
        person_ids: [this.selectedCard.person_id],
        person_type: this.selectedCard.person_type || "student",
        card_type: this.selectedCard.card_type || "student"
      };
      this.idCardService.generateIdCards(payload).subscribe({
        next: (response) => {
          if (response.status === "success") {
            this.toastService.show("ID card generated successfully", "success");
            this.pagination.page = 1;
            this.sortColumn = "card_id";
            this.sortDirection = "desc";
            this.loadIdCards();
          } else {
            this.toastService.show(response.message || "Failed to generate ID card", "error");
          }
        },
        error: (error) => {
          this.toastService.show("Error generating ID card", "error");
        }
      });
    });
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function IdCardListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IdCardListComponent)(\u0275\u0275directiveInject(IdCardService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IdCardListComponent, selectors: [["app-id-card-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 49, vars: 20, consts: [[1, "id-card-list-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions"], [1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "bi", "bi-printer"], [1, "additional-filters", "filter-panel"], [1, "filter-group"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], [3, "value"], ["value", "student"], ["value", "staff"], ["value", "visitor"], ["value", "teacher"], ["value", "active"], ["value", "inactive"], ["value", "expired"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "dateFilterChange", "rowSelect", "refresh", "addClick", "editClick", "deleteClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "selectedRowId", "rowIdKey", "addRoute", "addLabel", "searchPlaceholder", "enableExport", "enableDateFilter"]], template: function IdCardListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "ID Cards");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Manage ID cards for students and staff");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
      \u0275\u0275listener("click", function IdCardListComponent_Template_button_click_8_listener() {
        return ctx.generateIdCards();
      });
      \u0275\u0275element(9, "i", 6);
      \u0275\u0275text(10, " Generate ID Card ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "label");
      \u0275\u0275text(14, "Card Type:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "select", 9);
      \u0275\u0275twoWayListener("ngModelChange", function IdCardListComponent_Template_select_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.cardType, $event) || (ctx.cardType = $event);
        return $event;
      });
      \u0275\u0275listener("change", function IdCardListComponent_Template_select_change_15_listener() {
        return ctx.onCardTypeChange(ctx.cardType);
      });
      \u0275\u0275elementStart(16, "option", 10);
      \u0275\u0275text(17, "All Types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "option", 11);
      \u0275\u0275text(19, "Student");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "option", 12);
      \u0275\u0275text(21, "Staff");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "option", 13);
      \u0275\u0275text(23, "Visitor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 8)(25, "label");
      \u0275\u0275text(26, "Person Type:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "select", 9);
      \u0275\u0275twoWayListener("ngModelChange", function IdCardListComponent_Template_select_ngModelChange_27_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.personType, $event) || (ctx.personType = $event);
        return $event;
      });
      \u0275\u0275listener("change", function IdCardListComponent_Template_select_change_27_listener() {
        return ctx.onPersonTypeChange(ctx.personType);
      });
      \u0275\u0275elementStart(28, "option", 10);
      \u0275\u0275text(29, "All Types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "option", 11);
      \u0275\u0275text(31, "Student");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "option", 14);
      \u0275\u0275text(33, "Teacher");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "option", 12);
      \u0275\u0275text(35, "Staff");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "div", 8)(37, "label");
      \u0275\u0275text(38, "Status:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "select", 9);
      \u0275\u0275twoWayListener("ngModelChange", function IdCardListComponent_Template_select_ngModelChange_39_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.status, $event) || (ctx.status = $event);
        return $event;
      });
      \u0275\u0275listener("change", function IdCardListComponent_Template_select_change_39_listener() {
        return ctx.onStatusChange(ctx.status);
      });
      \u0275\u0275elementStart(40, "option", 10);
      \u0275\u0275text(41, "All Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "option", 15);
      \u0275\u0275text(43, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "option", 16);
      \u0275\u0275text(45, "Inactive");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "option", 17);
      \u0275\u0275text(47, "Expired");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(48, "app-enhanced-table", 18);
      \u0275\u0275listener("pageChange", function IdCardListComponent_Template_app_enhanced_table_pageChange_48_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function IdCardListComponent_Template_app_enhanced_table_pageSizeChange_48_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function IdCardListComponent_Template_app_enhanced_table_searchChange_48_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function IdCardListComponent_Template_app_enhanced_table_sortChange_48_listener($event) {
        return ctx.onSortChange($event);
      })("dateFilterChange", function IdCardListComponent_Template_app_enhanced_table_dateFilterChange_48_listener($event) {
        return ctx.onDateFilterChange($event);
      })("rowSelect", function IdCardListComponent_Template_app_enhanced_table_rowSelect_48_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function IdCardListComponent_Template_app_enhanced_table_refresh_48_listener() {
        return ctx.onRefresh();
      })("addClick", function IdCardListComponent_Template_app_enhanced_table_addClick_48_listener() {
        return ctx.onAdd();
      })("editClick", function IdCardListComponent_Template_app_enhanced_table_editClick_48_listener($event) {
        return ctx.onEdit($event);
      })("deleteClick", function IdCardListComponent_Template_app_enhanced_table_deleteClick_48_listener($event) {
        return ctx.onDelete($event);
      })("exportClick", function IdCardListComponent_Template_app_enhanced_table_exportClick_48_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function IdCardListComponent_Template_app_enhanced_table_filterToggle_48_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", !ctx.selectedRowId);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("expanded", ctx.showFilters);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.cardType);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.personType);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.status);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(8);
      \u0275\u0275property("data", ctx.idCards)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("selectedRowId", ctx.selectedRowId)("rowIdKey", "card_id")("addRoute", "/app/id-cards/create")("addLabel", "Add ID Card")("searchPlaceholder", "Search ID cards...")("enableExport", true)("enableDateFilter", true);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, EnhancedTableComponent], styles: ["\n\n.id-card-list-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n@media (max-width: 768px) {\n  .id-card-list-container[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .id-card-list-container[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n  }\n}\n.id-card-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-top: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-md);\n}\n.id-card-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n}\n.id-card-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  gap: var(--spacing-md);\n  flex-wrap: wrap;\n}\n.id-card-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-lg);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  flex-wrap: wrap;\n  align-items: end;\n}\n.id-card-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n  min-width: 150px;\n}\n.id-card-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.id-card-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm) var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  transition: all var(--transition-base);\n}\n.id-card-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n/*# sourceMappingURL=id-card-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IdCardListComponent, { className: "IdCardListComponent", filePath: "src\\app\\modules\\id-cards\\id-card-list\\id-card-list.component.ts", lineNumber: 18 });
})();
export {
  IdCardListComponent
};
//# sourceMappingURL=chunk-M2DBZVQW.js.map
