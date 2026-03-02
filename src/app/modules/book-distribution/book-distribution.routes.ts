import { Routes } from '@angular/router';

export const BOOK_DISTRIBUTION_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./book-distribution-list/book-distribution-list.component').then(m => m.BookDistributionListComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./book-distribution-list/book-distribution-list.component').then(m => m.BookDistributionListComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./book-distribution-create/book-distribution-create.component').then(m => m.BookDistributionCreateComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./book-distribution-create/book-distribution-create.component').then(m => m.BookDistributionCreateComponent)
  }
];

