import {
  BusDocumentService
} from "./chunk-G6H3YNUS.js";
import {
  TransportService
} from "./chunk-FJLFYIDY.js";
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
  ɵɵtextInterpolate2
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/bus-documents/bus-document-create/bus-document-create.component.ts
function BusDocumentCreateComponent_div_6_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bus_r3 = ctx.$implicit;
    \u0275\u0275property("value", bus_r3.bus_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", bus_r3.bus_number, " - ", bus_r3.route_name, " ");
  }
}
function BusDocumentCreateComponent_div_6_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1, " Bus selection is required ");
    \u0275\u0275elementEnd();
  }
}
function BusDocumentCreateComponent_div_6_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1, " Document type is required ");
    \u0275\u0275elementEnd();
  }
}
function BusDocumentCreateComponent_div_6_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1, " Document number is required ");
    \u0275\u0275elementEnd();
  }
}
function BusDocumentCreateComponent_div_6_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1, " Issue date is required ");
    \u0275\u0275elementEnd();
  }
}
function BusDocumentCreateComponent_div_6_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1, " Expiry date is required ");
    \u0275\u0275elementEnd();
  }
}
function BusDocumentCreateComponent_div_6_div_75_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 41);
    \u0275\u0275text(1, " View Current Document ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("href", ctx_r1.filePreview, \u0275\u0275sanitizeUrl);
  }
}
function BusDocumentCreateComponent_div_6_div_75_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 42);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.filePreview, \u0275\u0275sanitizeUrl);
  }
}
function BusDocumentCreateComponent_div_6_div_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, BusDocumentCreateComponent_div_6_div_75_a_1_Template, 2, 1, "a", 39)(2, BusDocumentCreateComponent_div_6_div_75_img_2_Template, 1, 1, "img", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filePreview.startsWith("http"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filePreview.startsWith("data:"));
  }
}
function BusDocumentCreateComponent_div_6_span_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Saving...");
    \u0275\u0275elementEnd();
  }
}
function BusDocumentCreateComponent_div_6_span_85_Template(rf, ctx) {
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
function BusDocumentCreateComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "form", 7);
    \u0275\u0275listener("ngSubmit", function BusDocumentCreateComponent_div_6_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(2, "div", 8)(3, "h3");
    \u0275\u0275text(4, "Document Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10)(7, "label");
    \u0275\u0275text(8, "Bus ");
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "select", 12)(12, "option", 13);
    \u0275\u0275text(13, "Select Bus");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, BusDocumentCreateComponent_div_6_option_14_Template, 2, 3, "option", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, BusDocumentCreateComponent_div_6_div_15_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 10)(17, "label");
    \u0275\u0275text(18, "Document Type ");
    \u0275\u0275elementStart(19, "span", 11);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "select", 16)(22, "option", 17);
    \u0275\u0275text(23, "Insurance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 18);
    \u0275\u0275text(25, "Permit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 19);
    \u0275\u0275text(27, "Fitness Certificate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 20);
    \u0275\u0275text(29, "License");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 21);
    \u0275\u0275text(31, "Other");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(32, BusDocumentCreateComponent_div_6_div_32_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 10)(34, "label");
    \u0275\u0275text(35, "Document Number ");
    \u0275\u0275elementStart(36, "span", 11);
    \u0275\u0275text(37, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(38, "input", 22);
    \u0275\u0275template(39, BusDocumentCreateComponent_div_6_div_39_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 10)(41, "label");
    \u0275\u0275text(42, "Issue Date ");
    \u0275\u0275elementStart(43, "span", 11);
    \u0275\u0275text(44, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(45, "input", 23);
    \u0275\u0275template(46, BusDocumentCreateComponent_div_6_div_46_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 10)(48, "label");
    \u0275\u0275text(49, "Expiry Date ");
    \u0275\u0275elementStart(50, "span", 11);
    \u0275\u0275text(51, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(52, "input", 24);
    \u0275\u0275template(53, BusDocumentCreateComponent_div_6_div_53_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 10)(55, "label");
    \u0275\u0275text(56, "Status ");
    \u0275\u0275elementStart(57, "span", 11);
    \u0275\u0275text(58, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "select", 25)(60, "option", 26);
    \u0275\u0275text(61, "Valid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "option", 27);
    \u0275\u0275text(63, "Expiring Soon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "option", 28);
    \u0275\u0275text(65, "Expired");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(66, "div", 8)(67, "h3");
    \u0275\u0275text(68, "Document File");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 10)(70, "label");
    \u0275\u0275text(71, "Upload Document");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "input", 29);
    \u0275\u0275listener("change", function BusDocumentCreateComponent_div_6_Template_input_change_72_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "small", 30);
    \u0275\u0275text(74, "Allowed formats: PDF, JPG, PNG (Max 10MB)");
    \u0275\u0275elementEnd();
    \u0275\u0275template(75, BusDocumentCreateComponent_div_6_div_75_Template, 3, 2, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div", 10)(77, "label");
    \u0275\u0275text(78, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275element(79, "textarea", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 33)(81, "button", 34);
    \u0275\u0275listener("click", function BusDocumentCreateComponent_div_6_Template_button_click_81_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(82, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "button", 35);
    \u0275\u0275template(84, BusDocumentCreateComponent_div_6_span_84_Template, 2, 0, "span", 36)(85, BusDocumentCreateComponent_div_6_span_85_Template, 2, 1, "span", 36);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.documentForm);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx_r1.documentForm.get("bus_id")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.documentForm.get("bus_id")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.buses);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.documentForm.get("bus_id")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.documentForm.get("bus_id")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_6_0 = ctx_r1.documentForm.get("document_type")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.documentForm.get("document_type")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx_r1.documentForm.get("document_type")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r1.documentForm.get("document_type")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_8_0 = ctx_r1.documentForm.get("document_number")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r1.documentForm.get("document_number")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_9_0 = ctx_r1.documentForm.get("document_number")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r1.documentForm.get("document_number")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_10_0 = ctx_r1.documentForm.get("issue_date")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r1.documentForm.get("issue_date")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_11_0 = ctx_r1.documentForm.get("issue_date")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx_r1.documentForm.get("issue_date")) == null ? null : tmp_11_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_12_0 = ctx_r1.documentForm.get("expiry_date")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx_r1.documentForm.get("expiry_date")) == null ? null : tmp_12_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_13_0 = ctx_r1.documentForm.get("expiry_date")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx_r1.documentForm.get("expiry_date")) == null ? null : tmp_13_0.touched));
    \u0275\u0275advance(22);
    \u0275\u0275property("ngIf", ctx_r1.filePreview);
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
function BusDocumentCreateComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275element(1, "div", 44);
    \u0275\u0275elementEnd();
  }
}
var BusDocumentCreateComponent = class _BusDocumentCreateComponent {
  fb;
  route;
  router;
  busDocumentService;
  transportService;
  toastService;
  documentForm;
  isEditMode = false;
  documentId = null;
  isLoading = false;
  isSaving = false;
  selectedFile = null;
  filePreview = null;
  buses = [];
  constructor(fb, route, router, busDocumentService, transportService, toastService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.busDocumentService = busDocumentService;
    this.transportService = transportService;
    this.toastService = toastService;
    this.documentForm = this.fb.group({
      bus_id: [null, Validators.required],
      document_type: ["insurance", Validators.required],
      document_number: ["", Validators.required],
      issue_date: [(/* @__PURE__ */ new Date()).toISOString().split("T")[0], Validators.required],
      expiry_date: ["", Validators.required],
      document_file: [null],
      status: ["valid", Validators.required],
      remarks: [""]
    });
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.documentId = +params["id"];
        this.loadDocument();
      }
    });
    this.loadBuses();
  }
  loadBuses() {
    this.transportService.getRoutes({}).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          const busMap = /* @__PURE__ */ new Map();
          (response.data.routes || []).forEach((route) => {
            if (route.bus_id && !busMap.has(route.bus_id)) {
              busMap.set(route.bus_id, {
                bus_id: route.bus_id,
                bus_number: route.bus_number || `Bus ${route.bus_id}`,
                route_name: route.route_name
              });
            }
          });
          this.buses = Array.from(busMap.values());
        }
      }
    });
  }
  loadDocument() {
    if (!this.documentId)
      return;
    this.isLoading = true;
    this.busDocumentService.getBusDocuments({ document_id: this.documentId }).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data?.documents?.length > 0) {
          const doc = response.data.documents[0];
          this.documentForm.patchValue({
            bus_id: doc.bus_id,
            document_type: doc.document_type,
            document_number: doc.document_number,
            issue_date: doc.issue_date,
            expiry_date: doc.expiry_date,
            status: doc.status,
            remarks: doc.remarks
          });
          if (doc.document_file) {
            this.filePreview = doc.document_file;
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
  onFileSelected(event) {
    const file = event.target.files[0];
    if (file) {
      const allowedTypes = ["application/pdf", "image/jpeg", "image/png", "image/jpg"];
      if (!allowedTypes.includes(file.type)) {
        this.toastService.error("Please upload only PDF or image files");
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        this.toastService.error("File size should not exceed 10MB");
        return;
      }
      this.selectedFile = file;
      this.documentForm.patchValue({ document_file: file });
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.filePreview = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }
  }
  onSubmit() {
    if (this.documentForm.invalid) {
      this.documentForm.markAllAsTouched();
      return;
    }
    this.isSaving = true;
    const formData = new FormData();
    const formValue = this.documentForm.value;
    Object.keys(formValue).forEach((key) => {
      if (key !== "document_file" && formValue[key] !== null && formValue[key] !== "") {
        formData.append(key, formValue[key]);
      }
    });
    if (this.selectedFile) {
      formData.append("document_file", this.selectedFile);
    }
    if (this.isEditMode && this.documentId) {
      formData.append("document_id", this.documentId.toString());
    }
    this.busDocumentService.createBusDocument(formData).subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.toastService.success(`Bus document ${this.isEditMode ? "updated" : "created"} successfully`);
          this.router.navigate(["/app/bus-documents"]);
        } else {
          this.toastService.error(response.message || `Failed to ${this.isEditMode ? "update" : "create"} document`);
        }
        this.isSaving = false;
      },
      error: () => {
        this.toastService.error(`Failed to ${this.isEditMode ? "update" : "create"} document`);
        this.isSaving = false;
      }
    });
  }
  cancel() {
    this.router.navigate(["/app/bus-documents"]);
  }
  static \u0275fac = function BusDocumentCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BusDocumentCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(BusDocumentService), \u0275\u0275directiveInject(TransportService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BusDocumentCreateComponent, selectors: [["app-bus-document-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 4, consts: [[1, "bus-document-create-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["class", "form-card", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-grid"], [1, "form-group"], [1, "required"], ["formControlName", "bus_id", 1, "form-control"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "document_type", 1, "form-control"], ["value", "insurance"], ["value", "permit"], ["value", "fitness"], ["value", "license"], ["value", "other"], ["type", "text", "formControlName", "document_number", "placeholder", "Enter document number", 1, "form-control"], ["type", "date", "formControlName", "issue_date", 1, "form-control"], ["type", "date", "formControlName", "expiry_date", 1, "form-control"], ["formControlName", "status", 1, "form-control"], ["value", "valid"], ["value", "expiring_soon"], ["value", "expired"], ["type", "file", "accept", ".pdf,.jpg,.jpeg,.png", 1, "form-control", 3, "change"], [1, "form-text", "text-muted"], ["class", "file-preview mt-2", 4, "ngIf"], ["formControlName", "remarks", "rows", "3", "placeholder", "Enter any additional remarks", 1, "form-control"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "invalid-feedback"], [1, "file-preview", "mt-2"], ["target", "_blank", 3, "href", 4, "ngIf"], ["alt", "Preview", "class", "preview-image", 3, "src", 4, "ngIf"], ["target", "_blank", 3, "href"], ["alt", "Preview", 1, "preview-image", 3, "src"], [1, "loading-spinner"], [1, "spinner"]], template: function BusDocumentCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, BusDocumentCreateComponent_div_6_Template, 86, 23, "div", 4)(7, BusDocumentCreateComponent_div_7_Template, 2, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Bus Document" : "Upload Bus Document");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Update document details" : "Upload a new bus document");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.bus-document-create-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.bus-document-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.bus-document-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.bus-document-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.bus-document-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.bus-document-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.bus-document-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.bus-document-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #495057;\n  margin: 0 0 20px 0;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #e9ecef;\n}\n.bus-document-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n.bus-document-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.bus-document-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #495057;\n}\n.bus-document-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.bus-document-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.bus-document-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.bus-document-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.bus-document-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.bus-document-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-text[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  font-size: 12px;\n  color: #6c757d;\n}\n.bus-document-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .file-preview[_ngcontent-%COMP%]   .preview-image[_ngcontent-%COMP%] {\n  max-width: 200px;\n  max-height: 200px;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  margin-top: 8px;\n}\n.bus-document-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.bus-document-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #e9ecef;\n}\n.bus-document-create-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n}\n/*# sourceMappingURL=bus-document-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BusDocumentCreateComponent, { className: "BusDocumentCreateComponent", filePath: "src\\app\\modules\\bus-documents\\bus-document-create\\bus-document-create.component.ts", lineNumber: 16 });
})();
export {
  BusDocumentCreateComponent
};
//# sourceMappingURL=chunk-WBGYVCUE.js.map
