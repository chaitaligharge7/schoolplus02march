import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  userForm: FormGroup;
  isEditMode = false;
  userId: number | null = null;
  isSaving = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      user_type: ['Admin', Validators.required],
      mobile: [''],
      is_active: [1]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.userId = parseInt(params['id']);
        this.loadUser();
      }
    });
  }

  onActiveChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.userForm.patchValue({ is_active: target?.checked ? 1 : 0 });
  }

  loadUser(): void {
    if (!this.userId) return;
    
    this.userService.getUser(this.userId).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          const user = response.data.user;
          this.userForm.patchValue({
            username: user.username,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            user_type: user.user_type,
            mobile: user.mobile || '',
            is_active: user.is_active
          });
        }
      }
    });
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      return;
    }

    this.isSaving = true;
    const formData = this.userForm.value;

    if (this.isEditMode && this.userId) {
      this.userService.updateUser(this.userId, formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.router.navigate(['/app/users']);
          }
        },
        error: () => {
          this.isSaving = false;
        }
      });
    } else {
      this.userService.createUser(formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.router.navigate(['/app/users']);
          }
        },
        error: () => {
          this.isSaving = false;
        }
      });
    }
  }
}

