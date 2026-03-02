import { Routes } from '@angular/router';

export const MARKSHEET_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./marksheet-list/marksheet-list.component').then(m => m.MarksheetListComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./marksheet-list/marksheet-list.component').then(m => m.MarksheetListComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./marksheet-create/marksheet-create.component').then(m => m.MarksheetCreateComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./marksheet-create/marksheet-create.component').then(m => m.MarksheetCreateComponent)
  },
  {
    path: 'view/:id',
    loadComponent: () => import('./marksheet-view/marksheet-view.component').then(m => m.MarksheetViewComponent)
  }
];

