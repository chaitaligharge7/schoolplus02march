import "./chunk-TXDUYLVM.js";

// src/app/modules/important-notes/important-notes.routes.ts
var IMPORTANT_NOTES_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-FI3RTE5L.js").then((m) => m.NotesListComponent)
  },
  {
    path: "list",
    loadComponent: () => import("./chunk-FI3RTE5L.js").then((m) => m.NotesListComponent)
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-DQ7XYCOR.js").then((m) => m.NotesCreateComponent)
  },
  {
    path: "edit/:id",
    loadComponent: () => import("./chunk-DQ7XYCOR.js").then((m) => m.NotesCreateComponent)
  },
  {
    path: "view/:id",
    loadComponent: () => import("./chunk-6PH3CDPF.js").then((m) => m.NotesSliderComponent)
  }
];
export {
  IMPORTANT_NOTES_ROUTES
};
//# sourceMappingURL=chunk-YBMDOL2A.js.map
