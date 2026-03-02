import { Routes } from '@angular/router';
import { ExamTypeListComponent } from './exam-type-list/exam-type-list.component';
import { ExamTypeCreateComponent } from './exam-type-create/exam-type-create.component';

export const EXAM_TYPES_ROUTES: Routes = [
  { path: '', component: ExamTypeListComponent },
  { path: 'create', component: ExamTypeCreateComponent },
  { path: 'edit/:id', component: ExamTypeCreateComponent }
];

