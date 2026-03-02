import {
  SecurityGuardService
} from "./chunk-XWWR65CX.js";
import {
  DepartmentService
} from "./chunk-5LNYQ26I.js";
import {
  TeacherService
} from "./chunk-T553C5NZ.js";
import {
  SearchSelectComponent
} from "./chunk-P7OLLKRL.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-DC2DSRDW.js";
import {
  ToastService
} from "./chunk-FQ6RWLG3.js";
import {
  Router,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTJ43J7W.js";
import {
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/modules/security-guard/inquiry-create/inquiry-create.component.ts
function InquiryCreateComponent_option_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pt_r1 = ctx.$implicit;
    \u0275\u0275property("value", pt_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pt_r1.label);
  }
}
function InquiryCreateComponent_input_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function InquiryCreateComponent_input_39_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.model.person_to_meet, $event) || (ctx_r2.model.person_to_meet = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.model.person_to_meet);
  }
}
var PURPOSE_TYPES = [
  { value: "", label: "Select purpose type" },
  { value: "admission", label: "Admission" },
  { value: "meeting", label: "Meeting" },
  { value: "delivery", label: "Delivery" },
  { value: "interview", label: "Interview" },
  { value: "event", label: "Event" },
  { value: "other", label: "Other" }
];
var InquiryCreateComponent = class _InquiryCreateComponent {
  sg;
  teacherService;
  departmentService;
  toast;
  router;
  model = {
    visitor_name: "",
    visitor_phone: "",
    visitor_id_type: "",
    visitor_id_number: "",
    purpose_type: "",
    purpose: "",
    person_to_meet: "",
    department: "",
    department_id: null
  };
  purposeTypes = PURPOSE_TYPES;
  teachers = [];
  departments = [];
  personToMeetOptions = [];
  departmentOptions = [];
  selectedPersonValue = null;
  selectedDepartmentValue = null;
  isPersonOther = false;
  loading = false;
  get teacherIdToTeacher() {
    const m = /* @__PURE__ */ new Map();
    this.teachers.forEach((t) => m.set(t.teacher_id, t));
    return m;
  }
  constructor(sg, teacherService, departmentService, toast, router) {
    this.sg = sg;
    this.teacherService = teacherService;
    this.departmentService = departmentService;
    this.toast = toast;
    this.router = router;
  }
  ngOnInit() {
    this.teacherService.getTeachers({ limit: 500 }).subscribe({
      next: (res) => {
        if (res?.status === "success" && res?.data?.teachers) {
          this.teachers = res.data.teachers;
          this.personToMeetOptions = [
            ...this.teachers.map((t) => ({ value: t.teacher_id, label: t.full_name || "" })),
            { value: "OTHER", label: "Other" }
          ];
        }
      }
    });
    this.departmentService.getDepartments().subscribe({
      next: (res) => {
        if (res?.status === "success" && res?.data?.departments) {
          this.departments = res.data.departments;
          this.departmentOptions = [
            { value: null, label: "Select department" },
            ...(this.departments || []).map((d) => ({
              value: d.department_id,
              label: d.department_name || ""
            }))
          ];
        }
      }
    });
  }
  onPersonSelect(val) {
    this.selectedPersonValue = val;
    if (val === "OTHER") {
      this.isPersonOther = true;
      this.model.person_to_meet = "";
      this.model.department = "";
      this.model.department_id = null;
      this.selectedDepartmentValue = null;
    } else if (val != null && typeof val === "number") {
      this.isPersonOther = false;
      const teacher = this.teacherIdToTeacher.get(val) || this.teachers.find((t) => t.teacher_id === val);
      if (teacher) {
        this.model.person_to_meet = teacher.full_name || "";
        const dept = this.departments.find((d) => d.department_id === teacher.department_id);
        if (dept) {
          this.model.department = dept.department_name || "";
          this.model.department_id = dept.department_id;
          this.selectedDepartmentValue = dept.department_id;
        }
      }
    }
  }
  onDepartmentSelect(val) {
    this.selectedDepartmentValue = val;
    if (val != null) {
      const dept = this.departments.find((d) => d.department_id === val);
      this.model.department = dept ? dept.department_name : String(val);
      this.model.department_id = dept ? dept.department_id : null;
    } else {
      this.model.department = "";
      this.model.department_id = null;
    }
  }
  save() {
    if (!this.model.visitor_name?.trim()) {
      this.toast.show("Visitor name is required", "error");
      return;
    }
    if (!this.model.purpose_type) {
      this.toast.show("Purpose type is required", "error");
      return;
    }
    if (this.isPersonOther && !this.model.person_to_meet?.trim()) {
      this.toast.show("Please enter person to meet (Other)", "error");
      return;
    }
    if (!this.isPersonOther && !this.model.person_to_meet?.trim()) {
      this.toast.show("Please select or enter person to meet", "error");
      return;
    }
    this.loading = true;
    const payload = __spreadValues({}, this.model);
    delete payload.department_id;
    this.sg.createInquiry(payload).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === "success") {
          this.toast.show("Inquiry registered successfully", "success");
          this.router.navigate(["/app/security-guard/inquiry/list"]);
        } else {
          this.toast.show(res.message || "Error", "error");
        }
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error registering inquiry", "error");
      }
    });
  }
  cancel() {
    this.router.navigate(["/app/security-guard/inquiry/list"]);
  }
  static \u0275fac = function InquiryCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InquiryCreateComponent)(\u0275\u0275directiveInject(SecurityGuardService), \u0275\u0275directiveInject(TeacherService), \u0275\u0275directiveInject(DepartmentService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InquiryCreateComponent, selectors: [["app-inquiry-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 49, vars: 14, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "form-card", 3, "ngSubmit"], [1, "form-row"], [1, "form-group"], ["type", "text", "name", "visitor_name", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "visitor_phone", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "visitor_id_type", "placeholder", "e.g. Aadhaar, Driving License", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "visitor_id_number", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "purpose_type", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "purpose", "rows", "2", "placeholder", "Optional details", 1, "form-control", 3, "ngModelChange", "ngModel"], ["placeholder", "Search or select teacher / Other", "name", "person_to_meet_select", 3, "ngModelChange", "valueChange", "options", "ngModel"], ["type", "text", "class", "form-control mt-2", "name", "person_to_meet_other", "placeholder", "Enter person name", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["placeholder", "Search or select department", "name", "department_select", 3, "ngModelChange", "valueChange", "options", "ngModel"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [3, "value"], ["type", "text", "name", "person_to_meet_other", "placeholder", "Enter person name", 1, "form-control", "mt-2", 3, "ngModelChange", "ngModel"]], template: function InquiryCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Register Inquiry");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Register a new visitor inquiry at the gate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "form", 4);
      \u0275\u0275listener("ngSubmit", function InquiryCreateComponent_Template_form_ngSubmit_6_listener() {
        return ctx.save();
      });
      \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "label");
      \u0275\u0275text(10, "Visitor Name *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function InquiryCreateComponent_Template_input_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.visitor_name, $event) || (ctx.model.visitor_name = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 6)(13, "label");
      \u0275\u0275text(14, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function InquiryCreateComponent_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.visitor_phone, $event) || (ctx.model.visitor_phone = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 5)(17, "div", 6)(18, "label");
      \u0275\u0275text(19, "ID Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function InquiryCreateComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.visitor_id_type, $event) || (ctx.model.visitor_id_type = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 6)(22, "label");
      \u0275\u0275text(23, "ID Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function InquiryCreateComponent_Template_input_ngModelChange_24_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.visitor_id_number, $event) || (ctx.model.visitor_id_number = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 6)(26, "label");
      \u0275\u0275text(27, "Purpose Type *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "select", 11);
      \u0275\u0275twoWayListener("ngModelChange", function InquiryCreateComponent_Template_select_ngModelChange_28_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.purpose_type, $event) || (ctx.model.purpose_type = $event);
        return $event;
      });
      \u0275\u0275template(29, InquiryCreateComponent_option_29_Template, 2, 2, "option", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 6)(31, "label");
      \u0275\u0275text(32, "Purpose of Visit (details)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "textarea", 13);
      \u0275\u0275twoWayListener("ngModelChange", function InquiryCreateComponent_Template_textarea_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.purpose, $event) || (ctx.model.purpose = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 5)(35, "div", 6)(36, "label");
      \u0275\u0275text(37, "Person to Meet *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "app-search-select", 14);
      \u0275\u0275twoWayListener("ngModelChange", function InquiryCreateComponent_Template_app_search_select_ngModelChange_38_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedPersonValue, $event) || (ctx.selectedPersonValue = $event);
        return $event;
      });
      \u0275\u0275listener("valueChange", function InquiryCreateComponent_Template_app_search_select_valueChange_38_listener($event) {
        return ctx.onPersonSelect($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(39, InquiryCreateComponent_input_39_Template, 1, 1, "input", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 6)(41, "label");
      \u0275\u0275text(42, "Department");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "app-search-select", 16);
      \u0275\u0275twoWayListener("ngModelChange", function InquiryCreateComponent_Template_app_search_select_ngModelChange_43_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedDepartmentValue, $event) || (ctx.selectedDepartmentValue = $event);
        return $event;
      });
      \u0275\u0275listener("valueChange", function InquiryCreateComponent_Template_app_search_select_valueChange_43_listener($event) {
        return ctx.onDepartmentSelect($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(44, "div", 17)(45, "button", 18);
      \u0275\u0275listener("click", function InquiryCreateComponent_Template_button_click_45_listener() {
        return ctx.cancel();
      });
      \u0275\u0275text(46, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "button", 19);
      \u0275\u0275text(48);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.visitor_name);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.visitor_phone);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.visitor_id_type);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.visitor_id_number);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.purpose_type);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.purposeTypes);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.purpose);
      \u0275\u0275advance(5);
      \u0275\u0275property("options", ctx.personToMeetOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedPersonValue);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isPersonOther);
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.departmentOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedDepartmentValue);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.loading ? "Saving..." : "Register");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterModule, SearchSelectComponent], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem;\n}\n.form-card[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.form-group[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 180px;\n  margin-bottom: 1rem;\n}\n.form-actions[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  display: flex;\n  gap: 0.5rem;\n}\n/*# sourceMappingURL=inquiry-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InquiryCreateComponent, { className: "InquiryCreateComponent", filePath: "src\\app\\modules\\security-guard\\inquiry-create\\inquiry-create.component.ts", lineNumber: 28 });
})();
export {
  InquiryCreateComponent
};
//# sourceMappingURL=chunk-S4Z2S2FD.js.map
