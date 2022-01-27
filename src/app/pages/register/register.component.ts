import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public myForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  doRegister() {
    console.log(this.myForm);
    if (this.myForm.valid) {
      this.goToLogin();
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
