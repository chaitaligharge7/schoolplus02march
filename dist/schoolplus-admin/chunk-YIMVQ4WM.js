import {
  ReceptionistService
} from "./chunk-5XKVDBLM.js";
import {
  ToastService
} from "./chunk-FQ6RWLG3.js";
import {
  RouterLink,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/receptionist/receptionist-dashboard/receptionist-dashboard.component.ts
var _c0 = () => ({ status: "forwarded" });
var _c1 = () => ({ status: "resolved" });
function ReceptionistDashboardComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
function ReceptionistDashboardComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "a", 15)(2, "span", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 17);
    \u0275\u0275text(5, "Today's Inquiries");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "a", 18)(7, "span", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 17);
    \u0275\u0275text(10, "Pending Assignments");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "a", 18)(12, "span", 16);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 17);
    \u0275\u0275text(15, "Completed Assignments");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "a", 19)(17, "span", 16);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 17);
    \u0275\u0275text(20, "Total Enquiries");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_3_0;
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r0.stats.today_inquiries) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(6, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r0.stats.pending_assignments) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(7, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_5_0 = ctx_r0.stats.completed_assignments) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_6_0 = ctx_r0.stats.total_enquiries) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : 0);
  }
}
var ReceptionistDashboardComponent = class _ReceptionistDashboardComponent {
  receptionist;
  toast;
  stats = null;
  loading = true;
  constructor(receptionist, toast) {
    this.receptionist = receptionist;
    this.toast = toast;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.receptionist.getDashboardStats().subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === "success" && res.data?.stats)
          this.stats = res.data.stats;
        else
          this.stats = { today_inquiries: 0, pending_assignments: 0, completed_assignments: 0, total_enquiries: 0 };
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error loading dashboard", "error");
      }
    });
  }
  static \u0275fac = function ReceptionistDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReceptionistDashboardComponent)(\u0275\u0275directiveInject(ReceptionistService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReceptionistDashboardComponent, selectors: [["app-receptionist-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 2, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["class", "loading", 4, "ngIf"], ["class", "dashboard-cards", 4, "ngIf"], [1, "quick-links"], [1, "links"], ["routerLink", "/app/receptionist/inquiries", 1, "btn", "btn-outline"], ["routerLink", "/app/enquiries/list", 1, "btn", "btn-outline"], ["routerLink", "/app/counselor/leads", 1, "btn", "btn-outline"], ["routerLink", "/app/visitors/list", 1, "btn", "btn-outline"], ["routerLink", "/app/documents/list", 1, "btn", "btn-outline"], [1, "loading"], [1, "dashboard-cards"], ["routerLink", "/app/receptionist/inquiries", 1, "card"], [1, "card-value"], [1, "card-label"], ["routerLink", "/app/receptionist/inquiries", 1, "card", 3, "queryParams"], ["routerLink", "/app/enquiries/list", 1, "card"]], template: function ReceptionistDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Receptionist Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Today's inquiries and assignments overview");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, ReceptionistDashboardComponent_div_6_Template, 2, 0, "div", 4)(7, ReceptionistDashboardComponent_div_7_Template, 21, 8, "div", 5);
      \u0275\u0275elementStart(8, "div", 6)(9, "h3");
      \u0275\u0275text(10, "Quick Links");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 7)(12, "a", 8);
      \u0275\u0275text(13, "Inquiry Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "a", 9);
      \u0275\u0275text(15, "Enquiries (Lead Conversion)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "a", 10);
      \u0275\u0275text(17, "Counselor Assignment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "a", 11);
      \u0275\u0275text(19, "Visitor Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "a", 12);
      \u0275\u0275text(21, "Documentation");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.stats);
    }
  }, dependencies: [CommonModule, NgIf, RouterModule, RouterLink], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.loading[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n}\n.dashboard-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n.dashboard-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  background: var(--bg-secondary);\n  border-radius: 8px;\n  text-decoration: none;\n  color: inherit;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.dashboard-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.card-value[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n}\n.card-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n  margin-top: 0.25rem;\n}\n.quick-links[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n.quick-links[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n/*# sourceMappingURL=receptionist-dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReceptionistDashboardComponent, { className: "ReceptionistDashboardComponent", filePath: "src\\app\\modules\\receptionist\\receptionist-dashboard\\receptionist-dashboard.component.ts", lineNumber: 14 });
})();
export {
  ReceptionistDashboardComponent
};
//# sourceMappingURL=chunk-YIMVQ4WM.js.map
