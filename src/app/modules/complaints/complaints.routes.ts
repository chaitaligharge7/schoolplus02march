import { Routes } from '@angular/router';

export const COMPLAINTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./complaint-list/complaint-list.component').then(m => m.ComplaintListComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./complaint-list/complaint-list.component').then(m => m.ComplaintListComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./complaint-create/complaint-create.component').then(m => m.ComplaintCreateComponent)
  },
  { path: 'add',
    loadComponent:() => import('./category-add/category-add.component').then(m => m.CategoryComponent)

  },
  { path: 'categorylist',
    loadComponent:() => import('./category-list/category-list.component').then(m => m. CategoriesListComponent )

  },
   {
    path: 'categoryedit/:id',
    loadComponent: () => import('./category-add/category-add.component').then(m => m.CategoryComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./complaint-create/complaint-create.component').then(m => m.ComplaintCreateComponent)
  },
   {
    path: 'view/:id',
     loadComponent: () => import('./complaint-view/complaint-view.component').then(m => m.ComplaintViewComponent)
  },
];