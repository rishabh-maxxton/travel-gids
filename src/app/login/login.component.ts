import { Component } from '@angular/core';
import { IUser } from '../iuser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public user!: IUser;

  ngOnInit(){
    this.user = {
      name: '',
      email: '',
      password: '',
      confirm_password: '',
      address: {
      state: '',
      city: '',
      postcode: '',
      },
      rememberMe: false,
      acceptTerms: false,
    };      
  }
  login(model: IUser, isValid: boolean) 
    { 
    console.log(model, isValid);
    } 


}
