import "./chunk-TXDUYLVM.js";

// src/app/modules/branches/branches.routes.ts
var BRANCHES_ROUTES = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", loadComponent: () => import("./chunk-VYZRCCAI.js").then((m) => m.BranchListComponent) },
  { path: "create", loadComponent: () => import("./chunk-TATA3CZ7.js").then((m) => m.BranchCreateComponent) },
  { path: "edit/:id", loadComponent: () => import("./chunk-TATA3CZ7.js").then((m) => m.BranchCreateComponent) }
];
export {
  BRANCHES_ROUTES
};
//# sourceMappingURL=chunk-LVEIPMZT.js.map
