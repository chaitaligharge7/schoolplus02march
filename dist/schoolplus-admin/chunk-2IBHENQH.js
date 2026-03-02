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

// src/app/shared/services/fee.service.ts
var FeeService = class _FeeService {
  http;
  constructor(http) {
    this.http = http;
  }
  getFees(params) {
    let httpParams = new HttpParams();
    Object.keys(params).forEach((key) => {
      if (params[key] !== null && params[key] !== "") {
        httpParams = httpParams.set(key, params[key].toString());
      }
    });
    return this.http.get(`${environment.apiUrl}/fees/list.php`, { params: httpParams });
  }
  getFeeTypes(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${environment.apiUrl}/fees/types.php`, { params: httpParams });
  }
  assignFeesToStudents(assignmentData) {
    return this.http.post(`${environment.apiUrl}/fees/assign-to-students.php`, assignmentData);
  }
  recordPayment(paymentData) {
    return this.http.post(`${environment.apiUrl}/fees/payment.php`, paymentData);
  }
  getFee(feeId) {
    return this.http.get(`${environment.apiUrl}/fees/get.php`, {
      params: { student_fee_id: feeId }
    });
  }
  getReceipts(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] != null && params[key] !== "" && params[key] !== void 0) {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${environment.apiUrl}/fees/receipts-list.php`, { params: httpParams });
  }
  processPayment(paymentData) {
    return this.http.post(`${environment.apiUrl}/fees/payment.php`, paymentData);
  }
  getFeeType(feeTypeId) {
    return this.http.get(`${environment.apiUrl}/fees/fee-types-get.php`, {
      params: { fee_type_id: feeTypeId }
    });
  }
  createFeeType(feeTypeData) {
    return this.http.post(`${environment.apiUrl}/fees/fee-types-create.php`, feeTypeData);
  }
  updateFeeType(feeTypeId, feeTypeData) {
    return this.http.post(`${environment.apiUrl}/fees/fee-types-update.php`, __spreadValues({
      fee_type_id: feeTypeId
    }, feeTypeData));
  }
  deleteFeeType(feeTypeId) {
    return this.http.post(`${environment.apiUrl}/fees/fee-types-delete.php`, {
      fee_type_id: feeTypeId
    });
  }
  getDefaulters(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${environment.apiUrl}/fees/defaulters.php`, { params: httpParams });
  }
  /** Send fee outstanding reminder to students (or defaulters). */
  sendFeeReminder(payload) {
    return this.http.post(`${environment.apiUrl}/fees/send-reminder.php`, payload);
  }
  /** Accountant: list admission tickets (pending payment). */
  getAdmissionTickets(params) {
    let p = new HttpParams();
    if (params)
      Object.keys(params).forEach((k) => {
        if (params[k] != null && params[k] !== "")
          p = p.set(k, params[k].toString());
      });
    return this.http.get(`${environment.apiUrl}/accountant/admission-tickets-list.php`, { params: p });
  }
  /** Accountant: record payment for an admission ticket. */
  recordAdmissionPayment(data) {
    return this.http.post(`${environment.apiUrl}/accountant/record-admission-payment.php`, data);
  }
  static \u0275fac = function FeeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeeService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FeeService, factory: _FeeService.\u0275fac, providedIn: "root" });
};

export {
  FeeService
};
//# sourceMappingURL=chunk-2IBHENQH.js.map
