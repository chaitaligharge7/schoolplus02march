import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SettingsService } from '../../shared/services/settings.service';
import { MenuService } from '../../shared/services/menu.service';

interface SettingsTab {
  id: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  tabs: SettingsTab[] = [
    { id: 'general', label: 'General', icon: 'bi-gear' },
    { id: 'academic', label: 'Academic', icon: 'bi-book' },
    { id: 'fee', label: 'Fee Management', icon: 'bi-currency-dollar' },
    { id: 'communication', label: 'Communication', icon: 'bi-chat-dots' },
    { id: 'payment', label: 'Payment Gateway', icon: 'bi-credit-card' },
    { id: 'appearance', label: 'Appearance', icon: 'bi-palette' },
    { id: 'notifications', label: 'Notifications', icon: 'bi-bell' },
    { id: 'admission', label: 'Admission', icon: 'bi-person-plus' },
    { id: 'attendance', label: 'Attendance', icon: 'bi-calendar-check' },
    { id: 'transport', label: 'Transport', icon: 'bi-bus-front' },
    { id: 'hostel', label: 'Hostel', icon: 'bi-building' },
    { id: 'reports', label: 'Reports', icon: 'bi-graph-up' },
    { id: 'backup', label: 'Backup & Data', icon: 'bi-cloud-arrow-down' },
    { id: 'modules', label: 'Modules', icon: 'bi-grid' },
    { id: 'security', label: 'Security', icon: 'bi-shield-lock' }
  ];

  activeTab = 'general';
  isLoading = false;
  isSaving = false;
  saveMessage = '';
  syncingMenus = false;
  menuSyncMessage = '';

  // Form groups for each tab
  generalForm!: FormGroup;
  academicForm!: FormGroup;
  feeForm!: FormGroup;
  communicationForm!: FormGroup;
  paymentForm!: FormGroup;
  appearanceForm!: FormGroup;
  notificationsForm!: FormGroup;
  admissionForm!: FormGroup;
  attendanceForm!: FormGroup;
  transportForm!: FormGroup;
  hostelForm!: FormGroup;
  reportsForm!: FormGroup;
  backupForm!: FormGroup;
  modulesForm!: FormGroup;
  securityForm!: FormGroup;

  // Module list for dynamic configuration (all major app modules)
  modules = [
    { key: 'masters', label: 'Masters (Academic Years, Classes, Sections, etc.)', enabled: true },
    { key: 'students', label: 'Students', enabled: true },
    { key: 'teachers', label: 'Teachers', enabled: true },
    { key: 'attendance', label: 'Attendance Management', enabled: true },
    { key: 'academic', label: 'Academic (Marksheets, Syllabus, Classwork, etc.)', enabled: true },
    { key: 'transactions', label: 'Transactions (Examinations, Library, Timetable, etc.)', enabled: true },
    { key: 'communications', label: 'Communications (SMS, WhatsApp)', enabled: true },
    { key: 'administration', label: 'Administration (Approvals, Leave, CMS, Visitors, etc.)', enabled: true },
    { key: 'student_services', label: 'Student Services (Uniform, Book Distribution, ID Cards)', enabled: true },
    { key: 'mess_facilities', label: 'Mess & Facilities', enabled: true },
    { key: 'infrastructure', label: 'Infrastructure (CCTV, Bus, Lab, etc.)', enabled: true },
    { key: 'activities', label: 'Activities (Birthday, Committees, Sports)', enabled: true },
    { key: 'accounts', label: 'Accounts (Fees, Receipts, Defaulters)', enabled: true },
    { key: 'security_guard', label: 'Security Guard', enabled: true },
    { key: 'counselor', label: 'Counselor', enabled: true },
    { key: 'receptionist', label: 'Receptionist', enabled: true },
    { key: 'transport', label: 'Transport', enabled: true },
    { key: 'hostel', label: 'Hostel', enabled: true },
    { key: 'certificates', label: 'Certificates', enabled: true },
    { key: 'reports', label: 'Reports & Analytics', enabled: true },
    { key: 'notices', label: 'Notices', enabled: true },
    { key: 'connect_us', label: 'Connect Us', enabled: true },
    { key: 'examinations', label: 'Examinations', enabled: true },
    { key: 'library', label: 'Library Management', enabled: true },
    { key: 'fees', label: 'Fee Management', enabled: true },
    { key: 'notifications', label: 'Notifications', enabled: true }
  ];

