import { Routes } from '@angular/router';
import { LibraryListComponent } from './library-list/library-list.component';
import { LibraryIssuesComponent } from './library-issues/library-issues.component';
import { LibraryAddComponent } from './library-add/library-add.component';
import { LibraryViewComponent } from './library-view/library-view.component';
import { LibraryIssueAddComponent } from './library-issues-add/library-issues-add.component';

export const LibraryRoutes: Routes = [
  {
    path: '',
    component: LibraryListComponent
  },
  {
    path: 'list',
    component: LibraryListComponent
  },
  {
    path: 'add',
    component: LibraryAddComponent
  },
  {
    path: 'create',
    component: LibraryIssueAddComponent
  },
  {
    path: 'edit/:id',
    component: LibraryAddComponent
  },
  {
    path: 'view/:id',
    component: LibraryViewComponent
  },
  {
    path: 'issues',
    component: LibraryIssuesComponent
  }
];

