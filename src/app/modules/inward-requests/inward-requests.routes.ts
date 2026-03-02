import { Routes } from '@angular/router';

export const INWARD_REQUESTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./inward-request-list/inward-request-list.component').then(m => m.InwardRequestListComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./inward-request-list/inward-request-list.component').then(m => m.InwardRequestListComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./inward-request-create/inward-request-create.component').then(m => m.InwardRequestCreateComponent)
  },
  {
    path: 'view/:id',
    loadComponent: () => import('./inward-request-view/inward-request-view.component').then(m => m.InwardRequestViewComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./inward-request-create/inward-request-create.component').then(m => m.InwardRequestCreateComponent)
  }
];

