import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:7169/api/User';

  register(user: any) {
    var body = {
      fullname: user.fullName,
      username: user.username,
      email: user.email,
      password: user.password
    }

    return this.http.post<any>(this.BaseURI + '/Register', body);
  }

  login(formData: any) {
    return this.http.post(this.BaseURI + '/Login', formData);
  }
}
