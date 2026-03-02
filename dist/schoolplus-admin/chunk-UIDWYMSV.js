import {
  ComplaintService
} from "./chunk-JALG77HQ.js";
import "./chunk-LT2VDVRY.js";
import {
  FormsModule
} from "./chunk-DC2DSRDW.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-GXY6YLNG.js";
import {
  CommonModule,
  NgIf,
  TitleCasePipe,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/complaints/complaint-view/complaint-view.component.ts
function ComplaintViewComponent_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.complaint.title || "-");
  }
}
function ComplaintViewComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
function ComplaintViewComponent_div_6_button_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function ComplaintViewComponent_div_6_button_44_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.resolveComplaint());
    });
    \u0275\u0275text(1, " Resolve Complaint ");
    \u0275\u0275elementEnd();
  }
}
function ComplaintViewComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "dl", 10)(2, "dt");
    \u0275\u0275text(3, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dd");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "dt");
    \u0275\u0275text(7, "Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "dd");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "dt");
    \u0275\u0275text(11, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "dd", 11);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "dt");
    \u0275\u0275text(15, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "dd");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "dt");
    \u0275\u0275text(19, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "dd")(21, "span", 12);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "dt");
    \u0275\u0275text(25, "Priority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "dd");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "dt");
    \u0275\u0275text(30, "Assigned To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "dd");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "dt");
    \u0275\u0275text(34, "Created At");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "dd");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "dt");
    \u0275\u0275text(38, "Due Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "dd");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 13)(42, "button", 14);
    \u0275\u0275listener("click", function ComplaintViewComponent_div_6_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.back());
    });
    \u0275\u0275text(43, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275template(44, ComplaintViewComponent_div_6_button_44_Template, 2, 0, "button", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.complaint.complaint_id ? ctx_r0.complaint.complaint_id : "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.complaint.title ? ctx_r0.complaint.title : "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.complaint.description ? ctx_r0.complaint.description : "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.complaint.category_name ? ctx_r0.complaint.category_name : "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.complaint.status ? \u0275\u0275pipeBind1(23, 10, ctx_r0.complaint.status) : "-", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.complaint.priority ? \u0275\u0275pipeBind1(28, 12, ctx_r0.complaint.priority) : "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.complaint.assigned_to_name ? ctx_r0.complaint.assigned_to_name : "Unassigned");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.complaint.created_at ? ctx_r0.complaint.created_at : "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.complaint.due_date ? ctx_r0.complaint.due_date : "-");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.complaint.status !== "resolved" && ctx_r0.complaint.status !== "closed");
  }
}
function ComplaintViewComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, "Complaint not found.");
    \u0275\u0275elementEnd();
  }
}
var ComplaintViewComponent = class _ComplaintViewComponent {
  route;
  router;
  complaintService;
  complaintId;
  complaint;
  loading = true;
  constructor(route, router, complaintService) {
    this.route = route;
    this.router = router;
    this.complaintService = complaintService;
  }
  ngOnInit() {
    this.complaintId = Number(this.route.snapshot.paramMap.get("id"));
    if (!this.complaintId) {
      this.loading = false;
      this.complaint = null;
      return;
    }
    this.loadComplaint();
  }
  loadComplaint() {
    console.log("Loading complaint with ID:", this.complaintId);
    this.loading = true;
    this.complaintService.getComplaints().subscribe({
      next: (res) => {
        console.log("API response:", res);
        const complaints = res.data?.complaints || [];
        this.complaint = complaints.find((c) => c.complaint_id === this.complaintId) || null;
        console.log("Loaded complaint object:", this.complaint);
        this.loading = false;
      },
      error: (err) => {
        console.error("Failed to load complaint:", err);
        this.complaint = null;
        this.loading = false;
      }
    });
  }
  back() {
    this.router.navigate(["/app/complaints"]);
  }
  resolveComplaint() {
    if (!this.complaintId)
      return;
    this.complaintService.resolveComplaint(this.complaintId, {}).subscribe({
      next: () => {
        alert("Complaint resolved");
        this.loadComplaint();
      },
      error: (err) => console.error(err)
    });
  }
  static \u0275fac = function ComplaintViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComplaintViewComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ComplaintService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComplaintViewComponent, selectors: [["app-complaint-view"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 4, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], ["class", "page-subtitle", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "detail-card", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "page-subtitle"], [1, "loading-state"], [1, "detail-card"], [1, "detail-list"], [1, "notes"], [1, "badge", "badge-info"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "button", "class", "btn btn-success", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "empty-state"]], template: function ComplaintViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Complaint Details");
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, ComplaintViewComponent_p_4_Template, 2, 1, "p", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, ComplaintViewComponent_div_5_Template, 2, 0, "div", 4)(6, ComplaintViewComponent_div_6_Template, 45, 14, "div", 5)(7, ComplaintViewComponent_div_7_Template, 2, 0, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.complaint);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.complaint);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.complaint);
    }
  }, dependencies: [CommonModule, NgIf, TitleCasePipe, FormsModule, RouterModule], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.detail-card[_ngcontent-%COMP%] {\n  max-width: 600px;\n  background: #fff;\n  padding: 1.5rem;\n  border-radius: 6px;\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);\n  margin: auto;\n}\n.detail-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 140px 1fr;\n  gap: 0.5rem 1rem;\n}\n.detail-list[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #555;\n}\n.detail-list[_ngcontent-%COMP%]   dd.notes[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\n.form-actions[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  display: flex;\n  gap: 0.5rem;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n  font-size: 1.1rem;\n  color: #777;\n}\n/*# sourceMappingURL=complaint-view.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComplaintViewComponent, { className: "ComplaintViewComponent", filePath: "src\\app\\modules\\complaints\\complaint-view\\complaint-view.component.ts", lineNumber: 15 });
})();
export {
  ComplaintViewComponent
};
//# sourceMappingURL=chunk-UIDWYMSV.js.map
