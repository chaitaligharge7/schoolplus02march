import "./chunk-TXDUYLVM.js";

// src/app/modules/complaints/complaints.routes.ts
var COMPLAINTS_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-EDCNRUSN.js").then((m) => m.ComplaintListComponent)
  },
  {
    path: "list",
    loadComponent: () => import("./chunk-EDCNRUSN.js").then((m) => m.ComplaintListComponent)
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-ZOPY53JI.js").then((m) => m.ComplaintCreateComponent)
  },
  {
    path: "add",
    loadComponent: () => import("./chunk-UBNUF6CZ.js").then((m) => m.CategoryComponent)
  },
  {
    path: "categorylist",
    loadComponent: () => import("./chunk-E62KBCBY.js").then((m) => m.CategoriesListComponent)
  },
  {
    path: "categoryedit/:id",
    loadComponent: () => import("./chunk-UBNUF6CZ.js").then((m) => m.CategoryComponent)
  },
  {
    path: "edit/:id",
    loadComponent: () => import("./chunk-ZOPY53JI.js").then((m) => m.ComplaintCreateComponent)
  },
  {
    path: "view/:id",
    loadComponent: () => import("./chunk-UIDWYMSV.js").then((m) => m.ComplaintViewComponent)
  }
];
export {
  COMPLAINTS_ROUTES
};
//# sourceMappingURL=chunk-F7L4OGSM.js.map
