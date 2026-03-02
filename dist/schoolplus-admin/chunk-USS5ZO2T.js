import {
  SubjectService
} from "./chunk-YKDQPPIU.js";
import {
  TeachingPlanService
} from "./chunk-ZHI57HZ2.js";
import {
  TeacherService
} from "./chunk-T553C5NZ.js";
import {
  ClassService
} from "./chunk-23QP2TAM.js";
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTJ43J7W.js";
import {
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/modules/teaching-plan/plan-create/plan-create.component.ts
function PlanCreateComponent_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275property("ngValue", c_r1.class_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r1.class_name, " ");
  }
}
function PlanCreateComponent_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    \u0275\u0275property("ngValue", s_r2.subject_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r2.subject_name, " ");
  }
}
function PlanCreateComponent_option_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", t_r3.teacher_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3.full_name || t_r3.first_name + " " + t_r3.last_name);
  }
}
var PlanCreateComponent = class _PlanCreateComponent {
  planService;
  classService;
  subjectService;
  teacherService;
  toast;
  router;
  route;
  model = { plan_title: "", plan_content: "", plan_date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), teacher_id: null, class_id: null, subject_id: null, plan_file: null };
  classes = [];
  subjects = [];
  teachers = [];
  loading = false;
  editId = null;
  constructor(planService, classService, subjectService, teacherService, toast, router, route) {
    this.planService = planService;
    this.classService = classService;
    this.subjectService = subjectService;
    this.teacherService = teacherService;
    this.toast = toast;
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.editId = +id;
      this.planService.getPlan(this.editId).subscribe({
        next: (res) => {
          if (res.status === "success" && res.data?.plan) {
            this.model = __spreadValues({}, res.data.plan);
            if (this.model.class_id) {
              this.loadSubjects(this.model.class_id);
            }
          }
        }
      });
    }
    this.classService.getClasses(200).subscribe((r) => {
      if (r.status === "success" && r.data?.classes) {
        this.classes = r.data.classes;
      }
    });
    this.teacherService.getTeachers(200).subscribe((r) => {
      if (r.status === "success" && r.data?.teachers) {
        this.teachers = r.data.teachers;
      }
    });
  }
  loadSubjects(classId) {
    if (!classId) {
      this.subjects = [];
      this.model.subject_id = null;
      return;
    }
    this.classService.getClassSubjects(classId).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.subjects = response.data.subjects || [];
        } else {
          this.subjects = [];
        }
      }
    });
  }
  onFileSelected(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      this.model.plan_file = input.files[0];
    }
  }
  save() {
    if (!this.model.plan_title?.trim()) {
      this.toast.show("Title is required", "error");
      return;
    }
    this.loading = true;
    const formData = new FormData();
    Object.keys(this.model).forEach((key) => {
      if (key !== "plan_file" && this.model[key] !== null && this.model[key] !== "") {
        formData.append(key, this.model[key]);
      }
    });
    if (this.model.plan_file) {
      formData.append("plan_file", this.model.plan_file);
    }
    if (this.editId) {
      formData.append("plan_id", this.editId.toString());
    }
    const obs = this.editId ? this.planService.updatePlan(formData) : this.planService.createPlan(formData);
    obs.subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === "success") {
          this.toast.show(this.editId ? "Plan updated" : "Plan created", "success");
          this.router.navigate(["/app/teaching-plan/list"]);
        } else {
          this.toast.show(res.message || "Error", "error");
        }
      },
      error: (err) => {
        this.loading = false;
        console.error("API error", err);
        this.toast.show("Error", "error");
      }
    });
  }
  cancel() {
    this.router.navigate(["/app/teaching-plan/list"]);
  }
  static \u0275fac = function PlanCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlanCreateComponent)(\u0275\u0275directiveInject(TeachingPlanService), \u0275\u0275directiveInject(ClassService), \u0275\u0275directiveInject(SubjectService), \u0275\u0275directiveInject(TeacherService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlanCreateComponent, selectors: [["app-plan-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 53, vars: 15, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "form-card", 3, "ngSubmit"], [1, "form-group"], ["type", "text", "name", "plan_title", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-row"], ["name", "class_id", 1, "form-control", 3, "ngModelChange", "change", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["name", "subject_id", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "teacher_id", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "plan_date", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "plan_content", "rows", "6", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-section"], ["type", "file", "id", "file_path", "accept", ".pdf,.doc,.docx", 1, "form-control", 3, "change"], [1, "form-text"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function PlanCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "form", 3);
      \u0275\u0275listener("ngSubmit", function PlanCreateComponent_Template_form_ngSubmit_4_listener() {
        return ctx.save();
      });
      \u0275\u0275elementStart(5, "div", 4)(6, "label");
      \u0275\u0275text(7, "Plan Title *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 5);
      \u0275\u0275twoWayListener("ngModelChange", function PlanCreateComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.plan_title, $event) || (ctx.model.plan_title = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 6)(10, "div", 4)(11, "label");
      \u0275\u0275text(12, "Class");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "select", 7);
      \u0275\u0275twoWayListener("ngModelChange", function PlanCreateComponent_Template_select_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.class_id, $event) || (ctx.model.class_id = $event);
        return $event;
      });
      \u0275\u0275listener("change", function PlanCreateComponent_Template_select_change_13_listener() {
        return ctx.loadSubjects(ctx.model.class_id);
      });
      \u0275\u0275elementStart(14, "option", 8);
      \u0275\u0275text(15, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275template(16, PlanCreateComponent_option_16_Template, 2, 2, "option", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 4)(18, "label");
      \u0275\u0275text(19, "Subject");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "select", 10);
      \u0275\u0275twoWayListener("ngModelChange", function PlanCreateComponent_Template_select_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.subject_id, $event) || (ctx.model.subject_id = $event);
        return $event;
      });
      \u0275\u0275elementStart(21, "option", 8);
      \u0275\u0275text(22, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, PlanCreateComponent_option_23_Template, 2, 2, "option", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 4)(25, "label");
      \u0275\u0275text(26, "Teacher");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "select", 11);
      \u0275\u0275twoWayListener("ngModelChange", function PlanCreateComponent_Template_select_ngModelChange_27_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.teacher_id, $event) || (ctx.model.teacher_id = $event);
        return $event;
      });
      \u0275\u0275elementStart(28, "option", 8);
      \u0275\u0275text(29, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275template(30, PlanCreateComponent_option_30_Template, 2, 2, "option", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 4)(32, "label");
      \u0275\u0275text(33, "Plan Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function PlanCreateComponent_Template_input_ngModelChange_34_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.plan_date, $event) || (ctx.model.plan_date = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 4)(36, "label");
      \u0275\u0275text(37, "Content");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "textarea", 13);
      \u0275\u0275twoWayListener("ngModelChange", function PlanCreateComponent_Template_textarea_ngModelChange_38_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.plan_content, $event) || (ctx.model.plan_content = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 14)(40, "h3");
      \u0275\u0275text(41, "File Upload");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 4)(43, "label");
      \u0275\u0275text(44, "Plan File (PDF/Document)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "input", 15);
      \u0275\u0275listener("change", function PlanCreateComponent_Template_input_change_45_listener($event) {
        return ctx.onFileSelected($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "small", 16);
      \u0275\u0275text(47, " Upload Plab PDF or document file ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "div", 17)(49, "button", 18);
      \u0275\u0275listener("click", function PlanCreateComponent_Template_button_click_49_listener() {
        return ctx.cancel();
      });
      \u0275\u0275text(50, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "button", 19);
      \u0275\u0275text(52);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.editId ? "Edit Teaching Plan" : "Add Teaching Plan");
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.plan_title);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.class_id);
      \u0275\u0275advance();
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.classes);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.subject_id);
      \u0275\u0275advance();
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.subjects);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.teacher_id);
      \u0275\u0275advance();
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.teachers);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.plan_date);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.plan_content);
      \u0275\u0275advance(13);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.loading ? "Saving..." : "Save");
    }
  }, dependencies: [CommonModule, NgForOf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterModule], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n.form-card[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-lg);\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.25rem;\n  font-weight: 500;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.5rem;\n  border-radius: 6px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.form-actions[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  display: flex;\n  gap: 0.5rem;\n}\n/*# sourceMappingURL=plan-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlanCreateComponent, { className: "PlanCreateComponent", filePath: "src\\app\\modules\\teaching-plan\\plan-create\\plan-create.component.ts", lineNumber: 18 });
})();
export {
  PlanCreateComponent
};
//# sourceMappingURL=chunk-USS5ZO2T.js.map
