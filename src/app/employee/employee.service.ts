import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<any>{
    const url = 'http://localhost:57473/api/home';
    return this.http.get<any>(url);
  }

  getEmployeeById(id: number): Observable<any>{
    const url = 'http://localhost:57473/api/home/' + id;
    return this.http.get<any>(url);
  }

  updateEmployee(obj: any): Observable<any>{
    const url = 'http://localhost:57473/api/home/' + obj.EmployeeId;
    return this.http.put<any>(url, obj);
  }

  deleteEmployee(id: number): Observable<any>{
    const url = 'http://localhost:57473/api/home/' + id;
    return this.http.delete<any>(url);
  }
}
