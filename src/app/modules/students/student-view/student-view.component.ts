import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../../shared/services/student.service';

@Component({
  selector: 'app-student-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss']
})
export class StudentViewComponent implements OnInit {
  student: any = null;
  parents: any[] = [];
  loading = true;
  studentId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.studentId = params['id'] ? parseInt(params['id']) : null;
      if (this.studentId) {
        this.loadStudent();
      } else {
        this.loading = false;
      }
    });
  }

  loadStudent(): void {
    if (!this.studentId) return;
    this.loading = true;
    this.studentService.getStudent(this.studentId).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.student = response.data.student;
          this.parents = response.data.parents || [];
        }
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  onEdit(): void {
    if (this.studentId) {
      this.router.navigate(['/app/students/edit', this.studentId]);
    }
  }
}
