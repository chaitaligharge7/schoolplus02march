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

// src/app/shared/services/mess-schedule.service.ts
var MessScheduleService = class _MessScheduleService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getSchedules(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/mess-schedules/list.php`, { params: httpParams });
  }
  updateSchedule(scheduleId, data) {
    return this.http.put(`${this.apiUrl}/mess-schedules/update.php`, __spreadValues({ schedule_id: scheduleId }, data));
  }
  deleteSchedule(scheduleId) {
    return this.http.delete(`${this.apiUrl}/mess-schedules/delete.php`, { body: { schedule_id: scheduleId } });
  }
  createSchedule(data) {
    return this.http.post(`${this.apiUrl}/mess-schedules/list.php`, data);
  }
  getMeals(scheduleId) {
    return this.http.get(`${this.apiUrl}/mess-schedules/meals.php`, {
      params: { schedule_id: scheduleId }
    });
  }
  addMeal(data) {
    return this.http.post(`${this.apiUrl}/mess-schedules/meals.php`, data);
  }
  updateMeal(mealId, data) {
    return this.http.put(`${this.apiUrl}/mess-schedules/meals.php`, __spreadValues({
      meal_id: mealId
    }, data));
  }
  deleteMeal(mealId) {
    return this.http.delete(`${this.apiUrl}/mess-schedules/meals.php`, {
      body: { meal_id: mealId }
    });
  }
  static \u0275fac = function MessScheduleService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessScheduleService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MessScheduleService, factory: _MessScheduleService.\u0275fac, providedIn: "root" });
};

export {
  MessScheduleService
};
//# sourceMappingURL=chunk-UMGB5Z47.js.map
