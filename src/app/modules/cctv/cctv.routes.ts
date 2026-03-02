import { Routes } from '@angular/router';

export const CCTV_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./cctv-list/cctv-list.component').then(m => m.CctvListComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./cctv-list/cctv-list.component').then(m => m.CctvListComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./cctv-create/cctv-create.component').then(m => m.CctvCreateComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./cctv-create/cctv-create.component').then(m => m.CctvCreateComponent)
  }
];

