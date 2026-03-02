import { Routes } from '@angular/router';

export const SPORTS_ROUTES: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', loadComponent: () => import('./event-list/event-list.component').then(m => m.EventListComponent) },
  { path: 'create', loadComponent: () => import('./event-create/event-create.component').then(m => m.EventCreateComponent) },
  { path: 'edit/:id', loadComponent: () => import('./event-create/event-create.component').then(m => m.EventCreateComponent) }
];
