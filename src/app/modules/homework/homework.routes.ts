import { Routes } from '@angular/router';
import { HomeworkListComponent } from './homework-list/homework-list.component';
import { HomeworkCreateComponent } from './homework-create/homework-create.component';

export const HomeworkRoutes: Routes = [
  {
    path: '',
    component: HomeworkListComponent
  },
  {
    path: 'list',
    component: HomeworkListComponent
  },
  {
    path: 'create',
    component: HomeworkCreateComponent
  },
  {
    path: 'edit/:id',
    component: HomeworkCreateComponent
  }
];

