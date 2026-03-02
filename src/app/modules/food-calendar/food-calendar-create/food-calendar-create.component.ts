import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodCalendarService } from '../../../shared/services/food-calendar.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-food-calendar-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './food-calendar-create.component.html',
  styleUrls: ['./food-calendar-create.component.scss']
})
export class FoodCalendarCreateComponent implements OnInit {
  calendarForm: FormGroup;
  isEditMode = false;
  calendarId: number | null = null;
  isLoading = false;
  isSaving = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private foodCalendarService: FoodCalendarService,
    private toastService: ToastService
  ) {
   
      this.calendarForm = this.fb.group({
      meal_date: [new Date().toISOString().split('T')[0], Validators.required],
      meal_type: ['breakfast', Validators.required],
      meal_name: ['', Validators.required],
      menu_items: ['', Validators.required],  
      notes: ['all', Validators.required],   
      status: ['active', Validators.required]
   });

  }

 ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const id = params.get('id');
    this.calendarForm.reset({
      meal_date: new Date().toISOString().split('T')[0],
      meal_type: 'breakfast',
      meal_name: '',
      menu_items: '',
      notes: 'all',
      status: 'active'
    });

    if (id) {
      this.isEditMode = true;
      this.calendarId = +id;
      this.loadCalendar(); 
    } else {
      this.isEditMode = false;
      this.calendarId = null;
    }
  });
}

loadCalendar(): void {
  if (!this.calendarId) return;

  this.isLoading = true;
  this.foodCalendarService.getFoodCalendar({ calendar_id: this.calendarId }).subscribe({
    next: (response) => {
    
      if (response.status === 'success' && response.data?.foods?.length > 0) {
        const calendar = response.data.foods.find((f: any) => f.food_id === this.calendarId);

        if (calendar) {
          this.calendarForm.patchValue({
            meal_date: calendar.meal_date,
            meal_type: calendar.meal_type,
            meal_name: calendar.meal_name,
            menu_items: calendar.meal_description,
            notes: calendar.meal_for,
            status: calendar.status
          });
        } else {
        
        }
      } else {
       
      }
      this.isLoading = false;
    },
    error: (err) => {
      this.toastService.error('Failed to load food calendar details');
      this.isLoading = false;
    }
  });
}

  onSubmit(): void {
  if (this.calendarForm.invalid) {
    this.calendarForm.markAllAsTouched();
    return;
  }

  this.isSaving = true;
  const formData: any = {
  meal_date: this.calendarForm.value.meal_date,
  meal_type: this.calendarForm.value.meal_type,
  meal_name: this.calendarForm.value.meal_name,
  meal_description: this.calendarForm.value.menu_items, 
  meal_for: this.calendarForm.value.notes,              
  status: this.calendarForm.value.status
};


  if (this.isEditMode && this.calendarId) {
    formData.food_id = this.calendarId;
    this.foodCalendarService.updateFoodCalendar(this.calendarId, formData).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.toastService.success('Food calendar updated successfully');
          this.router.navigate(['/app/food-calendar']);
        } else {
          this.toastService.error(response.message || 'Failed to update food calendar');
        }
        this.isSaving = false;
      },
      error: (err) => {
        this.toastService.error('Failed to update food calendar');
        this.isSaving = false;
      }
    });
  } else {
    this.foodCalendarService.createFoodCalendar(formData).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.toastService.success('Food calendar created successfully');
          this.router.navigate(['/app/food-calendar']);
        } else {
          this.toastService.error(response.message || 'Failed to create food calendar');
        }
        this.isSaving = false;
      },
      error: (err) => {
        this.toastService.error('Failed to create food calendar');
        this.isSaving = false;
      }
    });
  }
}
 
  cancel(): void {
    this.router.navigate(['/app/food-calendar']);
  }
}

