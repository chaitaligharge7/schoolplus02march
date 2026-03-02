import {
  ɵɵdefinePipe
} from "./chunk-VTJ43J7W.js";

// src/app/shared/pipes/currency-format.pipe.ts
var CurrencyFormatPipe = class _CurrencyFormatPipe {
  transform(value, currency = "\u20B9", decimals = 2) {
    if (value === null || value === void 0 || value === "") {
      return currency + "0.00";
    }
    const numValue = typeof value === "string" ? parseFloat(value) : value;
    if (isNaN(numValue)) {
      return currency + "0.00";
    }
    return currency + numValue.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  static \u0275fac = function CurrencyFormatPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CurrencyFormatPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "currencyFormat", type: _CurrencyFormatPipe, pure: true, standalone: true });
};

export {
  CurrencyFormatPipe
};
//# sourceMappingURL=chunk-FU4SC7MH.js.map
