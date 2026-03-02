import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getComplaints(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/complaints/list.php`, { params: httpParams });
  }
   getComplaintsId(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/complaints/get.php`, { params: httpParams });
  }

  createComplaint(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/complaints/create.php`, data);
  }

  updateComplaint(complaintId: number, data: any): Observable<any> {
  return this.http.put<any>(`${this.apiUrl}/complaints/update.php`, {
    complaint_id: complaintId,
    ...data
  });
}
deleteComplaint(complaintId: number): Observable<any> {
  return this.http.delete<any>(`${this.apiUrl}/complaints/delete.php`, {
    body: {
      complaint_id: complaintId
    }
  });
}


  forwardComplaint(complaintId: number, data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/complaints/forward.php`, {
      complaint_id: complaintId,
      ...data
    });
  }

  resolveComplaint(complaintId: number, data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/complaints/resolve.php`, {
      complaint_id: complaintId,
      ...data
    });
  }

  getComplaintCategories(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/complaints/categories.php`);
  }
   getCategoryById(categoryId: number): Observable<any> {
     return this.http.get<any>(
       `${this.apiUrl}/complaints/categories.php`,
       {
        params: new HttpParams().set('category_id', categoryId.toString())
       }
     );
   }
  createCategories(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/complaints/categories.php`, data);
  }
  updateComplaintCategory(
  categoryId: number,
  data: {
    category_name: string;
    category_status?: number;
  }
): Observable<any> {
  return this.http.put<any>(`${this.apiUrl}/complaints/category-update.php`, {
    category_id: categoryId,
    ...data
  });
}
deleteComplaintCategory(categoryId: number): Observable<any> {
  return this.http.delete<any>(`${this.apiUrl}/complaints/category-delete.php`, {
    body: { category_id: categoryId }
  });
}

}

