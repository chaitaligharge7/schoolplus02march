import {
  ClassworkService
} from "./chunk-EFMPRXWF.js";
import {
  DateFormatPipe
} from "./chunk-FN4NGQWM.js";
import {
  ToastService
} from "./chunk-FQ6RWLG3.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-GXY6YLNG.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/classwork/classwork-view/classwork-view.component.ts
function ClassworkViewComponent_div_10_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "label");
    \u0275\u0275text(2, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.classwork.classwork_description);
  }
}
function ClassworkViewComponent_div_10_div_39_tr_19_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function ClassworkViewComponent_div_10_div_39_tr_19_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const submission_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.downloadFile(submission_r3.submission_file));
    });
    \u0275\u0275element(1, "i", 21);
    \u0275\u0275elementEnd();
  }
}
function ClassworkViewComponent_div_10_div_39_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "dateFormat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 18);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275template(15, ClassworkViewComponent_div_10_div_39_tr_19_button_15_Template, 2, 0, "button", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const submission_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", submission_r3.first_name, " ", submission_r3.last_name, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(submission_r3.admission_number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 13, submission_r3.submission_date));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("badge-success", submission_r3.completion_status === "completed")("badge-warning", submission_r3.completion_status === "submitted")("badge-secondary", submission_r3.completion_status === "pending");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", submission_r3.completion_status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(submission_r3.marks || "-");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", submission_r3.submission_file);
  }
}
function ClassworkViewComponent_div_10_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "table", 16)(4, "thead")(5, "tr")(6, "th");
    \u0275\u0275text(7, "Student Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Admission No.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Submission Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Marks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275template(19, ClassworkViewComponent_div_10_div_39_tr_19_Template, 16, 15, "tr", 17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Submissions (", ctx_r0.submissions.length, ")");
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r0.submissions);
  }
}
function ClassworkViewComponent_div_10_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "i", 23);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No submissions yet");
    \u0275\u0275elementEnd()();
  }
}
function ClassworkViewComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "h3");
    \u0275\u0275text(3, "Classwork Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10)(5, "div", 11)(6, "label");
    \u0275\u0275text(7, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p")(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 11)(12, "label");
    \u0275\u0275text(13, "Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 11)(17, "label");
    \u0275\u0275text(18, "Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 11)(22, "label");
    \u0275\u0275text(23, "Teacher");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 11)(27, "label");
    \u0275\u0275text(28, "Assigned Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "dateFormat");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 11)(33, "label");
    \u0275\u0275text(34, "Due Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p");
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "dateFormat");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(38, ClassworkViewComponent_div_10_div_38_Template, 5, 1, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, ClassworkViewComponent_div_10_div_39_Template, 20, 2, "div", 13)(40, ClassworkViewComponent_div_10_div_40_Template, 4, 0, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.classwork.classwork_title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r0.classwork.class_name, " ", ctx_r0.classwork.section_name, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.classwork.subject_name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r0.classwork.teacher_first_name, " ", ctx_r0.classwork.teacher_last_name, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 11, ctx_r0.classwork.assigned_date));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.classwork.due_date ? \u0275\u0275pipeBind1(37, 13, ctx_r0.classwork.due_date) : "-");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.classwork.classwork_description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.submissions.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.submissions.length === 0);
  }
}
function ClassworkViewComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "div", 25);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading classwork...");
    \u0275\u0275elementEnd()();
  }
}
var ClassworkViewComponent = class _ClassworkViewComponent {
  route;
  router;
  classworkService;
  toastService;
  classwork = null;
  submissions = [];
  isLoading = false;
  constructor(route, router, classworkService, toastService) {
    this.route = route;
    this.router = router;
    this.classworkService = classworkService;
    this.toastService = toastService;
  }
  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    if (id) {
      this.loadClasswork(+id);
      this.loadSubmissions(+id);
    }
  }
  loadClasswork(id) {
    this.isLoading = true;
    this.classworkService.getClasswork({}).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.status === "success" && response.data) {
          this.classwork = response.data.classwork.find((cw) => cw.classwork_id === id);
        }
      },
      error: () => {
        this.isLoading = false;
        this.toastService.show("Error loading classwork", "error");
      }
    });
  }
  loadSubmissions(classworkId) {
    this.classworkService.getSubmissions(classworkId).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.submissions = response.data.submissions || [];
        }
      }
    });
  }
  downloadFile(filePath) {
    if (filePath) {
      window.open(filePath, "_blank");
    }
  }
  static \u0275fac = function ClassworkViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClassworkViewComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ClassworkService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClassworkViewComponent, selectors: [["app-classwork-view"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 2, consts: [[1, "classwork-view-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "btn", "btn-secondary", 3, "click"], [1, "bi", "bi-arrow-left"], ["class", "details-card", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], [1, "details-card"], [1, "details-section"], [1, "details-grid"], [1, "detail-item"], ["class", "detail-item full-width", 4, "ngIf"], ["class", "details-section", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "detail-item", "full-width"], [1, "submissions-table"], [4, "ngFor", "ngForOf"], [1, "badge"], ["class", "btn-icon btn-view", "title", "Download", 3, "click", 4, "ngIf"], ["title", "Download", 1, "btn-icon", "btn-view", 3, "click"], [1, "bi", "bi-download"], [1, "empty-state"], [1, "bi", "bi-inbox"], [1, "loading-state"], [1, "spinner"]], template: function ClassworkViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Classwork Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "View classwork and submissions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275listener("click", function ClassworkViewComponent_Template_button_click_7_listener() {
        return ctx.router.navigate(["/app/classwork"]);
      });
      \u0275\u0275element(8, "i", 5);
      \u0275\u0275text(9, " Back ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, ClassworkViewComponent_div_10_Template, 41, 15, "div", 6)(11, ClassworkViewComponent_div_11_Template, 4, 0, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.classwork);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DateFormatPipe], styles: ["\n\n.classwork-view-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.classwork-view-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n}\n.classwork-view-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  margin: 0 0 8px 0;\n  color: var(--text-primary);\n}\n.classwork-view-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n  margin: 0;\n}\n.classwork-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.classwork-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid var(--border-color);\n}\n.classwork-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n}\n.classwork-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 20px 0;\n  color: var(--text-primary);\n}\n.classwork-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 16px;\n}\n.classwork-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 6px;\n}\n.classwork-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-primary);\n  margin: 0;\n}\n.classwork-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.classwork-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .submissions-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.classwork-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .submissions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: var(--bg-secondary);\n}\n.classwork-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .submissions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: left;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n  border-bottom: 2px solid var(--border-color);\n}\n.classwork-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .submissions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-color);\n  transition: background-color 0.2s;\n}\n.classwork-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .submissions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: var(--bg-secondary);\n}\n.classwork-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .submissions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.classwork-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n}\n.classwork-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: var(--text-secondary);\n  margin-bottom: 12px;\n}\n.classwork-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n}\n.classwork-view-container[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.classwork-view-container[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid var(--border-color);\n  border-top-color: var(--primary-color);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n.classwork-view-container[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=classwork-view.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClassworkViewComponent, { className: "ClassworkViewComponent", filePath: "src\\app\\modules\\classwork\\classwork-view\\classwork-view.component.ts", lineNumber: 15 });
})();
export {
  ClassworkViewComponent
};
//# sourceMappingURL=chunk-PRPP3KRN.js.map
