import "./chunk-FU4SC7MH.js";
import {
  MarksheetService
} from "./chunk-55M5MP7M.js";
import {
  DateFormatPipe
} from "./chunk-FN4NGQWM.js";
import {
  ToastService
} from "./chunk-FQ6RWLG3.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-GXY6YLNG.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  environment,
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
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/marksheets/marksheet-view/marksheet-view.component.ts
var _c0 = (a0) => ["/app/marksheets/edit", a0];
function MarksheetViewComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function MarksheetViewComponent_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.print());
    });
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275text(2, " Print ");
    \u0275\u0275elementEnd();
  }
}
function MarksheetViewComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function MarksheetViewComponent_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadMarksheet());
    });
    \u0275\u0275element(1, "i", 12);
    \u0275\u0275text(2, " Download ");
    \u0275\u0275elementEnd();
  }
}
function MarksheetViewComponent_a_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 13);
    \u0275\u0275element(1, "i", 14);
    \u0275\u0275text(2, " Edit ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c0, ctx_r1.marksheet == null ? null : ctx_r1.marksheet.marksheet_id));
  }
}
function MarksheetViewComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "h1", 30);
    \u0275\u0275text(2, "MARKSHEET");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r1.marksheet.academic_year_name, " \xB7 ", ctx_r1.marksheet.examination_name, "");
  }
}
function MarksheetViewComponent_div_14_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22);
    \u0275\u0275text(2, "Rank");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.marksheet.rank);
  }
}
function MarksheetViewComponent_div_14_div_77_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 34);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const result_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(result_r4.subject_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(result_r4.marks_obtained);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(result_r4.max_marks);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(result_r4.grade);
  }
}
function MarksheetViewComponent_div_14_div_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "h3");
    \u0275\u0275text(2, "Subject-wise Results");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "table", 32)(4, "thead")(5, "tr")(6, "th");
    \u0275\u0275text(7, "Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Marks Obtained");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Max Marks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Grade");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, MarksheetViewComponent_div_14_div_77_tr_15_Template, 10, 4, "tr", 33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r1.marksheet.subject_results);
  }
}
function MarksheetViewComponent_div_14_div_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "label");
    \u0275\u0275text(2, "Sent to Parent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275element(4, "i", 35);
    \u0275\u0275text(5, " Yes");
    \u0275\u0275elementEnd()();
  }
}
function MarksheetViewComponent_div_14_div_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "label");
    \u0275\u0275text(2, "Sent via WhatsApp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275element(4, "i", 36);
    \u0275\u0275text(5, " Yes");
    \u0275\u0275elementEnd()();
  }
}
function MarksheetViewComponent_div_14_div_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "label");
    \u0275\u0275text(2, "Sent At");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "dateFormat");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, ctx_r1.marksheet.sent_at));
  }
}
function MarksheetViewComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, MarksheetViewComponent_div_14_div_1_Template, 5, 2, "div", 16);
    \u0275\u0275elementStart(2, "div", 17)(3, "h3");
    \u0275\u0275text(4, "Student Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "div", 19)(7, "label");
    \u0275\u0275text(8, "Student Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 19)(12, "label");
    \u0275\u0275text(13, "Admission Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 19)(17, "label");
    \u0275\u0275text(18, "Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 19)(22, "label");
    \u0275\u0275text(23, "Academic Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "div", 17)(27, "h3");
    \u0275\u0275text(28, "Examination Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 18)(30, "div", 19)(31, "label");
    \u0275\u0275text(32, "Examination");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 19)(36, "label");
    \u0275\u0275text(37, "Examination Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 19)(41, "label");
    \u0275\u0275text(42, "Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "p");
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "dateFormat");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 19)(47, "label");
    \u0275\u0275text(48, "End Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "p");
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "dateFormat");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(52, "div", 17)(53, "h3");
    \u0275\u0275text(54, "Marks Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 20)(56, "div", 21)(57, "div", 22);
    \u0275\u0275text(58, "Total Marks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 23);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 21)(62, "div", 22);
    \u0275\u0275text(63, "Obtained Marks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 23);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 21)(67, "div", 22);
    \u0275\u0275text(68, "Percentage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 23);
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 21)(72, "div", 22);
    \u0275\u0275text(73, "Grade");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div", 24);
    \u0275\u0275text(75);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(76, MarksheetViewComponent_div_14_div_76_Template, 5, 1, "div", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(77, MarksheetViewComponent_div_14_div_77_Template, 16, 1, "div", 26);
    \u0275\u0275elementStart(78, "div", 17)(79, "h3");
    \u0275\u0275text(80, "Status Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "div", 18)(82, "div", 19)(83, "label");
    \u0275\u0275text(84, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "p")(86, "span", 27);
    \u0275\u0275text(87);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(88, MarksheetViewComponent_div_14_div_88_Template, 6, 0, "div", 28)(89, MarksheetViewComponent_div_14_div_89_Template, 6, 0, "div", 28)(90, MarksheetViewComponent_div_14_div_90_Template, 6, 3, "div", 28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.marksheet);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate2("", ctx_r1.marksheet.first_name, " ", ctx_r1.marksheet.last_name, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.marksheet.admission_number);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.marksheet.class_name, " ", ctx_r1.marksheet.section_name, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.marksheet.academic_year_name);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.marksheet.examination_name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.marksheet.examination_code);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 27, ctx_r1.marksheet.start_date));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 29, ctx_r1.marksheet.end_date));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.marksheet.total_marks);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.marksheet.obtained_marks);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.marksheet.percentage, "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.marksheet.grade);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.marksheet.rank);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.marksheet.subject_results && ctx_r1.marksheet.subject_results.length > 0);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("badge-success", ctx_r1.marksheet.status === "sent")("badge-warning", ctx_r1.marksheet.status === "published")("badge-secondary", ctx_r1.marksheet.status === "draft");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.marksheet.status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.marksheet.sent_to_parent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.marksheet.sent_via_whatsapp);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.marksheet.sent_at);
  }
}
function MarksheetViewComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275element(1, "div", 38);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading marksheet...");
    \u0275\u0275elementEnd()();
  }
}
var MarksheetViewComponent = class _MarksheetViewComponent {
  route;
  router;
  marksheetService;
  toastService;
  marksheet = null;
  isLoading = false;
  constructor(route, router, marksheetService, toastService) {
    this.route = route;
    this.router = router;
    this.marksheetService = marksheetService;
    this.toastService = toastService;
  }
  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    if (id) {
      this.loadMarksheet(+id);
    }
  }
  loadMarksheet(id) {
    this.isLoading = true;
    this.marksheetService.getMarksheet(id).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.status === "success" && response.data) {
          this.marksheet = response.data.marksheet;
          if (typeof window !== "undefined" && window.location.hash === "#print") {
            setTimeout(() => this.print(), 600);
          }
        }
      },
      error: () => {
        this.isLoading = false;
        this.toastService.show("Error loading marksheet", "error");
      }
    });
  }
  downloadMarksheet() {
    if (this.marksheet?.marksheet_file) {
      const path = this.marksheet.marksheet_file;
      const url = path.startsWith("http") ? path : `${environment.apiUrl}/download.php?file=${encodeURIComponent(path)}`;
      window.open(url, "_blank");
    }
  }
  print() {
    window.print();
  }
  static \u0275fac = function MarksheetViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MarksheetViewComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MarksheetService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MarksheetViewComponent, selectors: [["app-marksheet-view"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 5, consts: [[1, "marksheet-view-container"], [1, "page-header", "no-print"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions"], ["class", "btn btn-secondary", 3, "click", 4, "ngIf"], ["class", "btn btn-primary", 3, "routerLink", 4, "ngIf"], [1, "btn", "btn-secondary", 3, "click"], [1, "bi", "bi-arrow-left"], ["class", "details-card print-document marksheet-print", "id", "marksheet-print", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], [1, "bi", "bi-printer"], [1, "bi", "bi-download"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "bi", "bi-pencil"], ["id", "marksheet-print", 1, "details-card", "print-document", "marksheet-print"], ["class", "print-header marksheet-print-header", 4, "ngIf"], [1, "details-section"], [1, "details-grid"], [1, "detail-item"], [1, "marks-summary"], [1, "mark-card"], [1, "mark-label"], [1, "mark-value"], [1, "mark-value", "badge", "badge-info"], ["class", "mark-card", 4, "ngIf"], ["class", "details-section", 4, "ngIf"], [1, "badge"], ["class", "detail-item", 4, "ngIf"], [1, "print-header", "marksheet-print-header"], [1, "print-title"], [1, "print-subtitle"], [1, "subject-table"], [4, "ngFor", "ngForOf"], [1, "badge", "badge-info"], [1, "bi", "bi-check-circle", "text-success"], [1, "bi", "bi-whatsapp", "text-success"], [1, "loading-state"], [1, "spinner"]], template: function MarksheetViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Marksheet Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "View marksheet information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4);
      \u0275\u0275template(8, MarksheetViewComponent_button_8_Template, 3, 0, "button", 5)(9, MarksheetViewComponent_button_9_Template, 3, 0, "button", 5)(10, MarksheetViewComponent_a_10_Template, 3, 3, "a", 6);
      \u0275\u0275elementStart(11, "button", 7);
      \u0275\u0275listener("click", function MarksheetViewComponent_Template_button_click_11_listener() {
        return ctx.router.navigate(["/app/marksheets"]);
      });
      \u0275\u0275element(12, "i", 8);
      \u0275\u0275text(13, " Back ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(14, MarksheetViewComponent_div_14_Template, 91, 31, "div", 9)(15, MarksheetViewComponent_div_15_Template, 4, 0, "div", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.marksheet);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.marksheet == null ? null : ctx.marksheet.marksheet_file);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.marksheet);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.marksheet);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DateFormatPipe, RouterModule, RouterLink], styles: ["\n\n.marksheet-view-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.marksheet-view-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n}\n.marksheet-view-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  margin: 0 0 8px 0;\n  color: var(--text-primary);\n}\n.marksheet-view-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n  margin: 0;\n}\n.marksheet-view-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.marksheet-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.marksheet-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid var(--border-color);\n}\n.marksheet-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n}\n.marksheet-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 20px 0;\n  color: var(--text-primary);\n}\n.marksheet-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n.marksheet-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 6px;\n}\n.marksheet-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-primary);\n  margin: 0;\n}\n.marksheet-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .marks-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 16px;\n}\n.marksheet-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .marks-summary[_ngcontent-%COMP%]   .mark-card[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  padding: 20px;\n  border-radius: 8px;\n  text-align: center;\n}\n.marksheet-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .marks-summary[_ngcontent-%COMP%]   .mark-card[_ngcontent-%COMP%]   .mark-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  margin-bottom: 8px;\n  text-transform: uppercase;\n}\n.marksheet-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .marks-summary[_ngcontent-%COMP%]   .mark-card[_ngcontent-%COMP%]   .mark-value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.marksheet-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .subject-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.marksheet-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .subject-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: var(--bg-secondary);\n}\n.marksheet-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .subject-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: left;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.marksheet-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .subject-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-color);\n}\n.marksheet-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .subject-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: var(--bg-secondary);\n}\n.marksheet-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .subject-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.marksheet-view-container[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.marksheet-view-container[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid var(--border-color);\n  border-top-color: var(--primary-color);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n.marksheet-view-container[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n}\n.marksheet-print-header[_ngcontent-%COMP%] {\n  text-align: center;\n  border-bottom: 2px solid var(--primary-color);\n  padding-bottom: 12px;\n  margin-bottom: 20px;\n}\n.marksheet-print-header[_ngcontent-%COMP%]   .print-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0 0 4px 0;\n  color: var(--text-primary);\n}\n.marksheet-print-header[_ngcontent-%COMP%]   .print-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n  margin: 0;\n}\n@media print {\n  .marksheet-view-container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .marksheet-print[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%] {\n    break-inside: avoid;\n    border-bottom-color: #e5e7eb;\n  }\n  .marksheet-print[_ngcontent-%COMP%]   .subject-table[_ngcontent-%COMP%] {\n    font-size: 10pt;\n  }\n  .marksheet-print[_ngcontent-%COMP%]   .subject-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .marksheet-print[_ngcontent-%COMP%]   .subject-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 6px 8px;\n    border: 1px solid #d1d5db;\n  }\n  .marksheet-print[_ngcontent-%COMP%]   .subject-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background: #f3f4f6 !important;\n  }\n  .marksheet-print-header[_ngcontent-%COMP%] {\n    border-bottom-color: #1f2937;\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=marksheet-view.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MarksheetViewComponent, { className: "MarksheetViewComponent", filePath: "src\\app\\modules\\marksheets\\marksheet-view\\marksheet-view.component.ts", lineNumber: 17 });
})();
export {
  MarksheetViewComponent
};
//# sourceMappingURL=chunk-F6DRGT5C.js.map
