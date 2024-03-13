import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  apiUrl = environment.apiUrl;
  private formatErrors(error: any) {
    return throwError(error.error);
  }

  constructor(
    private http: HttpClient
  ) { }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.apiUrl}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(`${environment.apiUrl}${path}`,
      JSON.stringify(body))
      .pipe(catchError(this.formatErrors));
  }
  
  update(path: string, body: Object = {}): Observable<any> {
    return this.http.post(`${environment.apiUrl}${path}`, JSON.stringify(body)).pipe(catchError(this.formatErrors));
  }
}