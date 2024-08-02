import { Component } from '@angular/core';
import { IUser } from '../iuser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  public user!: IUser; // our model

  constructor(private http: HttpClient) {}


  ngOnInit() {// we will initialize our form here
    this.user = {
    name: '',
    email: 'example@gmail.com',
    password: '',
    confirm_password: '',
    address: {
    state: '',
    city: '',
    postcode: '' // set default value to 8000
    },
    rememberMe: false,
    acceptTerms: false,
    };
    }
    save(model: IUser, isValid: boolean): void {
      if (isValid) {
        this.registerUser(model).subscribe(
          response => {
            alert("Register Successful");
            console.log(response);
          },
          error => {
            alert("Error");
            console.error(error);

          }
        );
      }
    }

    registerUser(model: IUser): Observable<any> {
      return this.http.post('http://localhost:5000/register', model);
    }
    
}
