import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef,
  HostListener,
  ElementRef,
  ViewChild,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface SearchSelectOption {
  value: any;
  label: string;
}

@Component({
  selector: 'app-search-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-select.component.html',
  styleUrls: ['./search-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchSelectComponent),
      multi: true,
    },
  ],
})
export class SearchSelectComponent implements ControlValueAccessor, OnChanges {
  @Input() options: SearchSelectOption[] = [];
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() bindLabel = 'label';
  @Input() bindValue = 'value';
  @Output() valueChange = new EventEmitter<any>();

  @ViewChild('inputRef') inputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('dropdownRef') dropdownRef!: ElementRef<HTMLDivElement>;

  isOpen = false;
  searchText = '';
  selectedOption: SearchSelectOption | null = null;
  _value: any = null;

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  get normalizedOptions(): SearchSelectOption[] {
    if (!this.options?.length) return [];
    const first = this.options[0];
    if (typeof first === 'object' && first !== null && 'value' in first && 'label' in first) {
      return this.options as SearchSelectOption[];
    }
    return (this.options as any[]).map((v) => ({ value: v, label: String(v) }));
  }

  get filteredOptions(): SearchSelectOption[] {
    const opts = this.normalizedOptions;
    if (!this.searchText.trim()) return opts;
    const q = this.searchText.toLowerCase();
    return opts.filter(
      (o) => (o.label || String(o.value)).toLowerCase().includes(q)
    );
  }

  get displayValue(): string {
    return this.selectedOption ? this.selectedOption.label : '';
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const host = this.elementRef.nativeElement;
    if (!host.contains(event.target)) {
      this.close();
    }
  }

  constructor(private elementRef: ElementRef) {}

  writeValue(value: any): void {
    this._value = value;
    this.syncSelectionFromValue();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['options']) {
      this.syncSelectionFromValue();
    }
  }

  /** Sync selectedOption and searchText from _value (e.g. when options load after value is set). */
  private syncSelectionFromValue(): void {
    const opts = this.normalizedOptions;
    this.selectedOption = opts.find((o) => o.value === this._value) ?? null;
    this.searchText = this.selectedOption ? this.selectedOption.label : '';
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  open(): void {
    if (this.disabled) return;
    this.isOpen = true;
    this.searchText = this.displayValue;
    setTimeout(() => this.inputRef?.nativeElement?.focus(), 0);
  }

  close(): void {
    this.isOpen = false;
    this.searchText = this.displayValue;
    this.onTouched();
  }

  select(opt: SearchSelectOption): void {
    this.selectedOption = opt;
    this._value = opt.value;
    this.searchText = opt.label;
    this.onChange(opt.value);
    this.valueChange.emit(opt.value);
    this.close();
  }

  onInputFocus(): void {
    this.open();
  }

  onInputInput(): void {
    if (!this.isOpen) this.isOpen = true;
  }

  clear(): void {
    this.selectedOption = null;
    this._value = null;
    this.searchText = '';
    this.onChange(null);
    this.valueChange.emit(null);
  }
}
