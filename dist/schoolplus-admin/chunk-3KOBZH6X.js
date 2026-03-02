import {
  CommitteeService
} from "./chunk-CDZZMPSH.js";
import {
  TeacherService
} from "./chunk-T553C5NZ.js";
import {
  StudentService
} from "./chunk-YLBONAI4.js";
import {
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
  ɵɵtextInterpolate3
} from "./chunk-VTJ43J7W.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/modules/committees/committee-create/committee-create.component.ts
function CommitteeCreateComponent_div_6_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1, " Committee name is required ");
    \u0275\u0275elementEnd();
  }
}
function CommitteeCreateComponent_div_6_div_52_div_1_ng_container_25_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const teacher_r5 = ctx.$implicit;
    \u0275\u0275property("ngValue", teacher_r5.teacher_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", teacher_r5.first_name, " ", teacher_r5.last_name, " ");
  }
}
function CommitteeCreateComponent_div_6_div_52_div_1_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CommitteeCreateComponent_div_6_div_52_div_1_ng_container_25_option_1_Template, 2, 3, "option", 50);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.teachers);
  }
}
function CommitteeCreateComponent_div_6_div_52_div_1_ng_container_26_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const student_r6 = ctx.$implicit;
    \u0275\u0275property("ngValue", student_r6.student_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", student_r6.first_name, " ", student_r6.last_name, " (", student_r6.admission_number, ") ");
  }
}
function CommitteeCreateComponent_div_6_div_52_div_1_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CommitteeCreateComponent_div_6_div_52_div_1_ng_container_26_option_1_Template, 2, 4, "option", 50);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.students);
  }
}
function CommitteeCreateComponent_div_6_div_52_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "h4");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 39);
    \u0275\u0275listener("click", function CommitteeCreateComponent_div_6_div_52_div_1_Template_button_click_4_listener() {
      const i_r4 = \u0275\u0275restoreView(_r3).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeMember(i_r4));
    });
    \u0275\u0275element(5, "i", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 9)(7, "div", 10)(8, "label");
    \u0275\u0275text(9, "Member Type ");
    \u0275\u0275elementStart(10, "span", 11);
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "select", 41)(13, "option", 42);
    \u0275\u0275text(14, "Staff");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 43);
    \u0275\u0275text(16, "Student");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 10)(18, "label");
    \u0275\u0275text(19, "Member ");
    \u0275\u0275elementStart(20, "span", 11);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "select", 44)(23, "option", 45);
    \u0275\u0275text(24, "Select Member");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, CommitteeCreateComponent_div_6_div_52_div_1_ng_container_25_Template, 2, 1, "ng-container", 33)(26, CommitteeCreateComponent_div_6_div_52_div_1_ng_container_26_Template, 2, 1, "ng-container", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 10)(28, "label");
    \u0275\u0275text(29, "Role ");
    \u0275\u0275elementStart(30, "span", 11);
    \u0275\u0275text(31, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "select", 46)(33, "option", 47);
    \u0275\u0275text(34, "Chairperson");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 48);
    \u0275\u0275text(36, "Secretary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option", 49);
    \u0275\u0275text(38, "Member");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_9_0;
    const member_r7 = ctx.$implicit;
    const i_r4 = ctx.index;
    \u0275\u0275property("formGroup", member_r7);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Member ", i_r4 + 1, "");
    \u0275\u0275advance(20);
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_8_0 = member_r7.get("member_type")) == null ? null : tmp_8_0.value) === "staff");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_9_0 = member_r7.get("member_type")) == null ? null : tmp_9_0.value) === "student");
  }
}
function CommitteeCreateComponent_div_6_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275template(1, CommitteeCreateComponent_div_6_div_52_div_1_Template, 39, 5, "div", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.membersArray.controls);
  }
}
function CommitteeCreateComponent_div_6_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "p");
    \u0275\u0275text(2, 'No members added. Click "Add Member" to add members to this committee.');
    \u0275\u0275elementEnd()();
  }
}
function CommitteeCreateComponent_div_6_span_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Saving...");
    \u0275\u0275elementEnd();
  }
}
function CommitteeCreateComponent_div_6_span_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.isEditMode ? "Update" : "Create", " Committee");
  }
}
function CommitteeCreateComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "form", 7);
    \u0275\u0275listener("ngSubmit", function CommitteeCreateComponent_div_6_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(2, "div", 8)(3, "h3");
    \u0275\u0275text(4, "Committee Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10)(7, "label");
    \u0275\u0275text(8, "Committee Name ");
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "input", 12);
    \u0275\u0275template(12, CommitteeCreateComponent_div_6_div_12_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 10)(14, "label");
    \u0275\u0275text(15, "Committee Type ");
    \u0275\u0275elementStart(16, "span", 11);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "select", 14)(19, "option", 15);
    \u0275\u0275text(20, "Academic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 16);
    \u0275\u0275text(22, "Discipline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 17);
    \u0275\u0275text(24, "Sports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 18);
    \u0275\u0275text(26, "Cultural");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 19);
    \u0275\u0275text(28, "Parent-Teacher");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 20);
    \u0275\u0275text(30, "Other");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 10)(32, "label");
    \u0275\u0275text(33, "Status ");
    \u0275\u0275elementStart(34, "span", 11);
    \u0275\u0275text(35, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "select", 21)(37, "option", 22);
    \u0275\u0275text(38, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "option", 23);
    \u0275\u0275text(40, "Inactive");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(41, "div", 10)(42, "label");
    \u0275\u0275text(43, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "textarea", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 8)(46, "div", 25)(47, "h3");
    \u0275\u0275text(48, "Committee Members");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 26);
    \u0275\u0275listener("click", function CommitteeCreateComponent_div_6_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addMember());
    });
    \u0275\u0275element(50, "i", 27);
    \u0275\u0275text(51, " Add Member ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(52, CommitteeCreateComponent_div_6_div_52_Template, 2, 1, "div", 28)(53, CommitteeCreateComponent_div_6_div_53_Template, 3, 0, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 30)(55, "button", 31);
    \u0275\u0275listener("click", function CommitteeCreateComponent_div_6_Template_button_click_55_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(56, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "button", 32);
    \u0275\u0275template(58, CommitteeCreateComponent_div_6_span_58_Template, 2, 0, "span", 33)(59, CommitteeCreateComponent_div_6_span_59_Template, 2, 1, "span", 33);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.committeeForm);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx_r1.committeeForm.get("committee_name")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.committeeForm.get("committee_name")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r1.committeeForm.get("committee_name")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.committeeForm.get("committee_name")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(40);
    \u0275\u0275property("ngIf", ctx_r1.membersArray.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.membersArray.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving || ctx_r1.committeeForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
  }
}
function CommitteeCreateComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "div", 54);
    \u0275\u0275elementEnd();
  }
}
var CommitteeCreateComponent = class _CommitteeCreateComponent {
  fb;
  route;
  router;
  committeeService;
  teacherService;
  studentService;
  toastService;
  committeeForm;
  isEditMode = false;
  committeeId;
  isLoading = false;
  isSaving = false;
  teachers = [];
  students = [];
  constructor(fb, route, router, committeeService, teacherService, studentService, toastService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.committeeService = committeeService;
    this.teacherService = teacherService;
    this.studentService = studentService;
    this.toastService = toastService;
    this.committeeForm = this.fb.group({
      committee_name: ["", Validators.required],
      committee_type: ["academic", Validators.required],
      description: [""],
      status: ["active", Validators.required],
      members: this.fb.array([])
    });
  }
  get membersArray() {
    return this.committeeForm.get("members");
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.committeeId = +params["id"];
        this.loadCommittee();
      }
    });
    this.loadTeachers();
    this.loadStudents();
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
  loadStudents() {
    this.studentService.getStudents({}).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.students = response.data.students || [];
        }
      }
    });
  }
  addMember() {
    const memberForm = this.fb.group({
      member_type: ["staff", Validators.required],
      member_id: [null, Validators.required],
      role: ["member", Validators.required]
    });
    this.membersArray.push(memberForm);
  }
  removeMember(index) {
    this.membersArray.removeAt(index);
  }
  loadCommittee() {
    if (!this.committeeId)
      return;
    this.isLoading = true;
    this.committeeService.getCommittees({ committee_id: this.committeeId }).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data?.committees?.length > 0) {
          const committee = response.data.committees[0];
          this.committeeForm.patchValue({
            committee_name: committee.committee_name,
            committee_type: committee.committee_type,
            description: committee.committee_description ?? "",
            status: committee.status
          });
          this.membersArray.clear();
          this.committeeService.getMembers(this.committeeId).subscribe({
            next: (membersResponse) => {
              if (membersResponse.status === "success" && membersResponse.data?.members) {
                membersResponse.data.members.forEach((member) => {
                  let memberType = "staff";
                  let memberId = null;
                  if (member.staff_id) {
                    memberType = "staff";
                    memberId = member.staff_id;
                  } else if (member.student_id) {
                    memberType = "student";
                    memberId = member.student_id;
                  }
                  this.membersArray.push(this.fb.group({
                    member_type: [memberType, Validators.required],
                    member_id: [memberId, Validators.required],
                    role: [member.role, Validators.required]
                  }));
                });
              }
              this.isLoading = false;
            },
            error: () => {
              this.toastService.error("Failed to load committee members");
              this.isLoading = false;
            }
          });
        } else {
          this.isLoading = false;
        }
      },
      error: () => {
        this.toastService.error("Failed to load committee details");
        this.isLoading = false;
      }
    });
  }
  onSubmit() {
    if (this.committeeForm.invalid) {
      this.committeeForm.markAllAsTouched();
      return;
    }
    if (this.membersArray.length === 0) {
      this.toastService.warning("Please add at least one member to the committee");
      return;
    }
    this.isSaving = true;
    const membersPayload = this.membersArray.value.map((m) => ({
      member_type: m.member_type,
      staff_id: m.member_type === "staff" ? m.member_id : null,
      student_id: m.member_type === "student" ? m.member_id : null,
      role: m.role
    }));
    const formData = __spreadProps(__spreadValues({}, this.committeeForm.value), {
      members: membersPayload
    });
    if (this.isEditMode && this.committeeId) {
      formData.committee_id = this.committeeId;
    }
    this.committeeService.createCommittee(formData).subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.toastService.success(`Committee ${this.isEditMode ? "updated" : "created"} successfully`);
          this.router.navigate(["/app/committees"]);
        } else {
          this.toastService.error(response.message || `Failed to ${this.isEditMode ? "update" : "create"} committee`);
        }
        this.isSaving = false;
      },
      error: () => {
        this.toastService.error(`Failed to ${this.isEditMode ? "update" : "create"} committee`);
        this.isSaving = false;
      }
    });
  }
  cancel() {
    this.router.navigate(["/app/committees"]);
  }
  static \u0275fac = function CommitteeCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommitteeCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(CommitteeService), \u0275\u0275directiveInject(TeacherService), \u0275\u0275directiveInject(StudentService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommitteeCreateComponent, selectors: [["app-committee-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 4, consts: [[1, "committee-create-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["class", "form-card", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-grid"], [1, "form-group"], [1, "required"], ["type", "text", "formControlName", "committee_name", "placeholder", "Enter committee name", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "committee_type", 1, "form-control"], ["value", "academic"], ["value", "discipline"], ["value", "sports"], ["value", "cultural"], ["value", "parent_teacher"], ["value", "other"], ["formControlName", "status", 1, "form-control"], ["value", "active"], ["value", "inactive"], ["formControlName", "description", "rows", "4", "placeholder", "Enter committee description", 1, "form-control"], [1, "section-header"], ["type", "button", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], [1, "bi", "bi-plus-circle"], ["class", "members-list", 4, "ngIf"], ["class", "empty-members", 4, "ngIf"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "invalid-feedback"], [1, "members-list"], ["class", "member-item", 3, "formGroup", 4, "ngFor", "ngForOf"], [1, "member-item", 3, "formGroup"], [1, "member-header"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "bi", "bi-trash"], ["formControlName", "member_type", 1, "form-control"], ["value", "staff"], ["value", "student"], ["formControlName", "member_id", 1, "form-control"], [3, "value"], ["formControlName", "role", 1, "form-control"], ["value", "chairperson"], ["value", "secretary"], ["value", "member"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], [1, "empty-members"], [1, "loading-spinner"], [1, "spinner"]], template: function CommitteeCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, CommitteeCreateComponent_div_6_Template, 60, 10, "div", 4)(7, CommitteeCreateComponent_div_7_Template, 2, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Committee" : "Create Committee");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Update committee details" : "Create a new committee");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.committee-create-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.committee-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.committee-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.committee-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.committee-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.committee-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.committee-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #495057;\n  margin: 0 0 20px 0;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #e9ecef;\n}\n.committee-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #e9ecef;\n}\n.committee-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n.committee-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .members-list[_ngcontent-%COMP%]   .member-item[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 20px;\n  margin-bottom: 16px;\n}\n.committee-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .members-list[_ngcontent-%COMP%]   .member-item[_ngcontent-%COMP%]   .member-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.committee-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .members-list[_ngcontent-%COMP%]   .member-item[_ngcontent-%COMP%]   .member-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #495057;\n}\n.committee-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .members-list[_ngcontent-%COMP%]   .empty-members[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #666;\n  background: #f8f9fa;\n  border-radius: 8px;\n}\n.committee-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.committee-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #495057;\n}\n.committee-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.committee-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.committee-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.committee-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.committee-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.committee-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.committee-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #e9ecef;\n}\n.committee-create-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n}\n/*# sourceMappingURL=committee-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommitteeCreateComponent, { className: "CommitteeCreateComponent", filePath: "src\\app\\modules\\committees\\committee-create\\committee-create.component.ts", lineNumber: 17 });
})();
export {
  CommitteeCreateComponent
};
//# sourceMappingURL=chunk-3KOBZH6X.js.map
