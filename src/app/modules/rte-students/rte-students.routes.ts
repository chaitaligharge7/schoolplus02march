import { Routes } from '@angular/router';

export const RTE_STUDENTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./rte-student-list/rte-student-list.component').then(m => m.RteStudentListComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./rte-student-list/rte-student-list.component').then(m => m.RteStudentListComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./rte-student-create/rte-student-create.component').then(m => m.RteStudentCreateComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./rte-student-create/rte-student-create.component').then(m => m.RteStudentCreateComponent)
  }
];

