import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  constructor(private http: HttpClient) {}

  getCertificates(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      if (params[key] !== null && params[key] !== '') {
        httpParams = httpParams.set(key, params[key].toString());
      }
    });
    return this.http.get(`${environment.apiUrl}/certificates/list.php`, { params: httpParams });
  }

  getCertificate(certificateId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/certificates/get.php`, {
      params: { certificate_id: certificateId }
    });
  }

  createCertificate(certificateData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/certificates/create.php`, certificateData);
  }

  updateCertificate(certificateId: number, certificateData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/certificates/update.php`, {
      certificate_id: certificateId,
      ...certificateData
    });
  }

  deleteCertificate(certificateId: number): Observable<any> {
    return this.http.post(`${environment.apiUrl}/certificates/delete.php`, {
      certificate_id: certificateId
    });
  }

  generateCertificate(certificateId: number): Observable<Blob> {
    return this.http.get(`${environment.apiUrl}/certificates/generate.php`, {
      params: { certificate_id: certificateId },
      responseType: 'blob'
    });
  }
}

