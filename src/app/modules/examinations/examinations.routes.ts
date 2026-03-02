import { Routes } from '@angular/router';
import { ExaminationListComponent } from './examination-list/examination-list.component';
import { ExaminationCreateComponent } from './examination-create/examination-create.component';
import { ExamResultsComponent } from './exam-results/exam-results.component';

export const ExaminationsRoutes: Routes = [
  {
    path: '',
    component: ExaminationListComponent
  },
  {
    path: 'list',
    component: ExaminationListComponent
  },
  {
    path: 'add',
    component: ExaminationCreateComponent
  },
  {
    path: 'edit/:id',  
    component: ExaminationCreateComponent
  },
  {
    path: 'enter-results/:id',
    component: ExamResultsComponent
  }
];

