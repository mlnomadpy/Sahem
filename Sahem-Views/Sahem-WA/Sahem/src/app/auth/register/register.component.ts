import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginForm: FormGroup;
  formError: string = '';
  credentials = {
    _id: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    exp: 0,
    iat: 0,
  };
  constructor(private router: Router, private formBuilder: FormBuilder, private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'username': new FormControl(this.credentials.username,
        [
          Validators.required,
          Validators.minLength(10)
        ]
      ),
      'email': new FormControl(this.credentials.email,
        [
          Validators.required,
          Validators.email
        ]
      ),
      'password': new FormControl(this.credentials.password,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ]
      ),
      'confirmPassword': new FormControl(this.credentials.confirmPassword,
        [
          Validators.required,
          Validators.minLength(10)
        ]
      ),

    });

  }
  onSubmit(value: any) {
    console.log(value);
  }
  public onRegisterSubmit(): void {
    this.formError = '';
    if (
      !this.credentials.username ||
      !this.credentials.email ||
      !this.credentials.password || this.credentials.password !== this.credentials.confirmPassword 
    ) {
      this.formError = 'All fields are required, please try again';
    } else {
      this.doRegister();
    }
  }
  private doRegister(): void {
    this.auth.register(this.credentials)
      .then(() => this.router.navigateByUrl('/'))
      .catch((message) => this.formError = message);
  }
}
