import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LibraryService } from '../../../shared/services/library.service';

@Component({
  selector: 'app-library-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './library-add.component.html',
  styleUrls: ['./library-add.component.scss']
})
export class LibraryAddComponent implements OnInit {
  bookForm: FormGroup;
  isEditMode = false;
  bookId: number | null = null;
  isSaving = false;

  constructor(
    private fb: FormBuilder,
    private libraryService: LibraryService,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.bookForm = this.fb.group({
      book_title: ['', Validators.required],
      isbn: [''],
      author: [''],
      publisher: [''],
      category: [''],
      total_copies: [1, [Validators.required, Validators.min(1)]],
      available_copies: [1, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.bookId = parseInt(params['id']);
        this.loadBook();
      }
    });
  }

  loadBook(): void {
    if (!this.bookId) return;
    
    this.libraryService.getBook(this.bookId).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          const book = response.data.book;
          this.bookForm.patchValue({
            book_title: book.book_title,
            isbn: book.isbn || '',
            author: book.author || '',
            publisher: book.publisher || '',
            category: book.category || '',
            total_copies: book.total_copies,
            available_copies: book.available_copies
          });
        }
      }
    });
  }

  onSubmit(): void {
    if (this.bookForm.invalid) {
      return;
    }

    this.isSaving = true;
    const formData = this.bookForm.value;

    if (this.isEditMode && this.bookId) {
      this.libraryService.updateBook(this.bookId, formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.router.navigate(['/app/library']);
          }
        },
        error: () => {
          this.isSaving = false;
        }
      });
    } else {
      this.libraryService.createBook(formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.router.navigate(['/app/library']);
          }
        },
        error: () => {
          this.isSaving = false;
        }
      });
    }
  }
}

