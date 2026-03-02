import { Routes } from '@angular/router';
import { DesignationListComponent } from './designation-list/designation-list.component';
import { DesignationCreateComponent } from './designation-create/designation-create.component';

export const DESIGNATIONS_ROUTES: Routes = [
  {
    path: '',
    component: DesignationListComponent
  },
  {
    path: 'create',
    component: DesignationCreateComponent
  },
  {
    path: 'edit/:id',
    component: DesignationCreateComponent
  }
];

