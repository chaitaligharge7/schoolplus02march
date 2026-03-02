import {
  AdmissionService
} from "./chunk-VRHYYXZA.js";
import {
  LeaveManagementService
} from "./chunk-QUQ26OR6.js";
import {
  ToastService
} from "./chunk-FQ6RWLG3.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-GXY6YLNG.js";
import {
  CommonModule,
  NgForOf,
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
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate4
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/pages/approvals/approvals.component.ts
var _c0 = (a0) => ["/app/admissions/view", a0];
function ApprovalsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
function ApprovalsComponent_ul_11_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12)(4, "button", 13);
    \u0275\u0275listener("click", function ApprovalsComponent_ul_11_li_1_Template_button_click_4_listener() {
      const l_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.approveLeave(l_r2.leave_id));
    });
    \u0275\u0275text(5, "Approve");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 14);
    \u0275\u0275listener("click", function ApprovalsComponent_ul_11_li_1_Template_button_click_6_listener() {
      const l_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.rejectLeave(l_r2.leave_id));
    });
    \u0275\u0275text(7, "Reject");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const l_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate4("", l_r2.staff_name || "Staff", " - ", l_r2.leave_type, " (", l_r2.start_date, " to ", l_r2.end_date, ")");
  }
}
function ApprovalsComponent_ul_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 10);
    \u0275\u0275template(1, ApprovalsComponent_ul_11_li_1_Template, 8, 4, "li", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.pendingLeaves);
  }
}
function ApprovalsComponent_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "No pending leave requests");
    \u0275\u0275elementEnd();
  }
}
function ApprovalsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
function ApprovalsComponent_ul_17_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 16);
    \u0275\u0275text(4, "View");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", a_r4.student_name || ((a_r4.first_name || "") + " " + (a_r4.last_name || "")).trim() || "Admission", " - ", a_r4.applied_class_name || "Class", "");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c0, a_r4.admission_id));
  }
}
function ApprovalsComponent_ul_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 10);
    \u0275\u0275template(1, ApprovalsComponent_ul_17_li_1_Template, 5, 5, "li", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.pendingAdmissions);
  }
}
function ApprovalsComponent_p_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "No pending admissions");
    \u0275\u0275elementEnd();
  }
}
var ApprovalsComponent = class _ApprovalsComponent {
  leaveService;
  admissionService;
  toast;
  pendingLeaves = [];
  pendingAdmissions = [];
  loadingLeaves = false;
  loadingAdmissions = false;
  constructor(leaveService, admissionService, toast) {
    this.leaveService = leaveService;
    this.admissionService = admissionService;
    this.toast = toast;
  }
  ngOnInit() {
    this.loadPendingLeaves();
    this.loadPendingAdmissions();
  }
  loadPendingLeaves() {
    this.loadingLeaves = true;
    this.leaveService.getLeaves({ status: "pending", limit: 20 }).subscribe({
      next: (res) => {
        this.loadingLeaves = false;
        if (res.status === "success" && res.data?.leaves)
          this.pendingLeaves = res.data.leaves;
      },
      error: () => {
        this.loadingLeaves = false;
      }
    });
  }
  loadPendingAdmissions() {
    this.loadingAdmissions = true;
    this.admissionService.getAdmissions({ approval_status: "pending", limit: 20 }).subscribe({
      next: (res) => {
        this.loadingAdmissions = false;
        if (res.status === "success" && res.data?.admissions)
          this.pendingAdmissions = res.data.admissions || [];
      },
      error: () => {
        this.loadingAdmissions = false;
      }
    });
  }
  approveLeave(leaveId) {
    this.leaveService.updateLeave({ leave_id: leaveId, status: "approved" }).subscribe({
      next: (res) => {
        if (res.status === "success") {
          this.toast.show("Leave approved", "success");
          this.loadPendingLeaves();
        }
      },
      error: () => this.toast.show("Error", "error")
    });
  }
  rejectLeave(leaveId) {
    this.leaveService.updateLeave({ leave_id: leaveId, status: "rejected" }).subscribe({
      next: (res) => {
        if (res.status === "success") {
          this.toast.show("Leave rejected", "success");
          this.loadPendingLeaves();
        }
      },
      error: () => this.toast.show("Error", "error")
    });
  }
  static \u0275fac = function ApprovalsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApprovalsComponent)(\u0275\u0275directiveInject(LeaveManagementService), \u0275\u0275directiveInject(AdmissionService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApprovalsComponent, selectors: [["app-approvals"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 6, consts: [[1, "approvals-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "cards-grid"], [1, "card"], ["class", "loading", 4, "ngIf"], ["class", "list", 4, "ngIf"], ["class", "empty", 4, "ngIf"], [1, "loading"], [1, "list"], [4, "ngFor", "ngForOf"], [1, "actions"], ["type", "button", 1, "btn", "btn-sm", "btn-success", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "empty"], [1, "btn", "btn-sm", "btn-outline", 3, "routerLink"]], template: function ApprovalsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Approvals Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Pending leave and admission approvals");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "h3");
      \u0275\u0275text(9, "Pending Leave Requests");
      \u0275\u0275elementEnd();
      \u0275\u0275template(10, ApprovalsComponent_div_10_Template, 2, 0, "div", 6)(11, ApprovalsComponent_ul_11_Template, 2, 1, "ul", 7)(12, ApprovalsComponent_p_12_Template, 2, 0, "p", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 5)(14, "h3");
      \u0275\u0275text(15, "Pending Admissions");
      \u0275\u0275elementEnd();
      \u0275\u0275template(16, ApprovalsComponent_div_16_Template, 2, 0, "div", 6)(17, ApprovalsComponent_ul_17_Template, 2, 1, "ul", 7)(18, ApprovalsComponent_p_18_Template, 2, 0, "p", 8);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.loadingLeaves);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingLeaves && ctx.pendingLeaves.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingLeaves && !ctx.pendingLeaves.length);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.loadingAdmissions);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingAdmissions && ctx.pendingAdmissions.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingAdmissions && !ctx.pendingAdmissions.length);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink], styles: ["\n\n.approvals-container[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n  gap: 1.5rem;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  padding: 1.5rem;\n  border-radius: 8px;\n}\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 1rem 0;\n  font-size: 1.1rem;\n}\n.list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 0;\n  border-bottom: 1px solid var(--border-color);\n}\n.list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.loading[_ngcontent-%COMP%], \n.empty[_ngcontent-%COMP%] {\n  padding: 1rem;\n  color: var(--text-secondary);\n}\n/*# sourceMappingURL=approvals.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApprovalsComponent, { className: "ApprovalsComponent", filePath: "src\\app\\pages\\approvals\\approvals.component.ts", lineNumber: 15 });
})();
export {
  ApprovalsComponent
};
//# sourceMappingURL=chunk-O6RV72TU.js.map
