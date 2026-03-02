import {
  DocumentService
} from "./chunk-HSRA4EZ7.js";
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/documents/document-create/document-create.component.ts
function DocumentCreateComponent_div_6_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
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
function DocumentCreateComponent_div_6_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1, " Student selection is required ");
    \u0275\u0275elementEnd();
  }
}
function DocumentCreateComponent_div_6_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1, " Document name is required ");
    \u0275\u0275elementEnd();
  }
}
function DocumentCreateComponent_div_6_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1, " Upload date is required ");
    \u0275\u0275elementEnd();
  }
}
function DocumentCreateComponent_div_6_span_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function DocumentCreateComponent_div_6_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275element(1, "i", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.selectedFile.name, " (", (ctx_r1.selectedFile.size / 1024).toFixed(2), " KB) ");
  }
}
function DocumentCreateComponent_div_6_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275element(1, "i", 35);
    \u0275\u0275text(2, " Current file: ");
    \u0275\u0275elementStart(3, "a", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r1.documentService.getDownloadUrl(ctx_r1.documentForm.value.document_file), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.documentForm.value.document_file, " ");
  }
}
function DocumentCreateComponent_div_6_span_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Uploading...");
    \u0275\u0275elementEnd();
  }
}
function DocumentCreateComponent_div_6_span_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.isEditMode ? "Update" : "Upload", " Document");
  }
}
function DocumentCreateComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "form", 7);
    \u0275\u0275listener("ngSubmit", function DocumentCreateComponent_div_6_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(2, "div", 8)(3, "h3");
    \u0275\u0275text(4, "Document Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10)(7, "label");
    \u0275\u0275text(8, "Student ");
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "select", 12)(12, "option", 13);
    \u0275\u0275text(13, "Select Student");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, DocumentCreateComponent_div_6_option_14_Template, 2, 4, "option", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, DocumentCreateComponent_div_6_div_15_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 10)(17, "label");
    \u0275\u0275text(18, "Document Name ");
    \u0275\u0275elementStart(19, "span", 11);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(21, "input", 16);
    \u0275\u0275template(22, DocumentCreateComponent_div_6_div_22_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 10)(24, "label");
    \u0275\u0275text(25, "Document Type ");
    \u0275\u0275elementStart(26, "span", 11);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "select", 17)(29, "option", 18);
    \u0275\u0275text(30, "Select Document Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 19);
    \u0275\u0275text(32, "Bonafide");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 20);
    \u0275\u0275text(34, "Leaving Certificate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 21);
    \u0275\u0275text(36, "Half Day Permission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option", 22);
    \u0275\u0275text(38, "Other");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 10)(40, "label");
    \u0275\u0275text(41, "Upload Date ");
    \u0275\u0275elementStart(42, "span", 11);
    \u0275\u0275text(43, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(44, "input", 23);
    \u0275\u0275template(45, DocumentCreateComponent_div_6_div_45_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 10)(47, "label");
    \u0275\u0275text(48, "File ");
    \u0275\u0275template(49, DocumentCreateComponent_div_6_span_49_Template, 2, 0, "span", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "input", 25);
    \u0275\u0275listener("change", function DocumentCreateComponent_div_6_Template_input_change_50_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileSelect($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "small", 26);
    \u0275\u0275text(52, " Allowed: Images (JPEG, PNG, GIF) and PDFs. Max size: 5MB ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(53, DocumentCreateComponent_div_6_div_53_Template, 3, 2, "div", 27)(54, DocumentCreateComponent_div_6_div_54_Template, 5, 2, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 10)(56, "label");
    \u0275\u0275text(57, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(58, "textarea", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 29)(60, "button", 30);
    \u0275\u0275listener("click", function DocumentCreateComponent_div_6_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(61, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "button", 31);
    \u0275\u0275template(63, DocumentCreateComponent_div_6_span_63_Template, 2, 0, "span", 32)(64, DocumentCreateComponent_div_6_span_64_Template, 2, 1, "span", 32);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.documentForm);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx_r1.documentForm.get("student_id")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.documentForm.get("student_id")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.students);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.documentForm.get("student_id")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.documentForm.get("student_id")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_6_0 = ctx_r1.documentForm.get("document_title")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.documentForm.get("document_title")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx_r1.documentForm.get("document_title")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r1.documentForm.get("document_title")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance(22);
    \u0275\u0275classProp("is-invalid", ((tmp_8_0 = ctx_r1.documentForm.get("upload_date")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r1.documentForm.get("upload_date")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_9_0 = ctx_r1.documentForm.get("upload_date")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r1.documentForm.get("upload_date")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.isEditMode);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.selectedFile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedFile && ctx_r1.isEditMode && ctx_r1.documentForm.value.document_file);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving || ctx_r1.documentForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
  }
}
function DocumentCreateComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275element(1, "div", 38);
    \u0275\u0275elementEnd();
  }
}
var DocumentCreateComponent = class _DocumentCreateComponent {
  fb;
  route;
  router;
  documentService;
  studentService;
  toastService;
  documentForm;
  isEditMode = false;
  documentId = null;
  isLoading = false;
  isSaving = false;
  selectedFile = null;
  students = [];
  constructor(fb, route, router, documentService, studentService, toastService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.documentService = documentService;
    this.studentService = studentService;
    this.toastService = toastService;
    this.documentForm = this.fb.group({
      student_id: [null, Validators.required],
      document_title: [""],
      document_type: ["birth_certificate", Validators.required],
      document_file: [null],
      description: [""],
      upload_date: [(/* @__PURE__ */ new Date()).toISOString().split("T")[0], Validators.required]
    });
  }
  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    if (id) {
      this.isEditMode = true;
      this.documentId = +id;
    }
    this.loadStudents();
    if (this.isEditMode) {
      this.loadDocument();
    }
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
  onFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
      const allowedTypes = ["image/jpeg", "image/png", "image/gif", "application/pdf"];
      if (!allowedTypes.includes(file.type)) {
        this.toastService.error("Invalid file type. Only images and PDFs are allowed.");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        this.toastService.error("File size exceeds 5MB limit.");
        return;
      }
      this.selectedFile = file;
    }
  }
  loadDocument() {
    if (!this.documentId)
      return;
    this.isLoading = true;
    this.documentService.getDocuments({ document_id: this.documentId }).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data?.documents?.length > 0) {
          const doc = response.data.documents.find((d) => d.document_id === this.documentId);
          if (doc) {
            this.documentForm.patchValue({
              student_id: doc.student_id,
              document_title: doc.document_title,
              document_type: doc.document_type,
              document_file: doc.document_file,
              // existing file
              description: doc.description,
              upload_date: doc.issue_date ? doc.issue_date.split(" ")[0] : ""
            });
          }
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error("Failed to load document details");
        this.isLoading = false;
      }
    });
  }
  onSubmit() {
    console.log("==============================");
    console.log("Submit triggered");
    console.log("Mode:", this.isEditMode ? "UPDATE MODE" : "CREATE MODE");
    if (this.documentForm.invalid) {
      console.log("\u274C Form is invalid", this.documentForm.value);
      this.documentForm.markAllAsTouched();
      return;
    }
    if (!this.isEditMode && !this.selectedFile) {
      console.log("\u274C No file selected in CREATE mode");
      this.toastService.warning("Please select a file to upload");
      return;
    }
    this.isSaving = true;
    const studentId = this.documentForm.value.student_id;
    const prepareAndUpload = (studentName = "") => {
      const formData = new FormData();
      let documentTitle = this.documentForm.value.document_name || "";
      if (!this.isEditMode && studentName) {
        documentTitle = `${documentTitle} - ${studentName}`;
        console.log("\u{1F4CC} Combined document title:", documentTitle);
      }
      Object.keys(this.documentForm.value).forEach((key) => {
        if (key !== "document_file") {
          formData.append(key, key === "document_name" ? documentTitle : this.documentForm.value[key]);
        }
      });
      if (this.selectedFile) {
        formData.append("document_file", this.selectedFile);
        console.log("\u{1F4CC} File appended:", this.selectedFile.name);
      }
      if (this.isEditMode && this.documentId) {
        formData.append("document_id", this.documentId.toString());
      }
      console.log("Final FormData ready to upload:", formData);
      const request$ = this.isEditMode ? this.documentService.updateDocument(formData) : this.documentService.uploadDocument(formData);
      request$.subscribe({
        next: (response) => {
          if (response.status === "success") {
            this.toastService.success(`Document ${this.isEditMode ? "updated" : "uploaded"} successfully`);
            this.router.navigate(["/app/documents"]);
          } else {
            this.toastService.error(response.message || `Failed to ${this.isEditMode ? "update" : "upload"} document`);
          }
          this.isSaving = false;
        },
        error: (error) => {
          console.error("Upload error:", error);
          this.toastService.error(`Failed to ${this.isEditMode ? "update" : "upload"} document`);
          this.isSaving = false;
        }
      });
    };
    if (!this.isEditMode && studentId) {
      this.studentService.getStudent(studentId).subscribe({
        next: (res) => {
          const studentName = res?.data?.name || "";
          prepareAndUpload(studentName);
        },
        error: () => {
          console.warn("\u26A0 Could not fetch student name, using ID only");
          prepareAndUpload("");
        }
      });
    } else {
      prepareAndUpload();
    }
  }
  cancel() {
    this.router.navigate(["/app/documents"]);
  }
  static \u0275fac = function DocumentCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DocumentCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DocumentService), \u0275\u0275directiveInject(StudentService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentCreateComponent, selectors: [["app-document-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 4, consts: [[1, "document-create-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["class", "form-card", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-grid"], [1, "form-group"], [1, "required"], ["formControlName", "student_id", 1, "form-control"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "document_title", "placeholder", "Enter document name", 1, "form-control"], ["formControlName", "document_type", "aria-label", "Select Document Type", 1, "form-control"], ["value", "", "disabled", "", "selected", ""], ["value", "bonafide"], ["value", "leaving_certificate"], ["value", "half_day_permission"], ["value", "other"], ["type", "date", "formControlName", "upload_date", 1, "form-control"], ["class", "required", 4, "ngIf"], ["type", "file", "accept", "image/*,application/pdf", 1, "form-control", 3, "change"], [1, "form-text", "text-muted"], ["class", "file-info", 4, "ngIf"], ["formControlName", "description", "rows", "3", "placeholder", "Enter document description (optional)", 1, "form-control"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "invalid-feedback"], [1, "file-info"], [1, "bi", "bi-file-earmark"], ["target", "_blank", 3, "href"], [1, "loading-spinner"], [1, "spinner"]], template: function DocumentCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, DocumentCreateComponent_div_6_Template, 65, 19, "div", 4)(7, DocumentCreateComponent_div_7_Template, 2, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Document" : "Upload Document");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Update document details" : "Upload a new document for a student");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.document-create-container[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.document-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.document-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.document-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.document-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.document-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.document-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #495057;\n  margin: 0 0 20px 0;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #e9ecef;\n}\n.document-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n@media (max-width: 768px) {\n  .document-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: var(--spacing-md);\n  }\n}\n.document-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.document-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #495057;\n}\n.document-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.document-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.document-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.document-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.document-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.document-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-text[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  font-size: 12px;\n  color: #6c757d;\n}\n.document-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .file-info[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding: 8px;\n  background: #f8f9fa;\n  border-radius: 4px;\n  font-size: 14px;\n  color: #495057;\n}\n.document-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.document-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #e9ecef;\n}\n.document-create-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n}\n/*# sourceMappingURL=document-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocumentCreateComponent, { className: "DocumentCreateComponent", filePath: "src\\app\\modules\\documents\\document-create\\document-create.component.ts", lineNumber: 16 });
})();
export {
  DocumentCreateComponent
};
//# sourceMappingURL=chunk-HQ3WT5KS.js.map
