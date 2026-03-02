import { Routes } from '@angular/router';

export const UNIFORM_DISTRIBUTION_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./uniform-distribution-list/uniform-distribution-list.component').then(m => m.UniformDistributionListComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./uniform-distribution-list/uniform-distribution-list.component').then(m => m.UniformDistributionListComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./uniform-distribution-create/uniform-distribution-create.component').then(m => m.UniformDistributionCreateComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./uniform-distribution-create/uniform-distribution-create.component').then(m => m.UniformDistributionCreateComponent)
  }
];

