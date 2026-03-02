import { Routes } from '@angular/router';
import { FeeListComponent } from './fee-list/fee-list.component';
import { FeeAssignComponent } from './fee-assign/fee-assign.component';
import { FeePaymentComponent } from './fee-payment/fee-payment.component';
import { FeeDefaultersComponent } from './fee-defaulters/fee-defaulters.component';
import { FeeReceiptsListComponent } from './fee-receipts-list/fee-receipts-list.component';

export const FeesRoutes: Routes = [
  {
    path: '',
    component: FeeListComponent
  },
  {
    path: 'list',
    component: FeeListComponent
  },
  {
    path: 'defaulters',
    component: FeeDefaultersComponent
  },
  {
    path: 'assign',
    component: FeeAssignComponent
  },
  {
    path: 'payment/:fee_id',
    component: FeePaymentComponent
  },
  {
    path: 'receipt/:id',
    loadComponent: () => import('./fee-receipt/fee-receipt.component').then(m => m.FeeReceiptComponent)
  },
  {
    path: 'receipts',
    component: FeeReceiptsListComponent
  },
  {
    path: 'admission-tickets',
    loadComponent: () => import('./admission-tickets/admission-tickets.component').then(m => m.AdmissionTicketsComponent)
  }
];

