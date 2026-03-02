import {
  AdmissionService
} from "./chunk-VRHYYXZA.js";
import {
  EnquiryService
} from "./chunk-LNSIZNL3.js";
import {
  AcademicYearService
} from "./chunk-A5OHQDLX.js";
import {
  SearchSelectComponent
} from "./chunk-P7OLLKRL.js";
import {
  ClassService
} from "./chunk-23QP2TAM.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
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
  ɵɵclassMap,
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
  ɵɵtextInterpolate1
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/admissions/admission-create/admission-create.component.ts
function AdmissionCreateComponent_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Converting enquiry #", ctx_r0.enquiry.enquiry_number, " to admission");
  }
}
function AdmissionCreateComponent_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 53);
    \u0275\u0275text(1, "Add a new student admission");
    \u0275\u0275elementEnd();
  }
}
function AdmissionCreateComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("click", function AdmissionCreateComponent_button_13_Template_button_click_0_listener() {
      const s_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectSection(s_r3.id));
    });
    \u0275\u0275element(1, "i", 55);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.activeSection === s_r3.id);
    \u0275\u0275advance();
    \u0275\u0275classMap(s_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r3.label);
  }
}
function AdmissionCreateComponent_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Save Changes");
    \u0275\u0275elementEnd();
  }
}
function AdmissionCreateComponent_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 56);
    \u0275\u0275text(2, " Saving...");
    \u0275\u0275elementEnd();
  }
}
var AdmissionCreateComponent = class _AdmissionCreateComponent {
  fb;
  route;
  router;
  admissionService;
  enquiryService;
  academicYearService;
  classService;
  toastService;
  admissionForm;
  isLoading = false;
  isSaving = false;
  academicYears = [];
  classes = [];
  enquiry = null;
  admissionId;
  admissionData;
  genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" }
  ];
  get academicYearOptions() {
    const all = [{ value: null, label: "Select Academic Year" }];
    const list = (this.academicYears || []).map((y) => ({ value: y.academic_year_id, label: y.academic_year_name || "" }));
    return [...all, ...list];
  }
  get appliedClassOptions() {
    const all = [{ value: null, label: "Select Class" }];
    const list = (this.classes || []).map((c) => ({ value: c.class_id, label: c.class_name || "" }));
    return [...all, ...list];
  }
  activeSection = "student";
  admissionSections = [
    { id: "student", label: "Student Information", icon: "bi-person" },
    { id: "parent", label: "Parent Information", icon: "bi-people" },
    { id: "details", label: "Admission Details", icon: "bi-journal-bookmark" },
    { id: "facilities", label: "Facilities & Fee", icon: "bi-gear" },
    { id: "documents", label: "Documents", icon: "bi-folder2" }
  ];
  constructor(fb, route, router, admissionService, enquiryService, academicYearService, classService, toastService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.admissionService = admissionService;
    this.enquiryService = enquiryService;
    this.academicYearService = academicYearService;
    this.classService = classService;
    this.toastService = toastService;
    this.admissionForm = this.fb.group({
      enquiry_id: [null],
      academic_year_id: [null, Validators.required],
      student_name: ["", Validators.required],
      date_of_birth: ["", Validators.required],
      gender: ["", Validators.required],
      parent_name: ["", Validators.required],
      parent_mobile: ["", [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      parent_email: ["", Validators.email],
      address: [""],
      applied_class_id: [null, Validators.required],
      batch_id: [null],
      previous_school: [""],
      opt_hostel: [false],
      opt_transport: [false],
      opt_mess: [false],
      opt_stationery: [false],
      opt_sports: [false],
      fee_mode: ["full"],
      remarks: [""]
    });
  }
  selectSection(id) {
    this.activeSection = id;
  }
  getActiveSectionLabel() {
    return this.admissionSections.find((s) => s.id === this.activeSection)?.label || "Section";
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params["enquiry_id"]) {
        this.loadEnquiry(+params["enquiry_id"]);
      }
    });
    this.loadAcademicYears();
    this.loadClasses();
  }
  loadAcademicYears() {
    this.academicYearService.getCurrentAcademicYearId().subscribe({
      next: (id) => {
        if (id != null) {
          this.admissionForm.patchValue({ academic_year_id: id });
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
  // loadEnquiry(enquiryId: number): void {
  //   this.isLoading = true;
  //   this.enquiryService.getEnquiry(enquiryId).subscribe({
  //     next: (response) => {
  //       this.isLoading = false;
  //       if (response.status === 'success' && response.data) {
  //         this.enquiry = response.data.enquiry;
  //         this.admissionForm.patchValue({
  //            academic_year_id: this.admissionData.academic_year_id,
  //           student_name: this.admissionData.student_name,
  //           date_of_birth: this.admissionData.date_of_birth,
  //           gender: this.admissionData.gender,
  //           parent_name: this.admissionData.parent_name,
  //           parent_mobile: this.admissionData.parent_mobile,
  //           parent_email: this.admissionData.parent_email,
  //           address: this.admissionData.address,
  //           applied_class_id: this.admissionData.applied_class_id,
  //           previous_school: this.admissionData.previous_school,
  //           remarks: this.admissionData.remarks
  //         });
  //       }
  //     },
  //     error: () => {
  //       this.isLoading = false;
  //     }
  //   });
  // }
  loadEnquiry(enquiryId) {
    this.isLoading = true;
    this.enquiryService.getEnquiry(enquiryId).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.status === "success" && response.data) {
          const e = response.data.enquiry;
          this.enquiry = e;
          this.admissionForm.patchValue({
            enquiry_id: e.enquiry_id ?? e.id ?? null,
            academic_year_id: e.academic_year_id ?? null,
            student_name: e.student_name ?? "",
            date_of_birth: e.date_of_birth ?? "",
            gender: e.gender ?? "",
            parent_name: e.parent_name ?? "",
            parent_mobile: e.parent_mobile ?? e.mobile ?? "",
            parent_email: e.parent_email ?? e.email ?? "",
            address: e.address ?? "",
            applied_class_id: e.applied_class_id ?? e.interested_class_id ?? null,
            previous_school: e.previous_school ?? "",
            remarks: e.remarks ?? ""
          });
        }
      },
      error: () => {
        this.isLoading = false;
        this.toastService.show("Failed to load enquiry", "error");
      }
    });
  }
  onSubmit() {
    if (this.admissionForm.invalid) {
      this.toastService.show("Please fill all required fields", "error");
      return;
    }
    this.isSaving = true;
    const formData = new FormData();
    const formValue = this.admissionForm.value;
    Object.keys(formValue).forEach((key) => {
      if (formValue[key] !== null && formValue[key] !== void 0) {
        formData.append(key, formValue[key]);
      }
    });
    const documentsInput = document.getElementById("documents");
    if (documentsInput?.files && documentsInput.files.length > 0) {
      for (let i = 0; i < documentsInput.files.length; i++) {
        formData.append("documents[]", documentsInput.files[i]);
      }
    }
    const formFileInput = document.getElementById("admission_form_file");
    if (formFileInput?.files && formFileInput.files.length > 0) {
      formData.append("admission_form_file", formFileInput.files[0]);
    }
    this.admissionService.createAdmission(formData).subscribe({
      next: (response) => {
        this.isSaving = false;
        if (response.status === "success") {
          const enquiryId = this.admissionForm.get("enquiry_id")?.value;
          if (enquiryId) {
            this.enquiryService.updateEnquiry(Number(enquiryId), { conversion_status: "converted" }).subscribe({
              next: () => {
              },
              error: () => {
              }
            });
          }
          this.toastService.show("Admission created successfully", "success");
          this.router.navigate(["/app/admissions"]);
        }
      },
      error: () => {
        this.isSaving = false;
        this.toastService.show("Error creating admission", "error");
      }
    });
  }
  static \u0275fac = function AdmissionCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdmissionCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AdmissionService), \u0275\u0275directiveInject(EnquiryService), \u0275\u0275directiveInject(AcademicYearService), \u0275\u0275directiveInject(ClassService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdmissionCreateComponent, selectors: [["app-admission-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 135, vars: 20, consts: [[1, "admission-create-container"], [1, "page-header"], [1, "page-title"], ["class", "page-subtitle", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "split-form-content"], [3, "ngSubmit", "formGroup"], [1, "split-form-tabs"], ["type", "button", "class", "split-form-tab", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "split-form-panel"], [1, "split-form-panel-header"], [1, "split-form-panel-title"], ["type", "submit", 1, "btn", "btn-primary", "btn-save", 3, "disabled"], [4, "ngIf"], [1, "split-form-panel-content"], [1, "split-form-section"], [1, "split-form-section-body"], [1, "form-grid"], [1, "form-group"], [1, "required"], ["type", "text", "formControlName", "student_name", "placeholder", "Full name", 1, "form-control"], ["type", "date", "formControlName", "date_of_birth", 1, "form-control"], ["formControlName", "gender", "placeholder", "Search or select gender", 3, "options"], ["type", "text", "formControlName", "parent_name", "placeholder", "Parent/guardian name", 1, "form-control"], ["type", "tel", "formControlName", "parent_mobile", "maxlength", "10", "placeholder", "10-digit mobile", 1, "form-control"], ["type", "email", "formControlName", "parent_email", "placeholder", "Email address", 1, "form-control"], [1, "form-group", "full-width"], ["formControlName", "address", "rows", "3", "placeholder", "Address", 1, "form-control"], ["formControlName", "applied_class_id", "placeholder", "Search or select class", 3, "options"], ["type", "text", "formControlName", "previous_school", "placeholder", "Previous school name", 1, "form-control"], [1, "form-group", "mb-3"], [1, "d-block"], [1, "form-check", "form-check-inline"], ["type", "checkbox", "formControlName", "opt_hostel", "id", "opt_hostel", 1, "form-check-input"], ["for", "opt_hostel", 1, "form-check-label"], ["type", "checkbox", "formControlName", "opt_transport", "id", "opt_transport", 1, "form-check-input"], ["for", "opt_transport", 1, "form-check-label"], ["type", "checkbox", "formControlName", "opt_mess", "id", "opt_mess", 1, "form-check-input"], ["for", "opt_mess", 1, "form-check-label"], ["type", "checkbox", "formControlName", "opt_stationery", "id", "opt_stationery", 1, "form-check-input"], ["for", "opt_stationery", 1, "form-check-label"], ["type", "checkbox", "formControlName", "opt_sports", "id", "opt_sports", 1, "form-check-input"], ["for", "opt_sports", 1, "form-check-label"], [1, "form-check"], ["type", "radio", "formControlName", "fee_mode", "value", "full", "id", "fee_full", 1, "form-check-input"], ["for", "fee_full", 1, "form-check-label"], ["type", "radio", "formControlName", "fee_mode", "value", "installment", "id", "fee_installment", 1, "form-check-input"], ["for", "fee_installment", 1, "form-check-label"], ["type", "file", "id", "documents", "multiple", "", "accept", ".pdf,.jpg,.jpeg,.png,.doc,.docx", 1, "form-control"], [1, "form-text"], ["type", "file", "id", "admission_form_file", "accept", ".pdf,.jpg,.jpeg,.png", 1, "form-control"], ["formControlName", "remarks", "rows", "2", "placeholder", "Remarks", 1, "form-control"], [1, "page-subtitle"], ["type", "button", 1, "split-form-tab", 3, "click"], [1, "bi"], [1, "spinner-small"]], template: function AdmissionCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Create Admission");
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, AdmissionCreateComponent_p_5_Template, 2, 1, "p", 3)(6, AdmissionCreateComponent_p_6_Template, 2, 0, "p", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275listener("click", function AdmissionCreateComponent_Template_button_click_7_listener() {
        return ctx.router.navigate(["/app/admissions"]);
      });
      \u0275\u0275element(8, "i", 5);
      \u0275\u0275text(9, " Back to Admissions ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 6)(11, "form", 7);
      \u0275\u0275listener("ngSubmit", function AdmissionCreateComponent_Template_form_ngSubmit_11_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(12, "div", 8);
      \u0275\u0275template(13, AdmissionCreateComponent_button_13_Template, 4, 5, "button", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 10)(15, "div", 11)(16, "h2", 12);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 13);
      \u0275\u0275template(19, AdmissionCreateComponent_span_19_Template, 2, 0, "span", 14)(20, AdmissionCreateComponent_span_20_Template, 3, 0, "span", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 15)(22, "div", 16)(23, "div", 17)(24, "div", 18)(25, "div", 19)(26, "label");
      \u0275\u0275text(27, "Student Name ");
      \u0275\u0275elementStart(28, "span", 20);
      \u0275\u0275text(29, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(30, "input", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 19)(32, "label");
      \u0275\u0275text(33, "Date of Birth ");
      \u0275\u0275elementStart(34, "span", 20);
      \u0275\u0275text(35, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(36, "input", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 19)(38, "label");
      \u0275\u0275text(39, "Gender ");
      \u0275\u0275elementStart(40, "span", 20);
      \u0275\u0275text(41, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(42, "app-search-select", 23);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(43, "div", 16)(44, "div", 17)(45, "div", 18)(46, "div", 19)(47, "label");
      \u0275\u0275text(48, "Parent Name ");
      \u0275\u0275elementStart(49, "span", 20);
      \u0275\u0275text(50, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(51, "input", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 19)(53, "label");
      \u0275\u0275text(54, "Parent Mobile ");
      \u0275\u0275elementStart(55, "span", 20);
      \u0275\u0275text(56, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(57, "input", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 19)(59, "label");
      \u0275\u0275text(60, "Parent Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(61, "input", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 27)(63, "label");
      \u0275\u0275text(64, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(65, "textarea", 28);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(66, "div", 16)(67, "div", 17)(68, "div", 18)(69, "div", 19)(70, "label");
      \u0275\u0275text(71, "Applied Class ");
      \u0275\u0275elementStart(72, "span", 20);
      \u0275\u0275text(73, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(74, "app-search-select", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "div", 19)(76, "label");
      \u0275\u0275text(77, "Previous School");
      \u0275\u0275elementEnd();
      \u0275\u0275element(78, "input", 30);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(79, "div", 16)(80, "div", 17)(81, "div", 31)(82, "label", 32);
      \u0275\u0275text(83, "Facilities");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div", 33);
      \u0275\u0275element(85, "input", 34);
      \u0275\u0275elementStart(86, "label", 35);
      \u0275\u0275text(87, "Hostel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "div", 33);
      \u0275\u0275element(89, "input", 36);
      \u0275\u0275elementStart(90, "label", 37);
      \u0275\u0275text(91, "Transport");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "div", 33);
      \u0275\u0275element(93, "input", 38);
      \u0275\u0275elementStart(94, "label", 39);
      \u0275\u0275text(95, "Mess");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "div", 33);
      \u0275\u0275element(97, "input", 40);
      \u0275\u0275elementStart(98, "label", 41);
      \u0275\u0275text(99, "Stationery");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "div", 33);
      \u0275\u0275element(101, "input", 42);
      \u0275\u0275elementStart(102, "label", 43);
      \u0275\u0275text(103, "Sports");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(104, "div", 19)(105, "label");
      \u0275\u0275text(106, "Fee Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "div")(108, "div", 44);
      \u0275\u0275element(109, "input", 45);
      \u0275\u0275elementStart(110, "label", 46);
      \u0275\u0275text(111, "Full Payment");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(112, "div", 44);
      \u0275\u0275element(113, "input", 47);
      \u0275\u0275elementStart(114, "label", 48);
      \u0275\u0275text(115, "Installments (50% - 30% - 20%)");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(116, "div", 16)(117, "div", 17)(118, "div", 18)(119, "div", 19)(120, "label");
      \u0275\u0275text(121, "Documents (Multiple)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(122, "input", 49);
      \u0275\u0275elementStart(123, "small", 50);
      \u0275\u0275text(124, "Upload admission documents");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(125, "div", 19)(126, "label");
      \u0275\u0275text(127, "Admission Form");
      \u0275\u0275elementEnd();
      \u0275\u0275element(128, "input", 51);
      \u0275\u0275elementStart(129, "small", 50);
      \u0275\u0275text(130, "Upload filled admission form");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "div", 27)(132, "label");
      \u0275\u0275text(133, "Remarks");
      \u0275\u0275elementEnd();
      \u0275\u0275element(134, "textarea", 52);
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.enquiry);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.enquiry);
      \u0275\u0275advance(5);
      \u0275\u0275property("formGroup", ctx.admissionForm);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.admissionSections);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.getActiveSectionLabel());
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSaving);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeSection === "student");
      \u0275\u0275advance(20);
      \u0275\u0275property("options", ctx.genderOptions);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeSection === "parent");
      \u0275\u0275advance(23);
      \u0275\u0275classProp("active", ctx.activeSection === "details");
      \u0275\u0275advance(8);
      \u0275\u0275property("options", ctx.appliedClassOptions);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.activeSection === "facilities");
      \u0275\u0275advance(37);
      \u0275\u0275classProp("active", ctx.activeSection === "documents");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, SearchSelectComponent], styles: ["\n\n.admission-create-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.admission-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n}\n.admission-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  margin: 0 0 8px 0;\n  color: var(--text-primary);\n}\n.admission-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n  margin: 0;\n}\n.admission-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.admission-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.admission-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n  color: var(--text-primary);\n  padding-bottom: 12px;\n  border-bottom: 2px solid var(--border-color);\n}\n.admission-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.admission-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row.full-width[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n.admission-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 8px;\n  color: var(--text-primary);\n}\n.admission-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: red;\n}\n.admission-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--border-color);\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.admission-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n}\n.admission-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-text[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: var(--text-secondary);\n  margin-top: 4px;\n}\n.admission-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid var(--border-color);\n}\n/*# sourceMappingURL=admission-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdmissionCreateComponent, { className: "AdmissionCreateComponent", filePath: "src\\app\\modules\\admissions\\admission-create\\admission-create.component.ts", lineNumber: 19 });
})();
export {
  AdmissionCreateComponent
};
//# sourceMappingURL=chunk-MB37LSDZ.js.map
