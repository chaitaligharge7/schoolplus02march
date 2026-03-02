import { Routes } from '@angular/router';

export const ID_CARDS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./id-card-list/id-card-list.component').then(m => m.IdCardListComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./id-card-list/id-card-list.component').then(m => m.IdCardListComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./id-card-create/id-card-create.component').then(m => m.IdCardCreateComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./id-card-create/id-card-create.component').then(m => m.IdCardCreateComponent)
  }
];

