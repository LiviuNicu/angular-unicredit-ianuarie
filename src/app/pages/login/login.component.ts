import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDTO } from 'src/app/interfaces/login-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public isDisabled: boolean = false;
  public user: LoginDTO = {
    email: 'test@tes.com',
    password: '',
  };
  public error: boolean | string = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  doLogin() {
    this.error = false;
    console.log('Do login is clicked');
    console.log(this.user);

    if (this.user.email && this.user.password) {
      if (this.validateEmail(this.user.email)) {
        // redirect la dashboard
        this.router.navigate(['/dashboard']);
      } else {
        this.error = 'Email is not valid';
      }
    }
  }

  validateEmail(email: string) {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
      ? true
      : false;
  }
}
