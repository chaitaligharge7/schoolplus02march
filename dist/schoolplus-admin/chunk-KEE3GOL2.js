import {
  SportsService
} from "./chunk-O3CSXDAD.js";
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

// src/app/modules/sports/event-list/event-list.component.ts
var EventListComponent = class _EventListComponent {
  sportsService;
  toast;
  dialogService;
  exportService;
  events = [];
  loading = false;
  showFilters = false;
  pagination = { page: 1, limit: 20, total: 0, pages: 0 };
  columns = [
    { key: "event_name", label: "Event", sortable: true, format: (v) => v || "-" },
    { key: "event_type", label: "Type", sortable: true, format: (v) => v || "-" },
    { key: "event_date", label: "Date", sortable: true, type: "date", format: (v) => v || "-" },
    { key: "venue", label: "Venue", sortable: true, format: (v) => v || "-" },
    { key: "status", label: "Status", sortable: true, format: (v) => `<span class="badge badge-info">${v || "-"}</span>` }
  ];
  searchTerm = "";
  constructor(sportsService, toast, dialogService, exportService) {
    this.sportsService = sportsService;
    this.toast = toast;
    this.dialogService = dialogService;
    this.exportService = exportService;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.sportsService.getEvents({ page: this.pagination.page, limit: this.pagination.limit, search: this.searchTerm }).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === "success" && res.data) {
          this.events = res.data.events || [];
          this.pagination = res.data.pagination || this.pagination;
        }
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error loading events", "error");
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
  onDelete(row) {
    this.dialogService.confirm({
      title: "Delete Section",
      message: `Are you sure you want to delete "${row.event_name}"?`,
      confirmText: "Delete",
      cancelText: "Cancel",
      type: "danger"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.sportsService.deleteEvent(row.event_id).subscribe({
          next: (response) => {
            if (response.status === "success") {
              this.toast.show("Section deleted successfully", "success");
              this.load();
            }
          },
          error: () => {
            this.toast.show("Error deleting section", "error");
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
  static \u0275fac = function EventListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventListComponent)(\u0275\u0275directiveInject(SportsService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(ExportService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventListComponent, selectors: [["app-event-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 7, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "rowSelect", "refresh", "addClick", "deleteClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "addRoute", "addLabel", "searchPlaceholder"]], template: function EventListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Sports & Events");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Manage sports events and tournaments");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "app-enhanced-table", 4);
      \u0275\u0275listener("pageChange", function EventListComponent_Template_app_enhanced_table_pageChange_6_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function EventListComponent_Template_app_enhanced_table_pageSizeChange_6_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function EventListComponent_Template_app_enhanced_table_searchChange_6_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function EventListComponent_Template_app_enhanced_table_sortChange_6_listener($event) {
        return ctx.onSortChange($event);
      })("rowSelect", function EventListComponent_Template_app_enhanced_table_rowSelect_6_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function EventListComponent_Template_app_enhanced_table_refresh_6_listener() {
        return ctx.onRefresh();
      })("addClick", function EventListComponent_Template_app_enhanced_table_addClick_6_listener() {
        return ctx.onAdd();
      })("deleteClick", function EventListComponent_Template_app_enhanced_table_deleteClick_6_listener($event) {
        return ctx.onDelete($event);
      })("exportClick", function EventListComponent_Template_app_enhanced_table_exportClick_6_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function EventListComponent_Template_app_enhanced_table_filterToggle_6_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("data", ctx.events)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("addRoute", "/app/sports/create")("addLabel", "Add Event")("searchPlaceholder", "Search events...");
    }
  }, dependencies: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=event-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventListComponent, { className: "EventListComponent", filePath: "src\\app\\modules\\sports\\event-list\\event-list.component.ts", lineNumber: 18 });
})();
export {
  EventListComponent
};
//# sourceMappingURL=chunk-KEE3GOL2.js.map
