import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http: HttpClient) { }


  getStaffMembers(): Observable<any> {
    return this.http.get('assets/data/staff.json');
  }
}
