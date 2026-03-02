import { Routes } from '@angular/router';

export const MESS_SCHEDULES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./mess-schedule-list/mess-schedule-list.component').then(m => m.MessScheduleListComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./mess-schedule-list/mess-schedule-list.component').then(m => m.MessScheduleListComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./mess-schedule-create/mess-schedule-create.component').then(m => m.MessScheduleCreateComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./mess-schedule-create/mess-schedule-create.component').then(m => m.MessScheduleCreateComponent)
  }
];

