import {
  CounselorService
} from "./chunk-4NB4NAU4.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/counselor/lead-edit/lead-edit.component.ts
function LeadEditComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
function LeadEditComponent_form_7_div_46_div_4_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" Hostels: ", entry_r3.total_hostels, ", Rooms: ", entry_r3.total_rooms, "");
  }
}
function LeadEditComponent_form_7_div_46_div_4_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Routes: ", entry_r3.total_routes, "");
  }
}
function LeadEditComponent_form_7_div_46_div_4_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Schedules: ", entry_r3.total_schedules, "");
  }
}
function LeadEditComponent_form_7_div_46_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, LeadEditComponent_form_7_div_46_div_4_div_1_span_3_Template, 2, 2, "span", 39)(4, LeadEditComponent_form_7_div_46_div_4_div_1_span_4_Template, 2, 1, "span", 39)(5, LeadEditComponent_form_7_div_46_div_4_div_1_span_5_Template, 2, 1, "span", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r3.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", entry_r3.total_hostels);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", entry_r3.total_routes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", entry_r3.total_schedules);
  }
}
function LeadEditComponent_form_7_div_46_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275template(1, LeadEditComponent_form_7_div_46_div_4_div_1_Template, 6, 4, "div", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.facilityEntries);
  }
}
function LeadEditComponent_form_7_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32);
    \u0275\u0275text(2, "Facilities (real-time)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 33);
    \u0275\u0275template(4, LeadEditComponent_form_7_div_46_div_4_Template, 2, 1, "div", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.facilityEntries.length);
  }
}
function LeadEditComponent_form_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 7);
    \u0275\u0275listener("ngSubmit", function LeadEditComponent_form_7_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(1, "div", 8)(2, "label");
    \u0275\u0275text(3, "Lead Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 9);
    \u0275\u0275twoWayListener("ngModelChange", function LeadEditComponent_form_7_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.status, $event) || (ctx_r1.model.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "option", 10);
    \u0275\u0275text(6, "New");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 11);
    \u0275\u0275text(8, "Contacted");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 12);
    \u0275\u0275text(10, "Opportunity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 13);
    \u0275\u0275text(12, "Campus Tour");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 14);
    \u0275\u0275text(14, "Fee Discussion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 15);
    \u0275\u0275text(16, "Admitted");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 16);
    \u0275\u0275text(18, "Dropped");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 17);
    \u0275\u0275text(20, "Transferred");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 8)(22, "label");
    \u0275\u0275text(23, "Career Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "textarea", 18);
    \u0275\u0275twoWayListener("ngModelChange", function LeadEditComponent_form_7_Template_textarea_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.career_notes, $event) || (ctx_r1.model.career_notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 19)(26, "label")(27, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function LeadEditComponent_form_7_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.campus_tour_done, $event) || (ctx_r1.model.campus_tour_done = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " Campus tour done");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 19)(30, "label")(31, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function LeadEditComponent_form_7_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.fee_discussion_done, $event) || (ctx_r1.model.fee_discussion_done = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " Fee discussion done");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 8)(34, "label");
    \u0275\u0275text(35, "Next Follow-up Date (Opportunity)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function LeadEditComponent_form_7_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.next_follow_up_date, $event) || (ctx_r1.model.next_follow_up_date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 8)(38, "label");
    \u0275\u0275text(39, "Follow-up Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "textarea", 23);
    \u0275\u0275twoWayListener("ngModelChange", function LeadEditComponent_form_7_Template_textarea_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.follow_up_notes, $event) || (ctx_r1.model.follow_up_notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 24)(42, "button", 25);
    \u0275\u0275listener("click", function LeadEditComponent_form_7_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.requestCampusTour());
    });
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 26);
    \u0275\u0275listener("click", function LeadEditComponent_form_7_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFacilities());
    });
    \u0275\u0275text(45, "Facilities Panel");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(46, LeadEditComponent_form_7_div_46_Template, 5, 1, "div", 27);
    \u0275\u0275elementStart(47, "div", 28)(48, "button", 29);
    \u0275\u0275listener("click", function LeadEditComponent_form_7_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(49, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 30);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.status);
    \u0275\u0275advance(20);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.career_notes);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.campus_tour_done);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.fee_discussion_done);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.next_follow_up_date);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.follow_up_notes);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.campusTourSending);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.campusTourSending ? "Sending..." : "Request Campus Tour", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.showFacilities);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.loading ? "Saving..." : "Update");
  }
}
var LeadEditComponent = class _LeadEditComponent {
  counselor;
  toast;
  router;
  route;
  model = {
    enquiry_id: 0,
    status: "new",
    career_notes: "",
    campus_tour_done: false,
    fee_discussion_done: false,
    next_follow_up_date: "",
    follow_up_notes: ""
  };
  loading = false;
  loadingData = true;
  facilities = {};
  showFacilities = false;
  campusTourSending = false;
  get facilityEntries() {
    return Object.values(this.facilities);
  }
  constructor(counselor, toast, router, route) {
    this.counselor = counselor;
    this.toast = toast;
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.counselor.getLead(+id).subscribe({
        next: (res) => {
          this.loadingData = false;
          if (res.status === "success" && res.data?.lead) {
            const l = res.data.lead;
            this.model = {
              enquiry_id: l.enquiry_id,
              status: l.lead_status || "new",
              career_notes: l.career_notes || "",
              campus_tour_done: !!l.campus_tour_done,
              fee_discussion_done: !!l.fee_discussion_done,
              next_follow_up_date: l.next_follow_up_date || "",
              follow_up_notes: l.follow_up_notes || ""
            };
          }
        },
        error: () => {
          this.loadingData = false;
          this.toast.show("Error loading lead", "error");
          this.router.navigate(["/app/counselor/leads"]);
        }
      });
    } else {
      this.loadingData = false;
      this.router.navigate(["/app/counselor/leads"]);
    }
  }
  save() {
    this.loading = true;
    this.counselor.updateLead(this.model).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === "success") {
          this.toast.show("Lead updated", "success");
          this.router.navigate(["/app/counselor/leads"]);
        } else
          this.toast.show(res.message || "Error", "error");
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error updating lead", "error");
      }
    });
  }
  cancel() {
    this.router.navigate(["/app/counselor/leads"]);
  }
  loadFacilities() {
    this.counselor.getFacilitySummary().subscribe({
      next: (res) => {
        if (res.status === "success" && res.data?.facilities)
          this.facilities = res.data.facilities;
      }
    });
  }
  toggleFacilities() {
    this.showFacilities = !this.showFacilities;
    if (this.showFacilities && Object.keys(this.facilities).length === 0)
      this.loadFacilities();
  }
  requestCampusTour() {
    if (!this.model.enquiry_id)
      return;
    this.campusTourSending = true;
    this.counselor.requestCampusTour({ enquiry_id: this.model.enquiry_id }).subscribe({
      next: (res) => {
        this.campusTourSending = false;
        if (res.status === "success")
          this.toast.show("Campus tour requested; staff notified", "success");
        else
          this.toast.show(res.message || "Error", "error");
      },
      error: () => {
        this.campusTourSending = false;
        this.toast.show("Error", "error");
      }
    });
  }
  static \u0275fac = function LeadEditComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LeadEditComponent)(\u0275\u0275directiveInject(CounselorService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeadEditComponent, selectors: [["app-lead-edit"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 2, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["class", "loading-state", 4, "ngIf"], ["class", "form-card", 3, "ngSubmit", 4, "ngIf"], [1, "loading-state"], [1, "form-card", 3, "ngSubmit"], [1, "form-group"], ["name", "status", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "new"], ["value", "contacted"], ["value", "opportunity"], ["value", "campus_tour"], ["value", "fee_discussion"], ["value", "admitted"], ["value", "dropped"], ["value", "transferred"], ["name", "career_notes", "rows", "4", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-group", "checkbox-group"], ["type", "checkbox", "name", "campus_tour_done", 3, "ngModelChange", "ngModel"], ["type", "checkbox", "name", "fee_discussion_done", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "next_follow_up_date", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "follow_up_notes", "rows", "2", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-group", "d-flex", "gap-2", "flex-wrap"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["class", "card mb-3", 4, "ngIf"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "card", "mb-3"], [1, "card-header"], [1, "card-body"], ["class", "row g-2", 4, "ngIf"], [1, "row", "g-2"], ["class", "col-6 col-md-4", 4, "ngFor", "ngForOf"], [1, "col-6", "col-md-4"], [1, "badge", "bg-secondary"], [4, "ngIf"]], template: function LeadEditComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Edit Lead");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Update lead status and notes");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, LeadEditComponent_div_6_Template, 2, 0, "div", 4)(7, LeadEditComponent_form_7_Template, 52, 11, "form", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.loadingData);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingData && ctx.model.enquiry_id);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterModule], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.form-card[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin-top: 1rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.checkbox-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: 1rem;\n}\n.loading-state[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n}\n/*# sourceMappingURL=lead-edit.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeadEditComponent, { className: "LeadEditComponent", filePath: "src\\app\\modules\\counselor\\lead-edit\\lead-edit.component.ts", lineNumber: 15 });
})();
export {
  LeadEditComponent
};
//# sourceMappingURL=chunk-3OHATELU.js.map
