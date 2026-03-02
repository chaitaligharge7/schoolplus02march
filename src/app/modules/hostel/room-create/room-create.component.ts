import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HostelService } from '../../../shared/services/hostel.service';

@Component({
  selector: 'app-room-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.scss']
})
export class RoomCreateComponent implements OnInit {
  roomForm: FormGroup;
  isEditMode = false;
  roomId: number | null = null;
  hostelId: number | null = null;
  isSaving = false;

  constructor(
    private fb: FormBuilder,
    private hostelService: HostelService,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.roomForm = this.fb.group({
      room_number: ['', Validators.required],
      room_type: ['Single', Validators.required],
      room_capacity: [1, [Validators.required, Validators.min(1)]],
      room_facilities: ['']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['hostel_id']) {
        this.hostelId = parseInt(params['hostel_id']);
      }
      if (params['id']) {
        this.isEditMode = true;
        this.roomId = parseInt(params['id']);
        this.loadRoom();
      }
    });
  }

  loadRoom(): void {
    if (!this.roomId) return;
    
    this.hostelService.getRoom(this.roomId).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          const room = response.data.room;
          this.hostelId = room.hostel_id;
          this.roomForm.patchValue({
            room_number: room.room_number,
            room_type: room.room_type,
            room_capacity: room.room_capacity,
            room_facilities: room.room_facilities || ''
          });
        }
      }
    });
  }

  onSubmit(): void {
    if (this.roomForm.invalid || !this.hostelId) {
      return;
    }

    this.isSaving = true;
    const formData = {
      ...this.roomForm.value,
      hostel_id: this.hostelId
    };

    if (this.isEditMode && this.roomId) {
      this.hostelService.updateRoom(this.roomId, formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.router.navigate(['/app/hostel']);
          }
        },
        error: () => {
          this.isSaving = false;
        }
      });
    } else {
      this.hostelService.createRoom(formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.router.navigate(['/app/hostel']);
          }
        },
        error: () => {
          this.isSaving = false;
        }
      });
    }
  }
}

