import {
  HttpClient,
  HttpParams,
  environment,
  map,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";
import {
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/shared/services/academic-year.service.ts
var AcademicYearService = class _AcademicYearService {
  http;
  constructor(http) {
    this.http = http;
  }
  /** Returns the current academic year id (is_current == 1) or the first year. Use for default in create forms. */
  getCurrentAcademicYearId() {
    return this.getAcademicYears().pipe(map((res) => {
      const list = res?.data?.academic_years || [];
      const current = list.find((y) => y.is_current == 1);
      return current ? current.academic_year_id : list[0]?.academic_year_id ?? null;
    }));
  }
  getAcademicYears(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${environment.apiUrl}/academic_years/list.php`, { params: httpParams });
  }
  getAcademicYear(academicYearId) {
    return this.http.get(`${environment.apiUrl}/academic_years/get.php`, {
      params: { academic_year_id: academicYearId }
    });
  }
  createAcademicYear(academicYearData) {
    return this.http.post(`${environment.apiUrl}/academic_years/create.php`, academicYearData);
  }
  updateAcademicYear(academicYearId, academicYearData) {
    return this.http.post(`${environment.apiUrl}/academic_years/update.php`, __spreadValues({
      academic_year_id: academicYearId
    }, academicYearData));
  }
  deleteAcademicYear(academicYearId) {
    return this.http.post(`${environment.apiUrl}/academic_years/delete.php`, {
      academic_year_id: academicYearId
    });
  }
  static \u0275fac = function AcademicYearService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AcademicYearService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AcademicYearService, factory: _AcademicYearService.\u0275fac, providedIn: "root" });
};

export {
  AcademicYearService
};
//# sourceMappingURL=chunk-A5OHQDLX.js.map
