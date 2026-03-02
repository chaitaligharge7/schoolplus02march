import "./chunk-TXDUYLVM.js";

// src/app/modules/doubt-handling/doubt-handling.routes.ts
var DOUBT_HANDLING_ROUTES = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", loadComponent: () => import("./chunk-UDPJF3AY.js").then((m) => m.DoubtListComponent) },
  { path: "create", loadComponent: () => import("./chunk-CTXPZT3H.js").then((m) => m.DoubtCreateComponent) },
  { path: "respond/:id", loadComponent: () => import("./chunk-CTXPZT3H.js").then((m) => m.DoubtCreateComponent) }
];
export {
  DOUBT_HANDLING_ROUTES
};
//# sourceMappingURL=chunk-L22HJO54.js.map
