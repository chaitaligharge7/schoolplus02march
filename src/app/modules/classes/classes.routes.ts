import { Routes } from '@angular/router';
import { ClassListComponent } from './class-list/class-list.component';
import { ClassCreateComponent } from './class-create/class-create.component';

export const CLASSES_ROUTES: Routes = [
  {
    path: '',
    component: ClassListComponent
  },
  {
    path: 'create',
    component: ClassCreateComponent
  },
  {
    path: 'edit/:id',
    component: ClassCreateComponent
  }
];

