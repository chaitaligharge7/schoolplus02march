import { Routes } from '@angular/router';

export const DOCUMENT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./document-list/document-list.component').then(m => m.DocumentListComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./document-list/document-list.component').then(m => m.DocumentListComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./document-create/document-create.component').then(m => m.DocumentCreateComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./document-create/document-create.component').then(m => m.DocumentCreateComponent)
  },
  {
    path: 'half-day-permissions',
    loadComponent: () => import('./half-day-permission-list/half-day-permission-list.component').then(m => m.HalfDayPermissionListComponent)
  }
];

