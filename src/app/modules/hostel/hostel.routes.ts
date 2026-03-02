import { Routes } from '@angular/router';
import { HostelListComponent } from './hostel-list/hostel-list.component';
import { HostelCreateComponent } from './hostel-create/hostel-create.component';
import { RoomCreateComponent } from './room-create/room-create.component';
import { HostelSliderDetailComponent } from './hostel-slider-details/hostel-slider-detail.component';

export const HostelRoutes: Routes = [
  {
    path: '',
    component: HostelListComponent
  },
  {
    path: 'list',
    component: HostelListComponent
  },
  {
    path: 'create',
    component: HostelCreateComponent
  },
  {
    path: 'hostel-edit/:id',
    component: HostelCreateComponent
  },
  {
    path: 'room-create/:hostel_id',
    component: RoomCreateComponent
  },
  {
    path: 'room-edit/:id',
    component: RoomCreateComponent
  },
  {
  path: 'room-view/:room_id',
    component:HostelSliderDetailComponent
  }
];

