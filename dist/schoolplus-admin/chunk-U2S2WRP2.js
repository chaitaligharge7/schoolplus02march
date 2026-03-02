import "./chunk-TXDUYLVM.js";

// src/app/modules/receptionist/receptionist.routes.ts
var RECEPTIONIST_ROUTES = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "dashboard", loadComponent: () => import("./chunk-YIMVQ4WM.js").then((m) => m.ReceptionistDashboardComponent) },
  { path: "inquiries", loadComponent: () => import("./chunk-EBIH2TSH.js").then((m) => m.ReceptionistInquiryListComponent) },
  { path: "inquiries/edit/:id", loadComponent: () => import("./chunk-WOBDO5AD.js").then((m) => m.ReceptionistInquiryEditComponent) }
];
export {
  RECEPTIONIST_ROUTES
};
//# sourceMappingURL=chunk-U2S2WRP2.js.map
