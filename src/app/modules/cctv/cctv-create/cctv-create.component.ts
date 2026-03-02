import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CctvService } from "../../../shared/services/cctv.service";
import { ToastService } from "../../../shared/services/toast.service";

@Component({
  selector: "app-cctv-create",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./cctv-create.component.html",
  styleUrls: ["./cctv-create.component.scss"],
})
export class CctvCreateComponent implements OnInit {
  cctvForm: FormGroup;
  isEditMode = false;
  cctvId: number | null = null;
  isLoading = false;
  isSaving = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private cctvService: CctvService,
    private toastService: ToastService,
  ) {
    this.cctvForm = this.fb.group({
      camera_name: ["", Validators.required],
      camera_location: ["", Validators.required],
      camera_ip: [
        "",
        [Validators.required, Validators.pattern(/^(\d{1,3}\.){3}\d{1,3}$/)],
      ],
      port: [
        80,
        [Validators.required, Validators.min(1), Validators.max(65535)],
      ],
      username: [""],
      password: [""],
      camera_type: ["dome", Validators.required],
      camera_status: ["active", Validators.required],
      description: [""],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.cctvId = +params["id"];
        this.loadCctv();
      }
    });
  }

  loadCctv(): void {
    if (!this.cctvId) return;

    this.isLoading = true;
    this.cctvService.getCctvList({ cctv_id: this.cctvId }).subscribe({
      next: (response) => {
        if (
          response.status === "success" &&
          response.data?.cameras?.length > 0
        ) {
          // const camera = response.data.cameras[0];
          const camera = response.data.cameras.find(
            (cam: any) => cam.camera_id == this.cctvId,
          );

          this.cctvForm.patchValue({
            camera_name: camera.camera_name,
            camera_location: camera.camera_location,
            camera_ip: camera.camera_ip,
            port: camera.port,
            username: camera.username || "",
            password: "", // Don't load password for security
            camera_type: camera.camera_type,
            camera_status: camera.camera_status,
            description: camera.description || "",
          });
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error("Failed to load CCTV camera details");
        this.isLoading = false;
      },
    });
  }

  // onSubmit(): void {
  //   if (this.cctvForm.invalid) {
  //     this.cctvForm.markAllAsTouched();
  //     return;
  //   }

  //   this.isSaving = true;
  //   const formData = { ...this.cctvForm.value };

  //   // Don't send empty password on edit if not changed
  //   if (this.isEditMode && !formData.password) {
  //     delete formData.password;
  //   }

  //   if (this.isEditMode && this.cctvId) {
  //     formData.cctv_id = this.cctvId;
  //   }

  //   this.cctvService.createCctv(formData).subscribe({
  //     next: (response) => {
  //       if (response.status === "success") {
  //         this.toastService.success(
  //           `CCTV camera ${this.isEditMode ? "updated" : "created"} successfully`,
  //         );
  //         this.router.navigate(["/app/cctv"]);
  //       } else {
  //         this.toastService.error(
  //           response.message ||
  //             `Failed to ${this.isEditMode ? "update" : "create"} camera`,
  //         );
  //       }
  //       this.isSaving = false;
  //     },
  //     error: () => {
  //       this.toastService.error(
  //         `Failed to ${this.isEditMode ? "update" : "create"} camera`,
  //       );
  //       this.isSaving = false;
  //     },
  //   });
  // }

  onSubmit(): void {
    if (this.cctvForm.invalid) {
      this.cctvForm.markAllAsTouched();
      return;
    }

    this.isSaving = true;
    const formData = { ...this.cctvForm.value };

    // Remove empty password in edit mode
    if (this.isEditMode && !formData.password) {
      delete formData.password;
    }

    if (this.isEditMode && this.cctvId) {
      formData.camera_id = this.cctvId;

      this.cctvService.updateCctv(formData).subscribe({
        next: (response) => {
          if (response.status === "success") {
            this.toastService.success("CCTV camera updated successfully");
            this.router.navigate(["/app/cctv"]);
          } else {
            this.toastService.error(
              response.message || "Failed to update camera",
            );
          }
          this.isSaving = false;
        },
        error: () => {
          this.toastService.error("Failed to update camera");
          this.isSaving = false;
        },
      });
    } else {
      this.cctvService.createCctv(formData).subscribe({
        next: (response) => {
          if (response.status === "success") {
            this.toastService.success("CCTV camera created successfully");
            this.router.navigate(["/app/cctv"]);
          } else {
            this.toastService.error(
              response.message || "Failed to create camera",
            );
          }
          this.isSaving = false;
        },
        error: () => {
          this.toastService.error("Failed to create camera");
          this.isSaving = false;
        },
      });
    }
  }

  testConnection(): void {
    if (
      !this.cctvForm.get("camera_ip")?.value ||
      !this.cctvForm.get("port")?.value
    ) {
      this.toastService.warning("Please enter IP address and port first");
      return;
    }

    const formData = {
      camera_ip: this.cctvForm.get("camera_ip")?.value,
      port: this.cctvForm.get("port")?.value,
      username: this.cctvForm.get("username")?.value,
      password: this.cctvForm.get("password")?.value,
    };

    // this.cctvService.checkCctvStatus(0)
    if (!this.cctvId) {
      this.toastService.warning("Please save camera first");
      return;
    }

    this.cctvService
      .checkCctvStatus(this.cctvId)

      .subscribe({
        next: (response) => {
          if (response.status === "success") {
            this.toastService.success("Connection test successful");
          } else {
            this.toastService.error("Connection test failed");
          }
        },
        error: () => {
          this.toastService.error("Connection test failed");
        },
      });
  }

  cancel(): void {
    this.router.navigate(["/app/cctv"]);
  }
}
