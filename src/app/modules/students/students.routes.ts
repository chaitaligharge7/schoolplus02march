import { Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentViewComponent } from './student-view/student-view.component';

export const StudentsRoutes: Routes = [
  {
    path: '',
    component: StudentListComponent
  },
  {
    path: 'list',
    component: StudentListComponent
  },
  {
    path: 'add',
    component: StudentAddComponent
  },
  {
    path: 'view/:id',
    component: StudentViewComponent
  },
  {
    path: 'edit/:id',
    component: StudentAddComponent
  }
];
