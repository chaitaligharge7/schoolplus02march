import {
  LeaveManagementService
} from "./chunk-QUQ26OR6.js";
import {
  TeacherService
} from "./chunk-T553C5NZ.js";
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
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-GXY6YLNG.js";
import {
  CommonModule,
  NgForOf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTJ43J7W.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/modules/leave-management/leave-create/leave-create.component.ts
function LeaveCreateComponent_option_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    \u0275\u0275property("ngValue", t_r1.teacher_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1.full_name || t_r1.first_name + " " + t_r1.last_name);
  }
}
var LeaveCreateComponent = class _LeaveCreateComponent {
  leaveService;
  teacherService;
  toastService;
  router;
  route;
  model = { leave_type: "Casual", start_date: "", end_date: "", reason: "", teacher_id: null };
  teachers = [];
  loading = false;
  editId = null;
  constructor(leaveService, teacherService, toastService, router, route) {
    this.leaveService = leaveService;
    this.teacherService = teacherService;
    this.toastService = toastService;
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get("id");
    if (idParam) {
      this.editId = +idParam;
      this.leaveService.getLeave(this.editId).subscribe({
        next: (res) => {
          if (res.status === "success" && res.data?.leave) {
            const l = res.data.leave;
            this.model = { leave_type: l.leave_type, start_date: l.start_date, end_date: l.end_date, reason: l.reason, teacher_id: l.teacher_id };
          }
        }
      });
    }
    this.teacherService.getTeachers({ limit: 500 }).subscribe({
      next: (res) => {
        if (res.status === "success" && res.data?.teachers)
          this.teachers = res.data.teachers;
      }
    });
  }
  save() {
    if (!this.model.start_date) {
      this.toastService.show("Start date is required", "error");
      return;
    }
    this.loading = true;
    const obs = this.editId ? this.leaveService.updateLeave(__spreadProps(__spreadValues({}, this.model), { leave_id: this.editId })) : this.leaveService.createLeave(this.model);
    obs.subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === "success") {
          this.toastService.show(this.editId ? "Leave updated" : "Leave submitted", "success");
          this.router.navigate(["/app/leave-management/list"]);
        } else {
          this.toastService.show(res.message || "Error", "error");
        }
      },
      error: () => {
        this.loading = false;
        this.toastService.show("Error saving leave", "error");
      }
    });
  }
  cancel() {
    this.router.navigate(["/app/leave-management/list"]);
  }
  static \u0275fac = function LeaveCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LeaveCreateComponent)(\u0275\u0275directiveInject(LeaveManagementService), \u0275\u0275directiveInject(TeacherService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeaveCreateComponent, selectors: [["app-leave-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 44, vars: 11, consts: [[1, "leave-create-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "form-card", 3, "ngSubmit"], [1, "form-group"], ["name", "teacher_id", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["name", "leave_type", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "Casual"], ["value", "Sick"], ["value", "Earned"], ["value", "Other"], [1, "form-row"], ["type", "date", "name", "start_date", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "end_date", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "reason", "rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function LeaveCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "form", 4);
      \u0275\u0275listener("ngSubmit", function LeaveCreateComponent_Template_form_ngSubmit_6_listener() {
        return ctx.save();
      });
      \u0275\u0275elementStart(7, "div", 5)(8, "label");
      \u0275\u0275text(9, "Staff (Teacher)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function LeaveCreateComponent_Template_select_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.teacher_id, $event) || (ctx.model.teacher_id = $event);
        return $event;
      });
      \u0275\u0275elementStart(11, "option", 7);
      \u0275\u0275text(12, "Select teacher");
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, LeaveCreateComponent_option_13_Template, 2, 2, "option", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 5)(15, "label");
      \u0275\u0275text(16, "Leave Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "select", 9);
      \u0275\u0275twoWayListener("ngModelChange", function LeaveCreateComponent_Template_select_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.leave_type, $event) || (ctx.model.leave_type = $event);
        return $event;
      });
      \u0275\u0275elementStart(18, "option", 10);
      \u0275\u0275text(19, "Casual");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "option", 11);
      \u0275\u0275text(21, "Sick");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "option", 12);
      \u0275\u0275text(23, "Earned");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "option", 13);
      \u0275\u0275text(25, "Other");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "div", 14)(27, "div", 5)(28, "label");
      \u0275\u0275text(29, "Start Date *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function LeaveCreateComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.start_date, $event) || (ctx.model.start_date = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 5)(32, "label");
      \u0275\u0275text(33, "End Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function LeaveCreateComponent_Template_input_ngModelChange_34_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.end_date, $event) || (ctx.model.end_date = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 5)(36, "label");
      \u0275\u0275text(37, "Reason");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "textarea", 17);
      \u0275\u0275twoWayListener("ngModelChange", function LeaveCreateComponent_Template_textarea_ngModelChange_38_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.reason, $event) || (ctx.model.reason = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 18)(40, "button", 19);
      \u0275\u0275listener("click", function LeaveCreateComponent_Template_button_click_40_listener() {
        return ctx.cancel();
      });
      \u0275\u0275text(41, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "button", 20);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.editId ? "Edit Leave" : "Apply Leave");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.editId ? "Update leave request" : "Submit a new leave request");
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.teacher_id);
      \u0275\u0275advance();
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.teachers);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.leave_type);
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.start_date);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.end_date);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.reason);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.loading ? "Saving..." : "Save");
    }
  }, dependencies: [CommonModule, NgForOf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterModule], styles: ["\n\n.leave-create-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n.leave-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  padding: var(--spacing-lg);\n  border-radius: var(--radius-md);\n}\n.leave-create-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-md);\n}\n.leave-create-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: var(--spacing-xs);\n  font-weight: 500;\n}\n.leave-create-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: var(--spacing-sm) var(--spacing-md);\n  border-radius: var(--radius-md);\n}\n.leave-create-container[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  flex-wrap: wrap;\n}\n.leave-create-container[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  margin-top: var(--spacing-lg);\n}\n/*# sourceMappingURL=leave-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeaveCreateComponent, { className: "LeaveCreateComponent", filePath: "src\\app\\modules\\leave-management\\leave-create\\leave-create.component.ts", lineNumber: 16 });
})();
export {
  LeaveCreateComponent
};
//# sourceMappingURL=chunk-RWP4UGX4.js.map
