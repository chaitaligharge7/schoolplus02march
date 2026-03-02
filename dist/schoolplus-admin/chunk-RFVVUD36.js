import "./chunk-TXDUYLVM.js";

// src/app/modules/leave-management/leave-management.routes.ts
var LEAVE_MANAGEMENT_ROUTES = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", loadComponent: () => import("./chunk-D2APNKHI.js").then((m) => m.LeaveListComponent) },
  { path: "create", loadComponent: () => import("./chunk-RWP4UGX4.js").then((m) => m.LeaveCreateComponent) },
  { path: "edit/:id", loadComponent: () => import("./chunk-RWP4UGX4.js").then((m) => m.LeaveCreateComponent) }
];
export {
  LEAVE_MANAGEMENT_ROUTES
};
//# sourceMappingURL=chunk-RFVVUD36.js.map
