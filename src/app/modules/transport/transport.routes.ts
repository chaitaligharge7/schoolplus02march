import { Routes } from '@angular/router';
import { TransportListComponent } from './transport-list/transport-list.component';
import { TransportAddComponent } from './transport-add/transport-add.component';

export const TransportRoutes: Routes = [
  {
    path: '',
    component: TransportListComponent
  },
  {
    path: 'list',
    component: TransportListComponent
  },
  {
    path: 'add',
    component: TransportAddComponent
  },
  {
    path: 'edit/:id',
    component: TransportAddComponent
  }
];

