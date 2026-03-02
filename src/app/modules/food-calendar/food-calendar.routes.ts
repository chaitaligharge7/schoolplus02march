import { Routes } from '@angular/router';

export const FOOD_CALENDAR_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./food-calendar-list/food-calendar-list.component').then(m => m.FoodCalendarListComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./food-calendar-list/food-calendar-list.component').then(m => m.FoodCalendarListComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./food-calendar-create/food-calendar-create.component').then(m => m.FoodCalendarCreateComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./food-calendar-create/food-calendar-create.component').then(m => m.FoodCalendarCreateComponent)
  }
];

