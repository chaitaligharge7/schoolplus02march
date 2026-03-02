import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommitteeService } from '../../../shared/services/committee.service';
import { TeacherService } from '../../../shared/services/teacher.service';
import { StudentService } from '../../../shared/services/student.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-committee-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './committee-create.component.html',
  styleUrls: ['./committee-create.component.scss']
})
export class CommitteeCreateComponent implements OnInit {
  committeeForm: FormGroup;
  isEditMode = false;
 committeeId!: number;

  isLoading = false;
  isSaving = false;
  
  teachers: any[] = [];
  students: any[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private committeeService: CommitteeService,
    private teacherService: TeacherService,
    private studentService: StudentService,
    private toastService: ToastService
  ) {
    this.committeeForm = this.fb.group({
      committee_name: ['', Validators.required],
      committee_type: ['academic', Validators.required],
      description: [''],
      status: ['active', Validators.required],
      members: this.fb.array([])
    });
  }

  get membersArray(): FormArray {
    return this.committeeForm.get('members') as FormArray;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.committeeId = +params['id'];
        this.loadCommittee();
      }
    });
    
    this.loadTeachers();
    this.loadStudents();
  }

  loadTeachers(): void {
    this.teacherService.getTeachers({}).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.teachers = response.data.teachers || [];
        }
      }
    });
  }

  loadStudents(): void {
    this.studentService.getStudents({}).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.students = response.data.students || [];
        }
      }
    });
  }

  addMember(): void {
    const memberForm = this.fb.group({
      member_type: ['staff', Validators.required],
      member_id: [null, Validators.required],
      role: ['member', Validators.required]
    });
    this.membersArray.push(memberForm);
  }

  removeMember(index: number): void {
    this.membersArray.removeAt(index);
  }

  loadCommittee(): void {
  if (!this.committeeId) return;

  this.isLoading = true;

  this.committeeService.getCommittees({ committee_id: this.committeeId }).subscribe({
    next: (response) => {
      if (response.status === 'success' && response.data?.committees?.length > 0) {

        const committee = response.data.committees[0];

        // Patch main form fields
        this.committeeForm.patchValue({
          committee_name: committee.committee_name,
          committee_type: committee.committee_type,
          description: committee.committee_description ?? '',
          status: committee.status
        });

        // Clear existing members
        this.membersArray.clear();

        // Load members
        this.committeeService.getMembers(this.committeeId).subscribe({
          next: (membersResponse) => {

            if (membersResponse.status === 'success' && membersResponse.data?.members) {

              membersResponse.data.members.forEach((member: any) => {
                // Determine member type and ID
                let memberType = 'staff';
                let memberId = null;

                if (member.staff_id) {
                  memberType = 'staff';
                  memberId = member.staff_id;
                } else if (member.student_id) {
                  memberType = 'student';
                  memberId = member.student_id;
                }

                // Push into FormArray
                this.membersArray.push(
                  this.fb.group({
                    member_type: [memberType, Validators.required],
                    member_id: [memberId, Validators.required],
                    role: [member.role, Validators.required]
                  })
                );
              });
            }

            this.isLoading = false;
          },
          error: () => {
            this.toastService.error('Failed to load committee members');
            this.isLoading = false;
          }
        });

      } else {
        this.isLoading = false;
      }
    },
    error: () => {
      this.toastService.error('Failed to load committee details');
      this.isLoading = false;
    }
  });
}



 onSubmit(): void {
  if (this.committeeForm.invalid) {
    this.committeeForm.markAllAsTouched();
    return;
  }

  if (this.membersArray.length === 0) {
    this.toastService.warning('Please add at least one member to the committee');
    return;
  }

  this.isSaving = true;

  // Transform members array to include staff_id / student_id
  const membersPayload = this.membersArray.value.map((m: { member_type: string; member_id: any; role: any; }) => ({
    member_type: m.member_type,
    staff_id: m.member_type === 'staff' ? m.member_id : null,
    student_id: m.member_type === 'student' ? m.member_id : null,
    role: m.role
  }));

  // Prepare final payload
  const formData = {
    ...this.committeeForm.value,
    members: membersPayload
  };

  if (this.isEditMode && this.committeeId) {
    formData.committee_id = this.committeeId;
  }

  this.committeeService.createCommittee(formData).subscribe({
    next: (response) => {
      if (response.status === 'success') {
        this.toastService.success(`Committee ${this.isEditMode ? 'updated' : 'created'} successfully`);
        this.router.navigate(['/app/committees']);
      } else {
        this.toastService.error(response.message || `Failed to ${this.isEditMode ? 'update' : 'create'} committee`);
      }
      this.isSaving = false;
    },
    error: () => {
      this.toastService.error(`Failed to ${this.isEditMode ? 'update' : 'create'} committee`);
      this.isSaving = false;
    }
  });
}


  cancel(): void {
    this.router.navigate(['/app/committees']);
  }
}

