import { Injectable } from '@angular/core';
import { environment } from 'src/env/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL: string = environment.api;

@Injectable({
  providedIn: 'root',
})
export class ProspectsService {
  constructor(private http: HttpClient) {}

  getProspects = (): Observable<any> => {
    let url = `${API_URL}/api/prospects`;
    return this.http.get(url);
  };

  updateProspect = (params: any): Observable<any> => {
    let url = `${API_URL}/api/prospects`;
    return this.http.put(url, params);
  };

  newProspect = (params: any): Observable<any> => {
    let url = `${API_URL}/api/prospects`;
    return this.http.post(url, params);
  };
}
