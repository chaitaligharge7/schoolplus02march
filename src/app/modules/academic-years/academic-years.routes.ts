import { Routes } from '@angular/router';
import { AcademicYearListComponent } from './academic-year-list/academic-year-list.component';
import { AcademicYearCreateComponent } from './academic-year-create/academic-year-create.component';

export const ACADEMIC_YEARS_ROUTES: Routes = [
  {
    path: '',
    component: AcademicYearListComponent
  },
  {
    path: 'create',
    component: AcademicYearCreateComponent
  },
  {
    path: 'edit/:id',
    component: AcademicYearCreateComponent
  }
];

