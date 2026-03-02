import "./chunk-TXDUYLVM.js";

// src/app/modules/classwork/classwork.routes.ts
var CLASSWORK_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-EMLGSUHU.js").then((m) => m.ClassworkListComponent)
  },
  {
    path: "list",
    loadComponent: () => import("./chunk-EMLGSUHU.js").then((m) => m.ClassworkListComponent)
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-BQCHSIVC.js").then((m) => m.ClassworkCreateComponent)
  },
  {
    path: "edit/:id",
    loadComponent: () => import("./chunk-BQCHSIVC.js").then((m) => m.ClassworkCreateComponent)
  },
  {
    path: "view/:id",
    loadComponent: () => import("./chunk-PRPP3KRN.js").then((m) => m.ClassworkViewComponent)
  }
];
export {
  CLASSWORK_ROUTES
};
//# sourceMappingURL=chunk-QXJJMVEY.js.map
