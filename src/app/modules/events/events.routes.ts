import { Routes } from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component';
import { EventsCreateComponent } from './events-create/events-create.component';
import { EventsViewComponent } from './events-view/events-view.component';

export const EventsRoutes: Routes = [
  {
    path: '',
    component: EventsListComponent
  },
  {
    path: 'list',
    component: EventsListComponent
  },
  {
    path: 'create',
    component: EventsCreateComponent
  },
  {
    path: 'view/:id',
    component: EventsViewComponent
  },
  {
    path: 'edit/:id',
    component: EventsCreateComponent
  }
];

