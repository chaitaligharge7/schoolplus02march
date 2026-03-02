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

// src/app/shared/services/food-calendar.service.ts
var FoodCalendarService = class _FoodCalendarService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getFoodCalendar(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/food-calendar/list.php`, { params: httpParams });
  }
  createFoodCalendar(data) {
    return this.http.post(`${this.apiUrl}/food-calendar/list.php`, data);
  }
  updateFoodCalendar(foodId, data) {
    return this.http.post(`${this.apiUrl}/food-calendar/update.php`, __spreadValues({
      food_id: foodId
    }, data));
  }
  deleteFoodCalendar(foodId) {
    return this.http.post(`${this.apiUrl}/food-calendar/delete.php`, {
      // calendar_id: calendarId
      food_id: foodId
    });
  }
  static \u0275fac = function FoodCalendarService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FoodCalendarService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FoodCalendarService, factory: _FoodCalendarService.\u0275fac, providedIn: "root" });
};

export {
  FoodCalendarService
};
//# sourceMappingURL=chunk-JGK4IK2G.js.map
