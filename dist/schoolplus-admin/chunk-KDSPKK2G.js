import {
  BehaviorSubject,
  HttpClient,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";

// src/app/shared/services/menu.service.ts
var MenuService = class _MenuService {
  http;
  apiUrl = environment.apiUrl;
  menusSubject = new BehaviorSubject([]);
  menus$ = this.menusSubject.asObservable();
  functionalitiesSubject = new BehaviorSubject({});
  functionalities$ = this.functionalitiesSubject.asObservable();
  constructor(http) {
    this.http = http;
    this.loadUserMenus();
  }
  /**
   * Load menus for current user
   */
  loadUserMenus() {
    this.getUserMenus().subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.menusSubject.next(response.data.menus || []);
          this.functionalitiesSubject.next(response.data.functionalities || {});
        }
      },
      error: (error) => {
        console.error("Error loading user menus:", error);
        this.menusSubject.next([]);
      }
    });
  }
  /**
   * Get all available menus (for admin)
   */
  getAllMenus() {
    return this.http.get(`${this.apiUrl}/menus/get-menus.php`);
  }
  /**
   * Get menus for current user
   */
  getUserMenus() {
    return this.http.get(`${this.apiUrl}/menus/get-user-menus.php`);
  }
  /**
   * Check if user has permission for a menu
   */
  hasMenuPermission(menuCode, action = "view") {
    const menus = this.menusSubject.value;
    const functionalities = this.functionalitiesSubject.value;
    const findMenu = (items) => {
      for (const item of items) {
        if (item.menu_code === menuCode) {
          return item;
        }
        if (item.children) {
          const found = findMenu(item.children);
          if (found)
            return found;
        }
      }
      return null;
    };
    const menu = findMenu(menus);
    if (!menu)
      return false;
    const menuFuncs = functionalities[menu.menu_id] || [];
    return menuFuncs.includes(action) || menuFuncs.includes("all");
  }
  /**
   * Get current menus
   */
  getMenus() {
    return this.menusSubject.value;
  }
  /**
   * Refresh menus
   */
  refreshMenus() {
    this.loadUserMenus();
  }
  /**
   * Add new module menus to menu_details for current school (key_id).
   * Call once so Security Guard, Receptionist, Counselor, Admission Tickets etc. appear in dynamic sidebar.
   */
  addNewModulesMenus() {
    return this.http.post(`${this.apiUrl}/menus/add-new-modules-menus.php`, {});
  }
  static \u0275fac = function MenuService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MenuService, factory: _MenuService.\u0275fac, providedIn: "root" });
};

export {
  MenuService
};
//# sourceMappingURL=chunk-KDSPKK2G.js.map
