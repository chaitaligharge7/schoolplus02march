import { Routes } from '@angular/router';

export const COURSES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./course-list/course-list.component').then(m => m.CourseListComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./course-list/course-list.component').then(m => m.CourseListComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./course-create/course-create.component').then(m => m.CourseCreateComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./course-create/course-create.component').then(m => m.CourseCreateComponent)
  }
];

