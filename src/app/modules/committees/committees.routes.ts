import { Routes } from '@angular/router';

export const COMMITTEES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./committee-list/committee-list.component').then(m => m.CommitteeListComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./committee-list/committee-list.component').then(m => m.CommitteeListComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./committee-create/committee-create.component').then(m => m.CommitteeCreateComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./committee-create/committee-create.component').then(m => m.CommitteeCreateComponent)
  }
];

