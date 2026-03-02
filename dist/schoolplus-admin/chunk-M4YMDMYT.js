import {
  DigitalNotesService
} from "./chunk-A2HYTRBD.js";
import {
  SyllabusService
} from "./chunk-QT36LC3Q.js";
import {
  SubjectService
} from "./chunk-YKDQPPIU.js";
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
  ɵɵelement,
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
import "./chunk-TXDUYLVM.js";

// src/app/modules/digital-notes/notes-create/notes-create.component.ts
function NotesCreateComponent_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275property("ngValue", c_r1.class_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r1.class_name);
  }
}
function NotesCreateComponent_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    \u0275\u0275property("ngValue", s_r2.subject_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r2.subject_name);
  }
}
function NotesCreateComponent_option_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ch_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", ch_r3.chapter_name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ch_r3.chapter_name);
  }
}
var NotesCreateComponent = class _NotesCreateComponent {
  notesService;
  classService;
  subjectService;
  syllabusService;
  toast;
  router;
  route;
  model = {
    title: "",
    description: "",
    resource_type: "notes",
    class_id: null,
    subject_id: null,
    chapter_name: null,
    topic_name: "",
    difficulty_type: "easy"
  };
  classes = [];
  chapters = [];
  subjects = [];
  loading = false;
  isEditMode = false;
  resourceId = null;
  constructor(notesService, classService, subjectService, syllabusService, toast, router, route) {
    this.notesService = notesService;
    this.classService = classService;
    this.subjectService = subjectService;
    this.syllabusService = syllabusService;
    this.toast = toast;
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    this.classService.getClasses(200).subscribe({
      next: (r) => {
        if (r.status === "success" && r.data?.classes) {
          this.classes = r.data.classes;
        }
      }
    });
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.resourceId = +params["id"];
        this.loadResource(this.resourceId);
      }
    });
  }
  loadChapters(classId, subjectId, selectedChapterId) {
    if (!classId || !subjectId) {
      this.chapters = [];
      this.model.chapter_id = null;
      return;
    }
    this.syllabusService.getSyllabus({ class_id: classId, subject_id: subjectId }).subscribe({
      next: (res) => {
        if (res.status === "success" && res.data?.syllabus?.length) {
          const syllabus = res.data.syllabus[0];
          this.chapters = (syllabus.chapters || []).map((ch) => ({
            chapter_id: ch.chapter_id,
            chapter_name: ch.chapter_name
          }));
          if (selectedChapterId && this.chapters.find((c) => c.chapter_id === selectedChapterId)) {
            this.model.chapter_id = selectedChapterId;
          } else {
            this.model.chapter_id = null;
          }
        } else {
          this.chapters = [];
          this.model.chapter_id = null;
        }
      },
      error: () => {
        this.chapters = [];
        this.model.chapter_id = null;
      }
    });
  }
  onClassChange() {
    this.model.subject_id = null;
    this.model.chapter_id = null;
    this.subjects = [];
    this.chapters = [];
    if (this.model.class_id) {
      this.loadSubjects(this.model.class_id);
    }
  }
  onSubjectChange() {
    this.model.chapter_id = null;
    this.chapters = [];
    if (this.model.class_id && this.model.subject_id) {
      this.loadChapters(this.model.class_id, this.model.subject_id);
    }
  }
  loadResource(resourceId) {
    if (!resourceId)
      return;
    this.notesService.getResource(resourceId).subscribe({
      next: (res) => {
        if (res.status === "success" && res.data?.resource) {
          const resource = res.data.resource;
          this.model.title = resource.title;
          this.model.description = resource.description;
          this.model.resource_type = resource.resource_type;
          this.model.class_id = resource.class_id;
          this.model.chapter_name = resource.chapter_name ?? "";
          this.model.topic_name = resource.topic_name ?? "";
          if (this.model.class_id) {
            this.classService.getClassSubjects(this.model.class_id).subscribe({
              next: (subRes) => {
                this.subjects = subRes.status === "success" && subRes.data?.subjects ? subRes.data.subjects : [];
                if (this.subjects.find((s) => s.subject_id === resource.subject_id)) {
                  this.model.subject_id = resource.subject_id;
                  this.loadChapters(this.model.class_id, this.model.subject_id, resource.chapter_id);
                } else {
                  this.model.subject_id = null;
                  this.chapters = [];
                }
              },
              error: (err) => {
                console.error("Failed to load subjects:", err);
                this.subjects = [];
                this.model.subject_id = null;
                this.chapters = [];
              }
            });
          } else {
            this.model.subject_id = null;
            this.chapters = [];
          }
        }
      },
      error: (err) => {
        console.error("Failed to load resource:", err);
        this.toast.show("Failed to load resource", "error");
      }
    });
  }
  // Load subjects and optionally set selected subject
  loadSubjects(classId, selectedSubjectId) {
    if (!classId) {
      this.subjects = [];
      this.model.subject_id = null;
      return;
    }
    this.classService.getClassSubjects(classId).subscribe({
      next: (res) => {
        this.subjects = res.status === "success" && res.data?.subjects ? res.data.subjects : [];
        if (selectedSubjectId) {
          this.model.subject_id = selectedSubjectId;
        } else if (!this.subjects.find((s) => s.subject_id === this.model.subject_id)) {
          this.model.subject_id = null;
        }
      },
      error: () => {
        this.subjects = [];
        this.model.subject_id = null;
      }
    });
  }
  save() {
    if (!this.model.title?.trim()) {
      this.toast.show("Title is required", "error");
      return;
    }
    this.loading = true;
    const formData = new FormData();
    Object.keys(this.model).forEach((key) => {
      if (key === "file_path")
        return;
      const value = this.model[key];
      if (value !== null && value !== void 0) {
        formData.append(key, value);
      }
    });
    const fileInput = document.getElementById("file_path");
    if (fileInput?.files && fileInput.files.length > 0) {
      formData.append("file", fileInput.files[0]);
    }
    if (this.isEditMode && this.resourceId) {
      formData.append("resource_id", this.resourceId.toString());
      this.notesService.updateResource(formData).subscribe({
        next: (res) => {
          this.loading = false;
          if (res.status === "success") {
            this.toast.show("Resource updated", "success");
            this.router.navigate(["/app/digital-notes/list"]);
          }
        },
        error: () => {
          this.loading = false;
          this.toast.show("Error updating resource", "error");
        }
      });
    } else {
      this.notesService.createResource(formData).subscribe({
        next: (res) => {
          this.loading = false;
          if (res.status === "success") {
            this.toast.show("Resource added", "success");
            this.router.navigate(["/app/digital-notes/list"]);
          }
        },
        error: () => {
          this.loading = false;
          this.toast.show("Error", "error");
        }
      });
    }
  }
  cancel() {
    this.router.navigate(["/app/digital-notes/list"]);
  }
  static \u0275fac = function NotesCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotesCreateComponent)(\u0275\u0275directiveInject(DigitalNotesService), \u0275\u0275directiveInject(ClassService), \u0275\u0275directiveInject(SubjectService), \u0275\u0275directiveInject(SyllabusService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotesCreateComponent, selectors: [["app-notes-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 80, vars: 18, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "form-card", 3, "ngSubmit"], [1, "form-group"], ["for", "title"], ["id", "title", "type", "text", "name", "title", "required", "", "placeholder", "Enter Title", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-row"], [1, "form-group", "col-md-4"], ["for", "class_id"], ["id", "class_id", "name", "class_id", 1, "form-control", 3, "ngModelChange", "change", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["for", "subject_id"], ["id", "subject_id", "name", "subject_id", 1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["for", "resource_type"], ["id", "resource_type", "name", "resource_type", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "notes"], ["value", "pdf"], ["value", "video"], ["value", "link"], ["for", "difficulty_type"], ["id", "difficulty_type", "name", "difficulty_type", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "easy"], ["value", "medium"], ["value", "hard"], ["value", "expert"], ["for", "chapter_name"], ["id", "chapter_id", "name", "chapter_name", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "topic_name"], ["id", "topic_name", "type", "text", "name", "topic_name", "placeholder", "Enter Topic Name", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "description"], ["id", "description", "name", "description", "rows", "3", "placeholder", "Enter Description", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-section"], ["type", "file", "id", "file_path", "accept", ".pdf,.doc,.docx", 1, "form-control"], [1, "form-text"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function NotesCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "form", 3);
      \u0275\u0275listener("ngSubmit", function NotesCreateComponent_Template_form_ngSubmit_4_listener() {
        return ctx.save();
      });
      \u0275\u0275elementStart(5, "div", 4)(6, "label", 5);
      \u0275\u0275text(7, "Title *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function NotesCreateComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.title, $event) || (ctx.model.title = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "label", 9);
      \u0275\u0275text(12, "Class *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "select", 10);
      \u0275\u0275twoWayListener("ngModelChange", function NotesCreateComponent_Template_select_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.class_id, $event) || (ctx.model.class_id = $event);
        return $event;
      });
      \u0275\u0275listener("change", function NotesCreateComponent_Template_select_change_13_listener() {
        return ctx.onClassChange();
      });
      \u0275\u0275elementStart(14, "option", 11);
      \u0275\u0275text(15, "Select Class");
      \u0275\u0275elementEnd();
      \u0275\u0275template(16, NotesCreateComponent_option_16_Template, 2, 2, "option", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 8)(18, "label", 13);
      \u0275\u0275text(19, "Subject *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "select", 14);
      \u0275\u0275twoWayListener("ngModelChange", function NotesCreateComponent_Template_select_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.subject_id, $event) || (ctx.model.subject_id = $event);
        return $event;
      });
      \u0275\u0275listener("change", function NotesCreateComponent_Template_select_change_20_listener() {
        return ctx.onSubjectChange();
      });
      \u0275\u0275elementStart(21, "option", 11);
      \u0275\u0275text(22, "Select Subject");
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, NotesCreateComponent_option_23_Template, 2, 2, "option", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 8)(25, "label", 15);
      \u0275\u0275text(26, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "select", 16);
      \u0275\u0275twoWayListener("ngModelChange", function NotesCreateComponent_Template_select_ngModelChange_27_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.resource_type, $event) || (ctx.model.resource_type = $event);
        return $event;
      });
      \u0275\u0275elementStart(28, "option", 17);
      \u0275\u0275text(29, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "option", 18);
      \u0275\u0275text(31, "PDF");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "option", 19);
      \u0275\u0275text(33, "Video");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "option", 20);
      \u0275\u0275text(35, "Link");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "div", 8)(37, "label", 21);
      \u0275\u0275text(38, "Difficulty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "select", 22);
      \u0275\u0275twoWayListener("ngModelChange", function NotesCreateComponent_Template_select_ngModelChange_39_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.difficulty_type, $event) || (ctx.model.difficulty_type = $event);
        return $event;
      });
      \u0275\u0275elementStart(40, "option", 11);
      \u0275\u0275text(41, "Select Difficulty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "option", 23);
      \u0275\u0275text(43, "Easy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "option", 24);
      \u0275\u0275text(45, "Medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "option", 25);
      \u0275\u0275text(47, "Hard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "option", 26);
      \u0275\u0275text(49, "Expert");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(50, "div", 7)(51, "div", 8)(52, "label", 27);
      \u0275\u0275text(53, "Chapter *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "select", 28);
      \u0275\u0275twoWayListener("ngModelChange", function NotesCreateComponent_Template_select_ngModelChange_54_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.chapter_name, $event) || (ctx.model.chapter_name = $event);
        return $event;
      });
      \u0275\u0275elementStart(55, "option", 11);
      \u0275\u0275text(56, "Select Chapter");
      \u0275\u0275elementEnd();
      \u0275\u0275template(57, NotesCreateComponent_option_57_Template, 2, 2, "option", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 8)(59, "label", 29);
      \u0275\u0275text(60, "Topic Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "input", 30);
      \u0275\u0275twoWayListener("ngModelChange", function NotesCreateComponent_Template_input_ngModelChange_61_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.topic_name, $event) || (ctx.model.topic_name = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(62, "div", 4)(63, "label", 31);
      \u0275\u0275text(64, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "textarea", 32);
      \u0275\u0275twoWayListener("ngModelChange", function NotesCreateComponent_Template_textarea_ngModelChange_65_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.description, $event) || (ctx.model.description = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 33)(67, "h3");
      \u0275\u0275text(68, "File Upload");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 4)(70, "label");
      \u0275\u0275text(71, "Notes File (PDF/Document)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(72, "input", 34);
      \u0275\u0275elementStart(73, "small", 35);
      \u0275\u0275text(74, " Upload notes PDF or document file ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(75, "div", 36)(76, "button", 37);
      \u0275\u0275listener("click", function NotesCreateComponent_Template_button_click_76_listener() {
        return ctx.cancel();
      });
      \u0275\u0275text(77, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "button", 38);
      \u0275\u0275text(79);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Digital Resource" : "Add Digital Resource");
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.title);
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
      \u0275\u0275twoWayProperty("ngModel", ctx.model.resource_type);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.difficulty_type);
      \u0275\u0275advance();
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.chapter_name);
      \u0275\u0275advance();
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.chapters);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.topic_name);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.description);
      \u0275\u0275advance(13);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? ctx.isEditMode ? "Updating..." : "Saving..." : ctx.isEditMode ? "Update" : "Save", " ");
    }
  }, dependencies: [CommonModule, NgForOf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterModule], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n.form-card[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-lg);\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.25rem;\n  font-weight: 500;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.5rem;\n  border-radius: 6px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.form-actions[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  display: flex;\n  gap: 0.5rem;\n}\n/*# sourceMappingURL=notes-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotesCreateComponent, { className: "NotesCreateComponent", filePath: "src\\app\\modules\\digital-notes\\notes-create\\notes-create.component.ts", lineNumber: 18 });
})();
export {
  NotesCreateComponent
};
//# sourceMappingURL=chunk-M4YMDMYT.js.map
