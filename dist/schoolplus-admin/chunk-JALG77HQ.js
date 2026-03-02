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

// src/app/shared/services/complaint.service.ts
var ComplaintService = class _ComplaintService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getComplaints(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/complaints/list.php`, { params: httpParams });
  }
  getComplaintsId(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/complaints/get.php`, { params: httpParams });
  }
  createComplaint(data) {
    return this.http.post(`${this.apiUrl}/complaints/create.php`, data);
  }
  updateComplaint(complaintId, data) {
    return this.http.put(`${this.apiUrl}/complaints/update.php`, __spreadValues({
      complaint_id: complaintId
    }, data));
  }
  deleteComplaint(complaintId) {
    return this.http.delete(`${this.apiUrl}/complaints/delete.php`, {
      body: {
        complaint_id: complaintId
      }
    });
  }
  forwardComplaint(complaintId, data) {
    return this.http.post(`${this.apiUrl}/complaints/forward.php`, __spreadValues({
      complaint_id: complaintId
    }, data));
  }
  resolveComplaint(complaintId, data) {
    return this.http.post(`${this.apiUrl}/complaints/resolve.php`, __spreadValues({
      complaint_id: complaintId
    }, data));
  }
  getComplaintCategories() {
    return this.http.get(`${this.apiUrl}/complaints/categories.php`);
  }
  getCategoryById(categoryId) {
    return this.http.get(`${this.apiUrl}/complaints/categories.php`, {
      params: new HttpParams().set("category_id", categoryId.toString())
    });
  }
  createCategories(data) {
    return this.http.post(`${this.apiUrl}/complaints/categories.php`, data);
  }
  updateComplaintCategory(categoryId, data) {
    return this.http.put(`${this.apiUrl}/complaints/category-update.php`, __spreadValues({
      category_id: categoryId
    }, data));
  }
  deleteComplaintCategory(categoryId) {
    return this.http.delete(`${this.apiUrl}/complaints/category-delete.php`, {
      body: { category_id: categoryId }
    });
  }
  static \u0275fac = function ComplaintService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComplaintService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ComplaintService, factory: _ComplaintService.\u0275fac, providedIn: "root" });
};

export {
  ComplaintService
};
//# sourceMappingURL=chunk-JALG77HQ.js.map
