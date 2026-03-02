import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BusDocumentService } from '../../../shared/services/bus-document.service';
import { TransportService } from '../../../shared/services/transport.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-bus-document-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './bus-document-create.component.html',
  styleUrls: ['./bus-document-create.component.scss']
})
export class BusDocumentCreateComponent implements OnInit {
  documentForm: FormGroup;
  isEditMode = false;
  documentId: number | null = null;
  isLoading = false;
  isSaving = false;
  selectedFile: File | null = null;
  filePreview: string | null = null;
  buses: any[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private busDocumentService: BusDocumentService,
    private transportService: TransportService,
    private toastService: ToastService
  ) {
    this.documentForm = this.fb.group({
      bus_id: [null, Validators.required],
      document_type: ['insurance', Validators.required],
      document_number: ['', Validators.required],
      issue_date: [new Date().toISOString().split('T')[0], Validators.required],
      expiry_date: ['', Validators.required],
      document_file: [null],
      status: ['valid', Validators.required],
      remarks: ['']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.documentId = +params['id'];
        this.loadDocument();
      }
    });
    
    this.loadBuses();
  }

  loadBuses(): void {
    this.transportService.getRoutes({}).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          // Extract unique buses from routes
          const busMap = new Map();
          (response.data.routes || []).forEach((route: any) => {
            if (route.bus_id && !busMap.has(route.bus_id)) {
              busMap.set(route.bus_id, {
                bus_id: route.bus_id,
                bus_number: route.bus_number || `Bus ${route.bus_id}`,
                route_name: route.route_name
              });
            }
          });
          this.buses = Array.from(busMap.values());
        }
      }
    });
  }

  loadDocument(): void {
    if (!this.documentId) return;
    
    this.isLoading = true;
    this.busDocumentService.getBusDocuments({ document_id: this.documentId }).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data?.documents?.length > 0) {
          const doc = response.data.documents[0];
          this.documentForm.patchValue({
            bus_id: doc.bus_id,
            document_type: doc.document_type,
            document_number: doc.document_number,
            issue_date: doc.issue_date,
            expiry_date: doc.expiry_date,
            status: doc.status,
            remarks: doc.remarks
          });
          if (doc.document_file) {
            this.filePreview = doc.document_file;
          }
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error('Failed to load document details');
        this.isLoading = false;
      }
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
      if (!allowedTypes.includes(file.type)) {
        this.toastService.error('Please upload only PDF or image files');
        return;
      }

      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        this.toastService.error('File size should not exceed 10MB');
        return;
      }

      this.selectedFile = file;
      this.documentForm.patchValue({ document_file: file });
      
      // Preview for images
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.filePreview = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }
  }

  onSubmit(): void {
    if (this.documentForm.invalid) {
      this.documentForm.markAllAsTouched();
      return;
    }

    this.isSaving = true;
    const formData = new FormData();
    const formValue = this.documentForm.value;

    Object.keys(formValue).forEach(key => {
      if (key !== 'document_file' && formValue[key] !== null && formValue[key] !== '') {
        formData.append(key, formValue[key]);
      }
    });

    if (this.selectedFile) {
      formData.append('document_file', this.selectedFile);
    }

    if (this.isEditMode && this.documentId) {
      formData.append('document_id', this.documentId.toString());
    }

    this.busDocumentService.createBusDocument(formData).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.toastService.success(`Bus document ${this.isEditMode ? 'updated' : 'created'} successfully`);
          this.router.navigate(['/app/bus-documents']);
        } else {
          this.toastService.error(response.message || `Failed to ${this.isEditMode ? 'update' : 'create'} document`);
        }
        this.isSaving = false;
      },
      error: () => {
        this.toastService.error(`Failed to ${this.isEditMode ? 'update' : 'create'} document`);
        this.isSaving = false;
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/app/bus-documents']);
  }
}

