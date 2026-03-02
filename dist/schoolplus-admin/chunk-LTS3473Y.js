import "./chunk-TXDUYLVM.js";

// src/app/modules/lab/lab.routes.ts
var LAB_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-TNUIS5VG.js").then((m) => m.LabItemsListComponent)
  },
  {
    path: "list",
    loadComponent: () => import("./chunk-TNUIS5VG.js").then((m) => m.LabItemsListComponent)
  },
  {
    path: "items/create",
    loadComponent: () => import("./chunk-OLXSWJCK.js").then((m) => m.LabItemCreateComponent)
  },
  {
    path: "items/edit/:id",
    loadComponent: () => import("./chunk-OLXSWJCK.js").then((m) => m.LabItemCreateComponent)
  },
  {
    path: "practicals/create",
    loadComponent: () => import("./chunk-PJZ3MUD3.js").then((m) => m.LabPracticalCreateComponent)
  },
  {
    path: "practicals/edit/:id",
    loadComponent: () => import("./chunk-PJZ3MUD3.js").then((m) => m.LabPracticalCreateComponent)
  }
];
export {
  LAB_ROUTES
};
//# sourceMappingURL=chunk-LTS3473Y.js.map
