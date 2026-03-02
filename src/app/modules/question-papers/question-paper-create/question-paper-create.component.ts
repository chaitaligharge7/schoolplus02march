import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionPaperService } from '../../../shared/services/question-paper.service';
import { AcademicYearService } from '../../../shared/services/academic-year.service';
import { ClassService } from '../../../shared/services/class.service';
import { SubjectService } from '../../../shared/services/subject.service';
import { ExamTypeService } from '../../../shared/services/exam-type.service';
import { ToastService } from '../../../shared/services/toast.service';
import { SyllabusService } from '../../../shared/services/syllabus.service';

@Component({
  selector: 'app-question-paper-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './question-paper-create.component.html',
  styleUrls: ['./question-paper-create.component.scss']
})
export class QuestionPaperCreateComponent implements OnInit {
  paperForm: FormGroup;
  isEditMode = false;
  paperId: number | null = null;
  isLoading = false;
  isSaving = false;
  selectedFile: File | null = null;
  filePreview: string | null = null;
  
  academicYears: any[] = [];
  classes: any[] = [];
  subjects: any[] = [];
  examTypes: any[] = [];
chapters: any[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private questionPaperService: QuestionPaperService,
    private academicYearService: AcademicYearService,
    private classService: ClassService,
    private syllabusService: SyllabusService,
    private subjectService: SubjectService,
    private examTypeService: ExamTypeService,
    private toastService: ToastService
  ) {
    this.paperForm = this.fb.group({
      paper_title: ['', Validators.required],
      academic_year_id: [null, Validators.required],
      class_id: [null, Validators.required],
      subject_id: [null, Validators.required],
      exam_type_id: [null, Validators.required],
      total_marks: [null, Validators.required],
      duration_minutes: [null],
      paper_file: [null],
      status: ['draft', Validators.required],
      description: [''],
       chapter_id: [null],
       marks_allocation: [null],

  chapters: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.paperId = +params['id'];
        this.loadPaper();
      }
    });
    
    this.loadAcademicYears();
    this.loadClasses();
    this.loadSubjects();
    this.loadExamTypes();
     // ✅ Add one blank chapter row by default
  // if (this.chaptersArray.length === 0) {
  //   this.addChapter();
  // }
  }

  loadChapters(classId: number, subjectId: number): void {
    this.syllabusService.getSyllabus({
      class_id: classId,
      subject_id: subjectId
    }).subscribe({
      next: (res: any) => {
        if (res.status === 'success' && res.data?.syllabus?.length) {
          const syllabus = res.data.syllabus[0];

          this.chapters = (syllabus.chapters || []).map((ch: any) => ({
            chapter_id: ch.chapter_id,
            chapter_name: ch.chapter_name
          }));
        } else {
          this.chapters = [];
        }
      },
      error: () => {
        this.chapters = [];
      }
    });
  }

  onSubjectChange(): void {
    this.paperForm.patchValue({
      chapter_id: null
    });

    this.chapters = [];

    const classId = this.paperForm.get('class_id')?.value;
    const subjectId = this.paperForm.get('subject_id')?.value;

    if (classId && subjectId) {
      this.loadChapters(classId, subjectId);
    }
  }

  onClassChange(): void {
    this.paperForm.patchValue({
      subject_id: null,
      chapter_id: null
    });

    this.subjects = [];
    this.chapters = [];

    const classId = this.paperForm.get('class_id')?.value;

    if (classId) {
      this.classService.getClassSubjects(classId).subscribe({
        next: (res: any) => {
          if (res.status === 'success' && res.data?.subjects) {
            this.subjects = res.data.subjects;
          }
        }
      });
    }
  }

  loadAcademicYears(): void {
    this.academicYearService.getCurrentAcademicYearId().subscribe({
      next: (id) => {
        if (id != null) {
          this.paperForm.patchValue({ academic_year_id: id });
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

  loadSubjects(): void {
    this.subjectService.getSubjects().subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.subjects = response.data.subjects || [];
        }
      }
    });
  }

  loadExamTypes(): void {
    this.examTypeService.getExamTypes().subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.examTypes = response.data.exam_types || [];
        }
      }
    });
  }

