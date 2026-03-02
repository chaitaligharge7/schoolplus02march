import "./chunk-TXDUYLVM.js";

// src/app/modules/cms/cms.routes.ts
var CMS_ROUTES = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", loadComponent: () => import("./chunk-V5B3GH7Y.js").then((m) => m.PageListComponent) },
  { path: "create", loadComponent: () => import("./chunk-C6V66VAC.js").then((m) => m.PageCreateComponent) },
  { path: "edit/:id", loadComponent: () => import("./chunk-C6V66VAC.js").then((m) => m.PageCreateComponent) }
];
export {
  CMS_ROUTES
};
//# sourceMappingURL=chunk-ORHTMKYX.js.map
