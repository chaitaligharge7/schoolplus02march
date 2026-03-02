import {
  AdmissionService
} from "./chunk-VRHYYXZA.js";
import {
  DateFormatPipe
} from "./chunk-FN4NGQWM.js";
import {
  DialogService
} from "./chunk-UPFK65KQ.js";
import "./chunk-6W4TS6AE.js";
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/admissions/admission-view/admission-view.component.ts
function AdmissionViewComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function AdmissionViewComponent_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.print());
    });
    \u0275\u0275element(1, "i", 12);
    \u0275\u0275text(2, " Print ");
    \u0275\u0275elementEnd();
  }
}
function AdmissionViewComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function AdmissionViewComponent_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.approveAdmission("approve"));
    });
    \u0275\u0275element(1, "i", 14);
    \u0275\u0275text(2, " Approve ");
    \u0275\u0275elementEnd();
  }
}
function AdmissionViewComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function AdmissionViewComponent_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.approveAdmission("reject"));
    });
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275text(2, " Reject ");
    \u0275\u0275elementEnd();
  }
}
function AdmissionViewComponent_div_14_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "label");
    \u0275\u0275text(2, "Related Enquiry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.admission.enquiry_number);
  }
}
function AdmissionViewComponent_div_14_div_83_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "i", 31);
    \u0275\u0275elementStart(2, "a", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const doc_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("href", doc_r5, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(doc_r5.split("/").pop());
  }
}
function AdmissionViewComponent_div_14_div_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "h3");
    \u0275\u0275text(2, "Documents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 28);
    \u0275\u0275template(4, AdmissionViewComponent_div_14_div_83_div_4_Template, 4, 2, "div", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.admission.documents);
  }
}
function AdmissionViewComponent_div_14_div_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "h3");
    \u0275\u0275text(2, "Admission Form");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 28)(4, "div", 30);
    \u0275\u0275element(5, "i", 31);
    \u0275\u0275elementStart(6, "a", 32);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("href", ctx_r1.admission.admission_form_file, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.admission.admission_form_file.split("/").pop(), " ");
  }
}
function AdmissionViewComponent_div_14_div_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "h3");
    \u0275\u0275text(2, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.admission.remarks);
  }
}
function AdmissionViewComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "h1", 19);
    \u0275\u0275text(3, "ADMISSION FORM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 21)(7, "h3");
    \u0275\u0275text(8, "Admission Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 22)(10, "div", 23)(11, "label");
    \u0275\u0275text(12, "Admission Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p")(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 23)(17, "label");
    \u0275\u0275text(18, "Academic Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 23)(22, "label");
    \u0275\u0275text(23, "Applied Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 23)(27, "label");
    \u0275\u0275text(28, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p")(30, "span", 24);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(32, AdmissionViewComponent_div_14_div_32_Template, 5, 1, "div", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 21)(34, "h3");
    \u0275\u0275text(35, "Student Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 22)(37, "div", 23)(38, "label");
    \u0275\u0275text(39, "Student Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "p")(41, "strong");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 23)(44, "label");
    \u0275\u0275text(45, "Date of Birth");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "p");
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "dateFormat");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 23)(50, "label");
    \u0275\u0275text(51, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "p");
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 23)(55, "label");
    \u0275\u0275text(56, "Previous School");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "p");
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(59, "div", 21)(60, "h3");
    \u0275\u0275text(61, "Parent Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 22)(63, "div", 23)(64, "label");
    \u0275\u0275text(65, "Parent Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "p");
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 23)(69, "label");
    \u0275\u0275text(70, "Parent Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "p");
    \u0275\u0275text(72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 23)(74, "label");
    \u0275\u0275text(75, "Parent Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "p");
    \u0275\u0275text(77);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 26)(79, "label");
    \u0275\u0275text(80, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "p");
    \u0275\u0275text(82);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(83, AdmissionViewComponent_div_14_div_83_Template, 5, 1, "div", 27)(84, AdmissionViewComponent_div_14_div_84_Template, 8, 2, "div", 27)(85, AdmissionViewComponent_div_14_div_85_Template, 5, 1, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("Admission No: ", ctx_r1.admission.admission_number, " \xB7 ", ctx_r1.admission.academic_year_name, "");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.admission.admission_number);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.admission.academic_year_name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.admission.applied_class_name);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("badge-success", ctx_r1.admission.approval_status === "approved")("badge-warning", ctx_r1.admission.approval_status === "pending")("badge-danger", ctx_r1.admission.approval_status === "rejected");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.admission.approval_status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.admission.enquiry_number);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.admission.student_name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 24, ctx_r1.admission.date_of_birth));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.admission.gender);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.admission.previous_school || "-");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.admission.parent_name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.admission.parent_mobile);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.admission.parent_email || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.admission.address || "-");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.admission.documents && ctx_r1.admission.documents.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.admission.admission_form_file);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.admission.remarks);
  }
}
function AdmissionViewComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275element(1, "div", 34);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading admission...");
    \u0275\u0275elementEnd()();
  }
}
var AdmissionViewComponent = class _AdmissionViewComponent {
  route;
  router;
  admissionService;
  dialogService;
  toastService;
  admission = null;
  isLoading = false;
  constructor(route, router, admissionService, dialogService, toastService) {
    this.route = route;
    this.router = router;
    this.admissionService = admissionService;
    this.dialogService = dialogService;
    this.toastService = toastService;
  }
  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    if (id) {
      this.loadAdmission(+id);
    }
  }
  loadAdmission(id) {
    this.isLoading = true;
    this.admissionService.getAdmission(id).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.status === "success" && response.data) {
          this.admission = response.data.admission;
          if (this.admission.documents && typeof this.admission.documents === "string") {
            try {
              this.admission.documents = JSON.parse(this.admission.documents);
            } catch (e) {
              this.admission.documents = [];
            }
          }
          if (typeof window !== "undefined" && window.location.hash === "#print") {
            setTimeout(() => this.print(), 600);
          }
        }
      },
      error: () => {
        this.isLoading = false;
        this.toastService.show("Error loading admission", "error");
      }
    });
  }
  print() {
    window.print();
  }
  approveAdmission(action) {
    const actionText = action === "approve" ? "approve" : "reject";
    this.dialogService.confirm(`${actionText.charAt(0).toUpperCase() + actionText.slice(1)} Admission`, `Are you sure you want to ${actionText} this admission?`, actionText.charAt(0).toUpperCase() + actionText.slice(1), "Cancel").subscribe((confirmed) => {
      if (confirmed) {
        this.admissionService.approveAdmission(this.admission.admission_id, action).subscribe({
          next: (response) => {
            if (response.status === "success") {
              this.toastService.show(`Admission ${actionText}d successfully`, "success");
              this.loadAdmission(this.admission.admission_id);
            }
          },
          error: () => {
            this.toastService.show(`Error ${actionText}ing admission`, "error");
          }
        });
      }
    });
  }
  static \u0275fac = function AdmissionViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdmissionViewComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AdmissionService), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdmissionViewComponent, selectors: [["app-admission-view"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 5, consts: [[1, "admission-view-container"], [1, "page-header", "no-print"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions"], ["class", "btn btn-secondary", 3, "click", 4, "ngIf"], ["class", "btn btn-success", 3, "click", 4, "ngIf"], ["class", "btn btn-danger", 3, "click", 4, "ngIf"], [1, "btn", "btn-secondary", 3, "click"], [1, "bi", "bi-arrow-left"], ["class", "details-card print-document admission-print", "id", "admission-print", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], [1, "bi", "bi-printer"], [1, "btn", "btn-success", 3, "click"], [1, "bi", "bi-check-circle"], [1, "btn", "btn-danger", 3, "click"], [1, "bi", "bi-x-circle"], ["id", "admission-print", 1, "details-card", "print-document", "admission-print"], [1, "print-header", "admission-print-header"], [1, "print-title"], [1, "print-subtitle"], [1, "details-section"], [1, "details-grid"], [1, "detail-item"], [1, "badge"], ["class", "detail-item", 4, "ngIf"], [1, "detail-item", "full-width"], ["class", "details-section", 4, "ngIf"], [1, "documents-list"], ["class", "document-item", 4, "ngFor", "ngForOf"], [1, "document-item"], [1, "bi", "bi-file-earmark-pdf"], ["target", "_blank", 1, "document-link", 3, "href"], [1, "loading-state"], [1, "spinner"]], template: function AdmissionViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Admission Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "View admission information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4);
      \u0275\u0275template(8, AdmissionViewComponent_button_8_Template, 3, 0, "button", 5)(9, AdmissionViewComponent_button_9_Template, 3, 0, "button", 6)(10, AdmissionViewComponent_button_10_Template, 3, 0, "button", 7);
      \u0275\u0275elementStart(11, "button", 8);
      \u0275\u0275listener("click", function AdmissionViewComponent_Template_button_click_11_listener() {
        return ctx.router.navigate(["/app/admissions"]);
      });
      \u0275\u0275element(12, "i", 9);
      \u0275\u0275text(13, " Back ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(14, AdmissionViewComponent_div_14_Template, 86, 26, "div", 10)(15, AdmissionViewComponent_div_15_Template, 4, 0, "div", 11);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.admission);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.admission && ctx.admission.approval_status === "pending");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.admission && ctx.admission.approval_status === "pending");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.admission);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DateFormatPipe], styles: ["\n\n.admission-view-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.admission-view-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n}\n.admission-view-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  margin: 0 0 8px 0;\n  color: var(--text-primary);\n}\n.admission-view-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n  margin: 0;\n}\n.admission-view-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.admission-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.admission-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid var(--border-color);\n}\n.admission-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n}\n.admission-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 20px 0;\n  color: var(--text-primary);\n}\n.admission-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n.admission-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 6px;\n}\n.admission-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-primary);\n  margin: 0;\n}\n.admission-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.admission-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .documents-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.admission-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .documents-list[_ngcontent-%COMP%]   .document-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background: var(--bg-secondary);\n  border-radius: 6px;\n}\n.admission-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .documents-list[_ngcontent-%COMP%]   .document-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--primary-color);\n}\n.admission-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .documents-list[_ngcontent-%COMP%]   .document-item[_ngcontent-%COMP%]   .document-link[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  text-decoration: none;\n  font-size: 14px;\n}\n.admission-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .documents-list[_ngcontent-%COMP%]   .document-item[_ngcontent-%COMP%]   .document-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.admission-view-container[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.admission-view-container[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid var(--border-color);\n  border-top-color: var(--primary-color);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n.admission-view-container[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n}\n.admission-print-header[_ngcontent-%COMP%] {\n  text-align: center;\n  border-bottom: 2px solid var(--primary-color);\n  padding-bottom: 12px;\n  margin-bottom: 20px;\n}\n.admission-print-header[_ngcontent-%COMP%]   .print-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0 0 4px 0;\n  color: var(--text-primary);\n}\n.admission-print-header[_ngcontent-%COMP%]   .print-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n  margin: 0;\n}\n@media print {\n  .admission-view-container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .admission-print[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%] {\n    break-inside: avoid;\n  }\n  .admission-print-header[_ngcontent-%COMP%] {\n    border-bottom-color: #1f2937;\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=admission-view.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdmissionViewComponent, { className: "AdmissionViewComponent", filePath: "src\\app\\modules\\admissions\\admission-view\\admission-view.component.ts", lineNumber: 16 });
})();
export {
  AdmissionViewComponent
};
//# sourceMappingURL=chunk-FUXRVP2I.js.map
