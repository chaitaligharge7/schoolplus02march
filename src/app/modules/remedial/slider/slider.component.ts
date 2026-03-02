import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemedialService } from '../../../shared/services/remedial.service';
import { ToastService } from '../../../shared/services/toast.service';
import { StudentService } from '../../../shared/services/student.service';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() visible = false;
  @Input() batches: any[] = [];
  @Output() close = new EventEmitter<void>();

  selectedBatchId: number | null = null;
  selectedBatch: any = null;

  students: any[] = [];           
  addedStudentIds: number[] = []; 

  showClassInput = false;
  showStudentInput = false;

  newStudentName = '';
  studentSuggestions: any[] = [];

  constructor(
    private remedialService: RemedialService,
    private toastService: ToastService,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.loadBatches();
  }

  loadBatches(): void {
    this.remedialService.getBatches().subscribe({
      next: (res) => {
        if (res.status === 'success' && res.data) {
          this.batches = res.data.batches || [];
        }
      },
      error: (err) => console.error('Error loading batches:', err)
    });
  }

  onBatchChange(): void {
    this.selectedBatch = this.batches.find(b => b.batch_id == this.selectedBatchId);

    if (!this.selectedBatch) {
      this.showClassInput = false;
      this.showStudentInput = false;
      this.students = [];
      this.addedStudentIds = [];
      this.studentSuggestions = [];
      this.newStudentName = '';
      return;
    }

    this.showClassInput = true;
    this.showStudentInput = true;
    this.newStudentName = '';
    this.studentSuggestions = [];
    this.addedStudentIds = [];

    // 1 Load all students in class
    this.studentService.getStudents({ class_id: this.selectedBatch.class_id }).subscribe({
      next: (res) => {
        if (res.status === 'success' && res.data) {
          this.students = res.data.students || [];
          console.log('All class students:', this.students);

          // 2 Load already added students in this remedial batch
          this.remedialService.getBatchStudents(this.selectedBatchId!).subscribe({
            next: (resp) => {
              if (resp.status === 'success' && resp.data && resp.data.students) {
                this.addedStudentIds = resp.data.students.map((s: any) => s.student_id);
                console.log('Already enrolled students:', this.addedStudentIds);
              }
            },
            error: (err) => console.error('Error fetching remedial students:', err)
          });
        }
      },
      error: (err) => console.error('Error fetching class students:', err)
    });
  }

  // Students filtered to hide already enrolled
  get studentsToShow(): any[] {
    const filtered = this.students.filter(s => !this.addedStudentIds.includes(s.student_id));
    return filtered;
  }

  // Suggestions as user types
  onStudentInputChange(): void {
    const term = this.newStudentName.toLowerCase().trim();
    if (!term) {
      this.studentSuggestions = [];
      return;
    }

    this.studentSuggestions = this.studentsToShow
      .filter(s => s.full_name.toLowerCase().includes(term))
      .slice(0, 5);
  }

  selectSuggestion(student: any): void {
    this.newStudentName = student.full_name;
    this.studentSuggestions = [];
  }

  addStudent(): void {
    if (!this.selectedBatchId || !this.newStudentName.trim()) {
      this.toastService.show('Please select or enter a student', 'error');
      return;
    }

    const student = this.students.find(
      s => s.full_name.toLowerCase() === this.newStudentName.trim().toLowerCase()
    );

    if (!student) {
      this.toastService.show('Student not found in this class', 'error');
      return;
    }

    if (this.addedStudentIds.includes(student.student_id)) {
      this.toastService.show('Student already enrolled in this batch', 'error');
      return;
    }

    const payload = { batch_id: this.selectedBatchId, student_id: student.student_id };

    this.remedialService.addStudent(payload).subscribe({
      next: (res) => {
        if (res.status === 'success') {
          this.toastService.show('Student added successfully', 'success');

          // Immediately hide student from list and suggestions
          this.addedStudentIds.push(student.student_id);
          this.newStudentName = '';
          this.studentSuggestions = [];
        } else {
          this.toastService.show(res.message || 'Failed to add student', 'error');
        }
      },
      error: (err) => {
        console.error('Error adding student:', err);
        this.toastService.show('Error adding student', 'error');
      }
    });
  }

  hide(): void {
    this.close.emit();
    this.selectedBatchId = null;
    this.selectedBatch = null;
    this.showClassInput = false;
    this.showStudentInput = false;
    this.newStudentName = '';
    this.studentSuggestions = [];
    this.addedStudentIds = [];
  }

  // Return student index in the overall studentsToShow array
  getStudentIndex(student: any): number {
    return this.studentsToShow.findIndex(s => s.student_id === student.student_id) + 1;
  }

  // Chunk students into rows of 15
  chunkedStudents(): any[][] {
    const chunkSize = 15;
    const chunks = [];
    for (let i = 0; i < this.studentsToShow.length; i += chunkSize) {
      chunks.push(this.studentsToShow.slice(i, i + chunkSize));
    }
    return chunks;
  }
}
