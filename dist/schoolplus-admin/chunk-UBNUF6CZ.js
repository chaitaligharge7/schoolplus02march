import {
  ComplaintService
} from "./chunk-JALG77HQ.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
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
  ActivatedRoute,
  Router
} from "./chunk-GXY6YLNG.js";
import {
  CommonModule,
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
import "./chunk-TXDUYLVM.js";

// src/app/modules/complaints/category-add/category-add.component.ts
function CategoryComponent_div_6_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1, " Category name is required ");
    \u0275\u0275elementEnd();
  }
}
function CategoryComponent_div_6_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Saving...");
    \u0275\u0275elementEnd();
  }
}
function CategoryComponent_div_6_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.isEditMode ? "Update" : "Add", " Category");
  }
}
function CategoryComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "form", 7);
    \u0275\u0275listener("ngSubmit", function CategoryComponent_div_6_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(2, "div", 8)(3, "h3");
    \u0275\u0275text(4, "Category Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "label");
    \u0275\u0275text(7, "Category Name ");
    \u0275\u0275elementStart(8, "span", 10);
    \u0275\u0275text(9, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "input", 11);
    \u0275\u0275template(11, CategoryComponent_div_6_div_11_Template, 2, 0, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 9)(13, "label", 13);
    \u0275\u0275text(14, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "textarea", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 15)(17, "label");
    \u0275\u0275text(18, "Status ");
    \u0275\u0275elementStart(19, "span", 10);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "select", 16)(22, "option", 17);
    \u0275\u0275text(23, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 17);
    \u0275\u0275text(25, "Inactive");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "div", 18)(27, "button", 19);
    \u0275\u0275listener("click", function CategoryComponent_div_6_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(28, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 20);
    \u0275\u0275template(30, CategoryComponent_div_6_span_30_Template, 2, 0, "span", 21)(31, CategoryComponent_div_6_span_31_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.categoryForm);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx_r1.categoryForm.get("category_name")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.categoryForm.get("category_name")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r1.categoryForm.get("category_name")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.categoryForm.get("category_name")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(11);
    \u0275\u0275property("value", "1");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", "0");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving || ctx_r1.categoryForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
  }
}
function CategoryComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "div", 24);
    \u0275\u0275elementEnd();
  }
}
var CategoryComponent = class _CategoryComponent {
  complaintService;
  router;
  route;
  categoryForm;
  isEditMode = false;
  isSaving = false;
  isLoading = false;
  categoryId;
  constructor(complaintService, router, route) {
    this.complaintService = complaintService;
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    this.initForm();
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.isEditMode = true;
      this.categoryId = +id;
      this.loadCategory(this.categoryId);
    }
  }
  initForm() {
    this.categoryForm = new FormGroup({
      category_name: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      category_status: new FormControl("1", Validators.required)
    });
  }
  loadCategory(id) {
    this.isLoading = true;
    this.complaintService.getCategoryById(id).subscribe({
      next: (res) => {
        const category = res.data.category;
        this.categoryForm.patchValue({
          category_name: category.category_name,
          description: category.description,
          category_status: category.category_status
        });
        this.isLoading = false;
      },
      error: () => {
        alert("Failed to load category");
        this.isLoading = false;
      }
    });
  }
  onSubmit() {
    if (this.categoryForm.invalid) {
      this.categoryForm.markAllAsTouched();
      return;
    }
    this.isSaving = true;
    const payload = {
      category_name: this.categoryForm.value.category_name,
      description: this.categoryForm.value.description,
      category_status: this.categoryForm.value.category_status
    };
    if (this.isEditMode) {
      this.updateCategory(payload);
    } else {
      this.createCategory(payload);
    }
  }
  updateCategory(payload) {
    this.complaintService.updateComplaintCategory(this.categoryId, payload).subscribe({
      next: () => {
        alert("Category updated successfully");
        this.isSaving = false;
        this.router.navigate(["/app/complaints/categorylist"]);
      },
      error: (err) => {
        alert(err?.error?.message || "Failed to update category");
        this.isSaving = false;
      }
    });
  }
  createCategory(payload) {
    this.complaintService.createCategories(payload).subscribe({
      next: () => {
        alert("Category added successfully");
        this.isSaving = false;
        this.router.navigate(["/app/complaints/categorylist"]);
      },
      error: (err) => {
        alert(err?.error?.message || "Failed to add category");
        this.isSaving = false;
      }
    });
  }
  cancel() {
    this.router.navigate(["/app/complaints/categorylist"]);
  }
  static \u0275fac = function CategoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategoryComponent)(\u0275\u0275directiveInject(ComplaintService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryComponent, selectors: [["app-category-add"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 4, consts: [[1, "category-add-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["class", "form-card", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-group", "full-width"], [1, "required"], ["type", "text", "formControlName", "category_name", "placeholder", "Enter category name", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "categoryDescription"], ["id", "categoryDescription", "formControlName", "description", "rows", "4", "placeholder", "Enter category description", 1, "form-control"], [1, "form-group"], ["formControlName", "category_status", 1, "form-control"], [3, "value"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "invalid-feedback"], [1, "loading-spinner"], [1, "spinner"]], template: function CategoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, CategoryComponent_div_6_Template, 32, 10, "div", 4)(7, CategoryComponent_div_7_Template, 2, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Category" : "Add Category");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Update category details" : "Create a new category");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule], styles: ["\n\n.category-add-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.category-add-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.category-add-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.category-add-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.category-add-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.category-add-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.category-add-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #495057;\n  margin: 0 0 20px 0;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #e9ecef;\n}\n.category-add-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n@media (max-width: 768px) {\n  .category-add-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: var(--spacing-md);\n  }\n}\n.category-add-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.category-add-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.category-add-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #495057;\n}\n.category-add-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.category-add-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.category-add-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.category-add-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.category-add-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.category-add-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.category-add-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #e9ecef;\n}\n.category-add-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n}\n/*# sourceMappingURL=category-add.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryComponent, { className: "CategoryComponent", filePath: "src\\app\\modules\\complaints\\category-add\\category-add.component.ts", lineNumber: 20 });
})();
export {
  CategoryComponent
};
//# sourceMappingURL=chunk-UBNUF6CZ.js.map
