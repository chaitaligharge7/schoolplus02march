import { Routes } from '@angular/router';

export const SMS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./sms-list/sms-list.component').then(m => m.SmsListComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./sms-list/sms-list.component').then(m => m.SmsListComponent)
  },
  {
    path: 'send',
    loadComponent: () => import('./sms-send/sms-send.component').then(m => m.SmsSendComponent)
  }
];

