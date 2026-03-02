import {
  InwardRequestService
} from "./chunk-FK5JIMV6.js";
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
  ɵɵtextInterpolate
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/inward-requests/inward-request-view/inward-request-view.component.ts
function InwardRequestViewComponent_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.request.request_number);
  }
}
function InwardRequestViewComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
function InwardRequestViewComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "dl", 10)(2, "dt");
    \u0275\u0275text(3, "Request Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dd");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "dt");
    \u0275\u0275text(7, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "dd");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "dt");
    \u0275\u0275text(11, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "dd");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "dt");
    \u0275\u0275text(15, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "dd", 11);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "dt");
    \u0275\u0275text(19, "Requested By");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "dd");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "dt");
    \u0275\u0275text(23, "Assigned To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "dd");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "dt");
    \u0275\u0275text(27, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "dd")(29, "span", 12);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "dt");
    \u0275\u0275text(32, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "dd");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 13)(36, "button", 14);
    \u0275\u0275listener("click", function InwardRequestViewComponent_div_6_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.back());
    });
    \u0275\u0275text(37, "Back");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.request.request_number || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.request.request_type || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.request.request_title || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.request.request_description || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.request.requested_by_name || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.request.assigned_to_name || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.request.status || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.request.created_at || "-");
  }
}
function InwardRequestViewComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, "Request not found.");
    \u0275\u0275elementEnd();
  }
}
var InwardRequestViewComponent = class _InwardRequestViewComponent {
  inwardRequestService;
  toast;
  router;
  route;
  request = null;
  loading = true;
  constructor(inwardRequestService, toast, router, route) {
    this.inwardRequestService = inwardRequestService;
    this.toast = toast;
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.inwardRequestService.getInwardRequest(+id).subscribe({
        next: (res) => {
          this.loading = false;
          if (res.status === "success" && res.data?.request)
            this.request = res.data.request;
        },
        error: () => {
          this.loading = false;
          this.toast.show("Error loading inward request", "error");
          this.router.navigate(["/app/inward-requests/list"]);
        }
      });
    } else {
      this.loading = false;
      this.router.navigate(["/app/inward-requests/list"]);
    }
  }
  back() {
    this.router.navigate(["/app/inward-requests/list"]);
  }
  static \u0275fac = function InwardRequestViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InwardRequestViewComponent)(\u0275\u0275directiveInject(InwardRequestService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InwardRequestViewComponent, selectors: [["app-inward-request-view"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 4, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], ["class", "page-subtitle", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "detail-card", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "page-subtitle"], [1, "loading-state"], [1, "detail-card"], [1, "detail-list"], [1, "notes"], [1, "badge", "badge-info"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], [1, "empty-state"]], template: function InwardRequestViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Inward Request Details");
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, InwardRequestViewComponent_p_4_Template, 2, 1, "p", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, InwardRequestViewComponent_div_5_Template, 2, 0, "div", 4)(6, InwardRequestViewComponent_div_6_Template, 38, 8, "div", 5)(7, InwardRequestViewComponent_div_7_Template, 2, 0, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.request);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.request);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.request);
    }
  }, dependencies: [CommonModule, NgIf, RouterModule], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.detail-card[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n.detail-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 140px 1fr;\n  gap: 0.5rem 1rem;\n}\n.detail-list[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #555;\n}\n.detail-list[_ngcontent-%COMP%]   dd.notes[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\n.form-actions[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n}\n/*# sourceMappingURL=inward-request-view.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InwardRequestViewComponent, { className: "InwardRequestViewComponent", filePath: "src\\app\\modules\\inward-requests\\inward-request-view\\inward-request-view.component.ts", lineNumber: 14 });
})();
export {
  InwardRequestViewComponent
};
//# sourceMappingURL=chunk-Z3O7UHRQ.js.map
