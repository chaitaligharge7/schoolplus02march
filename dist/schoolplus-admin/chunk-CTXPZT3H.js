import {
  SubjectService
} from "./chunk-YKDQPPIU.js";
import {
  DoubtHandlingService
} from "./chunk-VJNVVQUJ.js";
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
  NgIf,
  environment,
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
import {
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/modules/doubt-handling/doubt-create/doubt-create.component.ts
function DoubtCreateComponent_div_7_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", s_r3.student_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", s_r3.full_name, " (", s_r3.admission_number, ") ");
  }
}
function DoubtCreateComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "label");
    \u0275\u0275text(2, "Student");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 13);
    \u0275\u0275twoWayListener("ngModelChange", function DoubtCreateComponent_div_7_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.student_id, $event) || (ctx_r1.model.student_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 14);
    \u0275\u0275text(5, "Select Student");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, DoubtCreateComponent_div_7_option_6_Template, 2, 3, "option", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.student_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.students);
  }
}
function DoubtCreateComponent_div_8_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275property("ngValue", c_r5.class_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r5.class_name, " ");
  }
}
function DoubtCreateComponent_div_8_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r6 = ctx.$implicit;
    \u0275\u0275property("ngValue", s_r6.subject_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r6.subject_name, " ");
  }
}
function DoubtCreateComponent_div_8_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r7 = ctx.$implicit;
    \u0275\u0275property("ngValue", t_r7.teacher_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r7.full_name || t_r7.first_name + " " + t_r7.last_name, " ");
  }
}
function DoubtCreateComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 12)(2, "label");
    \u0275\u0275text(3, "Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 17);
    \u0275\u0275twoWayListener("ngModelChange", function DoubtCreateComponent_div_8_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.class_id, $event) || (ctx_r1.model.class_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function DoubtCreateComponent_div_8_Template_select_change_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadSubjects(ctx_r1.model.class_id));
    });
    \u0275\u0275elementStart(5, "option", 14);
    \u0275\u0275text(6, "Select Class");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, DoubtCreateComponent_div_8_option_7_Template, 2, 2, "option", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 12)(9, "label");
    \u0275\u0275text(10, "Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 18);
    \u0275\u0275twoWayListener("ngModelChange", function DoubtCreateComponent_div_8_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.subject_id, $event) || (ctx_r1.model.subject_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(12, "option", 14);
    \u0275\u0275text(13, "Select Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, DoubtCreateComponent_div_8_option_14_Template, 2, 2, "option", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 12)(16, "label");
    \u0275\u0275text(17, "Teacher");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "select", 19);
    \u0275\u0275twoWayListener("ngModelChange", function DoubtCreateComponent_div_8_Template_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.teacher_id, $event) || (ctx_r1.model.teacher_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(19, "option", 14);
    \u0275\u0275text(20, "Select Teacher");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, DoubtCreateComponent_div_8_option_21_Template, 2, 2, "option", 15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.class_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.classes);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.subject_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.subjects);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.teacher_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.teachers);
  }
}
function DoubtCreateComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 12)(2, "label");
    \u0275\u0275text(3, "Chapter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function DoubtCreateComponent_div_9_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.chapter_name, $event) || (ctx_r1.model.chapter_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 12)(6, "label");
    \u0275\u0275text(7, "Topic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function DoubtCreateComponent_div_9_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.topic_name, $event) || (ctx_r1.model.topic_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 12)(10, "label");
    \u0275\u0275text(11, "Priority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 22);
    \u0275\u0275twoWayListener("ngModelChange", function DoubtCreateComponent_div_9_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.pripority_level, $event) || (ctx_r1.model.pripority_level = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(13, "option", 14);
    \u0275\u0275text(14, "Select Priority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 23);
    \u0275\u0275text(16, "Urgent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 24);
    \u0275\u0275text(18, "Medium");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 25);
    \u0275\u0275text(20, "Low");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 12)(22, "label");
    \u0275\u0275text(23, "Preferred Response Mode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "select", 26);
    \u0275\u0275twoWayListener("ngModelChange", function DoubtCreateComponent_div_9_Template_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.preferred_response_mode, $event) || (ctx_r1.model.preferred_response_mode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(25, "option", 14);
    \u0275\u0275text(26, "Select Mode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 27);
    \u0275\u0275text(28, "In-App");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 28);
    \u0275\u0275text(30, "IN-Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 29);
    \u0275\u0275text(32, "Personally");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.chapter_name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.topic_name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.pripority_level);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.preferred_response_mode);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
  }
}
function DoubtCreateComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 12)(2, "label");
    \u0275\u0275text(3, "Attach Doubt File (PDF/Doc)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 30);
    \u0275\u0275listener("change", function DoubtCreateComponent_div_10_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDoubtFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small", 31);
    \u0275\u0275text(6, "Upload PDF or document file");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "label");
    \u0275\u0275text(8, "Doubt / Question ");
    \u0275\u0275elementStart(9, "span", 32);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "textarea", 33);
    \u0275\u0275twoWayListener("ngModelChange", function DoubtCreateComponent_div_10_Template_textarea_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.doubt_text, $event) || (ctx_r1.model.doubt_text = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(12, "      ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.doubt_text);
  }
}
function DoubtCreateComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "label");
    \u0275\u0275text(2, "Student Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.model.student_name);
  }
}
function DoubtCreateComponent_div_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "label");
    \u0275\u0275text(2, "Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.model.class_name);
  }
}
function DoubtCreateComponent_div_11_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "label");
    \u0275\u0275text(2, "Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.model.subject_name);
  }
}
function DoubtCreateComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275template(1, DoubtCreateComponent_div_11_div_1_Template, 5, 1, "div", 35)(2, DoubtCreateComponent_div_11_div_2_Template, 5, 1, "div", 35)(3, DoubtCreateComponent_div_11_div_3_Template, 5, 1, "div", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.model.student_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.model.class_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.model.subject_id);
  }
}
function DoubtCreateComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "label");
    \u0275\u0275text(2, "Chapter Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.model.chapter_name);
  }
}
function DoubtCreateComponent_div_12_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "label");
    \u0275\u0275text(2, "Topic Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.model.topic_name);
  }
}
function DoubtCreateComponent_div_12_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "label");
    \u0275\u0275text(2, "Priority Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.model.priority_level);
  }
}
function DoubtCreateComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, DoubtCreateComponent_div_12_div_1_Template, 5, 1, "div", 35)(2, DoubtCreateComponent_div_12_div_2_Template, 5, 1, "div", 35)(3, DoubtCreateComponent_div_12_div_3_Template, 5, 1, "div", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.model.chapter_name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.model.topic_name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.model.priority_level);
  }
}
function DoubtCreateComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 36)(2, "label");
    \u0275\u0275text(3, "Preferred Response Mode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 37);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.model.preferred_response_mode);
  }
}
function DoubtCreateComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "label", 39);
    \u0275\u0275text(2, "Original Doubt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.model.doubt_text);
  }
}
function DoubtCreateComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "label", 39);
    \u0275\u0275text(2, "Student Attached File");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "button", 40);
    \u0275\u0275listener("click", function DoubtCreateComponent_div_15_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onView(ctx_r1.model));
    });
    \u0275\u0275text(5, " View Student PDF ");
    \u0275\u0275elementEnd()()();
  }
}
function DoubtCreateComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "label");
    \u0275\u0275text(2, " Your Response ");
    \u0275\u0275elementStart(3, "span", 32);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "textarea", 41);
    \u0275\u0275twoWayListener("ngModelChange", function DoubtCreateComponent_div_16_Template_textarea_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.responseText, $event) || (ctx_r1.responseText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(6, "      ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.responseText);
  }
}
function DoubtCreateComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "label");
    \u0275\u0275text(2, "Attach Response File (PDF)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 42);
    \u0275\u0275listener("change", function DoubtCreateComponent_div_17_Template_input_change_3_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onResponseFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 31);
    \u0275\u0275text(5, "Upload PDF as your response");
    \u0275\u0275elementEnd()();
  }
}
var DoubtCreateComponent = class _DoubtCreateComponent {
  doubtService;
  studentService;
  classService;
  subjectService;
  teacherService;
  toast;
  router;
  route;
  model = {
    student_id: null,
    class_id: null,
    subject_id: null,
    teacher_id: null,
    doubt_text: "",
    chapter_name: "",
    topic_name: "",
    pripority_level: null,
    preferred_response_mode: null,
    doubt_file: null,
    response_file: null
  };
  students = [];
  classes = [];
  subjects = [];
  teachers = [];
  loading = false;
  editId = null;
  isResponse = false;
  responseText = "";
  selectedFile = null;
  constructor(doubtService, studentService, classService, subjectService, teacherService, toast, router, route) {
    this.doubtService = doubtService;
    this.studentService = studentService;
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
      this.isResponse = true;
      this.doubtService.getDoubt(this.editId).subscribe({
        next: (res) => {
          if (res.status === "success" && res.data?.doubt) {
            this.model = __spreadValues({}, res.data.doubt);
            this.responseText = res.data.doubt.response_text || "";
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
    this.studentService.getStudents(500).subscribe((r) => {
      if (r.status === "success" && r.data?.students) {
        this.students = r.data.students;
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
      next: (res) => {
        if (res.status === "success" && res.data?.subjects) {
          this.subjects = res.data.subjects;
        } else {
          this.subjects = [];
        }
      }
    });
  }
  // Doubt file for new doubts
  onDoubtFileSelected(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      this.model.doubt_file = input.files[0];
    }
  }
  // Response file for responses
  onResponseFileSelected(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      this.model.response_file = input.files[0];
    }
  }
  onView(doubt) {
    if (doubt?.doubt_file) {
      const baseUrl = environment.apiUrl.replace("/php_includes", "");
      const fileUrl = `${baseUrl}/${doubt.doubt_file}`;
      window.open(fileUrl, "_blank");
    } else {
      console.warn("No doubt file attached.");
    }
  }
  save() {
    if (!this.model.doubt_text?.trim() && !this.isResponse) {
      this.toast.show("Doubt text is required", "error");
      return;
    }
    this.loading = true;
    if (this.isResponse && this.editId) {
      const formData2 = new FormData();
      formData2.append("doubt_id", this.editId.toString());
      formData2.append("response_text", this.responseText);
      formData2.append("status", "resolved");
      if (this.model.response_file) {
        formData2.append("response_file", this.model.response_file);
      }
      this.doubtService.updateDoubt(formData2).subscribe({
        next: (res) => {
          this.loading = false;
          if (res.status === "success") {
            this.toast.show("Response saved", "success");
            this.router.navigate(["/app/doubt-handling/list"]);
          }
        },
        error: () => {
          this.loading = false;
          this.toast.show("Error", "error");
        }
      });
      return;
    }
    const formData = new FormData();
    for (const key in this.model) {
      if (key === "doubt_file" && this.model[key]) {
        formData.append("doubt_file", this.model[key]);
      } else if (key !== "response_file") {
        formData.append(key, this.model[key] ?? "");
      }
    }
    this.doubtService.createDoubt(formData).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === "success") {
          this.toast.show("Doubt submitted", "success");
          this.router.navigate(["/app/doubt-handling/list"]);
        }
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error", "error");
      }
    });
  }
  cancel() {
    this.router.navigate(["/app/doubt-handling/list"]);
  }
  static \u0275fac = function DoubtCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DoubtCreateComponent)(\u0275\u0275directiveInject(DoubtHandlingService), \u0275\u0275directiveInject(StudentService), \u0275\u0275directiveInject(ClassService), \u0275\u0275directiveInject(SubjectService), \u0275\u0275directiveInject(TeacherService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DoubtCreateComponent, selectors: [["app-doubt-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 23, vars: 15, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "form-card", 3, "ngSubmit"], ["class", "form-group", 4, "ngIf"], ["class", "form-row", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "row  mt-2", 4, "ngIf"], [1, "form-actions", "d-flex", "justify-content-end", "gap-2"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "form-group"], ["name", "student_id", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "form-row"], ["name", "class_id", "required", "", 1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["name", "subject_id", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "teacher_id", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "chapter_name", "placeholder", "Enter chapter name", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "topic_name", "placeholder", "Enter topic name", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "pripority_level", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "High"], ["value", "Medium"], ["value", "Low"], ["name", "preferred_response_mode", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["value", "in-app"], ["value", "in-class"], ["value", "personally"], ["type", "file", "accept", ".pdf,.doc,.docx", 1, "form-control", 3, "change"], [1, "form-text"], [1, "required"], ["name", "doubt_text", "rows", "4", "required", "", "placeholder", "Enter your doubt here", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "row"], ["class", "col-md-4", 4, "ngIf"], [1, "col-md-4"], [1, "doubt-box"], [1, "row", "mt-2"], [1, "fw-bold"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], ["name", "response_text", "rows", "4", "required", "", "placeholder", "Write your response here", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "file", "accept", ".pdf", 1, "form-control", 3, "change"]], template: function DoubtCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "form", 4);
      \u0275\u0275listener("ngSubmit", function DoubtCreateComponent_Template_form_ngSubmit_6_listener() {
        return ctx.save();
      });
      \u0275\u0275template(7, DoubtCreateComponent_div_7_Template, 7, 3, "div", 5)(8, DoubtCreateComponent_div_8_Template, 22, 9, "div", 6)(9, DoubtCreateComponent_div_9_Template, 33, 6, "div", 6)(10, DoubtCreateComponent_div_10_Template, 13, 1, "div", 5)(11, DoubtCreateComponent_div_11_Template, 4, 3, "div", 7)(12, DoubtCreateComponent_div_12_Template, 4, 3, "div", 8)(13, DoubtCreateComponent_div_13_Template, 6, 1, "div", 7)(14, DoubtCreateComponent_div_14_Template, 5, 1, "div", 5)(15, DoubtCreateComponent_div_15_Template, 6, 0, "div", 5)(16, DoubtCreateComponent_div_16_Template, 7, 1, "div", 5)(17, DoubtCreateComponent_div_17_Template, 6, 0, "div", 5);
      \u0275\u0275elementStart(18, "div", 9)(19, "button", 10);
      \u0275\u0275listener("click", function DoubtCreateComponent_Template_button_click_19_listener() {
        return ctx.cancel();
      });
      \u0275\u0275text(20, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 11);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.isResponse ? "Respond to Doubt" : "Add Doubt", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.isResponse ? "Provide response to student doubt" : "Submit a new doubt to teacher", " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.isResponse);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isResponse);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isResponse);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isResponse);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isResponse);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isResponse);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isResponse && ctx.model.preferred_response_mode);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isResponse && ctx.model.doubt_text);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isResponse);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isResponse);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isResponse);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "Saving..." : ctx.isResponse ? "Submit Response" : "Submit Doubt", " ");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterModule], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  max-width: 700px;\n  margin: 0 auto;\n}\n.form-card[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  padding: 1.5rem;\n  border-radius: 8px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.25rem;\n  font-weight: 500;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.5rem;\n  border-radius: 6px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.form-actions[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  display: flex;\n  gap: 0.5rem;\n}\n.doubt-text[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  background: var(--bg-primary);\n  border-radius: 6px;\n}\n/*# sourceMappingURL=doubt-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DoubtCreateComponent, { className: "DoubtCreateComponent", filePath: "src\\app\\modules\\doubt-handling\\doubt-create\\doubt-create.component.ts", lineNumber: 20 });
})();
export {
  DoubtCreateComponent
};
//# sourceMappingURL=chunk-CTXPZT3H.js.map
