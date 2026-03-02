import { Routes } from '@angular/router';

export const VISITORS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./visitor-list/visitor-list.component').then(m => m.VisitorListComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./visitor-list/visitor-list.component').then(m => m.VisitorListComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./visitor-create/visitor-create.component').then(m => m.VisitorCreateComponent)
  },
   { path: 'add',
    loadComponent:() => import('./visitor-category-add/visitor-category-add.component').then(m => m. VisitorCategoryComponent)

  },
  {
    path: 'category/edit/:id',
    loadComponent:() => import('./visitor-category-add/visitor-category-add.component').then(m=> m. VisitorCategoryComponent)
  },
  {
    path: 'categorylist',
    loadComponent: () => import('./visitor-category-list/visitor-catrgory-list.component').then(m => m. VisitorCategoriesListComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./visitor-create/visitor-create.component').then(m => m.VisitorCreateComponent)
  }
];

