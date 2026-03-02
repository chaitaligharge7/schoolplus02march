import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { MenuService, MenuItem } from '../../shared/services/menu.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-full',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {
  currentUser: any = null;
  isSidebarOpen = false; // Start closed on mobile
  currentRoute = '';
  menuItems: MenuItem[] = [];
  expandedMenuItems: { [key: number]: boolean } = {};
  

  // Fallback static menu items (used if dynamic menus fail)
  // Grouped structure without add/list submenus - main menus are direct links
  staticMenuItems = [
    {
      title: 'Dashboard',
      icon: 'bi-speedometer2',
      route: '/app/dashboard',
      roles: ['all']
    },
    {
      title: 'Masters',
      icon: 'bi-database',
      route: null,
      roles: ['all'],
      children: [
        { title: 'Academic Years', route: '/app/academic-years', icon: 'bi-calendar-range' },
        { title: 'Classes', route: '/app/classes', icon: 'bi-journal-text' },
        { title: 'Sections', route: '/app/sections', icon: 'bi-layers' },
        { title: 'Subjects', route: '/app/subjects', icon: 'bi-book' },
        { title: 'Departments', route: '/app/departments', icon: 'bi-diagram-3' },
        { title: 'Designations', route: '/app/designations', icon: 'bi-award' },
        { title: 'Periods', route: '/app/periods', icon: 'bi-clock-history' },
        { title: 'Fee Groups', route: '/app/fee-groups', icon: 'bi-wallet2' },
        { title: 'Fee Types', route: '/app/fee-types', icon: 'bi-tag' },
        { title: 'Exam Types', route: '/app/exam-types', icon: 'bi-clipboard-check' },
        { title: 'Attendance Types', route: '/app/attendance-types', icon: 'bi-calendar-check' },
        { title: 'Courses', route: '/app/courses/list', icon: 'bi-mortarboard' }
      ]
    },
    {
      title: 'Students',
      icon: 'bi-people',
      route: null,
      roles: ['all'],
      children: [
        { title: 'Students', route: '/app/students/list', icon: 'bi-people' },
        { title: 'Admission', route: '/app/admissions/list', icon: 'bi-person-plus' },
        { title: 'Enquiries', route: '/app/enquiries/list', icon: 'bi-telephone-inbound' },
        { title: 'RTE Students', route: '/app/rte-students/list', icon: 'bi-heart' },
        { title: 'Promotions', route: '/app/promotions/list', icon: 'bi-arrow-up-circle' },
        { title: 'Student Participation', route: '/app/student-participation/list', icon: 'bi-trophy' }
      ]
    },
    {
      title: 'Teachers',
      icon: 'bi-person-badge',
      route: null,
      roles: ['all'],
      children: [
        { title: 'Teachers', route: '/app/teachers/list', icon: 'bi-person-badge' },
        { title: 'Profile & Schedule', route: '/app/teacher-profile', icon: 'bi-calendar-week' },
        { title: 'Doubt Handling', route: '/app/doubt-handling/list', icon: 'bi-question-circle' },
        { title: 'Teaching Plan', route: '/app/teaching-plan/list', icon: 'bi-journal-text' }
      ]
    },
    {
      title: 'Attendance',
      icon: 'bi-calendar-check',
      route: null,
      roles: ['all'],
      children: [
        { title: 'Mark Attendance', route: '/app/attendance/mark', icon: 'bi-pencil-square' },
        { title: 'View Attendance', route: '/app/attendance/view', icon: 'bi-calendar2-week' }
      ]
    },
    {
      title: 'Academic',
      icon: 'bi-journal-richtext',
      route: null,
      roles: ['all'],
      children: [
        { title: 'Marksheets', route: '/app/marksheets/list', icon: 'bi-file-earmark-spreadsheet' },
        { title: 'Syllabus', route: '/app/syllabus/list', icon: 'bi-journal-richtext' },
        { title: 'Classwork', route: '/app/classwork/list', icon: 'bi-journal-text' },
        { title: 'Unit Test Marks', route: '/app/unit-test-marks/list', icon: 'bi-clipboard-data' },
        { title: 'Question Papers', route: '/app/question-papers/list', icon: 'bi-file-earmark-text' },
        { title: 'Study Progress', route: '/app/study-progress/list', icon: 'bi-graph-up' },
        { title: 'Remedial', route: '/app/remedial/list', icon: 'bi-arrow-repeat' },
        { title: 'Important Notes', route: '/app/important-notes/list', icon: 'bi-sticky' },
        { title: 'Digital Notes & Resources', route: '/app/digital-notes/list', icon: 'bi-folder2-open' },
        { title: 'Student Performance', route: '/app/student-performance', icon: 'bi-bar-chart-line' }
      ]
    },
    {
      title: 'Transactions',
      icon: 'bi-arrow-repeat',
      route: null,
      roles: ['all'],
      children: [
        { title: 'Examinations', route: '/app/examinations/list', icon: 'bi-clipboard-check' },
        { title: 'Library', route: '/app/library/list', icon: 'bi-book-half' },
        { title: 'Homework', route: '/app/homework', icon: 'bi-journal-check' },
        { title: 'Timetable', route: '/app/timetable/list', icon: 'bi-calendar-week' },
        { title: 'Academic Calendar', route: '/app/calendar/list', icon: 'bi-calendar-event' },
        { title: 'Events', route: '/app/events/list', icon: 'bi-calendar-event' }
      ]
    },
    {
      title: 'Communications',
      icon: 'bi-chat-dots',
      route: null,
      roles: ['all'],
      children: [
        { title: 'SMS', route: '/app/sms/list', icon: 'bi-chat-text' },
        { title: 'WhatsApp', route: '/app/whatsapp/list', icon: 'bi-whatsapp' }
      ]
    },
    {
      title: 'Administration',
      icon: 'bi-clipboard-data',
      route: null,
      roles: ['all'],
      children: [
        { title: 'Approvals', route: '/app/approvals', icon: 'bi-check2-all' },
        { title: 'Branch Management', route: '/app/branches/list', icon: 'bi-building' },
        { title: 'Leave Management', route: '/app/leave-management/list', icon: 'bi-calendar-x' },
        { title: 'CMS (Content)', route: '/app/cms/list', icon: 'bi-file-text' },
        { title: 'Support & Feedback', route: '/app/support-feedback/list', icon: 'bi-headset' },
        { title: 'Documents', route: '/app/documents/list', icon: 'bi-folder2' },
        { title: 'Visitors', route: '/app/visitors/list', icon: 'bi-person-badge' },
        { title: 'Complaints', route: '/app/complaints/list', icon: 'bi-chat-left-dots' },
        { title: 'Inward Requests', route: '/app/inward-requests/list', icon: 'bi-inbox' }
      ]
    },
    {
      title: 'Student Services',
      icon: 'bi-bag-check',
      route: null,
      roles: ['all'],
      children: [
        { title: 'Uniform Distribution', route: '/app/uniform-distribution/list', icon: 'bi-box-seam' },
        { title: 'Book Distribution', route: '/app/book-distribution/list', icon: 'bi-book' },
        { title: 'ID Cards', route: '/app/id-cards/list', icon: 'bi-credit-card' },
        { title: 'Uniform Fines', route: '/app/uniform-fines/list', icon: 'bi-cash-stack' }
      ]
    },
    {
      title: 'Mess & Facilities',
      icon: 'bi-cup-straw',
      route: null,
      roles: ['all'],
      children: [
        { title: 'Mess Schedules', route: '/app/mess-schedules/list', icon: 'bi-calendar-week' },
        { title: 'Mess Complaints', route: '/app/mess-complaints/list', icon: 'bi-chat-dots' },
        { title: 'Water TDS', route: '/app/water-tds/list', icon: 'bi-droplet' },
        { title: 'Food Calendar', route: '/app/food-calendar/list', icon: 'bi-calendar3' }
      ]
    },
    {
      title: 'Infrastructure',
      icon: 'bi-building-gear',
      route: null,
      roles: ['all'],
      children: [
        { title: 'CCTV', route: '/app/cctv/list', icon: 'bi-camera-video' },
        { title: 'Bus Documents', route: '/app/bus-documents/list', icon: 'bi-bus-front' },
        { title: 'Cleaning', route: '/app/cleaning/list', icon: 'bi-brush' },
        { title: 'Staff Allotment', route: '/app/staff-allotment/list', icon: 'bi-person-lines-fill' },
        { title: 'Lab', route: '/app/lab/list', icon: 'bi-eyeglasses' }
      ]
    },
    {
      title: 'Activities',
      icon: 'bi-emoji-smile',
      route: null,
      roles: ['all'],
      children: [
        { title: 'Birthday', route: '/app/birthday/list', icon: 'bi-gift' },
        { title: 'Charts', route: '/app/charts', icon: 'bi-pie-chart' },
        { title: 'Committees', route: '/app/committees/list', icon: 'bi-people' },
        { title: 'Sports & Events', route: '/app/sports/list', icon: 'bi-trophy' }
      ]
    },
    {
      title: 'Accounts',
      icon: 'bi-wallet2',
      route: null,
      roles: ['all'],
      children: [
        { title: 'Fees', route: '/app/fees/list', icon: 'bi-currency-dollar' },
        { title: 'Admission Tickets', route: '/app/fees/admission-tickets', icon: 'bi-ticket-perforated' },
        { title: 'Receipt Generation', route: '/app/fees/receipts', icon: 'bi-receipt' },
        { title: 'Fee Defaulters', route: '/app/fees/defaulters', icon: 'bi-exclamation-octagon' },
        { title: 'Assign Fees', route: '/app/fees/assign', icon: 'bi-list-check' },
        { title: 'Fee Types', route: '/app/fee-types', icon: 'bi-tag' }
      ]
    },
    {
      title: 'Inquiry to Admission',
      icon: 'bi-funnel',
      route: null,
      roles: ['all'],
      children: [
        { title: 'Security Guard – Inquiries', route: '/app/security-guard/inquiry/list', icon: 'bi-shield-check' },
        { title: 'Receptionist – Dashboard', route: '/app/receptionist/dashboard', icon: 'bi-reception-4' },
        { title: 'Receptionist – Inquiries', route: '/app/receptionist/inquiries', icon: 'bi-telephone' },
        { title: 'Counselor – Leads', route: '/app/counselor/leads', icon: 'bi-person-workspace' },
        { title: 'Admissions', route: '/app/admissions/list', icon: 'bi-person-plus' },
        { title: 'Admission Tickets (Accountant)', route: '/app/fees/admission-tickets', icon: 'bi-ticket-perforated' }
      ]
    },
    {
      title: 'Security Guard',
      icon: 'bi-shield-check',
      route: '/app/security-guard/inquiry/list',
      roles: ['all'],
      children: [
        { title: 'Inquiry Registration', route: '/app/security-guard/inquiry/list', icon: 'bi-clipboard-plus' },
        { title: 'Gate Pass Management', route: '/app/security-guard/gate-pass/list', icon: 'bi-key' },
        { title: 'Daily Reporting', route: '/app/security-guard/daily-report/list', icon: 'bi-journal-text' }
      ]
    },
    {
      title: 'Counselor',
      icon: 'bi-person-workspace',
      route: '/app/counselor/leads',
      roles: ['all'],
      children: [
        { title: 'Lead Management', route: '/app/counselor/leads', icon: 'bi-diagram-3' }
      ]
    },
    {
      title: 'Receptionist',
      icon: 'bi-reception-4',
      route: '/app/receptionist/dashboard',
      roles: ['all'],
      children: [
        { title: 'Dashboard', route: '/app/receptionist/dashboard', icon: 'bi-speedometer2' },
        { title: 'Inquiry Management', route: '/app/receptionist/inquiries', icon: 'bi-telephone' },
        { title: 'Enquiries (Lead Conversion)', route: '/app/enquiries/list', icon: 'bi-chat-dots' },
        { title: 'Counselor Assignment', route: '/app/counselor/leads', icon: 'bi-person-plus' },
        { title: 'Visitor Management', route: '/app/visitors/list', icon: 'bi-people' },
        { title: 'Documentation', route: '/app/documents/list', icon: 'bi-folder2' }
      ]
    },
    {
      title: 'Transport',
      icon: 'bi-bus-front',
      route: '/app/transport/list',
      roles: ['all']
    },
    {
      title: 'Hostel',
      icon: 'bi-building',
      route: '/app/hostel/list',
      roles: ['all']
    },
    {
      title: 'Certificates',
      icon: 'bi-award',
      route: '/app/certificates/list',
      roles: ['all']
    },
    {
      title: 'Reports',
      icon: 'bi-graph-up',
      route: '/app/reports',
      roles: ['all']
    },
    {
      title: 'Notices',
      icon: 'bi-megaphone',
      route: '/app/notices/list',
      roles: ['all']
    },
    {
      title: 'Connect Us',
      icon: 'bi-link-45deg',
      route: '/app/connect-us',
      roles: ['all']
    },
    {
      title: 'Users',
      icon: 'bi-people',
      route: '/app/users',
      roles: ['admin', 'super_admin']
    },
    {
      title: 'Settings',
      icon: 'bi-gear',
      route: '/app/settings',
      roles: ['all']
    }
  ];

  constructor(
    private authService: AuthService,
    public router: Router,
    private menuService: MenuService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    
    // Set sidebar state based on screen size
    if (window.innerWidth > 1024) {
      this.isSidebarOpen = true;
    } else {
      this.isSidebarOpen = false;
    }
    
    // Listen for window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024) {
        this.isSidebarOpen = true;
      } else {
        this.isSidebarOpen = false;
      }
    });
    
    // Set current route immediately (fixes refresh: 3D buttons and sidebar selection)
    this.currentRoute = this.router.url;

    // Load dynamic menus
    this.loadMenus();

    // Track current route on every navigation (including initial load if router emits after init)
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.url;
        this.updateExpandedMenu();
        if (this.isMobileView()) {
          this.isSidebarOpen = false;
        }
      });
  }

  loadMenus(): void {
    this.menuService.menus$.subscribe(menus => {
      console.log('Loaded menus:', menus);
      if (menus && menus.length > 0) {
        this.menuItems = menus;
        console.log('Using dynamic menus, count:', menus.length);
      } else {
        // Fallback to static menus if dynamic menus are empty
        console.log('No dynamic menus, using static fallback');
        this.menuItems = this.convertStaticToMenuItems();
        console.log('Static menus count:', this.menuItems.length);
      }
    });
  }

  convertStaticToMenuItems(): MenuItem[] {
    // Convert static menu structure to MenuItem format
    let menuIdCounter = 1;
    return this.staticMenuItems.map((item: any) => {
      const menuId = menuIdCounter++;
      return {
        menu_id: menuId,
        menu_name: item.title,
        menu_code: item.route ? item.route.replace('/app/', '').replace(/\//g, '_') : item.title.toLowerCase().replace(/\s+/g, '_'),
        menu_icon: item.icon,
        menu_route: item.route,
        parent_menu_id: null,
        menu_order: menuId,
        is_master: 0,
        children: item.children ? item.children.map((child: any) => {
          const childId = menuIdCounter++;
          return {
            menu_id: childId,
            menu_name: child.title,
            menu_code: child.route ? child.route.replace('/app/', '').replace(/\//g, '_') : child.title.toLowerCase().replace(/\s+/g, '_'),
            menu_icon: child.icon || 'bi-circle',
            menu_route: child.route,
            parent_menu_id: menuId,
            menu_order: childId,
            is_master: 0
          };
        }) : []
      };
    });
  }

  updateExpandedMenu(): void {
    // Auto-expand menu if current route matches (accordion behavior - only one open)
    this.expandedMenuItems = {}; // Reset first
    
    this.menuItems.forEach(item => {
      if (item.children && item.children.length > 0) {
        const hasActiveChild = item.children.some(child => 
          this.currentRoute.startsWith(child.menu_route)
        );
        if (hasActiveChild) {
          // Only expand the first matching menu (accordion behavior)
          if (Object.keys(this.expandedMenuItems).length === 0) {
            this.expandedMenuItems[item.menu_id] = true;
          }
        }
      }
    });
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  
  isMobileView(): boolean {
    return window.innerWidth <= 1024;
  }

  logout(): void {
    this.authService.signOut().subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Logout error:', error);
        this.router.navigate(['/login']);
      }
    });
  }

  hasPermission(roles: string[]): boolean {
    if (roles.includes('all')) return true;
    const userType = this.currentUser?.user_type;
    return userType && roles.includes(userType);
  }

  toggleMenu(item: MenuItem): void {
    if (item.children && item.children.length > 0) {
      const isCurrentlyExpanded = this.expandedMenuItems[item.menu_id] || false;
      
      // Close all other menus (accordion behavior)
      this.expandedMenuItems = {};
      
      // Toggle current menu (open if closed, close if open)
      if (!isCurrentlyExpanded) {
        this.expandedMenuItems[item.menu_id] = true;
      }
    }
  }

  isMenuExpanded(item: MenuItem): boolean {
    return this.expandedMenuItems[item.menu_id] || false;
  }

  hasChildren(item: MenuItem): boolean {
    return !!(item.children && item.children.length > 0);
  }

  /** Route for sidebar link: first child if has children, else menu_route */
  getNavRoute(item: MenuItem): string {
    if (this.hasChildren(item) && item.children!.length > 0) {
      return item.children![0].menu_route || '/app/dashboard';
    }
    return item.menu_route || '/app/dashboard';
  }

  /** Sidebar item is active if current route is in this item's section (matches it or any child by module base) */
  isNavItemActive(item: MenuItem): boolean {
    if (item.menu_route && this.currentRoute.startsWith(item.menu_route)) return true;
    if (this.hasChildren(item)) {
      const currentBase = this.currentRouteModuleBase;
      return item.children!.some(c => this.getModuleBase(c.menu_route) === currentBase ||
        this.currentRoute === c.menu_route || this.currentRoute.startsWith(c.menu_route + '/'));
    }
    return false;
  }

  /**
   * Module base: for /app/xxx/... or /app/xxx we return /app/xxx so each section (Students, Library, etc.) is unique.
   * This avoids /app/academic-years giving base /app which would match every route.
   */
  private getModuleBase(route: string): string {
    const parts = route.replace(/\/$/, '').split('/').filter(Boolean);
    if (parts.length === 0) return route;
    if (parts[0] === 'app' && parts.length >= 2) return '/' + parts.slice(0, 2).join('/');
    if (parts.length <= 1) return route;
    return '/' + parts.slice(0, -1).join('/');
  }

  /** Current route's module base e.g. /app/students */
  private get currentRouteModuleBase(): string {
    return this.getModuleBase(this.currentRoute);
  }

  /** Parent menu item whose children include the current route's module (for 3D tabs) */
  get currentGroup(): MenuItem | null {
    const currentBase = this.currentRouteModuleBase;
    if (!currentBase || currentBase === '/app') return null;
    for (const item of this.menuItems) {
      if (item.children && item.children.length > 0) {
        const match = item.children.some(c => {
          const childBase = this.getModuleBase(c.menu_route);
          return childBase === currentBase ||
            this.currentRoute === c.menu_route ||
            this.currentRoute.startsWith(c.menu_route + '/');
        });
        if (match) return item;
      }
    }
    return null;
  }

  /** Tabs to show in 3D sub-nav (children of current group only) */
  get currentGroupTabs(): MenuItem[] {
    const group = this.currentGroup;
    return group?.children || [];
  }

  get currentGroupName(): string {
    return this.currentGroup?.menu_name || '';
  }

  /** Only the tab whose route matches the current URL (exact or prefix) is active. */
  isTabActive(tab: MenuItem): boolean {
    const r = (tab.menu_route || '').replace(/\/$/, '');
    const cur = this.currentRoute.replace(/\/$/, '');
    if (cur === r) return true;
    if (r && cur.startsWith(r + '/')) return true;
    return false;
  }

  /** Icon for 3D tab: use menu_icon if set, else fallback by route (for dynamic menus). */
  getTabIcon(tab: MenuItem): string {
    if (tab.menu_icon && tab.menu_icon !== 'bi-circle') return tab.menu_icon;
    const route = (tab.menu_route || '').toLowerCase();
    const iconByPath: { [k: string]: string } = {
      'academic-years': 'bi-calendar-range', 'classes': 'bi-journal-text', 'sections': 'bi-layers',
      'subjects': 'bi-book', 'departments': 'bi-diagram-3', 'designations': 'bi-award', 'periods': 'bi-clock-history',
      'fee-groups': 'bi-wallet2', 'fee-types': 'bi-tag', 'exam-types': 'bi-clipboard-check', 'attendance-types': 'bi-calendar-check',
      'students': 'bi-people', 'admissions': 'bi-person-plus', 'enquiries': 'bi-telephone-inbound', 'teachers': 'bi-person-badge',
      'attendance': 'bi-calendar-check', 'marksheets': 'bi-file-earmark-spreadsheet', 'syllabus': 'bi-journal-richtext',
      'library': 'bi-book-half', 'examinations': 'bi-clipboard-check', 'timetable': 'bi-calendar-week',
      'fees': 'bi-currency-dollar', 'certificates': 'bi-award', 'reports': 'bi-graph-up', 'notices': 'bi-megaphone',
      'transport': 'bi-bus-front', 'hostel': 'bi-building', 'security-guard': 'bi-shield-check', 'counselor': 'bi-person-workspace',
      'receptionist': 'bi-reception-4', 'sms': 'bi-chat-text', 'whatsapp': 'bi-whatsapp'
    };
    for (const [path, icon] of Object.entries(iconByPath)) {
      if (route.includes(path)) return icon;
    }
    return 'bi-grid'; // generic fallback
  }
}



