import "./chunk-TXDUYLVM.js";

// src/app/modules/security-guard/security-guard.routes.ts
var SECURITY_GUARD_ROUTES = [
  { path: "", redirectTo: "inquiry/list", pathMatch: "full" },
  { path: "inquiry/list", loadComponent: () => import("./chunk-KCVTRSBB.js").then((m) => m.InquiryListComponent) },
  { path: "inquiry/create", loadComponent: () => import("./chunk-S4Z2S2FD.js").then((m) => m.InquiryCreateComponent) },
  { path: "inquiry/view/:id", loadComponent: () => import("./chunk-TQN7PZ3O.js").then((m) => m.InquiryViewComponent) },
  { path: "inquiry/edit/:id", loadComponent: () => import("./chunk-5E2NOGYB.js").then((m) => m.InquiryEditComponent) },
  { path: "gate-pass/list", loadComponent: () => import("./chunk-PFWVM5WY.js").then((m) => m.GatePassListComponent) },
  { path: "gate-pass/create", loadComponent: () => import("./chunk-62P5GM45.js").then((m) => m.GatePassCreateComponent) },
  { path: "gate-pass/edit/:id", loadComponent: () => import("./chunk-CAMRVHVX.js").then((m) => m.GatePassEditComponent) },
  { path: "daily-report/list", loadComponent: () => import("./chunk-TQ7RLPE5.js").then((m) => m.DailyReportListComponent) },
  { path: "daily-report/create", loadComponent: () => import("./chunk-RNDL7BBA.js").then((m) => m.DailyReportCreateComponent) },
  { path: "daily-report/edit/:id", loadComponent: () => import("./chunk-722INVST.js").then((m) => m.DailyReportEditComponent) }
];
export {
  SECURITY_GUARD_ROUTES
};
//# sourceMappingURL=chunk-FMI73XLN.js.map
