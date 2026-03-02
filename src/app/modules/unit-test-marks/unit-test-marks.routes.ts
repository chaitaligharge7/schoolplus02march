import { Routes } from '@angular/router';

export const UNIT_TEST_MARKS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./unit-test-marks-list/unit-test-marks-list.component').then(m => m.UnitTestMarksListComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./unit-test-marks-list/unit-test-marks-list.component').then(m => m.UnitTestMarksListComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./unit-test-marks-create/unit-test-marks-create.component').then(m => m.UnitTestMarksCreateComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./unit-test-marks-create/unit-test-marks-create.component').then(m => m.UnitTestMarksCreateComponent)
  }
];

