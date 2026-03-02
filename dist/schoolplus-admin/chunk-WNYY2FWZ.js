import {
  AuthService,
  LoadingComponent
} from "./chunk-OPEAQM6R.js";
import {
  RouterModule
} from "./chunk-GXY6YLNG.js";
import {
  CommonModule,
  HttpClient,
  NgForOf,
  NgIf,
  environment,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/shared/services/user-profile.service.ts
var UserProfileService = class _UserProfileService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getTeacherProfileAndSchedule() {
    return this.http.get(`${this.apiUrl}/user/teacher-profile-schedule.php`);
  }
  static \u0275fac = function UserProfileService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserProfileService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserProfileService, factory: _UserProfileService.\u0275fac, providedIn: "root" });
};

// src/app/pages/teacher-profile/teacher-profile.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6];
function TeacherProfileComponent_div_0_div_6_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 13);
    \u0275\u0275text(2, "Employee ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.teacher.employee_id);
  }
}
function TeacherProfileComponent_div_0_div_6_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 13);
    \u0275\u0275text(2, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.profile.email);
  }
}
function TeacherProfileComponent_div_0_div_6_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 13);
    \u0275\u0275text(2, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((ctx_r0.teacher == null ? null : ctx_r0.teacher.phone) || (ctx_r0.profile == null ? null : ctx_r0.profile.phone));
  }
}
function TeacherProfileComponent_div_0_div_6_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 13);
    \u0275\u0275text(2, "Qualification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.teacher.qualification);
  }
}
function TeacherProfileComponent_div_0_div_6_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 13);
    \u0275\u0275text(2, "Specialization");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.teacher.specialization);
  }
}
function TeacherProfileComponent_div_0_div_6_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 13);
    \u0275\u0275text(2, "Date of Joining");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.teacher.date_of_joining);
  }
}
function TeacherProfileComponent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "h2", 10);
    \u0275\u0275text(2, "Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11)(4, "div", 12)(5, "span", 13);
    \u0275\u0275text(6, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 14);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, TeacherProfileComponent_div_0_div_6_div_9_Template, 5, 1, "div", 15)(10, TeacherProfileComponent_div_0_div_6_div_10_Template, 5, 1, "div", 15)(11, TeacherProfileComponent_div_0_div_6_div_11_Template, 5, 1, "div", 15)(12, TeacherProfileComponent_div_0_div_6_div_12_Template, 5, 1, "div", 15)(13, TeacherProfileComponent_div_0_div_6_div_13_Template, 5, 1, "div", 15)(14, TeacherProfileComponent_div_0_div_6_div_14_Template, 5, 1, "div", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((ctx_r0.teacher == null ? null : ctx_r0.teacher.full_name) || (ctx_r0.profile == null ? null : ctx_r0.profile.full_name));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.teacher == null ? null : ctx_r0.teacher.employee_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.profile == null ? null : ctx_r0.profile.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.teacher == null ? null : ctx_r0.teacher.phone) || (ctx_r0.profile == null ? null : ctx_r0.profile.phone));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.teacher == null ? null : ctx_r0.teacher.qualification);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.teacher == null ? null : ctx_r0.teacher.specialization);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.teacher == null ? null : ctx_r0.teacher.date_of_joining);
  }
}
function TeacherProfileComponent_div_0_div_7_div_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 27);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const slot_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", slot_r2.start_time, " - ", slot_r2.end_time, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slot_r2.subject_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", slot_r2.class_name, "", slot_r2.section_name ? " - " + slot_r2.section_name : "", "");
  }
}
function TeacherProfileComponent_div_0_div_7_div_4_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 28);
    \u0275\u0275text(1, "No classes");
    \u0275\u0275elementEnd();
  }
}
function TeacherProfileComponent_div_0_div_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "h3", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 21);
    \u0275\u0275template(4, TeacherProfileComponent_div_0_div_7_div_4_div_4_Template, 7, 5, "div", 22)(5, TeacherProfileComponent_div_0_div_7_div_4_p_5_Template, 2, 0, "p", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.dayNames[day_r3 - 1]);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.getTimetableForDay(day_r3));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getTimetableForDay(day_r3).length === 0);
  }
}
function TeacherProfileComponent_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "h2", 10);
    \u0275\u0275text(2, "Teaching Schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17);
    \u0275\u0275template(4, TeacherProfileComponent_div_0_div_7_div_4_Template, 6, 3, "div", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function TeacherProfileComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "p");
    \u0275\u0275text(2, "Profile data could not be loaded. You may not be linked as a teacher.");
    \u0275\u0275elementEnd()();
  }
}
function TeacherProfileComponent_div_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "p");
    \u0275\u0275text(2, "No timetable assigned yet.");
    \u0275\u0275elementEnd()();
  }
}
function TeacherProfileComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h1", 4);
    \u0275\u0275text(3, "Profile & Schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 5);
    \u0275\u0275text(5, "Your profile and teaching timetable");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, TeacherProfileComponent_div_0_div_6_Template, 15, 7, "div", 6)(7, TeacherProfileComponent_div_0_div_7_Template, 5, 2, "div", 7)(8, TeacherProfileComponent_div_0_div_8_Template, 3, 0, "div", 8)(9, TeacherProfileComponent_div_0_div_9_Template, 3, 0, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r0.profile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.timetable.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading && !ctx_r0.profile && !ctx_r0.teacher);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading && ctx_r0.profile && ctx_r0.timetable.length === 0 && ctx_r0.teacher);
  }
}
function TeacherProfileComponent_app_loading_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loading");
  }
}
var TeacherProfileComponent = class _TeacherProfileComponent {
  authService;
  userProfileService;
  profile = null;
  teacher = null;
  timetable = [];
  loading = true;
  dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  constructor(authService, userProfileService) {
    this.authService = authService;
    this.userProfileService = userProfileService;
  }
  ngOnInit() {
    this.userProfileService.getTeacherProfileAndSchedule().subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === "success" && res.data) {
          this.profile = res.data.profile || {};
          this.teacher = res.data.teacher || null;
          this.timetable = res.data.timetable || [];
        }
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  // getTimetableForDay(dayOfWeek: number): any[] {
  //   return this.timetable.filter((t: any) => parseInt(t.day_of_week, 10) === dayOfWeek);
  // }
  getTimetableForDay(dayOfWeek) {
    return this.timetable.filter((t) => {
      if (!isNaN(+t.day_of_week))
        return +t.day_of_week === dayOfWeek;
      const index = this.dayNames.findIndex((d) => d.toLowerCase() === t.day_of_week.toLowerCase());
      return index + 1 === dayOfWeek;
    });
  }
  static \u0275fac = function TeacherProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeacherProfileComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(UserProfileService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeacherProfileComponent, selectors: [["app-teacher-profile"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 2, consts: [["class", "page-container", 4, "ngIf"], [4, "ngIf"], [1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["class", "profile-card", 4, "ngIf"], ["class", "schedule-card", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "profile-card"], [1, "section-title"], [1, "profile-grid"], [1, "profile-item"], [1, "label"], [1, "value"], ["class", "profile-item", 4, "ngIf"], [1, "schedule-card"], [1, "timetable-wrap"], ["class", "day-block", 4, "ngFor", "ngForOf"], [1, "day-block"], [1, "day-title"], [1, "period-list"], ["class", "period-item", 4, "ngFor", "ngForOf"], ["class", "no-period", 4, "ngIf"], [1, "period-item"], [1, "period-time"], [1, "period-subject"], [1, "period-class"], [1, "no-period"], [1, "empty-state"]], template: function TeacherProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, TeacherProfileComponent_div_0_Template, 10, 4, "div", 0)(1, TeacherProfileComponent_app_loading_1_Template, 1, 0, "app-loading", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, LoadingComponent], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  padding: 1rem;\n  max-width: 900px;\n}\n.profile-card[_ngcontent-%COMP%], \n.schedule-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 8px;\n  padding: 1.5rem;\n  margin-bottom: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.section-title[_ngcontent-%COMP%] {\n  margin: 0 0 1rem 0;\n  font-size: 1.1rem;\n  color: #333;\n}\n.profile-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 1rem;\n}\n.profile-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.profile-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #666;\n}\n.profile-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.timetable-wrap[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 1rem;\n}\n.day-block[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n  border-radius: 6px;\n  padding: 0.75rem;\n}\n.day-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  font-size: 0.95rem;\n  color: #333;\n}\n.period-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.period-item[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n  padding: 0.4rem 0;\n  border-bottom: 1px solid #f0f0f0;\n}\n.period-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.period-time[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 0.75rem;\n}\n.period-subject[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.period-class[_ngcontent-%COMP%] {\n  color: #555;\n  font-size: 0.8rem;\n}\n.no-period[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  color: #999;\n}\n.empty-state[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n  color: #666;\n}\n/*# sourceMappingURL=teacher-profile.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeacherProfileComponent, { className: "TeacherProfileComponent", filePath: "src\\app\\pages\\teacher-profile\\teacher-profile.component.ts", lineNumber: 15 });
})();
export {
  TeacherProfileComponent
};
//# sourceMappingURL=chunk-WNYY2FWZ.js.map
