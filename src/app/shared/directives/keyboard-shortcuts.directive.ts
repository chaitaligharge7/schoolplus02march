import { Directive, HostListener, Output, EventEmitter, Input } from '@angular/core';

@Directive({
  selector: '[appKeyboardShortcuts]',
  standalone: true
})
export class KeyboardShortcutsDirective {
  @Input() enableShortcuts = true;
  @Output() f2Pressed = new EventEmitter<void>();
  @Output() f3Pressed = new EventEmitter<void>();
  @Output() f5Pressed = new EventEmitter<void>();
  @Output() ctrlFPressed = new EventEmitter<void>();
  @Output() escPressed = new EventEmitter<void>();
  @Output() ctrlSPressed = new EventEmitter<void>();
  @Output() deletePressed = new EventEmitter<void>();

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (!this.enableShortcuts) return;

    // Prevent default for function keys
    if (event.key === 'F2' || event.key === 'F3' || event.key === 'F5') {
      event.preventDefault();
    }

    // F2 - Add record
    if (event.key === 'F2') {
      this.f2Pressed.emit();
    }

    // F3 - Edit selected row
    if (event.key === 'F3') {
      this.f3Pressed.emit();
    }

    // F5 - Refresh
    if (event.key === 'F5') {
      event.preventDefault();
      this.f5Pressed.emit();
    }

    // Ctrl+F - Focus search
    if (event.ctrlKey && event.key === 'f') {
      event.preventDefault();
      this.ctrlFPressed.emit();
    }

    // Esc - Close panel
    if (event.key === 'Escape') {
      this.escPressed.emit();
    }

    // Ctrl+S - Save form
    if (event.ctrlKey && event.key === 's') {
      event.preventDefault();
      this.ctrlSPressed.emit();
    }

    // Delete - Delete selected row
    if (event.key === 'Delete' && !event.ctrlKey && !event.altKey) {
      this.deletePressed.emit();
    }
  }
}

