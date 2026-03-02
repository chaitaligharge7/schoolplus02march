import { Routes } from '@angular/router';

export const PROMOTIONS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./promotion-list/promotion-list.component').then(m => m.PromotionListComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./promotion-list/promotion-list.component').then(m => m.PromotionListComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./promotion-create/promotion-create.component').then(m => m.PromotionCreateComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./promotion-create/promotion-create.component').then(m => m.PromotionCreateComponent)
  }
];

