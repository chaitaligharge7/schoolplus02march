import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from "@angular/core";
import { HostelService } from "../../../shared/services/hostel.service";
import { ToastService } from "../../../shared/services/toast.service";
import { DetailSliderComponent } from "../../../shared/components/detail-slider/detail-slider.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
export type HostelRoomSliderTab = "profile" | "details";

@Component({
  selector: "app-hostel-slider-detail",
  standalone: true,
  imports: [CommonModule, FormsModule, DetailSliderComponent],
  templateUrl: "./hostel-slider-detail.component.html",
  styleUrl: "./hostel-slider-detail.component.scss",
})
export class HostelSliderDetailComponent implements OnChanges {
  @Input() visible = false;
  @Input() HostelRoom: any = null;
  @Output() close = new EventEmitter<void>();

  tabs: { id: HostelRoomSliderTab; label: string; icon: string }[] = [
    { id: "profile", label: "Profile", icon: "bi-journal-text" },
    { id: "details", label: "Details", icon: "bi-info-circle" },
  ];
  activeTab: HostelRoomSliderTab = "profile";
  loading = false;
  profileData: any = null;

  constructor(
    private hostelservice: HostelService,
    private toast: ToastService,
  ) {}

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['HostelRoom'] && this.HostelRoom && this.visible) {
  //     this.activeTab = 'profile';
  //     this.loadProfile();
  //   }
  //   if (changes['visible'] && this.visible && this.HostelRoom) {
  //     this.activeTab = 'profile';
  //     this.loadProfile();
  //   }
  // }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.visible && this.HostelRoom?.room_id) {
      this.activeTab = "profile";
      this.loadProfile();
    }
  }

  onClose(): void {
    this.close.emit();
  }

  setTab(tab: HostelRoomSliderTab): void {
    this.activeTab = tab;
    if (!this.HostelRoom) return;
    if (tab === "profile" || tab === "details") this.loadProfile();
  }

  // loadProfile(): void {
  //   if (!this.HostelRoom?.room_id) return;
  //   this.loading = true;
  //   this.hostelservice.getRoom(this.HostelRoom.room_id).subscribe({
  //     next: (res) => {
  //       this.loading = false;
  //       this.profileData = (res.status === 'success' && res.data?.HostelRoom) ? res.data.HostelRoom : this.HostelRoom;
  //     },
  //     error: () => { this.loading = false; this.toast.show('Error loading HostelRoom', 'error'); }
  //   });
  // }

  //   loadProfile(): void {
  //     if (!this.HostelRoom?.room_id) return;

  //     this.loading = true;

  //     this.hostelservice.getRoom(this.HostelRoom.room_id).subscribe({
  //       next: (res) => {
  //         this.loading = false;

  //         if (res.status === "success" && res.data?.room) {
  //           this.profileData ={ res.data.room,    occupied: Number(res.data.occupied) || 0
  // }; // ✅ CORRECT
  //         } else {
  //           this.profileData = this.HostelRoom;
  //         }
  //       },
  //       error: () => {
  //         this.loading = false;
  //         this.toast.show("Error loading room details", "error");
  //       },
  //     });
  //   }

  loadProfile(): void {
    if (!this.HostelRoom?.room_id) return;

    this.loading = true;

    this.hostelservice.getRoom(this.HostelRoom.room_id).subscribe({
      next: (res) => {
        this.loading = false;

        if (res.status === "success" && res.data?.room) {
          this.profileData = {
            ...this.HostelRoom, // ✅ keep occupied from list
            ...res.data.room, // ✅ update room details
          };
        } else {
          this.profileData = this.HostelRoom;
        }
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error loading room details", "error");
      },
    });
  }
}
