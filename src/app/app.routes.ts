import { Routes } from '@angular/router';
import { LoginComponent } from './shared/auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { FullComponent } from './layouts/full/full.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'enquiry',
    loadComponent: () => import('./pages/public-enquiry/public-enquiry.component').then(m => m.PublicEnquiryComponent)
  },
  {
    path: 'app',
    component: FullComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'settings',
        loadComponent: () => import('./pages/settings/settings.component').then(m => m.SettingsComponent)
      },
      {
        path: 'students',
        loadChildren: () => import('./modules/students/students.routes').then(m => m.StudentsRoutes)
      },
      {
        path: 'teachers',
        loadChildren: () => import('./modules/teachers/teachers.routes').then(m => m.TeachersRoutes)
      },
      {
        path: 'attendance',
        loadChildren: () => import('./modules/attendance/attendance.routes').then(m => m.AttendanceRoutes)
      },
      {
        path: 'examinations',
        loadChildren: () => import('./modules/examinations/examinations.routes').then(m => m.ExaminationsRoutes)
      },
      {
        path: 'fees',
        loadChildren: () => import('./modules/fees/fees.routes').then(m => m.FeesRoutes)
      },
      {
        path: 'notices',
        loadChildren: () => import('./modules/notices/notices.routes').then(m => m.NoticesRoutes)
      },
      {
        path: 'library',
        loadChildren: () => import('./modules/library/library.routes').then(m => m.LibraryRoutes)
      },
      {
        path: 'transport',
        loadChildren: () => import('./modules/transport/transport.routes').then(m => m.TransportRoutes)
      },
      {
        path: 'reports',
        loadComponent: () => import('./modules/reports/reports.component').then(m => m.ReportsComponent)
      },
      {
        path: 'users',
        loadChildren: () => import('./modules/users/users.routes').then(m => m.UsersRoutes)
      },
      {
        path: 'timetable',
        loadChildren: () => import('./modules/timetable/timetable.routes').then(m => m.TimetableRoutes)
      },
      {
        path: 'homework',
        loadChildren: () => import('./modules/homework/homework.routes').then(m => m.HomeworkRoutes)
      },
      {
        path: 'calendar',
        loadChildren: () => import('./modules/calendar/calendar.routes').then(m => m.CalendarRoutes)
      },
      {
        path: 'events',
        loadChildren: () => import('./modules/events/events.routes').then(m => m.EventsRoutes)
      },
      {
        path: 'hostel',
        loadChildren: () => import('./modules/hostel/hostel.routes').then(m => m.HostelRoutes)
      },
      {
        path: 'certificates',
        loadChildren: () => import('./modules/certificates/certificates.routes').then(m => m.CertificatesRoutes)
      },
      {
        path: 'academic-years',
        loadChildren: () => import('./modules/academic-years/academic-years.routes').then(m => m.ACADEMIC_YEARS_ROUTES)
      },
      {
        path: 'classes',
        loadChildren: () => import('./modules/classes/classes.routes').then(m => m.CLASSES_ROUTES)
      },
      {
        path: 'sections',
        loadChildren: () => import('./modules/sections/sections.routes').then(m => m.SECTIONS_ROUTES)
      },
      {
        path: 'subjects',
        loadChildren: () => import('./modules/subjects/subjects.routes').then(m => m.SUBJECTS_ROUTES)
      },
      {
        path: 'departments',
        loadChildren: () => import('./modules/departments/departments.routes').then(m => m.DEPARTMENTS_ROUTES)
      },
      {
        path: 'designations',
        loadChildren: () => import('./modules/designations/designations.routes').then(m => m.DESIGNATIONS_ROUTES)
      },
      {
        path: 'periods',
        loadChildren: () => import('./modules/periods/periods.routes').then(m => m.PERIODS_ROUTES)
      },
      {
        path: 'fee-groups',
        loadChildren: () => import('./modules/fee-groups/fee-groups.routes').then(m => m.FEE_GROUPS_ROUTES)
      },
      {
        path: 'fee-types',
        loadChildren: () => import('./modules/fee-types/fee-types.routes').then(m => m.FEE_TYPES_ROUTES)
      },
      {
        path: 'exam-types',
        loadChildren: () => import('./modules/exam-types/exam-types.routes').then(m => m.EXAM_TYPES_ROUTES)
      },
      {
        path: 'attendance-types',
        loadChildren: () => import('./modules/attendance-types/attendance-types.routes').then(m => m.ATTENDANCE_TYPES_ROUTES)
      },
      {
        path: 'marksheets',
        loadChildren: () => import('./modules/marksheets/marksheets.routes').then(m => m.MARKSHEET_ROUTES)
      },
      {
        path: 'syllabus',
        loadChildren: () => import('./modules/syllabus/syllabus.routes').then(m => m.SYLLABUS_ROUTES)
      },
      {
        path: 'enquiries',
        loadChildren: () => import('./modules/enquiries/enquiries.routes').then(m => m.ENQUIRY_ROUTES)
      },
      {
        path: 'admissions',
        loadChildren: () => import('./modules/admissions/admissions.routes').then(m => m.ADMISSION_ROUTES)
      },
      {
        path: 'documents',
        loadChildren: () => import('./modules/documents/documents.routes').then(m => m.DOCUMENT_ROUTES)
      },
      {
        path: 'classwork',
        loadChildren: () => import('./modules/classwork/classwork.routes').then(m => m.CLASSWORK_ROUTES)
      },
      {
        path: 'sms',
        loadChildren: () => import('./modules/sms/sms.routes').then(m => m.SMS_ROUTES)
      },
      {
        path: 'whatsapp',
        loadChildren: () => import('./modules/whatsapp/whatsapp.routes').then(m => m.WHATSAPP_ROUTES)
      },
      {
        path: 'promotions',
        loadChildren: () => import('./modules/promotions/promotions.routes').then(m => m.PROMOTIONS_ROUTES)
      },
      {
        path: 'visitors',
        loadChildren: () => import('./modules/visitors/visitors.routes').then(m => m.VISITORS_ROUTES)
      },
      {
        path: 'complaints',
        loadChildren: () => import('./modules/complaints/complaints.routes').then(m => m.COMPLAINTS_ROUTES)
      },
      {
        path: 'unit-test-marks',
        loadChildren: () => import('./modules/unit-test-marks/unit-test-marks.routes').then(m => m.UNIT_TEST_MARKS_ROUTES)
      },
      {
        path: 'uniform-distribution',
        loadChildren: () => import('./modules/uniform-distribution/uniform-distribution.routes').then(m => m.UNIFORM_DISTRIBUTION_ROUTES)
      },
      {
        path: 'book-distribution',
        loadChildren: () => import('./modules/book-distribution/book-distribution.routes').then(m => m.BOOK_DISTRIBUTION_ROUTES)
      },
      {
        path: 'id-cards',
        loadChildren: () => import('./modules/id-cards/id-cards.routes').then(m => m.ID_CARDS_ROUTES)
      },
      {
        path: 'rte-students',
        loadChildren: () => import('./modules/rte-students/rte-students.routes').then(m => m.RTE_STUDENTS_ROUTES)
      },
      {
        path: 'mess-schedules',
        loadChildren: () => import('./modules/mess-schedules/mess-schedules.routes').then(m => m.MESS_SCHEDULES_ROUTES)
      },
      {
        path: 'courses',
        loadChildren: () => import('./modules/courses/courses.routes').then(m => m.COURSES_ROUTES)
      },
      {
        path: 'study-progress',
        loadChildren: () => import('./modules/study-progress/study-progress.routes').then(m => m.STUDY_PROGRESS_ROUTES)
      },
      {
        path: 'student-participation',
        loadChildren: () => import('./modules/student-participation/student-participation.routes').then(m => m.STUDENT_PARTICIPATION_ROUTES)
      },
      {
        path: 'committees',
        loadChildren: () => import('./modules/committees/committees.routes').then(m => m.COMMITTEES_ROUTES)
      },
      {
        path: 'remedial',
        loadChildren: () => import('./modules/remedial/remedial.routes').then(m => m.REMEDIAL_ROUTES)
      },
      {
        path: 'question-papers',
        loadChildren: () => import('./modules/question-papers/question-papers.routes').then(m => m.QUESTION_PAPERS_ROUTES)
      },
      {
        path: 'important-notes',
        loadChildren: () => import('./modules/important-notes/important-notes.routes').then(m => m.IMPORTANT_NOTES_ROUTES)
      },
      {
        path: 'uniform-fines',
        loadChildren: () => import('./modules/uniform-fines/uniform-fines.routes').then(m => m.UNIFORM_FINES_ROUTES)
      },
      {
        path: 'mess-complaints',
        loadChildren: () => import('./modules/mess-complaints/mess-complaints.routes').then(m => m.MESS_COMPLAINTS_ROUTES)
      },
      {
        path: 'water-tds',
        loadChildren: () => import('./modules/water-tds/water-tds.routes').then(m => m.WATER_TDS_ROUTES)
      },
      {
        path: 'food-calendar',
        loadChildren: () => import('./modules/food-calendar/food-calendar.routes').then(m => m.FOOD_CALENDAR_ROUTES)
      },
      {
        path: 'cctv',
        loadChildren: () => import('./modules/cctv/cctv.routes').then(m => m.CCTV_ROUTES)
      },
      {
        path: 'bus-documents',
        loadChildren: () => import('./modules/bus-documents/bus-documents.routes').then(m => m.BUS_DOCUMENTS_ROUTES)
      },
      {
        path: 'cleaning',
        loadChildren: () => import('./modules/cleaning/cleaning.routes').then(m => m.CLEANING_ROUTES)
      },
      {
        path: 'staff-allotment',
        loadChildren: () => import('./modules/staff-allotment/staff-allotment.routes').then(m => m.STAFF_ALLOTMENT_ROUTES)
      },
      {
        path: 'lab',
        loadChildren: () => import('./modules/lab/lab.routes').then(m => m.LAB_ROUTES)
      },
      {
        path: 'inward-requests',
        loadChildren: () => import('./modules/inward-requests/inward-requests.routes').then(m => m.INWARD_REQUESTS_ROUTES)
      },
      {
        path: 'birthday',
        loadChildren: () => import('./modules/birthday/birthday.routes').then(m => m.BIRTHDAY_ROUTES)
      },
      {
        path: 'charts',
        loadChildren: () => import('./modules/charts/charts.routes').then(m => m.CHARTS_ROUTES)
      },
      {
        path: 'connect-us',
        loadChildren: () => import('./modules/connect-us/connect-us.routes').then(m => m.ConnectUsRoutes)
      },
      {
        path: 'leave-management',
        loadChildren: () => import('./modules/leave-management/leave-management.routes').then(m => m.LEAVE_MANAGEMENT_ROUTES)
      },
      {
        path: 'branches',
        loadChildren: () => import('./modules/branches/branches.routes').then(m => m.BRANCHES_ROUTES)
      },
      {
        path: 'doubt-handling',
        loadChildren: () => import('./modules/doubt-handling/doubt-handling.routes').then(m => m.DOUBT_HANDLING_ROUTES)
      },
      {
        path: 'teaching-plan',
        loadChildren: () => import('./modules/teaching-plan/teaching-plan.routes').then(m => m.TEACHING_PLAN_ROUTES)
      },
      {
        path: 'digital-notes',
        loadChildren: () => import('./modules/digital-notes/digital-notes.routes').then(m => m.DIGITAL_NOTES_ROUTES)
      },
      {
        path: 'cms',
        loadChildren: () => import('./modules/cms/cms.routes').then(m => m.CMS_ROUTES)
      },
      {
        path: 'support-feedback',
        loadChildren: () => import('./modules/support-feedback/support-feedback.routes').then(m => m.SUPPORT_FEEDBACK_ROUTES)
      },
      {
        path: 'sports',
        loadChildren: () => import('./modules/sports/sports.routes').then(m => m.SPORTS_ROUTES)
      },
      {
        path: 'approvals',
        loadComponent: () => import('./pages/approvals/approvals.component').then(m => m.ApprovalsComponent)
      },
      {
        path: 'student-performance',
        loadComponent: () => import('./pages/student-performance/student-performance.component').then(m => m.StudentPerformanceComponent)
      },
      {
        path: 'security-guard',
        loadChildren: () => import('./modules/security-guard/security-guard.routes').then(m => m.SECURITY_GUARD_ROUTES)
      },
      {
        path: 'counselor',
        loadChildren: () => import('./modules/counselor/counselor.routes').then(m => m.COUNSELOR_ROUTES)
      },
      {
        path: 'receptionist',
        loadChildren: () => import('./modules/receptionist/receptionist.routes').then(m => m.RECEPTIONIST_ROUTES)
      },
      {
        path: 'teacher-profile',
        loadComponent: () => import('./pages/teacher-profile/teacher-profile.component').then(m => m.TeacherProfileComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

