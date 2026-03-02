import { Routes } from '@angular/router';

export const STUDY_PROGRESS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./study-progress-list/study-progress-list.component').then(m => m.StudyProgressListComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./study-progress-list/study-progress-list.component').then(m => m.StudyProgressListComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./study-progress-create/study-progress-create.component').then(m => m.StudyProgressCreateComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./study-progress-create/study-progress-create.component').then(m => m.StudyProgressCreateComponent)
  }
];

