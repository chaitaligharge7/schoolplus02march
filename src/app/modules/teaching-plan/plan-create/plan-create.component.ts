import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { TeachingPlanService } from '../../../shared/services/teaching-plan.service';
import { ClassService } from '../../../shared/services/class.service';
import { SubjectService } from '../../../shared/services/subject.service';
import { TeacherService } from '../../../shared/services/teacher.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-plan-create',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './plan-create.component.html',
  styleUrls: ['./plan-create.component.scss']
})
export class PlanCreateComponent implements OnInit {
  model: any = { plan_title: '', plan_content: '', plan_date: new Date().toISOString().slice(0, 10), teacher_id: null, class_id: null, subject_id: null, plan_file:null };
  classes: any[] = []; subjects: any[] = []; teachers: any[] = [];
  loading = false;
  editId: number | null = null;

  constructor(
    private planService: TeachingPlanService,
    private classService: ClassService,
    private subjectService: SubjectService,
    private teacherService: TeacherService,
    private toast: ToastService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.editId = +id;
      this.planService.getPlan(this.editId).subscribe({
        next: (res) => {
          if (res.status === 'success' && res.data?.plan) {
            this.model = { ...res.data.plan };

            if (this.model.class_id) {
              this.loadSubjects(this.model.class_id);
            }
          }
        }
      });
    }

    this.classService.getClasses(200).subscribe(r => {
      if (r.status === 'success' && r.data?.classes) {
        this.classes = r.data.classes;
      }
    });

    this.teacherService.getTeachers(200).subscribe(r => {
      if (r.status === 'success' && r.data?.teachers) {
        this.teachers = r.data.teachers;
      }
    });
  }

  loadSubjects(classId: number): void {
    if (!classId) {
      this.subjects = [];
      this.model.subject_id = null;
      return;
    }

    this.classService.getClassSubjects(classId).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.subjects = response.data.subjects || [];
        } else {
          this.subjects = [];
        }
      }
    });
  }
onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    this.model.plan_file = input.files[0];  
  }
}

  save(): void {
    if (!this.model.plan_title?.trim()) {
      this.toast.show('Title is required', 'error');
      return;
    }

    this.loading = true;

    const formData = new FormData();

    // Append all main fields
    Object.keys(this.model).forEach(key => {
      if (key !== 'plan_file' && this.model[key] !== null && this.model[key] !== '') {
        formData.append(key, this.model[key]);
      }
    });

    // Append the file if selected
    if (this.model.plan_file) {
      formData.append('plan_file', this.model.plan_file);
    }

    // Append plan_id if editing
    if (this.editId) {
      formData.append('plan_id', this.editId.toString());
    }

    const obs = this.editId
      ? this.planService.updatePlan(formData)
      : this.planService.createPlan(formData);

    obs.subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === 'success') {
          this.toast.show(this.editId ? 'Plan updated' : 'Plan created', 'success');
          this.router.navigate(['/app/teaching-plan/list']);
        } else {
          this.toast.show(res.message || 'Error', 'error');
        }
      },
      error: (err) => {
        this.loading = false;
        console.error('API error', err);
        this.toast.show('Error', 'error');
      }
    });
  }
  
  cancel(): void { this.router.navigate(['/app/teaching-plan/list']); }
}
