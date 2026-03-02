import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  /**
   * Email validator
   */
  static email(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(control.value) ? null : { email: true };
  }

  /**
   * Phone number validator
   */
  static phone(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(control.value.replace(/\D/g, '')) ? null : { phone: true };
  }

  /**
   * Password strength validator
   */
  static passwordStrength(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;
    const value = control.value;
    const errors: any = {};

    if (value.length < 8) {
      errors.minLength = true;
    }
    if (!/[A-Z]/.test(value)) {
      errors.uppercase = true;
    }
    if (!/[a-z]/.test(value)) {
      errors.lowercase = true;
    }
    if (!/[0-9]/.test(value)) {
      errors.number = true;
    }
    if (!/[!@#$%^&*]/.test(value)) {
      errors.special = true;
    }

    return Object.keys(errors).length > 0 ? errors : null;
  }

  /**
   * Match password validator
   */
  static matchPassword(passwordControlName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.parent) return null;
      const password = control.parent.get(passwordControlName);
      if (!password) return null;
      return password.value === control.value ? null : { passwordMismatch: true };
    };
  }

  /**
   * Date range validator
   */
  static dateRange(startDateControlName: string, endDateControlName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.parent) return null;
      const startDate = control.parent.get(startDateControlName)?.value;
      const endDate = control.parent.get(endDateControlName)?.value;
      if (!startDate || !endDate) return null;
      return new Date(startDate) <= new Date(endDate) ? null : { dateRange: true };
    };
  }

  /**
   * File size validator
   */
  static fileSize(maxSizeInMB: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;
      const file = control.value as File;
      const maxSize = maxSizeInMB * 1024 * 1024;
      return file.size <= maxSize ? null : { fileSize: { maxSize: maxSizeInMB } };
    };
  }

  /**
   * File type validator
   */
  static fileType(allowedTypes: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;
      const file = control.value as File;
      const fileType = file.type;
      return allowedTypes.includes(fileType) ? null : { fileType: { allowedTypes } };
    };
  }

  /**
   * Required if validator
   */
  static requiredIf(condition: (control: AbstractControl) => boolean): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!condition(control.parent || control)) return null;
      return control.value ? null : { required: true };
    };
  }
}

