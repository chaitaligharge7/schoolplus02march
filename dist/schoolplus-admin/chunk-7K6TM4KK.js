import {
  SupportFeedbackService
} from "./chunk-YSZUK25R.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTJ43J7W.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/modules/support-feedback/ticket-create/ticket-create.component.ts
var TicketCreateComponent = class _TicketCreateComponent {
  ticketService;
  toast;
  router;
  route;
  model = { subject: "", message: "", ticket_type: "feedback" };
  loading = false;
  isEdit = false;
  ticketId = null;
  constructor(ticketService, toast, router, route) {
    this.ticketService = ticketService;
    this.toast = toast;
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    this.ticketId = Number(this.route.snapshot.paramMap.get("id")) || null;
    if (this.ticketId) {
      this.isEdit = true;
      this.loadTicket(this.ticketId);
    }
  }
  loadTicket(id) {
    this.loading = true;
    this.ticketService.getTicket(id).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === "success" && res.data?.ticket) {
          const t = res.data.ticket;
          this.model = {
            ticket_type: t.ticket_type || "feedback",
            subject: t.subject || "",
            message: t.message || ""
          };
        } else {
          this.toast.show(res.message || "Failed to load ticket", "error");
          this.router.navigate(["/app/support-feedback/list"]);
        }
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error loading ticket", "error");
        this.router.navigate(["/app/support-feedback/list"]);
      }
    });
  }
  save() {
    if (!this.model.subject?.trim() || !this.model.message?.trim()) {
      this.toast.show("Subject and message are required", "error");
      return;
    }
    this.loading = true;
    if (this.isEdit && this.ticketId) {
      const data = __spreadProps(__spreadValues({}, this.model), { ticket_id: this.ticketId });
      this.ticketService.updateTicket(data).subscribe({
        next: (res) => {
          this.loading = false;
          if (res.status === "success") {
            this.toast.show("Ticket updated", "success");
            this.router.navigate(["/app/support-feedback/list"]);
          } else {
            this.toast.show(res.message || "Failed to update ticket", "error");
          }
        },
        error: () => {
          this.loading = false;
          this.toast.show("Error updating ticket", "error");
        }
      });
    } else {
      this.ticketService.createTicket(this.model).subscribe({
        next: (res) => {
          this.loading = false;
          if (res.status === "success") {
            this.toast.show("Ticket submitted", "success");
            this.router.navigate(["/app/support-feedback/list"]);
          } else {
            this.toast.show(res.message || "Failed to submit ticket", "error");
          }
        },
        error: () => {
          this.loading = false;
          this.toast.show("Error submitting ticket", "error");
        }
      });
    }
  }
  cancel() {
    this.router.navigate(["/app/support-feedback/list"]);
  }
  static \u0275fac = function TicketCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TicketCreateComponent)(\u0275\u0275directiveInject(SupportFeedbackService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TicketCreateComponent, selectors: [["app-ticket-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 28, vars: 6, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "form-card", 3, "ngSubmit"], [1, "form-group"], ["name", "ticket_type", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "feedback"], ["value", "support"], ["value", "complaint"], ["type", "text", "name", "subject", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "message", "rows", "5", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function TicketCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "form", 3);
      \u0275\u0275listener("ngSubmit", function TicketCreateComponent_Template_form_ngSubmit_4_listener() {
        return ctx.save();
      });
      \u0275\u0275elementStart(5, "div", 4)(6, "label");
      \u0275\u0275text(7, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "select", 5);
      \u0275\u0275twoWayListener("ngModelChange", function TicketCreateComponent_Template_select_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.ticket_type, $event) || (ctx.model.ticket_type = $event);
        return $event;
      });
      \u0275\u0275elementStart(9, "option", 6);
      \u0275\u0275text(10, "Feedback");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "option", 7);
      \u0275\u0275text(12, "Support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "option", 8);
      \u0275\u0275text(14, "Complaint");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 4)(16, "label");
      \u0275\u0275text(17, "Subject *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function TicketCreateComponent_Template_input_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.subject, $event) || (ctx.model.subject = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 4)(20, "label");
      \u0275\u0275text(21, "Message *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "textarea", 10);
      \u0275\u0275twoWayListener("ngModelChange", function TicketCreateComponent_Template_textarea_ngModelChange_22_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.message, $event) || (ctx.model.message = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 11)(24, "button", 12);
      \u0275\u0275listener("click", function TicketCreateComponent_Template_button_click_24_listener() {
        return ctx.cancel();
      });
      \u0275\u0275text(25, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "button", 13);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEdit ? "Edit Ticket" : "Submit Support / Feedback");
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.ticket_type);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.subject);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.message);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? ctx.isEdit ? "Updating..." : "Submitting..." : ctx.isEdit ? "Update" : "Submit", " ");
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterModule, ReactiveFormsModule], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n.form-card[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-lg);\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.25rem;\n  font-weight: 500;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.5rem;\n  border-radius: 6px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  display: flex;\n  gap: 0.5rem;\n}\n/*# sourceMappingURL=ticket-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TicketCreateComponent, { className: "TicketCreateComponent", filePath: "src\\app\\modules\\support-feedback\\ticket-create\\ticket-create.component.ts", lineNumber: 15 });
})();
export {
  TicketCreateComponent
};
//# sourceMappingURL=chunk-7K6TM4KK.js.map
