import { Routes } from '@angular/router';
import { CertificateListComponent } from './certificate-list/certificate-list.component';
import { CertificateCreateComponent } from './certificate-create/certificate-create.component';

export const CertificatesRoutes: Routes = [
  {
    path: '',
    component: CertificateListComponent
  },
  {
    path: 'list',
    component: CertificateListComponent
  },
  {
    path: 'create',
    component: CertificateCreateComponent
  },
  {
    path: 'edit/:id',
    component: CertificateCreateComponent
  }
];

