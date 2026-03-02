import {
  CmsService
} from "./chunk-RL6ZGE2L.js";
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
  NgIf,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTJ43J7W.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/modules/cms/page-create/page-create.component.ts
function PageCreateComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "label");
    \u0275\u0275text(2, "Published");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 15);
    \u0275\u0275twoWayListener("ngModelChange", function PageCreateComponent_div_22_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.is_published, $event) || (ctx_r1.model.is_published = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 16);
    \u0275\u0275text(5, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 16);
    \u0275\u0275text(7, "No");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.is_published);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 0);
  }
}
var PageCreateComponent = class _PageCreateComponent {
  cmsService;
  toast;
  router;
  route;
  model = { title: "", slug: "", content: "", meta_description: "", is_published: 1 };
  loading = false;
  editId = null;
  constructor(cmsService, toast, router, route) {
    this.cmsService = cmsService;
    this.toast = toast;
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.editId = +id;
      this.cmsService.getPage(this.editId).subscribe({
        next: (res) => {
          if (res.status === "success" && res.data?.page)
            this.model = __spreadValues({}, res.data.page);
        }
      });
    }
  }
  save() {
    if (!this.model.title?.trim()) {
      this.toast.show("Title is required", "error");
      return;
    }
    if (!this.model.slug?.trim())
      this.model.slug = this.model.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    this.loading = true;
    const payload = this.editId ? __spreadProps(__spreadValues({}, this.model), { page_id: this.editId }) : this.model;
    const obs = this.editId ? this.cmsService.updatePage(payload) : this.cmsService.createPage(this.model);
    obs.subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === "success") {
          this.toast.show(this.editId ? "Page updated" : "Page created", "success");
          this.router.navigate(["/app/cms/list"]);
        }
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error", "error");
      }
    });
  }
  cancel() {
    this.router.navigate(["/app/cms/list"]);
  }
  static \u0275fac = function PageCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PageCreateComponent)(\u0275\u0275directiveInject(CmsService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PageCreateComponent, selectors: [["app-page-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 28, vars: 8, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "form-card", 3, "ngSubmit"], [1, "form-row"], [1, "form-group", "flex-1"], ["type", "text", "name", "title", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-group"], ["type", "text", "name", "slug", "placeholder", "url-friendly-name", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "meta_description", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "content", "rows", "12", 1, "form-control", "content-area", 3, "ngModelChange", "ngModel"], ["class", "form-group", 4, "ngIf"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["name", "is_published", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "ngValue"]], template: function PageCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "form", 3);
      \u0275\u0275listener("ngSubmit", function PageCreateComponent_Template_form_ngSubmit_4_listener() {
        return ctx.save();
      });
      \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "label");
      \u0275\u0275text(8, "Title *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function PageCreateComponent_Template_input_ngModelChange_9_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.title, $event) || (ctx.model.title = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 7)(11, "label");
      \u0275\u0275text(12, "Slug");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function PageCreateComponent_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.slug, $event) || (ctx.model.slug = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 7)(15, "label");
      \u0275\u0275text(16, "Meta Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function PageCreateComponent_Template_input_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.meta_description, $event) || (ctx.model.meta_description = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 7)(19, "label");
      \u0275\u0275text(20, "Content");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "textarea", 10);
      \u0275\u0275twoWayListener("ngModelChange", function PageCreateComponent_Template_textarea_ngModelChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.content, $event) || (ctx.model.content = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(22, PageCreateComponent_div_22_Template, 8, 3, "div", 11);
      \u0275\u0275elementStart(23, "div", 12)(24, "button", 13);
      \u0275\u0275listener("click", function PageCreateComponent_Template_button_click_24_listener() {
        return ctx.cancel();
      });
      \u0275\u0275text(25, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "button", 14);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.editId ? "Edit Page" : "Add Page");
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.title);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.slug);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.meta_description);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.content);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.editId);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.loading ? "Saving..." : "Save");
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterModule], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  max-width: 900px;\n  margin: 0 auto;\n}\n.form-card[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  padding: 1.5rem;\n  border-radius: 8px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.25rem;\n  font-weight: 500;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.5rem;\n  border-radius: 6px;\n}\n.form-group[_ngcontent-%COMP%]   .content-area[_ngcontent-%COMP%] {\n  min-height: 200px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.flex-1[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  display: flex;\n  gap: 0.5rem;\n}\n/*# sourceMappingURL=page-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PageCreateComponent, { className: "PageCreateComponent", filePath: "src\\app\\modules\\cms\\page-create\\page-create.component.ts", lineNumber: 15 });
})();
export {
  PageCreateComponent
};
//# sourceMappingURL=chunk-C6V66VAC.js.map
