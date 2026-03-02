import { Routes } from '@angular/router';

export const WHATSAPP_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./whatsapp-list/whatsapp-list.component').then(m => m.WhatsAppListComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./whatsapp-list/whatsapp-list.component').then(m => m.WhatsAppListComponent)
  },
  {
    path: 'send',
    loadComponent: () => import('./whatsapp-send/whatsapp-send.component').then(m => m.WhatsAppSendComponent)
  }
];

