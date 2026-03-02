import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConnectUsService } from '../../shared/services/connect-us.service';
import { ToastService } from '../../shared/services/toast.service';

@Component({
  selector: 'app-connect-us',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './connect-us.component.html',
  styleUrls: ['./connect-us.component.scss']
})
export class ConnectUsComponent implements OnInit {
  connectUsForm: FormGroup;
  isSaving = false;
  isLoading = false;
  connectUsData: any = null;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private connectUsService: ConnectUsService,
    private toastService: ToastService
  ) {
    this.connectUsForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      facebook_url: [''],
      instagram_url: [''],
      twitter_url: [''],
      linkedin_url: [''],
      whatsapp_url: [''],
      youtube_url: [''],
      is_active: [1]
    });
  }

  ngOnInit(): void {
    this.loadConnectUs();
  }

  loadConnectUs(): void {
    this.isLoading = true;
    this.connectUsService.getConnectUs().subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.status === 'success' && response.data?.connect_us) {
          this.connectUsData = response.data.connect_us;
          this.isEditMode = true;
          this.connectUsForm.patchValue({
            email: this.connectUsData.email || '',
            phone: this.connectUsData.phone || '',
            facebook_url: this.connectUsData.facebook_url || '',
            instagram_url: this.connectUsData.instagram_url || '',
            twitter_url: this.connectUsData.twitter_url || '',
            linkedin_url: this.connectUsData.linkedin_url || '',
            whatsapp_url: this.connectUsData.whatsapp_url || '',
            youtube_url: this.connectUsData.youtube_url || '',
            is_active: this.connectUsData.is_active ?? 1
          });
        } else {
          this.isEditMode = false;
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.toastService.showError('Error loading Connect Us data');
      }
    });
  }

  onSubmit(): void {
    if (this.connectUsForm.invalid) {
      this.connectUsForm.markAllAsTouched();
      return;
    }

    this.isSaving = true;
    const formData = this.connectUsForm.value;

    if (this.isEditMode && this.connectUsData) {
      formData.connect_us_id = this.connectUsData.connect_us_id;
      this.connectUsService.updateConnectUs(formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.toastService.showSuccess('Connect Us updated successfully');
            this.loadConnectUs();
          } else {
            this.toastService.showError(response.message || 'Error updating Connect Us');
          }
        },
        error: (error) => {
          this.isSaving = false;
          this.toastService.showError('Error updating Connect Us');
        }
      });
    } else {
      this.connectUsService.createConnectUs(formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.toastService.showSuccess('Connect Us created successfully');
            this.loadConnectUs();
          } else {
            this.toastService.showError(response.message || 'Error creating Connect Us');
          }
        },
        error: (error) => {
          this.isSaving = false;
          this.toastService.showError('Error creating Connect Us');
        }
      });
    }
  }
}

