import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SyllabusService } from '../../../shared/services/syllabus.service';
import { ToastService } from '../../../shared/services/toast.service';
import { DateFormatPipe } from '../../../shared/pipes/date-format.pipe';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-syllabus-view',
  standalone: true,
  imports: [CommonModule, DateFormatPipe, RouterModule],
  templateUrl: './syllabus-view.component.html',
  styleUrls: ['./syllabus-view.component.scss']
})
export class SyllabusViewComponent implements OnInit {
  syllabus: any = null;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private syllabusService: SyllabusService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.loadSyllabus(+id);
    }
  }

  loadSyllabus(id: number): void {
    this.isLoading = true;
    this.syllabusService.getSyllabusById(id).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.status === 'success' && response.data) {
          this.syllabus = response.data.syllabus;
        }
      },
      error: () => {
        this.isLoading = false;
        this.toastService.show('Error loading syllabus', 'error');
      }
    });
  }

  downloadSyllabus(): void {
    if (this.syllabus?.syllabus_file) {
      const path = this.syllabus.syllabus_file;
      const url = path.startsWith('http') ? path : `${environment.apiUrl}/download.php?file=${encodeURIComponent(path)}`;
      window.open(url, '_blank');
    }
  }
}

