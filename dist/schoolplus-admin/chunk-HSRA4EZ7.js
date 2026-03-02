import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";

// src/app/shared/services/document.service.ts
var DocumentService = class _DocumentService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getDocuments(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/documents/list.php`, { params: httpParams });
  }
  generateBonafide(studentId) {
    return this.http.post(`${this.apiUrl}/documents/generate-bonafide.php`, { student_id: studentId });
  }
  generateLeaving(studentId) {
    return this.http.post(`${this.apiUrl}/documents/generate-leaving.php`, { student_id: studentId });
  }
  getHalfDayPermissions(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/documents/half-day-permission.php`, { params: httpParams });
  }
  createHalfDayPermission(data) {
    return this.http.post(`${this.apiUrl}/documents/half-day-permission.php`, data);
  }
  approveHalfDayPermission(permissionId, action) {
    return this.http.post(`${this.apiUrl}/documents/half-day-permission.php`, {
      action: "approve",
      permission_id: permissionId,
      approval_action: action
    });
  }
  deleteDocument(documentId) {
    return this.http.delete(`${this.apiUrl}/documents/delete.php`, {
      body: { document_id: documentId }
    });
  }
  uploadDocument(data) {
    return this.http.post(`${this.apiUrl}/documents/generate-bonafide.php`, data);
  }
  updateDocument(formData) {
    return this.http.post(`${this.apiUrl}/documents/update.php`, formData);
  }
  getDownloadUrl(filePath) {
    if (!filePath)
      return "";
    if (filePath.startsWith("http"))
      return filePath;
    return `${this.apiUrl}/download.php?file=${encodeURIComponent(filePath)}`;
  }
  static \u0275fac = function DocumentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DocumentService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DocumentService, factory: _DocumentService.\u0275fac, providedIn: "root" });
};

export {
  DocumentService
};
//# sourceMappingURL=chunk-HSRA4EZ7.js.map
