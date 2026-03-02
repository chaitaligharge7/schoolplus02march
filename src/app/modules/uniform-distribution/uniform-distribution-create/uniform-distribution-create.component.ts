import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UniformDistributionService } from '../../../shared/services/uniform-distribution.service';
import { StudentService } from '../../../shared/services/student.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-uniform-distribution-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './uniform-distribution-create.component.html',
  styleUrls: ['./uniform-distribution-create.component.scss']
})
export class UniformDistributionCreateComponent implements OnInit {
  distributionForm: FormGroup;
  isEditMode = false;
  distributionId: number | null = null;
  isLoading = false;
  isSaving = false;
  students: any[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private uniformDistributionService: UniformDistributionService,
    private studentService: StudentService,
    private toastService: ToastService
  )   
  {
    this.distributionForm = this.fb.group({
      student_id: [null, Validators.required],
      uniform_type: ['shirt', Validators.required],
      uniform_size: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      distribution_date: [this.getTodayDate(), Validators.required],
      return_status: ['distributed', Validators.required],
      remarks: ['']
    });
  }

    private getTodayDate(): string {
    return new Date().toISOString().split('T')[0];
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.distributionId = +params['id'];
        this.loadDistribution();
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
    },
    error: () => {
      this.toastService.error('Failed to load students');
    }
  });
}
 

loadDistribution(): void {
  if (!this.distributionId) return;

  this.isLoading = true;

  this.uniformDistributionService.getDistributions({
    distribution_id: this.distributionId,
    t: new Date().getTime() 
  }).subscribe({
    next: (response) => {
      this.isLoading = false;

      const distribution = response.data?.distributions?.find(
  (d: any) => +d.distribution_id === this.distributionId
);
      if (!distribution) {
        this.toastService.error('Distribution not found');
        return;
      }
      this.distributionForm.patchValue({
        student_id: distribution.student_id,
        uniform_type: distribution.uniform_type,
        uniform_size: distribution.uniform_size,
        quantity: distribution.quantity,
        distribution_date: distribution.distribution_date?.split('T')[0] || '',
        return_status: distribution.return_status,
        remarks: distribution.remarks ?? ''
      });
    },
    error: () => {
      this.isLoading = false;
      this.toastService.error('Failed to load distribution details');
    }
  });
}

 markAsReturned(distribution: any) {
  if (!distribution || distribution.return_status !== 'distributed') return;

  this.uniformDistributionService.updateDistribution(distribution.distribution_id, {
    return_status: 'returned',
    return_date: this.getTodayDate()
  }).subscribe({
    next: (res) => {
      if (res.status === 'success') {
        this.toastService.success('Uniform marked as returned');
        distribution.return_status = 'returned';
        distribution.return_date = new Date().toISOString().split('T')[0];
      } else {
        this.toastService.error(res.message || 'Failed to mark as returned');
      }
    },
    error: () => this.toastService.error('Failed to mark as returned')
  });
}

onSubmit(): void {
  if (this.distributionForm.invalid) {
    this.distributionForm.markAllAsTouched();
    return;
  }

  this.isSaving = true;
  const formData = this.distributionForm.value;

  if (this.isEditMode && this.distributionId) {
    this.uniformDistributionService.updateDistribution(this.distributionId, formData)
      .subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.toastService.success('Uniform distribution updated successfully');
              this.router.navigate(['/app/uniform-distribution'], { replaceUrl: true });
           
            const updatedDistribution = response.data;

            if (updatedDistribution) {
              this.distributionForm.patchValue({
                student_id: updatedDistribution.student_id,
                uniform_type: updatedDistribution.uniform_type,
                uniform_size: updatedDistribution.uniform_size,
                quantity: updatedDistribution.quantity,
                distribution_date: updatedDistribution.distribution_date?.split('T')[0] || '',
                return_status: updatedDistribution.return_status,
                remarks: updatedDistribution.remarks ?? ''
              });
            }
             
          } else {
            this.toastService.error(response.message || 'Failed to update distribution');
          }
        },
        error: () => {
          this.isSaving = false;
          this.toastService.error('Failed to update distribution');
        }
      });
  } else {

    this.uniformDistributionService.createDistribution(formData)
      .subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.toastService.success('Uniform distribution created successfully');
            this.router.navigate(['/app/uniform-distribution']);
          } else {
            this.toastService.error(response.message || 'Failed to create distribution');
          }
        },
        error: () => {
          this.isSaving = false;
          this.toastService.error('Failed to create distribution');
        }
      });
  }
}

  cancel(): void {
    this.router.navigate(['/app/uniform-distribution']);
  }
}

