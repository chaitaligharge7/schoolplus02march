import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { DoubtHandlingService } from '../../../shared/services/doubt-handling.service';
import { StudentService } from '../../../shared/services/student.service';
import { ClassService } from '../../../shared/services/class.service';
import { SubjectService } from '../../../shared/services/subject.service';
import { TeacherService } from '../../../shared/services/teacher.service';
import { ToastService } from '../../../shared/services/toast.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-doubt-create',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './doubt-create.component.html',
  styleUrls: ['./doubt-create.component.scss']
})
export class DoubtCreateComponent implements OnInit {
  model: any = { student_id: null, class_id: null, subject_id: null, teacher_id: null, doubt_text: '',chapter_name: '',
                 topic_name: '',pripority_level: null,preferred_response_mode:null,doubt_file: null,response_file: null };
  students: any[] = []; classes: any[] = []; subjects: any[] = []; teachers: any[] = [];
  loading = false;
  editId: number | null = null;
  isResponse = false;
  responseText = '';
  selectedFile: File | null = null;

  constructor(
    private doubtService: DoubtHandlingService,
    private studentService: StudentService,
    private classService: ClassService,
    private subjectService: SubjectService,
    private teacherService: TeacherService,
    private toast: ToastService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.editId = +id;
      this.isResponse = true;

      this.doubtService.getDoubt(this.editId).subscribe({
        next: (res) => {
          if (res.status === 'success' && res.data?.doubt) {
            this.model = { ...res.data.doubt };
            this.responseText = res.data.doubt.response_text || '';

            if (this.model.class_id) {
              this.loadSubjects(this.model.class_id);
            }
          }
        }
      });
    }

    this.classService.getClasses(200).subscribe(r => {
      if (r.status === 'success' && r.data?.classes) {
        this.classes = r.data.classes;
      }
    });

    this.teacherService.getTeachers(200).subscribe(r => {
      if (r.status === 'success' && r.data?.teachers) {
        this.teachers = r.data.teachers;
      }
    });

    this.studentService.getStudents(500).subscribe(r => {
      if (r.status === 'success' && r.data?.students) {
        this.students = r.data.students;
      }
    });
  }

  loadSubjects(classId: number): void {
    if (!classId) {
      this.subjects = [];
      this.model.subject_id = null;
      return;
    }

    this.classService.getClassSubjects(classId).subscribe({
      next: (res) => {
        if (res.status === 'success' && res.data?.subjects) {
          this.subjects = res.data.subjects;
        } else {
          this.subjects = [];
        }
      }
    });
  }

  // Doubt file for new doubts
  onDoubtFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.model.doubt_file = input.files[0];
    }
  }

  // Response file for responses
  onResponseFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.model.response_file = input.files[0];
    }
  }

  onView(doubt: any): void {
    if (doubt?.doubt_file) {
      const baseUrl = environment.apiUrl.replace('/php_includes', '');
      const fileUrl = `${baseUrl}/${doubt.doubt_file}`; 
      window.open(fileUrl, '_blank');
    } else {
      console.warn('No doubt file attached.');
    }
  }
  
  save(): void {
    if (!this.model.doubt_text?.trim() && !this.isResponse) {
      this.toast.show('Doubt text is required', 'error'); 
      return; 
    }

    this.loading = true;

    if (this.isResponse && this.editId) {
      // RESPONSE SAVE
      const formData = new FormData();
      formData.append('doubt_id', this.editId.toString());
      formData.append('response_text', this.responseText);
      formData.append('status', 'resolved');

      if (this.model.response_file) {
        formData.append('response_file', this.model.response_file);
      }

      this.doubtService.updateDoubt(formData).subscribe({
        next: (res) => {
          this.loading = false;
          if (res.status === 'success') {
            this.toast.show('Response saved', 'success');
            this.router.navigate(['/app/doubt-handling/list']);
          }
        },
        error: () => { this.loading = false; this.toast.show('Error', 'error'); }
      });
      return;
    }

    // NEW DOUBT SAVE
    const formData = new FormData();
    for (const key in this.model) {
      if (key === 'doubt_file' && this.model[key]) {
        formData.append('doubt_file', this.model[key]); 
      } else if (key !== 'response_file') {
        formData.append(key, this.model[key] ?? '');
      }
    }

    this.doubtService.createDoubt(formData).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === 'success') {
          this.toast.show('Doubt submitted', 'success');
          this.router.navigate(['/app/doubt-handling/list']);
        }
      },
      error: () => { this.loading = false; this.toast.show('Error', 'error'); }
    });
  }

  cancel(): void { this.router.navigate(['/app/doubt-handling/list']); }
}
