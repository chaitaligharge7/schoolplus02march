import "./chunk-TXDUYLVM.js";

// src/app/modules/enquiries/enquiries.routes.ts
var ENQUIRY_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-EDLZRYPE.js").then((m) => m.EnquiryListComponent)
  },
  {
    path: "list",
    loadComponent: () => import("./chunk-EDLZRYPE.js").then((m) => m.EnquiryListComponent)
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-OBCNQF4Y.js").then((m) => m.EnquiryCreateComponent)
  },
  {
    path: "edit/:id",
    loadComponent: () => import("./chunk-OBCNQF4Y.js").then((m) => m.EnquiryCreateComponent)
  },
  {
    path: "view/:id",
    loadComponent: () => import("./chunk-NH4ZXLS7.js").then((m) => m.EnquiryViewComponent)
  }
];
export {
  ENQUIRY_ROUTES
};
//# sourceMappingURL=chunk-SKLWFRXB.js.map
