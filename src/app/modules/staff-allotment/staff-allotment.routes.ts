import { Routes } from '@angular/router';

export const STAFF_ALLOTMENT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./staff-allotment-list/staff-allotment-list.component').then(m => m.StaffAllotmentListComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./staff-allotment-list/staff-allotment-list.component').then(m => m.StaffAllotmentListComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./staff-allotment-create/staff-allotment-create.component').then(m => m.StaffAllotmentCreateComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./staff-allotment-create/staff-allotment-create.component').then(m => m.StaffAllotmentCreateComponent)
  }
];

