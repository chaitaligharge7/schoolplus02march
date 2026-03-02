import { Routes } from '@angular/router';

export const ADMISSION_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./admission-list/admission-list.component').then(m => m.AdmissionListComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./admission-list/admission-list.component').then(m => m.AdmissionListComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./admission-create/admission-create.component').then(m => m.AdmissionCreateComponent)
  },
      {
        path: 'edit/:id',
        loadComponent: () => import('./admission-create/admission-create.component').then(m => m.AdmissionCreateComponent)
      },
      {
        path: 'view/:id',
        loadComponent: () => import('./admission-view/admission-view.component').then(m => m.AdmissionViewComponent)
      }
];

