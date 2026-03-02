import { Routes } from '@angular/router';

export const TEACHING_PLAN_ROUTES: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', loadComponent: () => import('./plan-list/plan-list.component').then(m => m.PlanListComponent) },
  { path: 'create', loadComponent: () => import('./plan-create/plan-create.component').then(m => m.PlanCreateComponent) },
  { path: 'edit/:id', loadComponent: () => import('./plan-create/plan-create.component').then(m => m.PlanCreateComponent) }
];
