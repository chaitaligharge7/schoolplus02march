import { Routes } from '@angular/router';

export const RECEPTIONIST_ROUTES: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadComponent: () => import('./receptionist-dashboard/receptionist-dashboard.component').then(m => m.ReceptionistDashboardComponent) },
  { path: 'inquiries', loadComponent: () => import('./receptionist-inquiry-list/receptionist-inquiry-list.component').then(m => m.ReceptionistInquiryListComponent) },
  { path: 'inquiries/edit/:id', loadComponent: () => import('./receptionist-inquiry-edit/receptionist-inquiry-edit.component').then(m => m.ReceptionistInquiryEditComponent) }
];
