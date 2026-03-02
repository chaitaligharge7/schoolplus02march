import { Routes } from '@angular/router';

export const QUESTION_PAPERS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./question-paper-list/question-paper-list.component').then(m => m.QuestionPaperListComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./question-paper-list/question-paper-list.component').then(m => m.QuestionPaperListComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./question-paper-create/question-paper-create.component').then(m => m.QuestionPaperCreateComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./question-paper-create/question-paper-create.component').then(m => m.QuestionPaperCreateComponent)
  }
];

