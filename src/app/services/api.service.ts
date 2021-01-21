import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(public http: HttpClient) {}

  login(): Observable<any> {
    return this.http.post<any>(
      `${environment.API_URL}/login`, null
      );
  }

  logout(): Observable<any> {
    return this.http.post<any>(
      `${environment.API_URL}/login`, null
      );
  }

  getDashboard(): Observable<any> {
    return this.http.get<any>(
      `${environment.API_URL}/dashboard`
      );
  }

  getTimeline(): Observable<any[]> {
    return this.http.get<any[]>(
      `${environment.API_URL}/timeline`
      );
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(
      `${environment.API_URL}/users`
      );
  }

  sendClap(clapPayload: object): Observable<void> {
    return this.http.post<void>(
      `${environment.API_URL}/sendClap`, clapPayload
      );
  }
}
