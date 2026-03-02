import "./chunk-TXDUYLVM.js";

// src/app/modules/admissions/admissions.routes.ts
var ADMISSION_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-YYBVNQZ2.js").then((m) => m.AdmissionListComponent)
  },
  {
    path: "list",
    loadComponent: () => import("./chunk-YYBVNQZ2.js").then((m) => m.AdmissionListComponent)
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-MB37LSDZ.js").then((m) => m.AdmissionCreateComponent)
  },
  {
    path: "edit/:id",
    loadComponent: () => import("./chunk-MB37LSDZ.js").then((m) => m.AdmissionCreateComponent)
  },
  {
    path: "view/:id",
    loadComponent: () => import("./chunk-FUXRVP2I.js").then((m) => m.AdmissionViewComponent)
  }
];
export {
  ADMISSION_ROUTES
};
//# sourceMappingURL=chunk-DUPH2G2H.js.map
