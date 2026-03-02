import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DigitalNotesService } from '../../../shared/services/digital-notes.service';
import { ClassService } from '../../../shared/services/class.service';
import { SubjectService } from '../../../shared/services/subject.service';
import { ToastService } from '../../../shared/services/toast.service';
import { SyllabusService } from '../../../shared/services/syllabus.service';

@Component({
  selector: 'app-notes-create',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './notes-create.component.html',
  styleUrls: ['./notes-create.component.scss']
})
export class NotesCreateComponent implements OnInit {
  model: any = { title: '', description: '', resource_type: 'notes', class_id: null, subject_id: null, chapter_name: null,
                 topic_name: '',difficulty_type:'easy'};
  classes: any[] = [];
  chapters: any[] = [];
  subjects: any[] = [];
  loading = false;
  isEditMode = false;         
  resourceId: number | null = null;  

  constructor(
    private notesService: DigitalNotesService,
    private classService: ClassService,
    private subjectService: SubjectService,
    private syllabusService: SyllabusService,   
    private toast: ToastService,
    private router: Router,
    private route: ActivatedRoute 
  ) {}

  ngOnInit(): void {
    // Load classes first
    this.classService.getClasses(200).subscribe({
      next: (r) => {
        if (r.status === 'success' && r.data?.classes) {
          this.classes = r.data.classes;
        }
      }
    });

    // Check if editing
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.resourceId = +params['id'];
        this.loadResource(this.resourceId);
      }
    });
  }

  loadChapters(classId: number, subjectId: number, selectedChapterId?: number): void {
    if (!classId || !subjectId) {
      this.chapters = [];
      this.model.chapter_id = null;
      return;
    }

    this.syllabusService.getSyllabus({ class_id: classId, subject_id: subjectId }).subscribe({
      next: (res: any) => {

        if (res.status === 'success' && res.data?.syllabus?.length) {
          const syllabus = res.data.syllabus[0];

          this.chapters = (syllabus.chapters || []).map((ch: any) => ({
            chapter_id: ch.chapter_id,
            chapter_name: ch.chapter_name
          }));

          if (selectedChapterId && this.chapters.find(c => c.chapter_id === selectedChapterId)) {
            this.model.chapter_id = selectedChapterId;
          } else {
            this.model.chapter_id = null;
          }
        } else {
          this.chapters = [];
          this.model.chapter_id = null;
        }
      },
      error: () => {
        this.chapters = [];
        this.model.chapter_id = null;
      }
    });
  }

  onClassChange(): void {
    this.model.subject_id = null;
    this.model.chapter_id = null;
    this.subjects = [];
    this.chapters = [];

    if (this.model.class_id) {
      this.loadSubjects(this.model.class_id);
    }
  }

  onSubjectChange(): void {
    this.model.chapter_id = null;
    this.chapters = [];

    if (this.model.class_id && this.model.subject_id) {
      // Load chapters for this class + subject
      this.loadChapters(this.model.class_id, this.model.subject_id);
    }
  }

  loadResource(resourceId: number): void {
    if (!resourceId) return;

    this.notesService.getResource(resourceId).subscribe({
      next: (res) => {

        if (res.status === 'success' && res.data?.resource) {
          const resource = res.data.resource;

          // Set basic fields
          this.model.title = resource.title;
          this.model.description = resource.description;
          this.model.resource_type = resource.resource_type;
          this.model.class_id = resource.class_id;
          this.model.chapter_name = resource.chapter_name ?? '';
          this.model.topic_name = resource.topic_name ?? '';

          if (this.model.class_id) {

            this.classService.getClassSubjects(this.model.class_id).subscribe({
              next: (subRes) => {
                this.subjects = subRes.status === 'success' && subRes.data?.subjects ? subRes.data.subjects : [];

                if (this.subjects.find(s => s.subject_id === resource.subject_id)) {
                  this.model.subject_id = resource.subject_id;

                  this.loadChapters(this.model.class_id, this.model.subject_id, resource.chapter_id);
                } else {
                  this.model.subject_id = null;
                  this.chapters = [];
                }

              },
              error: (err) => {
                console.error('Failed to load subjects:', err);
                this.subjects = [];
                this.model.subject_id = null;
                this.chapters = [];
              }
            });
          } else {
            this.model.subject_id = null;
            this.chapters = [];
          }
        }
      },
      error: (err) => {
        console.error('Failed to load resource:', err);
        this.toast.show('Failed to load resource', 'error');
      }
    });
  }

  // Load subjects and optionally set selected subject
  loadSubjects(classId: number, selectedSubjectId?: number): void {
    if (!classId) {
      this.subjects = [];
      this.model.subject_id = null;
      return;
    }

    this.classService.getClassSubjects(classId).subscribe({
      next: (res) => {
        this.subjects = res.status === 'success' && res.data?.subjects ? res.data.subjects : [];
        if (selectedSubjectId) {
          this.model.subject_id = selectedSubjectId;
        } else if (!this.subjects.find(s => s.subject_id === this.model.subject_id)) {
          this.model.subject_id = null;
        }
      },
      error: () => {
        this.subjects = [];
        this.model.subject_id = null;
      }
    });
  }

  save(): void {
    if (!this.model.title?.trim()) {
      this.toast.show('Title is required', 'error');
      return;
    }

    this.loading = true;

    const formData = new FormData();

    Object.keys(this.model).forEach(key => {
      if (key === 'file_path') return; 

      const value = (this.model as any)[key];
      if (value !== null && value !== undefined) {
        formData.append(key, value);
      }
    });

    const fileInput = document.getElementById('file_path') as HTMLInputElement;
    if (fileInput?.files && fileInput.files.length > 0) {
      formData.append('file', fileInput.files[0]); 
    }

    if (this.isEditMode && this.resourceId) {
      formData.append('resource_id', this.resourceId.toString());

      this.notesService.updateResource(formData).subscribe({
        next: (res) => {
          this.loading = false;
          if (res.status === 'success') {
            this.toast.show('Resource updated', 'success');
            this.router.navigate(['/app/digital-notes/list']);
          }
        },
        error: () => {
          this.loading = false;
          this.toast.show('Error updating resource', 'error');
        }
      });

    } else {
      this.notesService.createResource(formData).subscribe({
        next: (res) => {
          this.loading = false;
          if (res.status === 'success') {
            this.toast.show('Resource added', 'success');
            this.router.navigate(['/app/digital-notes/list']);
          }
        },
        error: () => {
          this.loading = false;
          this.toast.show('Error', 'error');
        }
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/app/digital-notes/list']);
  }
}
