import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";

// src/app/shared/services/committee.service.ts
var CommitteeService = class _CommitteeService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getCommittees(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/committees/list.php`, { params: httpParams });
  }
  createCommittee(data) {
    return this.http.post(`${this.apiUrl}/committees/list.php`, data);
  }
  getMembers(committeeId) {
    return this.http.get(`${this.apiUrl}/committees/members.php`, {
      params: { committee_id: committeeId }
    });
  }
  addMember(data) {
    return this.http.post(`${this.apiUrl}/committees/members.php`, data);
  }
  removeMember(memberId) {
    return this.http.delete(`${this.apiUrl}/committees/members.php`, {
      body: { member_id: memberId }
    });
  }
  static \u0275fac = function CommitteeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommitteeService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CommitteeService, factory: _CommitteeService.\u0275fac, providedIn: "root" });
};

export {
  CommitteeService
};
//# sourceMappingURL=chunk-CDZZMPSH.js.map
