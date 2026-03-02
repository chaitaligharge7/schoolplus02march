import {
  DocumentService
} from "./chunk-HSRA4EZ7.js";
import {
  DateFormatPipe
} from "./chunk-FN4NGQWM.js";
import {
  StudentService
} from "./chunk-YLBONAI4.js";
import {
  DialogService
} from "./chunk-UPFK65KQ.js";
import "./chunk-6W4TS6AE.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
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
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/documents/half-day-permission-list/half-day-permission-list.component.ts
function HalfDayPermissionListComponent_div_10_option_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const student_r3 = ctx.$implicit;
    \u0275\u0275property("value", student_r3.student_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", student_r3.first_name, " ", student_r3.last_name, " (", student_r3.admission_number, ") ");
  }
}
function HalfDayPermissionListComponent_div_10_span_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Saving...");
    \u0275\u0275elementEnd();
  }
}
function HalfDayPermissionListComponent_div_10_span_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Create Permission");
    \u0275\u0275elementEnd();
  }
}
function HalfDayPermissionListComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "h3");
    \u0275\u0275text(2, "Create Half Day Permission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 9);
    \u0275\u0275listener("ngSubmit", function HalfDayPermissionListComponent_div_10_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmitPermission());
    });
    \u0275\u0275elementStart(4, "div", 10)(5, "div", 11)(6, "label");
    \u0275\u0275text(7, "Student ");
    \u0275\u0275elementStart(8, "span", 12);
    \u0275\u0275text(9, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "select", 13)(11, "option", 14);
    \u0275\u0275text(12, "Select Student");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, HalfDayPermissionListComponent_div_10_option_13_Template, 2, 4, "option", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 11)(15, "label");
    \u0275\u0275text(16, "Permission Date ");
    \u0275\u0275elementStart(17, "span", 12);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(19, "input", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 11)(21, "label");
    \u0275\u0275text(22, "Permission Time");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 10)(25, "div", 18)(26, "label");
    \u0275\u0275text(27, "Reason ");
    \u0275\u0275elementStart(28, "span", 12);
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(30, "textarea", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 10)(32, "div", 11)(33, "label");
    \u0275\u0275text(34, "Parent Mobile ");
    \u0275\u0275elementStart(35, "span", 12);
    \u0275\u0275text(36, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(37, "input", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 21)(39, "button", 22);
    \u0275\u0275listener("click", function HalfDayPermissionListComponent_div_10_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.togglePermissionForm());
    });
    \u0275\u0275text(40, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 23);
    \u0275\u0275template(42, HalfDayPermissionListComponent_div_10_span_42_Template, 2, 0, "span", 7)(43, HalfDayPermissionListComponent_div_10_span_43_Template, 2, 0, "span", 7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.permissionForm);
    \u0275\u0275advance(8);
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.students);
    \u0275\u0275advance(28);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
  }
}
function HalfDayPermissionListComponent_ng_container_11_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const student_r5 = ctx.$implicit;
    \u0275\u0275property("value", student_r5.student_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", student_r5.first_name, " ", student_r5.last_name, " ");
  }
}
function HalfDayPermissionListComponent_ng_container_11_div_25_tr_21_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "button", 42);
    \u0275\u0275listener("click", function HalfDayPermissionListComponent_ng_container_11_div_25_tr_21_div_19_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const permission_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.approvePermission(permission_r7, "approve"));
    });
    \u0275\u0275element(2, "i", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 44);
    \u0275\u0275listener("click", function HalfDayPermissionListComponent_ng_container_11_div_25_tr_21_div_19_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const permission_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.approvePermission(permission_r7, "reject"));
    });
    \u0275\u0275element(4, "i", 45);
    \u0275\u0275elementEnd()();
  }
}
function HalfDayPermissionListComponent_ng_container_11_div_25_tr_21_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function HalfDayPermissionListComponent_ng_container_11_div_25_tr_21_Template(rf, ctx) {
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
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 39);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275template(19, HalfDayPermissionListComponent_ng_container_11_div_25_tr_21_div_19_Template, 5, 0, "div", 40)(20, HalfDayPermissionListComponent_ng_container_11_div_25_tr_21_span_20_Template, 2, 0, "span", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const permission_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", permission_r7.first_name, " ", permission_r7.last_name, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(permission_r7.admission_number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 16, permission_r7.permission_date));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(permission_r7.permission_time || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(permission_r7.reason);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(permission_r7.parent_mobile);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-success", permission_r7.approval_status === "approved")("badge-warning", permission_r7.approval_status === "pending")("badge-danger", permission_r7.approval_status === "rejected");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", permission_r7.approval_status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", permission_r7.approval_status === "pending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", permission_r7.approval_status !== "pending");
  }
}
function HalfDayPermissionListComponent_ng_container_11_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "table", 37)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Student Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Admission No.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Permission Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Permission Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Reason");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Parent Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275template(21, HalfDayPermissionListComponent_ng_container_11_div_25_tr_21_Template, 21, 18, "tr", 38);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", ctx_r1.permissions);
  }
}
function HalfDayPermissionListComponent_ng_container_11_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No half day permissions found");
    \u0275\u0275elementEnd()();
  }
}
function HalfDayPermissionListComponent_ng_container_11_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275element(1, "div", 49);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading permissions...");
    \u0275\u0275elementEnd()();
  }
}
function HalfDayPermissionListComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 24)(2, "form", 25);
    \u0275\u0275listener("ngSubmit", function HalfDayPermissionListComponent_ng_container_11_Template_form_ngSubmit_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearch());
    });
    \u0275\u0275elementStart(3, "div", 26)(4, "div", 11)(5, "select", 13)(6, "option", 14);
    \u0275\u0275text(7, "All Students");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, HalfDayPermissionListComponent_ng_container_11_option_8_Template, 2, 3, "option", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 11)(10, "select", 27)(11, "option", 14);
    \u0275\u0275text(12, "All Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 28);
    \u0275\u0275text(14, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 29);
    \u0275\u0275text(16, "Approved");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 30);
    \u0275\u0275text(18, "Rejected");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 11);
    \u0275\u0275element(20, "input", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 11)(22, "button", 31);
    \u0275\u0275element(23, "i", 32);
    \u0275\u0275text(24, " Search ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(25, HalfDayPermissionListComponent_ng_container_11_div_25_Template, 22, 1, "div", 33)(26, HalfDayPermissionListComponent_ng_container_11_div_26_Template, 4, 0, "div", 34)(27, HalfDayPermissionListComponent_ng_container_11_div_27_Template, 4, 0, "div", 35);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.searchForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.students);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", null);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngIf", !ctx_r1.isLoading && ctx_r1.permissions.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading && ctx_r1.permissions.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
  }
}
var HalfDayPermissionListComponent = class _HalfDayPermissionListComponent {
  fb;
  router;
  documentService;
  studentService;
  dialogService;
  toastService;
  permissions = [];
  students = [];
  isLoading = false;
  isSaving = false;
  searchForm;
  permissionForm;
  showPermissionForm = false;
  constructor(fb, router, documentService, studentService, dialogService, toastService) {
    this.fb = fb;
    this.router = router;
    this.documentService = documentService;
    this.studentService = studentService;
    this.dialogService = dialogService;
    this.toastService = toastService;
    this.searchForm = this.fb.group({
      student_id: [null],
      approval_status: [null],
      permission_date: [null]
    });
    this.permissionForm = this.fb.group({
      student_id: [null, Validators.required],
      permission_date: [(/* @__PURE__ */ new Date()).toISOString().split("T")[0], Validators.required],
      permission_time: [""],
      reason: ["", Validators.required],
      parent_mobile: ["", [Validators.required, Validators.pattern(/^[0-9]{10}$/)]]
    });
  }
  ngOnInit() {
    this.loadStudents();
    this.loadPermissions();
  }
  loadStudents() {
    this.studentService.getStudents({}).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.students = response.data.students || [];
        }
      }
    });
  }
  loadPermissions() {
    this.isLoading = true;
    const params = this.searchForm.value;
    this.documentService.getHalfDayPermissions(params).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.status === "success" && response.data) {
          this.permissions = response.data.permissions || [];
        }
      },
      error: () => {
        this.isLoading = false;
        this.toastService.show("Error loading permissions", "error");
      }
    });
  }
  onSearch() {
    this.loadPermissions();
  }
  togglePermissionForm() {
    this.showPermissionForm = !this.showPermissionForm;
    if (!this.showPermissionForm) {
      this.permissionForm.reset({
        permission_date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
      });
    }
  }
  onSubmitPermission() {
    if (this.permissionForm.invalid) {
      this.toastService.show("Please fill all required fields", "error");
      return;
    }
    this.isSaving = true;
    this.documentService.createHalfDayPermission(this.permissionForm.value).subscribe({
      next: (response) => {
        this.isSaving = false;
        if (response.status === "success") {
          this.toastService.show("Half day permission created successfully", "success");
          this.togglePermissionForm();
          this.loadPermissions();
        }
      },
      error: () => {
        this.isSaving = false;
        this.toastService.show("Error creating permission", "error");
      }
    });
  }
  approvePermission(permission, action) {
    const actionText = action === "approve" ? "approve" : "reject";
    this.dialogService.confirm(`${actionText.charAt(0).toUpperCase() + actionText.slice(1)} Permission`, `Are you sure you want to ${actionText} this half day permission?`, actionText.charAt(0).toUpperCase() + actionText.slice(1), "Cancel").subscribe((confirmed) => {
      if (confirmed) {
        this.documentService.approveHalfDayPermission(permission.permission_id, action).subscribe({
          next: (response) => {
            if (response.status === "success") {
              this.toastService.show(`Permission ${actionText}d successfully`, "success");
              this.loadPermissions();
            }
          },
          error: () => {
            this.toastService.show(`Error ${actionText}ing permission`, "error");
          }
        });
      }
    });
  }
  static \u0275fac = function HalfDayPermissionListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HalfDayPermissionListComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DocumentService), \u0275\u0275directiveInject(StudentService), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HalfDayPermissionListComponent, selectors: [["app-half-day-permission-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 3, consts: [[1, "half-day-permission-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "btn", "btn-primary", 3, "click"], [1, "bi", "bi-plus-circle"], ["class", "permission-form-card", 4, "ngIf"], [4, "ngIf"], [1, "permission-form-card"], [3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group"], [1, "required"], ["formControlName", "student_id", 1, "form-control"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "date", "formControlName", "permission_date", 1, "form-control"], ["type", "time", "formControlName", "permission_time", 1, "form-control"], [1, "form-group", "full-width"], ["formControlName", "reason", "rows", "3", 1, "form-control"], ["type", "tel", "formControlName", "parent_mobile", "maxlength", "10", 1, "form-control"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "filters-card"], [1, "filters-form", 3, "ngSubmit", "formGroup"], [1, "filters-grid"], ["formControlName", "approval_status", 1, "form-control"], ["value", "pending"], ["value", "approved"], ["value", "rejected"], ["type", "submit", 1, "btn", "btn-primary", "btn-search"], [1, "bi", "bi-search"], ["class", "table-card", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], [1, "table-card"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "badge"], ["class", "action-buttons", 4, "ngIf"], [1, "action-buttons"], ["title", "Approve", 1, "btn-icon", "btn-success", 3, "click"], [1, "bi", "bi-check-circle"], ["title", "Reject", 1, "btn-icon", "btn-danger", 3, "click"], [1, "bi", "bi-x-circle"], [1, "empty-state"], [1, "bi", "bi-calendar-check"], [1, "loading-state"], [1, "spinner"]], template: function HalfDayPermissionListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Half Day Permissions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Manage student half day permission requests");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275listener("click", function HalfDayPermissionListComponent_Template_button_click_7_listener() {
        return ctx.togglePermissionForm();
      });
      \u0275\u0275element(8, "i", 5);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, HalfDayPermissionListComponent_div_10_Template, 44, 6, "div", 6)(11, HalfDayPermissionListComponent_ng_container_11_Template, 28, 7, "ng-container", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1(" ", ctx.showPermissionForm ? "Cancel" : "Add Permission", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPermissionForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.showPermissionForm);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, RouterModule, DateFormatPipe], styles: ["\n\n.half-day-permission-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.half-day-permission-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n}\n.half-day-permission-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  margin: 0 0 8px 0;\n  color: var(--text-primary);\n}\n.half-day-permission-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n  margin: 0;\n}\n.half-day-permission-container[_ngcontent-%COMP%]   .permission-form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.half-day-permission-container[_ngcontent-%COMP%]   .permission-form-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 20px 0;\n  color: var(--text-primary);\n}\n.half-day-permission-container[_ngcontent-%COMP%]   .permission-form-card[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.half-day-permission-container[_ngcontent-%COMP%]   .permission-form-card[_ngcontent-%COMP%]   .form-row.full-width[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n.half-day-permission-container[_ngcontent-%COMP%]   .permission-form-card[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 8px;\n  color: var(--text-primary);\n}\n.half-day-permission-container[_ngcontent-%COMP%]   .permission-form-card[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: red;\n}\n.half-day-permission-container[_ngcontent-%COMP%]   .permission-form-card[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--border-color);\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.half-day-permission-container[_ngcontent-%COMP%]   .permission-form-card[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n}\n.half-day-permission-container[_ngcontent-%COMP%]   .permission-form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 20px;\n}\n.half-day-permission-container[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 20px;\n  margin-bottom: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.half-day-permission-container[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .filters-form[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  align-items: end;\n}\n.half-day-permission-container[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .filters-form[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--border-color);\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.half-day-permission-container[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .filters-form[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n}\n.half-day-permission-container[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .filters-form[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%]   .btn-search[_ngcontent-%COMP%] {\n  height: 42px;\n}\n.half-day-permission-container[_ngcontent-%COMP%]   .table-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  overflow-x: auto;\n}\n.half-day-permission-container[_ngcontent-%COMP%]   .table-card[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.half-day-permission-container[_ngcontent-%COMP%]   .table-card[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 2px 6px rgba(0, 0, 0, 0.12);\n}\n.half-day-permission-container[_ngcontent-%COMP%]   .table-card[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.65rem 0.75rem;\n  text-align: left;\n  font-size: var(--font-size-xs);\n  font-weight: 600;\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  border-bottom: none;\n  border-right: 1px solid rgba(255, 255, 255, 0.15);\n}\n.half-day-permission-container[_ngcontent-%COMP%]   .table-card[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.half-day-permission-container[_ngcontent-%COMP%]   .table-card[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-color);\n  transition: background-color 0.2s;\n}\n.half-day-permission-container[_ngcontent-%COMP%]   .table-card[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: var(--bg-secondary);\n}\n.half-day-permission-container[_ngcontent-%COMP%]   .table-card[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.half-day-permission-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%], \n.half-day-permission-container[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.half-day-permission-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.half-day-permission-container[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: var(--text-secondary);\n  margin-bottom: 16px;\n}\n.half-day-permission-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.half-day-permission-container[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-secondary);\n  margin-bottom: 8px;\n}\n.half-day-permission-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%], \n.half-day-permission-container[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid var(--border-color);\n  border-top-color: var(--primary-color);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=half-day-permission-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HalfDayPermissionListComponent, { className: "HalfDayPermissionListComponent", filePath: "src\\app\\modules\\documents\\half-day-permission-list\\half-day-permission-list.component.ts", lineNumber: 18 });
})();
export {
  HalfDayPermissionListComponent
};
//# sourceMappingURL=chunk-DUG2G4RY.js.map
