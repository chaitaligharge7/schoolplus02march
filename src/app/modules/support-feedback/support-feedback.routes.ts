import { Routes } from '@angular/router';

export const SUPPORT_FEEDBACK_ROUTES: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', loadComponent: () => import('./ticket-list/ticket-list.component').then(m => m.TicketListComponent) },
  { path: 'create', loadComponent: () => import('./ticket-create/ticket-create.component').then(m => m.TicketCreateComponent) },
    { path: 'edit/:id',loadComponent: () => import('./ticket-create/ticket-create.component').then(m => m.TicketCreateComponent)}
];
