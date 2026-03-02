import { Routes } from '@angular/router';

export const CLEANING_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./cleaning-list/cleaning-list.component').then(m => m.CleaningListComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./cleaning-list/cleaning-list.component').then(m => m.CleaningListComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./cleaning-create/cleaning-create.component').then(m => m.CleaningCreateComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./cleaning-create/cleaning-create.component').then(m => m.CleaningCreateComponent)
  }
];

