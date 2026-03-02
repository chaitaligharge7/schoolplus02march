import {
  FeeService
} from "./chunk-2IBHENQH.js";
import {
  ToastService
} from "./chunk-FQ6RWLG3.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-GXY6YLNG.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/fees/fee-receipt/fee-receipt.component.ts
function FeeReceiptComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "button", 4);
    \u0275\u0275listener("click", function FeeReceiptComponent_div_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.print());
    });
    \u0275\u0275element(3, "i", 5);
    \u0275\u0275text(4, " Print Receipt ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 6);
    \u0275\u0275text(6, "Back to Fees");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 7)(8, "div", 8)(9, "h1", 9);
    \u0275\u0275text(10, "SchoolPlus");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 10);
    \u0275\u0275text(12, "Fee Payment Receipt");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 11)(14, "div", 12);
    \u0275\u0275text(15, "FEE RECEIPT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 13)(17, "span", 14);
    \u0275\u0275text(18, "Receipt No: ");
    \u0275\u0275elementStart(19, "strong");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "span", 15);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(24, "div", 16);
    \u0275\u0275elementStart(25, "div", 17)(26, "div", 18)(27, "span", 19);
    \u0275\u0275text(28, "Student Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 20);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 18)(32, "span", 19);
    \u0275\u0275text(33, "Admission No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 20);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 18)(37, "span", 19);
    \u0275\u0275text(38, "Class / Section");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 20);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 18)(42, "span", 19);
    \u0275\u0275text(43, "Fee Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 20);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 21)(47, "span", 19);
    \u0275\u0275text(48, "Total Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 20);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 21)(53, "span", 19);
    \u0275\u0275text(54, "Paid Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span", 22);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 18)(59, "span", 19);
    \u0275\u0275text(60, "Due Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 20);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 18)(64, "span", 19);
    \u0275\u0275text(65, "Payment Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "span", 20)(67, "strong");
    \u0275\u0275text(68);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(69, "div", 16);
    \u0275\u0275elementStart(70, "div", 23)(71, "p");
    \u0275\u0275text(72, "This is a computer-generated receipt and does not require a signature.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "p");
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "date");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275textInterpolate(ctx_r1.fee.receipt_number || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Date: ", ctx_r1.fee.payment_date || \u0275\u0275pipeBind2(23, 12, ctx_r1.today, "dd/MM/yyyy"), "");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.fee.student_name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.fee.admission_number);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.fee.class_name, "", ctx_r1.fee.section_name ? " / " + ctx_r1.fee.section_name : "", "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.fee.fee_type_name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(51, 15, ctx_r1.fee.fee_amount, "1.2-2"), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(57, 18, ctx_r1.fee.paid_amount, "1.2-2"), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.fee.due_date);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.fee.payment_status);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Generated on ", \u0275\u0275pipeBind2(75, 21, ctx_r1.today, "dd MMM yyyy, hh:mm a"), "");
  }
}
function FeeReceiptComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1, "Loading receipt...");
    \u0275\u0275elementEnd();
  }
}
var FeeReceiptComponent = class _FeeReceiptComponent {
  feeService;
  toast;
  route;
  fee = null;
  loading = false;
  feeId = null;
  today = /* @__PURE__ */ new Date();
  constructor(feeService, toast, route) {
    this.feeService = feeService;
    this.toast = toast;
    this.route = route;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.feeId = +id;
      this.load();
    } else {
      this.toast.show("Fee ID required", "error");
    }
  }
  load() {
    if (!this.feeId)
      return;
    this.loading = true;
    this.feeService.getFee(this.feeId).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === "success" && res.data?.fee) {
          this.fee = res.data.fee;
          if (typeof window !== "undefined" && window.location.hash === "#print") {
            setTimeout(() => this.print(), 600);
          }
        }
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error loading receipt", "error");
      }
    });
  }
  print() {
    window.print();
  }
  static \u0275fac = function FeeReceiptComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeeReceiptComponent)(\u0275\u0275directiveInject(FeeService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeeReceiptComponent, selectors: [["app-fee-receipt"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 2, consts: [["class", "receipt-wrapper", 4, "ngIf"], ["class", "loading", 4, "ngIf"], [1, "receipt-wrapper"], [1, "receipt-actions", "no-print"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "bi", "bi-printer"], ["routerLink", "/app/fees/list", 1, "btn", "btn-outline"], ["id", "receipt-print", 1, "receipt-card", "print-document"], [1, "receipt-brand", "print-header"], [1, "receipt-school-name", "print-title"], [1, "receipt-school-tagline", "print-subtitle"], [1, "receipt-main"], [1, "receipt-badge"], [1, "receipt-meta"], [1, "receipt-number"], [1, "receipt-date"], [1, "receipt-divider"], [1, "receipt-grid"], [1, "receipt-row"], [1, "label"], [1, "value"], [1, "receipt-row", "receipt-row-highlight"], [1, "value", "amount-paid"], [1, "receipt-footer", "print-footer"], [1, "loading"]], template: function FeeReceiptComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, FeeReceiptComponent_div_0_Template, 76, 24, "div", 0)(1, FeeReceiptComponent_div_1_Template, 2, 0, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.fee);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
    }
  }, dependencies: [CommonModule, NgIf, DecimalPipe, DatePipe, RouterModule, RouterLink], styles: ["\n\n.receipt-wrapper[_ngcontent-%COMP%] {\n  padding: 24px 20px;\n  max-width: 520px;\n  margin: 0 auto;\n}\n.receipt-actions[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  display: flex;\n  gap: 0.75rem;\n}\n.receipt-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 2px solid #e5e7eb;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.receipt-brand[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #1e40af 100%);\n  color: #fff;\n  padding: 1.25rem 1.5rem;\n  text-align: center;\n}\n.receipt-school-name[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 1.5rem;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n}\n.receipt-school-tagline[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8125rem;\n  opacity: 0.95;\n}\n.receipt-main[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.receipt-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  color: #2563eb;\n  border: 1px solid #2563eb;\n  padding: 4px 10px;\n  border-radius: 4px;\n  margin-bottom: 0.75rem;\n}\n.receipt-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  font-size: 0.8125rem;\n  color: #4b5563;\n  margin-bottom: 1rem;\n}\n.receipt-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      #e5e7eb,\n      transparent);\n  margin: 1rem 0;\n}\n.receipt-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.receipt-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  padding: 0.35rem 0;\n  font-size: 0.875rem;\n}\n.receipt-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: #6b7280;\n  flex-shrink: 0;\n  margin-right: 1rem;\n}\n.receipt-row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #1f2937;\n  text-align: right;\n}\n.receipt-row.receipt-row-highlight[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1e40af;\n}\n.receipt-row[_ngcontent-%COMP%]   .amount-paid[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: #059669;\n}\n.receipt-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.75rem;\n  color: #9ca3af;\n  margin-top: 1.25rem;\n  padding-top: 1rem;\n  border-top: 1px dashed #e5e7eb;\n}\n.receipt-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0;\n}\n.loading[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n  color: #6b7280;\n}\n@media print {\n  .receipt-wrapper[_ngcontent-%COMP%] {\n    padding: 0;\n    max-width: 100%;\n  }\n  .receipt-card[_ngcontent-%COMP%] {\n    border: 2px solid #1f2937;\n    box-shadow: none;\n    border-radius: 0;\n  }\n  .receipt-brand[_ngcontent-%COMP%] {\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n    padding: 10pt 0;\n  }\n  .receipt-school-name[_ngcontent-%COMP%] {\n    font-size: 16pt;\n    color: #fff;\n  }\n  .receipt-school-tagline[_ngcontent-%COMP%] {\n    color: rgba(255, 255, 255, 0.95);\n    font-size: 10pt;\n  }\n  .receipt-main[_ngcontent-%COMP%] {\n    padding: 12pt;\n  }\n  .receipt-badge[_ngcontent-%COMP%] {\n    color: #1f2937;\n    border-color: #1f2937;\n  }\n  .receipt-divider[_ngcontent-%COMP%] {\n    background: #d1d5db;\n  }\n  .receipt-footer[_ngcontent-%COMP%] {\n    border-top-style: solid;\n    border-color: #e5e7eb;\n  }\n}\n/*# sourceMappingURL=fee-receipt.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeeReceiptComponent, { className: "FeeReceiptComponent", filePath: "src\\app\\modules\\fees\\fee-receipt\\fee-receipt.component.ts", lineNumber: 14 });
})();
export {
  FeeReceiptComponent
};
//# sourceMappingURL=chunk-BDQWWBRA.js.map
