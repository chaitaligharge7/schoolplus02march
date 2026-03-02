import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailSliderComponent } from '../../../shared/components/detail-slider/detail-slider.component';
import { BranchService } from '../../../shared/services/branch.service';
import { ToastService } from '../../../shared/services/toast.service';

export type BranchSliderTab = 'profile' | 'contact';

@Component({
  selector: 'app-branch-detail-slider',
  standalone: true,
  imports: [CommonModule, DetailSliderComponent],
  templateUrl: './branch-detail-slider.component.html',
  styleUrls: ['./branch-detail-slider.component.scss']
})
export class BranchDetailSliderComponent implements OnChanges {
  @Input() visible = false;
  @Input() branch: any = null;
  @Output() close = new EventEmitter<void>();

  tabs: { id: BranchSliderTab; label: string; icon: string }[] = [
    { id: 'profile', label: 'Profile', icon: 'bi-building' },
    { id: 'contact', label: 'Contact & Address', icon: 'bi-geo-alt' }
  ];
  activeTab: BranchSliderTab = 'profile';
  loading = false;
  profileData: any = null;

  constructor(
    private branchService: BranchService,
    private toast: ToastService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['branch'] && this.branch && this.visible) {
      this.activeTab = 'profile';
      this.loadProfile();
    }
    if (changes['visible'] && this.visible && this.branch) {
      this.activeTab = 'profile';
      this.loadProfile();
    }
  }

  onClose(): void {
    this.close.emit();
  }

  setTab(tab: BranchSliderTab): void {
    this.activeTab = tab;
    if (!this.branch) return;
    if (tab === 'profile') this.loadProfile();
  }

  loadProfile(): void {
    if (!this.branch?.branch_id) return;
    this.loading = true;
    this.branchService.getBranch(this.branch.branch_id).subscribe({
      next: (res) => {
        this.loading = false;
        this.profileData = (res.status === 'success' && res.data?.branch) ? res.data.branch : this.branch;
      },
      error: () => { this.loading = false; this.toast.show('Error loading branch', 'error'); }
    });
  }
}
