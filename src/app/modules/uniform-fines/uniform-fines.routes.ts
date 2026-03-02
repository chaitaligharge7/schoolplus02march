import { Routes } from '@angular/router';

export const UNIFORM_FINES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./uniform-fine-list/uniform-fine-list.component').then(m => m.UniformFineListComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./uniform-fine-list/uniform-fine-list.component').then(m => m.UniformFineListComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./uniform-fine-create/uniform-fine-create.component').then(m => m.UniformFineCreateComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./uniform-fine-create/uniform-fine-create.component').then(m => m.UniformFineCreateComponent)
  }
];

