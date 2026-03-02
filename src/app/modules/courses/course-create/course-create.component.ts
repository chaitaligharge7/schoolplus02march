import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CourseService } from "../../../shared/services/course.service";
import { AcademicYearService } from "../../../shared/services/academic-year.service";
import { ToastService } from "../../../shared/services/toast.service";
import { ClassService } from "../../../shared/services/class.service";
import { TeacherService } from "../../../shared/services/teacher.service";

@Component({
  selector: "app-course-create",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./course-create.component.html",
  styleUrls: ["./course-create.component.scss"],
})
export class CourseCreateComponent implements OnInit {
  courseForm: FormGroup;
  isEditMode = false;
  courseId: number | null = null;
  isLoading = false;
  isSaving = false;

  academicYears: any[] = [];
  classes: any[] = [];
  teachers: any[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private courseService: CourseService,
    private academicYearService: AcademicYearService,
    private toastService: ToastService,
    private classService: ClassService,
    private tecaherservice: TeacherService,
  ) {
    this.courseForm = this.fb.group({
      course_name: ["", Validators.required],
      course_code: [""],
      academic_year_id: [null, Validators.required],
      course_type: ["Regular", Validators.required],
      class_id: [null, Validators.required], // ✅ ADD THIS
      teacher_id: [null, Validators.required],

      start_date: [new Date().toISOString().split("T")[0], Validators.required],
      end_date: ["", Validators.required],
      max_students: [null],
      fee_amount: [null],
      status: ["active", Validators.required],
      course_description: [""],
    });
  }

  ngOnInit(): void {
    this.loadClasses();
    this.loadTeachers();

    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.courseId = +params["id"];
        this.loadCourse();
      }
    });

    this.loadAcademicYears();
  }

  loadAcademicYears(): void {
    this.academicYearService.getCurrentAcademicYearId().subscribe({
      next: (id) => {
        if (id != null) {
          this.courseForm.patchValue({ academic_year_id: id });
        }
      },
    });
  }

  loadCourse(): void {
    if (!this.courseId) return;

    this.isLoading = true;
    this.courseService.getCourses({ course_id: this.courseId }).subscribe({
      next: (response) => {
        if (
          response.status === "success" &&
          response.data?.courses?.length > 0
        ) {
          const course = response.data.courses[0];
          this.courseForm.patchValue({
            course_name: course.course_name,
            course_code: course.course_code,
            academic_year_id: course.academic_year_id,
            course_type: course.course_type,
            class_id:course.class_id,
            teacher_id:course.teacher_id,
            start_date: course.start_date,
            end_date: course.end_date,
            max_students: course.max_students,
            fee_amount: course.fee_amount,
            status: course.status,
            course_description: course.course_description,
          });
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error("Failed to load course details");
        this.isLoading = false;
      },
    });
  }

  // onSubmit(): void {
  //   if (this.courseForm.invalid) {
  //     this.courseForm.markAllAsTouched();
  //     return;
  //   }

  //   this.isSaving = true;
  //   const formData = this.courseForm.value;

  //   if (this.isEditMode && this.courseId) {
  //     formData.course_id = this.courseId;
  //   }

  //   this.courseService.createCourse(formData).subscribe({
  //     next: (response) => {
  //       if (response.status === "success") {
  //         this.toastService.success(
  //           `Course ${this.isEditMode ? "updated" : "created"} successfully`,
  //         );
  //         this.router.navigate(["/app/courses"]);
  //       } else {
  //         this.toastService.error(
  //           response.message ||
  //             `Failed to ${this.isEditMode ? "update" : "create"} course`,
  //         );
  //       }
  //       this.isSaving = false;
  //     },
  //     error: () => {
  //       this.toastService.error(
  //         `Failed to ${this.isEditMode ? "update" : "create"} course`,
  //       );
  //       this.isSaving = false;
  //     },
  //   });
  // }



onSubmit(): void {
  if (this.courseForm.invalid) {
    this.courseForm.markAllAsTouched();
    return;
  }

  this.isSaving = true;
  const formData = this.courseForm.value;

  // 🔥 If Edit Mode → call UPDATE API
  if (this.isEditMode && this.courseId) {
    formData.course_id = this.courseId;

    this.courseService.updateCourse(formData).subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.toastService.success("Course updated successfully");
          this.router.navigate(["/app/courses"]);
        } else {
          this.toastService.error(response.message || "Failed to update course");
        }
        this.isSaving = false;
      },
      error: (err) => {
        this.toastService.error(err?.error?.message || err?.message || "Failed to update course");
        this.isSaving = false;
      },
    });

  } else {
    // 🔥 If Create Mode → call CREATE API
    this.courseService.createCourse(formData).subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.toastService.success("Course created successfully");
          this.router.navigate(["/app/courses"]);
        } else {
          this.toastService.error(response.message || "Failed to create course");
        }
        this.isSaving = false;
      },
      error: (err) => {
        this.toastService.error(err?.error?.message || err?.message || "Failed to create course");
        this.isSaving = false;
      },
    });
  }
}












  cancel(): void {
    this.router.navigate(["/app/courses"]);
  }

  loadClasses(): void {
    this.classService.getClasses().subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.classes = response.data.classes || [];
        }
      },
    });
  }

  loadTeachers(): void {
    const params: any = {}; // or add filters here

    this.tecaherservice.getTeachers(params).subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.teachers = response.data?.teachers || [];
        }
      },
      error: (err) => {
        console.error("Failed to load teachers", err);
      },
    });
  }

  // this.teacherService.getTeachers(params).subscribe({
  //     next: (response) => {
  //       this.loading = false;
  //       if (response.status === 'success' && response.data) {
  //         this.teachers = response.data.teachers || [];
  //         this.pagination = response.data.pagination || this.pagination;
  //       }
  //     },
  //     error: (error) => {
  //       this.loading = false;
  //       console.error('Error loading teachers:', error);
  //       this.toastService.show('Error loading teachers', 'error');
  //     }
  //   });
}
