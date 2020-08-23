import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  addMember(data) {
    this.http
      .post("http://localhost:3000/api/user", data)
      .subscribe((res) => console.log('Done'));
  }
}
