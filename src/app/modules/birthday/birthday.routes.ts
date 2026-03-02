import { Routes } from '@angular/router';

export const BIRTHDAY_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./birthday-list/birthday-list.component').then(m => m.BirthdayListComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./birthday-list/birthday-list.component').then(m => m.BirthdayListComponent)
  }
];