  constructor(
    private fb: FormBuilder,
    private settingsService: SettingsService,
    private menuService: MenuService
  ) {
    this.initializeForms();
  }

  ngOnInit(): void {
    this.loadSettings();
  }

  initializeForms(): void {
    // General Settings
    this.generalForm = this.fb.group({
      school_name: [''],
      school_email: [''],
      school_phone: [''],
      school_website: [''],
      school_address: [''],
      school_tagline: [''],
      school_logo_url: [''],
      timezone: ['Asia/Calcutta'],
      language: ['en'],
      currency: ['INR'],
      date_format: ['DD/MM/YYYY'],
      fiscal_year_start: [4]
    });

    // Academic Settings
    this.academicForm = this.fb.group({
      academic_year_start: [''],
      academic_year_end: [''],
      class_period_duration: [45],
      school_start_time: ['08:00'],
      school_end_time: ['15:00'],
      break_duration_minutes: [15],
      grading_scale: ['percentage'],
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

    // Fee Settings
    this.feeForm = this.fb.group({
      fee_due_date: [5],
      late_fee_percentage: [5],
      late_fee_grace_period: [7],
      enable_online_payment: [true],
      enable_partial_payment: [true]
    });

    // Communication Settings
    this.communicationForm = this.fb.group({
      whatsapp_enabled: [false],
      whatsapp_api_url: [''],
      whatsapp_api_key: [''],
      sms_enabled: [false],
      sms_provider: [''],
      email_enabled: [true],
      email_from_address: ['']
    });

    // Payment Gateway Settings
    this.paymentForm = this.fb.group({
      payment_gateway: ['razorpay'],
      razorpay_key_id: [''],
      razorpay_key_secret: [''],
      paytm_enabled: [false],
      paytm_merchant_id: ['']
    });

    // Appearance Settings
    this.appearanceForm = this.fb.group({
      theme: ['light'],
      primary_color: ['#2563eb'],
      sidebar_collapsed_default: [false],
      show_breadcrumbs: [true]
    });

    // Notifications Settings
    this.notificationsForm = this.fb.group({
      notify_parent_attendance: [true],
      notify_parent_fees: [true],
      notify_parent_marks: [true],
      notify_teacher_leave: [true],
      daily_digest_enabled: [false],
      digest_time: ['08:00']
    });

    // Admission Settings
    this.admissionForm = this.fb.group({
      admission_open: [true],
      application_fee_amount: [0],
      application_fee_required: [false],
      required_documents: [''],
      min_age_years: [3],
      max_age_years: [18],
      auto_assign_roll: [true]
    });

    // Attendance Settings
    this.attendanceForm = this.fb.group({
      default_attendance_type: ['present_absent'],
      grace_period_minutes: [15],
      alert_absent_threshold: [3],
      enable_biometric: [false],
      half_day_threshold_minutes: [240]
    });

    // Transport Settings
    this.transportForm = this.fb.group({
      transport_enabled: [true],
      default_bus_fee: [0],
      require_route_approval: [false],
      track_live_location: [false]
    });

    // Hostel Settings
    this.hostelForm = this.fb.group({
      hostel_enabled: [true],
      default_room_fee: [0],
      meal_included_default: [true],
      visitor_allowed: [true]
    });

    // Reports Settings
    this.reportsForm = this.fb.group({
      default_report_format: ['pdf'],
      report_retention_days: [365],
      include_charts: [true],
      report_logo_visible: [true]
    });

    // Backup & Data Settings
    this.backupForm = this.fb.group({
      auto_backup_enabled: [false],
      backup_frequency: ['weekly'],
      backup_retention_days: [30],
      export_allowed: [true],
      gdpr_anonymize_after_years: [7]
    });

    // Modules Form
    this.modulesForm = this.fb.group({});

    // Security Settings
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

  selectTab(tabId: string): void {
    this.activeTab = tabId;
    this.saveMessage = '';
  }

  getActiveTabLabel(): string {
    const tab = this.tabs.find(t => t.id === this.activeTab);
    return tab?.label || 'Settings';
  }

  loadSettings(): void {
    this.isLoading = true;
    this.settingsService.getSettings().subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.populateForms(response.data);
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading settings:', error);
        this.isLoading = false;
      }
    });
  }

