import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NoticeService } from '../../../shared/services/notice.service';
import { ClassService } from '../../../shared/services/class.service';

@Component({
  selector: 'app-notice-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './notice-create.component.html',
  styleUrls: ['./notice-create.component.scss']
})
export class NoticeCreateComponent implements OnInit {
  noticeForm: FormGroup;
  isEditMode = false;
  noticeId: number | null = null;
  isSaving = false;
  classes: any[] = [];
  sections: any[] = [];
  selectedFile: File | null = null;
  filePreview: string | null = null;

  constructor(
    private fb: FormBuilder,
    private noticeService: NoticeService,
    private classService: ClassService,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.noticeForm = this.fb.group({
      notice_title: ['', Validators.required],
      notice_content: ['', Validators.required],
      notice_type: ['General', Validators.required],
      target_audience: ['All', Validators.required],
      class_id: [null],
      section_id: [null],
      notice_date: [new Date().toISOString().split('T')[0], Validators.required],
      is_important: [false]
    });
  }

  ngOnInit(): void {
    this.loadClasses();
    
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.noticeId = parseInt(params['id']);
        this.loadNotice();
      }
    });
    
    this.noticeForm.get('class_id')?.valueChanges.subscribe(classId => {
      if (classId) {
        this.loadSections(classId);
      } else {
        this.sections = [];
      }
    });
  }

  loadNotice(): void {
    if (!this.noticeId) return;
    this.noticeService.getNotice(this.noticeId).subscribe({
      next: (response) => {
        const n = (response.status === 'success' && response.data) ? response.data : null;
        if (n) {
          this.noticeForm.patchValue({
            notice_title: n.notice_title,
            notice_content: n.notice_content,
            notice_type: n.notice_type || 'General',
            target_audience: n.target_audience || 'All',
            class_id: n.class_id || null,
            section_id: n.section_id || null,
            notice_date: n.notice_date ? n.notice_date.split(' ')[0] : new Date().toISOString().split('T')[0],
            is_important: !!n.is_important
          });
          if (n.class_id) this.loadSections(n.class_id);
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

  loadSections(classId: number): void {
    this.classService.getSections(classId).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.sections = response.data.sections || [];
        }
      }
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please select an image (JPEG, PNG, GIF) or PDF file');
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size should not exceed 5MB');
        return;
      }

      this.selectedFile = file;
      
      // Preview for images
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.filePreview = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        this.filePreview = null;
      }
    }
  }

  removeFile(): void {
    this.selectedFile = null;
    this.filePreview = null;
  }

  onSubmit(): void {
    if (this.noticeForm.invalid) {
      this.markFormGroupTouched(this.noticeForm);
      return;
    }

    this.isSaving = true;
    const formValue = this.noticeForm.value;

    const formData = new FormData();
    formData.append('notice_title', formValue.notice_title);
    formData.append('notice_content', formValue.notice_content);
    formData.append('notice_type', formValue.notice_type);
    formData.append('target_audience', formValue.target_audience);
    formData.append('notice_date', formValue.notice_date);
    formData.append('is_important', formValue.is_important ? '1' : '0');
    
    if (formValue.class_id) {
      formData.append('class_id', formValue.class_id);
    }
    if (formValue.section_id) {
      formData.append('section_id', formValue.section_id);
    }
    if (this.selectedFile) {
      formData.append('attachment', this.selectedFile);
    }

    if (this.isEditMode && this.noticeId) {
      formData.append('notice_id', this.noticeId.toString());
      this.noticeService.updateNotice(this.noticeId, formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            alert('Notice updated successfully!');
            this.router.navigate(['/app/notices/list']);
          } else {
            alert(response.message || 'Failed to update notice');
          }
        },
        error: (error) => {
          this.isSaving = false;
          alert(error.error?.message || 'An error occurred');
        }
      });
    } else {
      this.noticeService.createNotice(formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            alert('Notice created successfully!');
            this.router.navigate(['/app/notices/list']);
          } else {
            alert(response.message || 'Failed to create notice');
          }
        },
        error: (error) => {
          this.isSaving = false;
          alert(error.error?.message || 'An error occurred');
        }
      });
    }
  }

  markFormGroupTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control?.markAsTouched();
    });
  }

  cancel(): void {
    this.router.navigate(['/app/notices/list']);
  }
}

