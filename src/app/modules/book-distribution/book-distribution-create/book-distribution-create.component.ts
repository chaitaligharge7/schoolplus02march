import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookDistributionService } from '../../../shared/services/book-distribution.service';
import { StudentService } from '../../../shared/services/student.service';
import { LibraryService } from '../../../shared/services/library.service';
import { ToastService } from '../../../shared/services/toast.service';
import { AcademicYearService } from '../../../shared/services/academic-year.service';

@Component({
  selector: 'app-book-distribution-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './book-distribution-create.component.html',
  styleUrls: ['./book-distribution-create.component.scss']
})
export class BookDistributionCreateComponent implements OnInit {
  distributionForm: FormGroup;
  isEditMode = false;
  distributionId: number | null = null;
  isLoading = false;
  isSaving = false;
  students: any[] = [];
  books: any[] = [];
  academicYears: any[] = []; 


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private bookDistributionService: BookDistributionService,
    private academicYearService: AcademicYearService,
    private studentService: StudentService,
    private libraryService: LibraryService,
    private toastService: ToastService
  ) {
    this.distributionForm = this.fb.group({
      student_id: [null, Validators.required],
      book_id: [null, Validators.required],
      distribution_date: [new Date().toISOString().split('T')[0], Validators.required],
      return_date: ['', Validators.required],
      return_status: ['issued', Validators.required],
      remarks: [''],
      academic_year_id: [null, Validators.required]  
    });
  }

  ngOnInit(): void {
  this.loadStudents();
  this.loadBooks();
  this.loadAcademicYears(); 

  this.route.params.subscribe(params => {
    if (params['id']) {
      this.isEditMode = true;
      this.distributionId = +params['id'];
      this.loadDistribution();
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
  loadAcademicYears(): void {
    this.academicYearService.getCurrentAcademicYearId().subscribe({
      next: (id) => {
        if (id != null) {
          this.distributionForm.patchValue({ academic_year_id: id });
        }
      }
    });
  }

  loadBooks(): void {
    this.libraryService.getBooks({}).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.books = response.data.books || [];
        }
      }
    });
  }

loadDistribution(): void {
  if (!this.distributionId) return;

  this.isLoading = true;
  this.bookDistributionService.getDistributions({}).subscribe({
    next: (response) => {
    
      if (response.status === 'success' && response.data?.distributions?.length > 0) {
        const distribution = response.data.distributions.find(
          (d: any) => d.distribution_id == this.distributionId
        );

        if (distribution) {
          this.distributionForm.patchValue({
            student_id: distribution.student_id,
            book_id: distribution.book_id,
            distribution_date: distribution.distribution_date,
            return_date: distribution.return_date,
            return_status: distribution.return_status,
            remarks: distribution.remarks,
            academic_year_id: distribution.academic_year_id
          });
         
        } else {
      
        }
      } else {
      }

      this.isLoading = false;
    },
    error: (err) => {
      this.toastService.error('Failed to load distribution details');
      this.isLoading = false;
    }
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
    formData.distribution_id = this.distributionId;

    this.bookDistributionService.updateDistribution(formData).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.toastService.success(`Book distribution updated successfully`);
          this.router.navigate(['/app/book-distribution']);
        } else {
          this.toastService.error(response.message || `Failed to update distribution`);
        }
        this.isSaving = false;
      },
      error: () => {
        this.toastService.error(`Failed to update distribution`);
        this.isSaving = false;
      }
    });
  } else {
    
    this.bookDistributionService.createDistribution(formData).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.toastService.success(`Book distribution created successfully`);
          this.router.navigate(['/app/book-distribution']);
        } else {
          this.toastService.error(response.message || `Failed to create distribution`);
        }
        this.isSaving = false;
      },
      error: () => {
        this.toastService.error(`Failed to create distribution`);
        this.isSaving = false;
      }
    });
  }
}

  cancel(): void {
    this.router.navigate(['/app/book-distribution']);
  }
}