  populateForms(data: any): void {
    if (data.general) this.generalForm.patchValue(data.general);
    if (data.academic) this.academicForm.patchValue(data.academic);
    if (data.fee) this.feeForm.patchValue(data.fee);
    if (data.communication) this.communicationForm.patchValue(data.communication);
    if (data.payment) this.paymentForm.patchValue(data.payment);
    if (data.appearance) this.appearanceForm.patchValue(data.appearance);
    if (data.notifications) this.notificationsForm.patchValue(data.notifications);
    if (data.admission) this.admissionForm.patchValue(data.admission);
    if (data.attendance) this.attendanceForm.patchValue(data.attendance);
    if (data.transport) this.transportForm.patchValue(data.transport);
    if (data.hostel) this.hostelForm.patchValue(data.hostel);
    if (data.reports) this.reportsForm.patchValue(data.reports);
    if (data.backup) this.backupForm.patchValue(data.backup);
    if (data.modules) {
      this.modules.forEach(module => {
        const raw = data.modules[module.key];
        const enabled = raw?.value?.enabled ?? raw?.enabled ?? false;
        module.enabled = !!enabled;
      });
    }
    if (data.security) this.securityForm.patchValue(data.security);
  }

  saveSettings(): void {
    if (this.getActiveForm().invalid) {
      this.markFormGroupTouched(this.getActiveForm());
      return;
    }

    this.isSaving = true;
    this.saveMessage = '';

    const formData = this.getActiveForm().value;
    const category = this.activeTab;

    this.settingsService.saveSettings(category, formData).subscribe({
      next: (response) => {
        this.isSaving = false;
        if (response.status === 'success') {
          this.saveMessage = 'Settings saved successfully!';
          setTimeout(() => {
            this.saveMessage = '';
          }, 3000);
        } else {
          this.saveMessage = response.message || 'Failed to save settings';
        }
      },
      error: (error) => {
        this.isSaving = false;
        this.saveMessage = error.error?.message || 'An error occurred while saving settings';
        console.error('Error saving settings:', error);
      }
    });
  }

  getActiveForm(): FormGroup {
    switch (this.activeTab) {
      case 'general': return this.generalForm;
      case 'academic': return this.academicForm;
      case 'fee': return this.feeForm;
      case 'communication': return this.communicationForm;
      case 'payment': return this.paymentForm;
      case 'appearance': return this.appearanceForm;
      case 'notifications': return this.notificationsForm;
      case 'admission': return this.admissionForm;
      case 'attendance': return this.attendanceForm;
      case 'transport': return this.transportForm;
      case 'hostel': return this.hostelForm;
      case 'reports': return this.reportsForm;
      case 'backup': return this.backupForm;
      case 'modules': return this.modulesForm;
      case 'security': return this.securityForm;
      default: return this.generalForm;
    }
  }

  toggleModule(moduleKey: string): void {
    const module = this.modules.find(m => m.key === moduleKey);
    if (module) {
      module.enabled = !module.enabled;
    }
  }

  saveModules(): void {
    const modulesData: any = {};
    this.modules.forEach(module => {
      modulesData[module.key] = { enabled: module.enabled };
    });

    this.isSaving = true;
    this.settingsService.saveSettings('modules', modulesData).subscribe({
      next: (response) => {
        this.isSaving = false;
        if (response.status === 'success') {
          this.saveMessage = 'Module settings saved successfully!';
          setTimeout(() => {
            this.saveMessage = '';
          }, 3000);
        }
      },
      error: (error) => {
        this.isSaving = false;
        this.saveMessage = 'Failed to save module settings';
      }
    });
  }

  /** Add new modules (Inquiry to Admission, Admission Tickets, etc.) to sidebar menu in database; then refresh menus. */
  syncNewMenus(): void {
    this.menuSyncMessage = '';
    this.syncingMenus = true;
    this.menuService.addNewModulesMenus().subscribe({
      next: (res) => {
        this.syncingMenus = false;
        if (res.status === 'success') {
          this.menuSyncMessage = res.message || 'New menus added. Refreshing sidebar…';
          this.menuService.refreshMenus();
          setTimeout(() => {
            this.menuSyncMessage = '';
          }, 5000);
        } else {
          this.menuSyncMessage = res.message || 'Sync completed with no changes';
        }
      },
      error: (err) => {
        this.syncingMenus = false;
        this.menuSyncMessage = err.error?.message || 'Failed to sync new menus';
      }
    });
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control?.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}

