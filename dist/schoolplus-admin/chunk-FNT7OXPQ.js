import "./chunk-TXDUYLVM.js";

// src/app/modules/marksheets/marksheets.routes.ts
var MARKSHEET_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-O7S3BZQE.js").then((m) => m.MarksheetListComponent)
  },
  {
    path: "list",
    loadComponent: () => import("./chunk-O7S3BZQE.js").then((m) => m.MarksheetListComponent)
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-IX22IR3C.js").then((m) => m.MarksheetCreateComponent)
  },
  {
    path: "edit/:id",
    loadComponent: () => import("./chunk-IX22IR3C.js").then((m) => m.MarksheetCreateComponent)
  },
  {
    path: "view/:id",
    loadComponent: () => import("./chunk-F6DRGT5C.js").then((m) => m.MarksheetViewComponent)
  }
];
export {
  MARKSHEET_ROUTES
};
//# sourceMappingURL=chunk-FNT7OXPQ.js.map
