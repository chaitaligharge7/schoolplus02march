import { Routes } from '@angular/router';

export const REMEDIAL_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./remedial-list/remedial-list.component').then(m => m.RemedialListComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./remedial-list/remedial-list.component').then(m => m.RemedialListComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./remedial-create/remedial-create.component').then(m => m.RemedialCreateComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./remedial-create/remedial-create.component').then(m => m.RemedialCreateComponent)
  },
  {
    path: 'slider',   // 🔹 New route
    loadComponent: () => import('./slider/slider.component').then(m => m.SliderComponent)
  }
];

