import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IdCardService } from '../../../shared/services/id-card.service';
import { AcademicYearService } from '../../../shared/services/academic-year.service';
import { ClassService } from '../../../shared/services/class.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-id-card-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './id-card-create.component.html',
  styleUrls: ['./id-card-create.component.scss']
})
export class IdCardCreateComponent implements OnInit {
  idCardForm: FormGroup;
  isEditMode = false;
  idCardId: number | null = null;
  isLoading = false;
  isSaving = false;
  academicYears: any[] = [];
  classes: any[] = [];
  people: any[] = [];
  cardTemplates: { value: string; label: string }[] = []; 

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private idCardService: IdCardService,
    private academicYearService: AcademicYearService,
    private classService: ClassService,
    private toastService: ToastService
  ) {
    this.idCardForm = this.fb.group({
      card_type: ['student', Validators.required],
      academic_year_id: [null, Validators.required],
      class_id: [null],
      card_template: ['standard', Validators.required],
      include_photo: [true],
      include_qr_code: [true],
      status: ['active', Validators.required],
      person_type: ['student', Validators.required],  
      person_id: [null, Validators.required],
      expiry_date: [null], 
      remarks: ['']          
          
    });
  }

   ngOnInit(): void {
   this.cardTemplates = [
    { value: 'standard', label: 'Standard' },
    { value: 'premium', label: 'Premium' },
    { value: 'vip', label: 'VIP' }
  ];

  this.route.params.subscribe(params => {
    if (params['id']) {
      this.isEditMode = true;
      this.idCardId = +params['id'];
      this.loadAcademicYears(() => {
        this.loadClasses(() => {
          this.loadIdCard(); 
        });
      });

    } else {
      this.loadAcademicYears();
      this.loadClasses();
      this.onPersonTypeChange({
        target: { value: this.idCardForm.get('person_type')?.value }
      } as any);
    }
  });
}

  loadAcademicYears(callback?: () => void): void {
  this.academicYearService.getCurrentAcademicYearId().subscribe({
    next: (id) => {
      if (id != null) {
        this.idCardForm.patchValue({ academic_year_id: id });
      }
      if (callback) callback();
    },
    error: () => {
      if (callback) callback();
    }
  });
}

  loadClasses(callback?: () => void): void {
  this.classService.getClasses().subscribe({
    next: (response) => {
      this.classes = response.data?.classes || [];
      if (callback) callback();
    },
    error: () => {
      this.toastService.error('Failed to load classes');
      if (callback) callback();
    }
  });
}

  loadPeople(personType: string) {
  if (personType === 'student') {
    this.idCardService.getStudents().subscribe({
      next: (res) => {
        this.people = res.data?.students || [];
      },
      error: () => {
        this.toastService.error('Failed to load students');
      }
    });
  } else if (personType === 'staff') {
    this.idCardService.getStaff().subscribe({
      next: (res) => {
        this.people = res.data?.staff || [];
      },
      error: () => {
        this.toastService.error('Failed to load staff');
      }
    });
  } else {
    this.people = []; 
  }
}

loadIdCard(): void {
  if (!this.idCardId) return;
  this.isLoading = true;
  this.idCardService.getIdCards().subscribe({
    next: (res: any) => {
      const cards = res.data?.cards || [];
      const card = cards.find((c: any) => Number(c.card_id) === Number(this.idCardId));

      if (!card) {
        this.toastService.error('ID card not found');
        this.isLoading = false;
        return;
      }
     console.log('FULL CARD OBJECT:', card);
console.log('include_photo:', card.include_photo);
console.log('include_qr_code:', card.include_qr_code);
      this.idCardForm.patchValue({
        card_type: card.card_type,
        academic_year_id: Number(card.academic_year_id),
        class_id: Number(card.class_id),
        card_template: card.card_template,
        include_photo: card.include_photo == 1 || card.include_photo === true || card.include_photo === '1',
        include_qr_code: card.include_qr_code == 1 || card.include_qr_code === true || card.include_qr_code === '1',
        status: card.status,
        person_type: card.person_type,
        expiry_date: card.expiry_date ? card.expiry_date.split(' ')[0] : null, 
        remarks: card.remarks
      });

      this.onPersonTypeChange({ target: { value: card.person_type } } as any);
      setTimeout(() => {
        this.idCardForm.patchValue({
          person_id: card.person_id
        });
      }, 300);

      this.isLoading = false;
    },
    error: () => {
      this.toastService.error('Failed to load ID card');
      this.isLoading = false;
    }
  });
}


