import {
  VisitorService
} from "./chunk-FOWRUAYD.js";
import {
  DialogService
} from "./chunk-UPFK65KQ.js";
import {
  EnhancedTableComponent,
  ExportService
} from "./chunk-LT2VDVRY.js";
import "./chunk-6W4TS6AE.js";
import {
  FormsModule
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

// src/app/modules/visitors/visitor-category-list/visitor-catrgory-list.component.ts
var VisitorCategoriesListComponent = class _VisitorCategoriesListComponent {
  visitorService;
  toastService;
  exportService;
  dialogService;
  router;
  // Table data
  categories = [];
  // Table column configuration
  columns = [
    {
      key: "category_name",
      label: "Category Name",
      sortable: true
    },
    {
      key: "description",
      label: "Description",
      sortable: false
    },
    {
      key: "category_status",
      label: "Status",
      sortable: true
    }
  ];
  // Pagination config
  pagination = {
    page: 1,
    pageSize: 10,
    total: 0
  };
  loading = false;
  showFilters = false;
  selectedRowId = null;
  // Filters & sorting
  searchTerm = "";
  sortKey = "";
  sortDirection = "";
  constructor(visitorService, toastService, exportService, dialogService, router) {
    this.visitorService = visitorService;
    this.toastService = toastService;
    this.exportService = exportService;
    this.dialogService = dialogService;
    this.router = router;
  }
  ngOnInit() {
    this.loadCategories();
  }
  // ========================
  // Data loading
  // ========================
  loadCategories() {
    this.visitorService.getVisitorCategories().subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.categories = response.data?.categories || [];
        }
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
    this.pagination.pageSize = size;
    this.pagination.page = 1;
    this.loadCategories();
  }
  onSearchChange(search) {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadCategories();
  }
  onSortChange(event) {
    this.sortKey = event.key;
    this.sortDirection = event.direction;
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
    console.log("Add category clicked");
    this.router.navigate(["app/visitors/add"]);
  }
  onEdit(row) {
    console.log("Edit category", row);
    this.router.navigate(["/app/visitors/category/edit", row.category_id]);
  }
  onDelete(category) {
    if (!category || !category.category_id) {
      return;
    }
    this.dialogService.confirm({
      title: "Delete Category",
      message: `Are you sure you want to delete category "${category.category_name}"?`,
      confirmText: "Delete",
      cancelText: "Cancel",
      type: "danger"
    }).subscribe((confirmed) => {
      if (!confirmed)
        return;
      this.visitorService.deleteCategory(category.category_id).subscribe({
        next: (res) => {
          if (res.status === "success") {
            this.toastService.show("Category deleted successfully", "success");
            this.loadCategories();
          } else {
            this.toastService.show(res.message || "Error deleting category", "error");
          }
        },
        error: (err) => {
          this.toastService.show(err?.error?.message || "Error deleting category", "error");
        }
      });
    });
  }
  goBack() {
    this.router.navigate(["app/visitors/list"]);
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function VisitorCategoriesListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VisitorCategoriesListComponent)(\u0275\u0275directiveInject(VisitorService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorCategoriesListComponent, selectors: [["app-visitor-category-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 5, consts: [[1, "visitor-list-container"], [1, "page-header", 2, "display", "flex", "justify-content", "space-between", "align-items", "center"], [1, "page-title"], [1, "page-subtitle"], [1, "btn", "btn-secondary", 3, "click"], [1, "fa", "fa-arrow-left"], [3, "pageChange", "pageSizeChange", "searchChange", "rowSelect", "refresh", "addClick", "deleteClick", "editClick", "data", "columns", "loading", "rowIdKey", "searchPlaceholder"]], template: function VisitorCategoriesListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Visitor Categories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Manage visitor categories");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div")(8, "button", 4);
      \u0275\u0275listener("click", function VisitorCategoriesListComponent_Template_button_click_8_listener() {
        return ctx.goBack();
      });
      \u0275\u0275element(9, "i", 5);
      \u0275\u0275text(10, " Back ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "app-enhanced-table", 6);
      \u0275\u0275listener("pageChange", function VisitorCategoriesListComponent_Template_app_enhanced_table_pageChange_11_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function VisitorCategoriesListComponent_Template_app_enhanced_table_pageSizeChange_11_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function VisitorCategoriesListComponent_Template_app_enhanced_table_searchChange_11_listener($event) {
        return ctx.onSearchChange($event);
      })("rowSelect", function VisitorCategoriesListComponent_Template_app_enhanced_table_rowSelect_11_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function VisitorCategoriesListComponent_Template_app_enhanced_table_refresh_11_listener() {
        return ctx.onRefresh();
      })("addClick", function VisitorCategoriesListComponent_Template_app_enhanced_table_addClick_11_listener() {
        return ctx.onAdd();
      })("deleteClick", function VisitorCategoriesListComponent_Template_app_enhanced_table_deleteClick_11_listener($event) {
        return ctx.onDelete($event);
      })("editClick", function VisitorCategoriesListComponent_Template_app_enhanced_table_editClick_11_listener($event) {
        return ctx.onEdit($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("data", ctx.categories)("columns", ctx.columns)("loading", ctx.loading)("rowIdKey", "category_id")("searchPlaceholder", "Search category...");
    }
  }, dependencies: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorCategoriesListComponent, { className: "VisitorCategoriesListComponent", filePath: "src\\app\\modules\\visitors\\visitor-category-list\\visitor-catrgory-list.component.ts", lineNumber: 23 });
})();
export {
  VisitorCategoriesListComponent
};
//# sourceMappingURL=chunk-MOCPUKHC.js.map
