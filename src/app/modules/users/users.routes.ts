import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserFunctionalityComponent } from './user-functionality/user-functionality.component';

export const UsersRoutes: Routes = [
  {
    path: '',
    component: UserListComponent
  },
  {
    path: 'list',
    component: UserListComponent
  },
  {
    path: 'add',
    component: UserAddComponent
  },
  {
    path: 'edit/:id',
    component: UserAddComponent
  },
  {
    path: 'functionality/:id',
    component: UserFunctionalityComponent
  }
];

