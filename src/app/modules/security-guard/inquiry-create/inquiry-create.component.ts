import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SecurityGuardService } from '../../../shared/services/security-guard.service';
import { TeacherService } from '../../../shared/services/teacher.service';
import { DepartmentService } from '../../../shared/services/department.service';
import { ToastService } from '../../../shared/services/toast.service';
import { SearchSelectComponent } from '../../../shared/components/search-select/search-select.component';

const PURPOSE_TYPES = [
  { value: '', label: 'Select purpose type' },
  { value: 'admission', label: 'Admission' },
  { value: 'meeting', label: 'Meeting' },
  { value: 'delivery', label: 'Delivery' },
  { value: 'interview', label: 'Interview' },
  { value: 'event', label: 'Event' },
  { value: 'other', label: 'Other' }
];

@Component({
  selector: 'app-inquiry-create',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, SearchSelectComponent],
  templateUrl: './inquiry-create.component.html',
  styleUrls: ['./inquiry-create.component.scss']
})
export class InquiryCreateComponent implements OnInit {
  model: any = {
    visitor_name: '',
    visitor_phone: '',
    visitor_id_type: '',
    visitor_id_number: '',
    purpose_type: '',
    purpose: '',
    person_to_meet: '',
    department: '',
    department_id: null as number | null
  };
  purposeTypes = PURPOSE_TYPES;
  teachers: any[] = [];
  departments: any[] = [];
  personToMeetOptions: { value: any; label: string }[] = [];
  departmentOptions: { value: number | string; label: string }[] = [];
  selectedPersonValue: any = null;
  selectedDepartmentValue: number | string | null = null;
  isPersonOther = false;
  loading = false;

  private get teacherIdToTeacher(): Map<number, any> {
    const m = new Map<number, any>();
    this.teachers.forEach((t: any) => m.set(t.teacher_id, t));
    return m;
  }

  constructor(
    private sg: SecurityGuardService,
    private teacherService: TeacherService,
    private departmentService: DepartmentService,
    private toast: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.teacherService.getTeachers({ limit: 500 }).subscribe({
      next: (res: any) => {
        if (res?.status === 'success' && res?.data?.teachers) {
          this.teachers = res.data.teachers;
          this.personToMeetOptions = [
            ...this.teachers.map((t: any) => ({ value: t.teacher_id, label: t.full_name || '' })),
            { value: 'OTHER', label: 'Other' }
          ];
        }
      }
    });
    this.departmentService.getDepartments().subscribe({
      next: (res: any) => {
        if (res?.status === 'success' && res?.data?.departments) {
          this.departments = res.data.departments;
          this.departmentOptions = [
            { value: null, label: 'Select department' },
            ...(this.departments || []).map((d: any) => ({
              value: d.department_id,
              label: d.department_name || ''
            }))
          ];
        }
      }
    });
  }

  onPersonSelect(val: any): void {
    this.selectedPersonValue = val;
    if (val === 'OTHER') {
      this.isPersonOther = true;
      this.model.person_to_meet = '';
      this.model.department = '';
      this.model.department_id = null;
      this.selectedDepartmentValue = null;
    } else if (val != null && typeof val === 'number') {
      this.isPersonOther = false;
      const teacher = this.teacherIdToTeacher.get(val) || this.teachers.find((t: any) => t.teacher_id === val);
      if (teacher) {
        this.model.person_to_meet = teacher.full_name || '';
        const dept = this.departments.find((d: any) => d.department_id === teacher.department_id);
        if (dept) {
          this.model.department = dept.department_name || '';
          this.model.department_id = dept.department_id;
          this.selectedDepartmentValue = dept.department_id;
        }
      }
    }
  }

  onDepartmentSelect(val: number | string | null): void {
    this.selectedDepartmentValue = val;
    if (val != null) {
      const dept = this.departments.find((d: any) => d.department_id === val);
      this.model.department = dept ? dept.department_name : String(val);
      this.model.department_id = dept ? dept.department_id : null;
    } else {
      this.model.department = '';
      this.model.department_id = null;
    }
  }

  save(): void {
    if (!this.model.visitor_name?.trim()) {
      this.toast.show('Visitor name is required', 'error');
      return;
    }
    if (!this.model.purpose_type) {
      this.toast.show('Purpose type is required', 'error');
      return;
    }
    if (this.isPersonOther && !this.model.person_to_meet?.trim()) {
      this.toast.show('Please enter person to meet (Other)', 'error');
      return;
    }
    if (!this.isPersonOther && !this.model.person_to_meet?.trim()) {
      this.toast.show('Please select or enter person to meet', 'error');
      return;
    }
    this.loading = true;
    const payload = { ...this.model };
    delete payload.department_id;
    this.sg.createInquiry(payload).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === 'success') {
          this.toast.show('Inquiry registered successfully', 'success');
          this.router.navigate(['/app/security-guard/inquiry/list']);
        } else {
          this.toast.show(res.message || 'Error', 'error');
        }
      },
      error: () => {
        this.loading = false;
        this.toast.show('Error registering inquiry', 'error');
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/app/security-guard/inquiry/list']);
  }
}