loadPaper(): void {
  if (!this.paperId) return;

  console.log('Loading paper with ID:', this.paperId);
  this.isLoading = true;

  this.questionPaperService.getQuestionPapers({ paper_id: this.paperId }).subscribe({
    next: (response) => {
      console.log('Response from getQuestionPapers:', response);

      if (response.status === 'success' && response.data?.papers?.length > 0) {
        // Find the paper that matches the current paperId
        const paper = response.data.papers.find((p: any) => p.paper_id === this.paperId);

        if (!paper) {
          console.warn('Paper with ID', this.paperId, 'not found in response');
          this.isLoading = false;
          return;
        }

        console.log('Paper data retrieved:', paper);

        // Patch main form values
        this.paperForm.patchValue({
          paper_title: paper.paper_title,
          academic_year_id: paper.academic_year_id,
          class_id: paper.class_id,
          subject_id: paper.subject_id,
          exam_type_id: paper.exam_type_id,
          total_marks: paper.total_marks,
          duration_minutes: paper.duration_minutes,
          status: paper.status,
          description: paper.description
        });
        console.log('Form patched with main paper values');

        // Load chapters for the class & subject
        console.log('Loading chapters for class_id:', paper.class_id, 'subject_id:', paper.subject_id);
        this.loadChapters(paper.class_id, paper.subject_id);

        // Patch chapters FormArray after a short delay to ensure this.chapters is populated
        setTimeout(() => {
          if (paper.chapters && paper.chapters.length > 0) {
            console.log('Patching chapters FormArray with:', paper.chapters);
            const chaptersFGs = paper.chapters.map((ch: any) =>
              this.fb.group({
                chapter_id: ch.chapter_id,
                chapter_name: ch.chapter_name,
                marks_allocation: ch.marks_allocation
              })
            );
            const chaptersFormArray = this.fb.array(chaptersFGs);
            this.paperForm.setControl('chapters', chaptersFormArray);
            console.log('Chapters FormArray patched');
          } else {
            console.log('No chapters to patch');
          }
        }, 100);

        // Set file preview if exists
        if (paper.paper_file) {
          this.filePreview = paper.paper_file;
          console.log('File preview set to:', this.filePreview);
        }

      } else {
        console.warn('No papers found in response');
      }

      this.isLoading = false;
    },
    error: (err) => {
      console.error('Error loading paper:', err);
      this.toastService.error('Failed to load question paper details');
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
      this.paperForm.patchValue({ paper_file: file });
      
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

  // getter for FormArray
  get chaptersArray(): FormArray {
    return this.paperForm.get('chapters') as FormArray;
  }

  // Add Chapter
  addChapter(): void {
    this.chaptersArray.push(this.fb.group({
      chapter_id: [null],
      chapter_name: [''],
      marks_allocation: [null]
    }));
  }


  // Remove Chapter
  removeChapter(index: number): void {
    this.chaptersArray.removeAt(index);
  }
  onChapterSelect(event: any, index: number): void {
    const selectedId = event.target.value;
    const chapter = this.chapters.find(c => c.chapter_id == selectedId);

    if (chapter) {
      this.chaptersArray.at(index).patchValue({
        chapter_name: chapter.chapter_name
      });
    } else {
      this.chaptersArray.at(index).patchValue({
        chapter_name: ''
      });
    }
  }

  onSubmit(): void {
    if (this.paperForm.invalid) {
      this.paperForm.markAllAsTouched();
      console.log('Form is invalid', this.paperForm.value);
      return;
    }

    if (this.chaptersArray.length === 0) {
      this.toastService.error('Please add at least one chapter');
      console.log('No chapters added');
      return;
    }

    // 🔥 Sync chapter_name before submit (important)
    this.chaptersArray.controls.forEach((ch: any, index: number) => {
      const selectedChapter = this.chapters.find(c => c.chapter_id == ch.value.chapter_id);
      ch.patchValue({
        chapter_name: selectedChapter ? selectedChapter.chapter_name : ''
      });
    });

    console.log('Chapters before FormData append:', this.chaptersArray.value);

    this.isSaving = true;
    const formData = new FormData();
    const formValue = this.paperForm.value;

    // Append main fields (skip FormArray + file separately)
    Object.keys(formValue).forEach(key => {
      if (
        key !== 'paper_file' &&
        key !== 'chapters' &&
        formValue[key] !== null &&
        formValue[key] !== ''
      ) {
        formData.append(key, formValue[key]);
        console.log(`Appending field: ${key} = ${formValue[key]}`);
      }
    });

    // Append file if selected
    if (this.selectedFile) {
      formData.append('paper_file', this.selectedFile);
      console.log('Appending selected file:', this.selectedFile.name);
    }

    // Append FormArray chapters properly
    this.chaptersArray.controls.forEach((ch: any, index: number) => {
      console.log(`Appending chapter ${index}:`, ch.value);
      formData.append(`chapters[${index}][chapter_id]`, ch.value.chapter_id ?? '');
      formData.append(`chapters[${index}][chapter_name]`, ch.value.chapter_name ?? '');
      formData.append(`chapters[${index}][marks_allocation]`, ch.value.marks_allocation ?? '');
    });

    // If editing
    if (this.isEditMode && this.paperId) {
      formData.append('paper_id', this.paperId.toString());
      console.log('Editing paper_id:', this.paperId);
    }

    // API Call
    const request = this.isEditMode && this.paperId
      ? this.questionPaperService.updateQuestionPaper(this.paperId, formData)
      : this.questionPaperService.createQuestionPaper(formData);

    request.subscribe({
      next: (response) => {
        console.log('API response:', response);
        if (response.status === 'success') {
          this.toastService.success(
            this.isEditMode
              ? 'Question paper updated successfully'
              : 'Question paper created successfully'
          );
          this.router.navigate(['/app/question-papers']);
        } else {
          this.toastService.error(response.message || 'Operation failed');
        }
        this.isSaving = false;
      },
      error: (err) => {
        console.error('API error:', err);
        this.toastService.error('Operation failed');
        this.isSaving = false;
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/app/question-papers']);
  }
}

