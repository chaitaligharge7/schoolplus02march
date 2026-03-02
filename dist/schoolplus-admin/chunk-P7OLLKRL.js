import {
  DefaultValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-DC2DSRDW.js";
import {
  CommonModule,
  ElementRef,
  EventEmitter,
  NgForOf,
  NgIf,
  forwardRef,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-VTJ43J7W.js";

// src/app/shared/components/search-select/search-select.component.ts
var _c0 = ["inputRef"];
var _c1 = ["dropdownRef"];
function SearchSelectComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275element(1, "i", 9);
    \u0275\u0275elementEnd();
  }
}
function SearchSelectComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function SearchSelectComponent_button_5_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.clear();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275elementEnd();
  }
}
function SearchSelectComponent_div_6_li_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 16);
    \u0275\u0275listener("click", function SearchSelectComponent_div_6_li_3_Template_li_click_0_listener() {
      const opt_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.select(opt_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", opt_r5.value === ctx_r2._value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r5.label, " ");
  }
}
function SearchSelectComponent_div_6_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 17);
    \u0275\u0275text(1, " No matches ");
    \u0275\u0275elementEnd();
  }
}
function SearchSelectComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12, 1)(2, "ul", 13);
    \u0275\u0275template(3, SearchSelectComponent_div_6_li_3_Template, 2, 3, "li", 14)(4, SearchSelectComponent_div_6_li_4_Template, 2, 0, "li", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.filteredOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filteredOptions.length === 0);
  }
}
var SearchSelectComponent = class _SearchSelectComponent {
  elementRef;
  options = [];
  placeholder = "";
  disabled = false;
  bindLabel = "label";
  bindValue = "value";
  valueChange = new EventEmitter();
  inputRef;
  dropdownRef;
  isOpen = false;
  searchText = "";
  selectedOption = null;
  _value = null;
  onChange = () => {
  };
  onTouched = () => {
  };
  get normalizedOptions() {
    if (!this.options?.length)
      return [];
    const first = this.options[0];
    if (typeof first === "object" && first !== null && "value" in first && "label" in first) {
      return this.options;
    }
    return this.options.map((v) => ({ value: v, label: String(v) }));
  }
  get filteredOptions() {
    const opts = this.normalizedOptions;
    if (!this.searchText.trim())
      return opts;
    const q = this.searchText.toLowerCase();
    return opts.filter((o) => (o.label || String(o.value)).toLowerCase().includes(q));
  }
  get displayValue() {
    return this.selectedOption ? this.selectedOption.label : "";
  }
  onDocumentClick(event) {
    const host = this.elementRef.nativeElement;
    if (!host.contains(event.target)) {
      this.close();
    }
  }
  constructor(elementRef) {
    this.elementRef = elementRef;
  }
  writeValue(value) {
    this._value = value;
    this.syncSelectionFromValue();
  }
  ngOnChanges(changes) {
    if (changes["options"]) {
      this.syncSelectionFromValue();
    }
  }
  /** Sync selectedOption and searchText from _value (e.g. when options load after value is set). */
  syncSelectionFromValue() {
    const opts = this.normalizedOptions;
    this.selectedOption = opts.find((o) => o.value === this._value) ?? null;
    this.searchText = this.selectedOption ? this.selectedOption.label : "";
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  open() {
    if (this.disabled)
      return;
    this.isOpen = true;
    this.searchText = this.displayValue;
    setTimeout(() => this.inputRef?.nativeElement?.focus(), 0);
  }
  close() {
    this.isOpen = false;
    this.searchText = this.displayValue;
    this.onTouched();
  }
  select(opt) {
    this.selectedOption = opt;
    this._value = opt.value;
    this.searchText = opt.label;
    this.onChange(opt.value);
    this.valueChange.emit(opt.value);
    this.close();
  }
  onInputFocus() {
    this.open();
  }
  onInputInput() {
    if (!this.isOpen)
      this.isOpen = true;
  }
  clear() {
    this.selectedOption = null;
    this._value = null;
    this.searchText = "";
    this.onChange(null);
    this.valueChange.emit(null);
  }
  static \u0275fac = function SearchSelectComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SearchSelectComponent)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchSelectComponent, selectors: [["app-search-select"]], viewQuery: function SearchSelectComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dropdownRef = _t.first);
    }
  }, hostBindings: function SearchSelectComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function SearchSelectComponent_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, false, \u0275\u0275resolveDocument);
    }
  }, inputs: { options: "options", placeholder: "placeholder", disabled: "disabled", bindLabel: "bindLabel", bindValue: "bindValue" }, outputs: { valueChange: "valueChange" }, standalone: true, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _SearchSelectComponent),
      multi: true
    }
  ]), \u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 7, vars: 11, consts: [["inputRef", ""], ["dropdownRef", ""], [1, "search-select"], [1, "search-select-trigger", 3, "click"], ["type", "text", "autocomplete", "off", 1, "search-select-input", "form-control", 3, "ngModelChange", "focus", "input", "placeholder", "ngModel", "readonly", "disabled"], ["class", "search-select-chevron", 4, "ngIf"], ["type", "button", "class", "search-select-clear", "title", "Clear", 3, "click", 4, "ngIf"], ["class", "search-select-dropdown", 4, "ngIf"], [1, "search-select-chevron"], [1, "bi", "bi-chevron-down"], ["type", "button", "title", "Clear", 1, "search-select-clear", 3, "click"], [1, "bi", "bi-x"], [1, "search-select-dropdown"], [1, "search-select-list"], ["class", "search-select-option", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["class", "search-select-option search-select-empty", 4, "ngIf"], [1, "search-select-option", 3, "click"], [1, "search-select-option", "search-select-empty"]], template: function SearchSelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
      \u0275\u0275listener("click", function SearchSelectComponent_Template_div_click_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.open());
      });
      \u0275\u0275elementStart(2, "input", 4, 0);
      \u0275\u0275listener("ngModelChange", function SearchSelectComponent_Template_input_ngModelChange_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.searchText = $event);
      })("focus", function SearchSelectComponent_Template_input_focus_2_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onInputFocus());
      })("input", function SearchSelectComponent_Template_input_input_2_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onInputInput());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, SearchSelectComponent_span_4_Template, 2, 0, "span", 5)(5, SearchSelectComponent_button_5_Template, 2, 0, "button", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, SearchSelectComponent_div_6_Template, 5, 2, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("disabled", ctx.disabled)("open", ctx.isOpen);
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", ctx.placeholder)("ngModel", ctx.searchText)("readonly", !ctx.isOpen)("disabled", ctx.disabled);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.isOpen);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedOption && ctx.isOpen);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.search-select[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.search-select.disabled[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  pointer-events: none;\n}\n.search-select[_ngcontent-%COMP%]   .search-select-trigger[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.search-select[_ngcontent-%COMP%]   .search-select-trigger[_ngcontent-%COMP%]   .search-select-input[_ngcontent-%COMP%] {\n  padding-right: 2rem;\n  cursor: pointer;\n  min-height: 2rem;\n  padding: 0.35rem 0.6rem;\n}\n.search-select[_ngcontent-%COMP%]   .search-select-trigger[_ngcontent-%COMP%]   .search-select-input[readonly][_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: var(--bg-primary);\n}\n.search-select[_ngcontent-%COMP%]   .search-select-trigger[_ngcontent-%COMP%]   .search-select-chevron[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.5rem;\n  pointer-events: none;\n  color: var(--text-tertiary);\n  font-size: 0.75rem;\n}\n.search-select[_ngcontent-%COMP%]   .search-select-trigger[_ngcontent-%COMP%]   .search-select-clear[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.5rem;\n  width: 1.25rem;\n  height: 1.25rem;\n  padding: 0;\n  border: none;\n  background: var(--bg-tertiary);\n  border-radius: 50%;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.7rem;\n  color: var(--text-secondary);\n}\n.search-select[_ngcontent-%COMP%]   .search-select-trigger[_ngcontent-%COMP%]   .search-select-clear[_ngcontent-%COMP%]:hover {\n  background: var(--error-lighter);\n  color: var(--error-color);\n}\n.search-select[_ngcontent-%COMP%]   .search-select-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  margin-top: 2px;\n  background: var(--bg-primary);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-sm);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  max-height: 220px;\n  overflow-y: auto;\n}\n.search-select[_ngcontent-%COMP%]   .search-select-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0.25rem 0;\n}\n.search-select[_ngcontent-%COMP%]   .search-select-option[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.6rem;\n  font-size: var(--font-size-sm);\n  cursor: pointer;\n  transition: background 0.1s ease;\n}\n.search-select[_ngcontent-%COMP%]   .search-select-option[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.08);\n}\n.search-select[_ngcontent-%COMP%]   .search-select-option.selected[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.1);\n  color: var(--primary-color);\n  font-weight: 600;\n}\n.search-select[_ngcontent-%COMP%]   .search-select-option.search-select-empty[_ngcontent-%COMP%] {\n  color: var(--text-tertiary);\n  cursor: default;\n  text-align: center;\n}\n/*# sourceMappingURL=search-select.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchSelectComponent, { className: "SearchSelectComponent", filePath: "src\\app\\shared\\components\\search-select\\search-select.component.ts", lineNumber: 36 });
})();

export {
  SearchSelectComponent
};
//# sourceMappingURL=chunk-P7OLLKRL.js.map
