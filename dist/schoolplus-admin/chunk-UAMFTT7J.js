import "./chunk-TXDUYLVM.js";

// src/app/modules/support-feedback/support-feedback.routes.ts
var SUPPORT_FEEDBACK_ROUTES = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", loadComponent: () => import("./chunk-XWZGBVGI.js").then((m) => m.TicketListComponent) },
  { path: "create", loadComponent: () => import("./chunk-7K6TM4KK.js").then((m) => m.TicketCreateComponent) },
  { path: "edit/:id", loadComponent: () => import("./chunk-7K6TM4KK.js").then((m) => m.TicketCreateComponent) }
];
export {
  SUPPORT_FEEDBACK_ROUTES
};
//# sourceMappingURL=chunk-UAMFTT7J.js.map
