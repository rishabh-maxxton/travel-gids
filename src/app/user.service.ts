// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User {
  name: string;
  email: string;
  password: string;
  acceptTerms: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/signup';

  constructor(private http: HttpClient) {}

  signUp(user: User): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }
}
