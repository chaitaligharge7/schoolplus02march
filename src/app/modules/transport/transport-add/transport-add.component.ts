import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TransportService } from '../../../shared/services/transport.service';

@Component({
  selector: 'app-transport-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './transport-add.component.html',
  styleUrls: ['./transport-add.component.scss']
})
export class TransportAddComponent implements OnInit {
  routeForm: FormGroup;
  isEditMode = false;
  routeId: number | null = null;
  isSaving = false;

  constructor(
    private fb: FormBuilder,
    private transportService: TransportService,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.routeForm = this.fb.group({
      route_name: ['', Validators.required],
      route_code: ['', Validators.required],
      start_location: ['', Validators.required],
      end_location: ['', Validators.required],
      route_distance: [0],
      route_fee: [0],
      route_status: [1]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.routeId = parseInt(params['id']);
        this.loadRoute();
      }
    });
  }

  loadRoute(): void {
    if (!this.routeId) return;
    
    this.transportService.getRoute(this.routeId).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          const route = response.data.route;
          this.routeForm.patchValue({
            route_name: route.route_name,
            route_code: route.route_code,
            start_location: route.route_start_point,
            end_location: route.route_end_point,
            route_distance: route.route_distance || 0,
            route_fee: route.route_fee || 0,
            route_status: route.route_status
          });
        }
      }
    });
  }

onSubmit(): void {
  console.log('Form submitted'); // debug
  console.log('Form valid?', this.routeForm.valid); // check form validity
  console.log('Form values:', this.routeForm.value); // see the form data

  if (this.routeForm.invalid) {
    console.warn('Form is invalid. Submission cancelled.');
    return;
  }

  this.isSaving = true;
  const formData = this.routeForm.value;

  if (this.isEditMode && this.routeId) {
    console.log('Updating route ID:', this.routeId, 'with data:', formData);

    this.transportService.updateRoute(this.routeId, formData).subscribe({
      next: (response) => {
        console.log('Update response:', response);
        this.isSaving = false;
        if (response.status === 'success') {
          console.log('Route updated successfully, navigating...');
          this.router.navigate(['/app/transport']);
        }
      },
      error: (err) => {
        console.error('Update route error:', err);
        this.isSaving = false;
      }
    });
  } else {
    console.log('Creating new route with data:', formData);

    this.transportService.createRoute(formData).subscribe({
      next: (response) => {
        console.log('Create response:', response);
        this.isSaving = false;
        if (response.status === 'success') {
          console.log('Route created successfully, navigating...');
          this.router.navigate(['/app/transport']);
        }
      },
      error: (err) => {
        console.error('Create route error:', err);
        this.isSaving = false;
      }
    });
  }
}

}

