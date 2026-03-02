import {
  AdmissionService
} from "./chunk-VRHYYXZA.js";
import {
  EnquiryService
} from "./chunk-LNSIZNL3.js";
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
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/enquiries/enquiry-view/enquiry-view.component.ts
var _c0 = (a0) => ["/app/enquiries/edit", a0];
function EnquiryViewComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function EnquiryViewComponent_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.convertToAdmission());
    });
    \u0275\u0275element(1, "i", 12);
    \u0275\u0275text(2, " Convert to Admission ");
    \u0275\u0275elementEnd();
  }
}
function EnquiryViewComponent_a_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 13);
    \u0275\u0275element(1, "i", 14);
    \u0275\u0275text(2, " Edit ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c0, ctx_r1.enquiry == null ? null : ctx_r1.enquiry.enquiry_id));
  }
}
function EnquiryViewComponent_div_13_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "label");
    \u0275\u0275text(2, "Follow-up Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "dateFormat");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, ctx_r1.enquiry.follow_up_date));
  }
}
function EnquiryViewComponent_div_13_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "label");
    \u0275\u0275text(2, "Follow-up Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.enquiry.follow_up_notes);
  }
}
function EnquiryViewComponent_div_13_div_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "label");
    \u0275\u0275text(2, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.enquiry.remarks);
  }
}
function EnquiryViewComponent_div_13_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "label");
    \u0275\u0275text(2, "Admission Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.enquiry.admission_number);
  }
}
function EnquiryViewComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "h3");
    \u0275\u0275text(3, "Student Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 17)(5, "div", 18)(6, "label");
    \u0275\u0275text(7, "Student Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p")(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 18)(12, "label");
    \u0275\u0275text(13, "Parent Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 18)(17, "label");
    \u0275\u0275text(18, "Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 18)(22, "label");
    \u0275\u0275text(23, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 19)(27, "label");
    \u0275\u0275text(28, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "div", 16)(32, "h3");
    \u0275\u0275text(33, "Enquiry Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 17)(35, "div", 18)(36, "label");
    \u0275\u0275text(37, "Enquiry Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p")(39, "strong");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 18)(42, "label");
    \u0275\u0275text(43, "Enquiry Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "p");
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "dateFormat");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 18)(48, "label");
    \u0275\u0275text(49, "Enquiry Source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "p")(51, "span", 20);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(53, "div", 18)(54, "label");
    \u0275\u0275text(55, "Interested Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "p");
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 18)(59, "label");
    \u0275\u0275text(60, "Conversion Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "p")(62, "span", 21);
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(64, EnquiryViewComponent_div_13_div_64_Template, 6, 3, "div", 22)(65, EnquiryViewComponent_div_13_div_65_Template, 5, 1, "div", 23)(66, EnquiryViewComponent_div_13_div_66_Template, 5, 1, "div", 23)(67, EnquiryViewComponent_div_13_div_67_Template, 6, 1, "div", 22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.enquiry.student_name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.enquiry.parent_name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.enquiry.mobile);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.enquiry.email || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.enquiry.address || "-");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.enquiry.enquiry_number);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 20, ctx_r1.enquiry.enquiry_date));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.enquiry.enquiry_source);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.enquiry.interested_class_name || "-");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("badge-success", ctx_r1.enquiry.conversion_status === "converted")("badge-warning", ctx_r1.enquiry.conversion_status === "pending")("badge-danger", ctx_r1.enquiry.conversion_status === "lost");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.enquiry.conversion_status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.enquiry.follow_up_date);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.enquiry.follow_up_notes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.enquiry.remarks);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.enquiry.admission_number);
  }
}
function EnquiryViewComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "div", 25);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading enquiry...");
    \u0275\u0275elementEnd()();
  }
}
var EnquiryViewComponent = class _EnquiryViewComponent {
  route;
  router;
  enquiryService;
  admissionService;
  toastService;
  enquiry = null;
  isLoading = false;
  constructor(route, router, enquiryService, admissionService, toastService) {
    this.route = route;
    this.router = router;
    this.enquiryService = enquiryService;
    this.admissionService = admissionService;
    this.toastService = toastService;
  }
  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    if (id) {
      this.loadEnquiry(+id);
    }
  }
  loadEnquiry(id) {
    this.isLoading = true;
    this.enquiryService.getEnquiry(id).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.status === "success" && response.data) {
          this.enquiry = response.data.enquiry;
        }
      },
      error: () => {
        this.isLoading = false;
        this.toastService.show("Error loading enquiry", "error");
      }
    });
  }
  convertToAdmission() {
    this.router.navigate(["/app/admissions/create"], {
      queryParams: { enquiry_id: this.enquiry.enquiry_id }
    });
  }
  static \u0275fac = function EnquiryViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EnquiryViewComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EnquiryService), \u0275\u0275directiveInject(AdmissionService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EnquiryViewComponent, selectors: [["app-enquiry-view"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 4, consts: [[1, "enquiry-view-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions"], ["class", "btn btn-success", 3, "click", 4, "ngIf"], ["class", "btn btn-primary", 3, "routerLink", 4, "ngIf"], [1, "btn", "btn-secondary", 3, "click"], [1, "bi", "bi-arrow-left"], ["class", "details-card", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], [1, "btn", "btn-success", 3, "click"], [1, "bi", "bi-check-circle"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "bi", "bi-pencil"], [1, "details-card"], [1, "details-section"], [1, "details-grid"], [1, "detail-item"], [1, "detail-item", "full-width"], [1, "badge", "badge-info"], [1, "badge"], ["class", "detail-item", 4, "ngIf"], ["class", "detail-item full-width", 4, "ngIf"], [1, "loading-state"], [1, "spinner"]], template: function EnquiryViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Enquiry Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "View enquiry information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4);
      \u0275\u0275template(8, EnquiryViewComponent_button_8_Template, 3, 0, "button", 5)(9, EnquiryViewComponent_a_9_Template, 3, 3, "a", 6);
      \u0275\u0275elementStart(10, "button", 7);
      \u0275\u0275listener("click", function EnquiryViewComponent_Template_button_click_10_listener() {
        return ctx.router.navigate(["/app/enquiries"]);
      });
      \u0275\u0275element(11, "i", 8);
      \u0275\u0275text(12, " Back ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(13, EnquiryViewComponent_div_13_Template, 68, 22, "div", 9)(14, EnquiryViewComponent_div_14_Template, 4, 0, "div", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.enquiry && ctx.enquiry.conversion_status === "pending");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.enquiry);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.enquiry);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgIf, DateFormatPipe, RouterModule, RouterLink], styles: ["\n\n.enquiry-view-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.enquiry-view-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n}\n.enquiry-view-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  margin: 0 0 8px 0;\n  color: var(--text-primary);\n}\n.enquiry-view-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n  margin: 0;\n}\n.enquiry-view-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.enquiry-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.enquiry-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid var(--border-color);\n}\n.enquiry-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n}\n.enquiry-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 20px 0;\n  color: var(--text-primary);\n}\n.enquiry-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n.enquiry-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 6px;\n}\n.enquiry-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-primary);\n  margin: 0;\n}\n.enquiry-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.enquiry-view-container[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.enquiry-view-container[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid var(--border-color);\n  border-top-color: var(--primary-color);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n.enquiry-view-container[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=enquiry-view.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EnquiryViewComponent, { className: "EnquiryViewComponent", filePath: "src\\app\\modules\\enquiries\\enquiry-view\\enquiry-view.component.ts", lineNumber: 16 });
})();
export {
  EnquiryViewComponent
};
//# sourceMappingURL=chunk-NH4ZXLS7.js.map
