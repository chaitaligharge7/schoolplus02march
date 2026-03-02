import { Routes } from '@angular/router';

export const STUDENT_PARTICIPATION_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./participation-list/participation-list.component').then(m => m.ParticipationListComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./participation-list/participation-list.component').then(m => m.ParticipationListComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./participation-create/participation-create.component').then(m => m.ParticipationCreateComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./participation-create/participation-create.component').then(m => m.ParticipationCreateComponent)
  }
];

