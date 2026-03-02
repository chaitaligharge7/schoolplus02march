import { Routes } from '@angular/router';

export const ENQUIRY_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./enquiry-list/enquiry-list.component').then(m => m.EnquiryListComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./enquiry-list/enquiry-list.component').then(m => m.EnquiryListComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./enquiry-create/enquiry-create.component').then(m => m.EnquiryCreateComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./enquiry-create/enquiry-create.component').then(m => m.EnquiryCreateComponent)
  },
  {
    path: 'view/:id',
    loadComponent: () => import('./enquiry-view/enquiry-view.component').then(m => m.EnquiryViewComponent)
  }
];

