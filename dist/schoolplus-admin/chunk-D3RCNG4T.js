import {
  CounselorService
} from "./chunk-4NB4NAU4.js";
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

// src/app/modules/counselor/lead-view/lead-view.component.ts
function LeadViewComponent_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Enquiry #", ctx_r0.lead.enquiry_number || ctx_r0.lead.enquiry_id, "");
  }
}
function LeadViewComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
function LeadViewComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "h3");
    \u0275\u0275text(3, "Enquiry / Student");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dl")(5, "dt");
    \u0275\u0275text(6, "Student Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "dd");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "dt");
    \u0275\u0275text(10, "Parent Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "dd");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "dt");
    \u0275\u0275text(14, "Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "dd");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "dt");
    \u0275\u0275text(18, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "dd");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "dt");
    \u0275\u0275text(22, "Enquiry Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "dd");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "dt");
    \u0275\u0275text(26, "Enquiry Source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "dd");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "dt");
    \u0275\u0275text(30, "Conversion Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "dd");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 12)(34, "h3");
    \u0275\u0275text(35, "Lead / Follow-up");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "dl")(37, "dt");
    \u0275\u0275text(38, "Lead Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "dd")(40, "span", 13);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "dt");
    \u0275\u0275text(43, "Campus Tour Done");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "dd");
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "dt");
    \u0275\u0275text(47, "Fee Discussion Done");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "dd");
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "dt");
    \u0275\u0275text(51, "Career Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "dd", 14);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "div", 15)(55, "button", 16);
    \u0275\u0275listener("click", function LeadViewComponent_div_9_Template_button_click_55_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.back());
    });
    \u0275\u0275text(56, "Back to List");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "button", 17);
    \u0275\u0275listener("click", function LeadViewComponent_div_9_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goEdit());
    });
    \u0275\u0275text(58, "Edit Lead");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.lead.student_name || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.lead.parent_name || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.lead.mobile || ctx_r0.lead.contact_phone || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.lead.email || ctx_r0.lead.contact_email || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.lead.enquiry_date || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.lead.enquiry_source || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.lead.conversion_status || "-");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.lead.lead_status || "new");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.lead.campus_tour_done ? "Yes" : "No");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.lead.fee_discussion_done ? "Yes" : "No");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.lead.career_notes || "-");
  }
}
function LeadViewComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1, "No lead data.");
    \u0275\u0275elementEnd();
  }
}
var LeadViewComponent = class _LeadViewComponent {
  counselor;
  toast;
  router;
  route;
  lead = null;
  loading = true;
  constructor(counselor, toast, router, route) {
    this.counselor = counselor;
    this.toast = toast;
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.counselor.getLead(+id).subscribe({
        next: (res) => {
          this.loading = false;
          if (res.status === "success" && res.data?.lead)
            this.lead = res.data.lead;
          else
            this.toast.show("Lead not found", "error");
        },
        error: () => {
          this.loading = false;
          this.toast.show("Error loading lead", "error");
          this.router.navigate(["/app/counselor/leads"]);
        }
      });
    } else {
      this.loading = false;
      this.router.navigate(["/app/counselor/leads"]);
    }
  }
  goEdit() {
    if (this.lead?.enquiry_id)
      this.router.navigate(["/app/counselor/leads/edit", this.lead.enquiry_id]);
  }
  back() {
    this.router.navigate(["/app/counselor/leads"]);
  }
  static \u0275fac = function LeadViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LeadViewComponent)(\u0275\u0275directiveInject(CounselorService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeadViewComponent, selectors: [["app-lead-view"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 4, consts: [[1, "page-container"], [1, "page-header"], ["type", "button", 1, "btn", "btn-outline", "btn-back", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "page-title"], ["class", "page-subtitle", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "detail-card", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "page-subtitle"], [1, "loading-state"], [1, "detail-card"], [1, "detail-section"], [1, "badge", "badge-info"], [1, "notes"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "empty-state"]], template: function LeadViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function LeadViewComponent_Template_button_click_2_listener() {
        return ctx.back();
      });
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275text(4, " Back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1", 4);
      \u0275\u0275text(6, "Lead Details");
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, LeadViewComponent_p_7_Template, 2, 1, "p", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, LeadViewComponent_div_8_Template, 2, 0, "div", 6)(9, LeadViewComponent_div_9_Template, 59, 11, "div", 7)(10, LeadViewComponent_div_10_Template, 2, 0, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.lead);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.lead);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.lead);
    }
  }, dependencies: [CommonModule, NgIf, RouterModule], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.btn-back[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.detail-card[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin-top: 1rem;\n}\n.detail-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.detail-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  font-size: 1rem;\n}\n.detail-section[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 140px 1fr;\n  gap: 0.25rem 1rem;\n}\n.detail-section[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: #666;\n}\n.detail-section[_ngcontent-%COMP%]   dd.notes[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: 1rem;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n}\n/*# sourceMappingURL=lead-view.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeadViewComponent, { className: "LeadViewComponent", filePath: "src\\app\\modules\\counselor\\lead-view\\lead-view.component.ts", lineNumber: 14 });
})();
export {
  LeadViewComponent
};
//# sourceMappingURL=chunk-D3RCNG4T.js.map
