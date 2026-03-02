import { Routes } from '@angular/router';

export const SYLLABUS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./syllabus-list/syllabus-list.component').then(m => m.SyllabusListComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./syllabus-list/syllabus-list.component').then(m => m.SyllabusListComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./syllabus-create/syllabus-create.component').then(m => m.SyllabusCreateComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./syllabus-create/syllabus-create.component').then(m => m.SyllabusCreateComponent)
  },
  {
    path: 'view/:id',
    loadComponent: () => import('./syllabus-view/syllabus-view.component').then(m => m.SyllabusViewComponent)
  },
  {
    path: 'completion-report',
    loadComponent: () => import('./syllabus-completion-report/syllabus-completion-report.component').then(m => m.SyllabusCompletionReportComponent)
  }
];

