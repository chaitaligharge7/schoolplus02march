import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassworkService } from '../../../shared/services/classwork.service';
import { ToastService } from '../../../shared/services/toast.service';
import { DateFormatPipe } from '../../../shared/pipes/date-format.pipe';

@Component({
  selector: 'app-classwork-view',
  standalone: true,
  imports: [CommonModule, DateFormatPipe],
  templateUrl: './classwork-view.component.html',
  styleUrls: ['./classwork-view.component.scss']
})
export class ClassworkViewComponent implements OnInit {
  classwork: any = null;
  submissions: any[] = [];
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private classworkService: ClassworkService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.loadClasswork(+id);
      this.loadSubmissions(+id);
    }
  }

  loadClasswork(id: number): void {
    // For now, we'll get classwork from list, but ideally should have a get endpoint
    this.isLoading = true;
    this.classworkService.getClasswork({}).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.status === 'success' && response.data) {
          this.classwork = response.data.classwork.find((cw: any) => cw.classwork_id === id);
        }
      },
      error: () => {
        this.isLoading = false;
        this.toastService.show('Error loading classwork', 'error');
      }
    });
  }

  loadSubmissions(classworkId: number): void {
    this.classworkService.getSubmissions(classworkId).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.submissions = response.data.submissions || [];
        }
      }
    });
  }

  downloadFile(filePath: string): void {
    if (filePath) {
      window.open(filePath, '_blank');
    }
  }
}

