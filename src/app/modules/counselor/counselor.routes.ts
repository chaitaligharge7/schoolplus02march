import { Routes } from '@angular/router';

export const COUNSELOR_ROUTES: Routes = [
  { path: '', redirectTo: 'leads', pathMatch: 'full' },
  { path: 'leads', loadComponent: () => import('./lead-list/lead-list.component').then(m => m.LeadListComponent) },
  { path: 'leads/view/:id', loadComponent: () => import('./lead-view/lead-view.component').then(m => m.LeadViewComponent) },
  { path: 'leads/edit/:id', loadComponent: () => import('./lead-edit/lead-edit.component').then(m => m.LeadEditComponent) }
];
