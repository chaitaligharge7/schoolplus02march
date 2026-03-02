import { Routes } from '@angular/router';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectCreateComponent } from './subject-create/subject-create.component';

export const SUBJECTS_ROUTES: Routes = [
  {
    path: '',
    component: SubjectListComponent
  },
  {
    path: 'create',
    component: SubjectCreateComponent
  },
  {
    path: 'edit/:id',
    component: SubjectCreateComponent
  }
];

