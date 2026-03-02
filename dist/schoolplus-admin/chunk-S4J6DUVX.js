import "./chunk-TXDUYLVM.js";

// src/app/modules/counselor/counselor.routes.ts
var COUNSELOR_ROUTES = [
  { path: "", redirectTo: "leads", pathMatch: "full" },
  { path: "leads", loadComponent: () => import("./chunk-CZXN3IZI.js").then((m) => m.LeadListComponent) },
  { path: "leads/view/:id", loadComponent: () => import("./chunk-D3RCNG4T.js").then((m) => m.LeadViewComponent) },
  { path: "leads/edit/:id", loadComponent: () => import("./chunk-3OHATELU.js").then((m) => m.LeadEditComponent) }
];
export {
  COUNSELOR_ROUTES
};
//# sourceMappingURL=chunk-S4J6DUVX.js.map
