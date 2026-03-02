import {
  SyllabusService
} from "./chunk-QT36LC3Q.js";
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
  ɵɵtextInterpolate1
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/syllabus/syllabus-view/syllabus-view.component.ts
var _c0 = (a0) => ["/app/syllabus/edit", a0];
function SyllabusViewComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function SyllabusViewComponent_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadSyllabus());
    });
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275text(2, " Download ");
    \u0275\u0275elementEnd();
  }
}
function SyllabusViewComponent_a_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275text(2, " Edit ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c0, ctx_r1.syllabus == null ? null : ctx_r1.syllabus.syllabus_id));
  }
}
function SyllabusViewComponent_div_13_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "label");
    \u0275\u0275text(2, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.syllabus.syllabus_description);
  }
}
function SyllabusViewComponent_div_13_div_33_div_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2, "Estimated:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "dateFormat");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const chapter_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, chapter_r3.estimated_completion_date), " ");
  }
}
function SyllabusViewComponent_div_13_div_33_div_4_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2, "Completed:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "dateFormat");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const chapter_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, chapter_r3.actual_completion_date), " ");
  }
}
function SyllabusViewComponent_div_13_div_33_div_4_div_11_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "strong");
    \u0275\u0275text(2, "Remarks:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const chapter_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", chapter_r3.completion_data.remarks, " ");
  }
}
function SyllabusViewComponent_div_13_div_33_div_4_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SyllabusViewComponent_div_13_div_33_div_4_div_11_div_3_Template, 4, 1, "div", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const chapter_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Completion: ", chapter_r3.completion_data.completion_percentage, "% ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", chapter_r3.completion_data.remarks);
  }
}
function SyllabusViewComponent_div_13_div_33_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "div", 26);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 27);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 28);
    \u0275\u0275template(9, SyllabusViewComponent_div_13_div_33_div_4_div_9_Template, 5, 3, "div", 29)(10, SyllabusViewComponent_div_13_div_33_div_4_div_10_Template, 5, 3, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, SyllabusViewComponent_div_13_div_33_div_4_div_11_Template, 4, 2, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const chapter_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Chapter ", chapter_r3.chapter_number, "");
    \u0275\u0275advance();
    \u0275\u0275classProp("badge-success", chapter_r3.completion_status === "completed")("badge-warning", chapter_r3.completion_status === "in_progress")("badge-danger", chapter_r3.completion_status === "delayed")("badge-secondary", chapter_r3.completion_status === "pending");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", chapter_r3.completion_status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(chapter_r3.chapter_name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", chapter_r3.estimated_completion_date);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", chapter_r3.actual_completion_date);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", chapter_r3.completion_data);
  }
}
function SyllabusViewComponent_div_13_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 22);
    \u0275\u0275template(4, SyllabusViewComponent_div_13_div_33_div_4_Template, 12, 14, "div", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Chapters (", ctx_r1.syllabus.chapters.length, ")");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.syllabus.chapters);
  }
}
function SyllabusViewComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "h3");
    \u0275\u0275text(3, "Basic Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16)(5, "div", 17)(6, "label");
    \u0275\u0275text(7, "Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 17)(11, "label");
    \u0275\u0275text(12, "Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 17)(16, "label");
    \u0275\u0275text(17, "Academic Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 17)(21, "label");
    \u0275\u0275text(22, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p")(24, "span", 18);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "div", 19)(27, "label");
    \u0275\u0275text(28, "Syllabus Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p")(30, "strong");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(32, SyllabusViewComponent_div_13_div_32_Template, 5, 1, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, SyllabusViewComponent_div_13_div_33_Template, 5, 2, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.syllabus.class_name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.syllabus.subject_name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.syllabus.academic_year_name);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("badge-success", ctx_r1.syllabus.status === "active")("badge-secondary", ctx_r1.syllabus.status !== "active");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.syllabus.status, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.syllabus.syllabus_title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.syllabus.syllabus_description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.syllabus.chapters && ctx_r1.syllabus.chapters.length > 0);
  }
}
function SyllabusViewComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "div", 36);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading syllabus...");
    \u0275\u0275elementEnd()();
  }
}
var SyllabusViewComponent = class _SyllabusViewComponent {
  route;
  router;
  syllabusService;
  toastService;
  syllabus = null;
  isLoading = false;
  constructor(route, router, syllabusService, toastService) {
    this.route = route;
    this.router = router;
    this.syllabusService = syllabusService;
    this.toastService = toastService;
  }
  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    if (id) {
      this.loadSyllabus(+id);
    }
  }
  loadSyllabus(id) {
    this.isLoading = true;
    this.syllabusService.getSyllabusById(id).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.status === "success" && response.data) {
          this.syllabus = response.data.syllabus;
        }
      },
      error: () => {
        this.isLoading = false;
        this.toastService.show("Error loading syllabus", "error");
      }
    });
  }
  downloadSyllabus() {
    if (this.syllabus?.syllabus_file) {
      const path = this.syllabus.syllabus_file;
      const url = path.startsWith("http") ? path : `${environment.apiUrl}/download.php?file=${encodeURIComponent(path)}`;
      window.open(url, "_blank");
    }
  }
  static \u0275fac = function SyllabusViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SyllabusViewComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SyllabusService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SyllabusViewComponent, selectors: [["app-syllabus-view"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 4, consts: [[1, "syllabus-view-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions"], ["class", "btn btn-secondary", 3, "click", 4, "ngIf"], ["class", "btn btn-primary", 3, "routerLink", 4, "ngIf"], [1, "btn", "btn-secondary", 3, "click"], [1, "bi", "bi-arrow-left"], ["class", "details-card", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], [1, "bi", "bi-download"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "bi", "bi-pencil"], [1, "details-card"], [1, "details-section"], [1, "details-grid"], [1, "detail-item"], [1, "badge"], [1, "detail-item", "full-width"], ["class", "detail-item full-width", 4, "ngIf"], ["class", "details-section", 4, "ngIf"], [1, "chapters-list"], ["class", "chapter-card", 4, "ngFor", "ngForOf"], [1, "chapter-card"], [1, "chapter-header"], [1, "chapter-number"], [1, "chapter-name"], [1, "chapter-dates"], [4, "ngIf"], ["class", "chapter-completion", 4, "ngIf"], [1, "chapter-completion"], [1, "completion-percentage"], ["class", "completion-remarks", 4, "ngIf"], [1, "completion-remarks"], [1, "loading-state"], [1, "spinner"]], template: function SyllabusViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Syllabus Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "View syllabus information and completion status");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4);
      \u0275\u0275template(8, SyllabusViewComponent_button_8_Template, 3, 0, "button", 5)(9, SyllabusViewComponent_a_9_Template, 3, 3, "a", 6);
      \u0275\u0275elementStart(10, "button", 7);
      \u0275\u0275listener("click", function SyllabusViewComponent_Template_button_click_10_listener() {
        return ctx.router.navigate(["/app/syllabus"]);
      });
      \u0275\u0275element(11, "i", 8);
      \u0275\u0275text(12, " Back ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(13, SyllabusViewComponent_div_13_Template, 34, 11, "div", 9)(14, SyllabusViewComponent_div_14_Template, 4, 0, "div", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.syllabus == null ? null : ctx.syllabus.syllabus_file);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.syllabus);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.syllabus);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DateFormatPipe, RouterModule, RouterLink], styles: ["\n\n.syllabus-view-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.syllabus-view-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n}\n.syllabus-view-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  margin: 0 0 8px 0;\n  color: var(--text-primary);\n}\n.syllabus-view-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n  margin: 0;\n}\n.syllabus-view-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.syllabus-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.syllabus-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid var(--border-color);\n}\n.syllabus-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n}\n.syllabus-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 20px 0;\n  color: var(--text-primary);\n}\n.syllabus-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 16px;\n}\n.syllabus-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 6px;\n}\n.syllabus-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-primary);\n  margin: 0;\n}\n.syllabus-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.syllabus-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .chapters-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 16px;\n}\n.syllabus-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .chapters-list[_ngcontent-%COMP%]   .chapter-card[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  padding: 20px;\n  border-radius: 8px;\n  border-left: 4px solid var(--primary-color);\n}\n.syllabus-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .chapters-list[_ngcontent-%COMP%]   .chapter-card[_ngcontent-%COMP%]   .chapter-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.syllabus-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .chapters-list[_ngcontent-%COMP%]   .chapter-card[_ngcontent-%COMP%]   .chapter-header[_ngcontent-%COMP%]   .chapter-number[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.syllabus-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .chapters-list[_ngcontent-%COMP%]   .chapter-card[_ngcontent-%COMP%]   .chapter-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 12px;\n}\n.syllabus-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .chapters-list[_ngcontent-%COMP%]   .chapter-card[_ngcontent-%COMP%]   .chapter-dates[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n  margin-bottom: 12px;\n}\n.syllabus-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .chapters-list[_ngcontent-%COMP%]   .chapter-card[_ngcontent-%COMP%]   .chapter-dates[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.syllabus-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .chapters-list[_ngcontent-%COMP%]   .chapter-card[_ngcontent-%COMP%]   .chapter-completion[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  border-top: 1px solid var(--border-color);\n}\n.syllabus-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .chapters-list[_ngcontent-%COMP%]   .chapter-card[_ngcontent-%COMP%]   .chapter-completion[_ngcontent-%COMP%]   .completion-percentage[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--primary-color);\n  margin-bottom: 8px;\n}\n.syllabus-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .chapters-list[_ngcontent-%COMP%]   .chapter-card[_ngcontent-%COMP%]   .chapter-completion[_ngcontent-%COMP%]   .completion-remarks[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.syllabus-view-container[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.syllabus-view-container[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid var(--border-color);\n  border-top-color: var(--primary-color);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n.syllabus-view-container[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=syllabus-view.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SyllabusViewComponent, { className: "SyllabusViewComponent", filePath: "src\\app\\modules\\syllabus\\syllabus-view\\syllabus-view.component.ts", lineNumber: 16 });
})();
export {
  SyllabusViewComponent
};
//# sourceMappingURL=chunk-P7WVUUA6.js.map
