import { Routes } from '@angular/router';
import { CalendarListComponent } from './calendar-list/calendar-list.component';
import { CalendarCreateComponent } from './calendar-create/calendar-create.component';

export const CalendarRoutes: Routes = [
  {
    path: '',
    component: CalendarListComponent
  },
  {
    path: 'list',
    component: CalendarListComponent
  },
  {
    path: 'create',
    component: CalendarCreateComponent
  },
  {
    path: 'edit/:id',
    component: CalendarCreateComponent
  }
];

