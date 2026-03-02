import { Routes } from '@angular/router';

export const LEAVE_MANAGEMENT_ROUTES: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', loadComponent: () => import('./leave-list/leave-list.component').then(m => m.LeaveListComponent) },
  { path: 'create', loadComponent: () => import('./leave-create/leave-create.component').then(m => m.LeaveCreateComponent) },
  { path: 'edit/:id', loadComponent: () => import('./leave-create/leave-create.component').then(m => m.LeaveCreateComponent) }
];
