import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { LibraryService } from '../../../shared/services/library.service';

@Component({
  selector: 'app-library-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './library-view.component.html',
  styleUrls: ['./library-view.component.scss']
})
export class LibraryViewComponent implements OnInit {
  book: any = null;
  issueHistory: any[] = [];
  loading = true;
  bookId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private libraryService: LibraryService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.bookId = params['id'] ? parseInt(params['id']) : null;
      if (this.bookId) {
        this.loadBook();
      } else {
        this.loading = false;
      }
    });
  }

  loadBook(): void {
    if (!this.bookId) return;
    this.loading = true;
    this.libraryService.getBook(this.bookId).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.book = response.data.book;
          this.issueHistory = response.data.issue_history || [];
        }
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  onEdit(): void {
    if (this.bookId) {
      this.router.navigate(['/app/library/edit', this.bookId]);
    }
  }
}
