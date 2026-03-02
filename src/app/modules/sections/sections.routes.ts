import { Routes } from '@angular/router';
import { SectionListComponent } from './section-list/section-list.component';
import { SectionCreateComponent } from './section-create/section-create.component';

export const SECTIONS_ROUTES: Routes = [
  {
    path: '',
    component: SectionListComponent
  },
  {
    path: 'create',
    component: SectionCreateComponent
  },
  {
    path: 'edit/:id',
    component: SectionCreateComponent
  }
];

