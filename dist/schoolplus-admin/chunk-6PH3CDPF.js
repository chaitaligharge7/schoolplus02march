import {
  ImportantNotesService
} from "./chunk-4HD23BJT.js";
import {
  TeacherService
} from "./chunk-T553C5NZ.js";
import {
  ToastService
} from "./chunk-FQ6RWLG3.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-GXY6YLNG.js";
import {
  CommonModule,
  NgIf,
  environment,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵtextInterpolate
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/important-notes/notes-slider/notes-slider.component.ts
function NotesSliderComponent_div_0_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "label");
    \u0275\u0275text(2, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.notes[ctx_r1.currentIndex].note_description);
  }
}
function NotesSliderComponent_div_0_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "label");
    \u0275\u0275text(2, "File");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "button", 13);
    \u0275\u0275listener("click", function NotesSliderComponent_div_0_div_38_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewFile(ctx_r1.notes[ctx_r1.currentIndex].note_id));
    });
    \u0275\u0275text(5, " View File ");
    \u0275\u0275elementEnd()()();
  }
}
function NotesSliderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h1", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 5);
    \u0275\u0275listener("click", function NotesSliderComponent_div_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275element(5, "i", 6);
    \u0275\u0275text(6, " Back ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 7)(8, "div", 8)(9, "h3");
    \u0275\u0275text(10, "Note Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 9)(12, "div", 10)(13, "label");
    \u0275\u0275text(14, "Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 10)(18, "label");
    \u0275\u0275text(19, "Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 10)(23, "label");
    \u0275\u0275text(24, "Teacher");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 10)(28, "label");
    \u0275\u0275text(29, "Note Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 10)(33, "label");
    \u0275\u0275text(34, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(37, NotesSliderComponent_div_0_div_37_Template, 5, 1, "div", 11)(38, NotesSliderComponent_div_0_div_38_Template, 6, 0, "div", 11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.notes[ctx_r1.currentIndex].note_title);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r1.notes[ctx_r1.currentIndex].class_name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.notes[ctx_r1.currentIndex].subject_name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.currentNoteTeacherName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.notes[ctx_r1.currentIndex].note_type);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.notes[ctx_r1.currentIndex].status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.notes[ctx_r1.currentIndex].note_description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.notes[ctx_r1.currentIndex].note_file);
  }
}
function NotesSliderComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "div", 15);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading note...");
    \u0275\u0275elementEnd()();
  }
}
var NotesSliderComponent = class _NotesSliderComponent {
  route;
  router;
  teacherService;
  notesService;
  toastService;
  noteId;
  notes = [];
  currentIndex = 0;
  isLoading = true;
  teachers = [];
  constructor(route, router, teacherService, notesService, toastService) {
    this.route = route;
    this.router = router;
    this.teacherService = teacherService;
    this.notesService = notesService;
    this.toastService = toastService;
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.noteId = +params["id"];
      this.loadNotes();
    });
    this.loadTeachers();
  }
  loadTeachers() {
    this.teacherService.getTeachers({}).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.teachers = response.data.teachers || [];
        }
      },
      error: () => {
        this.toastService.error("Failed to load teachers");
      }
    });
  }
  get currentNoteTeacherName() {
    if (!this.notes.length || !this.teachers.length)
      return "";
    const note = this.notes[this.currentIndex];
    const teacher = this.teachers.find((t) => t.teacher_id === note.teacher_id);
    return teacher ? `${teacher.first_name} ${teacher.last_name}` : "";
  }
  loadNotes() {
    this.isLoading = true;
    this.notesService.getNotes({ note_id: this.noteId }).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data?.notes?.length > 0) {
          this.notes = response.data.notes;
        } else {
          this.toastService.error("No notes found");
          this.router.navigate(["/app/important-notes"]);
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error("Failed to load note");
        this.isLoading = false;
        this.router.navigate(["/app/important-notes"]);
      }
    });
  }
  viewFile(noteId) {
    this.notesService.getNote(noteId).subscribe({
      next: (res) => {
        const note = res.data?.note;
        if (res.status === "success" && note?.note_file) {
          const fileUrl = `${environment.apiUrl.replace("/php_includes", "")}/${note.note_file}`;
          const link = document.createElement("a");
          link.href = fileUrl;
          link.target = "_blank";
          const fileExtension = note.note_file.split(".").pop() || "pdf";
          link.setAttribute("download", `${note.note_title || "download"}.${fileExtension}`);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          this.toastService.show("Download started", "success");
        } else {
          this.toastService.show("No file available for download", "warning");
        }
      },
      error: () => {
        this.toastService.show("Failed to load file", "error");
      }
    });
  }
  close() {
    this.router.navigate(["/app/important-notes"]);
  }
  static \u0275fac = function NotesSliderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotesSliderComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TeacherService), \u0275\u0275directiveInject(ImportantNotesService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotesSliderComponent, selectors: [["app-notes-slider"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 2, consts: [["class", "notes-view-container", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], [1, "notes-view-container"], [1, "page-header"], [1, "page-title"], [1, "btn", "btn-secondary", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "details-card"], [1, "details-section"], [1, "details-grid"], [1, "detail-item"], ["class", "detail-item full-width", 4, "ngIf"], [1, "detail-item", "full-width"], [1, "btn", "btn-link", 3, "click"], [1, "loading-state"], [1, "spinner"]], template: function NotesSliderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, NotesSliderComponent_div_0_Template, 39, 8, "div", 0)(1, NotesSliderComponent_div_1_Template, 4, 0, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.notes.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgIf], styles: ["\n\n.notes-view-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.notes-view-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n}\n.notes-view-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  margin: 0 0 8px 0;\n  color: var(--text-primary);\n}\n.notes-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.notes-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid var(--border-color);\n}\n.notes-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n}\n.notes-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 20px 0;\n  color: var(--text-primary);\n}\n.notes-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 16px;\n}\n.notes-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 6px;\n}\n.notes-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-primary);\n  margin: 0;\n}\n.notes-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.notes-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 20px;\n}\n.notes-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%]   .prev-btn[_ngcontent-%COMP%], \n.notes-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%]   .next-btn[_ngcontent-%COMP%] {\n  min-width: 100px;\n}\n.notes-view-container[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.notes-view-container[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.notes-view-container[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid var(--border-color);\n  border-top-color: var(--primary-color);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n.notes-view-container[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=notes-slider.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotesSliderComponent, { className: "NotesSliderComponent", filePath: "src\\app\\modules\\important-notes\\notes-slider\\notes-slider.component.ts", lineNumber: 17 });
})();
export {
  NotesSliderComponent
};
//# sourceMappingURL=chunk-6PH3CDPF.js.map
