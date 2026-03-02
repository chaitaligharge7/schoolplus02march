import { Routes } from '@angular/router';
import { TimetableListComponent } from './timetable-list/timetable-list.component';
import { TimetableCreateComponent } from './timetable-create/timetable-create.component';

export const TimetableRoutes: Routes = [
  {
    path: '',
    component: TimetableListComponent
  },
  {
    path: 'list',
    component: TimetableListComponent
  },
  {
    path: 'create',
    component: TimetableCreateComponent
  }
];

