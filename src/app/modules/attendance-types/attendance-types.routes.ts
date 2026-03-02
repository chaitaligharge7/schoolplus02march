import { Routes } from '@angular/router';
import { AttendanceTypeListComponent } from './attendance-type-list/attendance-type-list.component';
import { AttendanceTypeCreateComponent } from './attendance-type-create/attendance-type-create.component';

export const ATTENDANCE_TYPES_ROUTES: Routes = [
  { path: '', component: AttendanceTypeListComponent },
  { path: 'create', component: AttendanceTypeCreateComponent },
  { path: 'edit/:id', component: AttendanceTypeCreateComponent }
];

