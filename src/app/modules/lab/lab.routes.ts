import { Routes } from '@angular/router';

export const LAB_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./lab-items-list/lab-items-list.component').then(m => m.LabItemsListComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./lab-items-list/lab-items-list.component').then(m => m.LabItemsListComponent)
  },
  {
    path: 'items/create',
    loadComponent: () => import('./lab-item-create/lab-item-create.component').then(m => m.LabItemCreateComponent)
  },
  {
    path: 'items/edit/:id',
    loadComponent: () => import('./lab-item-create/lab-item-create.component').then(m => m.LabItemCreateComponent)
  },
  {
    path: 'practicals/create',
    loadComponent: () => import('./lab-practical-create/lab-practical-create.component').then(m => m.LabPracticalCreateComponent)
  },
  {
    path: 'practicals/edit/:id',
    loadComponent: () => import('./lab-practical-create/lab-practical-create.component').then(m => m.LabPracticalCreateComponent)
  }
];

