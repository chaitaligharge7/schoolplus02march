import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ImportantNotesService } from '../../../shared/services/important-notes.service';
import { AcademicYearService } from '../../../shared/services/academic-year.service';
import { ClassService } from '../../../shared/services/class.service';
import { SubjectService } from '../../../shared/services/subject.service';
import { TeacherService } from '../../../shared/services/teacher.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-notes-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './notes-create.component.html',
  styleUrls: ['./notes-create.component.scss']
})
export class NotesCreateComponent implements OnInit {
  noteForm: FormGroup;
  isEditMode = false;
  noteId: number | null = null;
  isLoading = false;
  isSaving = false;
  selectedFile: File | null = null;
  filePreview: string | null = null;
  
  academicYears: any[] = [];
  classes: any[] = [];
  subjects: any[] = [];
  teachers: any[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private notesService: ImportantNotesService,
    private academicYearService: AcademicYearService,
    private classService: ClassService,
    private subjectService: SubjectService,
    private teacherService: TeacherService,
    private toastService: ToastService
  ) {
    this.noteForm = this.fb.group({
      note_title: ['', Validators.required],
      academic_year_id: [null, Validators.required],
      class_id: [null, Validators.required],
      subject_id: [null, Validators.required],
      teacher_id: [null, Validators.required],
      note_type: ['note', Validators.required],
      note_description: [''],
      note_file: [null],
      status: ['active', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.noteId = +params['id'];
        this.loadNote();
      }
    });
    
    this.loadAcademicYears();
    this.loadClasses();
    this.loadSubjects();
    this.loadTeachers();
  }

  loadAcademicYears(): void {
    this.academicYearService.getCurrentAcademicYearId().subscribe({
      next: (id) => {
        if (id != null) {
          this.noteForm.patchValue({ academic_year_id: id });
        }
      }
    });
  }

  loadClasses(): void {
    this.classService.getClasses().subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.classes = response.data.classes || [];
        }
      }
    });
  }

  loadSubjects(): void {
    this.subjectService.getSubjects().subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.subjects = response.data.subjects || [];
        }
      }
    });
  }

  loadTeachers(): void {
    this.teacherService.getTeachers({}).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.teachers = response.data.teachers || [];
        }
      }
    });
  }

  loadNote(): void {
    if (!this.noteId) return;
    
    this.isLoading = true;
    this.notesService.getNotes({ note_id: this.noteId }).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data?.notes?.length > 0) {
          const note = response.data.notes.find((n: any) => n.note_id === this.noteId);
          if (!note) {
            console.warn('Note with ID', this.noteId, 'not found in response');
            this.isLoading = false;
            return;
          }
          this.noteForm.patchValue({
            note_title: note.note_title,
            academic_year_id: note.academic_year_id,
            class_id: note.class_id,
            subject_id: note.subject_id,
            teacher_id: note.teacher_id,
            note_type: note.note_type,
            note_description: note.note_description,
            status: note.status
          });
          if (note.note_file) {
            this.filePreview = note.note_file;
          }
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error('Failed to load note details');
        this.isLoading = false;
      }
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg', 
                           'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        this.toastService.error('Please upload only PDF, Word, or image files');
        return;
      }

      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        this.toastService.error('File size should not exceed 10MB');
        return;
      }

      this.selectedFile = file;
      this.noteForm.patchValue({ note_file: file });
      
      // Preview for images
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.filePreview = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }
  }

  onSubmit(): void {
    if (this.noteForm.invalid) {
      this.noteForm.markAllAsTouched();
      return;
    }

    this.isSaving = true;
    const formData = new FormData();
    const formValue = this.noteForm.value;

    Object.keys(formValue).forEach(key => {
      if (key !== 'note_file' && formValue[key] !== null && formValue[key] !== '') {
        formData.append(key, formValue[key]);
      }
    });

    if (this.selectedFile) {
      formData.append('note_file', this.selectedFile);
    }

    if (this.isEditMode && this.noteId) {
      formData.append('note_id', this.noteId.toString());

      this.notesService.updateNote(formData).subscribe({
        next: (response) => {
          if (response.status === 'success') {
            this.toastService.success('Important note updated successfully');
            this.router.navigate(['/app/important-notes']);
          } else {
            this.toastService.error(response.message || 'Failed to update note');
          }
          this.isSaving = false;
        },
        error: () => {
          this.toastService.error('Failed to update note');
          this.isSaving = false;
        }
      });

    } else {
      this.notesService.createNote(formData).subscribe({
        next: (response) => {
          if (response.status === 'success') {
            this.toastService.success('Important note created successfully');
            this.router.navigate(['/app/important-notes']);
          } else {
            this.toastService.error(response.message || 'Failed to create note');
          }
          this.isSaving = false;
        },
        error: () => {
          this.toastService.error('Failed to create note');
          this.isSaving = false;
        }
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/app/important-notes']);
  }
}

