import { Routes } from '@angular/router';

export const IMPORTANT_NOTES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./notes-list/notes-list.component').then(m => m.NotesListComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./notes-list/notes-list.component').then(m => m.NotesListComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./notes-create/notes-create.component').then(m => m.NotesCreateComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./notes-create/notes-create.component').then(m => m.NotesCreateComponent)
  },
  {
    path: 'view/:id',
    loadComponent: () => import('./notes-slider/notes-slider.component').then(m => m.NotesSliderComponent)
  }
];

