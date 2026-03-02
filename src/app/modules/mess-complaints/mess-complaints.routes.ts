import { Routes } from '@angular/router';

export const MESS_COMPLAINTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./mess-complaint-list/mess-complaint-list.component').then(m => m.MessComplaintListComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./mess-complaint-list/mess-complaint-list.component').then(m => m.MessComplaintListComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./mess-complaint-create/mess-complaint-create.component').then(m => m.MessComplaintCreateComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./mess-complaint-create/mess-complaint-create.component').then(m => m.MessComplaintCreateComponent)
  }
];

