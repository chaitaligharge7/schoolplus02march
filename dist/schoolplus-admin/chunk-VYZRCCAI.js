import {
  BranchService
} from "./chunk-SCDJ76GZ.js";
import {
  DetailSliderComponent
} from "./chunk-TBLIHU44.js";
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
  EventEmitter,
  NgClass,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/branches/branch-detail-slider/branch-detail-slider.component.ts
function BranchDetailSliderComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Code: ", ctx_r0.branch.branch_code, "");
  }
}
function BranchDetailSliderComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.branch.city);
  }
}
function BranchDetailSliderComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function BranchDetailSliderComponent_button_11_Template_button_click_0_listener() {
      const tab_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setTab(tab_r3.id));
    });
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.activeTab === tab_r3.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", tab_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r3.label);
  }
}
function BranchDetailSliderComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275element(2, "span", 21);
    \u0275\u0275text(3, " Loading...");
    \u0275\u0275elementEnd()();
  }
}
function BranchDetailSliderComponent_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "div", 25);
    \u0275\u0275element(3, "i", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 27)(5, "div", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 29);
    \u0275\u0275text(8, "Branch Code");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 24)(10, "div", 30);
    \u0275\u0275element(11, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 27)(13, "div", 28);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 29);
    \u0275\u0275text(16, "City");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 24)(18, "div", 32);
    \u0275\u0275element(19, "i", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 27)(21, "div", 28);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 29);
    \u0275\u0275text(24, "Phone");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 24)(26, "div", 34);
    \u0275\u0275element(27, "i", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 27)(29, "div", 28);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 29);
    \u0275\u0275text(32, "Status");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.profileData.branch_code || "\u2014");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.profileData.city || "\u2014");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.profileData.phone || "\u2014");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.profileData.is_active == 1 ? "Active" : "Inactive");
  }
}
function BranchDetailSliderComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, BranchDetailSliderComponent_div_20_div_1_Template, 33, 4, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.profileData);
  }
}
function BranchDetailSliderComponent_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "span", 39);
    \u0275\u0275text(3, "Branch Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 40);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 38)(7, "span", 39);
    \u0275\u0275text(8, "Branch Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 40);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 38)(12, "span", 39);
    \u0275\u0275text(13, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 40);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 38)(17, "span", 39);
    \u0275\u0275text(18, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 40);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 38)(22, "span", 39);
    \u0275\u0275text(23, "State / Region");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 40);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 38)(27, "span", 39);
    \u0275\u0275text(28, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 40);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 38)(32, "span", 39);
    \u0275\u0275text(33, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 40);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 38)(37, "span", 39);
    \u0275\u0275text(38, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 40)(40, "span", 41);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.profileData.branch_name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.profileData.branch_code || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.profileData.address || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.profileData.city || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.profileData.state || ctx_r0.profileData.region || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.profileData.phone || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.profileData.email || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("badge-success", ctx_r0.profileData.is_active == 1)("badge-secondary", ctx_r0.profileData.is_active != 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.profileData.is_active == 1 ? "Active" : "Inactive");
  }
}
function BranchDetailSliderComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, BranchDetailSliderComponent_div_21_div_1_Template, 42, 12, "div", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.profileData);
  }
}
var BranchDetailSliderComponent = class _BranchDetailSliderComponent {
  branchService;
  toast;
  visible = false;
  branch = null;
  close = new EventEmitter();
  tabs = [
    { id: "profile", label: "Profile", icon: "bi-building" },
    { id: "contact", label: "Contact & Address", icon: "bi-geo-alt" }
  ];
  activeTab = "profile";
  loading = false;
  profileData = null;
  constructor(branchService, toast) {
    this.branchService = branchService;
    this.toast = toast;
  }
  ngOnChanges(changes) {
    if (changes["branch"] && this.branch && this.visible) {
      this.activeTab = "profile";
      this.loadProfile();
    }
    if (changes["visible"] && this.visible && this.branch) {
      this.activeTab = "profile";
      this.loadProfile();
    }
  }
  onClose() {
    this.close.emit();
  }
  setTab(tab) {
    this.activeTab = tab;
    if (!this.branch)
      return;
    if (tab === "profile")
      this.loadProfile();
  }
  loadProfile() {
    if (!this.branch?.branch_id)
      return;
    this.loading = true;
    this.branchService.getBranch(this.branch.branch_id).subscribe({
      next: (res) => {
        this.loading = false;
        this.profileData = res.status === "success" && res.data?.branch ? res.data.branch : this.branch;
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error loading branch", "error");
      }
    });
  }
  static \u0275fac = function BranchDetailSliderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BranchDetailSliderComponent)(\u0275\u0275directiveInject(BranchService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BranchDetailSliderComponent, selectors: [["app-branch-detail-slider"]], inputs: { visible: "visible", branch: "branch" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 22, vars: 12, consts: [[3, "close", "visible", "title", "subtitle", "profileName", "profileSubtext"], [1, "slider-body"], [1, "slider-sidebar"], [1, "profile-card"], [1, "profile-avatar"], [1, "bi", "bi-building"], [1, "profile-name"], ["class", "profile-meta", 4, "ngIf"], [1, "slider-nav"], ["type", "button", "class", "slider-nav-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "slider-content"], [1, "content-header"], [1, "content-header-text"], [1, "content-title"], [1, "content-subtitle"], ["class", "content-area", 4, "ngIf"], [1, "profile-meta"], ["type", "button", 1, "slider-nav-btn", 3, "click"], [1, "bi", 3, "ngClass"], [1, "content-area"], [1, "content-loading"], [1, "spinner"], ["class", "kpi-grid", 4, "ngIf"], [1, "kpi-grid"], [1, "kpi-card"], [1, "kpi-icon", "kpi-primary"], [1, "bi", "bi-upc-scan"], [1, "kpi-body"], [1, "kpi-value"], [1, "kpi-label"], [1, "kpi-icon", "kpi-success"], [1, "bi", "bi-geo-alt"], [1, "kpi-icon", "kpi-info"], [1, "bi", "bi-telephone"], [1, "kpi-icon", "kpi-warning"], [1, "bi", "bi-toggle-on"], ["class", "detail-card", 4, "ngIf"], [1, "detail-card"], [1, "detail-row"], [1, "label"], [1, "value"], [1, "badge"]], template: function BranchDetailSliderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-detail-slider", 0);
      \u0275\u0275listener("close", function BranchDetailSliderComponent_Template_app_detail_slider_close_0_listener() {
        return ctx.onClose();
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "aside", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "i", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 6);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, BranchDetailSliderComponent_div_8_Template, 2, 1, "div", 7)(9, BranchDetailSliderComponent_div_9_Template, 2, 1, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "nav", 8);
      \u0275\u0275template(11, BranchDetailSliderComponent_button_11_Template, 4, 4, "button", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "main", 10)(13, "header", 11)(14, "div", 12)(15, "h2", 13);
      \u0275\u0275text(16, "Branch Summary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p", 14);
      \u0275\u0275text(18, "Branch details and contact");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(19, BranchDetailSliderComponent_div_19_Template, 4, 0, "div", 15)(20, BranchDetailSliderComponent_div_20_Template, 2, 1, "div", 15)(21, BranchDetailSliderComponent_div_21_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("visible", ctx.visible)("title", "Branch Summary")("subtitle", "Branch details and contact")("profileName", (ctx.branch == null ? null : ctx.branch.branch_name) || "")("profileSubtext", (ctx.branch == null ? null : ctx.branch.branch_code) || "");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate((ctx.branch == null ? null : ctx.branch.branch_name) || "\u2014");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.branch == null ? null : ctx.branch.branch_code);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.branch == null ? null : ctx.branch.city);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.tabs);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.activeTab === "profile");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.activeTab === "contact");
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DetailSliderComponent], styles: ["\n\n.slider-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  min-height: 0;\n  overflow: hidden;\n}\n.slider-sidebar[_ngcontent-%COMP%] {\n  width: 220px;\n  flex-shrink: 0;\n  background: var(--bg-secondary);\n  border-right: 1px solid var(--border-color);\n  display: flex;\n  flex-direction: column;\n  padding: 1rem 0;\n}\n.profile-card[_ngcontent-%COMP%] {\n  padding: 1rem 1rem 1.25rem;\n  margin: 0 0.75rem 1rem;\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-md);\n  text-align: center;\n}\n.profile-avatar[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  margin: 0 auto 0.5rem;\n  border-radius: 50%;\n  background: var(--primary-gradient);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.75rem;\n}\n.profile-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: var(--font-size-base);\n  color: var(--text-primary);\n  margin-bottom: 0.25rem;\n}\n.profile-meta[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  color: var(--text-tertiary);\n}\n.slider-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  padding: 0 0.5rem;\n}\n.slider-nav-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.6rem 0.75rem;\n  border: none;\n  border-radius: var(--radius-md);\n  background: transparent;\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.2s ease, color 0.2s ease;\n}\n.slider-nav-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  color: #fff;\n}\n.slider-nav-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  background: var(--primary-lighter);\n  color: var(--primary-dark);\n}\n.slider-nav-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.slider-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  overflow-y: auto;\n  padding: 1rem 1.25rem;\n}\n.content-header[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  color: #fff;\n  margin: -1rem -1.25rem 1rem;\n  padding: 1rem 1.25rem;\n}\n.content-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.2rem 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n.content-subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  opacity: 0.9;\n}\n.content-area[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.content-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 2rem;\n  color: var(--text-tertiary);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border: 2px solid var(--border-color);\n  border-top-color: var(--primary-color);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  padding: 1rem;\n  box-shadow: var(--shadow-md);\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  border: 1px solid var(--border-color);\n}\n.kpi-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n  color: #fff;\n  flex-shrink: 0;\n}\n.kpi-icon.kpi-primary[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n}\n.kpi-icon.kpi-success[_ngcontent-%COMP%] {\n  background: var(--success-gradient);\n}\n.kpi-icon.kpi-warning[_ngcontent-%COMP%] {\n  background: var(--accent-gradient);\n}\n.kpi-icon.kpi-info[_ngcontent-%COMP%] {\n  background: var(--secondary-gradient);\n}\n.kpi-body[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.kpi-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1rem;\n  color: var(--text-primary);\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-tertiary);\n  margin-top: 0.2rem;\n}\n.detail-card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  padding: 1rem;\n  border: 1px solid var(--border-color);\n  box-shadow: var(--shadow-sm);\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 0;\n  border-bottom: 1px solid var(--border-color);\n}\n.detail-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.detail-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: var(--text-tertiary);\n  font-size: var(--font-size-sm);\n}\n.detail-row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.2rem 0.5rem;\n  border-radius: var(--radius-full);\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.badge.badge-success[_ngcontent-%COMP%] {\n  background: var(--success-lighter);\n  color: var(--success-color);\n}\n.badge.badge-secondary[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  color: var(--text-tertiary);\n}\n/*# sourceMappingURL=branch-detail-slider.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BranchDetailSliderComponent, { className: "BranchDetailSliderComponent", filePath: "src\\app\\modules\\branches\\branch-detail-slider\\branch-detail-slider.component.ts", lineNumber: 16 });
})();

