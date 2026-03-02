import { Routes } from '@angular/router';

export const WATER_TDS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./water-tds-list/water-tds-list.component').then(m => m.WaterTdsListComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./water-tds-list/water-tds-list.component').then(m => m.WaterTdsListComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./water-tds-create/water-tds-create.component').then(m => m.WaterTdsCreateComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./water-tds-create/water-tds-create.component').then(m => m.WaterTdsCreateComponent)
  }
];

