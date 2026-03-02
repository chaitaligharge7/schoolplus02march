import {
  ReceptionistService
} from "./chunk-5XKVDBLM.js";
import {
  ClassService
} from "./chunk-23QP2TAM.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-DC2DSRDW.js";
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
  NgClass,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/receptionist/receptionist-inquiry-edit/receptionist-inquiry-edit.component.ts
function ReceptionistInquiryEditComponent_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Enquiry ID: ", ctx_r0.inquiry.enquiry_number || "INQ-" + ctx_r0.inquiry.inquiry_id, "");
  }
}
function ReceptionistInquiryEditComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
function ReceptionistInquiryEditComponent_div_9_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "button", 19);
    \u0275\u0275listener("click", function ReceptionistInquiryEditComponent_div_9_div_26_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.markPicked());
    });
    \u0275\u0275text(2, "Mark as Picked");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.saving);
  }
}
function ReceptionistInquiryEditComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11);
    \u0275\u0275text(2, "Visitor details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12)(4, "div", 13)(5, "div", 14)(6, "strong");
    \u0275\u0275text(7, "Visitor:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 14)(10, "strong");
    \u0275\u0275text(11, "Phone:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 14)(14, "strong");
    \u0275\u0275text(15, "Purpose:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 14)(18, "strong");
    \u0275\u0275text(19, "Person to meet:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 15)(22, "strong");
    \u0275\u0275text(23, "Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 16);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(26, ReceptionistInquiryEditComponent_div_9_div_26_Template, 3, 1, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r0.inquiry.visitor_name, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.inquiry.visitor_phone, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.inquiry.purpose, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.inquiry.person_to_meet, "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r0.inquiry.status === "resolved" ? "bg-success" : ctx_r0.inquiry.status === "picked" ? "bg-success" : "bg-info");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.inquiry.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.inquiry.status === "forwarded");
  }
}
function ReceptionistInquiryEditComponent_div_10_option_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275property("value", c_r4.user_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", c_r4.full_name, "", c_r4.stream ? " (" + c_r4.stream + ")" : "", "");
  }
}
function ReceptionistInquiryEditComponent_div_10_option_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275property("value", c_r5.class_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r5.class_name);
  }
}
function ReceptionistInquiryEditComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 11);
    \u0275\u0275text(2, "Convert to Lead & Assign Counselor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12)(4, "div", 21)(5, "div", 14)(6, "label", 22);
    \u0275\u0275text(7, "Counselor ");
    \u0275\u0275elementStart(8, "span", 23);
    \u0275\u0275text(9, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "select", 24);
    \u0275\u0275twoWayListener("ngModelChange", function ReceptionistInquiryEditComponent_div_10_Template_select_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.convertForm.counselor_id, $event) || (ctx_r0.convertForm.counselor_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(11, "option", 25);
    \u0275\u0275text(12, "Select counselor");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ReceptionistInquiryEditComponent_div_10_option_13_Template, 2, 3, "option", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 14)(15, "label", 22);
    \u0275\u0275text(16, "Student / Visitor name ");
    \u0275\u0275elementStart(17, "span", 23);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function ReceptionistInquiryEditComponent_div_10_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.convertForm.student_name, $event) || (ctx_r0.convertForm.student_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 14)(21, "label", 22);
    \u0275\u0275text(22, "Parent name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function ReceptionistInquiryEditComponent_div_10_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.convertForm.parent_name, $event) || (ctx_r0.convertForm.parent_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 14)(25, "label", 22);
    \u0275\u0275text(26, "Mobile ");
    \u0275\u0275elementStart(27, "span", 23);
    \u0275\u0275text(28, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function ReceptionistInquiryEditComponent_div_10_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.convertForm.mobile, $event) || (ctx_r0.convertForm.mobile = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 14)(31, "label", 22);
    \u0275\u0275text(32, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function ReceptionistInquiryEditComponent_div_10_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.convertForm.email, $event) || (ctx_r0.convertForm.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 14)(35, "label", 22);
    \u0275\u0275text(36, "Interested class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "select", 31);
    \u0275\u0275twoWayListener("ngModelChange", function ReceptionistInquiryEditComponent_div_10_Template_select_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.convertForm.interested_class_id, $event) || (ctx_r0.convertForm.interested_class_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(38, "option", 25);
    \u0275\u0275text(39, "Select class");
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, ReceptionistInquiryEditComponent_div_10_option_40_Template, 2, 2, "option", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 14)(42, "label", 22);
    \u0275\u0275text(43, "Source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function ReceptionistInquiryEditComponent_div_10_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.convertForm.enquiry_source, $event) || (ctx_r0.convertForm.enquiry_source = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 15)(46, "label", 22);
    \u0275\u0275text(47, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function ReceptionistInquiryEditComponent_div_10_Template_input_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.convertForm.address, $event) || (ctx_r0.convertForm.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 15)(50, "label", 22);
    \u0275\u0275text(51, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "textarea", 34);
    \u0275\u0275twoWayListener("ngModelChange", function ReceptionistInquiryEditComponent_div_10_Template_textarea_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.convertForm.remarks, $event) || (ctx_r0.convertForm.remarks = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(53, "button", 35);
    \u0275\u0275listener("click", function ReceptionistInquiryEditComponent_div_10_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.convertToLead());
    });
    \u0275\u0275text(54, "Convert to Lead & Assign");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.convertForm.counselor_id);
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.counselors);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.convertForm.student_name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.convertForm.parent_name);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.convertForm.mobile);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.convertForm.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.convertForm.interested_class_id);
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.classes);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.convertForm.enquiry_source);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.convertForm.address);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.convertForm.remarks);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.saving);
  }
}
var ReceptionistInquiryEditComponent = class _ReceptionistInquiryEditComponent {
  route;
  router;
  receptionist;
  classService;
  toast;
  inquiry = null;
  loading = false;
  saving = false;
  counselors = [];
  classes = [];
  convertForm = {
    counselor_id: null,
    student_name: "",
    parent_name: "",
    mobile: "",
    email: "",
    address: "",
    interested_class_id: null,
    enquiry_source: "walk-in",
    remarks: ""
  };
  constructor(route, router, receptionist, classService, toast) {
    this.route = route;
    this.router = router;
    this.receptionist = receptionist;
    this.classService = classService;
    this.toast = toast;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.loadInquiry(+id);
      this.loadCounselors();
      this.loadClasses();
    }
  }
  loadInquiry(id) {
    this.loading = true;
    this.receptionist.getInquiry(id).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === "success" && res.data?.inquiry) {
          this.inquiry = res.data.inquiry;
          this.convertForm.student_name = this.inquiry.visitor_name || "";
          this.convertForm.mobile = this.inquiry.visitor_phone || "";
        }
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error loading inquiry", "error");
      }
    });
  }
  loadCounselors() {
    this.receptionist.getCounselors().subscribe({
      next: (res) => {
        if (res.status === "success" && res.data?.counselors) {
          this.counselors = res.data.counselors;
        }
      }
    });
  }
  loadClasses() {
    this.classService.getClasses().subscribe({
      next: (res) => {
        if (res.status === "success" && res.data?.classes) {
          this.classes = res.data.classes || [];
        }
      }
    });
  }
  markPicked() {
    if (!this.inquiry?.inquiry_id)
      return;
    this.saving = true;
    this.receptionist.markPicked(this.inquiry.inquiry_id).subscribe({
      next: (res) => {
        this.saving = false;
        if (res.status === "success") {
          this.toast.show("Marked as picked", "success");
          this.inquiry.status = "picked";
        } else {
          this.toast.show(res.message || "Error", "error");
        }
      },
      error: () => {
        this.saving = false;
        this.toast.show("Error", "error");
      }
    });
  }
  convertToLead() {
    if (!this.inquiry?.inquiry_id)
      return;
    if (!this.convertForm.counselor_id) {
      this.toast.show("Please select a counselor", "error");
      return;
    }
    if (!this.convertForm.student_name?.trim()) {
      this.toast.show("Student/Visitor name is required", "error");
      return;
    }
    if (!this.convertForm.mobile?.trim()) {
      this.toast.show("Mobile is required", "error");
      return;
    }
    this.saving = true;
    this.receptionist.convertToLead({
      inquiry_id: this.inquiry.inquiry_id,
      counselor_id: this.convertForm.counselor_id,
      student_name: this.convertForm.student_name,
      parent_name: this.convertForm.parent_name || void 0,
      mobile: this.convertForm.mobile,
      email: this.convertForm.email || void 0,
      address: this.convertForm.address || void 0,
      interested_class_id: this.convertForm.interested_class_id || void 0,
      enquiry_source: this.convertForm.enquiry_source,
      remarks: this.convertForm.remarks || void 0
    }).subscribe({
      next: (res) => {
        this.saving = false;
        if (res.status === "success") {
          this.toast.show("Converted to lead and assigned to counselor", "success");
          this.router.navigate(["/app/receptionist/inquiries"]);
        } else {
          this.toast.show(res.message || "Error", "error");
        }
      },
      error: () => {
        this.saving = false;
        this.toast.show("Error converting to lead", "error");
      }
    });
  }
  back() {
    this.router.navigate(["/app/receptionist/inquiries"]);
  }
  static \u0275fac = function ReceptionistInquiryEditComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReceptionistInquiryEditComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ReceptionistService), \u0275\u0275directiveInject(ClassService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReceptionistInquiryEditComponent, selectors: [["app-receptionist-inquiry-edit"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 4, consts: [[1, "page-container"], [1, "page-header", "d-flex", "justify-content-between", "align-items-center"], [1, "page-title"], ["class", "page-subtitle", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["class", "text-center py-5", 4, "ngIf"], ["class", "card mb-4", 4, "ngIf"], ["class", "card", 4, "ngIf"], [1, "page-subtitle"], [1, "text-center", "py-5"], [1, "card", "mb-4"], [1, "card-header"], [1, "card-body"], [1, "row"], [1, "col-md-6"], [1, "col-md-12"], [1, "badge", 3, "ngClass"], ["class", "card-footer", 4, "ngIf"], [1, "card-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], [1, "card"], [1, "row", "g-2", "mb-2"], [1, "form-label"], [1, "text-danger"], ["name", "counselor_id", 1, "form-select", 3, "ngModelChange", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "name", "student_name", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "parent_name", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "mobile", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "interested_class_id", 1, "form-select", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "enquiry_source", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "address", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "remarks", "rows", "2", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "btn-success", 3, "click", "disabled"]], template: function ReceptionistInquiryEditComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Inquiry Details");
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, ReceptionistInquiryEditComponent_p_5_Template, 2, 1, "p", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 4);
      \u0275\u0275listener("click", function ReceptionistInquiryEditComponent_Template_button_click_6_listener() {
        return ctx.back();
      });
      \u0275\u0275text(7, "Back to List");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, ReceptionistInquiryEditComponent_div_8_Template, 2, 0, "div", 5)(9, ReceptionistInquiryEditComponent_div_9_Template, 27, 7, "div", 6)(10, ReceptionistInquiryEditComponent_div_10_Template, 55, 14, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.inquiry);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.inquiry);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.inquiry && ctx.inquiry.status !== "resolved");
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule], styles: ["\n\n.page-header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n/*# sourceMappingURL=receptionist-inquiry-edit.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReceptionistInquiryEditComponent, { className: "ReceptionistInquiryEditComponent", filePath: "src\\app\\modules\\receptionist\\receptionist-inquiry-edit\\receptionist-inquiry-edit.component.ts", lineNumber: 16 });
})();
export {
  ReceptionistInquiryEditComponent
};
//# sourceMappingURL=chunk-WOBDO5AD.js.map
