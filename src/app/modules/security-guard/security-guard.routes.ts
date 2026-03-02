import { Routes } from '@angular/router';

export const SECURITY_GUARD_ROUTES: Routes = [
  { path: '', redirectTo: 'inquiry/list', pathMatch: 'full' },
  { path: 'inquiry/list', loadComponent: () => import('./inquiry-list/inquiry-list.component').then(m => m.InquiryListComponent) },
  { path: 'inquiry/create', loadComponent: () => import('./inquiry-create/inquiry-create.component').then(m => m.InquiryCreateComponent) },
  { path: 'inquiry/view/:id', loadComponent: () => import('./inquiry-view/inquiry-view.component').then(m => m.InquiryViewComponent) },
  { path: 'inquiry/edit/:id', loadComponent: () => import('./inquiry-edit/inquiry-edit.component').then(m => m.InquiryEditComponent) },
  { path: 'gate-pass/list', loadComponent: () => import('./gate-pass-list/gate-pass-list.component').then(m => m.GatePassListComponent) },
  { path: 'gate-pass/create', loadComponent: () => import('./gate-pass-create/gate-pass-create.component').then(m => m.GatePassCreateComponent) },
  { path: 'gate-pass/edit/:id', loadComponent: () => import('./gate-pass-edit/gate-pass-edit.component').then(m => m.GatePassEditComponent) },
  { path: 'daily-report/list', loadComponent: () => import('./daily-report-list/daily-report-list.component').then(m => m.DailyReportListComponent) },
  { path: 'daily-report/create', loadComponent: () => import('./daily-report-create/daily-report-create.component').then(m => m.DailyReportCreateComponent) },
  { path: 'daily-report/edit/:id', loadComponent: () => import('./daily-report-edit/daily-report-edit.component').then(m => m.DailyReportEditComponent) }
];
