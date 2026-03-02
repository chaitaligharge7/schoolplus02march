import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExaminationService } from '../../../shared/services/examination.service';
import { ClassService } from '../../../shared/services/class.service';
import { StudentService } from '../../../shared/services/student.service';

@Component({
  selector: 'app-exam-results',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './exam-results.component.html',
  styleUrls: ['./exam-results.component.scss']
})
export class ExamResultsComponent implements OnInit {
  resultsForm: FormGroup;
  examinationId: number | null = null;
  students: any[] = [];                                                                                                                                                                                                                                                     
  subjects: any[] = [];
  isLoading = false;
  isSaving = false;
  examination: any = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private examinationService: ExaminationService,
    private classService: ClassService,
    private studentService: StudentService
  ) {
    this.resultsForm = this.fb.group({
      class_id: [null],
      section_id: [null]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.examinationId = parseInt(params['id']);
        this.loadExamination();
      }
    });

    this.resultsForm.get('class_id')?.valueChanges.subscribe(classId => {
      if (classId) {
        this.loadSections(classId);
        this.loadStudents(classId);
      }
    });

    this.resultsForm.get('section_id')?.valueChanges.subscribe(sectionId => {
      if (sectionId) {
        const classId = this.resultsForm.get('class_id')?.value;
        if (classId) {
          this.loadStudents(classId, sectionId);
        }
      }
    });
  }

  loadExamination(): void {
    if (!this.examinationId) return;
    
    this.examinationService.getExamination(this.examinationId).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.examination = response.data.examination;
          this.subjects = response.data.subjects || [];
        }
      }
    });
  }

  loadSections(classId: number): void {
    this.classService.getSections(classId).subscribe({
      next: (response) => {
        // Sections loaded
      }
    });
  }

  loadStudents(classId: number, sectionId?: number): void {
    this.isLoading = true;
    const params: any = { class_id: classId };
    if (sectionId) {
      params.section_id = sectionId;
    }

    this.studentService.getStudents(params).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.students = response.data.students || [];
          // Initialize results for each student
          this.students.forEach(student => {
            if (!student.results) {
              student.results = {};
            }
            this.subjects.forEach(subject => {
              if (!student.results[subject.subject_id]) {
                student.results[subject.subject_id] = {
                  marks_obtained: 0,
                  grade: '',
                  remarks: ''
                };
              }
            });
          });
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading students:', error);
        this.isLoading = false;
      }
    });
  }

  saveResults(): void {
    if (!this.examinationId) return;

    this.isSaving = true;
    const results = this.students.map(student => ({
      student_id: student.student_id,
      subjects: Object.keys(student.results).map(subjectId => ({
        subject_id: parseInt(subjectId),
        marks_obtained: student.results[subjectId].marks_obtained,
        grade: student.results[subjectId].grade,
        remarks: student.results[subjectId].remarks
      }))
    }));

    this.examinationService.enterResults(this.examinationId, results).subscribe({
      next: (response) => {
        this.isSaving = false;
        if (response.status === 'success') {
          alert('Results saved successfully!');
          this.router.navigate(['/app/examinations/list']);
        } else {
          alert(response.message || 'Failed to save results');
        }
      },
      error: (error) => {
        this.isSaving = false;
        alert(error.error?.message || 'An error occurred');
      }
    });
  }

  calculateGrade(marks: number, maxMarks: number): string {
    if (!maxMarks) return '';
    const percentage = (marks / maxMarks) * 100;
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B+';
    if (percentage >= 60) return 'B';
    if (percentage >= 50) return 'C+';
    if (percentage >= 40) return 'C';
    return 'F';
  }

  getTotalMarks(student: any): number {
    let total = 0;
    this.subjects.forEach(subject => {
      const marks = student.results[subject.subject_id]?.marks_obtained || 0;
      total += marks;
    });
    return total;
  }

  getPercentage(student: any): number {
    let totalMarks = 0;
    let maxMarks = 0;
    this.subjects.forEach(subject => {
      const marks = student.results[subject.subject_id]?.marks_obtained || 0;
      const max = subject.max_marks || 100;
      totalMarks += marks;
      maxMarks += max;
    });
    return maxMarks > 0 ? Math.round((totalMarks / maxMarks) * 100) : 0;
  }

  getOverallGrade(student: any): string {
    const percentage = this.getPercentage(student);
    return this.calculateGrade(percentage, 100);
  }
}

