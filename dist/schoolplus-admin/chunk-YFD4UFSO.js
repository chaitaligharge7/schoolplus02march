import "./chunk-TXDUYLVM.js";

// src/app/modules/documents/documents.routes.ts
var DOCUMENT_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-GRDPM2FV.js").then((m) => m.DocumentListComponent)
  },
  {
    path: "list",
    loadComponent: () => import("./chunk-GRDPM2FV.js").then((m) => m.DocumentListComponent)
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-HQ3WT5KS.js").then((m) => m.DocumentCreateComponent)
  },
  {
    path: "edit/:id",
    loadComponent: () => import("./chunk-HQ3WT5KS.js").then((m) => m.DocumentCreateComponent)
  },
  {
    path: "half-day-permissions",
    loadComponent: () => import("./chunk-DUG2G4RY.js").then((m) => m.HalfDayPermissionListComponent)
  }
];
export {
  DOCUMENT_ROUTES
};
//# sourceMappingURL=chunk-YFD4UFSO.js.map
