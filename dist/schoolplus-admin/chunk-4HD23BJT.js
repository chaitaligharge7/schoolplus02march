import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";

// src/app/shared/services/important-notes.service.ts
var ImportantNotesService = class _ImportantNotesService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getNotes(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/important-notes/list.php`, { params: httpParams });
  }
  createNote(data) {
    return this.http.post(`${this.apiUrl}/important-notes/list.php`, data);
  }
  updateNote(data) {
    return this.http.post(`${this.apiUrl}/important-notes/update.php`, data);
  }
  // 🔹 DELETE NOTE
  deleteNote(noteId) {
    return this.http.delete(`${this.apiUrl}/important-notes/delete.php`, {
      body: { note_id: noteId }
    });
  }
  // 🔹 GET SINGLE NOTE (VIEW)
  getNote(noteId) {
    const params = new HttpParams().set("note_id", noteId.toString());
    return this.http.get(`${this.apiUrl}/important-notes/get.php`, { params });
  }
  static \u0275fac = function ImportantNotesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ImportantNotesService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ImportantNotesService, factory: _ImportantNotesService.\u0275fac, providedIn: "root" });
};

export {
  ImportantNotesService
};
//# sourceMappingURL=chunk-4HD23BJT.js.map
