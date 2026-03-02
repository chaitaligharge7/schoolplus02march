import {
  IdCardService
} from "./chunk-67FOGMTF.js";
import {
  AcademicYearService
} from "./chunk-A5OHQDLX.js";
import {
  ClassService
} from "./chunk-23QP2TAM.js";
import {
  CheckboxControlValueAccessor,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VTJ43J7W.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/modules/id-cards/id-card-create/id-card-create.component.ts
function IdCardCreateComponent_div_6_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1, " Card type is required ");
    \u0275\u0275elementEnd();
  }
}
function IdCardCreateComponent_div_6_option_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", p_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r3.name, " ");
  }
}
function IdCardCreateComponent_div_6_option_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cls_r4 = ctx.$implicit;
    \u0275\u0275property("ngValue", cls_r4.class_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cls_r4.class_name, " ");
  }
}
function IdCardCreateComponent_div_6_option_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const template_r5 = ctx.$implicit;
    \u0275\u0275property("ngValue", template_r5.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", template_r5.label, " ");
  }
}
function IdCardCreateComponent_div_6_button_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function IdCardCreateComponent_div_6_button_85_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.generateCards());
    });
    \u0275\u0275text(1, " Generate Cards ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving || ctx_r1.idCardForm.invalid);
  }
}
function IdCardCreateComponent_div_6_span_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Saving...");
    \u0275\u0275elementEnd();
  }
}
function IdCardCreateComponent_div_6_span_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.isEditMode ? "Update" : "Save", " Configuration");
  }
}
function IdCardCreateComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "form", 7);
    \u0275\u0275listener("ngSubmit", function IdCardCreateComponent_div_6_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(2, "div", 8)(3, "h3");
    \u0275\u0275text(4, "Card Configuration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10)(7, "label");
    \u0275\u0275text(8, "Card Type ");
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "select", 12)(12, "option", 13);
    \u0275\u0275text(13, "Student");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 14);
    \u0275\u0275text(15, "Staff");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 15);
    \u0275\u0275text(17, "Visitor");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, IdCardCreateComponent_div_6_div_18_Template, 2, 0, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 10)(20, "label");
    \u0275\u0275text(21, "Person Type ");
    \u0275\u0275elementStart(22, "span", 11);
    \u0275\u0275text(23, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "select", 17);
    \u0275\u0275listener("change", function IdCardCreateComponent_div_6_Template_select_change_24_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPersonTypeChange($event));
    });
    \u0275\u0275elementStart(25, "option", 13);
    \u0275\u0275text(26, "Student");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 14);
    \u0275\u0275text(28, "Staff");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 15);
    \u0275\u0275text(30, "Visitor");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 10)(32, "label");
    \u0275\u0275text(33, "Select Person ");
    \u0275\u0275elementStart(34, "span", 11);
    \u0275\u0275text(35, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "select", 18)(37, "option", 19);
    \u0275\u0275text(38, "Select Person");
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, IdCardCreateComponent_div_6_option_39_Template, 2, 2, "option", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 10)(41, "label");
    \u0275\u0275text(42, "Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "select", 21)(44, "option", 22);
    \u0275\u0275text(45, "All Classes");
    \u0275\u0275elementEnd();
    \u0275\u0275template(46, IdCardCreateComponent_div_6_option_46_Template, 2, 2, "option", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 10)(48, "label");
    \u0275\u0275text(49, "Card Template ");
    \u0275\u0275elementStart(50, "span", 11);
    \u0275\u0275text(51, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "select", 23)(53, "option", 19);
    \u0275\u0275text(54, "Select Template");
    \u0275\u0275elementEnd();
    \u0275\u0275template(55, IdCardCreateComponent_div_6_option_55_Template, 2, 2, "option", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 10)(57, "label");
    \u0275\u0275text(58, "Expiry Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(59, "input", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 10)(61, "label");
    \u0275\u0275text(62, "Status ");
    \u0275\u0275elementStart(63, "span", 11);
    \u0275\u0275text(64, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "select", 25)(66, "option", 26);
    \u0275\u0275text(67, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "option", 27);
    \u0275\u0275text(69, "Inactive");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(70, "div", 10)(71, "label");
    \u0275\u0275text(72, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275element(73, "textarea", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div", 10)(75, "label", 29);
    \u0275\u0275element(76, "input", 30);
    \u0275\u0275text(77, " Include Photo ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 10)(79, "label", 29);
    \u0275\u0275element(80, "input", 31);
    \u0275\u0275text(81, " Include QR Code ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(82, "div", 32)(83, "button", 33);
    \u0275\u0275listener("click", function IdCardCreateComponent_div_6_Template_button_click_83_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(84, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(85, IdCardCreateComponent_div_6_button_85_Template, 2, 1, "button", 34);
    \u0275\u0275elementStart(86, "button", 35);
    \u0275\u0275template(87, IdCardCreateComponent_div_6_span_87_Template, 2, 0, "span", 36)(88, IdCardCreateComponent_div_6_span_88_Template, 2, 1, "span", 36);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_10_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.idCardForm);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx_r1.idCardForm.get("card_type")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.idCardForm.get("card_type")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r1.idCardForm.get("card_type")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.idCardForm.get("card_type")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(19);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.people);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.classes);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.cardTemplates);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ((tmp_10_0 = ctx_r1.idCardForm.get("expiry_date")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r1.idCardForm.get("expiry_date")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance(24);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.isEditMode);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isSaving || ctx_r1.idCardForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
  }
}
function IdCardCreateComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "div", 40);
    \u0275\u0275elementEnd();
  }
}
var IdCardCreateComponent = class _IdCardCreateComponent {
  fb;
  route;
  router;
  idCardService;
  academicYearService;
  classService;
  toastService;
  idCardForm;
  isEditMode = false;
  idCardId = null;
  isLoading = false;
  isSaving = false;
  academicYears = [];
  classes = [];
  people = [];
  cardTemplates = [];
  constructor(fb, route, router, idCardService, academicYearService, classService, toastService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.idCardService = idCardService;
    this.academicYearService = academicYearService;
    this.classService = classService;
    this.toastService = toastService;
    this.idCardForm = this.fb.group({
      card_type: ["student", Validators.required],
      academic_year_id: [null, Validators.required],
      class_id: [null],
      card_template: ["standard", Validators.required],
      include_photo: [true],
      include_qr_code: [true],
      status: ["active", Validators.required],
      person_type: ["student", Validators.required],
      person_id: [null, Validators.required],
      expiry_date: [null],
      remarks: [""]
    });
  }
  ngOnInit() {
    this.cardTemplates = [
      { value: "standard", label: "Standard" },
      { value: "premium", label: "Premium" },
      { value: "vip", label: "VIP" }
    ];
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.idCardId = +params["id"];
        this.loadAcademicYears(() => {
          this.loadClasses(() => {
            this.loadIdCard();
          });
        });
      } else {
        this.loadAcademicYears();
        this.loadClasses();
        this.onPersonTypeChange({
          target: { value: this.idCardForm.get("person_type")?.value }
        });
      }
    });
  }
  loadAcademicYears(callback) {
    this.academicYearService.getCurrentAcademicYearId().subscribe({
      next: (id) => {
        if (id != null) {
          this.idCardForm.patchValue({ academic_year_id: id });
        }
        if (callback)
          callback();
      },
      error: () => {
        if (callback)
          callback();
      }
    });
  }
  loadClasses(callback) {
    this.classService.getClasses().subscribe({
      next: (response) => {
        this.classes = response.data?.classes || [];
        if (callback)
          callback();
      },
      error: () => {
        this.toastService.error("Failed to load classes");
        if (callback)
          callback();
      }
    });
  }
  loadPeople(personType) {
    if (personType === "student") {
      this.idCardService.getStudents().subscribe({
        next: (res) => {
          this.people = res.data?.students || [];
        },
        error: () => {
          this.toastService.error("Failed to load students");
        }
      });
    } else if (personType === "staff") {
      this.idCardService.getStaff().subscribe({
        next: (res) => {
          this.people = res.data?.staff || [];
        },
        error: () => {
          this.toastService.error("Failed to load staff");
        }
      });
    } else {
      this.people = [];
    }
  }
  loadIdCard() {
    if (!this.idCardId)
      return;
    this.isLoading = true;
    this.idCardService.getIdCards().subscribe({
      next: (res) => {
        const cards = res.data?.cards || [];
        const card = cards.find((c) => Number(c.card_id) === Number(this.idCardId));
        if (!card) {
          this.toastService.error("ID card not found");
          this.isLoading = false;
          return;
        }
        console.log("FULL CARD OBJECT:", card);
        console.log("include_photo:", card.include_photo);
        console.log("include_qr_code:", card.include_qr_code);
        this.idCardForm.patchValue({
          card_type: card.card_type,
          academic_year_id: Number(card.academic_year_id),
          class_id: Number(card.class_id),
          card_template: card.card_template,
          include_photo: card.include_photo == 1 || card.include_photo === true || card.include_photo === "1",
          include_qr_code: card.include_qr_code == 1 || card.include_qr_code === true || card.include_qr_code === "1",
          status: card.status,
          person_type: card.person_type,
          expiry_date: card.expiry_date ? card.expiry_date.split(" ")[0] : null,
          remarks: card.remarks
        });
        this.onPersonTypeChange({ target: { value: card.person_type } });
        setTimeout(() => {
          this.idCardForm.patchValue({
            person_id: card.person_id
          });
        }, 300);
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error("Failed to load ID card");
        this.isLoading = false;
      }
    });
  }
  onSubmit() {
    if (this.idCardForm.invalid) {
      this.idCardForm.markAllAsTouched();
      return;
    }
    this.isSaving = true;
    const formData = __spreadProps(__spreadValues({}, this.idCardForm.value), {
      include_photo: this.idCardForm.value.include_photo ? 1 : 0,
      include_qr_code: this.idCardForm.value.include_qr_code ? 1 : 0
    });
    if (this.isEditMode && this.idCardId) {
      formData.card_id = this.idCardId;
      this.idCardService.updateIdCard(formData).subscribe({
        next: (res) => {
          if (res.status === "success" && res.data?.card) {
            this.toastService.success("ID card updated successfully");
            this.router.navigate(["/app/id-cards"]);
            const card = res.data.card;
            this.idCardForm.patchValue({
              card_type: card.card_type,
              academic_year_id: Number(card.academic_year_id),
              class_id: Number(card.class_id),
              card_template: card.card_template,
              include_photo: card.include_photo == 1,
              include_qr_code: card.include_qr_code == 1,
              status: card.status,
              person_type: card.person_type,
              expiry_date: card.expiry_date,
              remarks: card.remarks,
              person_id: card.person_id
            });
            this.onPersonTypeChange({ target: { value: card.person_type } });
          } else {
            this.toastService.error(res.message || "Failed to update ID card");
          }
          this.isSaving = false;
        },
        error: () => {
          this.toastService.error("Failed to update ID card");
          this.isSaving = false;
        }
      });
    } else {
      this.idCardService.createIdCard(formData).subscribe({
        next: () => {
          this.toastService.success("ID card created successfully");
          this.router.navigate(["/app/id-cards"]);
          this.isSaving = false;
        },
        error: () => {
          this.toastService.error("Failed to create ID card");
          this.isSaving = false;
        }
      });
    }
  }
  generateCards() {
    if (this.idCardForm.invalid) {
      this.toastService.warning("Please configure ID card settings first");
      return;
    }
    const formData = this.idCardForm.value;
    const payload = {
      person_ids: [formData.person_id],
      person_type: formData.person_type || "student",
      card_type: formData.card_type || "student"
    };
    this.isSaving = true;
    this.idCardService.generateIdCards(payload).subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.toastService.success(`Generated ${response.data?.generated || 0} ID cards successfully`);
          this.router.navigate(["/app/id-cards"]);
        } else {
          this.toastService.error(response.message || "Failed to generate ID cards");
        }
        this.isSaving = false;
      },
      error: () => {
        this.toastService.error("Failed to generate ID cards");
        this.isSaving = false;
      }
    });
  }
  onPersonTypeChange(event) {
    const type = event.target.value;
    this.people = [];
    this.idCardForm.patchValue({ person_id: null });
    if (type === "student") {
      this.idCardService.getStudents().subscribe({
        next: (res) => {
          const list = res.data?.students || res.data?.data || res.data || [];
          this.people = list.map((s) => ({
            id: s.student_id || s.id,
            name: s.student_name || `${s.first_name ?? ""} ${s.last_name ?? ""}`.trim()
          }));
        }
      });
    }
    if (type === "staff") {
      this.idCardService.getStaff().subscribe({
        next: (res) => {
          const list = res.data?.teachers || res.data?.staff || res.data || [];
          this.people = list.map((t) => ({
            id: t.teacher_id || t.staff_id || t.id,
            name: t.teacher_name || t.staff_name || `${t.first_name ?? ""} ${t.last_name ?? ""}`.trim()
          }));
        }
      });
    }
    if (type === "visitor") {
      this.idCardService.getVisitors().subscribe({
        next: (res) => {
          const list = res.data || [];
          this.people = list.map((v) => ({
            id: v.visitor_id || v.id,
            name: v.visitor_name || v.name
          }));
        }
      });
    }
  }
  cancel() {
    this.router.navigate(["/app/id-cards"]);
  }
  static \u0275fac = function IdCardCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IdCardCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(IdCardService), \u0275\u0275directiveInject(AcademicYearService), \u0275\u0275directiveInject(ClassService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IdCardCreateComponent, selectors: [["app-id-card-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 4, consts: [[1, "id-card-create-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["class", "form-card", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-grid"], [1, "form-group"], [1, "required"], ["formControlName", "card_type", 1, "form-control"], ["value", "student"], ["value", "staff"], ["value", "visitor"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "person_type", 1, "form-control", 3, "change"], ["formControlName", "person_id", 1, "form-control"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["formControlName", "class_id", 1, "form-control"], [3, "value"], ["formControlName", "card_template", 1, "form-control"], ["type", "date", "formControlName", "expiry_date", 1, "form-control"], ["formControlName", "status", 1, "form-control"], ["value", "active"], ["value", "inactive"], ["formControlName", "remarks", 1, "form-control"], [1, "checkbox-label"], ["type", "checkbox", "formControlName", "include_photo", 1, "form-check-input"], ["type", "checkbox", "formControlName", "include_qr_code", 1, "form-check-input"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "button", "class", "btn btn-info", 3, "disabled", "click", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "invalid-feedback"], ["type", "button", 1, "btn", "btn-info", 3, "click", "disabled"], [1, "loading-spinner"], [1, "spinner"]], template: function IdCardCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, IdCardCreateComponent_div_6_Template, 89, 17, "div", 4)(7, IdCardCreateComponent_div_7_Template, 2, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit ID Card Configuration" : "Create ID Card Configuration");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Update ID card settings" : "Configure ID card template and settings");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.id-card-create-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.id-card-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.id-card-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.id-card-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.id-card-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.id-card-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.id-card-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #495057;\n  margin: 0 0 20px 0;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #e9ecef;\n}\n.id-card-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n.id-card-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.id-card-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #495057;\n}\n.id-card-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.id-card-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label.checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n}\n.id-card-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label.checkbox-label[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n}\n.id-card-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.id-card-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.id-card-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.id-card-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.id-card-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #e9ecef;\n}\n.id-card-create-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n}\n/*# sourceMappingURL=id-card-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IdCardCreateComponent, { className: "IdCardCreateComponent", filePath: "src\\app\\modules\\id-cards\\id-card-create\\id-card-create.component.ts", lineNumber: 17 });
})();
export {
  IdCardCreateComponent
};
//# sourceMappingURL=chunk-OQPJO7KA.js.map
