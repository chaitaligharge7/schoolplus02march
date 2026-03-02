import {
  ɵɵdefinePipe
} from "./chunk-VTJ43J7W.js";

// src/app/shared/pipes/date-format.pipe.ts
var DateFormatPipe = class _DateFormatPipe {
  transform(value, format = "short", defaultValue = "") {
    if (!value)
      return defaultValue;
    const date = typeof value === "string" ? new Date(value) : value;
    if (isNaN(date.getTime()))
      return "";
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    switch (format) {
      case "short":
        return `${day}/${month}/${year}`;
      case "long":
        return date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
        });
      case "time":
        return date.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit"
        });
      case "datetime":
        return `${day}/${month}/${year} ${date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}`;
      default:
        return `${day}/${month}/${year}`;
    }
  }
  static \u0275fac = function DateFormatPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DateFormatPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "dateFormat", type: _DateFormatPipe, pure: true, standalone: true });
};

export {
  DateFormatPipe
};
//# sourceMappingURL=chunk-FN4NGQWM.js.map
