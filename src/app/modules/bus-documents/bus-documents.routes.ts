import { Routes } from '@angular/router';

export const BUS_DOCUMENTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./bus-document-list/bus-document-list.component').then(m => m.BusDocumentListComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./bus-document-list/bus-document-list.component').then(m => m.BusDocumentListComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./bus-document-create/bus-document-create.component').then(m => m.BusDocumentCreateComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./bus-document-create/bus-document-create.component').then(m => m.BusDocumentCreateComponent)
  }
];

