import "./chunk-TXDUYLVM.js";

// src/app/modules/teaching-plan/teaching-plan.routes.ts
var TEACHING_PLAN_ROUTES = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", loadComponent: () => import("./chunk-FO3FBW25.js").then((m) => m.PlanListComponent) },
  { path: "create", loadComponent: () => import("./chunk-USS5ZO2T.js").then((m) => m.PlanCreateComponent) },
  { path: "edit/:id", loadComponent: () => import("./chunk-USS5ZO2T.js").then((m) => m.PlanCreateComponent) }
];
export {
  TEACHING_PLAN_ROUTES
};
//# sourceMappingURL=chunk-QLEKJACA.js.map
