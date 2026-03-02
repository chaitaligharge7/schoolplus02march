import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImportantNotesService } from '../../../shared/services/important-notes.service';
import { ToastService } from '../../../shared/services/toast.service';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';
import { TeacherService } from '../../../shared/services/teacher.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-notes-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notes-slider.component.html',
  styleUrl: './notes-slider.component.scss'
})
export class NotesSliderComponent implements OnInit {
  noteId!: number;
  notes: any[] = [];
  currentIndex = 0;
  isLoading = true;
  teachers: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private teacherService: TeacherService,
    private notesService: ImportantNotesService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.noteId = +params['id'];
      this.loadNotes();
    });
    this.loadTeachers();
  }
 loadTeachers(): void {
    this.teacherService.getTeachers({}).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.teachers = response.data.teachers || [];
        }
      },
      error: () => {
        this.toastService.error('Failed to load teachers');
      }
    });
  }
  get currentNoteTeacherName(): string {
  if (!this.notes.length || !this.teachers.length) return '';
  const note = this.notes[this.currentIndex];
  const teacher = this.teachers.find(t => t.teacher_id === note.teacher_id);
  return teacher ? `${teacher.first_name} ${teacher.last_name}` : '';
}

  loadNotes(): void {
    this.isLoading = true;
    this.notesService.getNotes({ note_id: this.noteId }).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data?.notes?.length > 0) {
          this.notes = response.data.notes;
        } else {
          this.toastService.error('No notes found');
          this.router.navigate(['/app/important-notes']);
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error('Failed to load note');
        this.isLoading = false;
        this.router.navigate(['/app/important-notes']);
      }
    });
  }
viewFile(noteId: number): void {
  this.notesService.getNote(noteId).subscribe({
    next: (res) => {
      const note = res.data?.note;
      if (res.status === 'success' && note?.note_file) {
        const fileUrl = `${environment.apiUrl.replace('/php_includes', '')}/${note.note_file}`;

        const link = document.createElement('a');
        link.href = fileUrl;
        link.target = '_blank';

        const fileExtension = note.note_file.split('.').pop() || 'pdf';
        link.setAttribute('download', `${note.note_title || 'download'}.${fileExtension}`);

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        this.toastService.show('Download started', 'success');
      } else {
        this.toastService.show('No file available for download', 'warning');
      }
    },
    error: () => {
      this.toastService.show('Failed to load file', 'error');
    }
  });
}

  close(): void {
    this.router.navigate(['/app/important-notes']);
  }
}
