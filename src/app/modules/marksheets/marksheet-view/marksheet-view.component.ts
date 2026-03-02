import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MarksheetService } from '../../../shared/services/marksheet.service';
import { ToastService } from '../../../shared/services/toast.service';
import { CurrencyFormatPipe } from '../../../shared/pipes/currency-format.pipe';
import { DateFormatPipe } from '../../../shared/pipes/date-format.pipe';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-marksheet-view',
  standalone: true,
  imports: [CommonModule, CurrencyFormatPipe, DateFormatPipe, RouterModule],
  templateUrl: './marksheet-view.component.html',
  styleUrls: ['./marksheet-view.component.scss']
})
export class MarksheetViewComponent implements OnInit {
  marksheet: any = null;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private marksheetService: MarksheetService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.loadMarksheet(+id);
    }
  }

  loadMarksheet(id: number): void {
    this.isLoading = true;
    this.marksheetService.getMarksheet(id).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.status === 'success' && response.data) {
          this.marksheet = response.data.marksheet;
          if (typeof window !== 'undefined' && window.location.hash === '#print') {
            setTimeout(() => this.print(), 600);
          }
        }
      },
      error: () => {
        this.isLoading = false;
        this.toastService.show('Error loading marksheet', 'error');
      }
    });
  }

  downloadMarksheet(): void {
    if (this.marksheet?.marksheet_file) {
      const path = this.marksheet.marksheet_file;
      const url = path.startsWith('http') ? path : `${environment.apiUrl}/download.php?file=${encodeURIComponent(path)}`;
      window.open(url, '_blank');
    }
  }

  print(): void {
    window.print();
  }
}

