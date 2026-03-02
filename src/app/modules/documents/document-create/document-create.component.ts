import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentService } from '../../../shared/services/document.service';
import { StudentService } from '../../../shared/services/student.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-document-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './document-create.component.html',
  styleUrls: ['./document-create.component.scss']
})
export class DocumentCreateComponent implements OnInit {
  documentForm: FormGroup;
  isEditMode = false;
  documentId: number | null = null;
  isLoading = false;
  isSaving = false;
  selectedFile: File | null = null;
  students: any[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
  public documentService: DocumentService, 
    private studentService: StudentService,
    private toastService: ToastService
  ) {
    this.documentForm = this.fb.group({
      student_id: [null, Validators.required],
      document_title: [''],
      document_type: ['birth_certificate', Validators.required],
      document_file: [null],
      description: [''],
      upload_date: [new Date().toISOString().split('T')[0], Validators.required]
    });
  }
ngOnInit(): void {
  // Get route param once (if it doesn't change while component is active)
  const id = this.route.snapshot.params['id'];
  if (id) {
    this.isEditMode = true;
    this.documentId = +id;
  }

  this.loadStudents();

  if (this.isEditMode) {
    this.loadDocument();
  }
}

  loadStudents(): void {
    this.studentService.getStudents({}).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.students = response.data.students || [];
        }
      }
    });
  }

  onFileSelect(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'];
      if (!allowedTypes.includes(file.type)) {
        this.toastService.error('Invalid file type. Only images and PDFs are allowed.');
        return;
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        this.toastService.error('File size exceeds 5MB limit.');
        return;
      }
      
      this.selectedFile = file;
    }
  }

loadDocument(): void {
  if (!this.documentId) return;

  this.isLoading = true;
  this.documentService.getDocuments({ document_id: this.documentId }).subscribe({
    next: (response) => {
      if (response.status === 'success' && response.data?.documents?.length > 0) {
        const doc = response.data.documents.find((d: any) => d.document_id === this.documentId);
        if (doc) {
          this.documentForm.patchValue({
            student_id: doc.student_id,
            document_title: doc.document_title,
            document_type: doc.document_type,
            document_file: doc.document_file, // existing file
            description: doc.description,
            upload_date: doc.issue_date ? doc.issue_date.split(' ')[0] : ''
          });
        }
      }
      this.isLoading = false;
    },
    error: () => {
      this.toastService.error('Failed to load document details');
      this.isLoading = false;
    }
  });
}



onSubmit(): void {
  console.log('==============================');
  console.log('Submit triggered');
  console.log('Mode:', this.isEditMode ? 'UPDATE MODE' : 'CREATE MODE');

  if (this.documentForm.invalid) {
    console.log('❌ Form is invalid', this.documentForm.value);
    this.documentForm.markAllAsTouched();
    return;
  }

  if (!this.isEditMode && !this.selectedFile) {
    console.log('❌ No file selected in CREATE mode');
    this.toastService.warning('Please select a file to upload');
    return;
  }

  this.isSaving = true;

  const studentId = this.documentForm.value.student_id;

  const prepareAndUpload = (studentName: string = '') => {
    const formData = new FormData();

    // Combine document title + student name in CREATE mode
    let documentTitle = this.documentForm.value.document_name || '';
    if (!this.isEditMode && studentName) {
      documentTitle = `${documentTitle} - ${studentName}`;
      console.log('📌 Combined document title:', documentTitle);
    }

    // Append all form fields EXCEPT document_file
    Object.keys(this.documentForm.value).forEach(key => {
      if (key !== 'document_file') {
        formData.append(key, key === 'document_name' ? documentTitle : this.documentForm.value[key]);
      }
    });

    // Append file if selected
    if (this.selectedFile) {
      formData.append('document_file', this.selectedFile);
      console.log('📌 File appended:', this.selectedFile.name);
    }

    // Append document_id in UPDATE mode
    if (this.isEditMode && this.documentId) {
      formData.append('document_id', this.documentId.toString());
    }

    console.log('Final FormData ready to upload:', formData);

    // Call API depending on mode
    const request$ = this.isEditMode
      ? this.documentService.updateDocument(formData)
      : this.documentService.uploadDocument(formData);

    request$.subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.toastService.success(`Document ${this.isEditMode ? 'updated' : 'uploaded'} successfully`);
          this.router.navigate(['/app/documents']);
        } else {
          this.toastService.error(response.message || `Failed to ${this.isEditMode ? 'update' : 'upload'} document`);
        }
        this.isSaving = false;
      },
      error: (error) => {
        console.error('Upload error:', error);
        this.toastService.error(`Failed to ${this.isEditMode ? 'update' : 'upload'} document`);
        this.isSaving = false;
      }
    });
  };

  // ===== Always fetch student name in CREATE mode =====
  if (!this.isEditMode && studentId) {
    this.studentService.getStudent(studentId).subscribe({
      next: (res) => {
        const studentName = res?.data?.name || '';
        prepareAndUpload(studentName);
      },
      error: () => {
        console.warn('⚠ Could not fetch student name, using ID only');
        prepareAndUpload('');
      }
    });
  } else {
    // UPDATE mode or no student_id
    prepareAndUpload();
  }
}








  cancel(): void {
    this.router.navigate(['/app/documents']);
  }
}

