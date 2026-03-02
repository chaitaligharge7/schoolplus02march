import { Component, Input, Output, EventEmitter, HostListener, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Reusable detail slider panel: overlay + sliding panel from right.
 * Use with student/teacher content via ng-content or child components.
 */
@Component({
  selector: 'app-detail-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-slider.component.html',
  styleUrls: ['./detail-slider.component.scss']
})
export class DetailSliderComponent implements OnChanges {
  @Input() visible = false;
  @Input() title = 'Summary';
  @Input() subtitle = '';
  @Input() profileName = '';
  @Input() profileSubtext = '';
  @Output() close = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['visible']) {
      document.body.style.overflow = this.visible ? 'hidden' : '';
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.visible) {
      this.close.emit();
    }
  }

  onClose(): void {
    this.close.emit();
  }

  onOverlayClick(): void {
    this.close.emit();
  }

  onPanelClick(e: Event): void {
    e.stopPropagation();
  }
}
