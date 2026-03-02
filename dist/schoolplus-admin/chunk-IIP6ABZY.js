import {
  SmsService
} from "./chunk-QSGU2ZCA.js";
import {
  TeacherService
} from "./chunk-T553C5NZ.js";
import {
  StudentService
} from "./chunk-YLBONAI4.js";
import {
  ClassService
} from "./chunk-23QP2TAM.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-VTJ43J7W.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/modules/sms/sms-send/sms-send.component.ts
function SmsSendComponent_div_24_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cls_r3 = ctx.$implicit;
    \u0275\u0275property("value", cls_r3.class_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cls_r3.class_name, " ");
  }
}
function SmsSendComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "label");
    \u0275\u0275text(2, "Select Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 26);
    \u0275\u0275listener("change", function SmsSendComponent_div_24_Template_select_change_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClassSelect($event.target.value));
    });
    \u0275\u0275elementStart(4, "option", 27);
    \u0275\u0275text(5, "Select Class");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SmsSendComponent_div_24_option_6_Template, 2, 2, "option", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.classes);
  }
}
function SmsSendComponent_div_25_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function SmsSendComponent_div_25_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectAllStudents());
    });
    \u0275\u0275text(1, " Select All Students ");
    \u0275\u0275elementEnd();
  }
}
function SmsSendComponent_div_25_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function SmsSendComponent_div_25_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectAllTeachers());
    });
    \u0275\u0275text(1, " Select All Teachers ");
    \u0275\u0275elementEnd();
  }
}
function SmsSendComponent_div_25_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function SmsSendComponent_div_25_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearSelection());
    });
    \u0275\u0275text(1, " Clear Selection ");
    \u0275\u0275elementEnd();
  }
}
function SmsSendComponent_div_25_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "label", 40)(2, "input", 41);
    \u0275\u0275listener("change", function SmsSendComponent_div_25_div_9_Template_input_change_2_listener() {
      const student_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleRecipient(student_r8));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 42)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const student_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.isStudentSelected(student_r8));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", student_r8.first_name, " ", student_r8.last_name, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", student_r8.admission_number, " - ", student_r8.mobile_number, "");
  }
}
function SmsSendComponent_div_25_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "label", 40)(2, "input", 41);
    \u0275\u0275listener("change", function SmsSendComponent_div_25_div_10_Template_input_change_2_listener() {
      const teacher_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleRecipient(teacher_r10));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 42)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const teacher_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.isTeacherSelected(teacher_r10));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", teacher_r10.first_name, " ", teacher_r10.last_name, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(teacher_r10.mobile_number);
  }
}
function SmsSendComponent_div_25_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedRecipients.length, " recipient(s) selected ");
  }
}
function SmsSendComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "h4");
    \u0275\u0275text(3, "Select Recipients");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 31);
    \u0275\u0275template(5, SmsSendComponent_div_25_button_5_Template, 2, 0, "button", 32)(6, SmsSendComponent_div_25_button_6_Template, 2, 0, "button", 32)(7, SmsSendComponent_div_25_button_7_Template, 2, 0, "button", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 34);
    \u0275\u0275template(9, SmsSendComponent_div_25_div_9_Template, 8, 5, "div", 35)(10, SmsSendComponent_div_25_div_10_Template, 8, 4, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, SmsSendComponent_div_25_div_11_Template, 2, 1, "div", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.students.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.teachers.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedRecipients.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.students);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.teachers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedRecipients.length > 0);
  }
}
function SmsSendComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1, " Message is required and must be 160 characters or less ");
    \u0275\u0275elementEnd();
  }
}
function SmsSendComponent_input_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 45);
  }
}
function SmsSendComponent_span_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Sending...");
    \u0275\u0275elementEnd();
  }
}
function SmsSendComponent_span_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Send SMS");
    \u0275\u0275elementEnd();
  }
}
var SmsSendComponent = class _SmsSendComponent {
  fb;
  router;
  smsService;
  studentService;
  teacherService;
  classService;
  toastService;
  smsForm;
  isSending = false;
  recipients = [];
  recipientType = "individual";
  students = [];
  teachers = [];
  classes = [];
  selectedRecipients = [];
  constructor(fb, router, smsService, studentService, teacherService, classService, toastService) {
    this.fb = fb;
    this.router = router;
    this.smsService = smsService;
    this.studentService = studentService;
    this.teacherService = teacherService;
    this.classService = classService;
    this.toastService = toastService;
    this.smsForm = this.fb.group({
      recipient_type: ["individual", Validators.required],
      recipient_ids: [[], Validators.required],
      message: ["", [Validators.required, Validators.maxLength(160)]],
      scheduled_date: [""]
    });
  }
  ngOnInit() {
    this.loadStudents();
    this.loadTeachers();
    this.loadClasses();
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
  loadTeachers() {
    this.teacherService.getTeachers({}).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.teachers = response.data.teachers || [];
        }
      }
    });
  }
  loadClasses() {
    this.classService.getClasses().subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.classes = response.data.classes || [];
        }
      }
    });
  }
  onRecipientTypeChange() {
    this.recipientType = this.smsForm.get("recipient_type")?.value;
    this.selectedRecipients = [];
    this.smsForm.patchValue({ recipient_ids: [] });
  }
  onClassSelect(classId) {
    this.studentService.getStudents({ class_id: classId }).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          const classStudents = response.data.students || [];
          this.selectedRecipients = [...this.selectedRecipients, ...classStudents];
          this.updateRecipientIds();
        }
      }
    });
  }
  isStudentSelected(student) {
    return this.selectedRecipients.some((r) => r.student_id === student.student_id);
  }
  isTeacherSelected(teacher) {
    return this.selectedRecipients.some((r) => r.teacher_id === teacher.teacher_id);
  }
  toggleRecipient(recipient) {
    const index = this.selectedRecipients.findIndex((r) => r.student_id && recipient.student_id && r.student_id === recipient.student_id || r.teacher_id && recipient.teacher_id && r.teacher_id === recipient.teacher_id);
    if (index > -1) {
      this.selectedRecipients.splice(index, 1);
    } else {
      this.selectedRecipients.push(recipient);
    }
    this.updateRecipientIds();
  }
  updateRecipientIds() {
    const ids = this.selectedRecipients.map((r) => r.student_id || r.teacher_id);
    this.smsForm.patchValue({ recipient_ids: ids });
  }
  selectAllStudents() {
    this.selectedRecipients = [...this.students];
    this.updateRecipientIds();
  }
  selectAllTeachers() {
    this.selectedRecipients = [...this.teachers];
    this.updateRecipientIds();
  }
  clearSelection() {
    this.selectedRecipients = [];
    this.updateRecipientIds();
  }
  getMessageLength() {
    return this.smsForm.get("message")?.value?.length || 0;
  }
  onSubmit() {
    if (this.smsForm.invalid) {
      this.smsForm.markAllAsTouched();
      return;
    }
    if (this.selectedRecipients.length === 0) {
      this.toastService.warning("Please select at least one recipient");
      return;
    }
    this.isSending = true;
    const formData = __spreadProps(__spreadValues({}, this.smsForm.value), {
      recipient_type: this.recipientType
    });
    this.smsService.sendSms(formData).subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.toastService.success(`SMS sent to ${this.selectedRecipients.length} recipient(s) successfully`);
          this.router.navigate(["/app/sms"]);
        } else {
          this.toastService.error(response.message || "Failed to send SMS");
        }
        this.isSending = false;
      },
      error: () => {
        this.toastService.error("Failed to send SMS");
        this.isSending = false;
      }
    });
  }
  cancel() {
    this.router.navigate(["/app/sms"]);
  }
  static \u0275fac = function SmsSendComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SmsSendComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SmsService), \u0275\u0275directiveInject(StudentService), \u0275\u0275directiveInject(TeacherService), \u0275\u0275directiveInject(ClassService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SmsSendComponent, selectors: [["app-sms-send"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 50, vars: 14, consts: [[1, "sms-send-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-grid"], [1, "form-group"], [1, "required"], ["formControlName", "recipient_type", 1, "form-control", 3, "change"], ["value", "individual"], ["value", "class"], ["value", "all"], ["class", "form-group", 4, "ngIf"], ["class", "recipient-selection", 4, "ngIf"], ["formControlName", "message", "rows", "6", "placeholder", "Enter your message (max 160 characters)", 1, "form-control"], [1, "message-info"], [1, "char-count"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "checkbox", "formControlName", "scheduled_date"], ["type", "datetime-local", "formControlName", "scheduled_date", "class", "form-control", 4, "ngIf"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "form-control", 3, "change"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "recipient-selection"], [1, "selection-header"], [1, "selection-actions"], ["type", "button", "class", "btn btn-sm btn-secondary", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-sm btn-danger", 3, "click", 4, "ngIf"], [1, "recipients-grid"], ["class", "recipient-item", 4, "ngFor", "ngForOf"], ["class", "selected-count", 4, "ngIf"], ["type", "button", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "recipient-item"], [1, "checkbox-label"], ["type", "checkbox", 3, "change", "checked"], [1, "recipient-info"], [1, "selected-count"], [1, "invalid-feedback"], ["type", "datetime-local", "formControlName", "scheduled_date", 1, "form-control"]], template: function SmsSendComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Send SMS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Send SMS messages to students, teachers, or classes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "form", 5);
      \u0275\u0275listener("ngSubmit", function SmsSendComponent_Template_form_ngSubmit_7_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(8, "div", 6)(9, "h3");
      \u0275\u0275text(10, "Recipient Selection");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "label");
      \u0275\u0275text(14, "Recipient Type ");
      \u0275\u0275elementStart(15, "span", 9);
      \u0275\u0275text(16, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "select", 10);
      \u0275\u0275listener("change", function SmsSendComponent_Template_select_change_17_listener() {
        return ctx.onRecipientTypeChange();
      });
      \u0275\u0275elementStart(18, "option", 11);
      \u0275\u0275text(19, "Individual");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "option", 12);
      \u0275\u0275text(21, "By Class");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "option", 13);
      \u0275\u0275text(23, "All Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(24, SmsSendComponent_div_24_Template, 7, 2, "div", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275template(25, SmsSendComponent_div_25_Template, 12, 6, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 6)(27, "h3");
      \u0275\u0275text(28, "Message");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 8)(30, "label");
      \u0275\u0275text(31, "Message ");
      \u0275\u0275elementStart(32, "span", 9);
      \u0275\u0275text(33, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(34, "textarea", 16);
      \u0275\u0275elementStart(35, "div", 17)(36, "span", 18);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(38, SmsSendComponent_div_38_Template, 2, 0, "div", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 8)(40, "label");
      \u0275\u0275element(41, "input", 20);
      \u0275\u0275text(42, " Schedule SMS ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(43, SmsSendComponent_input_43_Template, 1, 0, "input", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 22)(45, "button", 23);
      \u0275\u0275listener("click", function SmsSendComponent_Template_button_click_45_listener() {
        return ctx.cancel();
      });
      \u0275\u0275text(46, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "button", 24);
      \u0275\u0275template(48, SmsSendComponent_span_48_Template, 2, 0, "span", 25)(49, SmsSendComponent_span_49_Template, 2, 0, "span", 25);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_6_0;
      let tmp_7_0;
      \u0275\u0275advance(7);
      \u0275\u0275property("formGroup", ctx.smsForm);
      \u0275\u0275advance(17);
      \u0275\u0275property("ngIf", ctx.recipientType === "class");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.recipientType === "individual");
      \u0275\u0275advance(9);
      \u0275\u0275classProp("is-invalid", ((tmp_3_0 = ctx.smsForm.get("message")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.smsForm.get("message")) == null ? null : tmp_3_0.touched));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("warning", ctx.getMessageLength() > 140);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.getMessageLength(), " / 160 characters ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_6_0 = ctx.smsForm.get("message")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.smsForm.get("message")) == null ? null : tmp_6_0.touched));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_7_0 = ctx.smsForm.get("scheduled_date")) == null ? null : tmp_7_0.value);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isSending);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isSending || ctx.smsForm.invalid || ctx.selectedRecipients.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSending);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSending);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.sms-send-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.sms-send-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.sms-send-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.sms-send-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.sms-send-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.sms-send-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.sms-send-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #495057;\n  margin: 0 0 20px 0;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #e9ecef;\n}\n.sms-send-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #495057;\n  margin: 0 0 16px 0;\n}\n.sms-send-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n@media (max-width: 768px) {\n  .sms-send-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: var(--spacing-md);\n  }\n}\n.sms-send-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .recipient-selection[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.sms-send-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .recipient-selection[_ngcontent-%COMP%]   .selection-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.sms-send-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .recipient-selection[_ngcontent-%COMP%]   .selection-header[_ngcontent-%COMP%]   .selection-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.sms-send-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .recipient-selection[_ngcontent-%COMP%]   .recipients-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 12px;\n  max-height: 400px;\n  overflow-y: auto;\n  padding: 12px;\n  background: #f8f9fa;\n  border-radius: 6px;\n}\n.sms-send-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .recipient-selection[_ngcontent-%COMP%]   .recipients-grid[_ngcontent-%COMP%]   .recipient-item[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background: white;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background 0.3s;\n}\n.sms-send-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .recipient-selection[_ngcontent-%COMP%]   .recipients-grid[_ngcontent-%COMP%]   .recipient-item[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n}\n.sms-send-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .recipient-selection[_ngcontent-%COMP%]   .recipients-grid[_ngcontent-%COMP%]   .recipient-item[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n}\n.sms-send-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .recipient-selection[_ngcontent-%COMP%]   .recipients-grid[_ngcontent-%COMP%]   .recipient-item[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .recipient-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.sms-send-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .recipient-selection[_ngcontent-%COMP%]   .recipients-grid[_ngcontent-%COMP%]   .recipient-item[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .recipient-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #1a1a1a;\n  margin-bottom: 4px;\n}\n.sms-send-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .recipient-selection[_ngcontent-%COMP%]   .recipients-grid[_ngcontent-%COMP%]   .recipient-item[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .recipient-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 12px;\n}\n.sms-send-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .recipient-selection[_ngcontent-%COMP%]   .selected-count[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  padding: 12px;\n  background: #d4edda;\n  color: #155724;\n  border-radius: 6px;\n  font-weight: 600;\n  text-align: center;\n}\n.sms-send-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.sms-send-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #495057;\n}\n.sms-send-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.sms-send-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.sms-send-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.sms-send-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.sms-send-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.sms-send-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .message-info[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: flex;\n  justify-content: flex-end;\n}\n.sms-send-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .message-info[_ngcontent-%COMP%]   .char-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6c757d;\n}\n.sms-send-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .message-info[_ngcontent-%COMP%]   .char-count.warning[_ngcontent-%COMP%] {\n  color: #ffc107;\n}\n.sms-send-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.sms-send-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #e9ecef;\n}\n/*# sourceMappingURL=sms-send.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SmsSendComponent, { className: "SmsSendComponent", filePath: "src\\app\\modules\\sms\\sms-send\\sms-send.component.ts", lineNumber: 18 });
})();
export {
  SmsSendComponent
};
//# sourceMappingURL=chunk-IIP6ABZY.js.map
