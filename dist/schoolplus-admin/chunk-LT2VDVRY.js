import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-DC2DSRDW.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-GXY6YLNG.js";
import {
  CommonModule,
  EventEmitter,
  NgClass,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-VTJ43J7W.js";
import {
  __async
} from "./chunk-TXDUYLVM.js";

// src/app/shared/services/export.service.ts
var ExportService = class _ExportService {
  /**
   * Export data to CSV
   */
  exportToCSV(data, filename = "export.csv", columns) {
    if (!data || data.length === 0) {
      alert("No data to export");
      return;
    }
    const allColumns = columns || Object.keys(data[0]);
    const headers = allColumns.map((col) => this.escapeCSV(col));
    const csvContent = [headers.join(",")];
    data.forEach((row) => {
      const values = allColumns.map((col) => {
        const value = this.getNestedValue(row, col);
        return this.escapeCSV(value);
      });
      csvContent.push(values.join(","));
    });
    const blob = new Blob([csvContent.join("\n")], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  /**
   * Export data to PDF (using window.print for now, can be enhanced with jsPDF)
   */
  exportToPDF(data, filename = "export.pdf", columns) {
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      alert("Please allow popups to export PDF");
      return;
    }
    const allColumns = columns || Object.keys(data[0]);
    const headers = allColumns.map((col) => `<th>${this.escapeHtml(col)}</th>`).join("");
    const rows = data.map((row) => {
      const cells = allColumns.map((col) => {
        const value = this.getNestedValue(row, col);
        return `<td>${this.escapeHtml(value)}</td>`;
      }).join("");
      return `<tr>${cells}</tr>`;
    }).join("");
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${filename}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #2563eb; color: white; font-weight: bold; }
            tr:nth-child(even) { background-color: #f9fafb; }
            @media print {
              body { margin: 0; }
              @page { margin: 1cm; }
            }
          </style>
        </head>
        <body>
          <h2>${filename.replace(".pdf", "")}</h2>
          <p>Generated on: ${(/* @__PURE__ */ new Date()).toLocaleString()}</p>
          <table>
            <thead><tr>${headers}</tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 250);
  }
  /**
   * Print data table
   */
  printTable(data, columns) {
    this.exportToPDF(data, "print.pdf", columns);
  }
  /**
   * Copy data to clipboard
   */
  copyToClipboard(data, columns) {
    return __async(this, null, function* () {
      if (!data || data.length === 0) {
        alert("No data to copy");
        return;
      }
      const allColumns = columns || Object.keys(data[0]);
      const headers = allColumns.map((col) => this.escapeCSV(col));
      const csvContent = [headers.join("	")];
      data.forEach((row) => {
        const values = allColumns.map((col) => {
          const value = this.getNestedValue(row, col);
          return String(value || "").replace(/\t/g, " ");
        });
        csvContent.push(values.join("	"));
      });
      try {
        yield navigator.clipboard.writeText(csvContent.join("\n"));
        console.log("Data copied to clipboard");
      } catch (err) {
        console.error("Failed to copy:", err);
        alert("Failed to copy to clipboard");
      }
    });
  }
  escapeCSV(value) {
    if (value === null || value === void 0)
      return "";
    const stringValue = String(value);
    if (stringValue.includes(",") || stringValue.includes('"') || stringValue.includes("\n")) {
      return `"${stringValue.replace(/"/g, '""')}"`;
    }
    return stringValue;
  }
  escapeHtml(value) {
    if (value === null || value === void 0)
      return "";
    const div = document.createElement("div");
    div.textContent = String(value);
    return div.innerHTML;
  }
  getNestedValue(obj, path) {
    return path.split(".").reduce((current, prop) => current?.[prop], obj) ?? "";
  }
  static \u0275fac = function ExportService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExportService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExportService, factory: _ExportService.\u0275fac, providedIn: "root" });
};

// src/app/shared/directives/keyboard-shortcuts.directive.ts
var KeyboardShortcutsDirective = class _KeyboardShortcutsDirective {
  enableShortcuts = true;
  f2Pressed = new EventEmitter();
  f3Pressed = new EventEmitter();
  f5Pressed = new EventEmitter();
  ctrlFPressed = new EventEmitter();
  escPressed = new EventEmitter();
  ctrlSPressed = new EventEmitter();
  deletePressed = new EventEmitter();
  handleKeyboardEvent(event) {
    if (!this.enableShortcuts)
      return;
    if (event.key === "F2" || event.key === "F3" || event.key === "F5") {
      event.preventDefault();
    }
    if (event.key === "F2") {
      this.f2Pressed.emit();
    }
    if (event.key === "F3") {
      this.f3Pressed.emit();
    }
    if (event.key === "F5") {
      event.preventDefault();
      this.f5Pressed.emit();
    }
    if (event.ctrlKey && event.key === "f") {
      event.preventDefault();
      this.ctrlFPressed.emit();
    }
    if (event.key === "Escape") {
      this.escPressed.emit();
    }
    if (event.ctrlKey && event.key === "s") {
      event.preventDefault();
      this.ctrlSPressed.emit();
    }
    if (event.key === "Delete" && !event.ctrlKey && !event.altKey) {
      this.deletePressed.emit();
    }
  }
  static \u0275fac = function KeyboardShortcutsDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KeyboardShortcutsDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _KeyboardShortcutsDirective, selectors: [["", "appKeyboardShortcuts", ""]], hostBindings: function KeyboardShortcutsDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown", function KeyboardShortcutsDirective_keydown_HostBindingHandler($event) {
        return ctx.handleKeyboardEvent($event);
      }, false, \u0275\u0275resolveDocument);
    }
  }, inputs: { enableShortcuts: "enableShortcuts" }, outputs: { f2Pressed: "f2Pressed", f3Pressed: "f3Pressed", f5Pressed: "f5Pressed", ctrlFPressed: "ctrlFPressed", escPressed: "escPressed", ctrlSPressed: "ctrlSPressed", deletePressed: "deletePressed" }, standalone: true });
};

