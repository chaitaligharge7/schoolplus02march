import { Routes } from '@angular/router';
import { FeeTypeListComponent } from './fee-type-list/fee-type-list.component';
import { FeeTypeCreateComponent } from './fee-type-create/fee-type-create.component';

export const FEE_TYPES_ROUTES: Routes = [
  { path: '', component: FeeTypeListComponent },
  { path: 'create', component: FeeTypeCreateComponent },
  { path: 'edit/:id', component: FeeTypeCreateComponent }
];

