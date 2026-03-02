import { Routes } from '@angular/router';
import { FeeGroupListComponent } from './fee-group-list/fee-group-list.component';
import { FeeGroupCreateComponent } from './fee-group-create/fee-group-create.component';

export const FEE_GROUPS_ROUTES: Routes = [
  {
    path: '',
    component: FeeGroupListComponent
  },
  {
    path: 'create',
    component: FeeGroupCreateComponent
  },
  {
    path: 'edit/:id',
    component: FeeGroupCreateComponent
  }
];

