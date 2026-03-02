import { Routes } from '@angular/router';
import { PeriodListComponent } from './period-list/period-list.component';
import { PeriodCreateComponent } from './period-create/period-create.component';

export const PERIODS_ROUTES: Routes = [
  {
    path: '',
    component: PeriodListComponent
  },
  {
    path: 'create',
    component: PeriodCreateComponent
  },
  {
    path: 'edit/:id',
    component: PeriodCreateComponent
  }
];

