import "./chunk-TXDUYLVM.js";

// src/app/modules/digital-notes/digital-notes.routes.ts
var DIGITAL_NOTES_ROUTES = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", loadComponent: () => import("./chunk-OYAH4ZLB.js").then((m) => m.NotesListComponent) },
  { path: "create", loadComponent: () => import("./chunk-M4YMDMYT.js").then((m) => m.NotesCreateComponent) },
  { path: "edit/:id", loadComponent: () => import("./chunk-M4YMDMYT.js").then((m) => m.NotesCreateComponent) }
  // ← add this
];
export {
  DIGITAL_NOTES_ROUTES
};
//# sourceMappingURL=chunk-5PRMIXP3.js.map
