import {
  FeeGroupService
} from "./chunk-GGIWEJIV.js";
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
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  RequiredValidator,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-DC2DSRDW.js";
import {
  FeeService
} from "./chunk-2IBHENQH.js";
import {
  ToastService
} from "./chunk-FQ6RWLG3.js";
import {
  ActivatedRoute,
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/fee-types/fee-type-list/fee-type-list.component.ts
function FeeTypeListComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "label");
    \u0275\u0275text(3, "Fee Group:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-search-select", 8);
    \u0275\u0275twoWayListener("ngModelChange", function FeeTypeListComponent_div_7_Template_app_search_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.feeGroupId, $event) || (ctx_r1.feeGroupId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("valueChange", function FeeTypeListComponent_div_7_Template_app_search_select_valueChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFeeGroupChange($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("options", ctx_r1.feeGroupOptions);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.feeGroupId);
  }
}
var FeeTypeListComponent = class _FeeTypeListComponent {
  feeService;
  feeGroupService;
  dialogService;
  toastService;
  exportService;
  router;
  route;
  feeTypes = [];
  feeGroups = [];
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
      key: "fee_type_name",
      label: "Fee Type Name",
      sortable: true
    },
    {
      key: "fee_type_code",
      label: "Fee Type Code",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "fee_amount",
      label: "Amount",
      sortable: true,
      type: "number",
      format: (value) => value ? `\u20B9${Number(value).toLocaleString("en-IN")}` : "-"
    },
    {
      key: "fee_group_name",
      label: "Fee Group",
      sortable: true,
      format: (value) => value || "-"
    }
  ];
  searchTerm = "";
  sortColumn = "fee_type_name";
  sortDirection = "asc";
  startDate;
  endDate;
  feeGroupId;
  get feeGroupOptions() {
    const all = [{ value: void 0, label: "All Fee Groups" }];
    const list = (this.feeGroups || []).map((g) => ({ value: g.fee_group_id, label: g.fee_group_name || "" }));
    return [...all, ...list];
  }
  constructor(feeService, feeGroupService, dialogService, toastService, exportService, router, route) {
    this.feeService = feeService;
    this.feeGroupService = feeGroupService;
    this.dialogService = dialogService;
    this.toastService = toastService;
    this.exportService = exportService;
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    this.loadFeeGroups();
    this.route.queryParams.subscribe((params) => {
      const feeGroupId = params["fee_group_id"];
      if (feeGroupId != null && feeGroupId !== "") {
        this.feeGroupId = Number(feeGroupId);
        this.pagination.page = 1;
      }
      this.loadFeeTypes();
    });
  }
  loadFeeGroups() {
    this.feeGroupService.getFeeGroups().subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.feeGroups = response.data.fee_groups || [];
        }
      }
    });
  }
  // loadFeeTypes(): void {
  //   this.loading = true;
  //   const params: any = {
  //     page: this.pagination.page,
  //     limit: this.pagination.limit,
  //     sort_column: this.sortColumn,
  //     sort_direction: this.sortDirection.toUpperCase()
  //   };
  //   if (this.searchTerm) {
  //     params.search = this.searchTerm;
  //   }
  //   if (this.startDate) {
  //     params.start_date = this.startDate;
  //   }
  //   if (this.endDate) {
  //     params.end_date = this.endDate;
  //   }
  //   if (this.feeGroupId) {
  //     params.fee_group_id = this.feeGroupId;
  //   }
  //   this.feeService.getFeeTypes(params).subscribe({
  //     next: (response) => {
  //       this.loading = false;
  //       if (response.status === 'success' && response.data) {
  //         this.feeTypes = response.data.fee_types || [];
  //         this.pagination = response.data.pagination || this.pagination;
  //       }
  //     },
  //     error: (error) => {
  //       this.loading = false;
  //       this.toastService.show('Error loading fee types', 'error');
  //       console.error('Error loading fee types:', error);
  //     }
  //   });
  // }
  loadFeeTypes() {
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
    if (this.feeGroupId) {
      params.fee_group_id = this.feeGroupId;
    }
    console.log("Fee Types API Params:", params);
    this.feeService.getFeeTypes(params).subscribe({
      next: (response) => {
        this.loading = false;
        console.log("Fee Types API Full Response:", response);
        if (response.status === "success" && response.data) {
          this.feeTypes = response.data.fee_types || [];
          this.pagination = response.data.pagination || this.pagination;
          console.log("Fee Types Array:", this.feeTypes);
          if (this.feeTypes.length > 0) {
            console.log("First Fee Type Object:", this.feeTypes[0]);
          }
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show("Error loading fee types", "error");
        console.error("Error loading fee types:", error);
      }
    });
  }
  onPageChange(page) {
    this.pagination.page = page;
    this.loadFeeTypes();
  }
  onPageSizeChange(size) {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadFeeTypes();
  }
  onSearchChange(search) {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadFeeTypes();
  }
  onSortChange(sort) {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadFeeTypes();
  }
  onDateFilterChange(filters) {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadFeeTypes();
  }
  onRowSelect(row) {
    this.selectedRowId = row.fee_type_id;
  }
  onRefresh() {
    this.loadFeeTypes();
  }
  onAdd() {
  }
  onEdit(row) {
    this.router.navigate(["/app/fee-types/edit", row.fee_type_id]);
  }
  onDelete(row) {
    this.dialogService.confirm({
      title: "Delete Fee Type",
      message: `Are you sure you want to delete "${row.fee_type_name}"?`,
      confirmText: "Delete",
      cancelText: "Cancel",
      type: "danger"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.feeService.deleteFeeType(row.fee_type_id).subscribe({
          next: (response) => {
            if (response.status === "success") {
              this.toastService.show("Fee type deleted successfully", "success");
              this.loadFeeTypes();
            }
          },
          error: () => {
            this.toastService.show("Error deleting fee type", "error");
          }
        });
      }
    });
  }
  onExportClick(event) {
    const exportData = this.feeTypes.map((ft) => ({
      "Fee Type Name": ft.fee_type_name,
      "Fee Type Code": ft.fee_type_code || "-",
      Amount: ft.fee_amount ? `\u20B9${Number(ft.fee_amount).toLocaleString("en-IN")}` : "-",
      "Fee Group": ft.fee_group_name || "-"
    }));
    const headers = this.columns.map((col) => col.label);
    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(exportData, `fee-types-${Date.now()}.csv`, headers);
        break;
      case "pdf":
        this.exportService.exportToPDF(exportData, `fee-types-${Date.now()}.pdf`, headers);
        break;
      case "print":
        this.exportService.printTable(exportData, headers);
        break;
      case "copy":
        this.exportService.copyToClipboard(exportData, headers);
        break;
    }
  }
  onFeeGroupChange(groupId) {
    this.feeGroupId = groupId || void 0;
    this.pagination.page = 1;
    this.loadFeeTypes();
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function FeeTypeListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeeTypeListComponent)(\u0275\u0275directiveInject(FeeService), \u0275\u0275directiveInject(FeeGroupService), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeeTypeListComponent, selectors: [["app-fee-type-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 12, consts: [[1, "fee-type-list-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["class", "additional-filters", 4, "ngIf"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "dateFilterChange", "rowSelect", "refresh", "addClick", "editClick", "deleteClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "selectedRowId", "rowIdKey", "addRoute", "addLabel", "searchPlaceholder", "enableExport", "enableDateFilter"], [1, "additional-filters"], [1, "filter-group"], ["placeholder", "Search or select fee group", 3, "ngModelChange", "valueChange", "options", "ngModel"]], template: function FeeTypeListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Fee Types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Manage fee types for your school");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(7, FeeTypeListComponent_div_7_Template, 5, 2, "div", 4);
      \u0275\u0275elementStart(8, "app-enhanced-table", 5);
      \u0275\u0275listener("pageChange", function FeeTypeListComponent_Template_app_enhanced_table_pageChange_8_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function FeeTypeListComponent_Template_app_enhanced_table_pageSizeChange_8_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function FeeTypeListComponent_Template_app_enhanced_table_searchChange_8_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function FeeTypeListComponent_Template_app_enhanced_table_sortChange_8_listener($event) {
        return ctx.onSortChange($event);
      })("dateFilterChange", function FeeTypeListComponent_Template_app_enhanced_table_dateFilterChange_8_listener($event) {
        return ctx.onDateFilterChange($event);
      })("rowSelect", function FeeTypeListComponent_Template_app_enhanced_table_rowSelect_8_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function FeeTypeListComponent_Template_app_enhanced_table_refresh_8_listener() {
        return ctx.onRefresh();
      })("addClick", function FeeTypeListComponent_Template_app_enhanced_table_addClick_8_listener() {
        return ctx.onAdd();
      })("editClick", function FeeTypeListComponent_Template_app_enhanced_table_editClick_8_listener($event) {
        return ctx.onEdit($event);
      })("deleteClick", function FeeTypeListComponent_Template_app_enhanced_table_deleteClick_8_listener($event) {
        return ctx.onDelete($event);
      })("exportClick", function FeeTypeListComponent_Template_app_enhanced_table_exportClick_8_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function FeeTypeListComponent_Template_app_enhanced_table_filterToggle_8_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.feeGroups.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.feeTypes)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("selectedRowId", ctx.selectedRowId)("rowIdKey", "fee_type_id")("addRoute", "/app/fee-types/create")("addLabel", "Add Fee Type")("searchPlaceholder", "Search fee types...")("enableExport", true)("enableDateFilter", true);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, NgControlStatus, NgModel, RouterModule, EnhancedTableComponent, SearchSelectComponent], styles: ['@charset "UTF-8";\n\n\n\n[_ngcontent-%COMP%]:root {\n  --primary-color: #2563eb;\n  --primary-dark: #1e40af;\n  --primary-light: #3b82f6;\n  --primary-lighter: #dbeafe;\n  --primary-gradient:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #1e40af 100%);\n  --primary-gradient-light:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #2563eb 100%);\n  --secondary-color: #0d9488;\n  --secondary-dark: #0f766e;\n  --secondary-light: #14b8a6;\n  --secondary-lighter: #ccfbf1;\n  --secondary-gradient:\n    linear-gradient(\n      135deg,\n      #0d9488 0%,\n      #0f766e 100%);\n  --accent-color: #f59e0b;\n  --accent-dark: #d97706;\n  --accent-light: #fbbf24;\n  --accent-lighter: #fef3c7;\n  --accent-gradient:\n    linear-gradient(\n      135deg,\n      #f59e0b 0%,\n      #d97706 100%);\n  --success-color: #10b981;\n  --success-lighter: #d1fae5;\n  --success-gradient:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  --error-color: #ef4444;\n  --error-lighter: #fee2e2;\n  --error-gradient:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n  --warning-color: #f59e0b;\n  --warning-lighter: #fef3c7;\n  --info-color: #3b82f6;\n  --info-lighter: #dbeafe;\n  --text-primary: #1f2937;\n  --text-secondary: #000000;\n  --text-tertiary: #9ca3af;\n  --bg-primary: #ffffff;\n  --bg-secondary: #f9fafb;\n  --bg-tertiary: #f3f4f6;\n  --bg-gradient:\n    linear-gradient(\n      135deg,\n      #f9fafb 0%,\n      #ffffff 100%);\n  --border-color: #e5e7eb;\n  --border-gradient:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.1) 0%,\n      rgba(37, 99, 235, 0.05) 100%);\n  --spacing-xs: 0.2rem;\n  --spacing-sm: 0.4rem;\n  --spacing-md: 0.75rem;\n  --spacing-lg: 1rem;\n  --spacing-xl: 1.25rem;\n  --spacing-2xl: 1.75rem;\n  --font-family:\n    "Plus Jakarta Sans",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  --font-size-xs: 0.6875rem;\n  --font-size-sm: 0.8125rem;\n  --font-size-base: 0.875rem;\n  --font-size-lg: 1rem;\n  --font-size-xl: 1.125rem;\n  --font-size-2xl: 1.25rem;\n  --font-size-3xl: 1.5rem;\n  --radius-sm: 0.375rem;\n  --radius-md: 0.75rem;\n  --radius-lg: 1rem;\n  --radius-xl: 1.25rem;\n  --radius-full: 9999px;\n  --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  --shadow-md:\n    0 4px 6px -1px rgba(0, 0, 0, 0.1),\n    0 2px 4px -1px rgba(0, 0, 0, 0.06),\n    0 0 0 1px rgba(0, 0, 0, 0.05);\n  --shadow-lg:\n    0 10px 15px -3px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05),\n    0 0 0 1px rgba(0, 0, 0, 0.05);\n  --shadow-xl:\n    0 20px 25px -5px rgba(0, 0, 0, 0.1),\n    0 10px 10px -5px rgba(0, 0, 0, 0.04),\n    0 0 0 1px rgba(0, 0, 0, 0.05);\n  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  --shadow-colored: 0 10px 15px -3px rgba(37, 99, 235, 0.3), 0 4px 6px -2px rgba(37, 99, 235, 0.2);\n  --shadow-colored-lg: 0 20px 25px -5px rgba(37, 99, 235, 0.3), 0 10px 10px -5px rgba(37, 99, 235, 0.2);\n  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);\n  --transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  --transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);\n  --transition-bounce: 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  --transition-smooth: 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  --transform-hover: translateY(-2px) scale(1.02);\n  --transform-active: translateY(0) scale(0.98);\n  --transform-3d: perspective(1000px) rotateX(2deg);\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: var(--font-family);\n  font-size: var(--font-size-base);\n  line-height: 1.6;\n  color: var(--text-primary);\n  background: var(--bg-gradient);\n  background-attachment: fixed;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  transition: background var(--transition-slow);\n  position: relative;\n}\nbody[_ngcontent-%COMP%]::before {\n  content: "";\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    radial-gradient(\n      circle at 20% 50%,\n      rgba(37, 99, 235, 0.03) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 80%,\n      rgba(13, 148, 136, 0.03) 0%,\n      transparent 50%);\n  pointer-events: none;\n  z-index: 0;\n}\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \nh4[_ngcontent-%COMP%], \nh5[_ngcontent-%COMP%], \nh6[_ngcontent-%COMP%] {\n  font-weight: 700;\n  line-height: 1.2;\n  color: var(--text-primary);\n  letter-spacing: -0.02em;\n  transition: color var(--transition-base);\n}\nh1.gradient-text[_ngcontent-%COMP%], \nh2.gradient-text[_ngcontent-%COMP%], \nh3.gradient-text[_ngcontent-%COMP%], \nh4.gradient-text[_ngcontent-%COMP%], \nh5.gradient-text[_ngcontent-%COMP%], \nh6.gradient-text[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md) var(--spacing-lg);\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  border: none;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: all var(--transition-base);\n  text-decoration: none;\n  white-space: nowrap;\n  position: relative;\n  overflow: hidden;\n  box-shadow: var(--shadow-md);\n  transform: translateY(0);\n}\n.btn[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left var(--transition-base);\n}\n.btn[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none !important;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  color: #fff !important;\n  box-shadow: var(--shadow-colored);\n}\n.btn.btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-gradient-light);\n  color: #fff !important;\n  transform: var(--transform-hover);\n  box-shadow: var(--shadow-colored-lg);\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled)   i[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled)   .bi[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled)   span[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: var(--transform-active);\n  box-shadow: var(--shadow-md);\n  color: #fff !important;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--secondary-gradient);\n  color: white;\n  box-shadow: var(--shadow-md);\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--secondary-color);\n  transform: var(--transform-hover);\n  box-shadow: var(--shadow-lg);\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: var(--transform-active);\n}\n.btn.btn-outline[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  border: 2px solid var(--border-color);\n  box-shadow: var(--shadow-sm);\n  backdrop-filter: blur(10px);\n}\n.btn.btn-outline[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-secondary);\n  border-color: var(--primary-color);\n  color: var(--primary-color);\n  transform: var(--transform-hover);\n  box-shadow: var(--shadow-md);\n}\n.btn.btn-outline[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: var(--transform-active);\n}\n.btn.btn-sm[_ngcontent-%COMP%] {\n  padding: var(--spacing-xs) var(--spacing-md);\n  font-size: var(--font-size-xs);\n  box-shadow: var(--shadow-sm);\n}\n.btn.btn-lg[_ngcontent-%COMP%] {\n  padding: var(--spacing-lg) var(--spacing-xl);\n  font-size: var(--font-size-base);\n  box-shadow: var(--shadow-lg);\n}\n.btn.btn-lg[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-3px) scale(1.02);\n}\na.btn.btn-primary[_ngcontent-%COMP%], \nbutton.btn.btn-primary[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\na.btn.btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \na.btn.btn-primary[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%], \na.btn.btn-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \nbutton.btn.btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \nbutton.btn.btn-primary[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%], \nbutton.btn.btn-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: all var(--transition-base);\n  background: var(--bg-secondary);\n  color: var(--text-secondary);\n  box-shadow: var(--shadow-sm);\n  position: relative;\n  overflow: hidden;\n}\n.btn-icon[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border-radius: 50%;\n  background: rgba(37, 99, 235, 0.1);\n  transform: translate(-50%, -50%);\n  transition: width var(--transition-base), height var(--transition-base);\n}\n.btn-icon[_ngcontent-%COMP%]:hover::before {\n  width: 100%;\n  height: 100%;\n}\n.btn-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  transition: transform var(--transition-base);\n}\n.btn-icon[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: scale(1.2) rotate(5deg);\n}\n.btn-icon.btn-edit[_ngcontent-%COMP%]:hover {\n  background: var(--primary-gradient);\n  color: white;\n  box-shadow: var(--shadow-colored);\n  transform: translateY(-2px) scale(1.05);\n}\n.btn-icon.btn-edit[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.btn-icon.btn-delete[_ngcontent-%COMP%]:hover {\n  background: var(--error-gradient);\n  color: white;\n  box-shadow: 0 4px 8px rgba(239, 68, 68, 0.3);\n  transform: translateY(-2px) scale(1.05);\n}\n.btn-icon.btn-delete[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.btn-icon.btn-view[_ngcontent-%COMP%]:hover {\n  background: var(--info-color);\n  color: white;\n  box-shadow: var(--shadow-md);\n  transform: translateY(-2px) scale(1.05);\n}\n.btn-icon.btn-view[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.35rem 0.6rem;\n  min-height: 2rem;\n  font-size: var(--font-size-base);\n  line-height: 1.4;\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-sm);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  transition: all var(--transition-base);\n  box-shadow: none;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.12);\n  border-width: 1px;\n}\n.form-control[_ngcontent-%COMP%]:hover:not(:disabled):not(:focus) {\n  border-color: rgba(37, 99, 235, 0.25);\n}\n.form-control[_ngcontent-%COMP%]:disabled {\n  background: var(--bg-secondary);\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: var(--error-color);\n  box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.1);\n}\nselect.form-control[_ngcontent-%COMP%], \n.page-size-select[_ngcontent-%COMP%] {\n  min-height: 2rem;\n  padding: 0.35rem 0.6rem;\n  font-size: var(--font-size-base);\n  cursor: pointer;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-md);\n  position: relative;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: var(--spacing-xs);\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  letter-spacing: 0.01em;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: var(--spacing-xs) var(--spacing-sm);\n  font-size: var(--font-size-xs);\n  font-weight: 700;\n  border-radius: var(--radius-full);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  box-shadow: var(--shadow-sm);\n  transition: all var(--transition-base);\n  position: relative;\n  overflow: hidden;\n}\n.badge[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.3),\n      transparent);\n  transition: left var(--transition-base);\n}\n.badge[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.badge[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: var(--shadow-md);\n}\n.badge.badge-success[_ngcontent-%COMP%] {\n  background: var(--success-gradient);\n  color: white;\n  box-shadow: 0 2px 4px rgba(16, 185, 129, 0.3);\n}\n.badge.badge-error[_ngcontent-%COMP%] {\n  background: var(--error-gradient);\n  color: white;\n  box-shadow: 0 2px 4px rgba(239, 68, 68, 0.3);\n}\n.badge.badge-warning[_ngcontent-%COMP%] {\n  background: var(--accent-gradient);\n  color: white;\n  box-shadow: 0 2px 4px rgba(245, 158, 11, 0.3);\n}\n.badge.badge-info[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  color: white;\n  box-shadow: 0 2px 4px rgba(37, 99, 235, 0.3);\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--spacing-md);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(37, 99, 235, 0.12) 0%,\n      rgba(37, 99, 235, 0.06) 100%);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-lg) var(--spacing-xl);\n  margin-bottom: var(--spacing-lg);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.7);\n  border: 1px solid rgba(37, 99, 235, 0.15);\n  position: relative;\n  overflow: hidden;\n}\n.page-header[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: var(--primary-gradient);\n  opacity: 0.9;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  position: relative;\n  z-index: 1;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background: var(--primary-gradient);\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 1.35rem;\n  flex-shrink: 0;\n  box-shadow: 0 2px 6px rgba(37, 99, 235, 0.35);\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.page-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-dropdowns[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  flex-wrap: wrap;\n  position: relative;\n  z-index: 1;\n}\n.page-header[_ngcontent-%COMP%]   .header-dropdowns[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  margin: 0;\n  min-width: 0;\n}\n.page-header[_ngcontent-%COMP%]   .header-dropdowns[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--font-size-xs);\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin-bottom: 2px;\n}\n.page-header[_ngcontent-%COMP%]   .header-dropdowns[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 140px;\n  max-width: 180px;\n}\n.form-card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-2xl);\n  box-shadow: var(--shadow-md);\n  border: 1px solid var(--border-color);\n  margin-top: var(--spacing-lg);\n}\n.form-sections[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-2xl);\n}\n.form-section[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--border-color);\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.form-section[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%]:first-child {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  padding: var(--spacing-lg) var(--spacing-xl);\n  margin: 0;\n  font-size: var(--font-size-lg);\n  font-weight: 700;\n  color: var(--text-primary);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.08) 0%,\n      rgba(37, 99, 235, 0.03) 100%);\n  border-bottom: 1px solid var(--border-color);\n}\n.form-section[_ngcontent-%COMP%]   .section-body[_ngcontent-%COMP%] {\n  padding: var(--spacing-xl);\n}\n.form-section[_ngcontent-%COMP%]    > .form-row[_ngcontent-%COMP%]:first-of-type, \n.form-section[_ngcontent-%COMP%]    > .form-grid[_ngcontent-%COMP%]:first-of-type {\n  padding: var(--spacing-xl);\n}\n.form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  padding: var(--spacing-lg) var(--spacing-xl);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.08) 0%,\n      rgba(37, 99, 235, 0.03) 100%);\n  border-bottom: 1px solid var(--border-color);\n}\n.form-section[_ngcontent-%COMP%]   .section-header-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--primary-gradient);\n  color: white;\n  border-radius: var(--radius-md);\n  font-size: 1.1rem;\n  flex-shrink: 0;\n  box-shadow: 0 2px 6px rgba(37, 99, 235, 0.25);\n}\n.form-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-lg);\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n  letter-spacing: -0.01em;\n}\n.form-section[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: var(--spacing-lg);\n}\n.form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: var(--spacing-lg);\n  margin-bottom: var(--spacing-lg);\n}\n.form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.form-section[_ngcontent-%COMP%]   .subsection-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin: 0 0 var(--spacing-md) 0;\n  padding-bottom: var(--spacing-xs);\n  border-bottom: 1px solid var(--border-color);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.form-section[_ngcontent-%COMP%]   .form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-primary);\n  margin-bottom: var(--spacing-xs);\n  font-size: var(--font-size-sm);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: var(--error-color);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  font-size: var(--font-size-base);\n  transition: all var(--transition-fast);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px var(--primary-lighter);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:disabled {\n  background: var(--bg-secondary);\n  cursor: not-allowed;\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: var(--error-color);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  color: var(--error-color);\n  font-size: var(--font-size-xs);\n  margin-top: var(--spacing-xs);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-text[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--font-size-xs);\n  color: var(--text-tertiary);\n  margin-top: var(--spacing-xs);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--spacing-md);\n  margin-top: var(--spacing-2xl);\n  padding-top: var(--spacing-xl);\n  border-top: 1px solid var(--border-color);\n}\n.split-form-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 0;\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-md);\n  border: 1px solid var(--border-color);\n  overflow: hidden;\n  margin-top: var(--spacing-lg);\n}\n.split-form-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  min-width: 0;\n  gap: 0;\n}\n.split-form-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 260px;\n  min-width: 260px;\n  background:\n    linear-gradient(\n      180deg,\n      #f1f5f9 0%,\n      #e2e8f0 100%);\n  border-right: 1px solid var(--border-color);\n  padding: var(--spacing-lg) var(--spacing-md);\n  gap: var(--spacing-xs);\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);\n}\n.split-form-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  padding: 0.625rem 1rem;\n  background: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-radius: var(--radius-md);\n  text-align: left;\n  cursor: pointer;\n  color: var(--text-secondary);\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  transition: all var(--transition-fast);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07);\n}\n.split-form-tab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  width: 24px;\n  opacity: 0.9;\n}\n.split-form-tab[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  color: var(--primary-color);\n  border-color: rgba(37, 99, 235, 0.2);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);\n  transform: translateY(-1px);\n}\n.split-form-tab.active[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  color: #fff !important;\n  border-color: var(--primary-dark);\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n}\n.split-form-tab.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff !important;\n  opacity: 1;\n}\n.split-form-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.split-form-panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--spacing-xl) var(--spacing-2xl);\n  border-bottom: 1px solid var(--border-color);\n  background: var(--bg-primary);\n  gap: var(--spacing-lg);\n}\n.split-form-panel-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-2xl);\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.split-form-panel-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: var(--spacing-2xl);\n  overflow-y: auto;\n  min-height: 280px;\n}\n.split-form-section[_ngcontent-%COMP%] {\n  display: none;\n}\n.split-form-section.active[_ngcontent-%COMP%] {\n  display: block;\n}\n.split-form-section-body[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-md);\n}\n.split-form-section-body[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: var(--spacing-xl);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 0;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-primary);\n  margin-bottom: var(--spacing-sm);\n  font-size: var(--font-size-sm);\n  display: block;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: var(--error-color);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 0.625rem 0.875rem;\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  font-size: var(--font-size-base);\n  transition: all var(--transition-fast);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  min-height: 2.5rem;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px var(--primary-lighter);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:disabled {\n  background: var(--bg-secondary);\n  cursor: not-allowed;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: var(--error-color);\n  box-shadow: 0 0 0 2px var(--error-lighter);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n  padding: 0.75rem 0.875rem;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  color: var(--error-color);\n  font-size: var(--font-size-xs);\n  margin-top: var(--spacing-xs);\n  display: block;\n  min-height: 1.25rem;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .subsection-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin: var(--spacing-lg) 0 var(--spacing-md) 0;\n  padding-bottom: var(--spacing-xs);\n  border-bottom: 1px solid var(--border-color);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .subsection-title[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.split-form-content[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%] {\n  padding: 0.625rem 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n}\n.split-form-content[_ngcontent-%COMP%]   .spinner-small[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@media (max-width: 1024px) {\n  .split-form-content[_ngcontent-%COMP%], \n   .split-form-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .split-form-tabs[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: var(--spacing-md);\n    gap: var(--spacing-sm);\n  }\n  .split-form-panel-header[_ngcontent-%COMP%], \n   .split-form-panel-content[_ngcontent-%COMP%] {\n    padding-left: var(--spacing-xl);\n    padding-right: var(--spacing-xl);\n  }\n}\n@media (max-width: 768px) {\n  .split-form-panel-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--spacing-md);\n  }\n  .split-form-panel-content[_ngcontent-%COMP%] {\n    padding: var(--spacing-xl);\n  }\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-2xl);\n  font-weight: 700;\n  margin: 0 0 2px 0;\n  color: var(--primary-color);\n  letter-spacing: -0.02em;\n  line-height: 1.25;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  color: var(--text-secondary);\n  margin: 0;\n  font-weight: 500;\n  line-height: 1.4;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-lg);\n  box-shadow: var(--shadow-md);\n  border: 1px solid rgba(255, 255, 255, 0.8);\n  transition: all var(--transition-base);\n  position: relative;\n  overflow: hidden;\n  backdrop-filter: blur(10px);\n}\n.card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: var(--primary-gradient);\n  opacity: 0;\n  transition: opacity var(--transition-base);\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: var(--transform-hover);\n  box-shadow: var(--shadow-xl);\n  border-color: rgba(37, 99, 235, 0.2);\n}\n.card[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.card[_ngcontent-%COMP%]:active {\n  transform: var(--transform-active);\n}\n@media (max-width: 768px) {\n  .card[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n    border-radius: var(--radius-md);\n  }\n  .card[_ngcontent-%COMP%]:hover {\n    transform: none;\n  }\n}\n.form-card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-xl);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n  border: 1px solid rgba(37, 99, 235, 0.08);\n  position: relative;\n  overflow: hidden;\n}\n.form-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: var(--primary-gradient);\n  opacity: 0.9;\n}\n@media (max-width: 768px) {\n  .form-card[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n    border-radius: var(--radius-md);\n  }\n}\n.filter-panel[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  min-height: 0;\n  transition: max-height 0.25s ease;\n}\n.filter-panel[_ngcontent-%COMP%]:not(.expanded) {\n  padding: 0 !important;\n  margin: 0 !important;\n  border-width: 0 !important;\n}\n.filter-panel.expanded[_ngcontent-%COMP%] {\n  max-height: 500px;\n}\n.filters-panel[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-xl);\n  padding: 0;\n  margin-bottom: var(--spacing-xl);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9);\n  border: 1px solid rgba(37, 99, 235, 0.08);\n  max-height: 0;\n  min-height: 0;\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.filters-panel[_ngcontent-%COMP%]:not(.expanded) {\n  padding: 0 !important;\n  margin: 0 !important;\n  margin-bottom: 0 !important;\n  border-width: 0 !important;\n}\n.filters-panel.expanded[_ngcontent-%COMP%] {\n  max-height: 500px;\n  padding: var(--spacing-xl);\n}\n.filters-panel[_ngcontent-%COMP%]   .filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-lg);\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n@media (max-width: 768px) {\n  .filters-panel[_ngcontent-%COMP%]   .filters-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-sm);\n  flex: 1;\n  min-width: 180px;\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-md) var(--spacing-lg);\n  border: 2px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  font-size: var(--font-size-base);\n  transition: all var(--transition-base);\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.02);\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1), inset 0 2px 4px rgba(0, 0, 0, 0.02);\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-light);\n}\n[class$=-list-container][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 2px 6px rgba(0, 0, 0, 0.12);\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.65rem 0.75rem;\n  text-align: left;\n  font-weight: 600;\n  font-size: var(--font-size-xs);\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  border-bottom: none;\n  border-right: 1px solid rgba(255, 255, 255, 0.15);\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.22rem 0.5rem;\n  border-bottom: 1px solid var(--border-color);\n  font-size: var(--font-size-sm);\n  color: var(--text-primary);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background var(--transition-fast);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: var(--bg-primary);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgba(37, 99, 235, 0.04);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.08) !important;\n}\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.mt-1[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-sm);\n}\n.mt-2[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-md);\n}\n.mt-3[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-lg);\n}\n.mb-1[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-sm);\n}\n.mb-2[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-md);\n}\n.mb-3[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-lg);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border: 5px solid rgba(37, 99, 235, 0.1);\n  border-top-color: var(--primary-color);\n  border-right-color: var(--primary-color);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;\n  box-shadow: 0 0 20px rgba(37, 99, 235, 0.2);\n  position: relative;\n}\n.spinner[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 20px;\n  height: 20px;\n  border: 3px solid rgba(37, 99, 235, 0.2);\n  border-top-color: var(--primary-light);\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite reverse;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.7;\n    transform: scale(1.1);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideInRight {\n  from {\n    opacity: 0;\n    transform: translateX(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.animate-fade-in-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp var(--transition-slow) ease-out;\n}\n.animate-slide-in-right[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideInRight var(--transition-base) ease-out;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: var(--spacing-2xl);\n  gap: var(--spacing-lg);\n  animation: _ngcontent-%COMP%_fadeInUp var(--transition-slow) ease-out;\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: var(--font-size-base);\n  font-weight: 500;\n  margin-top: var(--spacing-md);\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.loading-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-sm);\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--spacing-2xl);\n  color: var(--text-tertiary);\n  position: relative;\n  animation: _ngcontent-%COMP%_fadeInUp var(--transition-slow) ease-out;\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  margin-bottom: var(--spacing-lg);\n  opacity: 0.6;\n  display: inline-block;\n  background: var(--primary-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  transition: all var(--transition-base);\n  animation: _ngcontent-%COMP%_pulse 2s ease-in-out infinite;\n}\n.empty-state[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotate(5deg);\n  opacity: 0.8;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--font-size-lg);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 var(--spacing-sm) 0;\n  font-size: var(--font-size-xl);\n  font-weight: 700;\n  background: var(--primary-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n@media (max-width: 1200px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--spacing-md);\n    margin-bottom: var(--spacing-lg);\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: var(--font-size-2xl);\n    margin-bottom: var(--spacing-xs);\n  }\n  .page-subtitle[_ngcontent-%COMP%] {\n    font-size: var(--font-size-sm);\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    padding: var(--spacing-sm) var(--spacing-md);\n  }\n  .card[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n    border-radius: var(--radius-md);\n  }\n  .data-table[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xs);\n    display: block;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: var(--spacing-md);\n    border: 1px solid var(--border-color);\n    border-radius: var(--radius-md);\n    padding: var(--spacing-sm);\n  }\n  .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: block;\n    text-align: right;\n    padding: var(--spacing-xs) var(--spacing-sm);\n    border: none;\n    border-bottom: 1px solid var(--bg-secondary);\n  }\n  .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before {\n    content: attr(data-label);\n    float: left;\n    font-weight: 600;\n    color: var(--text-primary);\n  }\n  .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n    gap: var(--spacing-md) !important;\n  }\n  .table-responsive[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n@media (max-width: 480px) {\n  .page-title[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xl);\n  }\n  .page-subtitle[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xs);\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: var(--spacing-md);\n  }\n  .card[_ngcontent-%COMP%] {\n    padding: var(--spacing-sm);\n  }\n  .btn[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xs);\n    padding: var(--spacing-xs) var(--spacing-sm);\n  }\n}\n@media print {\n  .no-print[_ngcontent-%COMP%], \n   .sub-nav-3d[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  *[_ngcontent-%COMP%] {\n    -webkit-print-color-adjust: exact !important;\n    print-color-adjust: exact !important;\n  }\n  body[_ngcontent-%COMP%] {\n    background: #fff !important;\n    color: #000 !important;\n  }\n  @page {\n    size: A4;\n    margin: 12mm 15mm;\n  }\n  .print-document[_ngcontent-%COMP%] {\n    max-width: 100% !important;\n    padding: 0 !important;\n    background: #fff !important;\n    box-shadow: none !important;\n    border: none !important;\n  }\n  .print-header[_ngcontent-%COMP%] {\n    text-align: center;\n    border-bottom: 2px solid #1f2937;\n    padding-bottom: 8px;\n    margin-bottom: 12px;\n  }\n  .print-title[_ngcontent-%COMP%] {\n    font-size: 18pt;\n    font-weight: 700;\n    margin: 0 0 2px 0;\n    color: #1f2937;\n  }\n  .print-subtitle[_ngcontent-%COMP%] {\n    font-size: 10pt;\n    color: #4b5563;\n    margin: 0;\n  }\n  .print-section[_ngcontent-%COMP%] {\n    margin-bottom: 12pt;\n    break-inside: avoid;\n  }\n  .print-section-title[_ngcontent-%COMP%] {\n    font-size: 11pt;\n    font-weight: 700;\n    color: #1f2937;\n    margin: 0 0 6px 0;\n    padding-bottom: 4px;\n    border-bottom: 1px solid #e5e7eb;\n  }\n  .print-table[_ngcontent-%COMP%] {\n    width: 100%;\n    border-collapse: collapse;\n    font-size: 10pt;\n  }\n  .print-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .print-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: 1px solid #d1d5db;\n    padding: 6px 8px;\n    text-align: left;\n  }\n  .print-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background: #f3f4f6 !important;\n    font-weight: 600;\n  }\n  .print-footer[_ngcontent-%COMP%] {\n    margin-top: 14pt;\n    padding-top: 8px;\n    border-top: 1px solid #e5e7eb;\n    font-size: 9pt;\n    color: #6b7280;\n    text-align: center;\n  }\n  .print-only[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n.print-only[_ngcontent-%COMP%] {\n  display: none;\n}\n.cdk-overlay-container[_ngcontent-%COMP%] {\n  z-index: 10000 !important;\n  position: fixed !important;\n  top: 0 !important;\n  left: 0 !important;\n  width: 100% !important;\n  height: 100% !important;\n  pointer-events: none;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]   .cdk-overlay-backdrop[_ngcontent-%COMP%], \n.cdk-overlay-container[_ngcontent-%COMP%]   .cdk-overlay-pane[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  min-height: 100%;\n  padding: 1rem;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]   .cdk-overlay-pane[_ngcontent-%COMP%] {\n  max-height: 100vh;\n  overflow: auto;\n}\n.app-confirm-dialog-overlay[_ngcontent-%COMP%] {\n  z-index: 10001 !important;\n}\n.fee-type-list-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n/*# sourceMappingURL=fee-type-list.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeeTypeListComponent, { className: "FeeTypeListComponent", filePath: "src\\app\\modules\\fee-types\\fee-type-list\\fee-type-list.component.ts", lineNumber: 23 });
})();

// src/app/modules/fee-types/fee-type-create/fee-type-create.component.ts
function FeeTypeCreateComponent_option_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r1 = ctx.$implicit;
    \u0275\u0275property("value", group_r1.fee_group_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", group_r1.fee_group_name, " ");
  }
}
function FeeTypeCreateComponent_span_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.isEditMode ? "Update" : "Create", " Fee Type");
  }
}
function FeeTypeCreateComponent_span_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 26);
    \u0275\u0275text(2, " Saving... ");
    \u0275\u0275elementEnd();
  }
}
var FeeTypeCreateComponent = class _FeeTypeCreateComponent {
  fb;
  feeService;
  feeGroupService;
  router;
  route;
  toastService;
  feeTypeForm;
  isEditMode = false;
  feeTypeId = null;
  isSaving = false;
  feeGroups = [];
  constructor(fb, feeService, feeGroupService, router, route, toastService) {
    this.fb = fb;
    this.feeService = feeService;
    this.feeGroupService = feeGroupService;
    this.router = router;
    this.route = route;
    this.toastService = toastService;
    this.feeTypeForm = this.fb.group({
      fee_type_name: ["", Validators.required],
      fee_type_code: [""],
      fee_group_id: [null, Validators.required],
      fee_amount: [0, [Validators.required, Validators.min(0)]],
      fee_frequency: ["Monthly", Validators.required],
      fee_description: [""]
    });
  }
  ngOnInit() {
    this.loadFeeGroups();
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.feeTypeId = parseInt(params["id"]);
        this.loadFeeType();
      }
    });
  }
  loadFeeGroups() {
    this.feeGroupService.getFeeGroups().subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.feeGroups = response.data.fee_groups || [];
        }
      }
    });
  }
  loadFeeType() {
    if (!this.feeTypeId)
      return;
    this.feeService.getFeeType(this.feeTypeId).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          const feeType = response.data.fee_type;
          this.feeTypeForm.patchValue({
            fee_type_name: feeType.fee_type_name,
            fee_type_code: feeType.fee_type_code || "",
            fee_group_id: feeType.fee_group_id,
            fee_amount: feeType.fee_amount,
            fee_frequency: feeType.fee_frequency || "Monthly",
            fee_description: feeType.fee_description || ""
          });
        }
      }
    });
  }
  onSubmit() {
    if (this.feeTypeForm.invalid) {
      return;
    }
    this.isSaving = true;
    const formData = this.feeTypeForm.value;
    if (this.isEditMode && this.feeTypeId) {
      this.feeService.updateFeeType(this.feeTypeId, formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === "success") {
            this.toastService.show("Fee type updated successfully", "success");
            this.router.navigate(["/app/fee-types"]);
          } else if (response.status === "error") {
            this.toastService.show(response.message || "Error updating fee type", "error");
          }
        },
        error: (err) => {
          this.isSaving = false;
          this.toastService.show(err?.error?.message || err?.message || "Error updating fee type", "error");
        }
      });
    } else {
      this.feeService.createFeeType(formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === "success") {
            this.toastService.show("Fee type created successfully", "success");
            this.router.navigate(["/app/fee-types"]);
          } else if (response.status === "error") {
            this.toastService.show(response.message || "Error creating fee type", "error");
          }
        },
        error: (err) => {
          this.isSaving = false;
          this.toastService.show(err?.error?.message || err?.message || "Error creating fee type", "error");
        }
      });
    }
  }
  static \u0275fac = function FeeTypeCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeeTypeCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(FeeService), \u0275\u0275directiveInject(FeeGroupService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeeTypeCreateComponent, selectors: [["app-fee-type-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 55, vars: 8, consts: [[1, "fee-type-create-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "btn", "btn-outline", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group"], ["type", "text", "formControlName", "fee_type_name", "placeholder", "e.g., Tuition Fee, Transport Fee", "required", "", 1, "form-control"], ["type", "text", "formControlName", "fee_type_code", "placeholder", "e.g., TUIT, TRANS", 1, "form-control"], ["formControlName", "fee_group_id", "required", "", 1, "form-control"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", "formControlName", "fee_amount", "placeholder", "0.00", "min", "0", "step", "0.01", "required", "", 1, "form-control"], ["formControlName", "fee_frequency", "required", "", 1, "form-control"], ["value", "Monthly"], ["value", "Quarterly"], ["value", "Yearly"], ["value", "One-time"], ["formControlName", "fee_description", "rows", "3", "placeholder", "Enter fee type description...", 1, "form-control"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "spinner-small"]], template: function FeeTypeCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275listener("click", function FeeTypeCreateComponent_Template_button_click_7_listener() {
        return ctx.router.navigate(["/app/fee-types"]);
      });
      \u0275\u0275element(8, "i", 5);
      \u0275\u0275text(9, " Back ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 6)(11, "form", 7);
      \u0275\u0275listener("ngSubmit", function FeeTypeCreateComponent_Template_form_ngSubmit_11_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(12, "div", 8)(13, "div", 9)(14, "label");
      \u0275\u0275text(15, "Fee Type Name *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "input", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 9)(18, "label");
      \u0275\u0275text(19, "Fee Type Code");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "input", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 8)(22, "div", 9)(23, "label");
      \u0275\u0275text(24, "Fee Group *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "select", 12)(26, "option", 13);
      \u0275\u0275text(27, "Select Fee Group");
      \u0275\u0275elementEnd();
      \u0275\u0275template(28, FeeTypeCreateComponent_option_28_Template, 2, 2, "option", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 9)(30, "label");
      \u0275\u0275text(31, "Fee Amount *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(32, "input", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 9)(34, "label");
      \u0275\u0275text(35, "Fee Frequency *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "select", 16)(37, "option", 17);
      \u0275\u0275text(38, "Monthly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "option", 18);
      \u0275\u0275text(40, "Quarterly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "option", 19);
      \u0275\u0275text(42, "Yearly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "option", 20);
      \u0275\u0275text(44, "One-time");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(45, "div", 9)(46, "label");
      \u0275\u0275text(47, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(48, "textarea", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 22)(50, "button", 23);
      \u0275\u0275listener("click", function FeeTypeCreateComponent_Template_button_click_50_listener() {
        return ctx.router.navigate(["/app/fee-types"]);
      });
      \u0275\u0275text(51, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "button", 24);
      \u0275\u0275template(53, FeeTypeCreateComponent_span_53_Template, 2, 1, "span", 25)(54, FeeTypeCreateComponent_span_54_Template, 3, 0, "span", 25);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Fee Type" : "Create Fee Type");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Update fee type details" : "Add a new fee type");
      \u0275\u0275advance(5);
      \u0275\u0275property("formGroup", ctx.feeTypeForm);
      \u0275\u0275advance(15);
      \u0275\u0275property("value", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.feeGroups);
      \u0275\u0275advance(24);
      \u0275\u0275property("disabled", ctx.isSaving || ctx.feeTypeForm.invalid);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSaving);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, FormGroupDirective, FormControlName], styles: ['@charset "UTF-8";\n\n\n\n[_ngcontent-%COMP%]:root {\n  --primary-color: #2563eb;\n  --primary-dark: #1e40af;\n  --primary-light: #3b82f6;\n  --primary-lighter: #dbeafe;\n  --primary-gradient:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #1e40af 100%);\n  --primary-gradient-light:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #2563eb 100%);\n  --secondary-color: #0d9488;\n  --secondary-dark: #0f766e;\n  --secondary-light: #14b8a6;\n  --secondary-lighter: #ccfbf1;\n  --secondary-gradient:\n    linear-gradient(\n      135deg,\n      #0d9488 0%,\n      #0f766e 100%);\n  --accent-color: #f59e0b;\n  --accent-dark: #d97706;\n  --accent-light: #fbbf24;\n  --accent-lighter: #fef3c7;\n  --accent-gradient:\n    linear-gradient(\n      135deg,\n      #f59e0b 0%,\n      #d97706 100%);\n  --success-color: #10b981;\n  --success-lighter: #d1fae5;\n  --success-gradient:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  --error-color: #ef4444;\n  --error-lighter: #fee2e2;\n  --error-gradient:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n  --warning-color: #f59e0b;\n  --warning-lighter: #fef3c7;\n  --info-color: #3b82f6;\n  --info-lighter: #dbeafe;\n  --text-primary: #1f2937;\n  --text-secondary: #000000;\n  --text-tertiary: #9ca3af;\n  --bg-primary: #ffffff;\n  --bg-secondary: #f9fafb;\n  --bg-tertiary: #f3f4f6;\n  --bg-gradient:\n    linear-gradient(\n      135deg,\n      #f9fafb 0%,\n      #ffffff 100%);\n  --border-color: #e5e7eb;\n  --border-gradient:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.1) 0%,\n      rgba(37, 99, 235, 0.05) 100%);\n  --spacing-xs: 0.2rem;\n  --spacing-sm: 0.4rem;\n  --spacing-md: 0.75rem;\n  --spacing-lg: 1rem;\n  --spacing-xl: 1.25rem;\n  --spacing-2xl: 1.75rem;\n  --font-family:\n    "Plus Jakarta Sans",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  --font-size-xs: 0.6875rem;\n  --font-size-sm: 0.8125rem;\n  --font-size-base: 0.875rem;\n  --font-size-lg: 1rem;\n  --font-size-xl: 1.125rem;\n  --font-size-2xl: 1.25rem;\n  --font-size-3xl: 1.5rem;\n  --radius-sm: 0.375rem;\n  --radius-md: 0.75rem;\n  --radius-lg: 1rem;\n  --radius-xl: 1.25rem;\n  --radius-full: 9999px;\n  --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  --shadow-md:\n    0 4px 6px -1px rgba(0, 0, 0, 0.1),\n    0 2px 4px -1px rgba(0, 0, 0, 0.06),\n    0 0 0 1px rgba(0, 0, 0, 0.05);\n  --shadow-lg:\n    0 10px 15px -3px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05),\n    0 0 0 1px rgba(0, 0, 0, 0.05);\n  --shadow-xl:\n    0 20px 25px -5px rgba(0, 0, 0, 0.1),\n    0 10px 10px -5px rgba(0, 0, 0, 0.04),\n    0 0 0 1px rgba(0, 0, 0, 0.05);\n  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  --shadow-colored: 0 10px 15px -3px rgba(37, 99, 235, 0.3), 0 4px 6px -2px rgba(37, 99, 235, 0.2);\n  --shadow-colored-lg: 0 20px 25px -5px rgba(37, 99, 235, 0.3), 0 10px 10px -5px rgba(37, 99, 235, 0.2);\n  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);\n  --transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  --transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);\n  --transition-bounce: 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  --transition-smooth: 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  --transform-hover: translateY(-2px) scale(1.02);\n  --transform-active: translateY(0) scale(0.98);\n  --transform-3d: perspective(1000px) rotateX(2deg);\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: var(--font-family);\n  font-size: var(--font-size-base);\n  line-height: 1.6;\n  color: var(--text-primary);\n  background: var(--bg-gradient);\n  background-attachment: fixed;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  transition: background var(--transition-slow);\n  position: relative;\n}\nbody[_ngcontent-%COMP%]::before {\n  content: "";\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    radial-gradient(\n      circle at 20% 50%,\n      rgba(37, 99, 235, 0.03) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 80%,\n      rgba(13, 148, 136, 0.03) 0%,\n      transparent 50%);\n  pointer-events: none;\n  z-index: 0;\n}\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \nh4[_ngcontent-%COMP%], \nh5[_ngcontent-%COMP%], \nh6[_ngcontent-%COMP%] {\n  font-weight: 700;\n  line-height: 1.2;\n  color: var(--text-primary);\n  letter-spacing: -0.02em;\n  transition: color var(--transition-base);\n}\nh1.gradient-text[_ngcontent-%COMP%], \nh2.gradient-text[_ngcontent-%COMP%], \nh3.gradient-text[_ngcontent-%COMP%], \nh4.gradient-text[_ngcontent-%COMP%], \nh5.gradient-text[_ngcontent-%COMP%], \nh6.gradient-text[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md) var(--spacing-lg);\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  border: none;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: all var(--transition-base);\n  text-decoration: none;\n  white-space: nowrap;\n  position: relative;\n  overflow: hidden;\n  box-shadow: var(--shadow-md);\n  transform: translateY(0);\n}\n.btn[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left var(--transition-base);\n}\n.btn[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none !important;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  color: #fff !important;\n  box-shadow: var(--shadow-colored);\n}\n.btn.btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-gradient-light);\n  color: #fff !important;\n  transform: var(--transform-hover);\n  box-shadow: var(--shadow-colored-lg);\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled)   i[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled)   .bi[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled)   span[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: var(--transform-active);\n  box-shadow: var(--shadow-md);\n  color: #fff !important;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--secondary-gradient);\n  color: white;\n  box-shadow: var(--shadow-md);\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--secondary-color);\n  transform: var(--transform-hover);\n  box-shadow: var(--shadow-lg);\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: var(--transform-active);\n}\n.btn.btn-outline[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  border: 2px solid var(--border-color);\n  box-shadow: var(--shadow-sm);\n  backdrop-filter: blur(10px);\n}\n.btn.btn-outline[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-secondary);\n  border-color: var(--primary-color);\n  color: var(--primary-color);\n  transform: var(--transform-hover);\n  box-shadow: var(--shadow-md);\n}\n.btn.btn-outline[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: var(--transform-active);\n}\n.btn.btn-sm[_ngcontent-%COMP%] {\n  padding: var(--spacing-xs) var(--spacing-md);\n  font-size: var(--font-size-xs);\n  box-shadow: var(--shadow-sm);\n}\n.btn.btn-lg[_ngcontent-%COMP%] {\n  padding: var(--spacing-lg) var(--spacing-xl);\n  font-size: var(--font-size-base);\n  box-shadow: var(--shadow-lg);\n}\n.btn.btn-lg[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-3px) scale(1.02);\n}\na.btn.btn-primary[_ngcontent-%COMP%], \nbutton.btn.btn-primary[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\na.btn.btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \na.btn.btn-primary[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%], \na.btn.btn-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \nbutton.btn.btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \nbutton.btn.btn-primary[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%], \nbutton.btn.btn-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: all var(--transition-base);\n  background: var(--bg-secondary);\n  color: var(--text-secondary);\n  box-shadow: var(--shadow-sm);\n  position: relative;\n  overflow: hidden;\n}\n.btn-icon[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border-radius: 50%;\n  background: rgba(37, 99, 235, 0.1);\n  transform: translate(-50%, -50%);\n  transition: width var(--transition-base), height var(--transition-base);\n}\n.btn-icon[_ngcontent-%COMP%]:hover::before {\n  width: 100%;\n  height: 100%;\n}\n.btn-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  transition: transform var(--transition-base);\n}\n.btn-icon[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: scale(1.2) rotate(5deg);\n}\n.btn-icon.btn-edit[_ngcontent-%COMP%]:hover {\n  background: var(--primary-gradient);\n  color: white;\n  box-shadow: var(--shadow-colored);\n  transform: translateY(-2px) scale(1.05);\n}\n.btn-icon.btn-edit[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.btn-icon.btn-delete[_ngcontent-%COMP%]:hover {\n  background: var(--error-gradient);\n  color: white;\n  box-shadow: 0 4px 8px rgba(239, 68, 68, 0.3);\n  transform: translateY(-2px) scale(1.05);\n}\n.btn-icon.btn-delete[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.btn-icon.btn-view[_ngcontent-%COMP%]:hover {\n  background: var(--info-color);\n  color: white;\n  box-shadow: var(--shadow-md);\n  transform: translateY(-2px) scale(1.05);\n}\n.btn-icon.btn-view[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.35rem 0.6rem;\n  min-height: 2rem;\n  font-size: var(--font-size-base);\n  line-height: 1.4;\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-sm);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  transition: all var(--transition-base);\n  box-shadow: none;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.12);\n  border-width: 1px;\n}\n.form-control[_ngcontent-%COMP%]:hover:not(:disabled):not(:focus) {\n  border-color: rgba(37, 99, 235, 0.25);\n}\n.form-control[_ngcontent-%COMP%]:disabled {\n  background: var(--bg-secondary);\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: var(--error-color);\n  box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.1);\n}\nselect.form-control[_ngcontent-%COMP%], \n.page-size-select[_ngcontent-%COMP%] {\n  min-height: 2rem;\n  padding: 0.35rem 0.6rem;\n  font-size: var(--font-size-base);\n  cursor: pointer;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-md);\n  position: relative;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: var(--spacing-xs);\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  letter-spacing: 0.01em;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: var(--spacing-xs) var(--spacing-sm);\n  font-size: var(--font-size-xs);\n  font-weight: 700;\n  border-radius: var(--radius-full);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  box-shadow: var(--shadow-sm);\n  transition: all var(--transition-base);\n  position: relative;\n  overflow: hidden;\n}\n.badge[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.3),\n      transparent);\n  transition: left var(--transition-base);\n}\n.badge[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.badge[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: var(--shadow-md);\n}\n.badge.badge-success[_ngcontent-%COMP%] {\n  background: var(--success-gradient);\n  color: white;\n  box-shadow: 0 2px 4px rgba(16, 185, 129, 0.3);\n}\n.badge.badge-error[_ngcontent-%COMP%] {\n  background: var(--error-gradient);\n  color: white;\n  box-shadow: 0 2px 4px rgba(239, 68, 68, 0.3);\n}\n.badge.badge-warning[_ngcontent-%COMP%] {\n  background: var(--accent-gradient);\n  color: white;\n  box-shadow: 0 2px 4px rgba(245, 158, 11, 0.3);\n}\n.badge.badge-info[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  color: white;\n  box-shadow: 0 2px 4px rgba(37, 99, 235, 0.3);\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--spacing-md);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(37, 99, 235, 0.12) 0%,\n      rgba(37, 99, 235, 0.06) 100%);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-lg) var(--spacing-xl);\n  margin-bottom: var(--spacing-lg);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.7);\n  border: 1px solid rgba(37, 99, 235, 0.15);\n  position: relative;\n  overflow: hidden;\n}\n.page-header[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: var(--primary-gradient);\n  opacity: 0.9;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  position: relative;\n  z-index: 1;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background: var(--primary-gradient);\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 1.35rem;\n  flex-shrink: 0;\n  box-shadow: 0 2px 6px rgba(37, 99, 235, 0.35);\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.page-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-dropdowns[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  flex-wrap: wrap;\n  position: relative;\n  z-index: 1;\n}\n.page-header[_ngcontent-%COMP%]   .header-dropdowns[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  margin: 0;\n  min-width: 0;\n}\n.page-header[_ngcontent-%COMP%]   .header-dropdowns[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--font-size-xs);\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin-bottom: 2px;\n}\n.page-header[_ngcontent-%COMP%]   .header-dropdowns[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 140px;\n  max-width: 180px;\n}\n.form-card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-2xl);\n  box-shadow: var(--shadow-md);\n  border: 1px solid var(--border-color);\n  margin-top: var(--spacing-lg);\n}\n.form-sections[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-2xl);\n}\n.form-section[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--border-color);\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.form-section[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%]:first-child {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  padding: var(--spacing-lg) var(--spacing-xl);\n  margin: 0;\n  font-size: var(--font-size-lg);\n  font-weight: 700;\n  color: var(--text-primary);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.08) 0%,\n      rgba(37, 99, 235, 0.03) 100%);\n  border-bottom: 1px solid var(--border-color);\n}\n.form-section[_ngcontent-%COMP%]   .section-body[_ngcontent-%COMP%] {\n  padding: var(--spacing-xl);\n}\n.form-section[_ngcontent-%COMP%]    > .form-row[_ngcontent-%COMP%]:first-of-type, \n.form-section[_ngcontent-%COMP%]    > .form-grid[_ngcontent-%COMP%]:first-of-type {\n  padding: var(--spacing-xl);\n}\n.form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  padding: var(--spacing-lg) var(--spacing-xl);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.08) 0%,\n      rgba(37, 99, 235, 0.03) 100%);\n  border-bottom: 1px solid var(--border-color);\n}\n.form-section[_ngcontent-%COMP%]   .section-header-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--primary-gradient);\n  color: white;\n  border-radius: var(--radius-md);\n  font-size: 1.1rem;\n  flex-shrink: 0;\n  box-shadow: 0 2px 6px rgba(37, 99, 235, 0.25);\n}\n.form-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-lg);\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n  letter-spacing: -0.01em;\n}\n.form-section[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: var(--spacing-lg);\n}\n.form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: var(--spacing-lg);\n  margin-bottom: var(--spacing-lg);\n}\n.form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.form-section[_ngcontent-%COMP%]   .subsection-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin: 0 0 var(--spacing-md) 0;\n  padding-bottom: var(--spacing-xs);\n  border-bottom: 1px solid var(--border-color);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.form-section[_ngcontent-%COMP%]   .form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-primary);\n  margin-bottom: var(--spacing-xs);\n  font-size: var(--font-size-sm);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: var(--error-color);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  font-size: var(--font-size-base);\n  transition: all var(--transition-fast);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px var(--primary-lighter);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:disabled {\n  background: var(--bg-secondary);\n  cursor: not-allowed;\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: var(--error-color);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  color: var(--error-color);\n  font-size: var(--font-size-xs);\n  margin-top: var(--spacing-xs);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-text[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--font-size-xs);\n  color: var(--text-tertiary);\n  margin-top: var(--spacing-xs);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--spacing-md);\n  margin-top: var(--spacing-2xl);\n  padding-top: var(--spacing-xl);\n  border-top: 1px solid var(--border-color);\n}\n.split-form-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 0;\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-md);\n  border: 1px solid var(--border-color);\n  overflow: hidden;\n  margin-top: var(--spacing-lg);\n}\n.split-form-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  min-width: 0;\n  gap: 0;\n}\n.split-form-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 260px;\n  min-width: 260px;\n  background:\n    linear-gradient(\n      180deg,\n      #f1f5f9 0%,\n      #e2e8f0 100%);\n  border-right: 1px solid var(--border-color);\n  padding: var(--spacing-lg) var(--spacing-md);\n  gap: var(--spacing-xs);\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);\n}\n.split-form-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  padding: 0.625rem 1rem;\n  background: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-radius: var(--radius-md);\n  text-align: left;\n  cursor: pointer;\n  color: var(--text-secondary);\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  transition: all var(--transition-fast);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07);\n}\n.split-form-tab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  width: 24px;\n  opacity: 0.9;\n}\n.split-form-tab[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  color: var(--primary-color);\n  border-color: rgba(37, 99, 235, 0.2);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);\n  transform: translateY(-1px);\n}\n.split-form-tab.active[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  color: #fff !important;\n  border-color: var(--primary-dark);\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n}\n.split-form-tab.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff !important;\n  opacity: 1;\n}\n.split-form-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.split-form-panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--spacing-xl) var(--spacing-2xl);\n  border-bottom: 1px solid var(--border-color);\n  background: var(--bg-primary);\n  gap: var(--spacing-lg);\n}\n.split-form-panel-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-2xl);\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.split-form-panel-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: var(--spacing-2xl);\n  overflow-y: auto;\n  min-height: 280px;\n}\n.split-form-section[_ngcontent-%COMP%] {\n  display: none;\n}\n.split-form-section.active[_ngcontent-%COMP%] {\n  display: block;\n}\n.split-form-section-body[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-md);\n}\n.split-form-section-body[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: var(--spacing-xl);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 0;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-primary);\n  margin-bottom: var(--spacing-sm);\n  font-size: var(--font-size-sm);\n  display: block;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: var(--error-color);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 0.625rem 0.875rem;\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  font-size: var(--font-size-base);\n  transition: all var(--transition-fast);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  min-height: 2.5rem;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px var(--primary-lighter);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:disabled {\n  background: var(--bg-secondary);\n  cursor: not-allowed;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: var(--error-color);\n  box-shadow: 0 0 0 2px var(--error-lighter);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n  padding: 0.75rem 0.875rem;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  color: var(--error-color);\n  font-size: var(--font-size-xs);\n  margin-top: var(--spacing-xs);\n  display: block;\n  min-height: 1.25rem;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .subsection-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin: var(--spacing-lg) 0 var(--spacing-md) 0;\n  padding-bottom: var(--spacing-xs);\n  border-bottom: 1px solid var(--border-color);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .subsection-title[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.split-form-content[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%] {\n  padding: 0.625rem 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n}\n.split-form-content[_ngcontent-%COMP%]   .spinner-small[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@media (max-width: 1024px) {\n  .split-form-content[_ngcontent-%COMP%], \n   .split-form-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .split-form-tabs[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: var(--spacing-md);\n    gap: var(--spacing-sm);\n  }\n  .split-form-panel-header[_ngcontent-%COMP%], \n   .split-form-panel-content[_ngcontent-%COMP%] {\n    padding-left: var(--spacing-xl);\n    padding-right: var(--spacing-xl);\n  }\n}\n@media (max-width: 768px) {\n  .split-form-panel-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--spacing-md);\n  }\n  .split-form-panel-content[_ngcontent-%COMP%] {\n    padding: var(--spacing-xl);\n  }\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-2xl);\n  font-weight: 700;\n  margin: 0 0 2px 0;\n  color: var(--primary-color);\n  letter-spacing: -0.02em;\n  line-height: 1.25;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  color: var(--text-secondary);\n  margin: 0;\n  font-weight: 500;\n  line-height: 1.4;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-lg);\n  box-shadow: var(--shadow-md);\n  border: 1px solid rgba(255, 255, 255, 0.8);\n  transition: all var(--transition-base);\n  position: relative;\n  overflow: hidden;\n  backdrop-filter: blur(10px);\n}\n.card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: var(--primary-gradient);\n  opacity: 0;\n  transition: opacity var(--transition-base);\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: var(--transform-hover);\n  box-shadow: var(--shadow-xl);\n  border-color: rgba(37, 99, 235, 0.2);\n}\n.card[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.card[_ngcontent-%COMP%]:active {\n  transform: var(--transform-active);\n}\n@media (max-width: 768px) {\n  .card[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n    border-radius: var(--radius-md);\n  }\n  .card[_ngcontent-%COMP%]:hover {\n    transform: none;\n  }\n}\n.form-card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-xl);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n  border: 1px solid rgba(37, 99, 235, 0.08);\n  position: relative;\n  overflow: hidden;\n}\n.form-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: var(--primary-gradient);\n  opacity: 0.9;\n}\n@media (max-width: 768px) {\n  .form-card[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n    border-radius: var(--radius-md);\n  }\n}\n.filter-panel[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  min-height: 0;\n  transition: max-height 0.25s ease;\n}\n.filter-panel[_ngcontent-%COMP%]:not(.expanded) {\n  padding: 0 !important;\n  margin: 0 !important;\n  border-width: 0 !important;\n}\n.filter-panel.expanded[_ngcontent-%COMP%] {\n  max-height: 500px;\n}\n.filters-panel[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-xl);\n  padding: 0;\n  margin-bottom: var(--spacing-xl);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9);\n  border: 1px solid rgba(37, 99, 235, 0.08);\n  max-height: 0;\n  min-height: 0;\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.filters-panel[_ngcontent-%COMP%]:not(.expanded) {\n  padding: 0 !important;\n  margin: 0 !important;\n  margin-bottom: 0 !important;\n  border-width: 0 !important;\n}\n.filters-panel.expanded[_ngcontent-%COMP%] {\n  max-height: 500px;\n  padding: var(--spacing-xl);\n}\n.filters-panel[_ngcontent-%COMP%]   .filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-lg);\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n@media (max-width: 768px) {\n  .filters-panel[_ngcontent-%COMP%]   .filters-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-sm);\n  flex: 1;\n  min-width: 180px;\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-md) var(--spacing-lg);\n  border: 2px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  font-size: var(--font-size-base);\n  transition: all var(--transition-base);\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.02);\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1), inset 0 2px 4px rgba(0, 0, 0, 0.02);\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-light);\n}\n[class$=-list-container][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 2px 6px rgba(0, 0, 0, 0.12);\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.65rem 0.75rem;\n  text-align: left;\n  font-weight: 600;\n  font-size: var(--font-size-xs);\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  border-bottom: none;\n  border-right: 1px solid rgba(255, 255, 255, 0.15);\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.22rem 0.5rem;\n  border-bottom: 1px solid var(--border-color);\n  font-size: var(--font-size-sm);\n  color: var(--text-primary);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background var(--transition-fast);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: var(--bg-primary);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgba(37, 99, 235, 0.04);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.08) !important;\n}\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.mt-1[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-sm);\n}\n.mt-2[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-md);\n}\n.mt-3[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-lg);\n}\n.mb-1[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-sm);\n}\n.mb-2[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-md);\n}\n.mb-3[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-lg);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border: 5px solid rgba(37, 99, 235, 0.1);\n  border-top-color: var(--primary-color);\n  border-right-color: var(--primary-color);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;\n  box-shadow: 0 0 20px rgba(37, 99, 235, 0.2);\n  position: relative;\n}\n.spinner[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 20px;\n  height: 20px;\n  border: 3px solid rgba(37, 99, 235, 0.2);\n  border-top-color: var(--primary-light);\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite reverse;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.7;\n    transform: scale(1.1);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideInRight {\n  from {\n    opacity: 0;\n    transform: translateX(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.animate-fade-in-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp var(--transition-slow) ease-out;\n}\n.animate-slide-in-right[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideInRight var(--transition-base) ease-out;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: var(--spacing-2xl);\n  gap: var(--spacing-lg);\n  animation: _ngcontent-%COMP%_fadeInUp var(--transition-slow) ease-out;\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: var(--font-size-base);\n  font-weight: 500;\n  margin-top: var(--spacing-md);\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.loading-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-sm);\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--spacing-2xl);\n  color: var(--text-tertiary);\n  position: relative;\n  animation: _ngcontent-%COMP%_fadeInUp var(--transition-slow) ease-out;\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  margin-bottom: var(--spacing-lg);\n  opacity: 0.6;\n  display: inline-block;\n  background: var(--primary-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  transition: all var(--transition-base);\n  animation: _ngcontent-%COMP%_pulse 2s ease-in-out infinite;\n}\n.empty-state[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotate(5deg);\n  opacity: 0.8;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--font-size-lg);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 var(--spacing-sm) 0;\n  font-size: var(--font-size-xl);\n  font-weight: 700;\n  background: var(--primary-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n@media (max-width: 1200px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--spacing-md);\n    margin-bottom: var(--spacing-lg);\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: var(--font-size-2xl);\n    margin-bottom: var(--spacing-xs);\n  }\n  .page-subtitle[_ngcontent-%COMP%] {\n    font-size: var(--font-size-sm);\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    padding: var(--spacing-sm) var(--spacing-md);\n  }\n  .card[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n    border-radius: var(--radius-md);\n  }\n  .data-table[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xs);\n    display: block;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: var(--spacing-md);\n    border: 1px solid var(--border-color);\n    border-radius: var(--radius-md);\n    padding: var(--spacing-sm);\n  }\n  .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: block;\n    text-align: right;\n    padding: var(--spacing-xs) var(--spacing-sm);\n    border: none;\n    border-bottom: 1px solid var(--bg-secondary);\n  }\n  .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before {\n    content: attr(data-label);\n    float: left;\n    font-weight: 600;\n    color: var(--text-primary);\n  }\n  .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n    gap: var(--spacing-md) !important;\n  }\n  .table-responsive[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n@media (max-width: 480px) {\n  .page-title[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xl);\n  }\n  .page-subtitle[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xs);\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: var(--spacing-md);\n  }\n  .card[_ngcontent-%COMP%] {\n    padding: var(--spacing-sm);\n  }\n  .btn[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xs);\n    padding: var(--spacing-xs) var(--spacing-sm);\n  }\n}\n@media print {\n  .no-print[_ngcontent-%COMP%], \n   .sub-nav-3d[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  *[_ngcontent-%COMP%] {\n    -webkit-print-color-adjust: exact !important;\n    print-color-adjust: exact !important;\n  }\n  body[_ngcontent-%COMP%] {\n    background: #fff !important;\n    color: #000 !important;\n  }\n  @page {\n    size: A4;\n    margin: 12mm 15mm;\n  }\n  .print-document[_ngcontent-%COMP%] {\n    max-width: 100% !important;\n    padding: 0 !important;\n    background: #fff !important;\n    box-shadow: none !important;\n    border: none !important;\n  }\n  .print-header[_ngcontent-%COMP%] {\n    text-align: center;\n    border-bottom: 2px solid #1f2937;\n    padding-bottom: 8px;\n    margin-bottom: 12px;\n  }\n  .print-title[_ngcontent-%COMP%] {\n    font-size: 18pt;\n    font-weight: 700;\n    margin: 0 0 2px 0;\n    color: #1f2937;\n  }\n  .print-subtitle[_ngcontent-%COMP%] {\n    font-size: 10pt;\n    color: #4b5563;\n    margin: 0;\n  }\n  .print-section[_ngcontent-%COMP%] {\n    margin-bottom: 12pt;\n    break-inside: avoid;\n  }\n  .print-section-title[_ngcontent-%COMP%] {\n    font-size: 11pt;\n    font-weight: 700;\n    color: #1f2937;\n    margin: 0 0 6px 0;\n    padding-bottom: 4px;\n    border-bottom: 1px solid #e5e7eb;\n  }\n  .print-table[_ngcontent-%COMP%] {\n    width: 100%;\n    border-collapse: collapse;\n    font-size: 10pt;\n  }\n  .print-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .print-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: 1px solid #d1d5db;\n    padding: 6px 8px;\n    text-align: left;\n  }\n  .print-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background: #f3f4f6 !important;\n    font-weight: 600;\n  }\n  .print-footer[_ngcontent-%COMP%] {\n    margin-top: 14pt;\n    padding-top: 8px;\n    border-top: 1px solid #e5e7eb;\n    font-size: 9pt;\n    color: #6b7280;\n    text-align: center;\n  }\n  .print-only[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n.print-only[_ngcontent-%COMP%] {\n  display: none;\n}\n.cdk-overlay-container[_ngcontent-%COMP%] {\n  z-index: 10000 !important;\n  position: fixed !important;\n  top: 0 !important;\n  left: 0 !important;\n  width: 100% !important;\n  height: 100% !important;\n  pointer-events: none;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]   .cdk-overlay-backdrop[_ngcontent-%COMP%], \n.cdk-overlay-container[_ngcontent-%COMP%]   .cdk-overlay-pane[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  min-height: 100%;\n  padding: 1rem;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]   .cdk-overlay-pane[_ngcontent-%COMP%] {\n  max-height: 100vh;\n  overflow: auto;\n}\n.app-confirm-dialog-overlay[_ngcontent-%COMP%] {\n  z-index: 10001 !important;\n}\n.fee-type-create-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n.form-card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-xl);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-color);\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-md);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--spacing-md);\n  margin-top: var(--spacing-lg);\n}\n/*# sourceMappingURL=fee-type-create.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeeTypeCreateComponent, { className: "FeeTypeCreateComponent", filePath: "src\\app\\modules\\fee-types\\fee-type-create\\fee-type-create.component.ts", lineNumber: 16 });
})();

// src/app/modules/fee-types/fee-types.routes.ts
var FEE_TYPES_ROUTES = [
  { path: "", component: FeeTypeListComponent },
  { path: "create", component: FeeTypeCreateComponent },
  { path: "edit/:id", component: FeeTypeCreateComponent }
];
export {
  FEE_TYPES_ROUTES
};
//# sourceMappingURL=chunk-OTWNAZ3G.js.map
