import {
  ComplaintService
} from "./chunk-JALG77HQ.js";
import {
  DialogService
} from "./chunk-UPFK65KQ.js";
import {
  EnhancedTableComponent
} from "./chunk-LT2VDVRY.js";
import "./chunk-6W4TS6AE.js";
import {
  FormsModule
} from "./chunk-DC2DSRDW.js";
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
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/complaints/category-list/category-list.component.ts
var CategoriesListComponent = class _CategoriesListComponent {
  complaintService;
  toastService;
  dialogService;
  router;
  route;
  // Table data
  categories = [];
  // Table column configuration
  columns = [
    { key: "category_name", label: "Category Name", sortable: true },
    { key: "description", label: "Description", sortable: false },
    {
      key: "category_status",
      label: "Status",
      sortable: true,
      format: (value) => {
        const statusText = value === 1 || value === "1" ? "Active" : "Inactive";
        const badgeClass = statusText === "Active" ? "badge-success" : "badge-danger";
        return `<span class="badge ${badgeClass}">${statusText}</span>`;
      }
    }
  ];
  // Pagination config
  pagination = {
    page: 1,
    limit: 10,
    total: 0
  };
  loading = false;
  showFilters = false;
  selectedRowId;
  searchTerm = "";
  sortKey = "";
  sortDirection = "";
  isEditMode = false;
  constructor(complaintService, toastService, dialogService, router, route) {
    this.complaintService = complaintService;
    this.toastService = toastService;
    this.dialogService = dialogService;
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    this.loadCategories();
  }
  // ========================
  // Data loading
  // ========================
  loadCategories() {
    this.loading = true;
    const params = {
      page: this.pagination.page,
      limit: this.pagination.limit
    };
    if (this.searchTerm)
      params.search = this.searchTerm;
    if (this.sortKey)
      params.sort_column = this.sortKey;
    if (this.sortDirection)
      params.sort_direction = this.sortDirection.toUpperCase();
    this.complaintService.getComplaintCategories().subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === "success" && res.data) {
          this.categories = res.data.categories || [];
          this.pagination.total = res.data.pagination?.total ?? this.categories.length;
        }
      },
      error: (err) => {
        this.loading = false;
        console.error("Error loading categories:", err);
        this.toastService.show("Failed to load categories", "error");
      }
    });
  }
  // ========================
  // Table events
  // ========================
  onPageChange(page) {
    this.pagination.page = page;
    this.loadCategories();
  }
  onPageSizeChange(size) {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadCategories();
  }
  onSearchChange(search) {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadCategories();
  }
  onRowSelect(row) {
    this.selectedRowId = row.category_id;
  }
  onRefresh() {
    this.loadCategories();
  }
  // ========================
  // Actions
  // ========================
  onAdd() {
    this.router.navigate(["/app/complaints/add"]);
  }
  onEdit(row) {
    this.router.navigate(["/app/complaints/categoryedit", row.category_id]);
  }
  onDelete(row) {
    this.dialogService.confirm({
      title: "Delete Category",
      message: `Are you sure you want to delete "${row.category_name}"?`,
      confirmText: "Delete",
      cancelText: "Cancel",
      type: "danger"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.complaintService.deleteComplaintCategory(row.category_id).subscribe({
          next: (res) => {
            if (res.status === "success") {
              this.toastService.show("Category deleted successfully", "success");
              this.loadCategories();
            }
          },
          error: () => {
            this.toastService.show("Failed to delete category", "error");
          }
        });
      }
    });
  }
  goBack() {
    this.router.navigate(["/app/complaints/list"]);
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function CategoriesListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategoriesListComponent)(\u0275\u0275directiveInject(ComplaintService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoriesListComponent, selectors: [["app-category-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 6, consts: [[1, "visitor-list-container"], [1, "page-header", 2, "display", "flex", "justify-content", "space-between", "align-items", "center"], [1, "page-title"], [1, "page-subtitle"], [1, "btn", "btn-secondary", 3, "click"], [1, "fa", "fa-arrow-left"], [3, "pageChange", "pageSizeChange", "searchChange", "rowSelect", "refresh", "deleteClick", "addClick", "editClick", "data", "columns", "selectedRowId", "loading", "rowIdKey", "searchPlaceholder"]], template: function CategoriesListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Complaints Categories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Manage complaint categories");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div")(8, "button", 4);
      \u0275\u0275listener("click", function CategoriesListComponent_Template_button_click_8_listener() {
        return ctx.goBack();
      });
      \u0275\u0275element(9, "i", 5);
      \u0275\u0275text(10, " Back ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "app-enhanced-table", 6);
      \u0275\u0275listener("pageChange", function CategoriesListComponent_Template_app_enhanced_table_pageChange_11_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function CategoriesListComponent_Template_app_enhanced_table_pageSizeChange_11_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function CategoriesListComponent_Template_app_enhanced_table_searchChange_11_listener($event) {
        return ctx.onSearchChange($event);
      })("rowSelect", function CategoriesListComponent_Template_app_enhanced_table_rowSelect_11_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function CategoriesListComponent_Template_app_enhanced_table_refresh_11_listener() {
        return ctx.onRefresh();
      })("deleteClick", function CategoriesListComponent_Template_app_enhanced_table_deleteClick_11_listener($event) {
        return ctx.onDelete($event);
      })("addClick", function CategoriesListComponent_Template_app_enhanced_table_addClick_11_listener() {
        return ctx.onAdd();
      })("editClick", function CategoriesListComponent_Template_app_enhanced_table_editClick_11_listener($event) {
        return ctx.onEdit($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("data", ctx.categories)("columns", ctx.columns)("selectedRowId", ctx.selectedRowId)("loading", ctx.loading)("rowIdKey", "category_id")("searchPlaceholder", "Search category...");
    }
  }, dependencies: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent], styles: ["\n\n.category-add-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.category-add-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.category-add-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.category-add-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.category-add-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.category-add-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.category-add-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #495057;\n  margin: 0 0 20px 0;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #e9ecef;\n}\n.category-add-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n@media (max-width: 768px) {\n  .category-add-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: var(--spacing-md);\n  }\n}\n.category-add-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.category-add-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.category-add-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #495057;\n}\n.category-add-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.category-add-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.category-add-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.category-add-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.category-add-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.category-add-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.category-add-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #e9ecef;\n}\n.category-add-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n}\n/*# sourceMappingURL=category-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoriesListComponent, { className: "CategoriesListComponent", filePath: "src\\app\\modules\\complaints\\category-list\\category-list.component.ts", lineNumber: 18 });
})();
export {
  CategoriesListComponent
};
//# sourceMappingURL=chunk-E62KBCBY.js.map
