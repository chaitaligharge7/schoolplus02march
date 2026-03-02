import {
  SecurityGuardService
} from "./chunk-XWWR65CX.js";
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
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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

// src/app/modules/security-guard/inquiry-view/inquiry-view.component.ts
function InquiryViewComponent_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Inquiry #", ctx_r0.inquiry.inquiry_id, "");
  }
}
function InquiryViewComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
function InquiryViewComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "dl", 10)(2, "dt");
    \u0275\u0275text(3, "Visitor Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dd");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "dt");
    \u0275\u0275text(7, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "dd");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "dt");
    \u0275\u0275text(11, "ID Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "dd");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "dt");
    \u0275\u0275text(15, "ID Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "dd");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "dt");
    \u0275\u0275text(19, "Purpose");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "dd");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "dt");
    \u0275\u0275text(23, "Person to Meet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "dd");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "dt");
    \u0275\u0275text(27, "Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "dd");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "dt");
    \u0275\u0275text(31, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "dd")(33, "span", 11);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "dt");
    \u0275\u0275text(36, "Registered By");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "dd");
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "dt");
    \u0275\u0275text(40, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "dd", 12);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 13)(44, "button", 14);
    \u0275\u0275listener("click", function InquiryViewComponent_div_6_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.back());
    });
    \u0275\u0275text(45, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 15);
    \u0275\u0275listener("click", function InquiryViewComponent_div_6_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goEdit());
    });
    \u0275\u0275text(47, "Edit");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.inquiry.visitor_name || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.inquiry.visitor_phone || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.inquiry.visitor_id_type || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.inquiry.visitor_id_number || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.inquiry.purpose || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.inquiry.person_to_meet || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.inquiry.department || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.inquiry.status || "registered");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.inquiry.registered_by_name || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.inquiry.notes || "-");
  }
}
function InquiryViewComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, "No inquiry data.");
    \u0275\u0275elementEnd();
  }
}
var InquiryViewComponent = class _InquiryViewComponent {
  sg;
  toast;
  router;
  route;
  inquiry = null;
  loading = true;
  constructor(sg, toast, router, route) {
    this.sg = sg;
    this.toast = toast;
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.sg.getInquiry(+id).subscribe({
        next: (res) => {
          this.loading = false;
          if (res.status === "success" && res.data?.inquiry) {
            this.inquiry = res.data.inquiry;
          }
        },
        error: () => {
          this.loading = false;
          this.toast.show("Error loading inquiry", "error");
          this.router.navigate(["/app/security-guard/inquiry/list"]);
        }
      });
    } else {
      this.loading = false;
      this.router.navigate(["/app/security-guard/inquiry/list"]);
    }
  }
  goEdit() {
    if (this.inquiry?.inquiry_id) {
      this.router.navigate(["/app/security-guard/inquiry/edit", this.inquiry.inquiry_id]);
    }
  }
  back() {
    this.router.navigate(["/app/security-guard/inquiry/list"]);
  }
  static \u0275fac = function InquiryViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InquiryViewComponent)(\u0275\u0275directiveInject(SecurityGuardService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InquiryViewComponent, selectors: [["app-inquiry-view"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 4, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], ["class", "page-subtitle", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "detail-card", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "page-subtitle"], [1, "loading-state"], [1, "detail-card"], [1, "detail-list"], [1, "badge", "badge-info"], [1, "notes"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "empty-state"]], template: function InquiryViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Inquiry Details");
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, InquiryViewComponent_p_4_Template, 2, 1, "p", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, InquiryViewComponent_div_5_Template, 2, 0, "div", 4)(6, InquiryViewComponent_div_6_Template, 48, 10, "div", 5)(7, InquiryViewComponent_div_7_Template, 2, 0, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.inquiry);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.inquiry);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.inquiry);
    }
  }, dependencies: [CommonModule, NgIf, RouterModule], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem;\n}\n.detail-card[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.detail-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 140px 1fr;\n  gap: 0.5rem 1rem;\n}\n.detail-list[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #555;\n}\n.detail-list[_ngcontent-%COMP%]   dd.notes[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\n.form-actions[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  display: flex;\n  gap: 0.5rem;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n}\n/*# sourceMappingURL=inquiry-view.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InquiryViewComponent, { className: "InquiryViewComponent", filePath: "src\\app\\modules\\security-guard\\inquiry-view\\inquiry-view.component.ts", lineNumber: 14 });
})();
export {
  InquiryViewComponent
};
//# sourceMappingURL=chunk-TQN7PZ3O.js.map
