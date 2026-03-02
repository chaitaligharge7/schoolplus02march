import {
  SportsService
} from "./chunk-O3CSXDAD.js";
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
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
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

// src/app/modules/sports/event-create/event-create.component.ts
var EventCreateComponent = class _EventCreateComponent {
  sportsService;
  toast;
  router;
  route;
  model = { event_name: "", event_type: "tournament", event_date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), venue: "", description: "" };
  loading = false;
  editId = null;
  constructor(sportsService, toast, router, route) {
    this.sportsService = sportsService;
    this.toast = toast;
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.editId = +id;
      this.sportsService.getEvent(this.editId).subscribe({
        next: (res) => {
          if (res.status === "success" && res.data?.event)
            this.model = __spreadValues({}, res.data.event);
        }
      });
    }
  }
  save() {
    if (!this.model.event_name?.trim()) {
      this.toast.show("Event name is required", "error");
      return;
    }
    this.loading = true;
    const obs = this.editId ? this.sportsService.updateEvent(__spreadProps(__spreadValues({}, this.model), { event_id: this.editId })) : this.sportsService.createEvent(this.model);
    obs.subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === "success") {
          this.toast.show(this.editId ? "Event updated" : "Event created", "success");
          this.router.navigate(["/app/sports/list"]);
        }
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error", "error");
      }
    });
  }
  cancel() {
    this.router.navigate(["/app/sports/list"]);
  }
  static \u0275fac = function EventCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventCreateComponent)(\u0275\u0275directiveInject(SportsService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventCreateComponent, selectors: [["app-event-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 39, vars: 8, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "form-card", 3, "ngSubmit"], [1, "form-group"], ["type", "text", "name", "event_name", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-row"], ["name", "event_type", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "tournament"], ["value", "match"], ["value", "practice"], ["value", "other"], ["type", "date", "name", "event_date", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "venue", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "description", "rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function EventCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "form", 3);
      \u0275\u0275listener("ngSubmit", function EventCreateComponent_Template_form_ngSubmit_4_listener() {
        return ctx.save();
      });
      \u0275\u0275elementStart(5, "div", 4)(6, "label");
      \u0275\u0275text(7, "Event Name *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 5);
      \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.event_name, $event) || (ctx.model.event_name = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 6)(10, "div", 4)(11, "label");
      \u0275\u0275text(12, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "select", 7);
      \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_Template_select_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.event_type, $event) || (ctx.model.event_type = $event);
        return $event;
      });
      \u0275\u0275elementStart(14, "option", 8);
      \u0275\u0275text(15, "Tournament");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "option", 9);
      \u0275\u0275text(17, "Match");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "option", 10);
      \u0275\u0275text(19, "Practice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "option", 11);
      \u0275\u0275text(21, "Other");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 4)(23, "label");
      \u0275\u0275text(24, "Event Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_Template_input_ngModelChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.event_date, $event) || (ctx.model.event_date = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 4)(27, "label");
      \u0275\u0275text(28, "Venue");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_Template_input_ngModelChange_29_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.venue, $event) || (ctx.model.venue = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 4)(31, "label");
      \u0275\u0275text(32, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "textarea", 14);
      \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_Template_textarea_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.description, $event) || (ctx.model.description = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 15)(35, "button", 16);
      \u0275\u0275listener("click", function EventCreateComponent_Template_button_click_35_listener() {
        return ctx.cancel();
      });
      \u0275\u0275text(36, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "button", 17);
      \u0275\u0275text(38);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.editId ? "Edit Event" : "Add Sports Event");
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.event_name);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.event_type);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.event_date);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.venue);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.description);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.loading ? "Saving..." : "Save");
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterModule], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n.form-card[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-lg);\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.25rem;\n  font-weight: 500;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.5rem;\n  border-radius: 6px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.form-actions[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  display: flex;\n  gap: 0.5rem;\n}\n/*# sourceMappingURL=event-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventCreateComponent, { className: "EventCreateComponent", filePath: "src\\app\\modules\\sports\\event-create\\event-create.component.ts", lineNumber: 15 });
})();
export {
  EventCreateComponent
};
//# sourceMappingURL=chunk-SBLUQDJC.js.map
