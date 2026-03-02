import { Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentCreateComponent } from './department-create/department-create.component';

export const DEPARTMENTS_ROUTES: Routes = [
  {
    path: '',
    component: DepartmentListComponent
  },
  {
    path: 'create',
    component: DepartmentCreateComponent
  },
  {
    path: 'edit/:id',
    component: DepartmentCreateComponent
  }
];

