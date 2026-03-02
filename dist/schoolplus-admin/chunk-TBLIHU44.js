import {
  CommonModule,
  EventEmitter,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵresolveDocument
} from "./chunk-VTJ43J7W.js";

// src/app/shared/components/detail-slider/detail-slider.component.ts
var _c0 = ["*"];
var DetailSliderComponent = class _DetailSliderComponent {
  visible = false;
  title = "Summary";
  subtitle = "";
  profileName = "";
  profileSubtext = "";
  close = new EventEmitter();
  ngOnChanges(changes) {
    if (changes["visible"]) {
      document.body.style.overflow = this.visible ? "hidden" : "";
    }
  }
  onEscape() {
    if (this.visible) {
      this.close.emit();
    }
  }
  onClose() {
    this.close.emit();
  }
  onOverlayClick() {
    this.close.emit();
  }
  onPanelClick(e) {
    e.stopPropagation();
  }
  static \u0275fac = function DetailSliderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DetailSliderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetailSliderComponent, selectors: [["app-detail-slider"]], hostBindings: function DetailSliderComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown.escape", function DetailSliderComponent_keydown_escape_HostBindingHandler() {
        return ctx.onEscape();
      }, false, \u0275\u0275resolveDocument);
    }
  }, inputs: { visible: "visible", title: "title", subtitle: "subtitle", profileName: "profileName", profileSubtext: "profileSubtext" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], ngContentSelectors: _c0, decls: 6, vars: 5, consts: [["role", "presentation", 1, "slider-overlay", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "slider-panel", 3, "click"], [1, "slider-header"], ["type", "button", "title", "Close (Esc)", 1, "slider-close", 3, "click"], [1, "bi", "bi-x-lg"]], template: function DetailSliderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function DetailSliderComponent_Template_div_click_0_listener() {
        return ctx.onOverlayClick();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("click", function DetailSliderComponent_Template_div_click_1_listener($event) {
        return ctx.onPanelClick($event);
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "button", 3);
      \u0275\u0275listener("click", function DetailSliderComponent_Template_button_click_3_listener() {
        return ctx.onClose();
      });
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275projection(5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("slider-overlay-visible", ctx.visible);
      \u0275\u0275advance();
      \u0275\u0275classProp("slider-panel-visible", ctx.visible);
      \u0275\u0275attribute("aria-label", ctx.title);
    }
  }, dependencies: [CommonModule], styles: ["\n\n.slider-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1050;\n  background: rgba(0, 0, 0, 0.35);\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.3s ease, visibility 0.3s ease;\n  pointer-events: none;\n}\n.slider-overlay.slider-overlay-visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  pointer-events: auto;\n}\n.slider-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 65%;\n  min-width: 320px;\n  background: var(--bg-primary);\n  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15), -2px 0 8px rgba(0, 0, 0, 0.08);\n  transform: translateX(100%);\n  transition: transform 0.35s cubic-bezier(0.32, 0.72, 0, 1), box-shadow 0.3s ease;\n  z-index: 1051;\n  display: flex;\n  flex-direction: column;\n  border-radius: 12px 0 0 12px;\n  overflow: hidden;\n}\n.slider-panel.slider-panel-visible[_ngcontent-%COMP%] {\n  transform: translateX(0);\n  box-shadow: -8px 0 32px rgba(0, 0, 0, 0.18), -4px 0 12px rgba(0, 0, 0, 0.1);\n}\n.slider-header[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 0.75rem 1rem;\n  background: var(--bg-primary);\n  border-bottom: 1px solid var(--border-color);\n}\n.slider-close[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: none;\n  background: var(--error-color);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: transform 0.2s ease, background 0.2s ease;\n}\n.slider-close[_ngcontent-%COMP%]:hover {\n  background: var(--error-color);\n  filter: brightness(1.1);\n  transform: scale(1.05);\n}\n.slider-close[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n@media (max-width: 768px) {\n  .slider-panel[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: unset;\n    border-radius: 0;\n  }\n}\n/*# sourceMappingURL=detail-slider.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetailSliderComponent, { className: "DetailSliderComponent", filePath: "src\\app\\shared\\components\\detail-slider\\detail-slider.component.ts", lineNumber: 15 });
})();

export {
  DetailSliderComponent
};
//# sourceMappingURL=chunk-TBLIHU44.js.map
