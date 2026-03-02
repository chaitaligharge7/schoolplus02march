import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WhatsAppService } from '../../../shared/services/whatsapp.service';
import { StudentService } from '../../../shared/services/student.service';
import { TeacherService } from '../../../shared/services/teacher.service';
import { ClassService } from '../../../shared/services/class.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-whatsapp-send',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './whatsapp-send.component.html',
  styleUrls: ['./whatsapp-send.component.scss']
})
export class WhatsAppSendComponent implements OnInit {
  whatsappForm: FormGroup;
  isSending = false;
  
  recipientType: 'individual' | 'class' | 'all' = 'individual';
  students: any[] = [];
  teachers: any[] = [];
  classes: any[] = [];
  selectedRecipients: any[] = [];

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private whatsappService: WhatsAppService,
    private studentService: StudentService,
    private teacherService: TeacherService,
    private classService: ClassService,
    private toastService: ToastService
  ) {
    this.whatsappForm = this.fb.group({
      recipient_type: ['individual', Validators.required],
      recipient_ids: [[], Validators.required],
      message: ['', Validators.required],
      attachment: ['']
    });
  }

  ngOnInit(): void {
    this.loadStudents();
    this.loadTeachers();
    this.loadClasses();
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

  loadTeachers(): void {
    this.teacherService.getTeachers({}).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.teachers = response.data.teachers || [];
        }
      }
    });
  }

  loadClasses(): void {
    this.classService.getClasses().subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.classes = response.data.classes || [];
        }
      }
    });
  }

  onRecipientTypeChange(): void {
    this.recipientType = this.whatsappForm.get('recipient_type')?.value;
    this.selectedRecipients = [];
    this.whatsappForm.patchValue({ recipient_ids: [] });
  }

  onClassSelect(classId: number): void {
    this.studentService.getStudents({ class_id: classId }).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          const classStudents = response.data.students || [];
          this.selectedRecipients = [...this.selectedRecipients, ...classStudents];
          this.updateRecipientIds();
        }
      }
    });
  }

  isStudentSelected(student: any): boolean {
    return this.selectedRecipients.some(r => r.student_id === student.student_id);
  }

  isTeacherSelected(teacher: any): boolean {
    return this.selectedRecipients.some(r => r.teacher_id === teacher.teacher_id);
  }

  toggleRecipient(recipient: any): void {
    const index = this.selectedRecipients.findIndex(r => 
      (r.student_id && recipient.student_id && r.student_id === recipient.student_id) ||
      (r.teacher_id && recipient.teacher_id && r.teacher_id === recipient.teacher_id)
    );
    
    if (index > -1) {
      this.selectedRecipients.splice(index, 1);
    } else {
      this.selectedRecipients.push(recipient);
    }
    this.updateRecipientIds();
  }

  updateRecipientIds(): void {
    const ids = this.selectedRecipients.map(r => 
      r.student_id || r.teacher_id
    );
    this.whatsappForm.patchValue({ recipient_ids: ids });
  }

  selectAllStudents(): void {
    this.selectedRecipients = [...this.students];
    this.updateRecipientIds();
  }

  selectAllTeachers(): void {
    this.selectedRecipients = [...this.teachers];
    this.updateRecipientIds();
  }

  clearSelection(): void {
    this.selectedRecipients = [];
    this.updateRecipientIds();
  }

  onFileSelect(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Validate file type (images, PDFs, documents)
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        this.toastService.error('Invalid file type. Only images, PDFs, and documents are allowed.');
        return;
      }
      this.whatsappForm.patchValue({ attachment: file });
    }
  }

  onSubmit(): void {
    if (this.whatsappForm.invalid) {
      this.whatsappForm.markAllAsTouched();
      return;
    }

    if (this.selectedRecipients.length === 0) {
      this.toastService.warning('Please select at least one recipient');
      return;
    }

    this.isSending = true;
    const formData = new FormData();
    formData.append('recipient_type', this.whatsappForm.get('recipient_type')?.value);
    formData.append('recipient_ids', JSON.stringify(this.whatsappForm.get('recipient_ids')?.value));
    formData.append('message', this.whatsappForm.get('message')?.value);
    
    const attachment = this.whatsappForm.get('attachment')?.value;
    if (attachment) {
      formData.append('attachment', attachment);
    }

    this.whatsappService.sendWhatsApp(formData).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.toastService.success(`WhatsApp message sent to ${this.selectedRecipients.length} recipient(s) successfully`);
          this.router.navigate(['/app/whatsapp']);
        } else {
          this.toastService.error(response.message || 'Failed to send WhatsApp message');
        }
        this.isSending = false;
      },
      error: () => {
        this.toastService.error('Failed to send WhatsApp message');
        this.isSending = false;
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/app/whatsapp']);
  }
}

