import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl=environment.apiUrl;

  constructor( private http: HttpClient) { 
   
  }

  createUser(data:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/users/`,data);
  }

   getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/users/`);
  }

} 