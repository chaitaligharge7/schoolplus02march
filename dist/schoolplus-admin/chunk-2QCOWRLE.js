import {
  MenuService
} from "./chunk-KDSPKK2G.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormGroupName,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-DC2DSRDW.js";
import {
  CommonModule,
  HttpClient,
  NgForOf,
  NgIf,
  TitleCasePipe,
  environment,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/shared/services/settings.service.ts
var SettingsService = class _SettingsService {
  http;
  constructor(http) {
    this.http = http;
  }
  getSettings(category) {
    const url = category ? `${environment.apiUrl}/settings/get-settings.php?category=${category}` : `${environment.apiUrl}/settings/get-settings.php`;
    return this.http.get(url);
  }
  saveSettings(category, settings) {
    return this.http.post(`${environment.apiUrl}/settings/save-settings.php`, {
      category,
      settings
    });
  }
  static \u0275fac = function SettingsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SettingsService, factory: _SettingsService.\u0275fac, providedIn: "root" });
};

// src/app/pages/settings/settings.component.ts
var _c0 = () => ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
function SettingsComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function SettingsComponent_button_8_Template_button_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectTab(tab_r2.id));
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeTab === tab_r2.id);
    \u0275\u0275advance();
    \u0275\u0275classMap(tab_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r2.label);
  }
}
function SettingsComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Save Changes");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 15);
    \u0275\u0275text(2, " Saving... ");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "i", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.saveMessage, " ");
  }
}
function SettingsComponent_div_16_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "i", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.saveMessage, " ");
  }
}
function SettingsComponent_div_16_form_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 25)(1, "div", 26)(2, "h3", 27);
    \u0275\u0275text(3, "School Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 28)(5, "div", 29)(6, "label");
    \u0275\u0275text(7, "School Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 29)(10, "label");
    \u0275\u0275text(11, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 29)(14, "label");
    \u0275\u0275text(15, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 29)(18, "label");
    \u0275\u0275text(19, "Website");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 29)(22, "label");
    \u0275\u0275text(23, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "textarea", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 28)(26, "div", 29)(27, "label");
    \u0275\u0275text(28, "Tagline");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 29)(31, "label");
    \u0275\u0275text(32, "Logo URL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 26)(35, "h3", 27);
    \u0275\u0275text(36, "Regional Settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 28)(38, "div", 29)(39, "label");
    \u0275\u0275text(40, "Timezone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "select", 37)(42, "option", 38);
    \u0275\u0275text(43, "Asia/Calcutta (IST)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "option", 39);
    \u0275\u0275text(45, "UTC");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 29)(47, "label");
    \u0275\u0275text(48, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "select", 40)(50, "option", 41);
    \u0275\u0275text(51, "English");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "option", 42);
    \u0275\u0275text(53, "Hindi");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "div", 29)(55, "label");
    \u0275\u0275text(56, "Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "select", 43)(58, "option", 44);
    \u0275\u0275text(59, "INR (\u20B9)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "option", 45);
    \u0275\u0275text(61, "USD ($)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "div", 29)(63, "label");
    \u0275\u0275text(64, "Date Format");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "select", 46)(66, "option", 47);
    \u0275\u0275text(67, "DD/MM/YYYY");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "option", 48);
    \u0275\u0275text(69, "MM/DD/YYYY");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "option", 49);
    \u0275\u0275text(71, "YYYY-MM-DD");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(72, "div", 29)(73, "label");
    \u0275\u0275text(74, "Fiscal Year Start (Month)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "select", 50)(76, "option", 51);
    \u0275\u0275text(77, "January");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "option", 51);
    \u0275\u0275text(79, "April");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "option", 51);
    \u0275\u0275text(81, "July");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r2.generalForm);
    \u0275\u0275advance(76);
    \u0275\u0275property("value", 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 4);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 7);
  }
}
function SettingsComponent_div_16_form_4_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "label", 66);
    \u0275\u0275element(2, "input", 67);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "titlecase");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const day_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("formControlName", day_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, day_r4));
  }
}
function SettingsComponent_div_16_form_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 25)(1, "div", 26)(2, "h3", 27);
    \u0275\u0275text(3, "Academic Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 28)(5, "div", 29)(6, "label");
    \u0275\u0275text(7, "Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 29)(10, "label");
    \u0275\u0275text(11, "End Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 53);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 26)(14, "h3", 27);
    \u0275\u0275text(15, "School Timings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 28)(17, "div", 29)(18, "label");
    \u0275\u0275text(19, "Start Time");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 29)(22, "label");
    \u0275\u0275text(23, "End Time");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 29)(26, "label");
    \u0275\u0275text(27, "Period Duration (minutes)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 29)(30, "label");
    \u0275\u0275text(31, "Break Duration (minutes)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "input", 57);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 26)(34, "h3", 27);
    \u0275\u0275text(35, "Grading");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 28)(37, "div", 29)(38, "label");
    \u0275\u0275text(39, "Grading Scale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "select", 58)(41, "option", 59);
    \u0275\u0275text(42, "Percentage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "option", 60);
    \u0275\u0275text(44, "Grade (A-F)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "option", 61);
    \u0275\u0275text(46, "Points");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 29)(48, "label");
    \u0275\u0275text(49, "Pass Percentage");
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "input", 62);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 26)(52, "h3", 27);
    \u0275\u0275text(53, "Working Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 63);
    \u0275\u0275template(55, SettingsComponent_div_16_form_4_div_55_Template, 6, 4, "div", 64);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r2.academicForm);
    \u0275\u0275advance(55);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(2, _c0));
  }
}
function SettingsComponent_div_16_form_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 25)(1, "div", 26)(2, "h3", 27);
    \u0275\u0275text(3, "Fee Configuration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 28)(5, "div", 29)(6, "label");
    \u0275\u0275text(7, "Fee Due Date (Day of Month)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 29)(10, "label");
    \u0275\u0275text(11, "Late Fee Percentage");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 29)(14, "label");
    \u0275\u0275text(15, "Late Fee Grace Period (Days)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 65)(18, "label", 66);
    \u0275\u0275element(19, "input", 71);
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21, "Enable Online Payment");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 65)(23, "label", 66);
    \u0275\u0275element(24, "input", 72);
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26, "Enable Partial Payment");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r2.feeForm);
  }
}
function SettingsComponent_div_16_form_6_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "label");
    \u0275\u0275text(3, "WhatsApp API URL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 29)(6, "label");
    \u0275\u0275text(7, "WhatsApp API Key");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 79);
    \u0275\u0275elementEnd()();
  }
}
function SettingsComponent_div_16_form_6_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "label");
    \u0275\u0275text(2, "From Email Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 80);
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_div_16_form_6_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "label");
    \u0275\u0275text(2, "SMS Provider");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 81)(4, "option", 82);
    \u0275\u0275text(5, "Select provider");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 83);
    \u0275\u0275text(7, "Twilio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 84);
    \u0275\u0275text(9, "MSG91");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 85);
    \u0275\u0275text(11, "Other");
    \u0275\u0275elementEnd()()();
  }
}
function SettingsComponent_div_16_form_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 25)(1, "div", 26)(2, "h3", 27);
    \u0275\u0275text(3, "WhatsApp Integration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 65)(5, "label", 66);
    \u0275\u0275element(6, "input", 73);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Enable WhatsApp Notifications");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, SettingsComponent_div_16_form_6_div_9_Template, 9, 0, "div", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 26)(11, "h3", 27);
    \u0275\u0275text(12, "Email Settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 65)(14, "label", 66);
    \u0275\u0275element(15, "input", 75);
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "Enable Email Notifications");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(18, SettingsComponent_div_16_form_6_div_18_Template, 4, 0, "div", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 26)(20, "h3", 27);
    \u0275\u0275text(21, "SMS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 65)(23, "label", 66);
    \u0275\u0275element(24, "input", 77);
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26, "Enable SMS Notifications");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(27, SettingsComponent_div_16_form_6_div_27_Template, 12, 0, "div", 76);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r2.communicationForm);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.communicationForm.get("whatsapp_enabled")) == null ? null : tmp_3_0.value);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r2.communicationForm.get("email_enabled")) == null ? null : tmp_4_0.value);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r2.communicationForm.get("sms_enabled")) == null ? null : tmp_5_0.value);
  }
}
function SettingsComponent_div_16_form_7_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "label");
    \u0275\u0275text(3, "Razorpay Key ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 29)(6, "label");
    \u0275\u0275text(7, "Razorpay Key Secret");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 91);
    \u0275\u0275elementEnd()();
  }
}
function SettingsComponent_div_16_form_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 25)(1, "div", 26)(2, "h3", 27);
    \u0275\u0275text(3, "Payment Gateway");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 29)(5, "label");
    \u0275\u0275text(6, "Payment Gateway Provider");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "select", 86)(8, "option", 87);
    \u0275\u0275text(9, "Razorpay");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 88);
    \u0275\u0275text(11, "Paytm");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 89);
    \u0275\u0275text(13, "Stripe");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, SettingsComponent_div_16_form_7_div_14_Template, 9, 0, "div", 74);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r2.paymentForm);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r2.paymentForm.get("payment_gateway")) == null ? null : tmp_3_0.value) === "razorpay");
  }
}
function SettingsComponent_div_16_form_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 25)(1, "div", 26)(2, "h3", 27);
    \u0275\u0275text(3, "Theme & Layout");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 28)(5, "div", 29)(6, "label");
    \u0275\u0275text(7, "Theme");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 92)(9, "option", 93);
    \u0275\u0275text(10, "Light");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 94);
    \u0275\u0275text(12, "Dark");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 95);
    \u0275\u0275text(14, "System");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 29)(16, "label");
    \u0275\u0275text(17, "Primary Color");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 65)(20, "label", 66);
    \u0275\u0275element(21, "input", 97);
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23, "Sidebar collapsed by default");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 65)(25, "label", 66);
    \u0275\u0275element(26, "input", 98);
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "Show breadcrumbs");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r2.appearanceForm);
  }
}
function SettingsComponent_div_16_form_9_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "label");
    \u0275\u0275text(2, "Digest Time");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 104);
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_div_16_form_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 25)(1, "div", 26)(2, "h3", 27);
    \u0275\u0275text(3, "Parent Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 65)(5, "label", 66);
    \u0275\u0275element(6, "input", 99);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Notify on attendance");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 65)(10, "label", 66);
    \u0275\u0275element(11, "input", 100);
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "Notify on fee dues");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 65)(15, "label", 66);
    \u0275\u0275element(16, "input", 101);
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "Notify on marks/results");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "div", 26)(20, "h3", 27);
    \u0275\u0275text(21, "Staff Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 65)(23, "label", 66);
    \u0275\u0275element(24, "input", 102);
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26, "Notify teachers on leave requests");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 26)(28, "h3", 27);
    \u0275\u0275text(29, "Daily Digest");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 65)(31, "label", 66);
    \u0275\u0275element(32, "input", 103);
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34, "Enable daily digest email");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(35, SettingsComponent_div_16_form_9_div_35_Template, 4, 0, "div", 76);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r2.notificationsForm);
    \u0275\u0275advance(35);
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.notificationsForm.get("daily_digest_enabled")) == null ? null : tmp_3_0.value);
  }
}
function SettingsComponent_div_16_form_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 25)(1, "div", 26)(2, "h3", 27);
    \u0275\u0275text(3, "Admission Process");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 65)(5, "label", 66);
    \u0275\u0275element(6, "input", 105);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Admissions open");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 28)(10, "div", 29)(11, "label");
    \u0275\u0275text(12, "Application Fee (\u20B9)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 107)(15, "label", 66);
    \u0275\u0275element(16, "input", 108);
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "Application fee required");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "div", 29)(20, "label");
    \u0275\u0275text(21, "Required Documents (comma-separated)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 109);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 26)(24, "h3", 27);
    \u0275\u0275text(25, "Age & Roll");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 28)(27, "div", 29)(28, "label");
    \u0275\u0275text(29, "Minimum Age (years)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 29)(32, "label");
    \u0275\u0275text(33, "Maximum Age (years)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 107)(36, "label", 66);
    \u0275\u0275element(37, "input", 112);
    \u0275\u0275elementStart(38, "span");
    \u0275\u0275text(39, "Auto-assign roll number");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r2.admissionForm);
  }
}
function SettingsComponent_div_16_form_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 25)(1, "div", 26)(2, "h3", 27);
    \u0275\u0275text(3, "Attendance Rules");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 28)(5, "div", 29)(6, "label");
    \u0275\u0275text(7, "Default Attendance Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 113)(9, "option", 114);
    \u0275\u0275text(10, "Present / Absent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 115);
    \u0275\u0275text(12, "Present / Absent / Late");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 116);
    \u0275\u0275text(14, "Mark by period");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 29)(16, "label");
    \u0275\u0275text(17, "Grace Period (minutes)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 29)(20, "label");
    \u0275\u0275text(21, "Alert After Consecutive Absent (days)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 118);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 29)(24, "label");
    \u0275\u0275text(25, "Half-day Threshold (minutes)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 119);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 65)(28, "label", 66);
    \u0275\u0275element(29, "input", 120);
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31, "Enable biometric attendance");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r2.attendanceForm);
  }
}
function SettingsComponent_div_16_form_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 25)(1, "div", 26)(2, "h3", 27);
    \u0275\u0275text(3, "Transport Module");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 65)(5, "label", 66);
    \u0275\u0275element(6, "input", 121);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Transport module enabled");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 28)(10, "div", 29)(11, "label");
    \u0275\u0275text(12, "Default Bus Fee (\u20B9/month)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 122);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 107)(15, "label", 66);
    \u0275\u0275element(16, "input", 123);
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "Require route approval");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 107)(20, "label", 66);
    \u0275\u0275element(21, "input", 124);
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23, "Track live bus location");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r2.transportForm);
  }
}
function SettingsComponent_div_16_form_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 25)(1, "div", 26)(2, "h3", 27);
    \u0275\u0275text(3, "Hostel Module");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 65)(5, "label", 66);
    \u0275\u0275element(6, "input", 125);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Hostel module enabled");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 28)(10, "div", 29)(11, "label");
    \u0275\u0275text(12, "Default Room Fee (\u20B9/month)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 126);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 107)(15, "label", 66);
    \u0275\u0275element(16, "input", 127);
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "Meal included by default");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 107)(20, "label", 66);
    \u0275\u0275element(21, "input", 128);
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23, "Visitor entry allowed");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r2.hostelForm);
  }
}
function SettingsComponent_div_16_form_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 25)(1, "div", 26)(2, "h3", 27);
    \u0275\u0275text(3, "Report Defaults");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 28)(5, "div", 29)(6, "label");
    \u0275\u0275text(7, "Default Report Format");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 129)(9, "option", 130);
    \u0275\u0275text(10, "PDF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 131);
    \u0275\u0275text(12, "Excel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 132);
    \u0275\u0275text(14, "CSV");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 29)(16, "label");
    \u0275\u0275text(17, "Report Retention (days)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 133);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 107)(20, "label", 66);
    \u0275\u0275element(21, "input", 134);
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23, "Include charts in reports");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 107)(25, "label", 66);
    \u0275\u0275element(26, "input", 135);
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "Show school logo on reports");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r2.reportsForm);
  }
}
function SettingsComponent_div_16_form_15_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "label");
    \u0275\u0275text(3, "Backup Frequency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 139)(5, "option", 140);
    \u0275\u0275text(6, "Daily");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 141);
    \u0275\u0275text(8, "Weekly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 142);
    \u0275\u0275text(10, "Monthly");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 29)(12, "label");
    \u0275\u0275text(13, "Retention (days)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 143);
    \u0275\u0275elementEnd()();
  }
}
function SettingsComponent_div_16_form_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 25)(1, "div", 26)(2, "h3", 27);
    \u0275\u0275text(3, "Automated Backup");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 65)(5, "label", 66);
    \u0275\u0275element(6, "input", 136);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Enable automatic backup");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, SettingsComponent_div_16_form_15_div_9_Template, 15, 0, "div", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 26)(11, "h3", 27);
    \u0275\u0275text(12, "Data & Privacy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 65)(14, "label", 66);
    \u0275\u0275element(15, "input", 137);
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "Allow data export");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 29)(19, "label");
    \u0275\u0275text(20, "Anonymize data after (years, for GDPR)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 138);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r2.backupForm);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.backupForm.get("auto_backup_enabled")) == null ? null : tmp_3_0.value);
  }
}
function SettingsComponent_div_16_div_16_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Sync new menus to sidebar");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_div_16_div_16_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 15);
    \u0275\u0275text(2, " Syncing...");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_div_16_div_16_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 150);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("success", ctx_r2.menuSyncMessage.includes("success") || ctx_r2.menuSyncMessage.includes("added"))("error", ctx_r2.menuSyncMessage.includes("Failed"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.menuSyncMessage, " ");
  }
}
function SettingsComponent_div_16_div_16_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 151);
    \u0275\u0275listener("click", function SettingsComponent_div_16_div_16_div_16_Template_div_click_0_listener() {
      const module_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleModule(module_r7.key));
    });
    \u0275\u0275elementStart(1, "div", 152)(2, "input", 153);
    \u0275\u0275listener("change", function SettingsComponent_div_16_div_16_div_16_Template_input_change_2_listener() {
      const module_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleModule(module_r7.key));
    })("click", function SettingsComponent_div_16_div_16_div_16_Template_input_click_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 154)(4, "h4", 155);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const module_r7 = ctx.$implicit;
    \u0275\u0275classProp("enabled", module_r7.enabled);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", module_r7.enabled);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(module_r7.label);
  }
}
function SettingsComponent_div_16_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 144)(1, "div", 26)(2, "h3", 27);
    \u0275\u0275text(3, "Sidebar menu sync");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 145);
    \u0275\u0275text(5, "If new modules (Inquiry to Admission, Admission Tickets, Security Guard, Receptionist, Counselor) do not appear in the sidebar, add them to the database and refresh.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 146);
    \u0275\u0275listener("click", function SettingsComponent_div_16_div_16_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.syncNewMenus());
    });
    \u0275\u0275template(7, SettingsComponent_div_16_div_16_span_7_Template, 2, 0, "span", 11)(8, SettingsComponent_div_16_div_16_span_8_Template, 3, 0, "span", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, SettingsComponent_div_16_div_16_p_9_Template, 2, 5, "p", 147);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 26)(11, "h3", 27);
    \u0275\u0275text(12, "Enable/Disable Modules");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 145);
    \u0275\u0275text(14, "Control which modules are available in your school management system.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 148);
    \u0275\u0275template(16, SettingsComponent_div_16_div_16_div_16_Template, 6, 4, "div", 149);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r2.syncingMenus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.syncingMenus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.syncingMenus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.menuSyncMessage);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.modules);
  }
}
function SettingsComponent_div_16_form_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 25)(1, "div", 26)(2, "h3", 27);
    \u0275\u0275text(3, "Password Policy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 28)(5, "div", 29)(6, "label");
    \u0275\u0275text(7, "Minimum Password Length");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 156);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 65)(10, "label", 66);
    \u0275\u0275element(11, "input", 157);
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "Require Uppercase Letters");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 65)(15, "label", 66);
    \u0275\u0275element(16, "input", 158);
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "Require Lowercase Letters");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 65)(20, "label", 66);
    \u0275\u0275element(21, "input", 159);
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23, "Require Numbers");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 65)(25, "label", 66);
    \u0275\u0275element(26, "input", 160);
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "Require Special Characters");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "div", 26)(30, "h3", 27);
    \u0275\u0275text(31, "Session Settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 29)(33, "label");
    \u0275\u0275text(34, "Session Timeout (seconds)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "input", 161);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 65)(37, "label", 66);
    \u0275\u0275element(38, "input", 162);
    \u0275\u0275elementStart(39, "span");
    \u0275\u0275text(40, "Enable Two-Factor Authentication");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r2.securityForm);
  }
}
function SettingsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, SettingsComponent_div_16_div_1_Template, 3, 1, "div", 17)(2, SettingsComponent_div_16_div_2_Template, 3, 1, "div", 18)(3, SettingsComponent_div_16_form_3_Template, 82, 4, "form", 19)(4, SettingsComponent_div_16_form_4_Template, 56, 3, "form", 19)(5, SettingsComponent_div_16_form_5_Template, 27, 1, "form", 19)(6, SettingsComponent_div_16_form_6_Template, 28, 4, "form", 19)(7, SettingsComponent_div_16_form_7_Template, 15, 2, "form", 19)(8, SettingsComponent_div_16_form_8_Template, 29, 1, "form", 19)(9, SettingsComponent_div_16_form_9_Template, 36, 2, "form", 19)(10, SettingsComponent_div_16_form_10_Template, 40, 1, "form", 19)(11, SettingsComponent_div_16_form_11_Template, 32, 1, "form", 19)(12, SettingsComponent_div_16_form_12_Template, 24, 1, "form", 19)(13, SettingsComponent_div_16_form_13_Template, 24, 1, "form", 19)(14, SettingsComponent_div_16_form_14_Template, 29, 1, "form", 19)(15, SettingsComponent_div_16_form_15_Template, 22, 2, "form", 19)(16, SettingsComponent_div_16_div_16_Template, 17, 5, "div", 20)(17, SettingsComponent_div_16_form_17_Template, 41, 1, "form", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.saveMessage && ctx_r2.saveMessage.includes("success"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.saveMessage && !ctx_r2.saveMessage.includes("success"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeTab === "general");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeTab === "academic");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeTab === "fee");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeTab === "communication");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeTab === "payment");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeTab === "appearance");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeTab === "notifications");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeTab === "admission");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeTab === "attendance");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeTab === "transport");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeTab === "hostel");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeTab === "reports");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeTab === "backup");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeTab === "modules");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeTab === "security");
  }
}
function SettingsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 163);
    \u0275\u0275element(1, "div", 164);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading settings...");
    \u0275\u0275elementEnd()();
  }
}
var SettingsComponent = class _SettingsComponent {
  fb;
  settingsService;
  menuService;
  tabs = [
    { id: "general", label: "General", icon: "bi-gear" },
    { id: "academic", label: "Academic", icon: "bi-book" },
    { id: "fee", label: "Fee Management", icon: "bi-currency-dollar" },
    { id: "communication", label: "Communication", icon: "bi-chat-dots" },
    { id: "payment", label: "Payment Gateway", icon: "bi-credit-card" },
    { id: "appearance", label: "Appearance", icon: "bi-palette" },
    { id: "notifications", label: "Notifications", icon: "bi-bell" },
    { id: "admission", label: "Admission", icon: "bi-person-plus" },
    { id: "attendance", label: "Attendance", icon: "bi-calendar-check" },
    { id: "transport", label: "Transport", icon: "bi-bus-front" },
    { id: "hostel", label: "Hostel", icon: "bi-building" },
    { id: "reports", label: "Reports", icon: "bi-graph-up" },
    { id: "backup", label: "Backup & Data", icon: "bi-cloud-arrow-down" },
    { id: "modules", label: "Modules", icon: "bi-grid" },
    { id: "security", label: "Security", icon: "bi-shield-lock" }
  ];
  activeTab = "general";
  isLoading = false;
  isSaving = false;
  saveMessage = "";
  syncingMenus = false;
  menuSyncMessage = "";
  // Form groups for each tab
  generalForm;
  academicForm;
  feeForm;
  communicationForm;
  paymentForm;
  appearanceForm;
  notificationsForm;
  admissionForm;
  attendanceForm;
  transportForm;
  hostelForm;
  reportsForm;
  backupForm;
  modulesForm;
  securityForm;
  // Module list for dynamic configuration (all major app modules)
  modules = [
    { key: "masters", label: "Masters (Academic Years, Classes, Sections, etc.)", enabled: true },
    { key: "students", label: "Students", enabled: true },
    { key: "teachers", label: "Teachers", enabled: true },
    { key: "attendance", label: "Attendance Management", enabled: true },
    { key: "academic", label: "Academic (Marksheets, Syllabus, Classwork, etc.)", enabled: true },
    { key: "transactions", label: "Transactions (Examinations, Library, Timetable, etc.)", enabled: true },
    { key: "communications", label: "Communications (SMS, WhatsApp)", enabled: true },
    { key: "administration", label: "Administration (Approvals, Leave, CMS, Visitors, etc.)", enabled: true },
    { key: "student_services", label: "Student Services (Uniform, Book Distribution, ID Cards)", enabled: true },
    { key: "mess_facilities", label: "Mess & Facilities", enabled: true },
    { key: "infrastructure", label: "Infrastructure (CCTV, Bus, Lab, etc.)", enabled: true },
    { key: "activities", label: "Activities (Birthday, Committees, Sports)", enabled: true },
    { key: "accounts", label: "Accounts (Fees, Receipts, Defaulters)", enabled: true },
    { key: "security_guard", label: "Security Guard", enabled: true },
    { key: "counselor", label: "Counselor", enabled: true },
    { key: "receptionist", label: "Receptionist", enabled: true },
    { key: "transport", label: "Transport", enabled: true },
    { key: "hostel", label: "Hostel", enabled: true },
    { key: "certificates", label: "Certificates", enabled: true },
    { key: "reports", label: "Reports & Analytics", enabled: true },
    { key: "notices", label: "Notices", enabled: true },
    { key: "connect_us", label: "Connect Us", enabled: true },
    { key: "examinations", label: "Examinations", enabled: true },
    { key: "library", label: "Library Management", enabled: true },
    { key: "fees", label: "Fee Management", enabled: true },
    { key: "notifications", label: "Notifications", enabled: true }
  ];
  constructor(fb, settingsService, menuService) {
    this.fb = fb;
    this.settingsService = settingsService;
    this.menuService = menuService;
    this.initializeForms();
  }
  ngOnInit() {
    this.loadSettings();
  }
  initializeForms() {
    this.generalForm = this.fb.group({
      school_name: [""],
      school_email: [""],
      school_phone: [""],
      school_website: [""],
      school_address: [""],
      school_tagline: [""],
      school_logo_url: [""],
      timezone: ["Asia/Calcutta"],
      language: ["en"],
      currency: ["INR"],
      date_format: ["DD/MM/YYYY"],
      fiscal_year_start: [4]
    });
    this.academicForm = this.fb.group({
      academic_year_start: [""],
      academic_year_end: [""],
      class_period_duration: [45],
      school_start_time: ["08:00"],
      school_end_time: ["15:00"],
      break_duration_minutes: [15],
      grading_scale: ["percentage"],
      pass_percentage: [35],
      working_days: this.fb.group({
        monday: [true],
        tuesday: [true],
        wednesday: [true],
        thursday: [true],
        friday: [true],
        saturday: [false],
        sunday: [false]
      })
    });
    this.feeForm = this.fb.group({
      fee_due_date: [5],
      late_fee_percentage: [5],
      late_fee_grace_period: [7],
      enable_online_payment: [true],
      enable_partial_payment: [true]
    });
    this.communicationForm = this.fb.group({
      whatsapp_enabled: [false],
      whatsapp_api_url: [""],
      whatsapp_api_key: [""],
      sms_enabled: [false],
      sms_provider: [""],
      email_enabled: [true],
      email_from_address: [""]
    });
    this.paymentForm = this.fb.group({
      payment_gateway: ["razorpay"],
      razorpay_key_id: [""],
      razorpay_key_secret: [""],
      paytm_enabled: [false],
      paytm_merchant_id: [""]
    });
    this.appearanceForm = this.fb.group({
      theme: ["light"],
      primary_color: ["#2563eb"],
      sidebar_collapsed_default: [false],
      show_breadcrumbs: [true]
    });
    this.notificationsForm = this.fb.group({
      notify_parent_attendance: [true],
      notify_parent_fees: [true],
      notify_parent_marks: [true],
      notify_teacher_leave: [true],
      daily_digest_enabled: [false],
      digest_time: ["08:00"]
    });
    this.admissionForm = this.fb.group({
      admission_open: [true],
      application_fee_amount: [0],
      application_fee_required: [false],
      required_documents: [""],
      min_age_years: [3],
      max_age_years: [18],
      auto_assign_roll: [true]
    });
    this.attendanceForm = this.fb.group({
      default_attendance_type: ["present_absent"],
      grace_period_minutes: [15],
      alert_absent_threshold: [3],
      enable_biometric: [false],
      half_day_threshold_minutes: [240]
    });
    this.transportForm = this.fb.group({
      transport_enabled: [true],
      default_bus_fee: [0],
      require_route_approval: [false],
      track_live_location: [false]
    });
    this.hostelForm = this.fb.group({
      hostel_enabled: [true],
      default_room_fee: [0],
      meal_included_default: [true],
      visitor_allowed: [true]
    });
    this.reportsForm = this.fb.group({
      default_report_format: ["pdf"],
      report_retention_days: [365],
      include_charts: [true],
      report_logo_visible: [true]
    });
    this.backupForm = this.fb.group({
      auto_backup_enabled: [false],
      backup_frequency: ["weekly"],
      backup_retention_days: [30],
      export_allowed: [true],
      gdpr_anonymize_after_years: [7]
    });
    this.modulesForm = this.fb.group({});
    this.securityForm = this.fb.group({
      password_min_length: [8],
      password_require_uppercase: [true],
      password_require_lowercase: [true],
      password_require_numbers: [true],
      password_require_symbols: [false],
      session_timeout: [3600],
      enable_two_factor: [false]
    });
  }
  selectTab(tabId) {
    this.activeTab = tabId;
    this.saveMessage = "";
  }
  getActiveTabLabel() {
    const tab = this.tabs.find((t) => t.id === this.activeTab);
    return tab?.label || "Settings";
  }
  loadSettings() {
    this.isLoading = true;
    this.settingsService.getSettings().subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.populateForms(response.data);
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading settings:", error);
        this.isLoading = false;
      }
    });
  }
  populateForms(data) {
    if (data.general)
      this.generalForm.patchValue(data.general);
    if (data.academic)
      this.academicForm.patchValue(data.academic);
    if (data.fee)
      this.feeForm.patchValue(data.fee);
    if (data.communication)
      this.communicationForm.patchValue(data.communication);
    if (data.payment)
      this.paymentForm.patchValue(data.payment);
    if (data.appearance)
      this.appearanceForm.patchValue(data.appearance);
    if (data.notifications)
      this.notificationsForm.patchValue(data.notifications);
    if (data.admission)
      this.admissionForm.patchValue(data.admission);
    if (data.attendance)
      this.attendanceForm.patchValue(data.attendance);
    if (data.transport)
      this.transportForm.patchValue(data.transport);
    if (data.hostel)
      this.hostelForm.patchValue(data.hostel);
    if (data.reports)
      this.reportsForm.patchValue(data.reports);
    if (data.backup)
      this.backupForm.patchValue(data.backup);
    if (data.modules) {
      this.modules.forEach((module) => {
        const raw = data.modules[module.key];
        const enabled = raw?.value?.enabled ?? raw?.enabled ?? false;
        module.enabled = !!enabled;
      });
    }
    if (data.security)
      this.securityForm.patchValue(data.security);
  }
  saveSettings() {
    if (this.getActiveForm().invalid) {
      this.markFormGroupTouched(this.getActiveForm());
      return;
    }
    this.isSaving = true;
    this.saveMessage = "";
    const formData = this.getActiveForm().value;
    const category = this.activeTab;
    this.settingsService.saveSettings(category, formData).subscribe({
      next: (response) => {
        this.isSaving = false;
        if (response.status === "success") {
          this.saveMessage = "Settings saved successfully!";
          setTimeout(() => {
            this.saveMessage = "";
          }, 3e3);
        } else {
          this.saveMessage = response.message || "Failed to save settings";
        }
      },
      error: (error) => {
        this.isSaving = false;
        this.saveMessage = error.error?.message || "An error occurred while saving settings";
        console.error("Error saving settings:", error);
      }
    });
  }
  getActiveForm() {
    switch (this.activeTab) {
      case "general":
        return this.generalForm;
      case "academic":
        return this.academicForm;
      case "fee":
        return this.feeForm;
      case "communication":
        return this.communicationForm;
      case "payment":
        return this.paymentForm;
      case "appearance":
        return this.appearanceForm;
      case "notifications":
        return this.notificationsForm;
      case "admission":
        return this.admissionForm;
      case "attendance":
        return this.attendanceForm;
      case "transport":
        return this.transportForm;
      case "hostel":
        return this.hostelForm;
      case "reports":
        return this.reportsForm;
      case "backup":
        return this.backupForm;
      case "modules":
        return this.modulesForm;
      case "security":
        return this.securityForm;
      default:
        return this.generalForm;
    }
  }
  toggleModule(moduleKey) {
    const module = this.modules.find((m) => m.key === moduleKey);
    if (module) {
      module.enabled = !module.enabled;
    }
  }
  saveModules() {
    const modulesData = {};
    this.modules.forEach((module) => {
      modulesData[module.key] = { enabled: module.enabled };
    });
    this.isSaving = true;
    this.settingsService.saveSettings("modules", modulesData).subscribe({
      next: (response) => {
        this.isSaving = false;
        if (response.status === "success") {
          this.saveMessage = "Module settings saved successfully!";
          setTimeout(() => {
            this.saveMessage = "";
          }, 3e3);
        }
      },
      error: (error) => {
        this.isSaving = false;
        this.saveMessage = "Failed to save module settings";
      }
    });
  }
  /** Add new modules (Inquiry to Admission, Admission Tickets, etc.) to sidebar menu in database; then refresh menus. */
  syncNewMenus() {
    this.menuSyncMessage = "";
    this.syncingMenus = true;
    this.menuService.addNewModulesMenus().subscribe({
      next: (res) => {
        this.syncingMenus = false;
        if (res.status === "success") {
          this.menuSyncMessage = res.message || "New menus added. Refreshing sidebar\u2026";
          this.menuService.refreshMenus();
          setTimeout(() => {
            this.menuSyncMessage = "";
          }, 5e3);
        } else {
          this.menuSyncMessage = res.message || "Sync completed with no changes";
        }
      },
      error: (err) => {
        this.syncingMenus = false;
        this.menuSyncMessage = err.error?.message || "Failed to sync new menus";
      }
    });
  }
  markFormGroupTouched(formGroup) {
    Object.keys(formGroup.controls).forEach((key) => {
      const control = formGroup.get(key);
      control?.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  static \u0275fac = function SettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(MenuService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 7, consts: [[1, "settings-container"], [1, "settings-header"], [1, "settings-title"], [1, "settings-subtitle"], [1, "settings-content"], [1, "settings-tabs"], ["class", "tab-button", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "settings-panel"], [1, "panel-header"], [1, "panel-title"], [1, "btn", "btn-primary", "btn-save", 3, "click", "disabled"], [4, "ngIf"], ["class", "panel-content", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], [1, "tab-button", 3, "click"], [1, "spinner-small"], [1, "panel-content"], ["class", "save-message success", 4, "ngIf"], ["class", "save-message error", 4, "ngIf"], ["class", "settings-form", 3, "formGroup", 4, "ngIf"], ["class", "modules-settings", 4, "ngIf"], [1, "save-message", "success"], [1, "bi", "bi-check-circle"], [1, "save-message", "error"], [1, "bi", "bi-exclamation-circle"], [1, "settings-form", 3, "formGroup"], [1, "form-section"], [1, "section-title"], [1, "form-grid"], [1, "form-group"], ["type", "text", "formControlName", "school_name", 1, "form-control"], ["type", "email", "formControlName", "school_email", 1, "form-control"], ["type", "tel", "formControlName", "school_phone", 1, "form-control"], ["type", "url", "formControlName", "school_website", 1, "form-control"], ["formControlName", "school_address", "rows", "3", 1, "form-control"], ["type", "text", "formControlName", "school_tagline", "placeholder", "e.g. Excellence in Education", 1, "form-control"], ["type", "url", "formControlName", "school_logo_url", "placeholder", "https://...", 1, "form-control"], ["formControlName", "timezone", 1, "form-control"], ["value", "Asia/Calcutta"], ["value", "UTC"], ["formControlName", "language", 1, "form-control"], ["value", "en"], ["value", "hi"], ["formControlName", "currency", 1, "form-control"], ["value", "INR"], ["value", "USD"], ["formControlName", "date_format", 1, "form-control"], ["value", "DD/MM/YYYY"], ["value", "MM/DD/YYYY"], ["value", "YYYY-MM-DD"], ["formControlName", "fiscal_year_start", 1, "form-control"], [3, "value"], ["type", "date", "formControlName", "academic_year_start", 1, "form-control"], ["type", "date", "formControlName", "academic_year_end", 1, "form-control"], ["type", "time", "formControlName", "school_start_time", 1, "form-control"], ["type", "time", "formControlName", "school_end_time", 1, "form-control"], ["type", "number", "formControlName", "class_period_duration", 1, "form-control"], ["type", "number", "formControlName", "break_duration_minutes", 1, "form-control"], ["formControlName", "grading_scale", 1, "form-control"], ["value", "percentage"], ["value", "grade"], ["value", "points"], ["type", "number", "formControlName", "pass_percentage", "min", "0", "max", "100", 1, "form-control"], ["formGroupName", "working_days", 1, "form-grid"], ["class", "form-group checkbox-group", 4, "ngFor", "ngForOf"], [1, "form-group", "checkbox-group"], [1, "checkbox-label"], ["type", "checkbox", 3, "formControlName"], ["type", "number", "formControlName", "fee_due_date", "min", "1", "max", "31", 1, "form-control"], ["type", "number", "formControlName", "late_fee_percentage", "min", "0", "max", "100", "step", "0.1", 1, "form-control"], ["type", "number", "formControlName", "late_fee_grace_period", "min", "0", 1, "form-control"], ["type", "checkbox", "formControlName", "enable_online_payment"], ["type", "checkbox", "formControlName", "enable_partial_payment"], ["type", "checkbox", "formControlName", "whatsapp_enabled"], ["class", "form-grid", 4, "ngIf"], ["type", "checkbox", "formControlName", "email_enabled"], ["class", "form-group", 4, "ngIf"], ["type", "checkbox", "formControlName", "sms_enabled"], ["type", "url", "formControlName", "whatsapp_api_url", 1, "form-control"], ["type", "text", "formControlName", "whatsapp_api_key", 1, "form-control"], ["type", "email", "formControlName", "email_from_address", 1, "form-control"], ["formControlName", "sms_provider", 1, "form-control"], ["value", ""], ["value", "twilio"], ["value", "msg91"], ["value", "other"], ["formControlName", "payment_gateway", 1, "form-control"], ["value", "razorpay"], ["value", "paytm"], ["value", "stripe"], ["type", "text", "formControlName", "razorpay_key_id", 1, "form-control"], ["type", "password", "formControlName", "razorpay_key_secret", 1, "form-control"], ["formControlName", "theme", 1, "form-control"], ["value", "light"], ["value", "dark"], ["value", "system"], ["type", "color", "formControlName", "primary_color", 1, "form-control", "form-control-color", 2, "height", "38px"], ["type", "checkbox", "formControlName", "sidebar_collapsed_default"], ["type", "checkbox", "formControlName", "show_breadcrumbs"], ["type", "checkbox", "formControlName", "notify_parent_attendance"], ["type", "checkbox", "formControlName", "notify_parent_fees"], ["type", "checkbox", "formControlName", "notify_parent_marks"], ["type", "checkbox", "formControlName", "notify_teacher_leave"], ["type", "checkbox", "formControlName", "daily_digest_enabled"], ["type", "time", "formControlName", "digest_time", 1, "form-control"], ["type", "checkbox", "formControlName", "admission_open"], ["type", "number", "formControlName", "application_fee_amount", "min", "0", 1, "form-control"], [1, "form-group", "checkbox-group", 2, "align-self", "center"], ["type", "checkbox", "formControlName", "application_fee_required"], ["type", "text", "formControlName", "required_documents", "placeholder", "e.g. Birth certificate, Photo", 1, "form-control"], ["type", "number", "formControlName", "min_age_years", "min", "0", 1, "form-control"], ["type", "number", "formControlName", "max_age_years", "min", "0", 1, "form-control"], ["type", "checkbox", "formControlName", "auto_assign_roll"], ["formControlName", "default_attendance_type", 1, "form-control"], ["value", "present_absent"], ["value", "present_absent_late"], ["value", "mark_by_period"], ["type", "number", "formControlName", "grace_period_minutes", "min", "0", 1, "form-control"], ["type", "number", "formControlName", "alert_absent_threshold", "min", "1", 1, "form-control"], ["type", "number", "formControlName", "half_day_threshold_minutes", "min", "0", 1, "form-control"], ["type", "checkbox", "formControlName", "enable_biometric"], ["type", "checkbox", "formControlName", "transport_enabled"], ["type", "number", "formControlName", "default_bus_fee", "min", "0", 1, "form-control"], ["type", "checkbox", "formControlName", "require_route_approval"], ["type", "checkbox", "formControlName", "track_live_location"], ["type", "checkbox", "formControlName", "hostel_enabled"], ["type", "number", "formControlName", "default_room_fee", "min", "0", 1, "form-control"], ["type", "checkbox", "formControlName", "meal_included_default"], ["type", "checkbox", "formControlName", "visitor_allowed"], ["formControlName", "default_report_format", 1, "form-control"], ["value", "pdf"], ["value", "excel"], ["value", "csv"], ["type", "number", "formControlName", "report_retention_days", "min", "30", 1, "form-control"], ["type", "checkbox", "formControlName", "include_charts"], ["type", "checkbox", "formControlName", "report_logo_visible"], ["type", "checkbox", "formControlName", "auto_backup_enabled"], ["type", "checkbox", "formControlName", "export_allowed"], ["type", "number", "formControlName", "gdpr_anonymize_after_years", "min", "1", "max", "15", 1, "form-control"], ["formControlName", "backup_frequency", 1, "form-control"], ["value", "daily"], ["value", "weekly"], ["value", "monthly"], ["type", "number", "formControlName", "backup_retention_days", "min", "7", 1, "form-control"], [1, "modules-settings"], [1, "section-description"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click", "disabled"], ["class", "save-message", 3, "success", "error", 4, "ngIf"], [1, "modules-grid"], ["class", "module-card", 3, "enabled", "click", 4, "ngFor", "ngForOf"], [1, "save-message"], [1, "module-card", 3, "click"], [1, "module-toggle"], ["type", "checkbox", 3, "change", "click", "checked"], [1, "module-content"], [1, "module-name"], ["type", "number", "formControlName", "password_min_length", "min", "6", "max", "32", 1, "form-control"], ["type", "checkbox", "formControlName", "password_require_uppercase"], ["type", "checkbox", "formControlName", "password_require_lowercase"], ["type", "checkbox", "formControlName", "password_require_numbers"], ["type", "checkbox", "formControlName", "password_require_symbols"], ["type", "number", "formControlName", "session_timeout", "min", "300", 1, "form-control"], ["type", "checkbox", "formControlName", "enable_two_factor"], [1, "loading-container"], [1, "spinner"]], template: function SettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Settings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Manage your school configuration and preferences");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "div", 5);
      \u0275\u0275template(8, SettingsComponent_button_8_Template, 4, 5, "button", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "h2", 9);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 10);
      \u0275\u0275listener("click", function SettingsComponent_Template_button_click_13_listener() {
        return ctx.activeTab === "modules" ? ctx.saveModules() : ctx.saveSettings();
      });
      \u0275\u0275template(14, SettingsComponent_span_14_Template, 2, 0, "span", 11)(15, SettingsComponent_span_15_Template, 3, 0, "span", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(16, SettingsComponent_div_16_Template, 18, 17, "div", 12)(17, SettingsComponent_div_17_Template, 4, 0, "div", 13);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.tabs);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", ctx.getActiveTabLabel(), " Settings");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, TitleCasePipe, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName, FormGroupName], styles: ["\n\n.settings-container[_ngcontent-%COMP%] {\n  padding: var(--spacing-xl);\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.settings-header[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-2xl);\n}\n.settings-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-4xl);\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: var(--spacing-xs);\n}\n.settings-subtitle[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: var(--font-size-base);\n  margin: 0;\n}\n.settings-content[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-xl);\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-color);\n  overflow: hidden;\n}\n.settings-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 260px;\n  background:\n    linear-gradient(\n      180deg,\n      #f1f5f9 0%,\n      #e2e8f0 100%);\n  border-right: 1px solid var(--border-color);\n  padding: var(--spacing-lg) var(--spacing-md);\n  gap: var(--spacing-xs);\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);\n}\n.tab-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  padding: 0.625rem 1rem;\n  background: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-radius: var(--radius-md);\n  text-align: left;\n  cursor: pointer;\n  color: var(--text-secondary);\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  transition: all var(--transition-fast);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07);\n}\n.tab-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  width: 24px;\n  opacity: 0.9;\n}\n.tab-button[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  color: var(--primary-color);\n  border-color: rgba(37, 99, 235, 0.2);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);\n  transform: translateY(-1px);\n}\n.tab-button.active[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  color: #fff !important;\n  border-color: var(--primary-dark);\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n}\n.tab-button.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff !important;\n  opacity: 1;\n}\n.tab-button.active[_ngcontent-%COMP%]:hover {\n  background: var(--primary-gradient-light, var(--primary-gradient));\n  color: #fff !important;\n  box-shadow: 0 6px 16px rgba(37, 99, 235, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3);\n}\n.settings-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: var(--spacing-xl);\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--spacing-xl);\n  padding-bottom: var(--spacing-lg);\n  border-bottom: 1px solid var(--border-color);\n}\n.panel-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-2xl);\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.btn-save[_ngcontent-%COMP%] {\n  padding: 0.625rem 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n}\n.btn-save[_ngcontent-%COMP%]   .spinner-small[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top: 2px solid white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.panel-content[_ngcontent-%COMP%] {\n  min-height: 400px;\n}\n.save-message[_ngcontent-%COMP%] {\n  padding: var(--spacing-md);\n  border-radius: var(--radius-md);\n  margin-bottom: var(--spacing-lg);\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  font-size: var(--font-size-sm);\n}\n.save-message.success[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: var(--success-color);\n  border: 1px solid var(--success-color);\n}\n.save-message.error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: var(--error-color);\n  border: 1px solid var(--error-color);\n}\n.save-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.settings-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-2xl);\n  padding-bottom: var(--spacing-xl);\n  border-bottom: 1px solid var(--border-color);\n}\n.settings-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.settings-form[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: var(--spacing-lg);\n}\n.settings-form[_ngcontent-%COMP%]   .section-description[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: var(--font-size-sm);\n  margin-bottom: var(--spacing-lg);\n}\n.settings-form[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: var(--spacing-lg);\n  margin-bottom: var(--spacing-lg);\n}\n.settings-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-lg);\n}\n.settings-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: var(--spacing-sm);\n  font-weight: 500;\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n}\n.settings-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  font-size: var(--font-size-base);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  transition: all var(--transition-fast);\n}\n.settings-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px var(--primary-lighter);\n}\n.settings-form[_ngcontent-%COMP%]   .checkbox-group[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-md);\n}\n.settings-form[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  cursor: pointer;\n  font-size: var(--font-size-base);\n  color: var(--text-primary);\n}\n.settings-form[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n}\n.modules-settings[_ngcontent-%COMP%]   .modules-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: var(--spacing-lg);\n}\n.modules-settings[_ngcontent-%COMP%]   .module-card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border: 2px solid var(--border-color);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-lg);\n  cursor: pointer;\n  transition: all var(--transition-base);\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n}\n.modules-settings[_ngcontent-%COMP%]   .module-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-color);\n  box-shadow: var(--shadow-md);\n}\n.modules-settings[_ngcontent-%COMP%]   .module-card.enabled[_ngcontent-%COMP%] {\n  border-color: var(--success-color);\n  background: #f0fdf4;\n}\n.modules-settings[_ngcontent-%COMP%]   .module-toggle[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n}\n.modules-settings[_ngcontent-%COMP%]   .module-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.modules-settings[_ngcontent-%COMP%]   .module-name[_ngcontent-%COMP%] {\n  font-size: var(--font-size-base);\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: var(--spacing-2xl);\n  gap: var(--spacing-md);\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n@media (max-width: 1024px) {\n  .settings-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .settings-tabs[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: row;\n    flex-wrap: wrap;\n    overflow-x: auto;\n    border-right: none;\n    border-bottom: 1px solid var(--border-color);\n    padding: var(--spacing-md);\n    gap: var(--spacing-sm);\n  }\n  .tab-button[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n  .tab-button.active[_ngcontent-%COMP%] {\n    border-bottom: none;\n  }\n}\n@media (max-width: 768px) {\n  .settings-container[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n  }\n  .settings-panel[_ngcontent-%COMP%] {\n    padding: var(--spacing-lg);\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n  .modules-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=settings.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src\\app\\pages\\settings\\settings.component.ts", lineNumber: 20 });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=chunk-2QCOWRLE.js.map