onSubmit(): void {
  if (this.idCardForm.invalid) {
    this.idCardForm.markAllAsTouched();
    return;
  }

  this.isSaving = true;
  const formData = {
    ...this.idCardForm.value,
    include_photo: this.idCardForm.value.include_photo ? 1 : 0,
    include_qr_code: this.idCardForm.value.include_qr_code ? 1 : 0
  };

  if (this.isEditMode && this.idCardId) {
    formData.card_id = this.idCardId; 

    this.idCardService.updateIdCard(formData).subscribe({
      next: (res) => {
        if (res.status === 'success' && res.data?.card) {
             this.toastService.success('ID card updated successfully');
             this.router.navigate(['/app/id-cards']); 

          const card = res.data.card;
          this.idCardForm.patchValue({
            card_type: card.card_type,
            academic_year_id: Number(card.academic_year_id),
            class_id: Number(card.class_id),
            card_template: card.card_template,
            include_photo: card.include_photo == 1,
            include_qr_code: card.include_qr_code == 1,
            status: card.status,
            person_type: card.person_type,
            expiry_date: card.expiry_date,
            remarks: card.remarks,
            person_id: card.person_id
          });

          this.onPersonTypeChange({ target: { value: card.person_type } } as any);

        } else {
          this.toastService.error(res.message || 'Failed to update ID card');
        }
        this.isSaving = false;
      },
      error: () => {
        this.toastService.error('Failed to update ID card');
        this.isSaving = false;
      }
    });

  } else {
    this.idCardService.createIdCard(formData).subscribe({
      next: () => {
        this.toastService.success('ID card created successfully');
        this.router.navigate(['/app/id-cards']); 
        this.isSaving = false;
      },
      error: () => {
        this.toastService.error('Failed to create ID card');
        this.isSaving = false;
      }
    });
  }
}

generateCards(): void {
  if (this.idCardForm.invalid) {
    this.toastService.warning('Please configure ID card settings first');
    return;
  }
  const formData = this.idCardForm.value;
  const payload = {
    person_ids: [formData.person_id],         
    person_type: formData.person_type || 'student',
    card_type: formData.card_type || 'student'
  };

  this.isSaving = true;
  this.idCardService.generateIdCards(payload).subscribe({
    next: (response) => {
      if (response.status === 'success') {
        this.toastService.success(`Generated ${response.data?.generated || 0} ID cards successfully`);
        this.router.navigate(['/app/id-cards']);
      } else {
        this.toastService.error(response.message || 'Failed to generate ID cards');
      }
      this.isSaving = false;
    },
    error: () => {
      this.toastService.error('Failed to generate ID cards');
      this.isSaving = false;
    }
  });
}

onPersonTypeChange(event: Event): void {
  const type = (event.target as HTMLSelectElement).value;
  this.people = [];
  this.idCardForm.patchValue({ person_id: null });

  if (type === 'student') {
    this.idCardService.getStudents().subscribe({
      next: (res: any) => {
        const list =
          res.data?.students ||
          res.data?.data ||
          res.data ||
          [];

        this.people = list.map((s: any) => ({
          id: s.student_id || s.id,
          name:
            s.student_name ||
            `${s.first_name ?? ''} ${s.last_name ?? ''}`.trim()
        }));
      }
    });
  }

  if (type === 'staff') {
    this.idCardService.getStaff().subscribe({
      next: (res: any) => {
        const list =
          res.data?.teachers ||
          res.data?.staff ||
          res.data ||
          [];

        this.people = list.map((t: any) => ({
          id: t.teacher_id || t.staff_id || t.id,
          name:
            t.teacher_name ||
            t.staff_name ||
            `${t.first_name ?? ''} ${t.last_name ?? ''}`.trim()
        }));
      }
    });
  }

  if (type === 'visitor') {
    this.idCardService.getVisitors().subscribe({
      next: (res: any) => {
        const list = res.data || [];
        this.people = list.map((v: any) => ({
          id: v.visitor_id || v.id,
          name: v.visitor_name || v.name
        }));
      }
    });
  }
}

  cancel(): void {
    this.router.navigate(['/app/id-cards']);
  }
}

