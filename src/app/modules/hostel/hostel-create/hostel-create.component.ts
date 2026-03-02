import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { HostelService } from "../../../shared/services/hostel.service";
import { TapObserver } from "rxjs/internal/operators/tap";
import { ToastService } from "../../../shared/services/toast.service";

@Component({
  selector: "app-hostel-create",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./hostel-create.component.html",
  styleUrls: ["./hostel-create.component.scss"],
})
export class HostelCreateComponent implements OnInit {
  hostelForm: FormGroup;
  isEditMode = false;
  hostelId: number | null = null;
  isSaving = false;

  constructor(
    private fb: FormBuilder,
    private hostelService: HostelService,
    public router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService,
  ) {
    this.hostelForm = this.fb.group({
      hostel_name: ["", Validators.required],
      hostel_code: ["", Validators.required],
      hostel_type: ["Boys", Validators.required],
      gender: ["Male", Validators.required],
      address: [""],
      warden_name: [""],
      warden_contact: [""],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.hostelId = parseInt(params["id"]);
        this.loadHostel();
      }
    });
  }

  loadHostel(): void {
    if (!this.hostelId) return;

    this.hostelService.getHostel(this.hostelId).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          const hostel = response.data.hostel;
          this.hostelForm.patchValue({
            hostel_name: hostel.hostel_name,
            hostel_code: hostel.hostel_code,
            hostel_type: hostel.hostel_type,
            gender: hostel.gender,
            address: hostel.address,
            warden_name: hostel.warden_name,
            warden_contact: hostel.warden_contact,
          });
        }
      },
    });
  }

  onSubmit(): void {
    if (this.hostelForm.invalid) {
      return;
    }

    this.isSaving = true;
    const formData = this.hostelForm.value;

    if (this.isEditMode && this.hostelId) {
      this.hostelService.updateHostel(this.hostelId, formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === "success") {
            this.router.navigate(["/app/hostel"]);
            this.toastService.show(
              "Hostel Details updated successfully",
              "success",
            );
          }
        },
        error: () => {
          this.isSaving = false;
        },
      });
    } else {
      this.hostelService.createHostel(formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === "success") {
            this.router.navigate(["/app/hostel"]);
          }
        },
        error: () => {
          this.isSaving = false;
          this.toastService.show("Error updating subject", "error");
        },
      });
    }
  }
}
