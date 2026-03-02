import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessScheduleService } from '../../../shared/services/mess-schedule.service';
import { ToastService } from '../../../shared/services/toast.service';
import { AcademicYearService } from '../../../shared/services/academic-year.service';

@Component({
  selector: 'app-mess-schedule-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './mess-schedule-create.component.html',
  styleUrls: ['./mess-schedule-create.component.scss']
})
export class MessScheduleCreateComponent implements OnInit {
  scheduleForm: FormGroup;
  isEditMode = false;
  scheduleId: number | null = null;
  isLoading = false;
  isSaving = false;
  academicYears: any[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private messScheduleService: MessScheduleService,
    private toastService: ToastService,
    private academicYearService: AcademicYearService,
    
  ) {
    this.scheduleForm = this.fb.group({
      schedule_name: ['', Validators.required],
      week_start_date: [new Date().toISOString().split('T')[0], Validators.required],
      week_end_date: ['', Validators.required],
      status: ['active', Validators.required],
      academic_year_id: ['', Validators.required],  
      schedule_type: ['', Validators.required],         
      meals: this.fb.array([])
    });
  }

  get meals(): FormArray {
    return this.scheduleForm.get('meals') as FormArray;
  }

  ngOnInit(): void {
        this.loadAcademicYears();
        this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.scheduleId = +params['id'];
        this.loadSchedule();
      } else {
        this.addMeal();
      }
    });
  }
  loadAcademicYears(): void {
    this.academicYearService.getCurrentAcademicYearId().subscribe({
      next: (id) => {
        if (id != null && !this.isEditMode) {
          this.scheduleForm.patchValue({ academic_year_id: id });
        }
      }
    });
  }

  addMeal(): void {
  const mealForm = this.fb.group({
    meal_type: ['breakfast', Validators.required],
    meal_time: ['', Validators.required],
    meal_days: ['', Validators.required],
    meal_date: [new Date().toISOString().split('T')[0], Validators.required],
    menu_items: [''] 
  });
  this.meals.push(mealForm);
  }

  removeMeal(index: number): void {
    this.meals.removeAt(index);
  }


loadSchedule(): void {

  if (!this.scheduleId) return;
  this.isLoading = true;
  this.messScheduleService
    .getSchedules({ schedule_id: this.scheduleId })
    .subscribe({

      next: (response: any) => {
        if (response.status === 'success' &&
            response.data?.schedules?.length > 0) {
          const schedule = response.data.schedules[0];

          this.scheduleForm.patchValue({
            schedule_name: schedule.schedule_name,
            week_start_date: schedule.week_start_date,
            week_end_date: schedule.week_end_date,
            status: schedule.status,
            academic_year_id: schedule.academic_year_id,
            schedule_type: schedule.schedule_type
          });

          this.meals.clear();
          if (schedule.meals && schedule.meals.length > 0) {
            schedule.meals.forEach((meal: any) => {

              this.meals.push(
                this.fb.group({
                  meal_type: [meal.meal_type, Validators.required],
                  meal_time: [meal.meal_time, Validators.required],
                  meal_days: [
                    Array.isArray(meal.meal_days)
                      ? meal.meal_days.join(', ')
                      : meal.meal_days || '',
                    Validators.required
                  ],
                  meal_date: [
                    meal.meal_date,
                    Validators.required
                  ],
                  menu_items: [
                    Array.isArray(meal.menu_items)
                      ? meal.menu_items.join(', ')
                      : meal.menu_items || ''
                  ]
                })
              );

            });

          } else {
            this.addMeal();
          }

        } else {
          this.toastService.warning('Schedule not found');
        }

        this.isLoading = false;
      },

      error: () => {
        this.toastService.error('Failed to load schedule details');
        this.isLoading = false;
      }

    });
}

onSubmit(): void {
  if (this.scheduleForm.invalid || this.meals.length === 0) {
    this.scheduleForm.markAllAsTouched();
    if (this.meals.length === 0) {
      this.toastService.warning('Please add at least one meal');
    }
    return;
  }

  this.isSaving = true;

  const formData = {
    ...this.scheduleForm.value,
    meals: this.meals.controls.map(mealControl => {
      const m = mealControl.value;
      return {
        meal_type: m.meal_type,
        meal_time: m.meal_time,
        meal_days: m.meal_days,
        meal_date: m.meal_date,
        schedule_id: this.scheduleId || null,
        menu_items: m.menu_items.split(',').map((i: string) => i.trim())
      };
    })
  };

  if (this.isEditMode && this.scheduleId) {
    formData.schedule_id = this.scheduleId;
   this.messScheduleService.updateSchedule(this.scheduleId!, formData).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.toastService.success('Mess schedule updated successfully');
          this.router.navigate(['/app/mess-schedules']);
        } else {
          this.toastService.error(response.message || 'Failed to update schedule');
        }
        this.isSaving = false;
      },
      error: () => {
        this.toastService.error('Failed to update schedule');
        this.isSaving = false;
      }
    });
  } else {
  
    this.messScheduleService.createSchedule(formData).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.toastService.success('Mess schedule created successfully');
          this.router.navigate(['/app/mess-schedules']);
        } else {
          this.toastService.error(response.message || 'Failed to create schedule');
        }
        this.isSaving = false;
      },
      error: () => {
        this.toastService.error('Failed to create schedule');
        this.isSaving = false;
      }
    });
  }
}
  cancel(): void {
    this.router.navigate(['/app/mess-schedules']);
  }
}

