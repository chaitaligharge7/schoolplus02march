import { Routes } from '@angular/router';

export const DOUBT_HANDLING_ROUTES: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', loadComponent: () => import('./doubt-list/doubt-list.component').then(m => m.DoubtListComponent) },
  { path: 'create', loadComponent: () => import('./doubt-create/doubt-create.component').then(m => m.DoubtCreateComponent) },
  { path: 'respond/:id', loadComponent: () => import('./doubt-create/doubt-create.component').then(m => m.DoubtCreateComponent) }
];
