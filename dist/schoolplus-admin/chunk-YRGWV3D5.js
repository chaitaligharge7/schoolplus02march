import "./chunk-TXDUYLVM.js";

// src/app/modules/sports/sports.routes.ts
var SPORTS_ROUTES = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", loadComponent: () => import("./chunk-KEE3GOL2.js").then((m) => m.EventListComponent) },
  { path: "create", loadComponent: () => import("./chunk-SBLUQDJC.js").then((m) => m.EventCreateComponent) },
  { path: "edit/:id", loadComponent: () => import("./chunk-SBLUQDJC.js").then((m) => m.EventCreateComponent) }
];
export {
  SPORTS_ROUTES
};
//# sourceMappingURL=chunk-YRGWV3D5.js.map
