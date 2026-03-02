import { Routes } from '@angular/router';

export const BRANCHES_ROUTES: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', loadComponent: () => import('./branch-list/branch-list.component').then(m => m.BranchListComponent) },
  { path: 'create', loadComponent: () => import('./branch-create/branch-create.component').then(m => m.BranchCreateComponent) },
  { path: 'edit/:id', loadComponent: () => import('./branch-create/branch-create.component').then(m => m.BranchCreateComponent) }
];
