import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LibraryService } from '../../../shared/services/library.service';

@Component({
  selector: 'app-library-issues',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './library-issues.component.html',
  styleUrls: ['./library-issues.component.scss']
})
export class LibraryIssuesComponent implements OnInit {
  issuedBooks: any[] = [];
  isLoading = false;
  searchForm: FormGroup;
  pagination: any = {
    page: 1,
    limit: 20,
    total: 0,
    pages: 0
  };

  Math = Math;

  constructor(
    private fb: FormBuilder,
    private libraryService: LibraryService
  ) {
    this.searchForm = this.fb.group({
      search: [''],
      student_id: [null],
      teacher_id: [null],
      book_id: [null]
    });
  }

  ngOnInit(): void {
    this.loadIssuedBooks();
  }

  loadIssuedBooks(): void {
    this.isLoading = true;
    const params = {
      page: this.pagination.page,
      limit: this.pagination.limit,
      ...this.searchForm.value
    };

    this.libraryService.getIssuedBooks(params).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.issuedBooks = response.data.issued_books || [];
          this.pagination = response.data.pagination || this.pagination;
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading issued books:', error);
        this.isLoading = false;
      }
    });
  }

  onSearch(): void {
    this.pagination.page = 1;
    this.loadIssuedBooks();
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadIssuedBooks();
  }

  returnBook(issueId: number): void {
    if (confirm('Are you sure you want to return this book?')) {
      this.libraryService.returnBook({ book_issue_id: issueId }).subscribe({
        next: (response) => {
          if (response.status === 'success') {
            alert('Book returned successfully!');
            this.loadIssuedBooks();
          } else {
            alert(response.message || 'Failed to return book');
          }
        },
        error: (error) => {
          console.error('Error returning book:', error);
          alert(error.error?.message || 'An error occurred');
        }
      });
    }
  }

  isOverdue(dueDate: string): boolean {
    return new Date(dueDate) < new Date();
  }
}

