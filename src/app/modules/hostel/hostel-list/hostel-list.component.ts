import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HostelService } from "../../../shared/services/hostel.service";
import { ToastService } from "../../../shared/services/toast.service";
import { HostelSliderDetailComponent } from "../hostel-slider-details/hostel-slider-detail.component";

@Component({
  selector: "app-hostel-list",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HostelSliderDetailComponent,
  ],
  templateUrl: "./hostel-list.component.html",
  styleUrls: ["./hostel-list.component.scss"],
})
export class HostelListComponent implements OnInit {
  hostels: any[] = [];
  rooms: any[] = [];
  isLoading = false;
  searchForm: FormGroup;
  selectedHostel: any = null;
  sliderVisible = false;
  selectedRoom: any = null;

  pagination: any = {
    page: 1,
    limit: 20,
    total: 0,
    pages: 0,
  };

  Math = Math;

  constructor(
    private fb: FormBuilder,
    private hostelService: HostelService,
    private toastService: ToastService,
  ) {
    this.searchForm = this.fb.group({
      search: [""],
      // hostel_id: [null]
    });
  }
  openRoomSlider(room: any): void {
    this.selectedRoom = room;
    this.sliderVisible = true;
  }

  ngOnInit(): void {
    this.loadHostels();
  }

  loadHostels(): void {
    this.isLoading = true;
    this.hostelService.getHostels().subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.hostels = response.data.hostels || [];
          if (this.hostels.length > 0 && !this.selectedHostel) {
            this.selectedHostel = this.hostels[0];
            this.loadRooms(this.selectedHostel.hostel_id);
          }
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading hostels:", error);
        this.isLoading = false;
      },
    });
  }

  loadRooms(hostelId: number): void {
    this.isLoading = true;
    const params = {
      page: this.pagination.page,
      limit: this.pagination.limit,
      hostel_id: hostelId,
      ...this.searchForm.value,
    };

    this.hostelService.getRooms(params).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.rooms = response.data.rooms || [];
          this.pagination = response.data.pagination || this.pagination;
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading rooms:", error);
        this.isLoading = false;
      },
    });
  }
  deleteHostel(id: number): void {
    if (!id) {
      return;
    }

    const confirmDelete = confirm(
      "Are you sure you want to delete this hostel?",
    );

    if (!confirmDelete) {
      return;
    }

    this.hostelService.deleteHostel(id).subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.toastService.success("Hostel deleted successfully");

          // Refresh list OR re-fetch data
          this.loadHostels();
        } else {
          this.toastService.error(
            response.message || "Failed to delete hostel",
          );
        }
      },
      error: () => {
        this.toastService.error("Something went wrong while deleting hostel");
      },
    });
  }

  onHostelSelect(hostel: any): void {
    this.selectedHostel = hostel;
    this.pagination.page = 1;
    this.loadRooms(hostel.hostel_id);
  }

  onSearch(): void {
    this.pagination.page = 1;
    if (this.selectedHostel) {
      this.loadRooms(this.selectedHostel.hostel_id);
    }
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    if (this.selectedHostel) {
      this.loadRooms(this.selectedHostel.hostel_id);
    }
  }

  deleteRoom(roomId: number): void {
    if (confirm("Are you sure you want to delete this room?")) {
      this.hostelService.deleteRoom(roomId).subscribe({
        next: (response) => {
          if (response.status === "success") {
            this.loadRooms(this.selectedHostel.hostel_id);
          }
        },
        error: (error) => {
          console.error("Error deleting room:", error);
        },
      });
    }
  }
}
