import "./chunk-TXDUYLVM.js";

// src/app/modules/syllabus/syllabus.routes.ts
var SYLLABUS_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-4KBZXFO3.js").then((m) => m.SyllabusListComponent)
  },
  {
    path: "list",
    loadComponent: () => import("./chunk-4KBZXFO3.js").then((m) => m.SyllabusListComponent)
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-BTYZL2WX.js").then((m) => m.SyllabusCreateComponent)
  },
  {
    path: "edit/:id",
    loadComponent: () => import("./chunk-BTYZL2WX.js").then((m) => m.SyllabusCreateComponent)
  },
  {
    path: "view/:id",
    loadComponent: () => import("./chunk-P7WVUUA6.js").then((m) => m.SyllabusViewComponent)
  },
  {
    path: "completion-report",
    loadComponent: () => import("./chunk-NLIM3ZBY.js").then((m) => m.SyllabusCompletionReportComponent)
  }
];
export {
  SYLLABUS_ROUTES
};
//# sourceMappingURL=chunk-3CEV374W.js.map
