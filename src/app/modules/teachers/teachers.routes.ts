import { Routes } from '@angular/router';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherAddComponent } from './teacher-add/teacher-add.component';

export const TeachersRoutes: Routes = [
  {
    path: '',
    component: TeacherListComponent
  },
  {
    path: 'list',
    component: TeacherListComponent
  },
  {
    path: 'add',
    component: TeacherAddComponent
  },
  {
    path: 'edit/:id',
    component: TeacherAddComponent
  }
];

