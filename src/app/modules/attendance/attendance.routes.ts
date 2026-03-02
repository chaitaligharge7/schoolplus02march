import { Routes } from '@angular/router';
import { AttendanceMarkComponent } from './attendance-mark/attendance-mark.component';
import { AttendanceViewComponent } from './attendance-view/attendance-view.component';

export const AttendanceRoutes: Routes = [
  {
    path: '',
    redirectTo: 'mark',
    pathMatch: 'full'
  },
  {
    path: 'mark',
    component: AttendanceMarkComponent
  },
  {
    path: 'view',
    component: AttendanceViewComponent
  }
];