// src/app/modules/branches/branch-list/branch-list.component.ts
var BranchListComponent = class _BranchListComponent {
  branchService;
  router;
  toastService;
  dialogService;
  branches = [];
  loading = false;
  showFilters = false;
  selectedRowId;
  sliderBranch = null;
  sliderVisible = false;
  pagination = { page: 1, limit: 20, total: 0, pages: 0 };
  columns = [
    { key: "branch_name", label: "Branch Name", sortable: true, format: (v) => v || "-" },
    { key: "branch_code", label: "Code", sortable: true, format: (v) => v || "-" },
    { key: "address", label: "Address", sortable: false, format: (v) => v && v.length > 35 ? v.substring(0, 35) + "..." : v || "-" },
    { key: "city", label: "City", sortable: true, format: (v) => v || "-" },
    { key: "phone", label: "Phone", sortable: false, format: (v) => v || "-" },
    { key: "is_active", label: "Status", sortable: true, format: (v) => {
      return `<span class="badge ${v == 1 ? "badge-success" : "badge-secondary"}">${v == 1 ? "Active" : "Inactive"}</span>`;
    } }
  ];
  searchTerm = "";
  constructor(branchService, router, toastService, dialogService) {
    this.branchService = branchService;
    this.router = router;
    this.toastService = toastService;
    this.dialogService = dialogService;
  }
  ngOnInit() {
    this.loadBranches();
  }
  loadBranches() {
    this.loading = true;
    const params = { page: this.pagination.page, limit: this.pagination.limit };
    if (this.searchTerm)
      params.search = this.searchTerm;
    this.branchService.getBranches(params).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === "success" && res.data) {
          this.branches = res.data.branches || [];
          this.pagination = res.data.pagination || this.pagination;
        }
      },
      error: () => {
        this.loading = false;
        this.toastService.show("Error loading branches", "error");
      }
    });
  }
  onPageChange(page) {
    this.pagination.page = page;
    this.loadBranches();
  }
  onPageSizeChange(size) {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadBranches();
  }
  onSearchChange(s) {
    this.searchTerm = s;
    this.pagination.page = 1;
    this.loadBranches();
  }
  onSortChange(_) {
    this.loadBranches();
  }
  onRowSelect(row) {
    this.selectedRowId = row.branch_id;
    this.sliderBranch = row;
    this.sliderVisible = true;
  }
  onView(row) {
    this.sliderBranch = row;
    this.sliderVisible = true;
  }
  onRefresh() {
    this.loadBranches();
  }
  onAdd() {
  }
  onEdit(row) {
    console.log("Edit clicked:", row);
    this.router.navigate(["/app/branches/edit", row.branch_id]);
  }
  onDelete(row) {
    this.dialogService.confirm({
      title: "Delete Branch",
      message: `Are you sure you want to delete "${row.branch_name}"?`,
      confirmText: "Delete",
      cancelText: "Cancel",
      type: "danger"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.branchService.deleteBranch(row.branch_id).subscribe({
          next: (response) => {
            if (response.status === "success") {
              this.toastService.show("branch deleted successfully", "success");
              this.loadBranches();
            }
          },
          error: () => {
            this.toastService.show("Error deleting branch", "error");
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
  static \u0275fac = function BranchListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BranchListComponent)(\u0275\u0275directiveInject(BranchService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(DialogService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BranchListComponent, selectors: [["app-branch-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 12, consts: [[1, "branch-list-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "rowSelect", "refresh", "addClick", "editClick", "deleteClick", "viewClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "selectedRowId", "rowIdKey", "addRoute", "addLabel", "searchPlaceholder", "showViewButton"], [3, "close", "visible", "branch"]], template: function BranchListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Branch Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Manage school branches");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "app-enhanced-table", 4);
      \u0275\u0275listener("pageChange", function BranchListComponent_Template_app_enhanced_table_pageChange_7_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function BranchListComponent_Template_app_enhanced_table_pageSizeChange_7_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function BranchListComponent_Template_app_enhanced_table_searchChange_7_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function BranchListComponent_Template_app_enhanced_table_sortChange_7_listener($event) {
        return ctx.onSortChange($event);
      })("rowSelect", function BranchListComponent_Template_app_enhanced_table_rowSelect_7_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function BranchListComponent_Template_app_enhanced_table_refresh_7_listener() {
        return ctx.onRefresh();
      })("addClick", function BranchListComponent_Template_app_enhanced_table_addClick_7_listener() {
        return ctx.onAdd();
      })("editClick", function BranchListComponent_Template_app_enhanced_table_editClick_7_listener($event) {
        return ctx.onEdit($event);
      })("deleteClick", function BranchListComponent_Template_app_enhanced_table_deleteClick_7_listener($event) {
        return ctx.onDelete($event);
      })("viewClick", function BranchListComponent_Template_app_enhanced_table_viewClick_7_listener($event) {
        return ctx.onView($event);
      })("exportClick", function BranchListComponent_Template_app_enhanced_table_exportClick_7_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function BranchListComponent_Template_app_enhanced_table_filterToggle_7_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "app-branch-detail-slider", 5);
      \u0275\u0275listener("close", function BranchListComponent_Template_app_branch_detail_slider_close_8_listener() {
        return ctx.sliderVisible = false;
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("data", ctx.branches)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("selectedRowId", ctx.selectedRowId)("rowIdKey", "branch_id")("addRoute", "/app/branches/create")("addLabel", "Add Branch")("searchPlaceholder", "Search branches...")("showViewButton", true);
      \u0275\u0275advance();
      \u0275\u0275property("visible", ctx.sliderVisible)("branch", ctx.sliderBranch);
    }
  }, dependencies: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent, BranchDetailSliderComponent], styles: ["\n\n.branch-list-container[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  max-width: 1600px;\n  margin: 0 auto;\n}\n.branch-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-lg);\n}\n/*# sourceMappingURL=branch-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BranchListComponent, { className: "BranchListComponent", filePath: "src\\app\\modules\\branches\\branch-list\\branch-list.component.ts", lineNumber: 19 });
})();
export {
  BranchListComponent
};
//# sourceMappingURL=chunk-VYZRCCAI.js.map