// src/app/shared/components/enhanced-table/enhanced-table.component.ts
var _c0 = ["searchInput"];
var _c1 = (a0, a1) => ({ $implicit: a0, column: a1 });
function EnhancedTableComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function EnhancedTableComponent_div_9_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.startDate, $event) || (ctx_r2.startDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function EnhancedTableComponent_div_9_Template_input_change_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDateFilterChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 32);
    \u0275\u0275text(3, "to");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function EnhancedTableComponent_div_9_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.endDate, $event) || (ctx_r2.endDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function EnhancedTableComponent_div_9_Template_input_change_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDateFilterChange());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.startDate);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.endDate);
  }
}
function EnhancedTableComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function EnhancedTableComponent_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFilterToggle());
    });
    \u0275\u0275element(1, "i", 35);
    \u0275\u0275elementStart(2, "span", 17);
    \u0275\u0275text(3, "Filters");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.filterVisible);
  }
}
function EnhancedTableComponent_div_13_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "a", 42);
    \u0275\u0275listener("click", function EnhancedTableComponent_div_13_div_5_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onExport("csv"));
    });
    \u0275\u0275element(2, "i", 43);
    \u0275\u0275text(3, " Export CSV ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 42);
    \u0275\u0275listener("click", function EnhancedTableComponent_div_13_div_5_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onExport("pdf"));
    });
    \u0275\u0275element(5, "i", 44);
    \u0275\u0275text(6, " Export PDF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 42);
    \u0275\u0275listener("click", function EnhancedTableComponent_div_13_div_5_Template_a_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onExport("print"));
    });
    \u0275\u0275element(8, "i", 45);
    \u0275\u0275text(9, " Print ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 42);
    \u0275\u0275listener("click", function EnhancedTableComponent_div_13_div_5_Template_a_click_10_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onExport("copy"));
    });
    \u0275\u0275element(11, "i", 46);
    \u0275\u0275text(12, " Copy to Clipboard ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "div", 47);
    \u0275\u0275elementStart(14, "a", 42);
    \u0275\u0275listener("click", function EnhancedTableComponent_div_13_div_5_Template_a_click_14_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.showColumnVisibility = !ctx_r2.showColumnVisibility);
    });
    \u0275\u0275element(15, "i", 48);
    \u0275\u0275text(16, " Column Visibility ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("show", ctx_r2.exportDropdownOpen);
  }
}
function EnhancedTableComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "button", 37);
    \u0275\u0275listener("click", function EnhancedTableComponent_div_13_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.exportDropdownOpen = !ctx_r2.exportDropdownOpen);
    });
    \u0275\u0275element(2, "i", 38);
    \u0275\u0275text(3, " Export ");
    \u0275\u0275element(4, "i", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, EnhancedTableComponent_div_13_div_5_Template, 17, 2, "div", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.exportDropdownOpen);
  }
}
function EnhancedTableComponent_a_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 49);
    \u0275\u0275element(1, "i", 50);
    \u0275\u0275elementStart(2, "span", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 18);
    \u0275\u0275text(5, "F2");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", ctx_r2.addRoute);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.addLabel);
  }
}
function EnhancedTableComponent_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function EnhancedTableComponent_button_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onAdd());
    });
    \u0275\u0275element(1, "i", 50);
    \u0275\u0275elementStart(2, "span", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 18);
    \u0275\u0275text(5, "F2");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.addLabel);
  }
}
function EnhancedTableComponent_div_22_label_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 58)(1, "input", 59);
    \u0275\u0275listener("change", function EnhancedTableComponent_div_22_label_7_Template_input_change_1_listener() {
      const col_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleColumnVisibility(col_r10.key));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const col_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.visibleColumns.has(col_r10.key));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(col_r10.label);
  }
}
function EnhancedTableComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53)(2, "h4");
    \u0275\u0275text(3, "Column Visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 54);
    \u0275\u0275listener("click", function EnhancedTableComponent_div_22_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showColumnVisibility = false);
    });
    \u0275\u0275element(5, "i", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 56);
    \u0275\u0275template(7, EnhancedTableComponent_div_22_label_7_Template, 4, 2, "label", 57);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.columns);
  }
}
function EnhancedTableComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275element(1, "div", 61);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()();
  }
}
function EnhancedTableComponent_th_28_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 65);
  }
  if (rf & 2) {
    const col_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r2.getSortIcon(col_r12));
  }
}
function EnhancedTableComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 62);
    \u0275\u0275listener("click", function EnhancedTableComponent_th_28_Template_th_click_0_listener() {
      const col_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSort(col_r12));
    });
    \u0275\u0275elementStart(1, "div", 63)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, EnhancedTableComponent_th_28_i_4_Template, 1, 1, "i", 64);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const col_r12 = ctx.$implicit;
    \u0275\u0275styleProp("width", col_r12.width);
    \u0275\u0275classProp("sortable", col_r12.sortable);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(col_r12.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r12.sortable);
  }
}
function EnhancedTableComponent_tr_32_td_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function EnhancedTableComponent_tr_32_td_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, EnhancedTableComponent_tr_32_td_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 77);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r15 = \u0275\u0275nextContext().$implicit;
    const row_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", col_r15.template)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c1, row_r14, col_r15));
  }
}
function EnhancedTableComponent_tr_32_td_1_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 78);
    \u0275\u0275listener("click", function EnhancedTableComponent_tr_32_td_1_ng_template_2_ng_container_0_Template_a_click_1_listener($event) {
      \u0275\u0275restoreView(_r16);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r15 = \u0275\u0275nextContext(2).$implicit;
    const row_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", col_r15.link.route)("queryParams", ctx_r2.getLinkQueryParams(row_r14, col_r15))("innerHTML", ctx_r2.getCellValue(row_r14, col_r15), \u0275\u0275sanitizeHtml);
  }
}
function EnhancedTableComponent_tr_32_td_1_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 79);
  }
  if (rf & 2) {
    const col_r15 = \u0275\u0275nextContext(2).$implicit;
    const row_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHTML", ctx_r2.getCellValue(row_r14, col_r15), \u0275\u0275sanitizeHtml);
  }
}
function EnhancedTableComponent_tr_32_td_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, EnhancedTableComponent_tr_32_td_1_ng_template_2_ng_container_0_Template, 2, 3, "ng-container", 76)(1, EnhancedTableComponent_tr_32_td_1_ng_template_2_ng_template_1_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const plainCell_r17 = \u0275\u0275reference(2);
    const col_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngIf", col_r15.link)("ngIfElse", plainCell_r17);
  }
}
function EnhancedTableComponent_tr_32_td_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, EnhancedTableComponent_tr_32_td_1_ng_container_1_Template, 2, 5, "ng-container", 76)(2, EnhancedTableComponent_tr_32_td_1_ng_template_2_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r15 = ctx.$implicit;
    const defaultCell_r18 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", col_r15.template)("ngIfElse", defaultCell_r18);
  }
}
function EnhancedTableComponent_tr_32_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 80);
    \u0275\u0275listener("click", function EnhancedTableComponent_tr_32_button_4_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r19);
      const row_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.onPay(row_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(1, "i", 81);
    \u0275\u0275elementEnd();
  }
}
function EnhancedTableComponent_tr_32_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 82);
    \u0275\u0275listener("click", function EnhancedTableComponent_tr_32_button_5_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r20);
      const row_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.onPrint(row_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(1, "i", 45);
    \u0275\u0275elementEnd();
  }
}
function EnhancedTableComponent_tr_32_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 83);
    \u0275\u0275listener("click", function EnhancedTableComponent_tr_32_button_6_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r21);
      const row_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.onView(row_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(1, "i", 48);
    \u0275\u0275elementEnd();
  }
}
function EnhancedTableComponent_tr_32_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 84);
    \u0275\u0275listener("click", function EnhancedTableComponent_tr_32_button_7_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r22);
      const row_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.onConvert(row_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(1, "i", 85);
    \u0275\u0275elementEnd();
  }
}
function EnhancedTableComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 62);
    \u0275\u0275listener("click", function EnhancedTableComponent_tr_32_Template_tr_click_0_listener() {
      const row_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onRowClick(row_r14));
    });
    \u0275\u0275template(1, EnhancedTableComponent_tr_32_td_1_Template, 4, 2, "td", 66);
    \u0275\u0275elementStart(2, "td", 26)(3, "div", 67);
    \u0275\u0275template(4, EnhancedTableComponent_tr_32_button_4_Template, 2, 0, "button", 68)(5, EnhancedTableComponent_tr_32_button_5_Template, 2, 0, "button", 69)(6, EnhancedTableComponent_tr_32_button_6_Template, 2, 0, "button", 70)(7, EnhancedTableComponent_tr_32_button_7_Template, 2, 0, "button", 71);
    \u0275\u0275elementStart(8, "button", 72);
    \u0275\u0275listener("click", function EnhancedTableComponent_tr_32_Template_button_click_8_listener($event) {
      const row_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.onEdit(row_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(9, "i", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 74);
    \u0275\u0275listener("click", function EnhancedTableComponent_tr_32_Template_button_click_10_listener($event) {
      const row_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.onDelete(row_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(11, "i", 75);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r14 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r2.isRowSelected(row_r14));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.visibleColumnsList);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.showPayButton);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showPrintButton);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showViewButton);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showConvertButton);
  }
}
function EnhancedTableComponent_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 86)(2, "div", 87);
    \u0275\u0275element(3, "i", 88);
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "No data available");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r2.visibleColumnsList.length + 1);
  }
}
function EnhancedTableComponent_div_34_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 105);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r24 = ctx.$implicit;
    \u0275\u0275property("value", size_r24);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", size_r24, " per page ");
  }
}
function EnhancedTableComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 89)(1, "div", 90)(2, "span", 91);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 92);
    \u0275\u0275listener("ngModelChange", function EnhancedTableComponent_div_34_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageSizeChange($event));
    });
    \u0275\u0275template(5, EnhancedTableComponent_div_34_option_5_Template, 2, 2, "option", 93);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 94)(7, "div", 95)(8, "button", 96);
    \u0275\u0275listener("click", function EnhancedTableComponent_div_34_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageChange(1));
    });
    \u0275\u0275element(9, "i", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 98);
    \u0275\u0275listener("click", function EnhancedTableComponent_div_34_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageChange(ctx_r2.pagination.page - 1));
    });
    \u0275\u0275element(11, "i", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 100);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 101);
    \u0275\u0275listener("click", function EnhancedTableComponent_div_34_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageChange(ctx_r2.pagination.page + 1));
    });
    \u0275\u0275element(15, "i", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 103);
    \u0275\u0275listener("click", function EnhancedTableComponent_div_34_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageChange(ctx_r2.pagination.pages));
    });
    \u0275\u0275element(17, "i", 104);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" Showing ", (ctx_r2.pagination.page - 1) * ctx_r2.pagination.limit + 1, " to ", ctx_r2.Math.min(ctx_r2.pagination.page * ctx_r2.pagination.limit, ctx_r2.pagination.total), " of ", ctx_r2.pagination.total, " entries ");
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r2.pagination.limit);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.pageSizeOptions);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.pagination.page === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.pagination.page === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" Page ", ctx_r2.pagination.page, " of ", ctx_r2.pagination.pages, " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.pagination.page === ctx_r2.pagination.pages);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.pagination.page === ctx_r2.pagination.pages);
  }
}
var EnhancedTableComponent = class _EnhancedTableComponent {
  exportService;
  router;
  data = [];
  columns = [];
  pagination = { page: 1, limit: 20, total: 0, pages: 0 };
  loading = false;
  searchPlaceholder = "Search...";
  addRoute;
  addLabel = "Add New";
  enableExport = true;
  enableDateFilter = true;
  selectedRowId;
  rowIdKey = "id";
  showViewButton = false;
  showPrintButton = false;
  showConvertButton = false;
  showFilterButton = true;
  pageChange = new EventEmitter();
  filterToggle = new EventEmitter();
  pageSizeChange = new EventEmitter();
  searchChange = new EventEmitter();
  sortChange = new EventEmitter();
  dateFilterChange = new EventEmitter();
  rowSelect = new EventEmitter();
  refresh = new EventEmitter();
  addClick = new EventEmitter();
  editClick = new EventEmitter();
  deleteClick = new EventEmitter();
  viewClick = new EventEmitter();
  payClick = new EventEmitter();
  printClick = new EventEmitter();
  convertClick = new EventEmitter();
  exportClick = new EventEmitter();
  searchInput;
  searchTerm = "";
  sortColumn = "";
  sortDirection = "asc";
  startDate;
  endDate;
  showPayButton = false;
  showColumnVisibility = false;
  visibleColumns = /* @__PURE__ */ new Set();
  exportDropdownOpen = false;
  pageSizeOptions = [10, 20, 50, 100, 200];
  filterVisible = false;
  constructor(exportService, router) {
    this.exportService = exportService;
    this.router = router;
  }
  ngOnInit() {
    this.columns.forEach((col) => {
      if (col.visible !== false) {
        this.visibleColumns.add(col.key);
      }
    });
    if (this.pagination.pageSizeOptions) {
      this.pageSizeOptions = this.pagination.pageSizeOptions;
    }
  }
  get visibleColumnsList() {
    return this.columns.filter((col) => this.visibleColumns.has(col.key));
  }
  onSearch() {
    this.searchChange.emit(this.searchTerm);
  }
  onPay(row) {
    this.payClick.emit(row);
  }
  onPrint(row) {
    this.printClick.emit(row);
  }
  onSort(column) {
    if (!column.sortable)
      return;
    if (this.sortColumn === column.key) {
      this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
    } else {
      this.sortColumn = column.key;
      this.sortDirection = "asc";
    }
    this.sortChange.emit({ column: this.sortColumn, direction: this.sortDirection });
  }
  onDateFilterChange() {
    this.dateFilterChange.emit({
      startDate: this.startDate,
      endDate: this.endDate
    });
  }
  onPageChange(page) {
    this.pageChange.emit(page);
  }
  onPageSizeChange(size) {
    this.pageSizeChange.emit(size);
  }
  onRowClick(row) {
    this.selectedRowId = row[this.rowIdKey];
    this.rowSelect.emit(row);
  }
  isRowSelected(row) {
    return this.selectedRowId === row[this.rowIdKey];
  }
  toggleColumnVisibility(key) {
    if (this.visibleColumns.has(key)) {
      this.visibleColumns.delete(key);
    } else {
      this.visibleColumns.add(key);
    }
  }
  onExport(type) {
    const visibleCols = this.visibleColumnsList.map((col) => col.key);
    const exportData = this.data.map((row) => {
      const exportRow = {};
      visibleCols.forEach((key) => {
        exportRow[key] = this.getNestedValue(row, key);
      });
      return exportRow;
    });
    const columnLabels = this.visibleColumnsList.map((col) => col.label);
    switch (type) {
      case "csv":
        this.exportService.exportToCSV(exportData, `export-${Date.now()}.csv`, visibleCols);
        break;
      case "pdf":
        this.exportService.exportToPDF(exportData, `export-${Date.now()}.pdf`, visibleCols);
        break;
      case "print":
        this.exportService.printTable(exportData, visibleCols);
        break;
      case "copy":
        this.exportService.copyToClipboard(exportData, visibleCols);
        break;
    }
    this.exportDropdownOpen = false;
    this.exportClick.emit({ type, columns: visibleCols });
  }
  onRefresh() {
    this.refresh.emit();
  }
  onAdd() {
    if (this.addRoute) {
      this.router.navigate([this.addRoute]);
    } else {
      this.addClick.emit();
    }
  }
  onFilterToggle() {
    this.filterVisible = !this.filterVisible;
    this.filterToggle.emit(this.filterVisible);
  }
  onEdit(row) {
    this.editClick.emit(row);
  }
  onView(row) {
    this.viewClick.emit(row);
  }
  onConvert(row) {
    this.convertClick.emit(row);
  }
  onDelete(row) {
    if (confirm("Are you sure you want to delete this record?")) {
      this.deleteClick.emit(row);
    }
  }
  // Keyboard shortcuts
  onF2Pressed() {
    if (this.addRoute) {
      this.router.navigate([this.addRoute]);
    } else {
      this.onAdd();
    }
  }
  onF3Pressed() {
    if (this.selectedRowId) {
      const selectedRow = this.data.find((row) => row[this.rowIdKey] === this.selectedRowId);
      if (selectedRow) {
        this.onEdit(selectedRow);
      }
    }
  }
  onF5Pressed() {
    this.onRefresh();
  }
  onCtrlFPressed() {
    this.searchInput?.nativeElement?.focus();
  }
  onDeletePressed() {
    if (this.selectedRowId) {
      const selectedRow = this.data.find((row) => row[this.rowIdKey] === this.selectedRowId);
      if (selectedRow) {
        this.onDelete(selectedRow);
      }
    }
  }
  getCellValue(row, column) {
    const value = this.getNestedValue(row, column.key);
    if (column.format) {
      return column.format(value, row);
    }
    if (column.type === "date" && value) {
      const date = new Date(value);
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric"
        });
      }
    }
    if (column.type === "number" && value !== null && value !== void 0) {
      return Number(value).toLocaleString();
    }
    return value;
  }
  getLinkQueryParams(row, column) {
    if (!column.link)
      return {};
    const val = row[column.link.rowKey];
    if (val === null || val === void 0)
      return {};
    return { [column.link.queryKey]: val };
  }
  getNestedValue(obj, path) {
    return path.split(".").reduce((current, prop) => current?.[prop], obj) ?? "";
  }
  getSortIcon(column) {
    if (this.sortColumn !== column.key) {
      return "bi-arrow-down-up";
    }
    return this.sortDirection === "asc" ? "bi-arrow-up" : "bi-arrow-down";
  }
  // Expose Math to template
  Math = Math;
  static \u0275fac = function EnhancedTableComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EnhancedTableComponent)(\u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EnhancedTableComponent, selectors: [["app-enhanced-table"]], viewQuery: function EnhancedTableComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchInput = _t.first);
    }
  }, inputs: { data: "data", columns: "columns", pagination: "pagination", loading: "loading", searchPlaceholder: "searchPlaceholder", addRoute: "addRoute", addLabel: "addLabel", enableExport: "enableExport", enableDateFilter: "enableDateFilter", selectedRowId: "selectedRowId", rowIdKey: "rowIdKey", showViewButton: "showViewButton", showPrintButton: "showPrintButton", showConvertButton: "showConvertButton", showFilterButton: "showFilterButton", showPayButton: "showPayButton" }, outputs: { pageChange: "pageChange", filterToggle: "filterToggle", pageSizeChange: "pageSizeChange", searchChange: "searchChange", sortChange: "sortChange", dateFilterChange: "dateFilterChange", rowSelect: "rowSelect", refresh: "refresh", addClick: "addClick", editClick: "editClick", deleteClick: "deleteClick", viewClick: "viewClick", payClick: "payClick", printClick: "printClick", convertClick: "convertClick", exportClick: "exportClick" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 35, vars: 15, consts: [["searchInput", ""], ["defaultCell", ""], ["plainCell", ""], ["appKeyboardShortcuts", "", 1, "enhanced-table-container", 3, "f2Pressed", "f3Pressed", "f5Pressed", "ctrlFPressed", "deletePressed"], [1, "table-header"], [1, "header-left"], [1, "search-container"], [1, "bi", "bi-search", "search-icon"], ["type", "text", 1, "search-input", 3, "ngModelChange", "keyup.enter", "input", "placeholder", "ngModel"], [1, "search-shortcut"], ["class", "date-filters", 4, "ngIf"], [1, "header-right"], [1, "action-buttons-group"], ["class", "btn btn-outline filter-btn", "title", "Toggle Filters", 3, "active", "click", 4, "ngIf"], ["class", "dropdown", 4, "ngIf"], ["title", "Refresh (F5)", 1, "btn", "btn-outline", 3, "click"], [1, "bi", "bi-arrow-clockwise"], [1, "btn-label"], [1, "shortcut-badge"], ["class", "btn btn-primary", 3, "routerLink", 4, "ngIf"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "column-visibility-panel", 4, "ngIf"], [1, "table-wrapper"], ["class", "table-loading-overlay", 4, "ngIf"], [1, "enhanced-table"], [3, "sortable", "width", "click", 4, "ngFor", "ngForOf"], [1, "actions-column"], [3, "selected", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "table-footer", 4, "ngIf"], [1, "date-filters"], ["type", "date", "placeholder", "Start Date", 1, "date-input", 3, "ngModelChange", "change", "ngModel"], [1, "date-separator"], ["type", "date", "placeholder", "End Date", 1, "date-input", 3, "ngModelChange", "change", "ngModel"], ["title", "Toggle Filters", 1, "btn", "btn-outline", "filter-btn", 3, "click"], [1, "bi", "bi-funnel"], [1, "dropdown"], ["type", "button", 1, "btn", "btn-outline", "dropdown-toggle", 3, "click"], [1, "bi", "bi-download"], [1, "bi", "bi-chevron-down"], ["class", "dropdown-menu", 3, "show", 4, "ngIf"], [1, "dropdown-menu"], [1, "dropdown-item", 3, "click"], [1, "bi", "bi-filetype-csv"], [1, "bi", "bi-filetype-pdf"], [1, "bi", "bi-printer"], [1, "bi", "bi-clipboard"], [1, "dropdown-divider"], [1, "bi", "bi-eye"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "bi", "bi-plus-circle"], [1, "btn", "btn-primary", 3, "click"], [1, "column-visibility-panel"], [1, "panel-header"], [1, "btn-icon", 3, "click"], [1, "bi", "bi-x"], [1, "panel-body"], ["class", "checkbox-label", 4, "ngFor", "ngForOf"], [1, "checkbox-label"], ["type", "checkbox", 3, "change", "checked"], [1, "table-loading-overlay"], [1, "spinner"], [3, "click"], [1, "th-content"], ["class", "bi", 3, "ngClass", 4, "ngIf"], [1, "bi", 3, "ngClass"], [4, "ngFor", "ngForOf"], [1, "action-buttons"], ["class", "btn-icon btn-sm", "title", "Collect Payment", 3, "click", 4, "ngIf"], ["class", "btn-icon btn-print", "title", "Print", 3, "click", 4, "ngIf"], ["class", "btn-icon btn-view", "title", "View", 3, "click", 4, "ngIf"], ["class", "btn-icon btn-convert", "title", "Convert to Admission", 3, "click", 4, "ngIf"], ["title", "Edit (F3)", 1, "btn-icon", "btn-edit", 3, "click"], [1, "bi", "bi-pencil"], ["title", "Delete", 1, "btn-icon", "btn-delete", 3, "click"], [1, "bi", "bi-trash"], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cell-fk-link", 3, "click", "routerLink", "queryParams", "innerHTML"], [3, "innerHTML"], ["title", "Collect Payment", 1, "btn-icon", "btn-sm", 3, "click"], [1, "bi", "bi-cash"], ["title", "Print", 1, "btn-icon", "btn-print", 3, "click"], ["title", "View", 1, "btn-icon", "btn-view", 3, "click"], ["title", "Convert to Admission", 1, "btn-icon", "btn-convert", 3, "click"], [1, "bi", "bi-person-plus"], [1, "empty-row"], [1, "empty-state"], [1, "bi", "bi-inbox"], [1, "table-footer"], [1, "footer-left"], [1, "records-info"], [1, "page-size-select", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "footer-right"], [1, "pagination-controls"], ["title", "First Page", 1, "btn", "btn-sm", "btn-outline", 3, "click", "disabled"], [1, "bi", "bi-chevron-double-left"], ["title", "Previous Page", 1, "btn", "btn-sm", "btn-outline", 3, "click", "disabled"], [1, "bi", "bi-chevron-left"], [1, "page-info"], ["title", "Next Page", 1, "btn", "btn-sm", "btn-outline", 3, "click", "disabled"], [1, "bi", "bi-chevron-right"], ["title", "Last Page", 1, "btn", "btn-sm", "btn-outline", 3, "click", "disabled"], [1, "bi", "bi-chevron-double-right"], [3, "value"]], template: function EnhancedTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3);
      \u0275\u0275listener("f2Pressed", function EnhancedTableComponent_Template_div_f2Pressed_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onF2Pressed());
      })("f3Pressed", function EnhancedTableComponent_Template_div_f3Pressed_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onF3Pressed());
      })("f5Pressed", function EnhancedTableComponent_Template_div_f5Pressed_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onF5Pressed());
      })("ctrlFPressed", function EnhancedTableComponent_Template_div_ctrlFPressed_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCtrlFPressed());
      })("deletePressed", function EnhancedTableComponent_Template_div_deletePressed_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDeletePressed());
      });
      \u0275\u0275elementStart(1, "div", 4)(2, "div", 5)(3, "div", 6);
      \u0275\u0275element(4, "i", 7);
      \u0275\u0275elementStart(5, "input", 8, 0);
      \u0275\u0275twoWayListener("ngModelChange", function EnhancedTableComponent_Template_input_ngModelChange_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("keyup.enter", function EnhancedTableComponent_Template_input_keyup_enter_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSearch());
      })("input", function EnhancedTableComponent_Template_input_input_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSearch());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 9);
      \u0275\u0275text(8, "Ctrl+F");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, EnhancedTableComponent_div_9_Template, 5, 2, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 11)(11, "div", 12);
      \u0275\u0275template(12, EnhancedTableComponent_button_12_Template, 4, 2, "button", 13)(13, EnhancedTableComponent_div_13_Template, 6, 1, "div", 14);
      \u0275\u0275elementStart(14, "button", 15);
      \u0275\u0275listener("click", function EnhancedTableComponent_Template_button_click_14_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onRefresh());
      });
      \u0275\u0275element(15, "i", 16);
      \u0275\u0275elementStart(16, "span", 17);
      \u0275\u0275text(17, "Refresh");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span", 18);
      \u0275\u0275text(19, "F5");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(20, EnhancedTableComponent_a_20_Template, 6, 2, "a", 19)(21, EnhancedTableComponent_button_21_Template, 6, 1, "button", 20);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(22, EnhancedTableComponent_div_22_Template, 8, 1, "div", 21);
      \u0275\u0275elementStart(23, "div", 22);
      \u0275\u0275template(24, EnhancedTableComponent_div_24_Template, 4, 0, "div", 23);
      \u0275\u0275elementStart(25, "table", 24)(26, "thead")(27, "tr");
      \u0275\u0275template(28, EnhancedTableComponent_th_28_Template, 5, 6, "th", 25);
      \u0275\u0275elementStart(29, "th", 26);
      \u0275\u0275text(30, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "tbody");
      \u0275\u0275template(32, EnhancedTableComponent_tr_32_Template, 12, 7, "tr", 27)(33, EnhancedTableComponent_tr_33_Template, 6, 1, "tr", 28);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(34, EnhancedTableComponent_div_34_Template, 18, 11, "div", 29);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("placeholder", ctx.searchPlaceholder);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.enableDateFilter);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.showFilterButton !== false);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.enableExport);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.addRoute);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.addRoute);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showColumnVisibility);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275classProp("table-loading", ctx.loading);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.visibleColumnsList);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.data);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.data.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.pagination.pages > 1 || ctx.pagination.total > 0);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink, KeyboardShortcutsDirective], styles: ['\n\n.enhanced-table-container[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n  border: 1px solid rgba(37, 99, 235, 0.08);\n  padding: var(--spacing-md);\n  position: relative;\n  overflow: hidden;\n}\n.enhanced-table-container[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: var(--primary-gradient);\n  opacity: 0.9;\n}\n.table-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-md);\n  flex-wrap: wrap;\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  flex: 1;\n  min-width: 300px;\n}\n.search-container[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  max-width: 400px;\n}\n.search-container[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: var(--spacing-md);\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-secondary);\n  z-index: 1;\n}\n.search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.35rem 0.6rem 0.35rem 2rem;\n  min-height: 2rem;\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-sm);\n  font-size: var(--font-size-base);\n  transition: all var(--transition-base);\n}\n.search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.12);\n}\n.search-container[_ngcontent-%COMP%]   .search-shortcut[_ngcontent-%COMP%] {\n  position: absolute;\n  right: var(--spacing-sm);\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: var(--font-size-xs);\n  color: var(--text-tertiary);\n  background: var(--bg-secondary);\n  padding: 2px 6px;\n  border-radius: var(--radius-sm);\n  pointer-events: none;\n}\n.date-filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n}\n.date-filters[_ngcontent-%COMP%]   .date-input[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.5rem;\n  min-height: 2rem;\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-sm);\n  font-size: var(--font-size-sm);\n  transition: all var(--transition-base);\n}\n.date-filters[_ngcontent-%COMP%]   .date-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.12);\n}\n.date-filters[_ngcontent-%COMP%]   .date-separator[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: var(--font-size-sm);\n}\n.header-right[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  align-items: center;\n}\n.action-buttons-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-sm);\n  align-items: center;\n}\n.action-buttons-group[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%] {\n  position: relative;\n}\n.action-buttons-group[_ngcontent-%COMP%]   .filter-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  color: white;\n  border-color: var(--primary-color);\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3), 0 2px 4px rgba(37, 99, 235, 0.2);\n}\n.action-buttons-group[_ngcontent-%COMP%]   .filter-btn.active[_ngcontent-%COMP%]:hover {\n  background: var(--primary-gradient-light);\n  transform: translateY(-2px) scale(1.02);\n  box-shadow: 0 6px 16px rgba(37, 99, 235, 0.4), 0 4px 8px rgba(37, 99, 235, 0.3);\n}\n.dropdown[_ngcontent-%COMP%] {\n  position: relative;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-xs);\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  margin-top: var(--spacing-xs);\n  background: var(--bg-primary);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-lg);\n  min-width: 200px;\n  z-index: 1000;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(-10px);\n  transition: all var(--transition-base);\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md);\n  color: var(--text-primary);\n  text-decoration: none;\n  transition: all var(--transition-fast);\n  cursor: pointer;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-secondary);\n  color: var(--primary-color);\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 20px;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--border-color);\n  margin: var(--spacing-xs) 0;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--spacing-xs);\n}\n.btn[_ngcontent-%COMP%]   .shortcut-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.2);\n  color: inherit;\n  font-size: 10px;\n  padding: 2px 6px;\n  border-radius: var(--radius-sm);\n  font-weight: 600;\n  margin-left: 2px;\n}\n.btn.btn-primary[_ngcontent-%COMP%]   .shortcut-badge[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.3);\n  color: inherit;\n}\n.btn.btn-outline[_ngcontent-%COMP%]   .shortcut-badge[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.08);\n  color: var(--text-secondary);\n}\n.btn[_ngcontent-%COMP%]   .btn-label[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n.column-visibility-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: var(--spacing-xl);\n  margin-top: var(--spacing-sm);\n  background: var(--bg-primary);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-xl);\n  z-index: 1001;\n  min-width: 250px;\n  max-height: 400px;\n  overflow-y: auto;\n}\n.column-visibility-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--spacing-md);\n  border-bottom: 1px solid var(--border-color);\n}\n.column-visibility-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--font-size-base);\n}\n.column-visibility-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n  padding: var(--spacing-md);\n}\n.column-visibility-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-sm);\n  cursor: pointer;\n  transition: background var(--transition-fast);\n}\n.column-visibility-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]:hover {\n  background: var(--bg-secondary);\n}\n.column-visibility-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  overflow-x: auto;\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--border-color);\n}\n.table-loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.9);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n  border-radius: var(--radius-lg);\n}\n.enhanced-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n.enhanced-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 2px 6px rgba(0, 0, 0, 0.12);\n}\n.enhanced-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.65rem 0.75rem;\n  text-align: center;\n  font-weight: 600;\n  color: #fff;\n  font-size: var(--font-size-xs);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  border-bottom: none;\n  border-right: 1px solid rgba(255, 255, 255, 0.15);\n}\n.enhanced-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.enhanced-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: background var(--transition-base);\n}\n.enhanced-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.12);\n}\n.enhanced-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .th-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-xs);\n}\n.enhanced-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .th-content[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  opacity: 0.95;\n  font-size: 0.7rem;\n  color: #fff;\n}\n.enhanced-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background var(--transition-fast);\n  border-bottom: 1px solid var(--border-color);\n}\n.enhanced-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: var(--bg-primary);\n}\n.enhanced-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgba(37, 99, 235, 0.04);\n}\n.enhanced-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.08) !important;\n}\n.enhanced-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.selected[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.12) !important;\n  border-left: 3px solid var(--primary-color);\n}\n.enhanced-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.22rem 0.5rem;\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  line-height: 1.3;\n  vertical-align: middle;\n  text-align: center;\n}\n.enhanced-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.empty-row[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--spacing-xl);\n}\n.enhanced-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .cell-fk-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.2rem 0.5rem;\n  border-radius: var(--radius-sm);\n  background: var(--primary-color);\n  color: #fff;\n  text-decoration: none;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all var(--transition-fast);\n}\n.enhanced-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .cell-fk-link[_ngcontent-%COMP%]:hover {\n  background: var(--primary-color);\n  filter: brightness(1.1);\n  color: #fff;\n}\n.enhanced-table[_ngcontent-%COMP%]   .actions-column[_ngcontent-%COMP%] {\n  width: 100px;\n  text-align: center;\n  white-space: nowrap;\n}\n.enhanced-table[_ngcontent-%COMP%]   .actions-column[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  gap: 3px;\n  justify-content: center;\n  align-items: center;\n}\n.enhanced-table[_ngcontent-%COMP%]   .actions-column[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  transition: all var(--transition-fast);\n  background: rgba(37, 99, 235, 0.06);\n  color: rgba(37, 99, 235, 0.8);\n  font-size: 0.8rem;\n  position: relative;\n}\n.enhanced-table[_ngcontent-%COMP%]   .actions-column[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.12);\n  color: var(--primary-color);\n}\n.enhanced-table[_ngcontent-%COMP%]   .actions-column[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  transition: transform var(--transition-base);\n  font-size: 0.85rem;\n}\n.enhanced-table[_ngcontent-%COMP%]   .actions-column[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: scale(1.15);\n}\n.enhanced-table[_ngcontent-%COMP%]   .actions-column[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-icon.btn-edit[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.15);\n  color: rgba(37, 99, 235, 0.9);\n  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.2);\n  transform: translateY(-2px) scale(1.05);\n}\n.enhanced-table[_ngcontent-%COMP%]   .actions-column[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-icon.btn-edit[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.enhanced-table[_ngcontent-%COMP%]   .actions-column[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-icon.btn-print[_ngcontent-%COMP%] {\n  background: rgba(107, 114, 128, 0.12);\n  color: #4b5563;\n}\n.enhanced-table[_ngcontent-%COMP%]   .actions-column[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-icon.btn-print[_ngcontent-%COMP%]:hover {\n  background: rgba(107, 114, 128, 0.2);\n  color: #1f2937;\n}\n.enhanced-table[_ngcontent-%COMP%]   .actions-column[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-icon.btn-view[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.08);\n  color: rgba(34, 197, 94, 0.7);\n}\n.enhanced-table[_ngcontent-%COMP%]   .actions-column[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-icon.btn-view[_ngcontent-%COMP%]:hover {\n  background: rgba(34, 197, 94, 0.15);\n  color: rgba(34, 197, 94, 0.9);\n  box-shadow: 0 2px 8px rgba(34, 197, 94, 0.2);\n  transform: translateY(-2px) scale(1.05);\n}\n.enhanced-table[_ngcontent-%COMP%]   .actions-column[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-icon.btn-view[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.enhanced-table[_ngcontent-%COMP%]   .actions-column[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-icon.btn-convert[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.08);\n  color: rgba(34, 197, 94, 0.7);\n}\n.enhanced-table[_ngcontent-%COMP%]   .actions-column[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-icon.btn-convert[_ngcontent-%COMP%]:hover {\n  background: rgba(34, 197, 94, 0.15);\n  color: rgba(34, 197, 94, 0.9);\n  box-shadow: 0 2px 8px rgba(34, 197, 94, 0.2);\n  transform: translateY(-2px) scale(1.05);\n}\n.enhanced-table[_ngcontent-%COMP%]   .actions-column[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-icon.btn-convert[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.enhanced-table[_ngcontent-%COMP%]   .actions-column[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-icon.btn-delete[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.08);\n  color: rgba(239, 68, 68, 0.7);\n}\n.enhanced-table[_ngcontent-%COMP%]   .actions-column[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-icon.btn-delete[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.15);\n  color: rgba(239, 68, 68, 0.9);\n  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.2);\n  transform: translateY(-2px) scale(1.05);\n}\n.enhanced-table[_ngcontent-%COMP%]   .actions-column[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-icon.btn-delete[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--spacing-2xl);\n  color: var(--text-tertiary);\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: var(--spacing-md);\n  opacity: 0.5;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--font-size-base);\n}\n.table-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: var(--spacing-md);\n  padding-top: var(--spacing-md);\n  border-top: 1px solid var(--border-color);\n  flex-wrap: wrap;\n  gap: var(--spacing-md);\n}\n.footer-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n}\n.footer-left[_ngcontent-%COMP%]   .records-info[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: var(--font-size-sm);\n}\n.footer-left[_ngcontent-%COMP%]   .page-size-select[_ngcontent-%COMP%] {\n  min-height: 2rem;\n  padding: 0.35rem 0.6rem;\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-sm);\n  font-size: var(--font-size-sm);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  cursor: pointer;\n  transition: all var(--transition-base);\n}\n.footer-left[_ngcontent-%COMP%]   .page-size-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.12);\n}\n.footer-right[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-xs);\n}\n.footer-right[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .page-info[_ngcontent-%COMP%] {\n  padding: 0 var(--spacing-md);\n  color: var(--text-secondary);\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n}\n@media (max-width: 768px) {\n  .table-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .header-left[_ngcontent-%COMP%], \n   .header-right[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .search-container[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .date-filters[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .date-filters[_ngcontent-%COMP%]   .date-separator[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .table-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .footer-left[_ngcontent-%COMP%], \n   .footer-right[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=enhanced-table.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EnhancedTableComponent, { className: "EnhancedTableComponent", filePath: "src\\app\\shared\\components\\enhanced-table\\enhanced-table.component.ts", lineNumber: 45 });
})();

export {
  ExportService,
  EnhancedTableComponent
};
//# sourceMappingURL=chunk-LT2VDVRY.js.map
