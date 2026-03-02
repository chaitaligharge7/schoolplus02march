import {
  RemedialService
} from "./chunk-LRRU4FDA.js";
import {
  StudentService
} from "./chunk-YLBONAI4.js";
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
  CommonModule,
  EventEmitter,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTJ43J7W.js";

// src/app/modules/remedial/slider/slider.component.ts
function SliderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275listener("click", function SliderComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hide());
    });
    \u0275\u0275elementEnd();
  }
}
function SliderComponent_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const batch_r3 = ctx.$implicit;
    \u0275\u0275property("value", batch_r3.batch_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", batch_r3.batch_name, " ");
  }
}
function SliderComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 9);
    \u0275\u0275text(2, "Class");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r1.selectedBatch == null ? null : ctx_r1.selectedBatch.class_name);
  }
}
function SliderComponent_div_17_ul_4_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 26);
    \u0275\u0275listener("click", function SliderComponent_div_17_ul_4_li_1_Template_li_click_0_listener() {
      const s_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectSuggestion(s_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r6.full_name, " ");
  }
}
function SliderComponent_div_17_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 24);
    \u0275\u0275template(1, SliderComponent_div_17_ul_4_li_1_Template, 2, 1, "li", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.studentSuggestions);
  }
}
function SliderComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "label", 9);
    \u0275\u0275text(2, "Student");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function SliderComponent_div_17_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newStudentName, $event) || (ctx_r1.newStudentName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function SliderComponent_div_17_Template_input_input_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStudentInputChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SliderComponent_div_17_ul_4_Template, 2, 1, "ul", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newStudentName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.studentSuggestions.length);
  }
}
function SliderComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "button", 28);
    \u0275\u0275listener("click", function SliderComponent_div_19_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addStudent());
    });
    \u0275\u0275text(2, "Add Student");
    \u0275\u0275elementEnd()();
  }
}
function SliderComponent_div_21_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const student_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", i_r9 + 1, ". ", student_r8.full_name, " ");
  }
}
function SliderComponent_div_21_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, SliderComponent_div_21_div_3_div_1_Template, 2, 2, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.studentsToShow);
  }
}
function SliderComponent_div_21_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 31);
    \u0275\u0275text(1, "No students found.");
    \u0275\u0275elementEnd();
  }
}
function SliderComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h6");
    \u0275\u0275text(2, "Students in this class:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SliderComponent_div_21_div_3_Template, 2, 1, "div", 29)(4, SliderComponent_div_21_ng_template_4_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const noStudents_r10 = \u0275\u0275reference(5);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.studentsToShow == null ? null : ctx_r1.studentsToShow.length)("ngIfElse", noStudents_r10);
  }
}
var SliderComponent = class _SliderComponent {
  remedialService;
  toastService;
  studentService;
  visible = false;
  batches = [];
  close = new EventEmitter();
  selectedBatchId = null;
  selectedBatch = null;
  students = [];
  addedStudentIds = [];
  showClassInput = false;
  showStudentInput = false;
  newStudentName = "";
  studentSuggestions = [];
  constructor(remedialService, toastService, studentService) {
    this.remedialService = remedialService;
    this.toastService = toastService;
    this.studentService = studentService;
  }
  ngOnInit() {
    this.loadBatches();
  }
  loadBatches() {
    this.remedialService.getBatches().subscribe({
      next: (res) => {
        if (res.status === "success" && res.data) {
          this.batches = res.data.batches || [];
        }
      },
      error: (err) => console.error("Error loading batches:", err)
    });
  }
  onBatchChange() {
    this.selectedBatch = this.batches.find((b) => b.batch_id == this.selectedBatchId);
    if (!this.selectedBatch) {
      this.showClassInput = false;
      this.showStudentInput = false;
      this.students = [];
      this.addedStudentIds = [];
      this.studentSuggestions = [];
      this.newStudentName = "";
      return;
    }
    this.showClassInput = true;
    this.showStudentInput = true;
    this.newStudentName = "";
    this.studentSuggestions = [];
    this.addedStudentIds = [];
    this.studentService.getStudents({ class_id: this.selectedBatch.class_id }).subscribe({
      next: (res) => {
        if (res.status === "success" && res.data) {
          this.students = res.data.students || [];
          console.log("All class students:", this.students);
          this.remedialService.getBatchStudents(this.selectedBatchId).subscribe({
            next: (resp) => {
              if (resp.status === "success" && resp.data && resp.data.students) {
                this.addedStudentIds = resp.data.students.map((s) => s.student_id);
                console.log("Already enrolled students:", this.addedStudentIds);
              }
            },
            error: (err) => console.error("Error fetching remedial students:", err)
          });
        }
      },
      error: (err) => console.error("Error fetching class students:", err)
    });
  }
  // Students filtered to hide already enrolled
  get studentsToShow() {
    const filtered = this.students.filter((s) => !this.addedStudentIds.includes(s.student_id));
    return filtered;
  }
  // Suggestions as user types
  onStudentInputChange() {
    const term = this.newStudentName.toLowerCase().trim();
    if (!term) {
      this.studentSuggestions = [];
      return;
    }
    this.studentSuggestions = this.studentsToShow.filter((s) => s.full_name.toLowerCase().includes(term)).slice(0, 5);
  }
  selectSuggestion(student) {
    this.newStudentName = student.full_name;
    this.studentSuggestions = [];
  }
  addStudent() {
    if (!this.selectedBatchId || !this.newStudentName.trim()) {
      this.toastService.show("Please select or enter a student", "error");
      return;
    }
    const student = this.students.find((s) => s.full_name.toLowerCase() === this.newStudentName.trim().toLowerCase());
    if (!student) {
      this.toastService.show("Student not found in this class", "error");
      return;
    }
    if (this.addedStudentIds.includes(student.student_id)) {
      this.toastService.show("Student already enrolled in this batch", "error");
      return;
    }
    const payload = { batch_id: this.selectedBatchId, student_id: student.student_id };
    this.remedialService.addStudent(payload).subscribe({
      next: (res) => {
        if (res.status === "success") {
          this.toastService.show("Student added successfully", "success");
          this.addedStudentIds.push(student.student_id);
          this.newStudentName = "";
          this.studentSuggestions = [];
        } else {
          this.toastService.show(res.message || "Failed to add student", "error");
        }
      },
      error: (err) => {
        console.error("Error adding student:", err);
        this.toastService.show("Error adding student", "error");
      }
    });
  }
  hide() {
    this.close.emit();
    this.selectedBatchId = null;
    this.selectedBatch = null;
    this.showClassInput = false;
    this.showStudentInput = false;
    this.newStudentName = "";
    this.studentSuggestions = [];
    this.addedStudentIds = [];
  }
  // Return student index in the overall studentsToShow array
  getStudentIndex(student) {
    return this.studentsToShow.findIndex((s) => s.student_id === student.student_id) + 1;
  }
  // Chunk students into rows of 15
  chunkedStudents() {
    const chunkSize = 15;
    const chunks = [];
    for (let i = 0; i < this.studentsToShow.length; i += chunkSize) {
      chunks.push(this.studentsToShow.slice(i, i + chunkSize));
    }
    return chunks;
  }
  static \u0275fac = function SliderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SliderComponent)(\u0275\u0275directiveInject(RemedialService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(StudentService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SliderComponent, selectors: [["app-slider"]], inputs: { visible: "visible", batches: "batches" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 9, consts: [["noStudents", ""], ["class", "slider-backdrop", 3, "click", 4, "ngIf"], [1, "slider-panel", "p-3"], [1, "slider-header", "d-flex", "justify-content-between", "align-items-center", "mb-3"], ["type", "button", 1, "btn", "btn-light", "btn-sm", "close-btn", 3, "click"], [1, "bi", "bi-x-lg"], [1, "slider-body"], [1, "row", "g-2", "align-items-end", "mb-2"], [1, "col-md-4"], [1, "form-label"], [1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "col-md-4", 4, "ngIf"], ["class", "col-md-4", "style", "position: relative;", 4, "ngIf"], [1, "row", "mb-3"], ["class", "col d-flex justify-content-end", 4, "ngIf"], [4, "ngIf"], [1, "slider-backdrop", 3, "click"], [3, "value"], ["type", "text", "readonly", "", 1, "form-control", 3, "value"], [1, "col-md-4", 2, "position", "relative"], ["type", "text", "placeholder", "Enter student name", "autocomplete", "off", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], ["class", "list-group position-absolute w-100", "style", "z-index: 1000; max-height: 150px; overflow-y: auto;", 4, "ngIf"], [1, "list-group", "position-absolute", "w-100", 2, "z-index", "1000", "max-height", "150px", "overflow-y", "auto"], ["class", "list-group-item list-group-item-action", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", "list-group-item-action", 3, "click"], [1, "col", "d-flex", "justify-content-end"], [1, "btn", "btn-success", 3, "click"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], [1, "text-muted", "mb-0"]], template: function SliderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, SliderComponent_div_0_Template, 1, 0, "div", 1);
      \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "h4");
      \u0275\u0275text(4, "Add Remedial Student");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 4);
      \u0275\u0275listener("click", function SliderComponent_Template_button_click_5_listener() {
        return ctx.hide();
      });
      \u0275\u0275element(6, "i", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "label", 9);
      \u0275\u0275text(11, "Batch");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "select", 10);
      \u0275\u0275twoWayListener("ngModelChange", function SliderComponent_Template_select_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedBatchId, $event) || (ctx.selectedBatchId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function SliderComponent_Template_select_change_12_listener() {
        return ctx.onBatchChange();
      });
      \u0275\u0275elementStart(13, "option", 11);
      \u0275\u0275text(14, "Select Batch");
      \u0275\u0275elementEnd();
      \u0275\u0275template(15, SliderComponent_option_15_Template, 2, 2, "option", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(16, SliderComponent_div_16_Template, 4, 1, "div", 13)(17, SliderComponent_div_17_Template, 5, 2, "div", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 15);
      \u0275\u0275template(19, SliderComponent_div_19_Template, 3, 0, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "hr");
      \u0275\u0275template(21, SliderComponent_div_21_Template, 6, 2, "div", 17);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.visible);
      \u0275\u0275advance();
      \u0275\u0275classProp("visible", ctx.visible);
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedBatchId);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.batches);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showClassInput);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showStudentInput);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.showStudentInput);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.selectedBatch);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.slider-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1050;\n  background: rgba(0, 0, 0, 0.35);\n  pointer-events: auto;\n}\n.slider-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 65%;\n  min-width: 320px;\n  height: 100%;\n  background: var(--bg-primary);\n  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15), -2px 0 8px rgba(0, 0, 0, 0.08);\n  transform: translateX(100%);\n  transition: transform 0.35s cubic-bezier(0.32, 0.72, 0, 1), box-shadow 0.3s ease;\n  z-index: 1051;\n  display: flex;\n  flex-direction: column;\n  border-radius: 12px 0 0 12px;\n  overflow: hidden;\n}\n.slider-panel.visible[_ngcontent-%COMP%] {\n  transform: translateX(0);\n  box-shadow: -8px 0 32px rgba(0, 0, 0, 0.18), -4px 0 12px rgba(0, 0, 0, 0.1);\n}\n.slider-panel[_ngcontent-%COMP%]   .slider-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid var(--border-color);\n  flex-shrink: 0;\n}\n.slider-panel[_ngcontent-%COMP%]   .slider-body[_ngcontent-%COMP%] {\n  padding: var(--spacing-xl);\n  overflow-y: auto;\n  flex: 1;\n}\n.slider-panel[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-lg);\n}\nbutton.close-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: none;\n  background: var(--error-color);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: transform 0.2s ease, background 0.2s ease;\n}\nbutton.close-btn[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.1);\n  transform: scale(1.05);\n}\nbutton.close-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \nbutton.close-btn[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n@media (max-width: 768px) {\n  .slider-panel[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: unset;\n    border-radius: 0;\n  }\n}\n.slider-body[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n.slider-body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 0.5rem;\n}\n/*# sourceMappingURL=slider.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SliderComponent, { className: "SliderComponent", filePath: "src\\app\\modules\\remedial\\slider\\slider.component.ts", lineNumber: 15 });
})();

export {
  SliderComponent
};
//# sourceMappingURL=chunk-KWZH344N.js.map
