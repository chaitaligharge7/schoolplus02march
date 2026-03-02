import { Routes } from '@angular/router';

export const CLASSWORK_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./classwork-list/classwork-list.component').then(m => m.ClassworkListComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./classwork-list/classwork-list.component').then(m => m.ClassworkListComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./classwork-create/classwork-create.component').then(m => m.ClassworkCreateComponent)
  },
      {
        path: 'edit/:id',
        loadComponent: () => import('./classwork-create/classwork-create.component').then(m => m.ClassworkCreateComponent)
      },
      {
        path: 'view/:id',
        loadComponent: () => import('./classwork-view/classwork-view.component').then(m => m.ClassworkViewComponent)
      }
];

