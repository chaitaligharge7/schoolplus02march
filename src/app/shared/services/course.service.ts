import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class CourseService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCourses(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (
          params[key] !== null &&
          params[key] !== undefined &&
          params[key] !== ""
        ) {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/courses/list.php`, {
      params: httpParams,
    });
  }

  createCourse(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/courses/list.php`, data);
  }

  getEnrollments(courseId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/courses/enrollments.php`, {
      params: { course_id: courseId },
    });
  }

  enrollStudent(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/courses/enrollments.php`, data);
  }

  withdrawStudent(enrollmentId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/courses/enrollments.php`, {
      body: { enrollment_id: enrollmentId },
    });
  }

  updateCourse(data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/courses/update.php`, data);
  }

  deleteCourse(courseId: number) {
    return this.http.delete<any>(`${this.apiUrl}/courses/delete.php`, {
      body: { course_id: courseId },
    });
  }
}
