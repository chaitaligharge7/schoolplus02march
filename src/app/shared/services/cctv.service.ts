import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class CctvService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCctvList(params?: any): Observable<any> {
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
    return this.http.get<any>(`${this.apiUrl}/cctv/list.php`, {
      params: httpParams,
    });
  }

  createCctv(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/cctv/list.php`, data);
  }

  // checkCctvStatus(cctvId: number): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/cctv/check.php`, { cctv_id: cctvId });
  // }

  checkCctvStatus(cameraId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/cctv/check.php`, {
      camera_id: cameraId,
      check_date: new Date().toISOString().split("T")[0],
      check_status: "checked",
    });
  }

  updateCctv(data: any) {
    return this.http.put<any>(`${this.apiUrl}/cctv/list.php`, data);
  }

  // deleteCctv(cameraId: number): Observable<any> {
  //   const headers = new HttpHeaders({
  //     "Content-Type": "application/json",
  //   });

  //   const body = { camera_id: cameraId };

  //   return this.http.("DELETE", `${this.apiUrl}/cctv/delete.php`, {
  //     body,
  //     headers,
  //   });
  // }

  deleteCctv(cameraId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/cctv/delete.php`, {
      body: { camera_id: cameraId },
    });
  }
}
