import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { SearchSelectComponent } from '../../../shared/components/search-select/search-select.component';
import { LibraryService } from '../../../shared/services/library.service';
import { StudentService } from '../../../shared/services/student.service';
import { TeacherService } from '../../../shared/services/teacher.service';

@Component({
  selector: 'app-library-issue-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule, EnhancedTableComponent, SearchSelectComponent],
  templateUrl: './library-issues-add.component.html',
  styleUrls: ['./library-issues-add.component.scss']
})
export class LibraryIssueAddComponent implements OnInit {

  issueForm!: FormGroup;
  isEditMode = false;
  isSaving = false;
  issueId: string | null = null;

  books: any[] = [];
  students: any[] = [];
  teachers: any[] = [];

  get bookOptions(): { value: number; label: string }[] {
    return this.books.map(b => ({ value: b.book_id, label: b.book_title || b.title || String(b.book_id) }));
  }
  get studentOptions(): { value: number; label: string }[] {
    return this.students.map(s => ({ value: s.student_id, label: s.full_name || `${s.first_name || ''} ${s.last_name || ''}`.trim() || String(s.student_id) }));
  }
  get teacherOptions(): { value: number; label: string }[] {
    return this.teachers.map(t => ({ value: t.teacher_id, label: t.full_name || `${t.first_name || ''} ${t.last_name || ''}`.trim() || String(t.teacher_id) }));
  }
  readonly issueToOptions = [
    { value: 'student', label: 'Student' },
    { value: 'teacher', label: 'Teacher' }
  ];
  readonly statusOptions = [
    { value: 'Issued', label: 'Issued' },
    { value: 'Returned', label: 'Returned' },
    { value: 'Overdue', label: 'Overdue' },
    { value: 'Lost', label: 'Lost' }
  ];

  constructor(
    private fb: FormBuilder,
    private libraryService: LibraryService,
    private studentService: StudentService,
    private teacherService: TeacherService, 
    public router: Router, 
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initForm();

    // Load dropdowns
    this.loadBooks();
    this.loadStudents();
    this.loadTeachers();

    // Check edit mode
    this.issueId = this.route.snapshot.paramMap.get('id');
    if (this.issueId) {
      this.isEditMode = true;
      this.loadIssue(this.issueId);
    }

    // Handle issue_to changes
    this.issueForm.get('issue_to')?.valueChanges.subscribe(value => {
      if (value === 'student') {
        this.issueForm.get('student_id')?.setValidators([Validators.required]);
        this.issueForm.get('teacher_id')?.clearValidators();
        this.issueForm.get('teacher_id')?.patchValue(null); // clear teacher
      } else if (value === 'teacher') {
        this.issueForm.get('teacher_id')?.setValidators([Validators.required]);
        this.issueForm.get('student_id')?.clearValidators();
        this.issueForm.get('student_id')?.patchValue(null); // clear student
      }

      this.issueForm.get('student_id')?.updateValueAndValidity();
      this.issueForm.get('teacher_id')?.updateValueAndValidity();
    });
  }

  initForm(): void {
    this.issueForm = this.fb.group({
      book_id: [null, Validators.required],
      issue_to: ['student', Validators.required],
      student_id: [null],
      teacher_id: [null],
      issue_date: ['', Validators.required],
      due_date: ['', Validators.required],
      return_date: [{ value: '', disabled: true }],
      issue_status: ['Issued', Validators.required],
      fine_amount: [0, [Validators.min(0)]],
      remarks: ['']
    });
  }

  loadBooks(): void {
    this.libraryService.getBooks({}).subscribe({
      next: (res) => { if (res.status === 'success' && res.data) this.books = res.data.books || []; }
    });
  }

  loadStudents(): void {
    this.studentService.getStudents({}).subscribe({
      next: (res) => { if (res.status === 'success' && res.data) this.students = res.data.students || []; }
    });
  }

  loadTeachers(): void {
    this.teacherService.getTeachers({ limit: 1000 }).subscribe({
      next: (res) => { if (res.status === 'success' && res.data) this.teachers = res.data.teachers || []; }
    });
  }

  loadIssue(id: string): void {
    this.libraryService.getIssuedBooks({ book_issue_id: id }).subscribe({
      next: (res) => {
        if (res.status === 'success' && res.data) {
          this.issueForm.patchValue({
            book_id: Number(res.data.book_id),
            issue_to: res.data.issue_to,
            student_id: res.data.student_id,
            teacher_id: res.data.teacher_id,
            issue_date: res.data.issue_date,
            due_date: res.data.due_date,
            return_date: res.data.return_date,
            issue_status: res.data.issue_status,
            fine_amount: res.data.fine_amount,
            remarks: res.data.remarks
          });
          this.issueForm.get('return_date')?.enable();
        }
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/app/library/issues']);
  }

  onSubmit(): void {
    if (this.issueForm.invalid) {
      this.issueForm.markAllAsTouched();
      return;
    }

    this.isSaving = true;
    const formData = this.issueForm.getRawValue();

    // Runtime checks
    if (formData.issue_to === 'student' && !formData.student_id) {
      alert('Please select a student!');
      this.isSaving = false;
      return;
    }
    if (formData.issue_to === 'teacher' && !formData.teacher_id) {
      alert('Please select a teacher!');
      this.isSaving = false;
      return;
    }

    if (this.isEditMode && formData.return_date) {
      // RETURN BOOK
      const payload = {
        book_issue_id: Number(this.issueId),
        return_date: formData.return_date,
        fine_amount: formData.fine_amount,
        remarks: formData.remarks
      };
      this.libraryService.returnBook(payload).subscribe({
        next: (res) => {
          this.isSaving = false;
          if (res.status === 'success') {
            alert(`Book returned successfully. Fine: ₹${res.fine_amount || 0}`);
            this.router.navigate(['/app/library/issues']);
          } else {
            alert(res.message || 'Failed to return book');
          }
        },
        error: () => {
          this.isSaving = false;
          alert('Error returning book');
        }
      });
    } else {
      // CREATE NEW ISSUE
      const payload: any = {
        book_id: formData.book_id,
        issue_date: formData.issue_date,
        due_date: formData.due_date,
        student_id: formData.issue_to === 'student' ? formData.student_id : null,
        teacher_id: formData.issue_to === 'teacher' ? formData.teacher_id : null
      };

      // Include only the relevant ID
      if (formData.issue_to === 'student') {
        payload.student_id = formData.student_id;
      } else if (formData.issue_to === 'teacher') {
        payload.teacher_id = formData.teacher_id;
      }

      console.log('Payload to backend:', payload); // debug log

      this.libraryService.issueBook(payload).subscribe({
        next: (res) => {
          this.isSaving = false;
          if (res.status === 'success') {
            this.router.navigate(['/app/library/issues']);
          } else {
            alert(res.message || 'Failed to issue book');
          }
        },
        error: () => {
          this.isSaving = false;
          alert('Error issuing book');
        }
      });
    }
  }
}
