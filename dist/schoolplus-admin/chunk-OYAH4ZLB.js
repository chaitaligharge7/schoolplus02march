import {
  DigitalNotesService
} from "./chunk-A2HYTRBD.js";
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

// src/app/modules/digital-notes/notes-list/notes-list.component.ts
var NotesListComponent = class _NotesListComponent {
  notesService;
  toast;
  dialogService;
  toastService;
  router;
  resources = [];
  loading = false;
  showFilters = false;
  pagination = { page: 1, limit: 20, total: 0, pages: 0 };
  columns = [
    { key: "title", label: "Title", sortable: true, format: (v) => v || "-" },
    { key: "class_name", label: "Class", sortable: true, format: (v) => v || "-" },
    { key: "subject_name", label: "Subject", sortable: true, format: (v) => v || "-" },
    { key: "resource_type", label: "Type", sortable: true, format: (v) => v || "-" },
    { key: "status", label: "Status", sortable: true, format: (v) => `<span class="badge ${v === "active" ? "badge-success" : "badge-secondary"}">${v || "-"}</span>` }
  ];
  searchTerm = "";
  constructor(notesService, toast, dialogService, toastService, router) {
    this.notesService = notesService;
    this.toast = toast;
    this.dialogService = dialogService;
    this.toastService = toastService;
    this.router = router;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.notesService.getResources({ page: this.pagination.page, limit: this.pagination.limit, search: this.searchTerm }).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === "success" && res.data) {
          this.resources = res.data.resources || [];
          this.pagination = res.data.pagination || this.pagination;
        }
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error loading resources", "error");
      }
    });
  }
  onEdit(row) {
    this.router.navigate(["/app/digital-notes/edit", row.resource_id]);
  }
  onDelete(row) {
    this.dialogService.confirm({
      title: "Delete Resource",
      message: `Are you sure you want to delete "${row.title}"?`,
      confirmText: "Delete",
      cancelText: "Cancel",
      type: "danger"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.notesService.deleteResource(row.resource_id).subscribe({
          next: (response) => {
            if (response.status === "success") {
              this.toast.show("Resource deleted successfully", "success");
              this.load();
            }
          },
          error: () => {
            this.toast.show("Error deleting resource", "error");
          }
        });
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
  onExportClick(_) {
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function NotesListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotesListComponent)(\u0275\u0275directiveInject(DigitalNotesService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotesListComponent, selectors: [["app-notes-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 7, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "rowSelect", "refresh", "addClick", "editClick", "deleteClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "addRoute", "addLabel", "searchPlaceholder"]], template: function NotesListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Digital Notes & Resources");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Manage notes and learning resources");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "app-enhanced-table", 4);
      \u0275\u0275listener("pageChange", function NotesListComponent_Template_app_enhanced_table_pageChange_6_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function NotesListComponent_Template_app_enhanced_table_pageSizeChange_6_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function NotesListComponent_Template_app_enhanced_table_searchChange_6_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function NotesListComponent_Template_app_enhanced_table_sortChange_6_listener($event) {
        return ctx.onSortChange($event);
      })("rowSelect", function NotesListComponent_Template_app_enhanced_table_rowSelect_6_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function NotesListComponent_Template_app_enhanced_table_refresh_6_listener() {
        return ctx.onRefresh();
      })("addClick", function NotesListComponent_Template_app_enhanced_table_addClick_6_listener() {
        return ctx.onAdd();
      })("editClick", function NotesListComponent_Template_app_enhanced_table_editClick_6_listener($event) {
        return ctx.onEdit($event);
      })("deleteClick", function NotesListComponent_Template_app_enhanced_table_deleteClick_6_listener($event) {
        return ctx.onDelete($event);
      })("exportClick", function NotesListComponent_Template_app_enhanced_table_exportClick_6_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function NotesListComponent_Template_app_enhanced_table_filterToggle_6_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("data", ctx.resources)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("addRoute", "/app/digital-notes/create")("addLabel", "Add Resource")("searchPlaceholder", "Search...");
    }
  }, dependencies: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  max-width: 1600px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=notes-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotesListComponent, { className: "NotesListComponent", filePath: "src\\app\\modules\\digital-notes\\notes-list\\notes-list.component.ts", lineNumber: 17 });
})();
export {
  NotesListComponent
};
//# sourceMappingURL=chunk-OYAH4ZLB.js.map
