import "./chunk-TXDUYLVM.js";

// src/app/modules/remedial/remedial.routes.ts
var REMEDIAL_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-KUTVHAC3.js").then((m) => m.RemedialListComponent)
  },
  {
    path: "list",
    loadComponent: () => import("./chunk-KUTVHAC3.js").then((m) => m.RemedialListComponent)
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-KL6XVHME.js").then((m) => m.RemedialCreateComponent)
  },
  {
    path: "edit/:id",
    loadComponent: () => import("./chunk-KL6XVHME.js").then((m) => m.RemedialCreateComponent)
  },
  {
    path: "slider",
    // 🔹 New route
    loadComponent: () => import("./chunk-QS3GROTC.js").then((m) => m.SliderComponent)
  }
];
export {
  REMEDIAL_ROUTES
};
//# sourceMappingURL=chunk-4WBQYTUB.js.map
