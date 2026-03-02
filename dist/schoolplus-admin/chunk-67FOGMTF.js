import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";

// src/app/shared/services/id-card.service.ts
var IdCardService = class _IdCardService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getIdCards(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/id-cards/list.php`, { params: httpParams });
  }
  getIdCardById(id) {
    return this.http.get(`${this.apiUrl}/id-cards/list.php?id=${id}`);
  }
  getStudents() {
    return this.http.get(`${this.apiUrl}/students/list.php`);
  }
  getStaff() {
    return this.http.get(`${this.apiUrl}/teachers/list.php`);
  }
  getVisitors() {
    return this.http.get(`${this.apiUrl}/visitors/list.php`);
  }
  updateIdCard(data) {
    return this.http.post(`${this.apiUrl}/id-cards/update.php`, data);
  }
  deleteIdCard(cardId) {
    return this.http.post(`${this.apiUrl}/id-cards/delete.php`, { card_id: cardId });
  }
  createIdCard(data) {
    return this.http.post(`${this.apiUrl}/id-cards/list.php`, data);
  }
  generateIdCards(data) {
    return this.http.post(`${this.apiUrl}/id-cards/generate.php`, data);
  }
  static \u0275fac = function IdCardService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IdCardService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _IdCardService, factory: _IdCardService.\u0275fac, providedIn: "root" });
};

export {
  IdCardService
};
//# sourceMappingURL=chunk-67FOGMTF.js.map
