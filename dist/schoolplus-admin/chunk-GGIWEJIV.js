import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";
import {
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/shared/services/fee-group.service.ts
var FeeGroupService = class _FeeGroupService {
  http;
  constructor(http) {
    this.http = http;
  }
  getFeeGroups(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${environment.apiUrl}/fee_groups/list.php`, { params: httpParams });
  }
  getFeeGroup(feeGroupId) {
    return this.http.get(`${environment.apiUrl}/fee_groups/get.php`, {
      params: { fee_group_id: feeGroupId }
    });
  }
  createFeeGroup(feeGroupData) {
    return this.http.post(`${environment.apiUrl}/fee_groups/create.php`, feeGroupData);
  }
  updateFeeGroup(feeGroupId, feeGroupData) {
    return this.http.post(`${environment.apiUrl}/fee_groups/update.php`, __spreadValues({
      fee_group_id: feeGroupId
    }, feeGroupData));
  }
  deleteFeeGroup(feeGroupId) {
    return this.http.post(`${environment.apiUrl}/fee_groups/delete.php`, {
      fee_group_id: feeGroupId
    });
  }
  static \u0275fac = function FeeGroupService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeeGroupService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FeeGroupService, factory: _FeeGroupService.\u0275fac, providedIn: "root" });
};

export {
  FeeGroupService
};
//# sourceMappingURL=chunk-GGIWEJIV.js.map
