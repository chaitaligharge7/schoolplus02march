import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UniformFineService } from '../../../shared/services/uniform-fine.service';
import { StudentService } from '../../../shared/services/student.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-uniform-fine-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './uniform-fine-create.component.html',
  styleUrls: ['./uniform-fine-create.component.scss']
})
export class UniformFineCreateComponent implements OnInit {
  fineForm: FormGroup;
  isEditMode = false;
  fineId: number | null = null;
  isLoading = false;
  isSaving = false;
  students: any[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private uniformFineService: UniformFineService,
    private studentService: StudentService,
    private toastService: ToastService
  ) {
    this.fineForm = this.fb.group({
      person_id: [null, Validators.required],
      fine_date: [new Date().toISOString().split('T')[0], Validators.required],
      fine_type: ['student', Validators.required],
      violation_type: [''],   
      fine_amount: [null, [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      barcode_scanned: [''], 
      status: ['pending', Validators.required],
      payment_date: ['']
    });
    }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.fineId = +params['id'];
        this.loadFine();
      }
    });
    this.loadStudents();
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
  loadFine(): void {
  if (!this.fineId) return;

  this.isLoading = true;
  this.uniformFineService.getUniformFines({ fine_id: this.fineId }).subscribe({
    next: (response) => {
      
      if (response.status === 'success' && response.data?.fines?.length > 0) {
        const fine = response.data.fines[0];
        this.fineForm.patchValue({
          person_id: fine.person_id,
          fine_date: fine.fine_date,
          fine_type: fine.fine_type,
          violation_type: fine.violation_type || '', 
          fine_amount: fine.fine_amount, 
          description: fine.remarks,     
          barcode_scanned: fine.barcode_scanned || '',
          status: fine.status,
          payment_date: fine.payment_date || ''
        });
      } else {
        
      }
      this.isLoading = false;
    },
    error: () => {
      this.toastService.error('Failed to load fine details');
      this.isLoading = false;
    }
  });
   }
 
onSubmit(): void {
  if (this.fineForm.invalid) {
    this.fineForm.markAllAsTouched();
    return;
  }
  this.isSaving = true;

   const formData: any = {
    fine_id: this.fineId,   
     person_id: this.fineForm.value.person_id, 
     fine_type: this.fineForm.value.fine_type,                  
    fine_amount: this.fineForm.value.fine_amount,    
    description: this.fineForm.value.description,     
    fine_date: this.fineForm.value.fine_date,
    status: this.fineForm.value.status,
    violation_type: this.fineForm.value.violation_type,
    barcode_scanned: this.fineForm.value.barcode_scanned,
     payment_date: this.fineForm.value.payment_date || null   
  };

  
  if (this.isEditMode && this.fineId) {
    this.uniformFineService.updateUniformFine(formData).subscribe({
      next: (response) => { 
        if (response.status === 'success') {
          this.toastService.success('Uniform fine updated successfully');
          this.router.navigate(['/app/uniform-fines']);
          this.loadFine();
        } else {
          this.toastService.error(response.message || 'Failed to update fine');
        }
        this.isSaving = false;
      },
      error: (err) => {
        this.toastService.error('Failed to update fine');
        this.isSaving = false;
      }
    });
  } else {
    
    this.uniformFineService.createUniformFine(formData).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.toastService.success('Uniform fine created successfully');
          this.router.navigate(['/app/uniform-fines']);
        } else {
          this.toastService.error(response.message || 'Failed to create fine');
        }
        this.isSaving = false;
      },
      error: () => {
        this.toastService.error('Failed to create fine');
        this.isSaving = false;
      }
    });
  }
}

  cancel(): void {
    this.router.navigate(['/app/uniform-fines']);
  }
}

