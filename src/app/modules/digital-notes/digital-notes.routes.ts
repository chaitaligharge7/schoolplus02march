import { Routes } from '@angular/router';

export const DIGITAL_NOTES_ROUTES: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', loadComponent: () => import('./notes-list/notes-list.component').then(m => m.NotesListComponent) },
  { path: 'create', loadComponent: () => import('./notes-create/notes-create.component').then(m => m.NotesCreateComponent) },
  { path: 'edit/:id', loadComponent: () => import('./notes-create/notes-create.component').then(m => m.NotesCreateComponent) }  // ← add this
];
