import {
  EnhancedTableComponent
} from "./chunk-LT2VDVRY.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-DC2DSRDW.js";
import {
  FeeService
} from "./chunk-2IBHENQH.js";
import {
  ToastService
} from "./chunk-FQ6RWLG3.js";
import {
  RouterModule
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
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

// src/app/modules/fees/admission-tickets/admission-tickets.component.ts
function AdmissionTicketsComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "p")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 26)(8, "label", 27);
    \u0275\u0275text(9, "Amount (Rs.) *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function AdmissionTicketsComponent_div_28_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.payForm.paid_amount, $event) || (ctx_r1.payForm.paid_amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 26)(12, "label", 27);
    \u0275\u0275text(13, "Payment Mode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "select", 29);
    \u0275\u0275twoWayListener("ngModelChange", function AdmissionTicketsComponent_div_28_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.payForm.payment_mode, $event) || (ctx_r1.payForm.payment_mode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(15, "option", 30);
    \u0275\u0275text(16, "Cash");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 31);
    \u0275\u0275text(18, "UPI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 32);
    \u0275\u0275text(20, "Card");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 33);
    \u0275\u0275text(22, "Cheque");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 26)(24, "label", 27);
    \u0275\u0275text(25, "Payment Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function AdmissionTicketsComponent_div_28_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.payForm.payment_date, $event) || (ctx_r1.payForm.payment_date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 26)(28, "label", 27);
    \u0275\u0275text(29, "Transaction ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function AdmissionTicketsComponent_div_28_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.payForm.transaction_id, $event) || (ctx_r1.payForm.transaction_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 26)(32, "label", 27);
    \u0275\u0275text(33, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function AdmissionTicketsComponent_div_28_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.payForm.remarks, $event) || (ctx_r1.payForm.remarks = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 37)(36, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function AdmissionTicketsComponent_div_28_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.payForm.send_whatsapp, $event) || (ctx_r1.payForm.send_whatsapp = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "label", 39);
    \u0275\u0275text(38, "Send WhatsApp");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 37)(40, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function AdmissionTicketsComponent_div_28_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.payForm.send_email, $event) || (ctx_r1.payForm.send_email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "label", 41);
    \u0275\u0275text(42, "Send Email");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedTicket.student_name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2013 ", ctx_r1.selectedTicket.admission_number, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Parent: ", ctx_r1.selectedTicket.parent_name, " | ", ctx_r1.selectedTicket.parent_mobile, "");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.payForm.paid_amount);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.payForm.payment_mode);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.payForm.payment_date);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.payForm.transaction_id);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.payForm.remarks);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.payForm.send_whatsapp);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.payForm.send_email);
  }
}
var AdmissionTicketsComponent = class _AdmissionTicketsComponent {
  feeService;
  toast;
  tickets = [];
  loading = false;
  pagination = { page: 1, limit: 20, total: 0, pages: 0 };
  searchTerm = "";
  ticketStatus = "pending_payment";
  columns = [
    { key: "admission_number", label: "Admission No", sortable: true },
    { key: "student_name", label: "Student", sortable: true },
    { key: "parent_name", label: "Parent", sortable: false },
    { key: "parent_mobile", label: "Mobile", sortable: false },
    { key: "applied_class_name", label: "Class", sortable: false },
    { key: "admission_ticket_status", label: "Status", sortable: true, format: (v) => {
      const c = v === "paid" ? "badge-success" : "badge-warning";
      return `<span class="badge ${c}">${v || "pending_payment"}</span>`;
    } }
  ];
  rowIdKey = "admission_id";
  showPayModal = false;
  selectedTicket = null;
  payForm = { paid_amount: 0, payment_mode: "Cash", payment_date: "", transaction_id: "", remarks: "", send_whatsapp: true, send_email: true };
  saving = false;
  constructor(feeService, toast) {
    this.feeService = feeService;
    this.toast = toast;
  }
  ngOnInit() {
    this.payForm.payment_date = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    this.load();
  }
  load() {
    this.loading = true;
    const params = { page: this.pagination.page, limit: this.pagination.limit, ticket_status: this.ticketStatus };
    if (this.searchTerm)
      params.search = this.searchTerm;
    this.feeService.getAdmissionTickets(params).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === "success" && res.data) {
          this.tickets = res.data.tickets || [];
          this.pagination = res.data.pagination || this.pagination;
        }
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error loading tickets", "error");
      }
    });
  }
  onPageChange(p) {
    this.pagination.page = p;
    this.load();
  }
  onSearchChange(s) {
    this.searchTerm = s;
    this.pagination.page = 1;
    this.load();
  }
  onStatusChange(s) {
    this.ticketStatus = s;
    this.pagination.page = 1;
    this.load();
  }
  onRefresh() {
    this.load();
  }
  openPay(ticket) {
    this.selectedTicket = ticket;
    this.payForm = {
      paid_amount: 0,
      payment_mode: "Cash",
      payment_date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      transaction_id: "",
      remarks: "",
      send_whatsapp: true,
      send_email: true
    };
    this.showPayModal = true;
  }
  closePay() {
    this.showPayModal = false;
    this.selectedTicket = null;
  }
  submitPayment() {
    if (!this.selectedTicket?.admission_id || this.payForm.paid_amount <= 0) {
      this.toast.show("Enter valid amount", "error");
      return;
    }
    this.saving = true;
    this.feeService.recordAdmissionPayment({
      admission_id: this.selectedTicket.admission_id,
      paid_amount: this.payForm.paid_amount,
      payment_mode: this.payForm.payment_mode,
      payment_date: this.payForm.payment_date,
      transaction_id: this.payForm.transaction_id || void 0,
      remarks: this.payForm.remarks || void 0,
      send_whatsapp: this.payForm.send_whatsapp,
      send_email: this.payForm.send_email
    }).subscribe({
      next: (res) => {
        this.saving = false;
        if (res.status === "success") {
          this.toast.show("Payment recorded. Receipt: " + (res.data?.receipt_number || ""), "success");
          this.closePay();
          this.load();
        } else
          this.toast.show(res.message || "Error", "error");
      },
      error: () => {
        this.saving = false;
        this.toast.show("Error recording payment", "error");
      }
    });
  }
  onEdit(row) {
    this.openPay(row);
  }
  onView(row) {
    this.openPay(row);
  }
  static \u0275fac = function AdmissionTicketsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdmissionTicketsComponent)(\u0275\u0275directiveInject(FeeService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdmissionTicketsComponent, selectors: [["app-admission-tickets"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 35, vars: 16, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "filters", "mb-3"], [1, "filter-group"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["value", "pending_payment"], ["value", "paid"], ["value", ""], [3, "pageChange", "searchChange", "refresh", "editClick", "viewClick", "data", "columns", "pagination", "loading", "rowIdKey", "searchPlaceholder"], [1, "mt-2"], ["type", "button", 1, "btn", "btn-sm", "btn-outline", 3, "click"], ["tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], ["class", "modal-body", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], [1, "modal-backdrop", "fade", 3, "click"], [1, "modal-body"], [1, "text-muted", "small"], [1, "mb-2"], [1, "form-label"], ["type", "number", "min", "0.01", "step", "0.01", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "Cash"], ["value", "UPI"], ["value", "Card"], ["value", "Cheque"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Optional", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-check", "form-check-inline"], ["type", "checkbox", "id", "send_wa", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "send_wa", 1, "form-check-label"], ["type", "checkbox", "id", "send_em", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "send_em", 1, "form-check-label"]], template: function AdmissionTicketsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Admission Tickets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Accountant \u2013 collect payment for new admissions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "label");
      \u0275\u0275text(9, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function AdmissionTicketsComponent_Template_select_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.ticketStatus, $event) || (ctx.ticketStatus = $event);
        return $event;
      });
      \u0275\u0275listener("change", function AdmissionTicketsComponent_Template_select_change_10_listener() {
        return ctx.onStatusChange(ctx.ticketStatus);
      });
      \u0275\u0275elementStart(11, "option", 7);
      \u0275\u0275text(12, "Pending Payment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "option", 8);
      \u0275\u0275text(14, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "option", 9);
      \u0275\u0275text(16, "All");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "app-enhanced-table", 10);
      \u0275\u0275listener("pageChange", function AdmissionTicketsComponent_Template_app_enhanced_table_pageChange_17_listener($event) {
        return ctx.onPageChange($event);
      })("searchChange", function AdmissionTicketsComponent_Template_app_enhanced_table_searchChange_17_listener($event) {
        return ctx.onSearchChange($event);
      })("refresh", function AdmissionTicketsComponent_Template_app_enhanced_table_refresh_17_listener() {
        return ctx.onRefresh();
      })("editClick", function AdmissionTicketsComponent_Template_app_enhanced_table_editClick_17_listener($event) {
        return ctx.onEdit($event);
      })("viewClick", function AdmissionTicketsComponent_Template_app_enhanced_table_viewClick_17_listener($event) {
        return ctx.onView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 11)(19, "button", 12);
      \u0275\u0275listener("click", function AdmissionTicketsComponent_Template_button_click_19_listener() {
        return ctx.load();
      });
      \u0275\u0275text(20, "Refresh");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 13)(22, "div", 14)(23, "div", 15)(24, "div", 16)(25, "h5", 17);
      \u0275\u0275text(26, "Record Payment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "button", 18);
      \u0275\u0275listener("click", function AdmissionTicketsComponent_Template_button_click_27_listener() {
        return ctx.closePay();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(28, AdmissionTicketsComponent_div_28_Template, 43, 11, "div", 19);
      \u0275\u0275elementStart(29, "div", 20)(30, "button", 21);
      \u0275\u0275listener("click", function AdmissionTicketsComponent_Template_button_click_30_listener() {
        return ctx.closePay();
      });
      \u0275\u0275text(31, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "button", 22);
      \u0275\u0275listener("click", function AdmissionTicketsComponent_Template_button_click_32_listener() {
        return ctx.submitPayment();
      });
      \u0275\u0275text(33);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(34, "div", 23);
      \u0275\u0275listener("click", function AdmissionTicketsComponent_Template_div_click_34_listener() {
        return ctx.closePay();
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.ticketStatus);
      \u0275\u0275advance(7);
      \u0275\u0275property("data", ctx.tickets)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("rowIdKey", ctx.rowIdKey)("searchPlaceholder", "Search student or admission...");
      \u0275\u0275advance(4);
      \u0275\u0275styleProp("display", ctx.showPayModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showPayModal);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.selectedTicket);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.saving ? "Saving..." : "Record Payment", " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("show", ctx.showPayModal);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, RouterModule, EnhancedTableComponent], styles: ["\n\n.modal.fade.show[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.5);\n}\n.modal-backdrop.fade.show[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=admission-tickets.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdmissionTicketsComponent, { className: "AdmissionTicketsComponent", filePath: "src\\app\\modules\\fees\\admission-tickets\\admission-tickets.component.ts", lineNumber: 16 });
})();
export {
  AdmissionTicketsComponent
};
//# sourceMappingURL=chunk-PT4OJ6WD.js.map
