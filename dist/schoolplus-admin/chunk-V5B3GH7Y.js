import {
  CmsService
} from "./chunk-RL6ZGE2L.js";
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/cms/page-list/page-list.component.ts
var PageListComponent = class _PageListComponent {
  cmsService;
  router;
  dialogService;
  toast;
  pages = [];
  loading = false;
  showFilters = false;
  pagination = { page: 1, limit: 20, total: 0, pages: 0 };
  columns = [
    { key: "title", label: "Title", sortable: true, format: (v) => v || "-" },
    { key: "slug", label: "Slug", sortable: true, format: (v) => v || "-" },
    { key: "is_published", label: "Published", sortable: true, format: (v) => `<span class="badge ${v == 1 ? "badge-success" : "badge-secondary"}">${v == 1 ? "Yes" : "No"}</span>` }
  ];
  searchTerm = "";
  constructor(cmsService, router, dialogService, toast) {
    this.cmsService = cmsService;
    this.router = router;
    this.dialogService = dialogService;
    this.toast = toast;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.cmsService.getPages({ page: this.pagination.page, limit: this.pagination.limit, search: this.searchTerm }).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === "success" && res.data) {
          this.pages = res.data.pages || [];
          this.pagination = res.data.pagination || this.pagination;
        }
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error loading pages", "error");
      }
    });
  }
  onPageChange(p) {
    this.pagination.page = p;
    this.load();
  }
  onPageSizeChange(s) {
    this.pagination.limit = s;
    this.pagination.page = 1;
    this.load();
  }
  onSearchChange(s) {
    this.searchTerm = s;
    this.pagination.page = 1;
    this.load();
  }
  onSortChange(_) {
    this.load();
  }
  onRowSelect(_) {
  }
  onRefresh() {
    this.load();
  }
  onAdd() {
  }
  onEdit(page) {
    console.log("Edit clicked for CMS page:", page);
    this.router.navigate(["/app/cms/edit", page.page_id]);
  }
  onDelete(page) {
    this.dialogService.confirm({
      title: "Delete Page",
      message: `Are you sure you want to delete "${page.title}"?`,
      confirmText: "Delete",
      cancelText: "Cancel",
      type: "danger"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.cmsService.deletePage(page.page_id).subscribe({
          next: (res) => {
            if (res.status === "success") {
              this.toast.show("Page deleted successfully", "success");
              this.load();
            } else {
              this.toast.show(res.message || "Failed to delete page", "error");
            }
          },
          error: (err) => {
            console.error("Delete page error:", err);
            this.toast.show("An error occurred while deleting the page", "error");
          }
        });
      }
    });
  }
  onExportClick(_) {
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function PageListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PageListComponent)(\u0275\u0275directiveInject(CmsService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PageListComponent, selectors: [["app-page-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 7, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "rowSelect", "refresh", "addClick", "editClick", "deleteClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "addRoute", "addLabel", "searchPlaceholder"]], template: function PageListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Content Management (CMS)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Manage website pages and content");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "app-enhanced-table", 4);
      \u0275\u0275listener("pageChange", function PageListComponent_Template_app_enhanced_table_pageChange_6_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function PageListComponent_Template_app_enhanced_table_pageSizeChange_6_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function PageListComponent_Template_app_enhanced_table_searchChange_6_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function PageListComponent_Template_app_enhanced_table_sortChange_6_listener($event) {
        return ctx.onSortChange($event);
      })("rowSelect", function PageListComponent_Template_app_enhanced_table_rowSelect_6_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function PageListComponent_Template_app_enhanced_table_refresh_6_listener() {
        return ctx.onRefresh();
      })("addClick", function PageListComponent_Template_app_enhanced_table_addClick_6_listener() {
        return ctx.onAdd();
      })("editClick", function PageListComponent_Template_app_enhanced_table_editClick_6_listener($event) {
        return ctx.onEdit($event);
      })("deleteClick", function PageListComponent_Template_app_enhanced_table_deleteClick_6_listener($event) {
        return ctx.onDelete($event);
      })("exportClick", function PageListComponent_Template_app_enhanced_table_exportClick_6_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function PageListComponent_Template_app_enhanced_table_filterToggle_6_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("data", ctx.pages)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("addRoute", "/app/cms/create")("addLabel", "Add Page")("searchPlaceholder", "Search pages...");
    }
  }, dependencies: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  max-width: 1600px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=page-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PageListComponent, { className: "PageListComponent", filePath: "src\\app\\modules\\cms\\page-list\\page-list.component.ts", lineNumber: 17 });
})();
export {
  PageListComponent
};
//# sourceMappingURL=chunk-V5B3GH7Y.js.map
