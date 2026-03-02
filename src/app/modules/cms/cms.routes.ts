import { Routes } from '@angular/router';

export const CMS_ROUTES: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', loadComponent: () => import('./page-list/page-list.component').then(m => m.PageListComponent) },
  { path: 'create', loadComponent: () => import('./page-create/page-create.component').then(m => m.PageCreateComponent) },
  { path: 'edit/:id', loadComponent: () => import('./page-create/page-create.component').then(m => m.PageCreateComponent) }
];
