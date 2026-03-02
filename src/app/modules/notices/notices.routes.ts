import { Routes } from '@angular/router';
import { NoticeListComponent } from './notice-list/notice-list.component';
import { NoticeCreateComponent } from './notice-create/notice-create.component';

export const NoticesRoutes: Routes = [
  {
    path: '',
    component: NoticeListComponent
  },
  {
    path: 'list',
    component: NoticeListComponent
  },
  {
    path: 'add',
    component: NoticeCreateComponent
  },
  {
    path: 'edit/:id',
    component: NoticeCreateComponent
  }
];

