import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class HostelService {
  constructor(private http: HttpClient) {}

  getHostels(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/hostel/list.php`);
  }

  getHostel(hostelId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/hostel/get.php`, {
      params: { hostel_id: hostelId },
    });
  }

  createHostel(hostelData: any): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/hostel/create.php`,
      hostelData,
    );
  }

  updateHostel(hostelId: number, hostelData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/hostel/update.php`, {
      hostel_id: hostelId,
      ...hostelData,
    });
  }

  deleteHostel(hostelId: number): Observable<any> {
    return this.http.post(`${environment.apiUrl}/hostel/delete.php`, {
      hostel_id: hostelId,
    });
  }

  // getRooms(params: any): Observable<any> {
  //   let httpParams = new HttpParams();
  //   Object.keys(params).forEach(key => {
  //     if (params[key] !== null && params[key] !== '') {
  //       httpParams = httpParams.set(key, params[key].toString());
  //     }
  //   });
  //   return this.http.get(`${environment.apiUrl}/hostel/rooms.php`, { params: httpParams });
  // }

  getRooms(params: any): Observable<any> {
    let httpParams = new HttpParams();

    Object.keys(params).forEach((key) => {
      const value = params[key];

      // ✅ Skip null, undefined, empty & whitespace-only values
      if (
        value !== null &&
        value !== undefined &&
        value.toString().trim() !== ""
      ) {
        httpParams = httpParams.set(key, value.toString().trim());
      }
    });

    return this.http.get(`${environment.apiUrl}/hostel/rooms.php`, {
      params: httpParams,
    });
  }

  getRoom(roomId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/hostel/room-get.php`, {
      params: { room_id: roomId },
    });
  }

  createRoom(roomData: any): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/hostel/room-create.php`,
      roomData,
    );
  }

  updateRoom(roomId: number, roomData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/hostel/room-update.php`, {
      room_id: roomId,
      ...roomData,
    });
  }

  deleteRoom(roomId: number): Observable<any> {
    return this.http.post(`${environment.apiUrl}/hostel/room-delete.php`, {
      room_id: roomId,
    });
  }
}
